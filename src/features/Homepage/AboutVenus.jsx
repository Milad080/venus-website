import Button from "../../ui/Button";

function AboutVenus() {
  return (
    <div className="flex flex-row bg-black h-[730px] mt-24 gap-40">
      <div className="ml-[118px] mt-32">
        <h2 className="font-machina text-[#0038FF] text-[64px]">About</h2>
        <img src="/images/Frame.svg" alt="venus" />
        <h3 className="mt-6 text-white font-machina text-2xl max-w-xs">
          Different types of innovative services are provided{" "}
          <span className="font-extrabold">here</span>.
        </h3>
        <p className="mt-8 mb-10 text-[#7C7C7C] font-grotesk text-sm max-w-sm">
          The best infrastructures helps you provide your customers the best
          services in a best way.
        </p>
        <Button px="35px" py="14px">
          <span className="text-[14px] font-light">Read more . . .</span>
        </Button>
      </div>
      <div className="mt-32 mr-32 w-[508px] h-[508px] flex-shrink-0">
        <img src="/images/humangif.gif" alt="huamngif" />
      </div>
    </div>
  );
}

export default AboutVenus;
