
import { AiOutlinePrinter,AiOutlineBold,AiOutlineItalic, AiOutlineUnorderedList,AiOutlineOrderedList,AiOutlineAlignLeft,AiOutlineUnderline } from 'react-icons/ai'

import {MdFormatColorText,MdLink} from 'react-icons/md'
import {BiHighlight,BiImage} from'react-icons/bi'
import {BsListCheck} from 'react-icons/bs'
import { BiAlignLeft,BiAlignMiddle, BiAlignRight } from "react-icons/bi";
import styles from './TextAlign.module.css'
import { useRef } from 'react'
export default function TextAlign(){
    function toLeft(){
        document.execCommand('justifyLeft',false,null);
     }
     function toCenter(){
        document.execCommand('justifyCenter',false,null);
     }
     function toRight(){
        document.execCommand('justifyRight',false,null);
     }
    
     function toUnoderlist(){
        document.execCommand('insertUnorderedList',false,null);
     }
     function toOderlist(){
        document.execCommand('insertOrderedList',false,null);
     }

    //  image
    const fileRef= useRef(null)
    

   function insertImage(){
    fileRef.current.click();
  }


    return(
        <>
                <MdLink/>
                <input type='file' ref={fileRef} style={{display:"none"}}/> 
                <button  className={styles.stylebtn} onClick={insertImage}><BiImage/> </button>
           
             <button  className={styles.stylebtn} onClick={toLeft}>   <BiAlignLeft /></button>
             <button  className={styles.stylebtn} onClick={toCenter}>     <BiAlignMiddle /></button>
             <button   className={styles.stylebtn} onClick={toRight}>         <BiAlignRight /></button>
             <button   className={styles.stylebtn} onClick={toUnoderlist}>   <AiOutlineUnorderedList/> </button>
            <button  className={styles.stylebtn}  onClick={ toOderlist}   ><AiOutlineOrderedList/></button> 
        </>
    )
}