import style from './navbar.module.css'
import { HiDocumentText } from 'react-icons/hi'

export default function Nav(){

    return(
        <div className={style.outer}>
            <section className={style.above}>
          < HiDocumentText className={style.icon}/>
          <div>
            <input placeholder='Untitled Document' className={style.fileName}/>
          </div>
          </section>

          
        </div>
    )
}