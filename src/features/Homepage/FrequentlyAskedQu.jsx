import Button from "../../ui/Button";

function FrequentlyAskedQu() {
  return (
    <div className="flex flex-row h-[749px] mt-32 mb-32 bg-[#E6E6E6] relative overflow-hidden">
      <div>
        <h1 className="max-w-[370px] font-machina text-[64px] font-extrabold leading-none ml-16 mt-24">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-2 mt-10 ml-16">
          <Button color="#000000" px="28px" py="12px">
            <span className="text-[20px] font-normal">
              Libero Vitae Lectus Ullamcorper ?
            </span>
          </Button>
          <Button color="#000000" px="28px" py="12px">
            <span className="text-[20px] font-normal">
              Quisque Elementum Viverra Elit ?
            </span>
          </Button>
          <Button color="#000000" px="28px" py="12px">
            <span className="text-[20px] font-normal">
              Aliquam Sed Neque Massa ?
            </span>
          </Button>
          <Button color="#000000" px="28px" py="12px">
            <span className="text-[20px] font-normal">
              Commodo Fermentum Arcu Venenatis ?
            </span>
          </Button>
          <Button color="#000000" px="28px" py="12px">
            <span className="text-[20px] font-normal">more . . .</span>
          </Button>
        </div>
      </div>
      <div className="absolute top-0 -right-[10%] w-[80%] h-full z-0 pointer-events-none">
        <img
          src="images/animated-lines.gif"
          alt="animatedlines"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
    </div>
  );
}

export default FrequentlyAskedQu;
