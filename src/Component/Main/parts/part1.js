import React from 'react';
import img1 from '../../../media/part1.svg'
function Part1() {
  return (
      <div className="part1">
          <div className='intro'>
            <h2 className='intro__title'>Image Annotation</h2>
            <p className='intro_subs'>
            Data is the fuel to AI and for the same . . . . AI starts with quality data with good annotation, High quality training and validation data for AI applications
            </p>
          </div>
         
          <img height='300px' className='part1_Img' src={img1}/>
          
      </div>
  );
}

export default Part1;
