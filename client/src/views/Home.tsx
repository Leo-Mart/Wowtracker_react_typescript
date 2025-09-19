import image from "../assets/images/splash.png";

const Home = () => {
  return (
    <section className="overflow-hidden bg-gray-50 px-8 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900">
      <div className="max-w-full md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-full text-center">
          <p className="hidden p-8 text-gray-500 md:mt-4 my-4 md:block dark:text-gray-400">
            WoW-Tracker aims to keep track of numerous stats and other
            interesting stuff about your WoW-characters. To get started tracking
            stuff import your character below!
          </p>
          <div
            className="mt-4 mb-8 md:mt-8 md:mb-8 flex justify-center justify-items-center"
            id="import-container"
          >
            <a className="btn btn-accent btn-soft">Import new character</a>
          </div>
        </div>
      </div>

      <img
        alt="splash image"
        src={image}
        className="w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default Home;
