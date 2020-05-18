import React from 'react';
import Card from '@material-ui/core/Card';
import e1 from '../../../media/e1.svg'
import e2 from '../../../media/e2.svg'
import e3 from '../../../media/e3.svg'
function Part2() {
  return (
      <div className="part2">
         <Card className='card'>
             <img className='span_img' src={e1}/>
             <p className='text'><strong>Annotation - Let Edunomics bring the best of DATA Platform for AI</strong></p>
         </Card>
         <Card className='card'>
             <img className='span_img' src={e2}/>
             <p className='text'><strong>Developed by the best brains of world with intent to make AI accessible</strong></p>
         </Card>
         <Card className='card'>
             <img className='span_img' src={e3}/>
             <p className='text'><strong>Our tool is always free for Academic research</strong></p>
         </Card>
      </div>
  );
}

export default Part2;
