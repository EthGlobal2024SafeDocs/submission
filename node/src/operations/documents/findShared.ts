// GET /documents

import { Response } from 'express';
import { Request } from 'express-jwt';
import { ObjectId } from 'mongodb';

import { collections } from '../../services/database.services';
import Document from '../../models/document';
import Share from '../../models/share';
import Wallet from '../../models/wallet';
import PRE from '../../lib';
import _ from 'lodash';
import { GetAttestation } from '../../services/sign-protocol';

export const FindSharedDocumentHandler = async (req: Request, res: Response) => {
    // Get sub from auth
    const { sub } = req.auth!;

    // Check if wallet exists
    const wallet = (await collections.wallets?.findOne({
        _id: new ObjectId(sub),
    })) as Wallet;

    if (!wallet) {
        console.log('error body is null:', req.body);
        res.status(400).send('Invalid request!');
        return;
    }

    // Get current timestamp
    const currentTime = Math.round(Date.now() / 1000);

    // Find and return shared documents

    const shared = await collections.shared
        ?.find<Share>(
            {
                $and: [{ recipient_wallet_id: new ObjectId(sub) }, { valid_until: { $gt: currentTime } }],
            },
            { batchSize: 1000 }
        )
        .toArray();

    // Check if documents are expired and map to documents
    if (!shared) {
        res.status(404).send('No shared documents');
        return;
    }

    const documentIds = shared.map((i) => i.document_id);

    const documents = await collections.documents
        ?.find<Document>(
            {
                _id: { $in: documentIds },
            },
            { batchSize: documentIds.length }
        )
        .toArray();

    console.log('all shared', shared);

    const docs = await Promise.all(
        documents!.map(async (d) => {

            // get the attestation id
            const matched = shared.filter((i) => i.document_id.equals(d._id));
            console.log('document:', matched);
            const latest = _.last(_.sortBy(matched, (x) => x.attestation_id));
            if (!latest) return;

            const attestation = await GetAttestation(latest.attestation_id);
            const { proxy } = attestation.data as any;

            let v = d.payload;
            PRE.reEncryption(proxy, v);

            const { document_type, _id: document_id } = d;
            const { attestation_id } = latest;
            return { attestation_id, document_type, document_id, payload: { ...v } };
        })
    );

    res.status(200).send(docs);
};
