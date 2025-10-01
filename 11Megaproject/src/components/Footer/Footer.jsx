import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
    <div className="max-w-screen-xl mx-auto px-6">
      {/* Footer top: Social links and contact info */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">MyCompany</h2>
          <p className="text-sm text-gray-400">© 2025 MyCompany. All Rights Reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12zM9 7h6v4H9zm0 6h6v4H9z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.46 6c-.77.35-1.59.58-2.46.69-.88-.94-2.15-1.52-3.55-1.52-2.69 0-4.87 2.18-4.87 4.87 0 .38.05.75.15 1.1-4.05-.2-7.63-2.15-10.03-5.12-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.18 2.17 4.06-.8-.03-1.56-.24-2.22-.6v.06c0 2.37 1.69 4.35 3.95 4.8-.41.11-.85.17-1.29.17-.32 0-.63-.03-.94-.09.63 1.96 2.45 3.4 4.6 3.44-1.68 1.31-3.8 2.09-6.09 2.09-.39 0-.77-.02-1.16-.07 2.17 1.39 4.76 2.2 7.52 2.2 9.02 0 13.95-7.47 13.95-13.95 0-.21 0-.42-.02-.63.95-.68 1.77-1.53 2.42-2.5z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 3C2.895 3 2 3.895 2 5v14c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2H4zm0 2h16v14H4V5zM8 7c0 1.105-.895 2-2 2s-2-.895-2-2 2-.895 2-2 2 .895 2 2zm0 12H6v-6h2v6zm6 0h-2v-6h2v6zm-1-8h-1V9h1v2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bottom: Links */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="space-x-6">
          <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms & Conditions</a>
          <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">FAQ</a>
        </div>

        <div className="mt-6 md:mt-0">
          <p className="text-sm text-gray-400">&copy; 2025 MyCompany. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
