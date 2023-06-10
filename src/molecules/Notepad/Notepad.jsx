import React from 'react'
import styles from './Notepad.module.css'
function Notepad() {
  return (
    <div className={styles.outer}
    id='myDiv'
    contentEditable={true}
    spellCheck={false}
    >

    </div>
  )
}

export default Notepad