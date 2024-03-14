import {
  MdEmail,
  MdLocationPin,
  MdPersonPinCircle,
  MdSchool,
} from "../../../icons";

export const PersonalInfo = ():JSX.Element => {
  const iconsSize = 16;

  return (
    <article>
      <h2>Estou em busca de uma oportunidade.</h2>
      <p>
        Olá! Sou Bernardo, um apaixonado por tecnologia e inovação. Atualmente,
        estou me aprofundando no mundo do desenvolvimento, me esforçando para
        expandir meus conhecimentos e habilidades de programação. Meu objetivo é
        ajudar as empresas a alcançarem seus objetivos, transformando idéias em
        realidade com código.
      </p>
      <div>
        <ul>
          <li>
            <p>
              <MdPersonPinCircle size={iconsSize} /> Bernardo Stein
            </p>
          </li>
          <li>
            <p>
              <MdSchool size={iconsSize} />
              Desenvolvedor Full Stack
            </p>
          </li>
          <li>
            <p>
              <MdEmail size={iconsSize} />
              stein.bernardo@proton.me
            </p>
          </li>
          <li>
            <p>
              <MdLocationPin size={iconsSize} />
              Montenegro, Rio Grande do Sul, Brasil
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};
