import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

// Tell Astro this is a dynamic endpoint, not a statically generated route
export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  // If no slug is provided, return 404
  if (!params.slug) {
    return new Response("Not Found", { status: 404 });
  }

  try {
    // Fetch all documentation
    const docs = await getCollection("docs");
    
    // Find the matching document
    const doc = docs.find(d => d.slug === params.slug);
    
    if (!doc) {
      return new Response("Document not found", { status: 404 });
    }
    
    // Return the raw document content (including frontmatter)
    return new Response(doc.body, { 
      headers: { 
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=3600"
      } 
    });
  } catch (error) {
    console.error(`Error fetching markdown for slug "${params.slug}":`, error);
    return new Response("Internal Server Error", { status: 500 });
  }
}; 