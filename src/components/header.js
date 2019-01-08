import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";
//style={{background: `url("/assets/bg-header.png")`}}
export default props => (
  <header>
    <div
      css={css`
        margin: 0 auto;
        position: relative;
        top: 100px;
        width: calc(100% - 30px);
        height: 50px;
        background-color: rgb(255, 204, 255);
        box-shadow: 0px 0px 10px 10px rgb(255, 204, 255);
        color: white;
        text-align: center;
      `}
    >
      Aktuelles
    </div>
    <div
      css={css`
        display: flex;
        position: relative;
        top: -50px;
        margin-bottom: -50px;
      `}
    >
      <div
        css={css`
          width: calc(25% - 20px);
          min-width: 250px;
        `}
      >
        <img src="/assets/header-pic01.png" alt="pic" width="100%" />
      </div>
      <div
        css={css`
          position: relative;
          top: 40px;
          left: -90px;
          @media (max-width: 1075px) {
            left: 180px;
          }
        `}
      >
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
              `}
            >
              <small>Mit Kindern leben & lernen</small>
            </div>
          </h3>
        </Link>
      </div>
      <div
        css={css`
          align-self: flex-;
        `}
      >
        <img src="/assets/logo-lebenlernen-home.png" alt="logo" />
      </div>
    </div>
  </header>
);
