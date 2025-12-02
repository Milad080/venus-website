function TypesOfInnovationServices() {
  return (
    <section className="grid grid-cols-[1fr_2fr] relative mt-12 xl:mt-32 xl:ml-20 lg:gap-20 xl:gap-24 mb-12">
      <div className="flex flex-col mt-16">
        <h4 className="text-[#0038FF] font-bold font-grotesk text-[10px] md:text-[12px] mt-12 uppercase">
          Why Choose Us
        </h4>
        <h1 className="font-machina text-[24px] xl:text-[32px]  max-w-[419px] font-extrabold">
          Different types of innovative services
        </h1>
        <h3 className="text-[#757095] font-[Manrope] text-[11px] sm:text-[14px] max-w-[353px] font-medium mt-2">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </h3>
        <div className="mt-6 flex sm:flex-row gap-4 items-start">
          <div className="bg-[#0038FF] h-[45px] w-[55px] sm:h-[55px] rounded-full relative">
            <img
              src="images/cpu.svg"
              alt="cpu"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-machina text-[8px] sm:text-[12px] md:text-[16px] font-extrabold">
              First Working Process
            </h2>
            <p className="font-grotesk font-medium text-[6px] sm:text-[11px] text-[#757095] max-w-[289px] sm:mt-2">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-4">
          <div className="bg-[#0038FF] h-[45px] w-[55px] sm:h-[55px] rounded-full relative">
            <img
              src="images/group.svg"
              alt="group"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </div>
          <div>
            <h2 className="font-machina text-[8px] sm:text-[12px] md:text-[16px] font-extrabold">
              Dedicated Team
            </h2>
            <p className="font-grotesk font-medium text-[6px] sm:text-[11px] text-[#757095] max-w-[289px] sm:mt-2 ">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-4">
          <div className="bg-[#0038FF] h-[45px] w-[55px] sm:h-[55px] rounded-full relative">
            <img
              src="images/headphone.svg"
              alt="headphone"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </div>
          <div>
            <h2 className="font-machina text-[8px] sm:text-[11px] sm:text-[16px font-extrabold">
              24/7 Hours Support
            </h2>
            <p className="font-grotesk font-medium text-[6px] sm:text-[11px] text-[#757095] max-w-[289px] md:mt-2 ">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative mt-14 mr-14 xl:mr-0">
        <div className="relative mt-[5px] ml-[26px] md:ml-[40px] max-w-[458px] w-full h-[400px] md:h-[489px]">
          <div className="relative mt-10 max-w-[458px] w-full h-[400px] md:h-[489px] bg-[#E8F2FF] z-10">
            <div
              style={{
                clipPath: "polygon(50% 50%,0% 50%,0 100%)",
                background: "linear-gradient(135deg, #fff 0%, #fff 100%)",
              }}
              className="absolute -top-10 left-0 w-20 h-20 z-20"
            ></div>
          </div>
          <img
            src="images/digitalservice.png"
            alt="digitalservice"
            className="absolute top-0 left-0 h-[524px] scale-x-[-1] z-20"
          />

          <img
            src="images/chart.svg"
            alt="chart"
            className="absolute z-20 -bottom-[40%] right-[10%] min-[500px]:-bottom-[50%] min-[590px]:-bottom-[60%] min-[590px]:right-[18%] min-[700px]:-bottom-[70%] md:-bottom-[30%] min-[832px]:-bottom-[40%] min-[890px]:-bottom-[45%] lg:-bottom-[40%] lg:right-[30%]"
          />

          <img
            src="images/Ellipse-59.svg"
            alt="ellipse59"
            className="absolute top-[5%] -right-[3%] max-w-[80px] sm:h-[65px] sm:-right-[3%] sm:top-[1%] lg:h-[80px] h-[50px] min-[590px]:-right-[3%]  z-20"
          />
        </div>
      </div>
    </section>
  );
}

export default TypesOfInnovationServices;
