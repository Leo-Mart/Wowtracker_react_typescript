const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="divider divider-accent"></div>
        <div className="flex justify-between">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
              <a
                className="inline-block text-gray-600 underline transition hover:text-emerald-600/75 dark:text-emerald-500 dark:hover:text-emerald-500/75"
                href="#"
              >
                Terms & Conditions
              </a>
              <span>&middot;</span>
              <a
                className="inline-block text-gray-600 underline transition hover:text-emerald-600/75 dark:text-emerald-500 dark:hover:text-emerald-500/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div>
            <ul className="flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="https://github.com/Leo-Mart/Exam-Goth-Stack"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:text-emerald-900 "
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
