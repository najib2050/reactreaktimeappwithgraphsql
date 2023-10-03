// import React from 'react'

import { Link } from "react-router-dom"
import { CardGrid, CardInfo, Category, Title } from "./Style"



const Post = ({ body, date, id, thumnail, title, index }) => {


  return (
    <div>
      <CardGrid to={`/post/${id}`} index={index} thumnail={thumnail}>
        <CardInfo>
          <Category>code</Category>
          <Title>{title}</Title>

    
    
            <div>
              <span>najiib</span>
              <span>{new Date(date).toDateString()}</span>
            </div>
      
        </CardInfo>

      </CardGrid>
    </div>
  )
}

export default Post