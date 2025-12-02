import NeedConsulting from "../features/NeedConsulting";
import FeaturesThatBlowsMindSolutions from "../features/SolutionsPage/FeaturesThatBlowsMindSolutions";
import TextAndCheckboxes from "../features/TextAndCheckboxes";

function Solutions() {
  return (
    <>
      <div className="md:mt-[180px] mt-20 ml-3 xl:ml-[226px] mb-16 overflow-x-hidden">
        <h1 className=" font-machina md:text-[64px] text-[48px] font-extrabold">
          Solutions
        </h1>
        <FeaturesThatBlowsMindSolutions />
        <TextAndCheckboxes>Infrastructure and Cloud</TextAndCheckboxes>
        <TextAndCheckboxes>Security</TextAndCheckboxes>
        <TextAndCheckboxes>Artificial intelligence</TextAndCheckboxes>
      </div>
      <NeedConsulting />
    </>
  );
}

export default Solutions;
