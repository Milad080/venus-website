import NeedConsulting from "../features/NeedConsulting";
import FeaturesThatBlowsMindServices from "../features/ServicesPage/FeaturesThatBlowsMindServices";
import TextAndCheckboxes from "../features/TextAndCheckboxes";

function Services() {
  return (
    <>
      <div className="md:mt-[180px] mt-20 ml-1 lg:ml-[30px] xl:ml-[180px] 2xl:ml-[226px] mb-16 overflow-x-hidden">
        <h1 className=" font-machina md:text-[64px] text-[48px] font-extrabold">
          Services
        </h1>
        <FeaturesThatBlowsMindServices />
        <TextAndCheckboxes>Private network</TextAndCheckboxes>
        <TextAndCheckboxes>Sepanta</TextAndCheckboxes>
        <TextAndCheckboxes>Single Sign On</TextAndCheckboxes>
      </div>
      <NeedConsulting />
    </>
  );
}

export default Services;
