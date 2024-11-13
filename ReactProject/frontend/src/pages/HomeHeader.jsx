import { Link } from "react-router-dom";


export default function HomeHeader() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/employees">Empleados</Link>
                </li>
                <li>
                    <Link to="/users">Usuarios</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
