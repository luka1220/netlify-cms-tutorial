import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default ({titles=[]}) => {
	console.log(titles)
	return (
		<div 
	css={css`
	  padding-top: 40px;
      margin: 0 auto;
      width: 20%;
    `}>
    <ul>
    {titles.map(n=>(<li key={n.title}><Link to={n.path}>{n.title}</Link></li>))}
  	</ul>
  </div>
  )
}