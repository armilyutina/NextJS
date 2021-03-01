import { useRouter } from 'next/router'
import MainContainer from '../components/MainContainer'

export async function  getServerSideProps({ params }) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()
  return {
    props: {
      post
    }
  }
}


export default function Post({ post }){

    return (
      <MainContainer>
        <div>
            {post.title}
            {post.id}
        </div>
      </MainContainer>
    )
}
  