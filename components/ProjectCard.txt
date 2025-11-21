/**
 * Карточка проекта с метриками и технологиями
 * ЗАЧЕМ: Демонстрирует измеримые результаты и использованные инструменты
 * ПОЛЬЗА: Конкретные примеры успеха, понимание технического стека
 */
const ProjectCard = ({ project }) => {
  const {
    title,
    company,
    period,
    description,
    metrics = [],
    technologies = [],
    category
  } = project

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {category && (
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
        <p className="text-primary-600 font-medium">{company}</p>
        <p className="text-gray-500 text-sm">{period}</p>
      </div>

      {/* Description */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Metrics */}
      {metrics.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="mt-auto">
          <h4 className="font-semibold text-gray-900 mb-3">Technologies & Methods:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard