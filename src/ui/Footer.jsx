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
      <footer className="grid grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr_1fr] ml-20 mb-6">
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
            <a href="https://linkedin.com" target="_blank">
              <img
                src="images/052-linkedin.svg"
                alt="linkedin"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a href="https://messenger.com" target="_blank">
              <img
                src="images/messenger.svg"
                alt="messenger"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a href="https://twiiter.com" target="_blank">
              <img
                src="images/096-twitter.svg"
                alt="twitter"
                className="w-[18px] h-[18px]"
              />
            </a>
            <a href="https://twoo.com" target="_blank">
              <img
                src="images/twoo.svg"
                alt="twoo"
                className="w-[18px] h-[18px]"
              />
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="font-machina flex flex-col gap-2">
          <h1 className="font-extrabold text-[22px]">Company</h1>
          <ul className="flex flex-col text-[15px] gap-4 font-normal">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="font-machina flex flex-col gap-2">
          <h1 className="font-extrabold text-[22px]">Product</h1>
          <ul className="flex flex-col text-[15px] gap-4 font-normal">
            <li>Invoicing</li>
            <li>Accounting</li>
            <li>Proposal</li>
          </ul>
        </div>
        {/* 4 */}
        <div className="font-machina flex flex-col gap-2">
          <h1 className="font-extrabold text-[22px]">Resources</h1>
          <ul className="flex flex-col text-[15px] gap-4 font-normal">
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>How to write a contract</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="font-machina flex flex-col gap-2 relative">
          <h1 className="font-extrabold text-[22px]">Join Our Newsletter</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
              required
              className="w-[410px] h-[47px] bg-[#F9F9F9] text-[12px] placeholder:text-[#181433] placeholder:opacity-20 pl-4 focus:outline-none focus:ring focus:ring-blue-400 placeholder:text-[15px] placeholder:font-machina"
              placeholder="your email address"
            />
            <div className="absolute right-0 top-[41px]">
              <Button h="47px" w="134px" bg="#0038FF">
                subscribe
              </Button>
            </div>
            <p className="mt-4 font-machina text-[#181433] text-[15px] max-w-[334px] opacity-50">
              * Will send you weekly updates for your better finance management.
            </p>
          </form>
        </div>
      </footer>
      {/* scond footer */}
      <div className="flex flex-row gap-16 mt-28 items-center justify-center">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="leading-6 font-[manrope] text-[14px] font-medium text-[#757095]"
        >
          Twitter
          <div className="w-full h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://dribble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium text-[#757095]"
        >
          Dribble
          <div className="w-full h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium text-[#757095]"
        >
          Instagram
          <div className="w-full h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium text-[#757095]"
        >
          YouTube
          <div className="w-full h-[1px] bg-[#757095] mt-1"></div>
        </a>
        <a
          href="https://slack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Manrope] text-[14px] font-medium text-[#757095]"
        >
          Slack
          <div className="w-full h-[1px] bg-[#757095] mt-1"></div>
        </a>
      </div>
      <div className="flex flex-row gap-16 mt-16 font-[Manrope] items-center justify-center mb-4">
        <p className="text-[#757095] font-medium ">
          © 2022 All Rights Reserved
        </p>
        <div className="w-[1px] h-5 bg-[#757095]"></div>
        <p className="text-[#757095] font-medium ">venus@gmail.com</p>
        <div className="w-[1px] h-5 bg-[#757095]"></div>
        <p className="text-[#757095] font-medium">+92 300 848 9895</p>
      </div>
    </>
  );
}

export default Footer;
