import Link from "next/link";

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-16 px-4">
      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Payment Service Unavailable
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We apologize for the inconvenience, but our payment service is currently unavailable. We will notify you when it is back online. Thank you for your patience!
          </p>
          <Link href="/">
            <a className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              Back to Home
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
}
