import { BackEndServiceCard } from "./backEndDev";
import { FrontEndServiceCard } from "./frontEndDev";

export const ServicesCard = (): JSX.Element => {
  return (
    <section>
      <h2>Serviços que ofereço</h2>
      <div>
        <FrontEndServiceCard />
        <BackEndServiceCard />
      </div>
    </section>
  );
};
