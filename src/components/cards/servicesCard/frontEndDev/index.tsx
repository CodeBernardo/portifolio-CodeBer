import { FaCode } from "../../../icons";
import s from "./index.module.scss"

export const FrontEndServiceCard = (): JSX.Element => {
  return (
    <div className={s.serviceCard_container}>
      <FaCode size={52} className={s.icon} />
      <div className={s.info_container}>
        <h3 className="title3">Desenvolvedor Front-end</h3>
        <p className="text1 height2">
          Desenvolvo soluções completas no front-end, construindo aplicações
          sólidas e integradas, garantindo uma experiência de usuário
          excepcional.
        </p>
      </div>
    </div>
  );
};