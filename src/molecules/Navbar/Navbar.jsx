import style from './Navbar.module.css'
import { HiDocumentText } from 'react-icons/hi'

import { useState } from 'react'
import Zoom from '../../atom/Zoom/Zoom'
import Fontsize from '../../atom/Fontsize/Fontsize'
import TextAlign from '../../atom/TextAlign.jsx/TextAlign'




export default function Navbar(){
    
    const[title, setTitle]=useState('')

    return(
        <div className={style.outer}>
        <section className={style.above}>
     < HiDocumentText className={style.icon}/>
       <input placeholder='Untitled Document' value={title} onChange={(e)=>{setTitle(e.target.value)}} className={style.fileName}/>
     <div className={style.section}>
     </div>
    </section> 
   
    <section className={style.below}>

       <Zoom/>
       <span className={style.partition}>|</span>
       <Fontsize/>
       <span className={style.partition}>|</span>
     < TextAlign/>
    </section>
        </div>
        
    )
}