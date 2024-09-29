import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='sidebar-ul'>
                <li>
                    <Link to="">Ver eventos</Link>
                </li>
                <li>
                    <Link to="">Entradas compradas</Link>
                </li>
                <li>
                    <Link to="">Cerrar sesión</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;