import {
  GithubLogo,
  InstagramLogo,
  XLogo,
  GlobeSimple,
} from "@phosphor-icons/react";

export const SocialLinks = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">ソーシャルリンク</h3>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
        <li className="flex items-center gap-4 mt-4">
          <a
            href="https://ecml.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <GlobeSimple size={22} weight="bold" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
              Homepage
            </span>
          </a>
          <a
            href="https://x.com/ecmultiple"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <XLogo size={22} weight="bold" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
              X
            </span>
          </a>
          <a
            href="https://www.instagram.com/nagasakidaigakuml"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <InstagramLogo size={22} weight="bold" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
              Instagram
            </span>
          </a>
          <a
            href="https://github.com/nu-multimedia-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <GithubLogo size={22} weight="bold" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
              GitHub
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
