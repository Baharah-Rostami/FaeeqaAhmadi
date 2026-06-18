import Hero from "../sections/Hero";
import FadeIn from "../Components/Animations/FadeIn";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    "Graphic Design",
    "Social Media Design",
    "Brand Identity",
    "Marketing Materials",
  ];

  const work = [
    { title: "Brand Identity", desc: "Modern logo system & identity design" },
    { title: "Social Media Kit", desc: "Engaging Instagram content system" },
    { title: "Poster Design", desc: "Promotional visual storytelling" },
  ];

  return (
    <div className="bg-[#F7F3E9] overflow-hidden">

      <Hero
        badge="Graphic Designer"
        title="Design That Feels Intentional"
        subtitle="I create visual identities and stories that connect brands with people."
        image="/FaeeqaLogo.jpg"
      />

      {/* INTRO */}
      <FadeIn>
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-[#D4AF37] uppercase text-sm tracking-widest">
                Overview
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D2E] leading-tight">
                I turn ideas into visual systems, not just designs.
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                My focus is on clarity, storytelling, and emotional connection.
                Every design decision is intentional and purpose-driven.
              </p>
            </div>

            <div className="bg-[#0F3D2E] rounded-2xl p-10 text-white">
              <h3 className="text-xl font-bold">Design Approach</h3>
              <p className="mt-4 text-gray-300 leading-7">
                I don’t just decorate. I structure meaning through typography,
                spacing, and visual hierarchy.
              </p>
            </div>

          </div>
        </section>
      </FadeIn>

      {/* WORK PREVIEW (NEW - IMPORTANT UX BLOCK) */}
      <FadeIn>
        <section className="py-28 bg-[#0F3D2E]">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-white text-center">
              Selected Work
            </h2>

            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {work.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-2 transition"
                >
                  <h3 className="text-white font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* SERVICES (modern hover UX instead of heavy cards) */}
      <FadeIn>
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-[#0F3D2E] text-center">
              What I Do
            </h2>

            <div className="mt-14 space-y-4">
              {services.map((s) => (
                <div
                  key={s}
                  className="group flex justify-between items-center border-b border-gray-200 py-5 hover:px-4 transition-all"
                >
                  <p className="text-lg font-medium text-[#0F3D2E]">
                    {s}
                  </p>
                  <span className="text-gray-400 group-hover:text-[#D4AF37]">
                    →
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-28 bg-[#F7F3E9] text-center">
          <h2 className="text-4xl font-bold text-[#0F3D2E]">
            Let’s build something meaningful
          </h2>

          <p className="mt-6 text-gray-600">
            I’m open to freelance work and collaborations.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-block px-10 py-4 bg-[#D4AF37] text-white rounded-full hover:scale-105 transition"
          >
            Contact Me
          </Link>
        </section>
      </FadeIn>

    </div>
  );
}