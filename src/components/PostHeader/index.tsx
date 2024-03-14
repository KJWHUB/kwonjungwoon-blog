import { Link } from 'gatsby';
import { GatsbyImage, getImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import {
  dividingLine,
  header,
  postHeaderDescription,
  postHeaderTagList,
  postHeaderTagText,
  postHeaderTime,
  postImage,
  postImageCradit,
  postImageWrap,
} from './style.module.scss';

const PostHeader = ({
  title,
  description,
  date,
  image,
  credit,
  tagList,
}: {
  title: string;
  description: string;
  date: string;
  image: IGatsbyImageData;
  credit: {
    link: string;
    text: string;
  };
  tagList: string[];
}) => {
  const pImage = getImage(image);
  return (
    <header className={header}>
      <ul className={postHeaderTagList}>
        {tagList.map((tag) => (
          <li key={tag}>
            <Link to={`/tags/${tag}`} className={postHeaderTagText}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
      <h1>{title}</h1>
      <h3 className={postHeaderDescription}>{description}</h3>
      <p className={postHeaderTime}>{date}</p>

      <hr className={dividingLine} />

      <div style={{ margin: '100px 0' }}>
        {pImage && (
          <div className={postImageWrap}>
            <GatsbyImage image={pImage} alt='Post image' objectFit='cover' className={postImage} />
          </div>
        )}
        <p className={postImageCradit}>
          Photo Credit:{' '}
          <a href={credit.link} target='_blank' rel='noreferrer noopener'>
            {credit.text}
          </a>
        </p>
      </div>
    </header>
  );
};

export default PostHeader;
