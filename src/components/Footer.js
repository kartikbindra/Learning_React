import React from 'react'

export default function Footer(props) {
    const link = () => {
        window.open("https://github.com/kartikbindra");
    };
  return (
    <div className='footer'>
      <p className={`text-${props.mode} footer-text`}>Made with 💜 by <button className='button' onClick={link} >Kartik Bindra</button></p>
      {/* <p className={`text-${props.mode} footer-text`}>Made with 💜 by <a href="github.com/kartikbindra" target='_blank'>Kartik Bindra</a></p> */}
    
    </div>
  )
}
