// components/ProjectCard.jsx
export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={title} className="project-image"/>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}
