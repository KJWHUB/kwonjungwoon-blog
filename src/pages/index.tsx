import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

import Layout from '../layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
