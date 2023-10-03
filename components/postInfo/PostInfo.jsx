import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Thumnail } from '../post/Style'

// create query object 
const Get_Single_posq_Query=gql`
query MyQuery($id:Int) {
  posts(where: {id: {_eq:$id}}) {
    title
    body
    date
    id
    thumnail
  }
}
`

function PostInfo() {
  //to get id on the prowser use useParams hook by tracking the id
  /*destracture it further 
  instead of  console.log(id.id) use \
  this const {id}=useParams()
  */
  const {id}=useParams()
  console.log(id)
  //call querry object above by using useQuerry HOOK object
  const { loading, error, data } = useQuery(Get_Single_posq_Query, {
    /* 
    The variables option is an object that contains all of the variables we want to pass to our GraphQL query. 
    In this case, we want to pass the currently selected id from the dropdown.
    */
    variables: { id:id },
  });
  
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data)



  return (
    // display the data
    <div>
         {data.posts.map((post,index)=>{
          return <>
          <ul key={post.id}>
            <p>{index}</p>
            <li>{post.title}</li>
            <li>{new Date().toDateString(post.date)}</li>
            <li>{post.id}</li>
            <Thumnail src={post.thumnail} alt=''/>
          </ul>
          </>
         })}
    </div>
  )
}

export default PostInfo