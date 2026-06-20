import { Link } from "react-router-dom";
import { projects } from "../Data/Projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#F7F3E9] px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        My Creative Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            to={`/project/${project.slug}`}
            key={project.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}