function Clients() {
  return (
    <div className="flex flex-col justify-center items-center h-[620px] sm:h-[749px] bg-[#0038FF]">
      <h1 className="font-machina font-extrabold text-[48px] xl:text-[64px] text-white">
        Clientes
      </h1>
      <p className="font-grotesk font-medium w-full m-[0_auto] p-3 text-[12px] max-sm:max-w-[400px] sm:text-[16px] md:text-[18px] xl:text-[20px] max-w-[522px] ">
        Hic placeat impedit id ducimus omnis et quia labore quo tenetur
        voluptas. Sed possimus iusto
      </p>
      <div className="flex flex-row justify-center items-center gap-3 mt-16 p-3 bg-[rgba(0,0,0,0.8)] xl:bg-black h-[69px] max-w-[990px] w-full">
        <h2 className="text-white font-machina text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal">
          Over 32k+ software businesses growing with
        </h2>
        <img src="images/Frame.svg" alt="venus" className="h-[17px] " />
      </div>
      <div className="bg-[rgba(255,255,255,0.9)] xl:bg-white max-w-[990px] w-full h-[100px] xl:h-[143px] relative p-4">
        <div className="grid grid-cols-7 justify-center items-center gap-3 mt-3  max-xl:grid-cols-4 max-xl:grid-rows-2 sm:ml-12 xl:mt-12">
          <img src="images/openZeppline.svg" alt="openzeppline" className="" />
          <img src="images/oracle.svg" alt="oracle" className="" />
          <img src="images/morpheus.svg" alt="morpheus" className="" />
          <img src="images/samsung.svg" alt="samsung" className="" />
          <img src="images/monday.svg" alt="monday" className="" />
          <img src="images/segment.svg" alt="segment" className="" />
          <img src="images/protonet.svg" alt="protonet" className="" />
        </div>
        <img
          src="images/Vector2.svg"
          alt="vector"
          className="hidden xl:block xl:absolute xl:-right-4 xl:-top-[120px] max-[1480px]:-right-[5%] max-[1480px]:top-[5%]"
        />
      </div>
    </div>
  );
}

export default Clients;
