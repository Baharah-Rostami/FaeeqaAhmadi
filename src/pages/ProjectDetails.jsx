import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/Projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/" className="text-blue-500">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F3E9] px-6 py-16">
      <Link to="/" className="text-blue-600 mb-6 inline-block">
        ← Back
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-100 object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-500 mb-4">{project.category}</p>

          <p className="text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}