import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/background.jpg" // Local background image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate__animated animate__fadeIn">
          Elevate Your Content Creation with AI
        </h1>
        <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Discover how our AI-powered tools can streamline your content creation process. From blogs to social media posts, we've got you covered.
        </p>
        <div className="flex gap-4 mb-8 animate__animated animate__fadeIn animate__delay-2s">
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
          <Link href="#learn-more">
            <Button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="relative mb-12 animate__animated animate__fadeIn animate__delay-3s">
          <Image
            src="/logo.svg" // Local logo image path
            alt="Logo"
            width={200}
            height={100}
            className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate__animated animate__fadeIn">
            Choose Your Plan
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Plan 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">$5/month</p>
                <ul className="text-gray-600 mb-4 space-y-2">
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Basic feature access</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Standard support</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Plan 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard Plan</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">$10/month</p>
                <ul className="text-gray-600 mb-4 space-y-2">
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> All features in the Basic Plan</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Extended usage limits</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Priority support</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Plan 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Plan</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">$15/month</p>
                <ul className="text-gray-600 mb-4 space-y-2">
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> All features in the Standard Plan</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Advanced analytics</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Premium customization</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Plan 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">$20 Plan</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">$20/month</p>
                <ul className="text-gray-600 mb-4 space-y-2">
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> All features in the Professional Plan</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Top-tier support</li>
                  <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l3 3 5-5-1.41-1.41L10 11.17l-2.59-2.58L6 10z"></path></svg> Advanced integrations</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="learn-more" className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 animate__animated animate__fadeIn">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What are the benefits of upgrading?</h3>
              <p className="text-gray-600">
                Upgrading unlocks additional features, provides enhanced support, and increases your usage limits. Each plan is designed to fit different needs and budgets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How can I manage my subscription?</h3>
              <p className="text-gray-600">
                You can manage your subscription through the billing section in your account dashboard. From there, you can upgrade, downgrade, or cancel your plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I get a refund?</h3>
              <p className="text-gray-600">
                We offer a 14-day money-back guarantee for all plans. If you're not satisfied with our service within the first 14 days, you can request a full refund.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How does the free trial work?</h3>
              <p className="text-gray-600">
                Our free trial provides limited access to our features for a specified period. It allows you to explore the core functionalities of our service before committing to a paid plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white py-16 px-4 relative overflow-hidden">
  <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 opacity-30 blur-3xl" />
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center relative z-10">
    {/* Company Info */}
    <div className="mb-8 lg:mb-0 text-center lg:text-left">
      <Image
        src="/logo.svg" // White version of the logo
        alt="Company Logo"
        width={150}
        height={75}
        className="mb-4 drop-shadow-lg transition-transform transform hover:scale-105"
      />
      <p className="text-lg font-semibold mb-4">Innovative Solutions for the Modern World</p>
      <p className="text-sm">
        In your Heart
        <br />
        faizurrehman.developer@gmail.com | +92 326 0502484
      </p>
    </div>

    {/* Quick Links */}
    <div className="mb-8 lg:mb-0 text-center lg:text-left">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="hover:underline transition-transform transform hover:scale-105">Home</Link>
        </li>
        <li>
          <Link href="/About-us" className="hover:underline transition-transform transform hover:scale-105">About Us</Link>
        </li>
        <li>
          <Link href="/services" className="hover:underline transition-transform transform hover:scale-105">Services</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline transition-transform transform hover:scale-105">Contact</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline transition-transform transform hover:scale-105">Blog</Link>
        </li>
      </ul>
    </div>

    {/* Social Media */}
    <div className="mb-8 lg:mb-0 text-center lg:text-left">
      <h3 className="text-xl font-bold mb-4">Follow Us</h3>
      <div className="flex justify-center lg:justify-start space-x-4">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
        </Link>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 pt-4 mt-8 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Company Name. All rights reserved.
    </p>
    <p className="text-sm mt-2">
      Designed by <Link href="https://designerportfolio.com" className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Your Design Studio</Link>
    </p>
  </div>
</footer>


    </div>
  );
}
