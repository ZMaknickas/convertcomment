import {Link, NavLink} from "react-router-dom"

export function Footer() {
    return (
    <nav className="navbar navbar-light bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <ul className="nav nav-pills me-auto mb-2 mb-lg-0 topbar-links">
          <li className="nav-item">
            <div className="text-center text-muted">
             &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}