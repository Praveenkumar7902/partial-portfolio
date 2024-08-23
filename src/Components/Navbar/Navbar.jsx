import React from 'react';
import "./navbar.scss"
import { motion } from "framer-motion";
import Sidebar from '../SideBar/Sidebar';


function Navbar() {
  return (
    <div className='navbar'>
<Sidebar/>

<div className="wrapper">
<motion.span initial={{opacity:0 ,scale:0.5}}
animate={{opacity:1 , scale:1}}
transition={{duration:0.5}}><img src="/LOGO.png" alt="" /></motion.span>  
<div className="social" >
    <motion.span initial={{opacity:0 ,scale:0.5}}
animate={{opacity:1 , scale:1}}
transition={{duration:0.5}}>
    <a href="https://www.linkedin.com/in/praveen-kumar-m-15118323b/ " target='_blank'><img src="/linkedin.png" alt="LinkedIn" /></a>   </motion.span>
    <motion.span initial={{opacity:0 ,scale:0.5}}
animate={{opacity:1 , scale:1}}
transition={{duration:0.5}}>  <a href="https://github.com/Praveenkumar7902" target='_blank'><img src="/github.png" alt="GitHub" /></a> </motion.span>
     <motion.span initial={{opacity:0 ,scale:0.5}}
animate={{opacity:1 , scale:1}}
transition={{duration:0.5}}> <a href="https://gitlab.com/mpraveenkumar7902" target='_blank'><img src="/gitlab.png" alt="GitLab" /></a> </motion.span>
    <motion.span initial={{opacity:0 ,scale:0.5}}
animate={{opacity:1 , scale:1}}
transition={{duration:0.5}}>  <a href="https://www.instagram.com/praveen._.msd/" target='_blank'><img src="/instagram.png" alt="Instagram" /></a> </motion.span>
     


</div>

</div>
    </div>
  )
}

export default Navbar;
