import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Faeeqa<span className="text-[#D4AF37]">.</span>
            </h2>

            <p className="text-[#B7D3A8] leading-relaxed">
              Graphic designer creating memorable visual identities,
              branding experiences, and creative solutions that connect
              with audiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-5">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-[#D4AF37] transition"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:faeeqa@example.com"
                className="flex items-center gap-3 text-[#B7D3A8] hover:text-[#D4AF37] transition"
              >
                <Mail size={18} />
                <span>faiqahahmadi015@gmail.com</span>
              </a>

              <a
                href="tel:+123456789"
                className="flex items-center gap-3 text-[#B7D3A8] hover:text-[#D4AF37] transition"
              >
                <Phone size={18} />
                <span>+93 793 098 525</span>
              </a>
            </div>

        
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {year} Faeeqa Ahmadi. All rights reserved.
          </p>

          <p className="text-white/50 text-sm">
            Crafted with creativity and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}