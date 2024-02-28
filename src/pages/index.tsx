import type { HeadFC } from 'gatsby';
import React from 'react';

import Layout from '../layout';

type HomeProps = {
  location: Location;
};

const IndexPage: React.FC<HomeProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
