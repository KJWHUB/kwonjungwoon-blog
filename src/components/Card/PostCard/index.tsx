import { Link } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  postCard,
  postCardDate,
  postCardDescription,
  postCardImage,
  postCardImageWrap,
  postCardTitle,
} from './style.module.scss';

type PostCardProps = {
  title: string;
  description: string;
  date: string;
  image?: IGatsbyImageData;
  detailPath: string;
};

const PostCard = ({ title, description, date, image, detailPath }: PostCardProps) => {
  return (
    <article className={postCard}>
      <div className={postCardImageWrap}>
        <Link to={`/post${detailPath}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          {image && (
            <GatsbyImage
              image={image}
              alt='Post image'
              objectFit='cover'
              style={{ height: '100%' }}
              className={postCardImage}
            />
          )}
          {!image && (
            <StaticImage
              src='../../../assets/images/post-card-default.jpg'
              alt='Post image'
              className={postCardImage}
            />
          )}
        </Link>
      </div>

      <h2 className={postCardTitle}>{title}</h2>
      <p className={postCardDescription}>{description}</p>
      <time dateTime={date} className={postCardDate}>
        {date}
      </time>
    </article>
  );
};

export default PostCard;
