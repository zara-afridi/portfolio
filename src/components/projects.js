import * as React from 'react';
import Tile from './tile';
import { useStaticQuery, graphql } from 'gatsby';

const Projects = () => {
  const projects = useStaticQuery(graphql`
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
            title
            techStack
            repo
            demo
          }
          html
        }
      }
    }
  }
`);
console.log('projects', projects);
  const data = {
    date: '2022-03-26',
    title: 'NuHealth',
    subTitle: 'PS Hackathon Submission',
    techStack: ['NextJS |',  'Firebase |', 'Vercel'],
    repo: 'https://github.com/afridiz1/nuhealth_public',
    demo: 'https://nuhealth.vercel.app/onboarding',
    desc: 'Developed an interconnected health care platform that streamlines medical documentation and empowers paramedics to deliver appropriate care with access to up-to-date patient information.'
  };
  const jobData = {
    date: 'Jun 2020 - Aug 2020',
    title: 'Software Enginer Intern',
    location: 'Toronto, ON',
    subTitle: '@ Publicis Sapient',
    techStack: ['Spring Boot |',, 'Google Cloud Pub/Sub |',  'Twilio |',  'Docker |', 'Google Kubernetes Engine'],
    desc: 'Developed a scalable, low latency notification microservice for a client, capable of handling millions of messages per second.'
  }
  const mock = [{...data}, {...jobData}, {...data}, {...data}];
  console.log('projects', projects);
  return (
    <div id='projects' class='my-8'>
      <div class='text-5xl font-extrabold pb-8'>Projects</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {mock.map(job => (<Tile>{job}</Tile>))}
      </div>
    </div>
  )
}

export default Projects;