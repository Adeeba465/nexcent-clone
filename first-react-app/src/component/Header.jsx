function Header() {
  return (
    <header className="header">

      <a href="#" className="logo">
        <img src="./assets/logo.png" alt="Nexcent Logo" />
        Nexcent
      </a>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Features</a>
        <a href="#">Products</a>
        <a href="#">Contact Us</a>
        <a href="#">Testimonials</a>
      </nav>

      <div className="buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>

    </header>
  );
}

export default Header;