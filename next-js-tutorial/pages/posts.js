import Link from 'next/link'
import MainContainer from './components/MainContainer'
import PostModel from './components/PostModel'

import classes from '../styles/Posts.module.css'

export async function  getServerSideProps(context) {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=18')
    const posts = await response.json()
    console.log(posts)
    return {
      props: {
        posts
      }
    }
  }
  

  export default function Posts({posts}){
      return(
        <MainContainer> 
        <ul className = {classes.ul}>
            {
              posts.map(post =>
                <li key = {posts.id}>
                    <PostModel post = {post}>
                      <Link href = {`/posts/[id]`} as = {`posts/${post.id}`}>
                          <a>{post.title}</a>
                      </Link>
                    </PostModel>
                </li>
              )
            }
        </ul>  
        </MainContainer>
      )
  }