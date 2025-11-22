function TypesOfInnovationServices() {
  return (
    <section className="flex flex-row mt-32 ml-20 gap-24 mb-12">
      <div className="flex flex-col mt-16">
        <h4 className="text-[#0038FF] font-bold font-grotesk text-[12px] uppercase">
          Why Choose Us
        </h4>
        <h1 className="font-machina text-[32px] max-w-[419px] font-extrabold">
          Different types of innovative services
        </h1>
        <h3 className="text-[#757095] font-[Manrope] text-[14px] max-w-[353px] font-medium mt-2">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </h3>
        <div className="mt-6 flex flex-row gap-4 items-center">
          <div className="bg-[#0038FF] w-[55px] h-[55px] rounded-full relative">
            <img
              src="images/cpu.svg"
              alt="cpu"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </div>
          <div>
            <h2 className="font-machina text-[16px] font-extrabold">
              First Working Process
            </h2>
            <p className="font-grotesk font-medium text-[11px] text-[#757095] max-w-[289px] mt-2">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-4 items-center">
          <div className="bg-[#0038FF] w-[55px] h-[55px] rounded-full relative">
            <img
              src="images/group.svg"
              alt="group"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </div>
          <div>
            <h2 className="font-machina text-[16px] font-extrabold">
              Dedicated Team
            </h2>
            <p className="font-grotesk font-medium text-[11px] text-[#757095] max-w-[289px] mt-2 ">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-4 items-center">
          <div className="bg-[#0038FF] w-[55px] h-[55px] rounded-full relative">
            <img
              src="images/headphone.svg"
              alt="headphone"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </div>
          <div>
            <h2 className="font-machina text-[16px] font-extrabold">
              24/7 Hours Support
            </h2>
            <p className="font-grotesk font-medium text-[11px] text-[#757095] max-w-[289px] mt-2 ">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative">
        <img
          src="images/digitalservice.png"
          alt="digitalservice"
          className="w-[472px] h-[524px] scale-x-[-1] z-10"
        />
        <img
          src="images/Rectangle-blue.svg"
          alt="rectangleBlue"
          className="absolute left-[15px] top-[35px] "
        />
        <img
          src="images/chart.svg"
          alt="chart"
          className="absolute z-20 top-[315px] right-[150px]"
        />
        <img
          src="images/Ellipse-59.svg"
          alt="ellipse59"
          className="w-[80px] h-[80px] absolute -right-[20px] z-20"
        />
      </div>
    </section>
  );
}

export default TypesOfInnovationServices;
