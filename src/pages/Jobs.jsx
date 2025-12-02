import Interactions from "../features/JobsPage/Interactions";
import LinedInfrastructure from "../features/JobsPage/LinedInfrastructure";
import TextAndCheckboxes from "../features/TextAndCheckboxes";

function Jobs() {
  return (
    <>
      <Interactions />
      <div className="xl:ml-[226px]">
        <TextAndCheckboxes>Developer</TextAndCheckboxes>
        <TextAndCheckboxes>Graphic Designer</TextAndCheckboxes>
        <TextAndCheckboxes>UX Developer</TextAndCheckboxes>
      </div>
      <LinedInfrastructure />
    </>
  );
}

export default Jobs;
