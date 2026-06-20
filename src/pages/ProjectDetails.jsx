import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/Projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F3E9] px-6 py-16">
      <Link to="/" className="text-blue-600 mb-6 inline-block">
        ← Back
      </Link>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#F5E6D3] text-[#A67C52] text-sm">
              {project.category}
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mt-4">
              {project.title}
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-10 space-y-6 border-t border-gray-200 pt-8">
              <div>
                <h4 className="font-semibold text-gray-900">Client</h4>
                <p className="text-gray-500">Personal Project</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Tools</h4>
                <p className="text-gray-500">
                  Adobe Photoshop, Adobe Illustrator
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Project Type</h4>
                <p className="text-gray-500">{project.category}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}