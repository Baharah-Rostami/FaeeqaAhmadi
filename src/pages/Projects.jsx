import { Link } from "react-router-dom";
import { projects } from "../Data/Projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#F7F3E9] px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-[#A67C52] uppercase tracking-[4px] text-sm">
          Portfolio
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Selected Creative Works
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          A collection of branding, print, editorial, and visual design projects
          crafted with creativity and attention to detail.
        </p>
      </div>
      <h1 className="text-3xl font-bold text-center mb-12">
        My Creative Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            to={`/project/${project.slug}`}
            key={project.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6">
              <span className="text-sm text-[#A67C52]">
                {project.category}
              </span>

              <h3 className="text-xl font-semibold mt-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">
                {project.description}
              </p>
              <div className="mt-6">
                <span className=" inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#A67C52] text-white text-sm font-medium transition group-hover:translate-x-1">
                  View Project →
                </span>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}