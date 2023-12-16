import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-gradient">CORBEC</span>{" "}
        <span className="text-red-700">IOT</span> PLATFORM &
        <span className="text-gradient">CORBEC</span> 5G
        <span className="text-red-700">SA FWA</span> NETWORK{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        "5G Stand Alone FWA networks are the next generation of internet
        connectivity, offering faster speeds and more reliable connections on
        CPE and other devices than ever before." "IoT platforms are the support
        software that connects everything in an IoT system"
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
