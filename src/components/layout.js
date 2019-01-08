import React from "react";
import { css } from "@emotion/core";
import "../css/layout.css";
import { color } from "../constants";
import { rhythm } from "../utils/typography";
import Header from "./header";
import Navigation from "./navigation";

export default ({ children, titles }) => (
  <div
    css={css`
      @media (min-width: 500px) {
        background-image: linear-gradient(
          to right,
          ${color.primary} 0%,
          white 270px
        );
      }
      @media (min-width: 1075px) {
        background-image: linear-gradient(
          to right,
          ${color.primary} 0%,
          white 25%
        );
      }
      min-height: 100vh;
    `}
  >
    <Header />
    <div
      css={css`
        display: flex;
        @media (max-width: 500px) {
          flex-direction: column;
        }
      `}
    >
      <Navigation titles={titles} />
      <div
        css={css`
          width: 75%;
          @media (max-width: 500px) {
            width: 100%;
          }
          max-width: 800px;
          padding: ${rhythm(1)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    </div>
  </div>
);
