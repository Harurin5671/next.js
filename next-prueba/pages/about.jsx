import DarkLayout from '@/components/layouts/DarkLayout'
import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
// import styles from '@/styles/Home.module.css'

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <h1>Ir a<Link href='/'> Home</Link></h1>
    </>
  )
}


AboutPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}