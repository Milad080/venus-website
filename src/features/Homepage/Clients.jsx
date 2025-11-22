function Clients() {
  return (
    <div className="h-[749px] bg-[#0038FF] relative">
      <h1 className="font-machina font-extrabold text-[64px] text-white absolute top-[176px] left-[50%] -translate-x-2/4">
        Clientes
      </h1>
      <p className="font-grotesk font-[463px] text-[20px] max-w-[582px] top-[276px] absolute left-[50%] -translate-x-2/4">
        Hic placeat impedit id ducimus omnis et quia labore quo tenetur
        voluptas. Sed possimus iusto
      </p>
      <div className="bg-black h-[69px] w-[990px] absolute top-[450px] left-[50%] -translate-x-2/4">
        <h2 className="text-white font-machina text-[20px] font-normal absolute top-[18px] left-[200px]">
          Over 32k+ software businesses growing with
        </h2>
        <img
          src="images/Frame.svg"
          alt="venus"
          className="h-[17px] absolute top-[25px] left-[660px]"
        />
      </div>
      <div className="bg-white w-[990px] h-[143px] absolute top-[520px] left-[50%] -translate-x-2/4">
        <div className="flex flex-row gap-8 absolute top-[60px] left-[50px]">
          <img src="images/openZeppline.svg" alt="openzeppline" />
          <img src="images/oracle.svg" alt="oracle" />
          <img src="images/morpheus.svg" alt="morpheus" />
          <img src="images/samsung.svg" alt="samsung" />
          <img src="images/monday.svg" alt="monday" />
          <img src="images/segment.svg" alt="segment" />
          <img src="images/protonet.svg" alt="protonet" />
        </div>
        <img
          src="images/Vector2.svg"
          alt="vector"
          className="absolute -right-[75px] -top-[120px]"
        />
      </div>
    </div>
  );
}

export default Clients;
