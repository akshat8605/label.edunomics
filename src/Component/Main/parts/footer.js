import React from 'react';
import './footer.css'
import IconButton from '@material-ui/core/IconButton';
import Fb from '@material-ui/icons/Facebook';
import Ig from '@material-ui/icons/Instagram';
import Li from '@material-ui/icons/LinkedIn';
import Tw from '@material-ui/icons/Twitter';
function Part1() {
  return (
      <div className="footer">
          <div className='footer-details'>
              <div className='f'>AN INITIATIVE BY EDUNOMICS.IN TO MAKE AI ACCESSIBLE</div>
              <div className='f'>
                  <p>VISIT <a href="WWW.EDUNOMICS.IN" style={{textDecoration: 'none', color: 'black'}}>WWW.EDUNOMICS.IN</a></p>
                  <div> 
                        <a href="https://www.facebook.com/edunomics2020/">
                        <IconButton style={{color:'#0056b3',fontSize:'2em'}}>
                            <Fb/>
                        </IconButton>
                        </a>
                        <a href="https://www.instagram.com/edunomics2020/">
                        <IconButton style={{color:'#0056b3',fontSize:'2em'}}>
                            <Ig/>
                        </IconButton>
                        </a>
                        <a href="https://www.linkedin.com/company/edunomics/">
                        <IconButton style={{color:'#0056b3',fontSize:'2em'}}>
                            <Li/>
                        </IconButton>
                        </a>
                        <a href="https://twitter.com/Edunomics2">
                        <IconButton style={{color:'#0056b3',fontSize:'2em'}}>
                            <Tw/>
                        </IconButton>
                        </a>
                    </div>
              </div>
          </div>
          <div className='copyright'>
          © Edunomics 2020. All Rights Reserved
          </div>
      </div>
  );
}

export default Part1;
