import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
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
