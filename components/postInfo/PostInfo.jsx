import { gql, useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import { Thumnail } from '../post/Style'

// create query object 
const Get_Single_posq_Query=gql`
query MyQuery($id:Int) {
  posts(where: {id: {_eq:$id}}) {
    body
    date
    id
    thumnail
    title
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
  
  if (loading) return "loadig...";
  if (error) return `Error! ${error}`;
  console.log(data)




  return (
    <>
    
    <div style={{display:'flex',alignItems:"center",justifyContent:"center",background:"black",color:"white",height:"100vh"}}>
         {data.posts.map((post)=>{
          return <>
          <ul key={post.id}>
            <h3>{post.title}</h3>
            <Thumnail src={post.thumnail} alt=''/>
            <div>
            <h4>{new Date().toDateString(post.date)}</h4>
            <p style={{textAlign:"center"}}>{post.body}</p>
            </div>
          </ul>
          </>
         })}
    </div>
    <div>
              <Link to={`/newpost/${id}`}>
              <button >Update</button>
              </Link>
              <button style={{background:"red"}}>DELETE</button>
            </div>
    
    </>
  )
}

export default PostInfo