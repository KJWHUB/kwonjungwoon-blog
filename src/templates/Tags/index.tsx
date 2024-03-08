import { Link, type PageProps } from 'gatsby';
import React from 'react';

import Layout from '../../layout';
import { chageTagToPath } from '../../utils/path';
import { tagListWrap } from './style.module.scss';

type TagsTemplateProps = {
  pageContext: {
    tagData: Record<string, number>;
  };
} & PageProps;

const TagsTemplate = ({ location, pageContext }: TagsTemplateProps) => {
  const { tagData } = pageContext;
  return (
    <Layout location={location}>
      <h1>TagsPage</h1>
      <ul className={tagListWrap}>
        {Object.entries(tagData).map(([tag, count]) => (
          <li key={tag}>
            <Link to={`/tags/${chageTagToPath(tag)}`}>
              {tag} ({count})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagsTemplate;
