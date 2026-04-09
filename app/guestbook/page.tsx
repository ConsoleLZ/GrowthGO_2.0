import { Metadata } from 'next'
import { GuestbookClient } from './guestbook-client'

export const metadata: Metadata = {
  title: '留言板',
  description: '欢迎留言，我会尽快回复大家！',
}

export default function GuestbookPage() {
  return <GuestbookClient />
}