import { createClient } from 'contentful';

// Initialize the Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getContentEntries(contentType) {
  const entries = await client.getEntries({ content_type: contentType });
  return entries.items;
}