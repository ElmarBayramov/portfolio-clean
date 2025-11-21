/**
 * Footer с контактной информацией и ссылками
 * ЗАЧЕМ: Завершает страницу, предоставляет дополнительные контакты
 * ПОЛЬЗА: Профессиональный вид, легкий способ связаться
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elmar Bayramov</h3>
            <p className="text-gray-400">
              Building high-performance business systems through data-driven strategies.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div>Email: ElmarBayramov87@gmail.com</div>
              <div>Phone: +994 50 512 12 14</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elmar Bayramov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer