import {
  MdEmail,
  MdLocationPin,
  MdPersonPinCircle,
  MdSchool,
} from "../../../icons";
import s from "./index.module.scss"

export const PersonalInfo = ():JSX.Element => {
  const iconsSize = 26;

  return (
    <article className={s.personalInfo_container}>
      <h2 className="title2">Estou em busca de uma oportunidade.</h2>
      <p className="title4 height1">
        Olá! Sou Bernardo, um apaixonado por tecnologia e inovação. Atualmente,
        estou me aprofundando no mundo do desenvolvimento, me esforçando para
        expandir meus conhecimentos e habilidades de programação. Meu objetivo é
        ajudar as empresas a alcançarem seus objetivos, transformando idéias em
        realidade com código.
      </p>
      <div>
        <ul>
          <li>
            <p className="text1">
              <MdPersonPinCircle className={s.icon} size={iconsSize} /> Bernardo Stein
            </p>
          </li>
          <li>
            <p className="text1">
              <MdSchool className={s.icon} size={iconsSize} />
              Desenvolvedor Full Stack
            </p>
          </li>
          <li>
            <p className="text1">
              <MdEmail className={s.icon} size={iconsSize} />
              stein.bernardo@proton.me
            </p>
          </li>
          <li>
            <p className="text1">
              <MdLocationPin className={s.icon} size={iconsSize} />
              Montenegro, Rio Grande do Sul, Brasil
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};
