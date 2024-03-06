import type { Actions, GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

type qCPQ = Queries.CreatePostQuery;

const createPost = ({
  createPage,
  edges,
}: {
  createPage: Actions['createPage'];
  edges: qCPQ['allMarkdownRemark']['edges'];
}) => {
  const post = path.resolve(`./src/templates/blog-post.tsx`);

  edges.forEach(({ node }) => {
    const slug = node?.fields?.slug;
    createPage({
      path: `/post${slug}`,
      component: post,
      context: {
        slug,
      },
    });
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql<qCPQ>(`
    query CreatePost {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            id
            excerpt(pruneLength: 500, truncate: true)
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  createPost({ createPage, edges: result.data.allMarkdownRemark.edges });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};
