import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        ;
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Tanishak Singhal
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  target={name === "DSA sheet" ? "_blank" : undefined}
                  rel={name === "DSA sheet" ? "noopener noreferrer" : undefined}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className="hamburger lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`line line-1 ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`line line-2 ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`line line-3 ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="mobile-menu">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    target={name === "DSA sheet" ? "_blank" : undefined}
                    rel={name === "DSA sheet" ? "noopener noreferrer" : undefined}
                    onClick={closeMobileMenu}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="contact-btn-mobile" onClick={closeMobileMenu}>
              Contact me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
