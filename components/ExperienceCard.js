/**
 * Карточка опыта работы с прогресс-баром навыков
 * ЗАЧЕМ: Визуализирует продолжительность и ключевые достижения каждой позиции
 * ПОЛЬЗА: Быстрое сканирование карьеры, понимание роста и специализации
 */
const ExperienceCard = ({ experience }) => {
  const {
    company,
    position,
    period,
    duration,
    achievements = [],
    skills = [],
    isCurrent = false
  } = experience

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{position}</h3>
          <p className="text-primary-600 font-medium">{company}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">{period}</p>
          <p className="text-gray-500 text-sm">{duration}</p>
        </div>
      </div>

      {/* Current Position Badge */}
      {isCurrent && (
        <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-4">
          Current Position
        </span>
      )}

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <svg className="w-4 h-4 text-primary-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Skills & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard