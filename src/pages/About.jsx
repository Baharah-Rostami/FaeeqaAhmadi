import Hero from "../sections/Hero";
import FadeIn from "../Components/Animations/FadeIn";
import { Link } from "react-router-dom";

export default function About() {
  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Brand Identity",
    "Social Media Design",
    "Visual Storytelling",
    "Creative Thinking",
  ];

  return (
    <div className="bg-[#F7F3E9] overflow-hidden">

      <Hero
        badge="About Me"
        title="Designing with Purpose, Not Just Style"
        subtitle="I’m Faeeqa Ahmadi — a graphic designer focused on meaningful, clean, and emotionally engaging visuals."
        image="/Graphic-designer.jfif"
      />

      <FadeIn>
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

            {/* Left sticky vibe text */}
            <div className="md:col-span-5">
              <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
                Who I Am
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D2E] leading-tight">
                I turn ideas into visual stories that connect.
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                My design journey started with curiosity and grew into a passion
                for creating visuals that communicate clearly and leave a strong
                impression.
              </p>
            </div>

            {/* Right content card */}
            <div className="md:col-span-7 space-y-6">
              <div className="bg-[#F7F3E9] border border-[#D4AF37]/20 rounded-2xl p-8">
                <h3 className="text-[#0F3D2E] font-bold text-xl">
                  My Focus
                </h3>
                <p className="mt-3 text-gray-600 leading-7">
                  I focus on clarity, balance, and emotion in design. Every project
                  is an opportunity to tell a story visually, not just decorate it.
                </p>
              </div>

              <div className="bg-[#0F3D2E] rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl">
                  My Approach
                </h3>
                <p className="mt-3 text-gray-300 leading-7">
                  I believe good design starts with understanding people first,
                  then translating that understanding into visuals.
                </p>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-28 bg-[#0F3D2E]">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white">
                Skills & Strengths
              </h2>
              <p className="mt-4 text-gray-300">
                Tools and abilities I use to bring ideas to life
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    bg-white/5 border border-[#D4AF37]/20
                    rounded-xl p-6
                    hover:-translate-y-2 hover:border-[#D4AF37]
                    transition-all duration-300
                  "
                >
                  <p className="text-white font-medium">{skill}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
                Growth
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D2E]">
                Always Learning, Always Improving
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                I continuously explore new design tools and techniques. While I
                already work confidently with Photoshop and Illustrator, I am
                expanding into motion design and advanced branding.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#0F3D2E]">Design Growth</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Improving skills through real projects
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#0F3D2E]">Creative Thinking</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Learning how to solve visual problems
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#0F3D2E]">Future Goals</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Expanding into motion & brand strategy
                </p>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

    </div>
  );
}