import { Link, type PageProps } from 'gatsby';
import React from 'react';

import PageTitle from '@/src/components/Typography/PageTitle';

import Layout from '../../layout';
import { chageTagToPath } from '../../utils/path';
import { tagListItem, tagListText, tagListWrap } from './style.module.scss';

type TagsTemplateProps = {
  pageContext: {
    tagData: Record<string, number>;
  };
} & PageProps;

const TagsTemplate = ({ location, pageContext }: TagsTemplateProps) => {
  const { tagData } = pageContext;
  return (
    <Layout location={location}>
      <div style={{ padding: '100px 0' }}>
        <PageTitle text='Tags' />
      </div>
      <ul className={tagListWrap}>
        {Object.entries(tagData).map(([tag, count]) => (
          <li key={tag} className={tagListItem}>
            <Link to={`/tags/${chageTagToPath(tag)}`} className={tagListText}>
              {tag} ({count})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagsTemplate;
