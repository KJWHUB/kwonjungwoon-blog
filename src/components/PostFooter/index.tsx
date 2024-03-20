import { Link } from 'gatsby';
import React from 'react';

import Giscus from '../Giscus';
import {
  postNavigationItem,
  postNavigationItemSubTitle,
  postNavigationItemTitle,
  postNavigationWrap,
} from './style.module.scss';

type QueriesPostDetailQueryNextPrev = Queries.PostDetailQuery['next'] | Queries.PostDetailQuery['prev'];

const PostFooterNavigationItem = ({ type, post }: { type: string; post: QueriesPostDetailQueryNextPrev }) => {
  const title = type === 'nextPost' ? '이전 글' : '다음 글';
  const subTitle = post?.frontmatter?.title;

  console.log('PostFooterNavigationItem', type, post);

  if (!post) return;

  return (
    <Link to={`/post${post.fields?.slug}`} className={postNavigationItem}>
      <h3 className={postNavigationItemTitle}>{title}</h3>
      <p className={postNavigationItemSubTitle}>{subTitle}</p>
    </Link>
  );
};

const PostFooter = ({
  navigationPosts,
}: {
  navigationPosts: {
    nextPost: Queries.PostDetailQuery['next'];
    prevPost: Queries.PostDetailQuery['prev'];
  };
}) => {
  return (
    <footer>
      <div className={postNavigationWrap}>
        {Object.entries(navigationPosts).map(([type, post]) => (
          <PostFooterNavigationItem type={type} post={post} key={type} />
        ))}
      </div>

      <Giscus />
    </footer>
  );
};

export default PostFooter;
