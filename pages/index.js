import Head from 'next/head'
import Layout, { siteTitle } from '../component/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts.js'

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: { posts },
  }
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {posts?.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
    </Layout>
  )
}