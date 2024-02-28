import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

const CategoryPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>CategoryPage</h1>
    </main>
  );
};

export default CategoryPage;

export const Head: HeadFC = () => <title>Category</title>;
