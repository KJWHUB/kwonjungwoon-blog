import { graphql, type PageProps } from 'gatsby';
import React from 'react';

const BlogPostTemplate = ({ data }: PageProps<Queries.PostDetailQuery>) => {
  console.log('data ;;;', data);
  return <div>Hello blog post</div>;
};

export const query = graphql`
  query PostDetail($slug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
