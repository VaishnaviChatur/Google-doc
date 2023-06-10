import styles from './Fontsize.module.css'

import { AiOutlinePrinter,AiOutlineBold,AiOutlineItalic, AiOutlineUnorderedList,AiOutlineOrderedList,AiOutlineAlignLeft,AiOutlineUnderline } from 'react-icons/ai'

import {MdFormatColorText,MdLink} from 'react-icons/md'
import {BiHighlight,BiImage} from'react-icons/bi'
import {BsListCheck} from 'react-icons/bs'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState, useRef } from 'react'
import {BiStrikethrough} from 'react-icons/bi'

export default function Fontsize(){
    const colorRef=useRef()
   const[size, setSize]=useState(0)
   const fontSize=[1,2,3,4,5,6,7,8,9,10]

    function handleFontSize(e){
        document.execCommand("fontSize", false, e.target.value)
    }
 function toBold(){
    document.execCommand('bold',false,null);
 }
 function toItalic(){
    document.execCommand('italic',false,null);
 }
 function toUnder(){
    document.execCommand('underline',false,null);
 }
 function toStrick(){
    document.execCommand('strikeThrough',false,null);
 }
 const handleColor = (e) => {
    document.execCommand("foreColor", "", e.target.value);
  };
  //fontsize
  const fontFamilyList = [
    "serif",
    "arial",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];

function handlefamily(e){
    document.execCommand("fontName", "", e.target.value);
  }

  //hading
  const handheadingclick=(tagname)=>{
    document.execCommand("formatBlock", false, tagname);

}
    return(
        <>
<select
      className={styles.option1}
      onChange={(e) => handheadingclick(e.target.value)}
    >
      <option>normal text</option>
      <hr />
      <option className={styles.option} value="h1">
        heading1
      </option>
      <option className={styles.option} value="h2">
        heading2
      </option>
      <option className={styles.option} value="h3">
        heading3
      </option>
      <option className={styles.option} value="h4">
        heading4
      </option>
      <option className={styles.option} value="h5">
        heading5
      </option>
      <option className={styles.option} value="h6">
        heading6
      </option>
     
    </select>


                     <select className={styles.fontSelector} onChange={(e) => handlefamily(e)}>
              <option>san-sherif</option>
              {fontFamilyList.map((element) => (
                  <option >{element}</option>
              
              ))}
              </select>
             
                

                <span className={styles.partition}>|</span>
                <select id='fontSize' onChange={handleFontSize}>   
                {
                    fontSize.map((num)=>(
                        <option key={num}>{num}</option>
                    ))
                }
                </select>
                 <span className={styles.partition}>|</span>
                 <button className={styles.stylebtn} onClick={toBold} ><AiOutlineBold /></button>
                <button  className={styles.stylebtn} onClick={toItalic} ><AiOutlineItalic/></button>
                <button  className={styles.stylebtn} onClick={toUnder} >  <AiOutlineUnderline/></button>
                <button  className={styles.stylebtn} onClick={toStrick}><BiStrikethrough/></button>
                <button className={styles.stylebtn}  onClick={()=>colorRef.current.click()}><MdFormatColorText/></button>
                <input id="colorPicker"
                type='color'
                style={{display:"none"}}
                onChange={(e)=>handleColor(e)}
                ref={colorRef}
                />
                <BiHighlight/> 
        </>
    )
}