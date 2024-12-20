import Layout from '../../component/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../component/date'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br/>
       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
       <Date dateString={postData.date} />
    </Layout>
  )
}
