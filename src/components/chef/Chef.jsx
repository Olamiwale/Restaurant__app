import React from 'react'
import './Chef.css'

import chef from '../../images/chef.png'
import spoon from '../../images/spoon.png'
import quote from '../../images/quote.png'
import sign from '../../images/sign.png'

export default function Chef() {
  return (
    <div className='flex center app__chef'>
      
        <div className='app__chef-image'>
           <img src={chef} alt='chef' /> 
        </div>

        <div className='app__chef-content'> 
          <div>
            <p> Chef's Wood</p>
            <img src={spoon} alt='spoon' />
            <h1>What we Believe In</h1>
        </div>

        <div className='app__chef-quote-content'>
          
          <div className='app__quote'> 
        <img src={quote} alt='quote' />
        <p>hhhhh hhhhh hhhhhhhg gggg gggg gggggg ggyy ola</p> 
        </div>
        <p>cjcjcjcjcj jccknkgg jnjnd jnjnfd knjs jdf jkns jnd kknkdkalkmk njcjcjcj jccknkgg jnjnd jnjnfd knjs jdf jkns jnd kknkdkalkmk jcjcjcj jccknkgg jnjnd jnjnfd knjs jdf jkns jnd kknkdkalkmk knjnfjv knjnsd </p>
        </div>


        <div className='app__chef-founder'>
        <p>Kevin Luo</p>
        <p className='app__chef-name'>Chef & Founder</p>
        <img src={sign} alt="sign_image" />
      </div> 

      </div>
       
        
    </div>
  )
}
