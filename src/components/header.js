import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
//style={{background: `url("/assets/bg-header.png")`}}
export default (props) => (
	<header css={css`height:180px`}>
		<div css={css`
			position: absolute;
			top: 120px;
			left: 1%; 
			width: 98%;
			height: 50px;
			background-color: rgb(255, 204, 255);
			box-shadow: 0px 0px 10px 10px rgb(255, 204, 255);
			color: white;
			text-align: center;
		`}>
		Aktuelles
		</div>
		<div css={css`
	        position: absolute;
	        top: 10px;
	        left: 20px;
	      `}>
			<img src="/assets/header-pic01.png" alt="pic" />
		</div>
		<div css={css`
				position: absolute;
		        top: 40px;
		        left: 180px;
		`}>
			<Link to={`/`}>
		      <h3
		        css={css`
		          margin-bottom: ${rhythm(2)};
		          display: inline-block;
		          font-style: normal;
		        `}
		      >		        
				Bewusst ElternSein
				<div
		      css={css`
		        margin: 0px 100px;
				`}>
				<small>
				Mit Kindern leben & lernen
				</small>
				</div>
		      </h3>
		      
		    </Link>
	    </div>
	    <Link
	      to={`/about/`}
	      css={css`
	        float: right;
	      `}
	    >
	      About
	    </Link>
		<div css={css`
	        position: absolute;
	        top: 10px;
	        right: 20px;
	      `}>
			<img src="/assets/logo-lebenlernen-home.png" alt="logo" />
		</div>
	</header>
	)