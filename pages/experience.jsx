import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import ExperienceCard from '@/components/ExperienceCard'

/**
 * Страница опыта работы с хронологией карьеры
 * ЗАЧЕМ: Показывает профессиональный рост и разнообразие опыта
 * ПОЛЬЗА: Демонстрирует эволюцию навыков и достижения в разных ролях
 */
export default function Experience() {
  const experiences = [
    {
      company: '"Gidromashservis" CJSC',
      position: 'Marketing Manager',
      period: 'May 2025 – Present',
      duration: 'Current',
      isCurrent: true,
      achievements: [
        'Lead marketing strategy for B2B industrial equipment',
        'Organize participation in international industry exhibitions to drive lead acquisition',
        'Oversee corporate website development and implement SEO/SEM practices',
        'Build marketing materials (catalogs, brochures, corporate booklets)',
        'Conduct competitor and market intelligence to inform management decisions'
      ],
      skills: ['B2B Marketing', 'Industrial Equipment', 'SEO/SEM', 'Lead Generation', 'Market Research']
    },
    {
      company: 'MAIZE',
      position: 'CFO | CMO | Operations Manager',
      period: 'Jan 2024 – Dec 2024',
      duration: '1 year',
      achievements: [
        'Oversaw operations, finance, and marketing for two restaurant units, including COP29 flagship',
        'Implemented IIKO ERP, optimizing procurement → inventory → sales workflow',
        'Built data-driven menu engineering process and launched loyalty program boosting retention',
        'Reduced costs through vendor renegotiation and workflow automation',
        'Established financial controls, real-time dashboards, and KPI tracking'
      ],
      skills: ['ERP Implementation', 'Restaurant Operations', 'Financial Controls', 'Loyalty Programs', 'Process Automation']
    },
    {
      company: 'MILLENIUM',
      position: 'Operations Manager',
      period: 'Sep 2023 – Jan 2024',
      duration: '5 months',
      achievements: [
        'Managed finance, procurement, HR, and vendor operations for events business',
        'Delivered payroll, payments, and financial reporting',
        'Optimized procurement workflows and inventory control',
        'Ensured smooth coordination across all departments and staff units'
      ],
      skills: ['Event Management', 'Procurement', 'HR Operations', 'Vendor Management', 'Financial Reporting']
    },
    {
      company: 'ACCENTURE',
      position: 'Sales & Marketing Data Architect',
      period: 'Apr 2022 – Sep 2022',
      duration: '6 months',
      achievements: [
        'Translated business needs into data architectures for marketing/sales transformation',
        'Audited tech infrastructure and improved segmentation & lead generation workflows',
        'Led training on KPI frameworks and data system usage',
        'Enhanced data quality, reporting accuracy, and analytical workflows'
      ],
      skills: ['Data Architecture', 'Sales Transformation', 'KPI Frameworks', 'Data Quality', 'Tech Infrastructure']
    },
    {
      company: 'RTS',
      position: 'Head of Hood Cleaning Department',
      period: 'Oct 2020 – Nov 2021',
      duration: '1 year 2 months',
      achievements: [
        'Rebuilt industrial cleaning operations, reducing turnaround time and improving quality',
        'Expanded client base through targeted marketing and partnership programs',
        'Developed SOPs and field safety protocols'
      ],
      skills: ['Industrial Operations', 'SOP Development', 'Client Acquisition', 'Safety Protocols', 'Process Improvement']
    },
    {
      company: 'Akseuar Inşaat',
      position: 'Marketing Manager',
      period: 'Jan 2020 – Oct 2020',
      duration: '10 months',
      achievements: [
        'Developed premium marketing strategy targeting architects & designers',
        'Executed digital/offline campaigns increasing showroom traffic and B2B inquiries',
        'Built partnerships with interior designers and construction firms',
        'Supervised brand content, catalogs, and showroom merchandising'
      ],
      skills: ['Premium Marketing', 'B2B Strategy', 'Partnership Development', 'Brand Management', 'Showroom Marketing']
    },
    {
      company: 'ADMEDIA',
      position: 'Media Director',
      period: 'Feb 2018 - Dec 2019',
      duration: '1 year 11 months',
      achievements: [
        'Grew agency revenue 5x by transforming media operations into a profit center',
        'Managed full-funnel advertising campaigns across digital and traditional channels',
        'Automated reporting and scaled operations through process optimization',
        'Built and mentored high-performing media teams'
      ],
      skills: ['Media Planning', 'Agency Management', 'Team Leadership', 'Process Automation', 'Revenue Growth']
    },
    {
      company: 'BAHAR STORE',
      position: 'Marketing Manager',
      period: 'May 2016 - Jan 2018',
      duration: '1 year 9 months',
      achievements: [
        'Increased sales 20% with data-driven omnichannel strategy',
        'Achieved 250% ROAS through optimized budget allocation',
        'Secured strategic media partnerships elevating brand visibility'
      ],
      skills: ['Omnichannel Strategy', 'ROAS Optimization', 'Media Partnerships', 'Budget Management', 'Retail Marketing']
    },
    {
      company: 'Music Gallery',
      position: 'Marketing Manager',
      period: 'Jan 2006 - Jan 2018',
      duration: '12 years',
      achievements: [
        'Delivered 35% revenue growth over 5 years within a declining market',
        'Launched loyalty program growing repeat revenue +22%',
        'Executed 360° campaigns increasing foot traffic 40% during peak periods',
        'Managed $120K budget with 4.5x ROI',
        'Introduced co-branded campaigns with Sony/Yamaha (+60% engagement)',
        'Pioneered influencer marketing boosting online sales +25%'
      ],
      skills: ['Loyalty Programs', '360° Campaigns', 'Budget Optimization', 'Co-branding', 'Influencer Marketing']
    }
  ]

  return (
    <>
      <Head>
        <SEO 
          title="Professional Experience - Elmar Bayramov"
          description="10+ years of marketing and operations leadership experience across F&B, retail, advertising, and B2B sectors."
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow section-padding bg-gray-50">
          <div className="container-custom">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional Experience
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                10+ years of transforming businesses through data-driven strategies, 
                system implementations, and operational excellence across multiple industries.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2 z-0"></div>
                    )}
                    
                    {/* Year indicator for major breaks */}
                    {(index === 0 || experiences[index - 1]?.period.split('–')[1]?.trim() !== experience.period.split('–')[0]?.trim()) && (
                      <div className="flex items-center mb-8">
                        <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {experience.period.split('–')[0]?.trim()}
                        </div>
                        <div className="flex-grow h-0.5 bg-primary-200 ml-4"></div>
                      </div>
                    )}

                    <ExperienceCard experience={experience} />
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="max-w-4xl mx-auto mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Marketing & Growth</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Digital Marketing & Performance Ads</li>
                    <li>• CRM & Email Automation</li>
                    <li>• Loyalty Programs & Retention</li>
                    <li>• SEO/SEM & Content Strategy</li>
                    <li>• Brand Strategy & Positioning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Data & Technology</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ERP & POS Systems (IIKO)</li>
                    <li>• Analytics & Dashboard Development</li>
                    <li>• Process Automation</li>
                    <li>• Data Architecture & Quality</li>
                    <li>• AI Tools & Product Thinking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Operations & Leadership</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cross-Functional Team Leadership</li>
                    <li>• P&L & Budget Management</li>
                    <li>• SOP Development & Implementation</li>
                    <li>• Vendor & Procurement Management</li>
                    <li>• Project & Stakeholder Management</li>
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