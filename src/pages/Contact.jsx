import { FaEnvelope, } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F7F3E9] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#A67C52] uppercase tracking-[4px] text-sm">
            Contact
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Work Together
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Have a project, collaboration, or creative idea in mind?
            I'd love to hear from you and bring your vision to life.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you need branding, social media design,
              marketing materials, or creative visuals, let's
              create something meaningful together.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">
                  Email
                </h4>
                <p className="text-gray-500">
                  faiqahahmadi015@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Location
                </h4>
                <p className="text-gray-500">
                  Afghanistan
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Availability
                </h4>
                <p className="text-gray-500">
                  Available for freelance projects
                </p>
              </div>
            </div>

           
          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#A67C52]"
              />

              <button
                type="submit"
                className="w-full bg-[#A67C52] text-white py-4 rounded-xl font-medium hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-white rounded-3xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Creative Project?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always excited to collaborate on branding,
            visual identity, social media design, and
            creative marketing projects.
          </p>

          <button className="mt-8 px-8 py-4 rounded-full bg-[#A67C52] text-white hover:scale-105 transition">
            Start a Conversation
          </button>
        </div>

      </div>
    </div>
  );
}