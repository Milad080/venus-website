import Button from "../../ui/Button";

function About() {
  return (
    <div className="relative font-machina flex flex-col mt-12 xl:ml-[186px] min-[440px]:ml-12 xl:mt-36">
      <h1 className="text-[32px] font-extrabold xl:text-[64px]">About</h1>
      <p className="text-[12px] md:text-[16px] xl:text-[18px] max-w-[230px] min-[500px]:text-[13px] min-[500px]:max-w-[300px] sm:max-w-[380px] md:max-w-[350px] xl:max-w-[454px] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam
        leo, consectetur vel tellus consectetur, feugiat pellentesque velit.
        Pellentesque quis massa molestie, tempor magna et, scelerisque justo.
        Nulla sed efficitur risus. Morbi ac vulputate odio. Vivamus et libero
        non dolor pellentesque elementum. Duis consectetur metus ex, non
        pulvinar enim laoreet a. Vestibulum placerat odio libero.
      </p>
      <h1 className="text-[32px] max-w-[370px] font-extrabold mt-8 xl:text-[64px]">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-2 mt-7">
        <Button px="22px" py="8px" color="#000" border="#0000007f">
          <span className="xl:text-[20px] font-normal">
            Libero Vitae Lectus Ullamcorper ?
          </span>
        </Button>
        <Button px="22px" py="8px" color="#000" border="#0000007f">
          <span className="xl:text-[20px] font-normal">
            Quisque Elementum Viverra Elit ?
          </span>
        </Button>
      </div>
      <img
        src="images/contactZigzag.svg"
        alt="contactZigzag"
        className="absolute max-w-[1154px] w-full right-0 xl:bottom-[65px] -z-10 bottom-[270px] min-[450px]:bottom-[45%] sm:bottom-[25%] min-[580px]:bottom-[20%] lg:bottom-[10%] min-[1120px]:-bottom-[8%] xl:w-[1154] xl:h-[1369px]"
      />
    </div>
  );
}

export default About;
