import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className="bg-[#fff] xl:h-[684px] h-[600px] mt-40 relative w-full z-0">
      <div className="absolute bg-[#F6F9FF] max-w-[449px] w-[60%] h-[350px] md:h-[360px]  z-20 top-0 right-5 min-[510px]:right-10 lg:h-[527px] lg:w-full xl:right-[20%] ">
        <svg
          viewBox="0 0 100 100"
          className="absolute bottom-0 left-0 w-24 h-10 z-20"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 0,100 50,100"
            fill="#0038FF"
            style={{
              outline: "1px solid transparent",
            }}
          />
        </svg>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-[480px] px-6 sm:px-8 md:px-9 py-2 lg:mt-12 xl:mt-14 lg:gap-10 xl:gap-12 z-40 font-grotesk"
        >
          {/* NAME */}
          <label className="text-[#808285] text-[10px] sm:text-[16px] font-medium">
            NAME:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full bg-transparent text-[12px] md:text-[16px] border-[#1B1C31] border-b-[2px] text-black placeholder-black  focus:outline-none focus:border-blue-400 py-2"
            />
          </label>

          {/* EMAIL */}
          <label className="text-[#808285] text-[10px] sm:text-[16px] font-medium">
            EMAIL:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="w-full bg-transparent text-[12px] md:text-[16px] border-[#1B1C31] border-b-[2px] text-black placeholder-black  focus:outline-none focus:border-blue-400 py-2"
            />
          </label>

          {/* MESSAGE */}
          <label className="text-[#808285] text-[10px] sm:text-[16px] font-medium">
            MESSAGE:
            <input
              type="text"
              placeholder=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent text-[12px] md:text-[16px] border-[#1B1C31] border-b-[2px] text-black placeholder-black  focus:outline-none focus:border-blue-400 py-2"
            />
          </label>
          {/* BUTTON */}
          <button
            type="submit"
            className="mt-4 bg-[#0038FF] text-white font-semibold text-[14px] sm:text-[16px] py-3 px-6 w-full self-star"
          >
            Send
          </button>
        </form>
      </div>
      <img
        src="images/Ellipse-59.svg"
        alt="ellipse59"
        className="absolute -top-6 right-1 z-40 xl:right-[17%] size-12 min-[510px]:size-16 min-[510px]:right-3 md:size-20"
      />
      <h1 className="text-white font-machina ml-2 mt-24 text-[24px] md:text-[28px] font-extrabold absolute top-[45%] max-w-[250px] md:max-w-[300px] lg:mt-4 xl:mt-0 xl:text-[42px] xl:ml-10 xl:max-w-[479px] z-20">
        We are here to help you grow your business
      </h1>
      <div className="bg-[#0038FF] h-[490px] xl:h-[530px] absolute w-full bottom-0">
        <div className="grid grid-cols-2 grid-rows-2 justify-self-start">
          <div className="bg-[#1B1C31] size-[64px]"></div>
          <div className="bg-[#fff] size-[32px] row-start-2 col-start-2"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-[64px_42px] justify-self-start absolute bottom-0">
          <div className="bg-[rgb(255,255,255,0.1)] size-[64px] relative">
            {/* line */}
            <div className="relative">
              <svg
                viewBox="0 0 100 300"
                className="absolute -top-[123px] -left-[64px] w-[310px] h-[290px]"
              >
                <path
                  d="M0,160 Q9000,-3400 -30000,-850000"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#1B1C31] size-[42px] row-start-2 col-start-2"></div>
          <div className="bg-[rgb(255,255,255,0.1)] size-[25px] row-start-1 col-start-2 self-end justify-self-end"></div>
        </div>
      </div>
      <div className="absolute"></div>
    </div>
  );
}

export default Form;
