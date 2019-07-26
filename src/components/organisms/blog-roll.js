import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './preview-compatible-image';

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div key={post.id}>
            <article>
              <header>
                {post.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.title}`,
                    }}
                  />
                ) : null}
                <p>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <span> &bull; </span>
                  <span>{post.frontmatter.date}</span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <Link to={post.fields.slug}>Keep Reading →</Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                # featuredimage {
                #   childImageSharp {
                #     fluid(maxWidth: 120, quality: 100) {
                #       ...GatsbyImageSharpFluid
                #     }
                #   }
                # }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);