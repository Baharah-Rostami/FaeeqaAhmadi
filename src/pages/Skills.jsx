import Hero from "../sections/Hero";
import FadeIn from "../Components/Animations/FadeIn";
import { expertise, processSteps, softwareSkills } from "../Data/Skill";
import { useProgressOnView } from "../hook/useProgress";

export default function Skills() {
  return (
    <>
      <Hero
        badge="Creative Expertise"
        title="Skills & Design Process"
        subtitle="Combining creativity, strategy, and attention to detail to craft meaningful visual experiences."
        image="/best-graphic-design-deals.webp"
      />

      <section className="bg-[#F7F3E9] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Bento Grid */}
          <FadeIn>
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center text-[#2A2A2A] mb-12">
                Expertise
              </h2>

              <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">

                {expertise.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className={`bg-white border border-[#D9CBB6] rounded-3xl p-8 shadow-sm hover:-translate-y-2 transition duration-300
                        ${item.featured
                          ? "md:col-span-2 md:row-span-2"
                          : ""
                        }`}
                    >
                      <Icon className="text-4xl text-[#D4AF37] mb-5" />

                      <h3 className="text-2xl font-bold text-[#2A2A2A] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Process Timeline */}
          <FadeIn>
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center text-[#2A2A2A] mb-14">
                My Design Process
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={index}
                      className="text-center relative"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-white border border-[#D4AF37]/30 flex items-center justify-center shadow-sm">
                        <Icon className="text-3xl text-[#D4AF37]" />
                      </div>

                      <h3 className="mt-4 font-semibold text-xl text-[#2A2A2A]">
                        {step.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Software Skills */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-10 border border-[#D9CBB6]">
              <h2 className="text-4xl font-bold text-[#2A2A2A] mb-10">
                Design Tools
              </h2>

              <div className="space-y-8">
                {softwareSkills.map((skill, index) => {
                  const { ref, width } = useProgressOnView(skill.percentage);

                  return (
                    <div key={index} ref={ref}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#2A2A2A]">
                          {skill.name}
                        </span>

                        <span className="text-[#B8860B] font-semibold">
                          {Math.round(width)}%
                        </span>
                      </div>

                      <div className="h-3 bg-[#EFE6D7] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#D4AF37] rounded-full transition-all"
                          style={{
                            width: `${width}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Philosophy */}
          <FadeIn>
            <div className="mt-24 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#2A2A2A] mb-6">
                Design Philosophy
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                I am a graphic designer experienced in Adobe Photoshop and
                Adobe Illustrator, passionate about creating creative and
                practical visual designs. My main focus is business card
                design, where I strive to create elegant and professional
                visuals that leave a lasting impression. While I am still
                expanding my skills in Adobe After Effects, I continuously
                explore new tools and techniques to grow as a designer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}