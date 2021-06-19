import Head from 'next/head'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <div>
      hello
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}
