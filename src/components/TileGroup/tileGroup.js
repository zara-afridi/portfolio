import * as React from 'react';
import Tile from '../Tile/tile';
import useJobStaticQuery from '../../hooks/useJobStaticQuery';
import useProjectStaticQuery from '../../hooks/useProjectStaticQuery';

const TileGroup = () => {
  const projectData = {tiles: [...useProjectStaticQuery()], title: 'Projects', id: 'projects'}; 
  const jobData = {tiles: [...useJobStaticQuery()], title: 'Experience', id: 'work'};
  
  console.log('projectData',projectData);
  console.log('jobData',jobData);
  return (
    <div>
      <div id={jobData.id} className='my-8'>
        <div className='text-5xl font-extrabold py-8'>{jobData.title}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {jobData.tiles.map(tile => (<Tile key={tile.id}>{tile}</Tile>))}
        </div>
      </div>
      <div id={projectData.id} className='my-8'>
        <div className='text-5xl font-extrabold py-8'>{projectData.title}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projectData.tiles.map(tile => (<Tile key={tile.id}>{tile}</Tile>))}
        </div>
      </div>
    </div>
  )
}

export default TileGroup