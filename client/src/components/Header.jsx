import { Link } from "react-router-dom"

export function Header() {
    return (
    <nav className="navbar navbar-light bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <ul className="nav nav-pills me-auto mb-2 mb-lg-0 topbar-links">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/java">JavaScript</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">Komentarai</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}