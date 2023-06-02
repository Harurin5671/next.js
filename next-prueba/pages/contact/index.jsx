import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1>Contact</h1>
        <h1>
          Ir a<Link href="/about"> Contact</Link>
        </h1>
      </MainLayout>
    </>
  )
}
