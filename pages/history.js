import Link from 'next/link';
import Image from 'next/image';

const HISTORY = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">OUR HISTORY</h1>
      </div>

      {/* History Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"  >
        {/* School History Section */}
        <div className="relative rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('/images/image.jpg')" }}>
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-white opacity-60 blur-sm"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-bold mb-2">History of Our School</h2>
              <p className="text-gray-700">
                Established in 1995, our school has a rich tradition of academic excellence and community involvement. 
                Over the years, we have evolved into a nurturing environment that fosters growth and development, 
                ensuring that students are well-prepared for future challenges. With a commitment to innovation, 
                we embrace new teaching methods and technologies to enhance learning experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Isaac Newton History Section */}
        <div className="relative rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('/images/image2.jpg')" }}>
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-white opacity-60 blur-sm"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-bold mb-2">History of Isaac Newton</h2>
              <p className="text-gray-700">
                Sir Isaac Newton, born in 1643, was a prominent mathematician, physicist, and astronomer whose 
                contributions to science laid the foundation for modern physics. His work in calculus, 
                optics, and the laws of motion revolutionized our understanding of the natural world. 
                Newton's legacy continues to inspire generations of students and scholars in the pursuit of knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HISTORY;