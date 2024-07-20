const SwiftFlowSection = () => (
  <div className="bg-white text-black font-sans text-center py-12 px-6 w-screen">
    <div className="flex lg:flex-row flex-col  items-center justify-between w-full px-6 md:px-12">
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl text-espresso telegraf-regular">
          WHY CHOOSE Crystal EXIM?
        </h1>
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2">
        <p className="text-left text-grenbox text-base md:text-lg max-w-3xl mx-auto mt-3 ibm-plex-mono-regular">
          Breaking ground in the export sector, dedicated to delivering
          unmatched excellence and expertise.
        </p>
      </div>
    </div>

    <div className="grid gap-6 p-6 md:p-12 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-grenbox bg-opacity-10  p-6 rounded-2xl text-left">
          <h2 className="text-xl md:text-2xl mb-4 text-black inter-crystal-semibold">
            {/* Expertise and <br /> Industry Knowledge */}
            Local Mastery, Global Reach
          </h2>
          <p className="text-sm md:text-base text-black inter-crystal-medium">
            Leverage our deep roots in the domestic market for seamless global
            exports. Our expertise ensures precision and success in every
            shipment.
          </p>
        </div>
        <div className="bg-grenbox bg-opacity-10  p-6 rounded-2xl text-left">
          <h2 className="text-xl md:text-2xl mb-4 text-black inter-crystal-semibold">
            Always Here, Always yours
          </h2>
          <p className="text-sm md:text-base text-black inter-crystal-medium">
            With a strong domestic presence, our dedicated support team is{" "}
            <span className="inter-crystal-semibold">available 24/7</span>,
            ensuring personalized service and smooth operations.
          </p>
        </div>
        <div className="bg-grenbox bg-opacity-10   p-6 rounded-2xl text-left">
          <h2 className="text-xl md:text-2xl mb-4 text-black inter-crystal-semibold">
            Empowering Global Trade
          </h2>
          <p className="text-sm md:text-base text-black inter-crystal-medium">
            From thriving markets to international imports, we facilitate
            seamless transactions and nurture enduring partnerships worldwide.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-grenbox bg-opacity-10  p-6 rounded-2xl text-left">
          <h2 className="text-xl md:text-2xl mb-4 text-black inter-crystal-semibold">
            Customer-Centric Support
          </h2>
          <p className="text-sm md:text-base text-black inter-crystal-medium">
            Your satisfaction drives our{" "}
            <span className="inter-crystal-semibold">24/7 support</span> team to
            deliver personalized service and responsive solutions.
          </p>
        </div>
        <div className="bg-grenbox bg-opacity-10  p-6 rounded-2xl text-left">
          <h2 className="text-xl md:text-2xl mb-4 text-black inter-crystal-semibold">
            Reliability and Security
          </h2>
          <p className="text-sm md:text-base text-black inter-crystal-medium">
            Our stringent tracking and handling protocols ensure the secure and
            punctual delivery of your exports worldwide.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SwiftFlowSection;
