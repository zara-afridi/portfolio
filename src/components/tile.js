import * as React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import {MdDateRange} from 'react-icons/md';
import './tile.css';

const Tile = ({children}) => {
  const {date, title, subTitle, techStack, repo, demo, desc, location} = children;
  const displayProjectLinks = repo || demo;
  const displayLocation = location && !displayProjectLinks;

  console.log('data', children);
    return (
      <div class='tile-container'>
        <div className='p-6 flex flex-col bg-deepPurple tile'>
          <div className='flex flex-row pb-4 justify-end'>
            <div class='flex-1 flex align-start'>
              <MdDateRange class='h-6 w-6 inline mr-1'/>
              <span>{date}</span>
            </div>
            {displayProjectLinks &&
              <div class='flex'>
                <a href={repo} class='mr-1 p-1'>
                <FaGithub class='h-6 w-6 fill-icon'/>
                </a>
                <a href={demo} class='p-1       '>
                  <FiExternalLink class='h-6 w-6 stroke-icon'/>
                </a>
              </div>
            }
            {displayLocation &&
              <div class='flex align-start'>
                <span>{location}</span>
              </div>
              }
          </div> 

          <div class='pb-4'>
            <h4 className='font-extrabold text-xl hover:highlight'>{title}</h4>
            <h5 className='gray pt-1'>{subTitle}</h5>
          </div>
          <p className='pb-4'>{desc}</p>
          {techStack && <p className='mt-auto text-sm gray'>{techStack.map(tech => (<span className='pr-1'>{tech}</span>))}</p>}
        </div>
      </div>
    )

}

export default Tile;
