import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

export default ({ children, ...props }) => (
  <Link
    {...props}
    activeStyle={{
      color: "white"
    }}
    css={css`
      text-decoration: none;
    `}
  >
    {children}
  </Link>
);
