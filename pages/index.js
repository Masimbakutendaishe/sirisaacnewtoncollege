import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import QuickNavbar from '../comps/quickNavbar'

import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const newsletterRes = await client.getEntries({ content_type: 'newsletter' })
  const magazineRes = await client.getEntries({ content_type: 'magazine' })

  return {
    props: {
      newsletter: newsletterRes.items,
      magazine: magazineRes.items,
    },
    revalidate: 60, // Regenerate page every 60 seconds
  }
}

const Home = ({ newsletter, magazine }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Video Background Section */}
      <section className="relative h-auto w-full flex items-center justify-center overflow-hidden z-10">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src="/videos/background_vid.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 py-16">
          <h1 className="text-5xl font-bold mb-4 z-20">
            SIR ISAAC NEWTON COLLEGE
          </h1>
          <p className="text-xl mb-8 z-20">
            Turfontein, South Africa<br />
            Renowned College in South Africa. Education for the future.
          </p>
          <Link href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" passHref>
            <div className="absolute top-2 right-0 p-4 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg hover:text-blue-900 hover:bg-white transition-transform duration-300 transform scale-105">
              <svg
                className="w-6 h-6 animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18V5l11 7z" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Vibrant School Experience Section */}
      <section className="py-2 bg-white text-blue-900">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold mb-2">VIBRANT SCHOOL EXPERIENCE</h2>
          <hr className="w-32 mx-auto border-blue-900 border-2" />
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <Link href="/ABOUTUS" passHref>
              <div className="block relative group">
                <Image
                  src="/images/image.jpg"
                  alt="Sir Isaac Newton College"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg group-hover:hidden">
                  Sir Isaac Newton College
                </button>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-4">
            <Link href="/campuslife" passHref>
              <div className="relative group">
                <Image
                  src="/images/image2.jpg"
                  alt="Campus Life"
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg group-hover:hidden">
                  Campus Life
                </button>
              </div>
            </Link>
            <Link href="/ACADEMICS" passHref>
              <div className="relative group">
                <Image
                  src="/images/classimage.jpg"
                  alt="Academics"
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg group-hover:hidden">
                  Academics
                </button>
              </div>
            </Link>
            <Link href="/SPORTS" passHref>
              <div className="relative group">
                <Image
                  src="/images/sportsimage.jpg"
                  alt="Sports"
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg group-hover:hidden">
                  Sports
                </button>
              </div>
            </Link>
            <Link href="/ourculture" passHref>
              <div className="relative group">
                <Image
                  src="/images/culture.png"
                  alt="Our Culture"
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg group-hover:hidden">
                  Our Culture
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Principal's Newsletter and Sir Newton Weekly Vol 1 Sections */}
      <section className="py-4 flex flex-wrap">
        {/* Principal's Newsletter Section */}
        <div className="w-full md:w-1/2 p-4">
          {newsletter.map((item) => (
            <div key={item.sys.id} className="relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`https:${item.fields.principalsImage.fields.file.url}`}
                alt={item.fields.title}
                layout="responsive"
                width={800}
                height={600}
                className="object-cover"
              />
              <button className="absolute top-2 right-2 bg-white text-blue-900 py-1 px-2 rounded-lg shadow-lg">
                Newsletter
              </button>
              <div className="bg-white p-4">
                <h3 className="text-xl font-bold mb-2">
                  <Link href="./newsletter" passHref>
                    {item.fields.title}
                  </Link>
                </h3>
                <hr className="border-blue-900 border-2 mb-2" />
                <p className="text-gray-600">{item.fields.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sir Newton Weekly Vol 1 Section */}
        <div className="w-full md:w-1/2 p-4">
          {magazine.map((item) => (
            <div key={item.sys.id} className="relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`https:${item.fields.magazineImage.fields.file.url}`}
                alt={item.fields.title}
                layout="responsive"
                width={800}
                height={600}
                className="object-cover"
              />
              <button className="absolute top-2 right-2 bg-white text-blue-900 py-1 px-2 rounded-lg shadow-lg">
                Vol 1
              </button>
              <div className="bg-white p-4">
                <h3 className="text-xl font-bold mb-2">
                  <Link href={item.fields.link} passHref>
                    {item.fields.title}
                  </Link>
                </h3>
                <hr className="border-blue-900 border-2 mb-2" />
                <p className="text-gray-600">{item.fields.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white py-16 px-4">
          <h2 className="text-3xl font-bold mb-8">WHAT MAKES US UNIQUE</h2>
          <p className="text-lg">
            Our commitment to academic excellence, vibrant campus life, and innovative learning
            opportunities make Sir Isaac Newton College a place for students to thrive and succeed.
          </p>
        </div>
      </section>


    </div>
  )
}

export default Home
