
import React from "react"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import Header from "./header"
import Navigation from "./navigation"

export default ({ children, titles }) => (
  <div css={css`
    background-image: linear-gradient(to right, rgb(166,206,57) 0%, white 25%);
    min-height: 100vh;
    `}>
  <Header/>
  <div css={css`
      display: flex;
    `}>
  <Navigation titles={titles}/>
  <div
    css={css`
      margin: 0 auto;
      width: 75%;
      max-width: 800px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    
    {children}
  </div>
  </div>
  </div>
)