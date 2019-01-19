import React from "react";
import { css } from "@emotion/core";
import { Link } from "../styledComponents";
import { color } from "../constants";
import "../css/nav-menu.css";

export default ({ titles = [] }) => {
  console.log(titles);
  return (
    <div
      id="nav-menu"
      className="closed"
      css={css`
        padding-top: 40px;
        width: 25%;
        min-width: 200px;
        @media (max-width: 700px) {
          width: 100%;
          background-image: linear-gradient(to right, ${color.primary}, white);
        }
      `}
    >
      <ul
        css={css`
          list-style: none;
        `}
      >
        {titles.map(n => (
          <li key={n.title}>
            <Link to={n.path}>{n.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
