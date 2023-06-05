import Nav from '../../Molecules/Navbar/navbar'
import Editor from '../Editor/editor'
import Login from '../Login/login'
import style from './main.module.css'

export default function Main(){
    return(
        <div className={style.outer}>
            <Nav/>
            <Editor/> 
    
        </div>
    )
}