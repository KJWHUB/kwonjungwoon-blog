import { graphql, type PageProps } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import PostHeader from '@/src/components/PostHeader';
import Layout from '@/src/layout';

const BlogPostTemplate = ({ location, data, pageContext }: PageProps<Queries.PostDetailQuery>) => {
  console.log('template props data', data, pageContext);
  const curPost = data.cur;

  return (
    <Layout location={location}>
      <div style={{ padding: '60px 100px', width: 1000 }}>
        <PostHeader
          title={curPost?.frontmatter?.title || 'DEFAULT TITLE'}
          description={curPost?.frontmatter?.description || 'DEFAULT DESCRIPTION'}
          date={curPost?.frontmatter?.date || 'empty'}
          image={curPost?.frontmatter?.post_image?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
          credit={{
            link: curPost?.frontmatter?.post_image_credit_link || 'https://www.google.com',
            text: curPost?.frontmatter?.post_image_credit_text || 'Google',
          }}
          tagList={(curPost?.frontmatter?.tag as string[]) || []}
        />
        <div className='markdown' dangerouslySetInnerHTML={{ __html: curPost?.html as string }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostDetail($slug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        description
        tag
        post_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        post_image_credit_text
        post_image_credit_link
      }
    }
  }
`;

export default BlogPostTemplate;
