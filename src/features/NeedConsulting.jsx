import Button from "../ui/Button";

function NeedConsulting() {
  return (
    <div className="bg-black md:h-[610px] font-machina text-white p-10 min-[452px]:h-[350px] sm:h-[450px] sm:p-10 md:py-12 md:px-6 lg:py-20 lg:px-44 mb-64">
      <h1 className="font-extrabold leading-none text-[24px] min-[500px]:text-[30px] sm:text-[39px] md:text-[48px] lg:text-[64px]">
        Need consulting?
      </h1>
      <p className="font-light mt-3 mb-12 xl:max-w-[620px] leading-none text-[12px] max-[500px]:max-w-[220px] min-[452px]:text-[15px] max-w-[350px] sm:text-[32px] max-sm:mb-20 xl:text-[48px]">
        Get us in touch about the appropriate solutions and services for your
        business.
      </p>
      <Button bg="#fff" color="#0038FF" px="42px" py="20px">
        <span className="font-machina w-full text-[14px] xl:text-[20px] font-light">
          Make An Appointment
        </span>
      </Button>

      <p className="mt-4 font-light text-[10px] min-[452px]:text-[12px] md:text-[18px]">
        Our support team will call you as soon as possible.
      </p>
    </div>
  );
}

export default NeedConsulting;
