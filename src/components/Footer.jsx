import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full my-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-between items-center">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-3 md:mb-0">
            © {new Date().getFullYear()} MySzop
          </p>
        </div>
        <div className="flex-1 flex justify-end space-x-3">
          <a
            href="https://github.com/sabaudianin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="HTTPS://linkedin.com/in/rafal-bobko-569388234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
