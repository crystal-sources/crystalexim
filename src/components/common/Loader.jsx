const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full bg-gren animate-pulse-scale opacity-0 transition-colors duration-300"></div>
        <div className="absolute inset-0 rounded-full bg-gren animate-pulse-scale opacity-0 transition-colors duration-300 delay-[1s]"></div>
      </div>
    </div>
  );
};

export default Loader;
