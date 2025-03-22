// components/Footer.tsx
import Link from "next/link";
import pagesData from "../data/pagesData.json"; // Adjust the path based on your project structure

// Define the Page type for TypeScript
interface Page {
  id: number;
  title?: string; // Optional to handle "title" or "Title"
  Title?: string; // Optional to handle the inconsistency in your JSON
  url: string;
}

const Footer: React.FC = () => {
  // Normalize the data to handle "title" vs "Title" inconsistency
  const normalizedPages: Page[] = pagesData.map((page) => ({
    id: page.id,
    title: page.title || page.Title, // Use "title" if present, fallback to "Title"
    url: page.url,
  }));

  return (
    <footer className="bg-[#2563EB] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Service Areas
        </h3>
        <ul className="flex flex-wrap justify-center gap-6">
          {normalizedPages.map((page) => (
            <li key={page.id}>
              <Link
                href={page.url}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-center">
          © {new Date().getFullYear()} Shine & Seal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
