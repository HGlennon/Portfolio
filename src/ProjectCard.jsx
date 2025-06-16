export default function ProjectCard({ title, description, link, image, meta }) {
  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.add('hovered');
    }
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.remove('hovered');
    }
  };

  const getOptimizedSources = (filename) => {
    const base = filename.replace(/\.(png|jpg|jpeg|webp|avif)$/i, '');
    return {
      webp: `/images/${base}.webp`,
      avif: `/images/${base}.avif`,
      fallback: `/images/${filename}`,
    };
  };

  const { webp, avif, fallback } = getOptimizedSources(image);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <picture>
          <source srcSet={avif} type="image/avif" />
          <source srcSet={webp} type="image/webp" />
          <img
            src={fallback}
            alt={title}
            className="project-image"
            loading="lazy"
            width="600"
            height="400"
          />
        </picture>
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {meta && (
          <div className="project-meta">
            {meta}
          </div>
        )}
      </div>
    </a>
  );
}
