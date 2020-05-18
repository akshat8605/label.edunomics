import React from 'react';
import img1 from '../../../media/part1.svg'
function Part1() {
  return (
      <div className="part3">
         <div className='intro'>
            <h2 className='intro__title3'>Construct your Machine Learning pipeline with Powerful APIs</h2>
            <p className='intro_subs3'>
            Stream data into Labelbox and push labeled data into training environments. Connect your ML models to supercharge labeling productivity and orchestrate active learning. Labelbox is API-first so you can use it as infrastructure to scale up.
            </p>
          </div>
          <img height='300px' className='part3_Img' src={img1}/>
          
      </div>
  );
}

export default Part1;
