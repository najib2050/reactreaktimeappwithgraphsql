import { gql, useQuery } from '@apollo/client'
import Post from '../post/Post';
import { Grid } from './style';
// import React from 'react'

/*
how to write query expression
use gql tag
 */

  /*
    how do we intract with qragh sql 
     we can intract with by using these terminolgies
       1:useMutation hook
         -is use for DELETE, UPDATE AND INSERT
       2:useQuerry hook
         - is use for READ
       3:useSubscribtion hook
         - is use for REAL TIME DATA
    */
const GetAllPost = gql`
  query MyQuery {
    posts {
      body
      date
      id
      thumnail
      title
    }
  }


`;
const Posts = () => {
  const { loading, error, data } = useQuery(GetAllPost)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log("data", data)
  return (
    <Grid>
      {data.posts.map((post)=>{
        return <Post {...post} key={post.id}/> 
      })}
    </Grid>
    
  )
}

export default Posts