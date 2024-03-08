import { graphql, type HeadFC, type PageProps } from 'gatsby';
import React from 'react';

import PostCardList from '@/src/components/List/PostCardList';

import Layout from '../layout';

const IndexPage = ({ location, data }: PageProps<Queries.PostListQuery>) => {
  console.log('data ;;;', data);
  const list = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <h1 style={{ margin: '200px 0' }}>Home Page</h1>

      <PostCardList list={list} />
    </Layout>
  );
};

export const query = graphql`
  query PostList {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tag
            post_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
