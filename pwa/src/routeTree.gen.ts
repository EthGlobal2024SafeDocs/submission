/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as Import } from './routes/_'
import { Route as IndexImport } from './routes/_/index'
import { Route as RegisterImport } from './routes/_/register'
import { Route as AuthSharedIndexImport } from './routes/_auth/shared/index'
import { Route as AuthDocumentsIndexImport } from './routes/_auth/documents/index'
import { Route as AuthSharedAttestationIdImport } from './routes/_auth/shared/$attestationId'
import { Route as AuthDocumentsNewImageImport } from './routes/_auth/documents/newImage'
import { Route as AuthDocumentsNewImport } from './routes/_auth/documents/new'
import { Route as AuthDocumentsDocumentIdImport } from './routes/_auth/documents/$documentId'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const Route = Import.update({
  id: '/_',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => Route,
} as any)

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => Route,
} as any)

const AuthSharedIndexRoute = AuthSharedIndexImport.update({
  path: '/shared/',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDocumentsIndexRoute = AuthDocumentsIndexImport.update({
  path: '/documents/',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSharedAttestationIdRoute = AuthSharedAttestationIdImport.update({
  path: '/shared/$attestationId',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDocumentsNewImageRoute = AuthDocumentsNewImageImport.update({
  path: '/documents/newImage',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDocumentsNewRoute = AuthDocumentsNewImport.update({
  path: '/documents/new',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDocumentsDocumentIdRoute = AuthDocumentsDocumentIdImport.update({
  path: '/documents/$documentId',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof Import
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '//register': {
      id: '//register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '//': {
      id: '//'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth/documents/$documentId': {
      id: '/_auth/documents/$documentId'
      path: '/documents/$documentId'
      fullPath: '/documents/$documentId'
      preLoaderRoute: typeof AuthDocumentsDocumentIdImport
      parentRoute: typeof AuthImport
    }
    '/_auth/documents/new': {
      id: '/_auth/documents/new'
      path: '/documents/new'
      fullPath: '/documents/new'
      preLoaderRoute: typeof AuthDocumentsNewImport
      parentRoute: typeof AuthImport
    }
    '/_auth/documents/newImage': {
      id: '/_auth/documents/newImage'
      path: '/documents/newImage'
      fullPath: '/documents/newImage'
      preLoaderRoute: typeof AuthDocumentsNewImageImport
      parentRoute: typeof AuthImport
    }
    '/_auth/shared/$attestationId': {
      id: '/_auth/shared/$attestationId'
      path: '/shared/$attestationId'
      fullPath: '/shared/$attestationId'
      preLoaderRoute: typeof AuthSharedAttestationIdImport
      parentRoute: typeof AuthImport
    }
    '/_auth/documents/': {
      id: '/_auth/documents/'
      path: '/documents'
      fullPath: '/documents'
      preLoaderRoute: typeof AuthDocumentsIndexImport
      parentRoute: typeof AuthImport
    }
    '/_auth/shared/': {
      id: '/_auth/shared/'
      path: '/shared'
      fullPath: '/shared'
      preLoaderRoute: typeof AuthSharedIndexImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  Route: Route.addChildren({ RegisterRoute, IndexRoute }),
  AuthRoute: AuthRoute.addChildren({
    AuthDocumentsDocumentIdRoute,
    AuthDocumentsNewRoute,
    AuthDocumentsNewImageRoute,
    AuthSharedAttestationIdRoute,
    AuthDocumentsIndexRoute,
    AuthSharedIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "_.tsx",
      "children": [
        "//register",
        "//"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/documents/$documentId",
        "/_auth/documents/new",
        "/_auth/documents/newImage",
        "/_auth/shared/$attestationId",
        "/_auth/documents/",
        "/_auth/shared/"
      ]
    },
    "//register": {
      "filePath": "_/register.tsx",
      "parent": "/"
    },
    "//": {
      "filePath": "_/index.tsx",
      "parent": "/"
    },
    "/_auth/documents/$documentId": {
      "filePath": "_auth/documents/$documentId.tsx",
      "parent": "/_auth"
    },
    "/_auth/documents/new": {
      "filePath": "_auth/documents/new.tsx",
      "parent": "/_auth"
    },
    "/_auth/documents/newImage": {
      "filePath": "_auth/documents/newImage.tsx",
      "parent": "/_auth"
    },
    "/_auth/shared/$attestationId": {
      "filePath": "_auth/shared/$attestationId.tsx",
      "parent": "/_auth"
    },
    "/_auth/documents/": {
      "filePath": "_auth/documents/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/shared/": {
      "filePath": "_auth/shared/index.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
