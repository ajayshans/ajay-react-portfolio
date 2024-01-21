// Styling for links in navbar
export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg navbar-background">
        <div className="container-fluid">
            <a className="navbar-title">
                <h1 className="title-text px-3">Ajay Shan</h1>
            </a>
          <div className="px-5" id="navbarSupportedContent">
            <ul className="nav nav-tabs me-auto mb-2 mb-lg-0">
              {links.map((link, index) => (
                <li className = "nav-item" key={index}>
                  <h5>{link}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  