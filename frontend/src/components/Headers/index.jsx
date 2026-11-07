import './style.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
<h1>Seja bem vindo(a)</h1>
            <ul><h2> 
                <Link to='/'>Inicio </Link></h2> </ul>

            <ul><h2><Link to='/User'> User</Link></h2></ul>
        </>
    )
}

export default Header