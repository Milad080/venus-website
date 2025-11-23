import { FaArrowUp } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

function TypesOfProvidedServices() {
  return (
    <section className="flex flex-row mt-16 ml-20 gap-24">
      {/* <div className="mt-6 mb-32 relative w-[350px] h-[250px] bg-white border-[#cfcfcf] drop-shadow-[0px_0px_52px_rgba(0,0,0,0.09)]">
        <div
          style={{
            clipPath: "polygon(0 0, 50% 50%,0 100%)",
            background:
              "linear-gradient(135deg, #f6f6f6 0%, #f9f9f9 100%, #fff 100%)",
          }}
          className="absolute bottom-0 right-0 w-12 h-12 drop-shadow-[0px_0px_52px_rgba(0,0,0,0.09)] rotate-45 translate-x-1/2 translate-y-1/2"
        ></div>
      </div> */}
      <div className="flex flex-col relative">
        <img src="images/Rectangle-91.svg" alt="rectangle" className="z-30" />
        <h3 className="absolute top-[132px] left-32 font-grotesk font-bold z-40">
          Quick Transfers
        </h3>
        <img
          src="images/Vector.svg"
          alt="vector"
          className="w-[133px] h-[133px] absolute top-[70px] left-[70px] z-10"
        />
        <img
          src="images/Ellipse-57.svg"
          alt="elipse"
          className="absolute w-[90px] h-[90px] top-[70px] left-[415px]"
        />
        <div className="flex flex-row gap-4 absolute top-[170px] left-[130px] z-40">
          <div className="flex flex-col gap-3">
            <img
              src="images/Drek.png"
              alt="Drek"
              className="rounded-full size-12"
            />
            <h3 className="self-center font-manrope text-[11px]">Drek</h3>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="images/Shane.png"
              alt="Shane"
              className="rounded-full size-12"
            />
            <h3 className="self-center font-manrope text-[11px]">Shane</h3>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="images/Alvin.png"
              alt="Alvin"
              className="rounded-full size-12"
            />
            <h3 className="self-center font-manrope text-[11px]">Alvin</h3>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="images/Bob.png"
              alt="Bob"
              className="rounded-full size-12"
            />
            <h3 className="self-center font-manrope text-[11px]">Bob</h3>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="images/Minnie.png"
              alt="Minnie"
              className="rounded-full size-12"
            />
            <h3 className="self-center font-manrope text-[11px]">Minnie</h3>
          </div>
        </div>
        <h3 className="font-grotesk text-sm font-medium absolute top-[270px] left-[130px] z-40">
          Provide Amount
        </h3>
        <img
          src="images/Rectangle-127.svg"
          alt="rectangle-127"
          className="absolute top-[308px] left-[130px] z-40"
        />
        <img
          src="images/Rectangle-128.svg"
          alt="rectangle-128"
          className="absolute top-[308px] left-[328px] z-40"
        />
        <img
          src="images/zipper-235.svg"
          alt="zipper"
          className="absolute top-[230px] left-[70px]"
        />
        <img
          src="images/zipper-235.svg"
          alt="zipper"
          className="absolute top-[340px] left-[520px]"
        />
        <img
          src="images/Rectangle-129.svg"
          alt="rectangle129"
          className="absolute -left-[60px] top-[285px] z-20"
        />
        <img
          src="images/Rectangle-129.svg"
          alt="rectangle129"
          className="absolute left-[160px] top-[285px] z-20"
        />
        <h3 className="absolute text-xs font-grotesk top-[411px] font-medium left-[66px] z-40">
          Deposits
        </h3>
        <div className="flex flex-row gap-6 items-center font-manrope font-medium absolute top-[430px] left-[65px] z-40">
          <p className="text-[20px]">$9,350</p>
          <p className="text-[#0038FF] flex flex-row gap-1">
            <FaArrowUp />
            <span>8.46%</span>
          </p>
        </div>
        <img
          src="images/Rectangle-249.svg"
          alt="rectangle249"
          className="w-[163px] h-[11px] absolute top-[470px] left-[65px] z-40"
        />
        <h3 className="absolute text-xs font-grotesk top-[411px] font-medium left-[290px] z-40">
          Expenses
        </h3>
        <div className="flex flex-row gap-6 items-center font-manrope font-medium absolute top-[430px] left-[291px] z-40">
          <p className="text-[20px]">$9,350</p>
        </div>
        <img
          src="images/Rectangle-249.svg"
          alt="rectangle249"
          className="w-[163px] h-[11px] absolute top-[470px] left-[290px] z-40"
        />
        <img
          src="images/Ellipse-58.svg"
          alt="ellipse58"
          className="absolute top-[475px] left-[35px] z-10"
        />
      </div>
      <div className="flex flex-col mt-16">
        <h4 className="text-[#0038FF] font-bold font-grotesk text-[12px] uppercase">
          Why Choose Us
        </h4>
        <h1 className="font-machina text-[40px] max-w-[409px] font-extrabold">
          Different types of innovative services are provided
        </h1>
        <h3 className="text-[#757095] text-[17px] font-grotesk max-w-[399px] font-medium mt-4">
          We provide smart services for you that are accessible
          anywhere/anytime.
        </h3>
        <div className="border-t mt-12 flex flex-col">
          <div className="mt-7 flex flex-row items-center gap-3">
            <div className="size-6 bg-[#0038ff] rounded-full flex items-center justify-center">
              <BsCheck className="text-white text-sm" />
            </div>
            <p className="font-grotesk font-medium text-[#505887] text-[17px]">
              Get Overview at a glance
            </p>
          </div>
          <div className="mt-6 flex flex-row items-center gap-3">
            <div className="size-6 bg-[#0038ff] rounded-full flex items-center justify-center">
              <BsCheck className="text-white text-sm" />
            </div>
            <p className="font-grotesk font-medium text-[#505887] text-[17px]">
              Deoposit funds easily, securlity
            </p>
          </div>
          <div className="mt-6 flex flex-row items-center gap-3">
            <div className="size-6 bg-[#0038ff] rounded-full flex items-center justify-center">
              <BsCheck className="text-white text-sm" />
            </div>
            <p className="font-grotesk font-medium text-[#505887] text-[17px]">
              Get Live Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypesOfProvidedServices;
