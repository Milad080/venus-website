function LinedInfrastructure() {
  return (
    <div className="bg-black h-[510px] max-md:mt-6 relative md:h-screen xl:h-[750px] mt-32">
      <img
        src="images/jobsgif.gif"
        alt="jobsgif"
        className="h-[320px] md:h-[370px] w-[96%] object-cover absolute top-0 left-0 lg:h-[450px] xl:h-[498px]"
      />
      <h1 className="text-white mt-10 lg:mt-16 xl:mt-6 font-machina mb-2 text-[32px] leading-none absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/3 z-20 md:text-[40px] lg:text-[52px] xl:text-[64px] max-w-[310px] md:max-w-[360px] lg:max-w-[510px] xl:max-w-[582px]">
        The new generation of smart and secure infrastrucure is{" "}
        <span className="font-extrabold">here</span>.
        <p className="mt-14 font-grotesk font-light max-w-[300px] text-[12px] sm:text-[14px] sm:max-w-[582px] md:text-[17px] xl:mt-16 xl:text-[20px]">
          The best infrastructures helps you provide your customers the best
          services in a best way.
        </p>
      </h1>
      <img
        src="images/contactVector.svg"
        alt="contactvector"
        className="absolute z-20 right-5 bottom-5 size-12 sm:size-14 md:size-16 lg:size-20 xl:w-[114px] xl:bottom-[50px] xl:right-[70px] xl:h-[136px]"
      />
    </div>
  );
}

export default LinedInfrastructure;
