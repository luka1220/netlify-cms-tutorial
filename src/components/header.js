import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import NavIcon from "./NavIcon";
export default ({ title }) => (
  <header
    css={css`
      height: 180px;
      @media (max-width: 700px) {
        height: 70px;
      }
    `}
  >
    <PinkBar title={title} />
    <FlexHeader />
  </header>
);

const PinkBar = ({ title }) => (
  <div
    css={css`
      display: flex;
      margin: 0 auto;
      position: relative;
      top: 120px;
      width: calc(100% - 30px);
      height: 50px;
      background-color: rgb(255, 204, 255);
      box-shadow: 0px 0px 10px 10px rgb(255, 204, 255);
      @media (max-width: 700px) {
        top: 10px;
      }
    `}
  >
    <h1
      css={css`
        text-align: center;
        color: white;
        flex-grow: 1;
      `}
    >
      {title}
    </h1>
  </div>
);

const FlexHeader = () => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      position: relative;
      top: -50px;
      margin-bottom: -50px;
      height: 180px;
      @media (max-width: 700px) {
        height: 70px;
      }
    `}
  >
    <NavIcon />
    <div
      css={css`
        padding: 15px;
        @media (max-width: 700px) {
          display: none;
        }
      `}
    >
      <img src="/assets/header-pic01.png" alt="pic" height="100%" />
    </div>
    <div
      css={css`
        flex-grow: 1;
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            position: relative;
            top: 40px;
            left: -90px;
            display: inline-block;
            font-style: normal;
            @media (max-width: 700px) {
              display: none;
            }
          `}
        >
          Bewusst ElternSein
          <div
            css={css`
              position: relative;
              left: 90px;
            `}
          >
            <small>Mit Kindern leben & lernen</small>
          </div>
        </h3>
      </Link>
    </div>
    <div
      css={css`
        padding: 15px;
      `}
    >
      <img
        css={css`
          float: right;
        `}
        src="/assets/logo-lebenlernen-home.png"
        alt="logo"
        height="100%"
      />
    </div>
  </div>
);
