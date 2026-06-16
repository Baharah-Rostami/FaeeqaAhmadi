import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Palette, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="max-w-7xl mx-auto">
       
        <div className="bg-black/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-full px-6 md:px-8 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Palette size={22} className="text-[#D4AF37]" />
            <span className="text-white">
              FAIQA<span className="text-[#D4AF37]">.</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#B7D3A8] hover:text-[#D4AF37]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            <NavLink
              to="/contact"
              className="hidden md:flex items-center justify-center h-10 w-10 rounded-full bg-[#D4AF37] text-black font-bold hover:rotate-12 transition-transform duration-300"
            >
              →
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#D4AF37]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-125 opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-6">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-[#D4AF37] font-medium"
                        : "text-[#B7D3A8] hover:text-[#D4AF37]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-[#D4AF37] text-black py-3 rounded-full text-center font-semibold hover:opacity-90 transition"
              >
                Let's Work Together
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}