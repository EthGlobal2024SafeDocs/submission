import { DocumentPage } from '@/app/Documents/DocumentPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/documents')({
  component: DocumentPage
})