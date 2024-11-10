// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 pt-5 font-serif gap-2 pb-2 max-h-svh">
      <div className="max-w-6xl mx-auto px-4 grid-flow-col-dense grid md:grid-cols-2">
        
        {/* Quick Links Section */}
        <div className="ml-6">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-gray-600">Home</a></li>
            <li><a href="/about" className="hover:text-gray-600">About Us</a></li>
            <li><a href="/air-quality-index" className="hover:text-gray-600">Air Quality Index</a></li>
            <li><a href="/reports" className="hover:text-gray-600">Reports</a></li>
            <li><a href="/contact" className="hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div className="ml-9 md:ml-auto ">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">Email: <a href="mailto:info@aqi.com" className="hover:text-gray-600">info@aqi.com</a></p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm break-words">Address: Guru Tegh Bahadur 
             Institute Of <br/> Technology, Rajouri Garden, New Delhi</p>
        </div>
      </div>
      <div>
          <h2 className="text-lg font-semibold mb-4 items-center text-center">Follow Us</h2>
          <div className="justify-center flex space-x-4 text-gray-700 ">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.075 4.514 11.087 10.332 11.87v-8.369h-3.105v-3.501h3.105v-2.68c0-3.066 1.827-4.756 4.626-4.756 1.342 0 2.746.241 2.746.241v3.022h-1.547c-1.527 0-2.008.954-2.008 1.933v2.24h3.4l-.544 3.501h-2.856v8.369c5.818-.783 10.332-5.795 10.332-11.87z" /></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.917 2.201-4.917 4.917 0 .385.044.76.127 1.122-4.083-.205-7.702-2.16-10.125-5.134-.422.724-.666 1.565-.666 2.465 0 1.701.867 3.2 2.186 4.081-.806-.026-1.565-.248-2.229-.617v.061c0 2.377 1.693 4.358 3.946 4.81-.413.112-.848.172-1.296.172-.317 0-.626-.031-.928-.088.626 1.954 2.444 3.376 4.6 3.416-1.68 1.316-3.808 2.101-6.116 2.101-.398 0-.791-.023-1.178-.069 2.18 1.396 4.768 2.212 7.548 2.212 9.057 0 14.012-7.503 14.012-14.01 0-.213-.005-.425-.014-.636.961-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0h-20.46c-.97 0-1.77.8-1.77 1.77v20.46c0 .97.8 1.77 1.77 1.77h20.46c.97 0 1.77-.8 1.77-1.77v-20.46c0-.97-.8-1.77-1.77-1.77zm-14.615 20.232h-3.692v-10.695h3.692v10.695zm-1.846-12.173c-1.181 0-2.138-.957-2.138-2.137s.957-2.138 2.138-2.138 2.138.957 2.138 2.138-.957 2.137-2.138 2.137zm13.461 12.173h-3.692v-5.437c0-1.297-.025-2.966-1.806-2.966-1.808 0-2.086 1.413-2.086 2.87v5.533h-3.692v-10.695h3.546v1.462h.05c.493-.937 1.698-1.923 3.495-1.923 3.739 0 4.427 2.461 4.427 5.658v5.498z" /></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.012-4.947.071-1.703.075-3.112.351-4.26 1.5-1.148 1.148-1.425 2.557-1.5 4.26-.059 1.28-.071 1.69-.071 4.947s.012 3.667.071 4.947c.075 1.703.351 3.112 1.5 4.26 1.148 1.148 2.557 1.425 4.26 1.5 1.28.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.703-.075 3.112-.351 4.26-1.5 1.148-1.148 1.425-2.557 1.5-4.26.059-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.075-1.703-.351-3.112-1.5-4.26-1.148-1.148-2.557-1.425-4.26-1.5-1.28-.059-1.69-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" /></svg>
            </a>
          </div>
        </div>
      {/* Bottom copyright section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Real-Time Air Quality Reporting System. All rights reserved.
      </div>
    </footer>
  );
}
