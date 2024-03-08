import { graphql, type PageProps } from 'gatsby';
import React from 'react';

import PostCardList from '@/src/components/List/PostCardList';

import Layout from '../../layout';

type TagTemplateProps = {
  pageContext: {
    tagName: string;
    postLength: number;
  };
} & PageProps<Queries.TagListQuery>;

const TagTemplate = ({ location, pageContext, data }: TagTemplateProps) => {
  const { tagName, postLength } = pageContext;

  console.log('tag dtail', data);
  return (
    <Layout location={location}>
      <h1>{tagName}</h1>
      <p>post {postLength}</p>

      <hr />

      <PostCardList list={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export const query = graphql`
  query TagList($tagName: String) {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tag: { eq: $tagName } } }) {
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

export default TagTemplate;
