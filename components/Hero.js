/**
 * Hero секция главной страницы
 * ЗАЧЕМ: Сразу показывает ключевую ценность и призыв к действию
 * ПОЛЬЗА: Высокая конверсия, сразу понятно о чем сайт и чем занимается человек
 */
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Elmar <span className="text-primary-600">Bayramov</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Award-Winning Marketing & Operations Leader | 
            <span className="block">Data-Driven Strategist | Builder of High-Performance Business Systems</span>
          </p>

          {/* Short Bio */}
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Strategic marketing and operations leader with 10+ years of proven impact across F&B, retail, 
            advertising, and B2B/industrial sectors. I specialize in building marketing ecosystems, 
            implementing ERP/CRM infrastructures, and optimizing operations to unlock measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/Elmar_Bayramov_CV_2025_eng.pdf" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a 
              href="/experience" 
              className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              View Experience
            </a>
          </div>

          {/* Achievement Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary-600 mb-2">500%</div>
              <div className="text-gray-600">Revenue Growth</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary-600 mb-2">4.5x</div>
              <div className="text-gray-600">Marketing ROI</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero