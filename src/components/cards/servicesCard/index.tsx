import { BackEndServiceCard } from "./backEndDev";
import { FrontEndServiceCard } from "./frontEndDev";
import s from "./index.module.scss"

export const ServicesCard = (): JSX.Element => {
  return (
    <section className={s.services_section}>
      <h2 className="title2">SERVICES</h2>
      <div className={s.services_container}>
        <FrontEndServiceCard />
        <BackEndServiceCard />
      </div>
    </section>
  );
};
