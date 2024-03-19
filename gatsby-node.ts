import type { Actions, GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import { chageTagToPath } from './src/utils/path';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

type qCPQ = Queries.CreatePageQuery;

const createTags = ({
  createPage,
  edges,
}: {
  createPage: Actions['createPage'];
  edges: qCPQ['allMarkdownRemark']['edges'];
}) => {
  const tagsTemplate = path.resolve(`./src/templates/Tags/index.tsx`);
  const tagTemplate = path.resolve(`./src/templates/Tag/index.tsx`);

  const tagData = edges.reduce(
    (acc, { node }) => {
      const tags = node?.frontmatter?.tag || [];
      tags.forEach((tag: string | null) => {
        if (tag !== null) {
          if (acc[tag]) {
            acc[tag] += 1;
          } else {
            acc[tag] = 1;
          }
        }
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  createPage({
    path: `/tags`,
    component: tagsTemplate,
    context: {
      tagData,
    },
  });

  Object.entries(tagData).forEach(([tag, count]) => {
    const slug = chageTagToPath(tag);
    createPage({
      path: `/tags/${slug}`,
      component: tagTemplate,
      context: {
        tagName: tag,
        postLength: count,
      },
    });
  });
};

const createPost = ({
  createPage,
  edges,
}: {
  createPage: Actions['createPage'];
  edges: qCPQ['allMarkdownRemark']['edges'];
}) => {
  const postTemplate = path.resolve(`./src/templates/blog-post/index.tsx`);

  edges.forEach(({ node }) => {
    const slug = node?.fields?.slug;
    createPage({
      path: `/post${slug}`,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql<qCPQ>(`
    query CreatePage {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
              tag
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.warn(`createPages 에러 발생`);
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  createPost({ createPage, edges: result.data.allMarkdownRemark.edges });
  createTags({ createPage, edges: result.data.allMarkdownRemark.edges });

  reporter.success(`createPages 생성 완료`);
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/src': path.resolve(__dirname, 'src/'),
      },
    },
  });
};
