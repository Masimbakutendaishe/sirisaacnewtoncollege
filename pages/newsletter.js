import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Contentful setup: fetching data from Contentful
export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetching the principal's newsletter content from Contentful
  const newsletterRes = await client.getEntries({ content_type: 'principalsNewsletter' }); // Ensure the content_type matches the slug of the model in Contentful

  // Assuming there is only one newsletter entry
  const newsletter = newsletterRes.items[0]?.fields;

  // Adding 'https://' to the image URL if it's missing
  const principalImage = newsletter?.principalImage?.fields?.file?.url
    ? `https:${newsletter.principalImage.fields.file.url}`
    : '/default-image.jpg'; // Fallback for image

  return {
    props: {
      principalName: newsletter?.principalName /*|| 'Principal Name'*/, // Fallback if the field is missing
      principalImage: principalImage,
      title: newsletter?.title /*|| 'Principal\'s Newsletter*'*/,
      content: newsletter?.content /*|| null*/, // Assuming this is rich text
      date: newsletter?.date /*|| 'Date not provided'*/,
    },
  };
}

// Component
const PrincipalNewsletter = ({ principalName, principalImage, title, content, date }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/classimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">{title}</h1>
      </div>

      {/* Newsletter Date */}
      <div className="text-center py-4 text-lg font-semibold">
        <p>Date: {date}</p>
      </div>

      {/* Principal Information */}
      <div className="flex justify-center items-start p-8">
        <div className="mr-8">
          <Image
            src={principalImage}
            alt="Principal"
            width={150}
            height={150}
            className="rounded-full border-2 border-gray-300"
          />
          <p className="text-center font-bold mt-2">Principal: {principalName}</p>
        </div>

        {/* Newsletter Content */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our School Community!</h2>
          <div className="text-gray-700 mb-4">
            {/* Render the rich text content */}
            {content}
          </div>

          {/* Signature */}
          <div className="mt-6 text-right">
            <p className="font-bold">{principalName}</p>
            <p>Principal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalNewsletter;
