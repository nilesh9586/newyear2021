import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import images from './images3.jpg'


ReactDOM.render(
    
<>
<section class='event'  id='event'>
      <div class='cell well'>
       
        <div class='event-content'>
          <img src={images} alt='SweetLandia' id='sweetlandia' width='290' />
          <h1 className="heading">HAPPY NEW YEAR 2021</h1>
         
         
        </div>
      </div>
    </section>

   




</>



  ,document.getElementById('root')
);