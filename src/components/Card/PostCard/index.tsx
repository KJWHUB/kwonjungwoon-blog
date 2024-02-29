import { Link } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { postCard, postCardDate, postCardDescription, postCardImage, postCardTitle } from './style.module.scss';

type PostCardProps = {
  title: string;
  description: string;
  date: string;
  image?: IGatsbyImageData;
};

const PostCard = ({ title, description, date, image }: PostCardProps) => {
  return (
    <article className={postCard}>
      <div className={postCardImage}>
        <Link to='/' style={{ display: 'block', width: '100%', height: '100%' }}>
          {image && <GatsbyImage image={image} alt='Post image' objectFit='cover' style={{ height: '100%' }} />}
          {!image && <StaticImage src='/src/assets/images/annie-spratt-yI3weKNBRTc-unsplash.jpg' alt='Post image' />}
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
