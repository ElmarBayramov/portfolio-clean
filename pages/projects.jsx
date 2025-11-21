import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'

/**
 * Страница проектов с измеримыми результатами
 * ЗАЧЕМ: Демонстрирует конкретные достижения и бизнес-impact
 * ПОЛЬЗА: Показывает способность достигать измеримых результатов
 */
export default function Projects() {
  const projects = [
    {
      title: 'MAIZE Restaurant Transformation',
      company: 'MAIZE',
      period: '2024',
      category: 'F&B Operations',
      description: 'Comprehensive operational transformation for two restaurant units, including flagship COP29 location. Implemented full business system overhaul from procurement to customer experience.',
      metrics: [
        { value: 'ERP', label: 'System Implemented' },
        { value: '22%', label: 'Retention Increase' },
        { value: 'Cost', label: 'Reduction Achieved' }
      ],
      technologies: ['IIKO ERP', 'Data Analytics', 'Loyalty Programs', 'Process Automation', 'KPI Dashboards']
    },
    {
      title: 'Industrial Marketing Strategy',
      company: 'Gidromashservis CJSC',
      period: '2025',
      category: 'B2B Marketing',
      description: 'Developed and executed comprehensive B2B marketing strategy for industrial equipment company, focusing on international exhibitions and digital presence.',
      metrics: [
        { value: 'SEO/SEM', label: 'Implemented' },
        { value: 'International', label: 'Exhibitions' },
        { value: 'Lead Gen', label: 'Optimized' }
      ],
      technologies: ['B2B Strategy', 'International Marketing', 'SEO/SEM', 'Lead Generation', 'Market Research']
    },
    {
      title: 'Revenue Growth Initiative',
      company: 'Multiple Projects',
      period: '2016-2024',
      category: 'Growth Strategy',
      description: 'Delivered consistent revenue growth across multiple retail and F&B projects through data-driven strategies, omnichannel marketing, and operational optimizations.',
      metrics: [
        { value: '500%', label: 'Revenue Growth' },
        { value: '4.5x', label: 'Marketing ROI' },
        { value: '20%', label: 'Sales Increase' }
      ],
      technologies: ['Data Analytics', 'Omnichannel Strategy', 'ROAS Optimization', 'Budget Management']
    },
    {
      title: 'Loyalty Program Development',
      company: 'Music Gallery & MAIZE',
      period: '2018-2024',
      category: 'Customer Retention',
      description: 'Designed and launched customer loyalty programs that significantly increased repeat purchase revenue and customer lifetime value across different business models.',
      metrics: [
        { value: '22%', label: 'Repeat Revenue' },
        { value: '40%', label: 'Foot Traffic' },
        { value: '25%', label: 'Online Sales' }
      ],
      technologies: ['Loyalty Systems', 'CRM', 'Customer Analytics', 'Retention Strategy']
    },
    {
      title: 'Data Architecture Transformation',
      company: 'Accenture',
      period: '2022',
      category: 'Data Strategy',
      description: 'Transformed marketing and sales data infrastructure for clients, improving data quality, reporting accuracy, and enabling data-driven decision making.',
      metrics: [
        { value: 'Data', label: 'Quality Improved' },
        { value: 'KPI', label: 'Frameworks' },
        { value: 'Workflow', label: 'Optimization' }
      ],
      technologies: ['Data Architecture', 'KPI Frameworks', 'Sales Transformation', 'Tech Infrastructure']
    },
    {
      title: 'Media Operations Scaling',
      company: 'ADMEDIA',
      period: '2018-2019',
      category: 'Agency Growth',
      description: 'Transformed media operations into profit center through process automation, team development, and full-funnel campaign optimization across digital and traditional channels.',
      metrics: [
        { value: '5x', label: 'Revenue Growth' },
        { value: 'Automated', label: 'Reporting' },
        { value: 'High-Performing', label: 'Team Built' }
      ],
      technologies: ['Media Planning', 'Process Automation', 'Team Leadership', 'Campaign Optimization']
    }
  ]

  const categories = [...new Set(projects.map(project => project.category))]

  return (
    <>
      <Head>
        <SEO 
          title="Projects & Achievements - Elmar Bayramov"
          description="Successful projects and measurable achievements across marketing, operations, and business transformation."
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow section-padding bg-gray-50">
          <div className="container-custom">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Projects & Achievements
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Selected projects demonstrating measurable impact across marketing, operations, 
                and business transformation initiatives.
              </p>
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">500%</div>
                <div className="text-gray-600 text-sm">Revenue Growth</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">4.5x</div>
                <div className="text-gray-600 text-sm">Marketing ROI</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">250%</div>
                <div className="text-gray-600 text-sm">ROAS</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">22%</div>
                <div className="text-gray-600 text-sm">Retention Increase</div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            {/* Methodology Section */}
            <div className="max-w-4xl mx-auto mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Approach & Methodology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Strategic Framework</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Data-First Analysis:</strong> Base all decisions on quantitative insights and market intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>System Thinking:</strong> Build scalable processes rather than one-off solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Full-Stack Mindset:</strong> Connect strategy → systems → operations → growth</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Execution Principles</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Measurable Outcomes:</strong> Define clear KPIs and track progress rigorously</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Iterative Improvement:</strong> Launch, measure, learn, and optimize continuously</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span><strong>Cross-Functional Alignment:</strong> Ensure all departments work toward shared objectives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}