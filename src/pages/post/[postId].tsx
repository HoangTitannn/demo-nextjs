import { useRouter } from 'next/router'
import React from 'react'

export interface PostIdProps {}

const PostId: React.FC<PostIdProps> = (props) => {
  const router = useRouter()

  return (
    <>
    <h1>PostId : {JSON.stringify(router.query)}</h1>
    </>
  )
}

export default PostId
