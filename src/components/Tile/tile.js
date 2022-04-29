import * as React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import {MdDateRange} from 'react-icons/md';
import './tile.css';

const Tile = ({children}) => {
  const {date, title, subTitle, techStack, repo, demo, desc, location, endDate, startDate} = children;
  const displayProjectLinks = repo || demo;
  const displayLocation = location && !displayProjectLinks;

    return (
      <div className='tile-container'>
        <div className='p-6 flex flex-col bg-deepPurple tile'>
          <div className='flex flex-row pb-4 justify-end'>
            <div className='flex-1 flex align-start'>
              <MdDateRange className='h-6 w-6 inline mr-1'/>
              {date && <span>{date}</span>}
              {startDate && endDate && <span>{startDate} - {endDate}</span>}
              {startDate && !endDate && <span>{startDate} - Present</span>}
            </div>
            {displayProjectLinks &&
              <div className='flex'>
                {repo && <a href={repo} className='mr-1 p-1'>
                <FaGithub className='h-6 w-6 fill-icon'/>
                </a>}
                {demo && <a href={demo} className='p-1       '>
                  <FiExternalLink className='h-6 w-6 stroke-icon'/>
                </a>}
              </div>
            }
            {displayLocation &&
              <div className='flex align-start'>
                <span>{location}</span>
              </div>
              }
          </div> 

          <div className='pb-4'>
            <h4 className='font-extrabold text-xl hover:highlight'>{title}</h4>
            <h5 className='gray pt-1'>{subTitle}</h5>
          </div>
          <div className='pb-4' dangerouslySetInnerHTML={{__html: desc}}/>
          {
            techStack && 
            <ul className='mt-auto text-sm gray divide-x divide-gray'>
              {
                techStack.map(tech => (
                    <li className="px-1 inline first:pr-1 first:pl-0" >{tech}</li>
                ))
              }
            </ul>
            }
        </div>
      </div>
    )

}

export default Tile;
