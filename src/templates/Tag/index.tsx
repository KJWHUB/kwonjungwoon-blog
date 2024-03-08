import { graphql, type PageProps } from 'gatsby';
import React from 'react';

import PostCardList from '@/src/components/List/PostCardList';
import PageTitle from '@/src/components/Typography/PageTitle';

import Layout from '../../layout';
import { searchPostText } from './style.module.scss';

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
      <div style={{ paddingTop: 100 }}>
        <PageTitle text={tagName} />
      </div>
      <h2 className={searchPostText}>Search Post {postLength}</h2>

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
