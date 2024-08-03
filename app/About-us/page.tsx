import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-16 px-4">
      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 hover:text-blue-800 transition-colors duration-300">
            About Us
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We are dedicated to bringing innovative solutions to modern problems, leveraging the latest technology and expertise to deliver excellence.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to empower businesses and individuals with cutting-edge tools and services that drive success and innovation. We are committed to quality, integrity, and continuous improvement.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Innovation", description: "We embrace new ideas and technologies to stay ahead of the curve." },
              { title: "Integrity", description: "We uphold the highest standards of honesty and transparency in everything we do." },
              { title: "Excellence", description: "We are committed to delivering outstanding results and exceeding expectations." },
              { title: "Customer Focus", description: "We put our customers at the center of everything we do, ensuring their needs and satisfaction come first." },
            ].map((value, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "FaizuRrehman AKA CRYPTO", role: "CEO & Founder", image: "/owner.jfif" },
            ].map((member, index) => (
              <div key={index} className="w-full sm:w-1/3 lg:w-1/4 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                  <Image
                    src={member.image}
                    alt={`Team Member ${index + 1}`}
                    width={150}
                    height={150}
                    className="mb-4 rounded-full mx-auto border-4 border-gray-200 hover:border-blue-500 transition-colors duration-300"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Have any questions or want to get in touch? Feel free to reach out to us!
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Qurantine</h3>
              <p className="text-gray-400">
                Bringing you innovative solutions to modern problems with the latest technology and expertise.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">In your Heart</p>
              <p className="text-gray-400">Email: faizurrehman.developer@gmail.com</p>
              <p className="text-gray-400">Phone: +92 326 0502484</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.06c0 5.59-4.54 10.13-10.13 10.13-5.59 0-10.13-4.54-10.13-10.13 0-5.59 4.54-10.13 10.13-10.13 5.59 0 10.13 4.54 10.13 10.13zm-1.16 0c0-4.97-4.06-9.03-9.03-9.03-4.97 0-9.03 4.06-9.03 9.03s4.06 9.03 9.03 9.03c4.97 0 9.03-4.06 9.03-9.03zm-5.61-1.23h-1.1v5.21h-2.13v-5.21h-1.1v-2.15h1.1v-1.31c0-2.1 1.29-3.24 3.16-3.24.9 0 1.7.07 1.94.1v2.15h-1.34c-1.05 0-1.31.5-1.31 1.26v1.41h2.58l-.33 2.15zm-8.25 1.88c0-1.29.43-2.32 1.29-3.1.86-.78 1.9-1.17 3.1-1.17 1.22 0 2.24.37 3.1 1.17.86.78 1.29 1.81 1.29 3.1s-.43 2.32-1.29 3.1c-.86.78-1.88 1.17-3.1 1.17-1.2 0-2.24-.39-3.1-1.17-.86-.78-1.29-1.81-1.29-3.1zm2.12-.11c0 1.15.83 2.05 2.01 2.05 1.14 0 1.95-.9 1.95-2.05 0-1.13-.81-2.03-1.95-2.03-1.17 0-2.01.9-2.01 2.03z"></path></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 2.27a9.68 9.68 0 0 1-2.79.77 4.9 4.9 0 0 0 2.16-2.71 9.75 9.75 0 0 1-3.09 1.18A4.91 4.91 0 0 0 15.9.88a4.91 4.91 0 0 0-4.91 4.91c0 .39.04.77.11 1.14-4.09-.2-7.71-2.16-10.15-5.14a4.92 4.92 0 0 0-.66 2.48c0 1.71.86 3.21 2.16 4.1a4.87 4.87 0 0 1-2.22-.61v.06c0 2.39 1.69 4.38 3.93 4.82a4.93 4.93 0 0 1-2.22.08c.63 1.96 2.46 3.39 4.63 3.43A9.86 9.86 0 0 1 2 20.14a13.88 13.88 0 0 0 7.55 2.21c9.06 0 14-7.51 14-14.02v-.64A10 10 0 0 0 22 2.27z"></path></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0zm0 21.82a9.82 9.82 0 1 1 9.82-9.82 9.83 9.83 0 0 1-9.82 9.82zm4.73-13.51c-.35 0-.7.1-1 .29-.48.29-.82.73-.82 1.27v2.88h-1.11V9.8h1.1V8.67c0-1.09.24-1.91.73-2.53.49-.62 1.21-.94 2.09-.94.63 0 1.22.16 1.73.48.53.32.89.77.89 1.28v1.95h-1.09v-.85c0-.3-.1-.55-.28-.73-.18-.18-.42-.28-.71-.28-.4 0-.76.27-.76.76v1.1h1.45v1.21h-1.45v4.29h1.09V8.9h-.04zm-6.06-.34c-.63 0-1.22.17-1.76.47-.59.33-.98.8-1.2 1.35-.21.52-.36 1.11-.36 1.73v2.87h-1.09v-4.2c0-1.14.46-2.23 1.3-3.03.55-.53 1.28-.83 2.1-.83.63 0 1.22.16 1.73.48.53.32.89.77.89 1.28v.98h-.5c-.51 0-.93.42-.93.93v1.09c0 .51.42.93.93.93h.51v2.82h-1.09v-2.87c0-.63-.21-1.23-.6-1.7-.39-.48-.93-.74-1.51-.74zm-5.4 0c-.63 0-1.22.17-1.76.47-.59.33-.98.8-1.2 1.35-.21.52-.36 1.11-.36 1.73v2.87h-1.09v-4.2c0-1.14.46-2.23 1.3-3.03.55-.53 1.28-.83 2.1-.83.63 0 1.22.16 1.73.48.53.32.89.77.89 1.28v.98h-.5c-.51 0-.93.42-.93.93v1.09c0 .51.42.93.93.93h.51v2.82h-1.09v-2.87c0-.63-.21-1.23-.6-1.7-.39-.48-.93-.74-1.51-.74z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Qurantine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
