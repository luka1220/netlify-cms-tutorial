import React from "react";
import { css } from "@emotion/core";
import "../css/layout.css";
import { color } from "../constants";
import Header from "./header";
import Navigation from "./navigation";

export default ({ children, titles, title }) => (
  <div
    css={css`
      @media (min-width: 700px) {
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
    <Header title={title} />
    <div
      css={css`
        display: flex;
        @media (max-width: 700px) {
          flex-direction: column;
        }
      `}
    >
      <Navigation titles={titles} />
      <div
        css={css`
          width: 75%;
          @media (max-width: 700px) {
            width: 100%;
          }
          max-width: 800px;
        `}
      >
        {children}
      </div>
    </div>
  </div>
);
