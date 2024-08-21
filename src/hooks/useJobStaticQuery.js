import { useStaticQuery, graphql } from "gatsby";

const useJobStaticQuery = () => {
  const result = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/jobs/" }
        }
        sort: { fields: [frontmatter___startDate], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              startDate(formatString: "MMM YYYY")
              endDate(formatString: "MMM YYYY")
              title
              subTitle
              location
            }
            html
            id
          }
        }
      }
    }
  `);
  return result.jobs.edges.map(job => {
    return {...job.node.frontmatter, desc: job.node.html, id: job.node.id};
  });
}
export default useJobStaticQuery;