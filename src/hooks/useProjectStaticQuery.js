import { useStaticQuery, graphql } from "gatsby";

const useProjectStaticQuery = () => {
  const result = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMM YYYY")
              title
              subTitle
              techStack
              repo
              demo
            }
            html
            id
          }
        }
      }
    }
  `);
  return result.projects.edges.map(project => {
    return {...project.node.frontmatter, desc: project.node.html, id: project.node.id};
  });
}

export default useProjectStaticQuery;