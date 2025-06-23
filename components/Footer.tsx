// components/Footer.tsx
import Link from "next/link";
import pagesData from "../data/pagesData.json"; // Adjust the path based on your project structure

// Define the Page type for TypeScript
interface Page {
  id: number;
  title: string;
  url: string;
}

interface RawPage {
  id: number;
  title?: string;
  Title?: string;
  url: string;
}

const Footer: React.FC = () => {
  // Normalize the data to handle "title" vs "Title" inconsistency
  const normalizedPages: Page[] = (pagesData as RawPage[]).map((page) => ({
    id: page.id,
    title: page.title || page.Title || "", // Use "title" if present, fallback to "Title", then empty string
    url: page.url,
  }));

  return (
    <footer className="bg-[#2563EB] text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
          Service Areas
        </h3>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base">
          {normalizedPages.map((page) => (
            <li key={page.id}>
              <Link
                href={page.url}
                className="text-white hover:text-cyan-300 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-white/10"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
          <p className="text-xs sm:text-sm text-center text-white/80">
            © {new Date().getFullYear()} Shine & Seal. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60">
            <a 
              href="tel:425-466-5919" 
              className="hover:text-white transition-colors duration-200"
            >
              📞 425-466-5919
            </a>
            <span className="hidden sm:inline">•</span>
            <a 
              href="mailto:info@shineandseal.com" 
              className="hover:text-white transition-colors duration-200"
            >
              ✉️ info@shineandseal.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
