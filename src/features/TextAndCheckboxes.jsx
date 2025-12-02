import { BsCheck } from "react-icons/bs";
import Button from "../ui/Button";

function TextAndCheckboxes({ children }) {
  return (
    <div className="mt-12 md:mt-24">
      <h1 className="max-w-[795px] font-machina font-bold md:font-light mb-3 text-[22px] md:text-[64px]">
        {children}
      </h1>
      <div className="max-w-[762px]">
        <p className="font-machina font-light text-[12px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam
          leo, consectetur vel tellus consectetur, feugiat pellentesque velit.
          Pellentesque quis massa molestie, tempor magna et, scelerisque justo.
          Nulla sed efficitur risus.
        </p>
        <p className="font-machina mt-4 font-light text-[12px] md:text-[18px]">
          Morbi ac vulputate odio. Vivamus et libero non dolor pellentesque
          elementum. Duis consectetur metus ex, non pulvinar enim laoreet a.
          Vestibulum placerat odio libero.
        </p>
      </div>
      <div className="mt-12 mb-8 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-3">
          <div className=" bg-[#0038ff] rounded-full flex items-center justify-center size-3 md:size-5">
            <BsCheck className="text-white text-md" />
          </div>
          <p className="font-machina font-extrabold text-[12px] md:text-[18px]">
            Proin porttitor sem eget.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className=" bg-[#0038ff] rounded-full flex items-center justify-center size-3 md:size-5">
            <BsCheck className="text-white text-md" />
          </div>
          <p className="font-machina font-extrabold text-[12px] md:text-[18px]">
            Sed vel convallis dui.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className=" bg-[#0038ff] rounded-full flex items-center justify-center size-3 md:size-5">
            <BsCheck className="text-white text-md" />
          </div>
          <p className="font-machina font-extrabold text-[12px] md:text-[18px]">
            Neque iaculis non risus.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className=" bg-[#0038ff] rounded-full flex items-center justify-center size-3 md:size-5">
            <BsCheck className="text-white text-md" />
          </div>
          <p className="font-machina font-extrabold text-[12px] md:text-[18px]">
            Proin hendrerit neque suscipit.
          </p>
        </div>
      </div>
      <Button color="#0038FF" border="#0037ff7f" px="28px" py="10px">
        <span className="font-machina font-light text-[14px]">
          Book a Free Consultation
        </span>
      </Button>
    </div>
  );
}

export default TextAndCheckboxes;
