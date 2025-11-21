import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

/**
 * Главная страница портфолио
 * ЗАЧЕМ: Основная точка входа, представляет ключевую информацию
 * ПОЛЬЗА: Быстро показывает ценностное предложение и достижения
 */
export default function Home() {
  return (
    <>
      <Head>
        <SEO />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          
          {/* Preview Sections */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Core Competencies Preview */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Competencies</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Marketing & Growth</h3>
                      <p className="text-gray-600">Digital Marketing • Performance Ads • CRM & Email Automation • Loyalty Programs</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Data, Tech & Automation</h3>
                      <p className="text-gray-600">ERP & POS Systems • Analytics & Reporting • Process Automation • AI Tools</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Operations & Leadership</h3>
                      <p className="text-gray-600">Cross-Functional Leadership • P&L Management • SOP Development • Project Management</p>
                    </div>
                  </div>
                </div>

                {/* Recent Experience Preview */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Experience</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Marketing Manager</h3>
                      <p className="text-primary-600 mb-1">"Gidromashservis" CJSC</p>
                      <p className="text-gray-500 text-sm">May 2025 – Present</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">CFO | CMO | Operations Manager</h3>
                      <p className="text-primary-600 mb-1">MAIZE</p>
                      <p className="text-gray-500 text-sm">Jan 2024 – Dec 2024</p>
                    </div>
                    <a 
                      href="/experience" 
                      className="inline-block text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View Full Experience →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}