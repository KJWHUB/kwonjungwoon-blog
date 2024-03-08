import React from 'react';

import PostCard from '@/src/components/Card/PostCard';

type ListType =
  | Queries.PostListQuery['allMarkdownRemark']['edges']
  | Queries.TagListQuery['allMarkdownRemark']['edges'];

const PostCardList = ({ list }: { list: ListType }) => {
  return (
    <ul style={{ display: 'flex' }}>
      {list.map((item) => {
        const { id, frontmatter, fields } = item.node;
        return frontmatter ? (
          <li key={id} style={{ flex: '1 1 300px' }}>
            <PostCard
              title={frontmatter.title || 'No Title'}
              description={frontmatter.description || 'No Description'}
              date={frontmatter.date || 'No Date'}
              image={frontmatter.post_image?.childImageSharp?.gatsbyImageData}
              detailPath={fields?.slug || '/'}
            />
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default PostCardList;
