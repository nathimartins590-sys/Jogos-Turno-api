import './style.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
<h1>Seja bem vindo(a)</h1>
            <ul><h2> 
                <button> <Link to='/'>Inicio </Link></button></h2> </ul>

            <ul><h2> <button> <Link to='/User'> User</Link></button></h2></ul>
        </>
    )
}

export default Header