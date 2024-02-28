import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>About Page</title>;
