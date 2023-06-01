import { useRouter } from 'next/router'
import Link from 'next/link'

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}
export default function ActiveLink({ href, text }) {
  const { asPath } = useRouter()
  return (
    <Link style= { asPath === href ? style : null } href={ href }>{ text }</Link>
  )
}
