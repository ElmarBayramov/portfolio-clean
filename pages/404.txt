import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

/**
 * Кастомная 404 страница
 * ЗАЧЕМ: Сохраняет пользователей на сайте при ошибочных URL
 * ПОЛЬЗА: Улучшает пользовательский опыт, снижает bounce rate
 */
export default function NotFound() {
  return (
    <>
      <Head>
        <SEO 
          title="Page Not Found - Elmar Bayramov"
          description="The page you're looking for doesn't exist."
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 Graphic */}
              <div className="mb-8">
                <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
                <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
              </div>

              {/* Message */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Sorry, we couldn't find the page you're looking for. 
                The page might have been moved or doesn't exist.
              </p>

              {/* Navigation Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  className="btn-primary"
                >
                  Go Back Home
                </a>
                <a 
                  href="/contact" 
                  className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Popular Pages</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <a href="/experience" className="text-primary-600 hover:text-primary-700">Experience</a>
                  <a href="/projects" className="text-primary-600 hover:text-primary-700">Projects</a>
                  <a href="/contact" className="text-primary-600 hover:text-primary-700">Contact</a>
                  <a href="/Elmar_Bayramov_CV_2025_eng.pdf" className="text-primary-600 hover:text-primary-700">Download CV</a>
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