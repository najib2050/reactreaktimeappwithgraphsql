// import React from 'react'

// import { Link } from "react-router-dom"

const Heade = () => {
  return (
    <div>Heade
        <nav>
            <a href="/">logo</a>
            <ul>

                <li>
                    <a href="/posts">posts</a>
                    {/* <Link href='/posts '>posts</Link> */}
                </li>
                <li>
                    <a href="/new-post">new post</a>
                    {/* <Link href='/new-post'>new posts</Link> */}
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Heade