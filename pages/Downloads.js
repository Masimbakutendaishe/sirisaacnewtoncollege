import Image from 'next/image';

const Downloads = () => {
  const forms = [
    {
      title: "Admission Form",
      link: "./downloads/SCHOOL.pdf",
      description: "Download the admission form to enroll your child.",
    },
    {
      title: "Transfer Form",
      link: "/downloads/SCHOOL.pdf",
      description: "Use this form to transfer your child to our school.",
    },
    {
      title: "Medical Form",
      link: "/downloads/SCHOOL.pdf",
      description: "Submit the medical history of your child using this form.",
    },
    {
      title: "Fee Payment Form",
      link: "/downloads/SCHOOL.pdf",
      description: "Complete this form for fee payment procedures.",
    },
  ];

  return (
    <div className="p-8">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/classimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ESSENTIAL FORMS FOR DOWNLOAD</h1>
      </div>
      <div className="space-y-6 mt-8">
        {forms.map((form, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold">{form.title}</h2>
            <p className="text-gray-700 mt-2">{form.description}</p>
            <a href={form.link} className="mt-4 inline-block text-blue-600 hover:underline">
              Download Form
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
