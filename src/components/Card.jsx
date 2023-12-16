import styles from "../style";
import Button from "./Button";

const Card = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        <span className="text-gradient">CORBEC Communications</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        Provides fixed Wireless Access services (FWA) on IoT and 5G Stand Alone
        (SA) platforms, to find out more information please contact us.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Card;
