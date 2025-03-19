import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import type { CollectionEntry } from 'astro:content';

// Section names mapping to docs ordering
const SECTIONS = {
  quickstarts: "Getting Started",
  vals: "Vals",
  projects: "Projects",
  reference: "Reference",
  std: "Standard Library",
  api: "REST API",
  troubleshooting: "Troubleshooting",
  guides: "Guides",
  integrations: "Integrations"
} as const;

type SectionKey = keyof typeof SECTIONS;
type DocEntry = CollectionEntry<'docs'>;

export const GET: APIRoute = async () => {
  try {
    // Get all documentation pages
    const docs = await getCollection("docs");
    
    const sections = Object.keys(SECTIONS) as SectionKey[];
    const docsBySection: Record<SectionKey, DocEntry[]> = {} as Record<SectionKey, DocEntry[]>;
    
    sections.forEach(key => {
      docsBySection[key] = [];
    });
    
    // Sort docs into sections
    docs.forEach(doc => {
      const section = doc.slug.split('/')[0];
      if (section !== "index" && section in SECTIONS) {  
        docsBySection[section as SectionKey].push(doc);
      }
    });
    
    // Generate markdown content
    let content = "# Val Town Documentation\n\n";
    
    // Add each section with its documents
    for (const section of sections) {
      const sectionDocs = docsBySection[section];
      if (sectionDocs.length === 0) continue;
      
      content += `## ${SECTIONS[section]}\n`;
      
      for (const doc of sectionDocs) {
        const description = doc.data.description ? `: ${doc.data.description}` : '';
        content += `- [${doc.data.title}](https://docs.val.town/${doc.slug}.md)${description}\n`;
      }
      
      content += '\n';
    }
    
    // Optional Resources
    content += `## Optional\n`;
    content += `- [Discord](https://discord.gg/dHv45uN5RY)\n`;
    content += `- [Email](mailto:docs-help@val.town)\n`;
    content += `- [Blog](https://blog.val.town/)\n`;
    
    return new Response(content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow"
      }
    });
  } catch (error) {
    console.error("Error generating documentation text:", error);
    return new Response("Error generating documentation", { status: 500 });
  }
};