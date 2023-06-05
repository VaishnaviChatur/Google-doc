import GoogleButton from 'react-google-button'
import style from './login.module.css'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate =useNavigate()

    function Login(){
        navigate('/mainpage')
    }


    return(
        <>
        <h1 className={style.title}>Google Docs</h1>
        <GoogleButton 
        onClick={Login}
        className={style.btn}/>
        
        </>
    )
}