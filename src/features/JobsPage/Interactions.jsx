import { useContext } from "react";
import { MobileSidebarContext } from "../../Context/MobileSidebarContext";

function Interactions() {
  const { isMobile } = useContext(MobileSidebarContext);
  return (
    <section className="ml-[6px] xl:h-[600px] h-[430px] grid relative overflow-hidden">
      <div className="justify-self-center self-center grid max-[540px]:mt-16 min-[540px]:mt-24 md:mt-2">
        <h1 className="font-machina font-extrabold ml-6 xl:ml-6 text-[#1b1c31] max-w-[190px] text-[18px] min-[540px]:text-[20px] min-[540px]:max-w-[220px] sm:text-[26px] sm:max-w-[280px] md:max-w-[460px] xl:text-[37px] xl:max-w-[694px]">
          The new generation of smart and
        </h1>
        <h1 className="font-machina ml-6 xl:ml-12 font-extrabold text-[#1b1c31] max-w-[190px] text-[18px] min-[540px]:text-[20px] min-[540px]:max-w-[220px] sm:text-[26px] sm:max-w-[280px] md:max-w-[420px] xl:text-[37px] xl:max-w-[694px]">
          secure infrastrucure is here.
        </h1>
        <p className="font-grotesk ml-5 mt-4 text-[#64607d] justify-self-center self-center text-[10px] min-[540px]:text-[12px] max-w-[190px] min-[540px]:max-w-[220px] sm:text-[14px] sm:max-w-[280px] md:max-w-[370px] xl:text-[16px] xl:max-w-[430px] font-normal">
          The new generation of smart and secure infrastrucure is here.The new
          generation of smart and secure inf
        </p>
        <div className="flex flex-row justify-center gap-4 mt-8 ml-5">
          <button className="bg-[#0038FF] font-grotesk text-[11px] font-bold text-[#fff] rounded-[7.86px] px-3 py-3 max-w-[135px] w-full h-[44px]">
            Job Offer
          </button>
          <button className="text-[#0038FF] font-grotesk text-[11px] font-bold bg-[##f7f9fb] rounded-[7.86px] px-3 py-3 max-w-[135px] w-full h-[44px]">
            Job Offer
          </button>
        </div>
      </div>
      {/* 1 */}
      <div className="absolute top-[15%] right-[72%] sm:left-[25%] md:left-[16%] xl:top-[14%] xl:left-[40%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative"
        >
          <img
            src="images/papperplane.svg"
            alt="papperplane"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
      <svg
        className="absolute -top-[5%] left-[20%] min-[575px]:left-[23%] sm:left-[26%] md:left-[17%] xl:top-0 xl:left-[42.8%] min-[1400px]:left-[43.5%] w-[200px] h-[200px]"
        viewBox="0 0 320 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 190 H92.3 V153.9 H190"
          stroke="rgba(0, 0, 0, 0.3)"
          strokeWidth="0.79"
          strokeDasharray="4 5"
          strokeLinecap="square"
        />
      </svg>

      <div className="absolute top-[10%] right-[42%] min-[450px]:right-[50%] min-[510px]:right-[54%] min-[730px]:right-[57%] md:right-[62%] min-[895px]:right-[65%] min-[970px]:right-[68%] xl:top-[10%] xl:left-[51%]">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative"
        >
          <img
            src="images/image1.png"
            alt="image1"
            className="absolute top-2 right-0 rounded-[8px] "
          />
        </div>
      </div>
      <div className="absolute top-[10%] right-[14%] min-[450px]:right-[28%] min-[510px]:right-[35%] sm:right-[38%] min-[730px]:right-[44%] md:right-[47%] min-[895px]:right-[52%] min-[970px]:right-[56%] xl:top-[8%] xl:left-[56%] min-[1400px]:left-[55%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] w-[102px] h-[42px] xl:w-[206px] xl:h-[69px] relative"
        >
          <img
            src="images/greenArrow.svg"
            alt="greenArrow"
            className="absolute size-5 xl:bottom-6 xl:left-6"
          />
        </div>
      </div>
      {/* 2 */}
      <div className="absolute left-0 top-[38%] min-[870px]:left-[1.4%] min-[920px]:left-[3%] min-[1070px]:left-[5%] xl:top-[35%] xl:left-[3.5%] min-[1400px]:left-[4%]">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative z-20"
        >
          <img
            src="images/papperplane.svg"
            alt="papperplane"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
      {isMobile ? (
        <svg
          className="absolute left-5 top-[30%] w-[1px]"
          viewBox="0 0 1 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 V120"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.79"
            strokeDasharray="4 5"
            strokeLinecap="square"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : (
        <svg
          className="absolute -left-2 top-[20%] md:w-[40%] md:h-[60%] md:left-2 min-[1140px]:left-1 min-[1140px]:left-0 min-[1140px]:-left-1 min-[1240px]:-left-2 min-[1270px]:-left-3 xl:h-[50%] xl:top-[20%] xl:left-0 min-[1350px]:-left-3 min-[1450px]:-left-6 min-[1500px]:-left-8 min-[1540px]:-left-9"
          width="450"
          height="350"
          viewBox="0 0 230 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10 V150 H80"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.79"
            strokeDasharray="4 5"
            strokeLinecap="square"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      <div className="absolute left-0 top-[20%] min-[870px]:left-[1.4%] min-[920px]:left-[3%] min-[1070px]:left-[5%] xl:top-[15%] xl:left-[3.5%] min-[1400px]:left-[4%]">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative"
        >
          <img
            src="images/image2.png"
            alt="image2"
            className="absolute top-2 right-0 rounded-[8px] "
          />
        </div>
      </div>
      {/* 3 */}
      <div className="absolute top-[56%] md:left-[10%] min-[870px]:left-[12%] xl:top-[48%] xl:left-[14%]">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative"
        >
          <img
            src="images/image3.png"
            alt="image3"
            className="absolute top-0 right-0 rounded-[8px] "
          />
        </div>
      </div>
      <div className="absolute left-0 top-[64%] md:left-[6%] min-[870px]:left-[8%] xl:top-[56%] xl:left-[8%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] w-[75px] h-[42px] md:w-[85px] md:h-[55px] xl:w-[206px] xl:h-[139px] relative"
        >
          <img
            src="images/greenArrow.svg"
            alt="greenArrow"
            className="absolute size-5 left-0 top-0 xl:top-5 xl:left-6"
          />
          <img
            src="images/redArrow.svg"
            alt="redArrow"
            className="absolute left-0 bottom-0 size-5 xl:bottom-5 xl:left-6"
          />
          <img
            src="images/line.svg"
            alt="line"
            className="hidden absolute xl:block bottom-[60px] left-10"
          />
        </div>
      </div>
      {/* 4 */}
      <div className="absolute right-0 top-[37%] min-[450px]:right-[8%] md:right-[8%] md:top-[55%] min-[870px]:right-[9%] xl:top-[50%] xl:right-[13%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative"
        >
          <img
            src="images/papperplane.svg"
            alt="papperplane"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
      <div className="absolute right-0 top-[20%] min-[450px]:right-[8%] md:right-[1%] md:top-[35%] min-[870px]:right-[3%] min-[970px]:right-[4%] xl:top-[28%] xl:right-[5%] min-[1350px]:right-[6%] min-[1400px]:right-[7%] min-[1500px]:right-[8%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative"
        >
          <img
            src="images/image4.png"
            alt="image4"
            className="absolute top-2 right-0 rounded-[8px] "
          />
        </div>
      </div>
      {/* 5 */}
      <div className="absolute right-0 top-[55%] min-[450px]:right-[8%] md:right-[18%] md:top-[65%] min-[870px]:right-[17%] min-[970px]:right-[16%] min-[1120px]:right-[15%] min-[1220px]:right-[14%] xl:top-[65%] xl:right-[22%] min-[1400px]:right-[21%] min-[1500px]:right-[20%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] size-10 xl:size-[63px] relative z-20"
        >
          <img
            src="images/image5.png"
            alt="image5"
            className="absolute top-1 right-0 rounded-[8px] "
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-[26%] min-[450px]:right-[4%] md:right-[6.2%] md:top-[69%] min-[870px]:right-[7%] xl:top-[69.7%] xl:right-[3%] min-[1350px]:right-[4.3%] min-[1400px]:right-[4%] min-[1450px]:right-[5%] min-[1500px]:right-[4.5%] min-[1540px]:right-[4.9%] z-20">
        <div
          style={{
            boxShadow: `
          0px 1.45px 2.47px rgba(0, 0, 0, 0.0072),
          0px 6.4px 5.12px rgba(0, 0, 0, 0.0118),
          0px 15.71px 10.21px rgba(0, 0, 0, 0.015),
          0px 30.26px 20.02px rgba(0, 0, 0, 0.0182),
          0px 50.91px 36.8px rgba(0, 0, 0, 0.0228),
          0px 78.55px 62.84px rgba(0, 0, 0, 0.03)
          `,
          }}
          className="bg-[#fff] rounded-[8px] w-[75px] h-[42px] md:[125px] md:h-[55px] xl:w-[206px] xl:h-[69px] relative"
        >
          <img
            src="images/redArrow.svg"
            alt="redArrow"
            className="absolute size-5 top-0 xl:bottom-5 xl:left-6"
          />
        </div>
      </div>
      {isMobile ? (
        <svg
          className="absolute right-5 top-[30%] min-[450px]:right-[13%] min-[570px]:right-[12%] min-[700px]:right-[11%] w-[1px]"
          viewBox="0 0 1 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 V120"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.79"
            strokeDasharray="4 5"
            strokeLinecap="square"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : (
        <svg
          className="absolute top-[44%] right-[4%] md:w-[72%] md:h-[37%] md:left-[56%] md:top-[35%] xl:h-[45%] xl:left-[52%] xl:top-[27%] rotate-180"
          width="350"
          height="250"
          viewBox="0 0 350 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 10 V80 H210 V210 H160"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.79"
            strokeDasharray="4 5"
            strokeLinecap="square"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
    </section>
  );
}

export default Interactions;
