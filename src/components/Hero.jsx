import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[100px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            OUR <span className="text-gradient">CORE</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[94px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Principles <br className="sm:block hidden" />{" "}
          <span className="text-gradient">C O R B E C</span>{" "}
        </h1>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
          <span className="text-gradient">CO</span>nnectivity – Connectivity is
          at the core of everything we do.{" "}
          <span className="text-gradient">R</span>elia
          <span className="text-gradient">B</span>ility – Ability to be trusted.
          <span className="text-gradient">E</span>mpowering
          <span className="text-gradient">C</span>ommunication – Our Commitment
          in providing telecoms services, solutions and innovations.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="billing" className="w-[90%]  relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
