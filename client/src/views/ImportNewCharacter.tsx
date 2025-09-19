const ImportNewCharacter = () => {
  return (
    <>
      <div className="bg-gray-900 dark:bg-gray-900 grid grid-cols-3 gap-2">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white col-start-2">
          Import new character
        </h2>
        <form className="mt-8 col-start-2">
          {/* TODO: add region selector*/}
          <label
            htmlFor="name"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 dark:border-gray-700 dark:bg-gray-800"
          >
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
              Name{" "}
            </span>
            <input
              type="text"
              name="name"
              placeholder="enter character name"
              id="char-name"
              className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
            />
          </label>
          <label
            htmlFor="realm"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 dark:border-gray-700 dark:bg-gray-800 mt-4"
          >
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
              Realm{" "}
            </span>
            <input
              type="text"
              name="realm"
              placeholder="enter character realm"
              id="char-realm"
              className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
            />
          </label>
          <button
            type="submit"
            className="bg-emerald-800 block mt-4 w-full rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:text-black hover:cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-500"
          >
            Add character
          </button>
        </form>
      </div>
      <div className="bg-gray-900 flex justify-center " id="characters"></div>
    </>
  );
};

export default ImportNewCharacter;
