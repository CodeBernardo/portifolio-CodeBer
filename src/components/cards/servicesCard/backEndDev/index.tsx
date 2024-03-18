import { FaDatabase } from "../../../icons";
import s from "./index.module.scss"

export const BackEndServiceCard = (): JSX.Element => {
  return (
    <div className={s.serviceCard_container}>
      <FaDatabase size={42} className={s.icon}/>
      <div className={s.info_container}>
        <h3 className="title3">Desenvolvedor Back-end</h3>
        <p className="text1 height2">
          Minha dedicação ao desenvolvimento back-end me permitiu estabelecer
          fundamentos robustos para aplicações, assegurando eficiência,
          escalabilidade e proteção.
        </p>
      </div>
    </div>
  );
};
