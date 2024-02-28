import type { HeadFC } from 'gatsby';
import React from 'react';

import Layout from '../layout';

type AboutProps = {
  location: Location;
};

const AboutPage: React.FC<AboutProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>About Page</h1>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
