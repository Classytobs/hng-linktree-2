import React from 'react'
import I4G from '../../Img/I4G.png'
import footer1 from '../../Img/footer1.png'
import './Footer.css';

export default function Footer() {
  return (
        <div className='footer'>
            <div className='container'>
                <div className='content'>
                    <div className='zuri'>
                        <img className= 'img1' src={footer1} alt='' />   
                    </div>
                    <div className='footer_text'>HNG Internship 9 Frontend Task</div>
                    <div className='g'><img src={I4G} alt='' /> </div>
                </div>
        
            </div>
        </div>
    
  )
}
