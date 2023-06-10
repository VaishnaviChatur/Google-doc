
import { GrUndo, GrRedo } from 'react-icons/gr'
import { AiOutlinePrinter,AiOutlineBold,AiOutlineItalic, AiOutlineUnorderedList,AiOutlineOrderedList,AiOutlineAlignLeft,AiOutlineUnderline } from 'react-icons/ai'
import { SiAcademia } from 'react-icons/si'
import { BiPaintRoll } from 'react-icons/bi'

import styles from './Zoom.module.css'
// import { nameOfFile } from "./FormatingSection";
export default function Zoom({myDiv}){
    function redoDoc(){
        document.execCommand('redo',false,null);
    }
    function undoDoc(){
        document.execCommand('undo',false,null);
    }

    //zoom
    const handleFit=(myDiv, size)=>{
        if (size=== "100%") {
          document.getElementById(myDiv).style.transform = "scale(1,1)";
        } else if (size === "150%") {
            document.getElementById(myDiv).style.transform = "scale(1.5,1)";
        } else if (size === "200%") {
            document.getElementById(myDiv).style.transform = "scale(2,1)";
        } else if (size === "75%") {
            document.getElementById(myDiv).style.transform = "scale(0.75,1)";
        }else if (size === "50%") {
            document.getElementById(myDiv).style.transform = "scale(0.5,1)";
        } else  if (size === "125%") {
            document.getElementById(myDiv).style.transform = "scale(1.25,1)";
        }
    
      }
    //
  ///printer

function handlePrintScreen(myDiv) {
    let mywindow = window.open(
      "",
      "PRINT",
      "height=650,width=900,top=100,left=100"
    );
    mywindow.print();
  }
  
    return(
        <>
         <button className={styles.stylebtn}  onClick={undoDoc}>  <GrUndo/></button>
                <button className={styles.stylebtn}  onClick={redoDoc}><GrRedo/></button>
               {/* <button onClick={() => printDivFunction("my-div", nameOfFile)}><AiOutlinePrinter/></button>  */}
             <AiOutlinePrinter onClick={()=>handlePrintScreen("myDiv")}/>
                <SiAcademia/>
                <BiPaintRoll/>
                <select className={styles.option1} defaultValue={"100%"} onChange={(e)=>handleFit("myDiv", e.target.value)}>
                   <option>100%</option>
                 <option className={styles.option}>50%</option>
                 <option className={styles.option}>75%</option>
                 <option className={styles.option}>100%</option>
                 <option className={styles.option}>125%</option>
                 <option className={styles.option}>150%</option>
                 <option className={styles.option}>200%</option></select>

        </>
    )
}