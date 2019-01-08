import React from "react";
import { css } from "@emotion/core";
import { Link } from "../styledComponents";

export default ({ titles = [] }) => {
  console.log(titles);
  return (
    <div
      css={css`
        padding-top: 40px;
        width: 25%;
        min-width: 270px;
        @media (max-width: 500px) {
          width: 100%;
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
