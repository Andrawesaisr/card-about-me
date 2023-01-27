import React from 'react';
import insta from '../images/download.png';
import twitter from '../images/tww.png';

export default function Footer(){
    return (
        <div className='footer'>
           <a href="https://www.instagram.com/aa_adolf1/" target="_blank"  rel="noopener noreferrer"> 
           <img src={insta} title='insta account' alt="" className='ins'/>
           </a>

           <a href="https://twitter.com/AndrewAdolf11" target="_blank"  rel="noopener noreferrer"> 
           <img src={twitter} title='twitter account' alt="" className='tw'/>
           </a>
        </div>
    );
}