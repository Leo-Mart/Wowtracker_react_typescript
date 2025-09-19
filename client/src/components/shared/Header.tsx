const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-1 items-center justify-between">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-emerald-600 transition hover:bg-emerald-700 dark:hover:bg-emerald-500 dark:hover:text-white"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-emerald-600 transition hover:bg-emerald-700 dark:hover:bg-emerald-500 dark:hover:text-white"
                href="/characters"
              >
                Characters
              </a>
            </li>

            <li>
              <a
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-emerald-600 transition hover:bg-emerald-700 dark:hover:bg-emerald-500 dark:hover:text-white"
                href="/import-character"
              >
                Import New Character
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
