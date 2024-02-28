import type { HeadFC } from 'gatsby';
import React from 'react';

import Layout from '../layout';

type TagsProps = {
  location: Location;
};

const TagsPage: React.FC<TagsProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>TagsPage</h1>
    </Layout>
  );
};

export default TagsPage;

export const Head: HeadFC = () => <title>Tags</title>;
