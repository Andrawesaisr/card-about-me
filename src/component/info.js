import React from 'react';
import ownImg from '../images/SAVE_20210317_015705.jpg'


export default function Info(){
    return (
<div className='info'>
<img src={ownImg} alt="own pic" title="andrew aisr" className='pho' />
<h3 className='name'>Andrawes Aisr Adolf</h3>
<h5 className='title'>software engineer</h5>
<div className='buttons'>
<button className='email'> <i class="fa fa-envelope"></i>email</button>
<button className='linkedin'> <i class="fa fa-linkedin-square"></i>LinkedIn</button>
</div>
</div>
    );
} 