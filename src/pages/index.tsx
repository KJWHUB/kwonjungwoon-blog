import { graphql, type HeadFC, type PageProps } from 'gatsby';
import React from 'react';

import PostCard from '../components/Card/PostCard';
import Layout from '../layout';

const IndexPage = ({ location, data }: PageProps<Queries.PostListQuery>) => {
  console.log('data ;;;', data);
  const list = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <h1 style={{ margin: '200px 0' }}>Home Page</h1>

      <ul style={{ display: 'flex' }}>
        {list.map((item) => {
          const { id, frontmatter } = item.node;
          return frontmatter ? (
            <li key={id} style={{ width: '33%' }}>
              <PostCard
                title={frontmatter.title || 'No Title'}
                description={frontmatter.description || 'No Description'}
                date={frontmatter.date || 'No Date'}
                image={frontmatter.post_image?.childImageSharp?.gatsbyImageData}
              />
            </li>
          ) : null;
        })}
      </ul>
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
            tags
            post_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
