import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <>
      <MainLayout>
        <h1>Pricing</h1>
        <h1>
          Ir a<Link href="/pricing"> Pricing</Link>
        </h1>
      </MainLayout>
    </>
  )
}
