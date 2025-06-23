import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isActive: (path: string) => boolean;
}

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const navLinks = [
  { href: "/cleaning-services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isActive }) => {
  // Close menu on route change
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Menu */}
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-white shadow-2xl z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="h-full py-6 px-4 flex flex-col">
              <div className="flex justify-end mb-6">
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-600 hover:text-[#2563EB] hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 ${
                        isActive(href)
                          ? "bg-blue-50 text-[#2563EB] shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#2563EB]"
                      }`}
                      aria-current={isActive(href) ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto px-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Need immediate assistance?
                  </p>
                  <a
                    href="tel:425-466-5919"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Call Now: 425-466-5919
                  </a>
                </div>
                <p className="text-xs text-gray-400 text-center mt-4">
                  © {new Date().getFullYear()} Shine & Seal
                </p>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default React.memo(MobileMenu); 