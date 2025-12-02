import { useState } from "react";
import Button from "./Button";

function Footer() {
  const [emailAddress, setEmailAddress] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!emailAddress) {
      alert("enter a valid email address");
      return;
    }
    console.log("emailAddress", emailAddress);
    setEmailAddress("");
  }
  return (
    <>
      <footer className="grid grid-rows-3 grid-cols-2 mb-6 md:grid-rows-2 md:grid-cols-3 gap-3 xl:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr_2.2fr] xl:grid-rows-1 ml-4 xl:ml-20 xl:gap-0">
        {/* 1 */}
        <div className="flex flex-col gap-4">
          <img
            src="images/footerLogo.svg"
            alt="footerlogo"
            className="h-[14px] w-[79px] mt-4"
          />
          <p className="font-machina text-[#757095] text-[13px] font-normal max-w-[192px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/052-linkedin.svg"
                alt="linkedin"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a
              href="https://messenger.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/messenger.svg"
                alt="messenger"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a
              href="https://twiiter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/096-twitter.svg"
                alt="twitter"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a
              href="https://twoo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/twoo.svg"
                alt="twoo"
                className="w-[18px] h-[18px]"
              />
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="font-machina flex flex-col gap-2 max-sm:justify-self-center mr-20 md:ml-6 md:mr-0 xl:ml-0 xl:mr-0 xl:mt-0">
          <h1 className="font-extrabold text-[16px] md:text-[18px]">Company</h1>
          <ul className="flex flex-col text-[13px] md:text-[14px] gap-4 font-normal">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="font-machina flex flex-col gap-2 ">
          <h1 className="font-extrabold text-[16px] md:text-[18px]">Product</h1>
          <ul className="flex flex-col text-[13px] md:text-[14px] gap-4 font-normal">
            <li>Invoicing</li>
            <li>Accounting</li>
            <li>Proposal</li>
          </ul>
        </div>
        {/* 4 */}
        <div className="font-machina flex flex-col gap-2 max-sm:justify-self-center max-sm:ml-2">
          <h1 className="font-extrabold text-[16px] md:text-[18px]">
            Resources
          </h1>
          <ul className="flex flex-col text-[13px] md:text-[14px] gap-4 font-normal">
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>How to write a contract</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="font-machina flex flex-col gap-2 max-sm:justify-self-center relative col-start-1 col-end-3 md:col-start-2 md:col-end-4 xl:col-start-5 xl:col-end-6 xl:justify-self-start">
          <h1 className="font-extrabold text-[13px] sm:text-[16px] md:text-[18px]">
            Join Our Newsletter
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                onChange={(e) => setEmailAddress(e.target.value)}
                value={emailAddress}
                required
                className="w-[90%] h-[47px] bg-[#f9f9f9] text-[12px] placeholder:text-[#181433] placeholder:opacity-20 pl-4 focus:outline-none  placeholder:text-[13px] md:placeholder:text-[14px] placeholder:font-machina max-w-[350px]"
                placeholder="your email address"
              />
              <div className="absolute top-0 right-0 min-[630px]:right-10 sm:right-40 md:right-5 lg:right-24 min-[1215px]:right-36 xl:right-0">
                <Button h="47px" w="134px" bg="#0038FF">
                  subscribe
                </Button>
              </div>
            </div>
            <p className="mt-4 font-machina text-[#181433] text-[13px] md:text-[14px] max-w-[334px] opacity-50">
              * Will send you weekly updates for your better finance management.
            </p>
          </form>
        </div>
      </footer>
      {/* second footer */}
      <div className="grid grid-cols-5 mt-28 mr-5 items-center max-[450px]:grid-rows-2 max-[450px]:grid-cols-3 max-[450px]:gap-4 lg:gap-6 lg:justify-self-center ">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="leading-6 font-[manrope] text-[14px] font-medium  text-[#757095] justify-self-center"
        >
          Twitter
          <div className="w-12 h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://dribble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium  text-[#757095] justify-self-center"
        >
          Dribble
          <div className="w-12 h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium  text-[#757095] justify-self-center"
        >
          Instagram
          <div className="w-16 h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium  text-[#757095] justify-self-center"
        >
          YouTube
          <div className="w-14 h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://slack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium text-[#757095] justify-self-center max-[450px]:-col-start-2 max-[450px]:-col-end-1"
        >
          Slack
          <div className="w-9 h-[1px] bg-[#757095] mt-1"></div>
        </a>
      </div>
      <div className="grid grid-cols-3 mt-16 font-[Manrope] items-center mb-4 justify-self-center">
        <div className="flex items-center text-[6px] min-[400px]:text-[8px] sm:text-[13px]  justify-self-center gap-3 xl:gap-16">
          <p className="text-[#757095] font-medium ">
            © 2022 All Rights Reserved
          </p>
          <div className="w-[1px] h-5 bg-[#757095]"></div>
        </div>
        <div className="flex items-center text-[8px] min-[400px]:text-[10px] sm:text-[13px] justify-self-center gap-3 xl:gap-14">
          <p className="text-[#757095] font-medium xl:ml-9">venus@gmail.com</p>
          <div className="w-[1px] h-5 bg-[#757095]"></div>
        </div>
        <div className="flex items-center text-[8px] min-[400px]:text-[10px] sm:text-[13px] justify-self-start">
          <p className="text-[#757095] font-medium xl:ml-9">+92 300 848 9895</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
