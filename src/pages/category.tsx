import type { HeadFC } from 'gatsby';
import React from 'react';

import Layout from '../layout';

type CategoryProps = {
  location: Location;
};

const CategoryPage: React.FC<CategoryProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>CategoryPage</h1>
    </Layout>
  );
};

export default CategoryPage;

export const Head: HeadFC = () => <title>Category</title>;
