import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service')({
  component: () => <div>Hello /service!</div>
})