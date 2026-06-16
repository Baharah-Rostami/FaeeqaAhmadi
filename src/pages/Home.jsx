import Hero from "../sections/Hero";
import FadeIn from "../Components/Animations/FadeIn";
import { Link } from "react-router-dom";
export default function Home() {
  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Creative Design",
    "Visual Storytelling",
    "Attention to Detail",
  ];

  const services = [
    {
      title: "Graphic Design",
      desc: "Creating professional and visually appealing designs tailored to each project.",
    },
    {
      title: "Social Media Design",
      desc: "Designing engaging content that helps brands connect with their audience.",
    },
    {
      title: "Brand Identity",
      desc: "Building memorable visual identities that reflect a brand's personality.",
    },
    {
      title: "Marketing Materials",
      desc: "Designing banners, posters, and promotional graphics for print and digital use.",
    },
  ];

  return (
    <div className="bg-[#F7F3E9] overflow-hidden">
      <Hero
        badge="Graphic Designer"
        title="Creative Designs That Tell Your Story"
        subtitle="Helping brands communicate through modern, memorable, and visually engaging designs."
        image="/FaeeqaLogo.jpg"
      />

      {/* About */}
      <FadeIn>
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-medium">
              About Me
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F3D2E]">
              Passionate About Creative Design
            </h2>

            <p className="mt-6 text-gray-600 leading-8 max-w-3xl">
              I'm Faeeqa Ahmadi, a graphic designer with experience in
              Photoshop and Illustrator. I enjoy transforming ideas into
              creative and meaningful visual designs that communicate clearly
              and leave a lasting impression.
            </p>

            <p className="mt-4 text-gray-600 leading-8 max-w-3xl">
              I focus on quality, attention to detail, and understanding each
              client's unique vision. While my experience with After Effects is
              still growing, I am always eager to learn new tools and expand my
              creative skills.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Skills */}
      <FadeIn>
        <section className="py-24 bg-[#0F3D2E]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-4xl font-bold text-white mb-12">
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 hover:-translate-y-2 hover:border-[#D4AF37] transition-all duration-300"
                >
                  <h3 className="text-white font-medium">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Services */}
      <FadeIn>
        <section className="py-24 bg-[#F7F3E9]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-4xl font-bold text-[#0F3D2E] mb-12">
              What I Do
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-[#0F3D2E] font-bold text-lg mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Philosophy */}
      <FadeIn>
        <section className="py-24 bg-[#111111]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
              Design Philosophy
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Creativity Meets Purpose
            </h2>

            <p className="text-gray-400 leading-8 mt-8">
              I believe great design is more than aesthetics. It should tell a
              story, communicate clearly, and create meaningful connections.
              Every project is an opportunity to bring ideas to life through
              thoughtful and impactful design.
            </p>
          </div>
        </section>
      </FadeIn>



      {/* CTA */}
      <FadeIn>
        <section className="py-24 bg-linear-to-r from-[#F7F3E9] to-[#EFE7D8]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E]">
              Let's Create Something Beautiful Together
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Whether you need branding, social media designs, or creative
              visuals, I'd love to help bring your ideas to life.
            </p>

            <Link to="/contact"
              className="mt-10 inline-flex items-center justify-center px-10 py-4 rounded-full bg-linear-to-r from-[#D4AF37] to-[#C9A227]
           text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get In Touch
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}