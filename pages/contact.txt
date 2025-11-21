import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

/**
 * Страница контактов с формой и профессиональной информацией
 * ЗАЧЕМ: Обеспечивает легкий способ связи и показывает профессиональное присутствие
 * ПОЛЬЗА: Упрощает процесс найма/сотрудничества, демонстрирует доступность
 */
export default function Contact() {
  return (
    <>
      <Head>
        <SEO 
          title="Contact - Elmar Bayramov"
          description="Get in touch to discuss marketing, operations, or business transformation opportunities."
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Page Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Let's Connect
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to discuss how we can drive growth and transformation in your organization. 
                  Get in touch for consulting, speaking engagements, or career opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                  
                  {/* Contact Details */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:ElmarBayramov87@gmail.com" className="text-primary-600 hover:text-primary-700">
                          ElmarBayramov87@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+994505121214" className="text-primary-600 hover:text-primary-700">
                          +994 50 512 12 14
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">Baku, Azerbaijan</p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Areas of Expertise</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• Marketing Strategy & Digital Transformation</p>
                      <p>• Operations Optimization & Process Automation</p>
                      <p>• ERP/CRM Implementation & Data Architecture</p>
                      <p>• Business Growth & Revenue Optimization</p>
                      <p>• Cross-Functional Leadership & Team Development</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="consulting">Consulting Opportunity</option>
                        <option value="career">Career Opportunity</option>
                        <option value="partnership">Partnership</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Tell me about your project or opportunity..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-3 text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="bg-primary-600 text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
                  <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                    Let's discuss how data-driven strategies and operational excellence can drive 
                    measurable growth in your organization.
                  </p>
                  <a 
                    href="/Elmar_Bayramov_CV_2025_eng.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Download Full CV
                  </a>
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