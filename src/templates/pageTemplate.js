import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds our post data
  if (!markdownRemark) return null;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout
      titles={allMarkdownRemark.edges.map(({ node }) => node.frontmatter)}
      title={frontmatter.title}
    >
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div
            style={{
              textAlign: "justify",
              hyphens: "auto",
              fontSize: "1.25rem"
            }}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
