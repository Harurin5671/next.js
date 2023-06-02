import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout.jsx'

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <h1>Home</h1>
        <h1>
          Ir a<Link href="/about"> About</Link>
        </h1>
      </MainLayout>
    </>
  )
}
