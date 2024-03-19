import { FaLinkedin, SiGithub } from "../icons";
import s from "./index.module.scss"

export const PageFooter = (): JSX.Element => {
  return (
    <footer className={s.footer_container}>
      <div className={s.ending_message}>
        <h2 className="title2">
          Pronto para trazer suas ideias ao mundo real? <br />Estou aqui para ajudar.
        </h2>
        <button className="title3">Contato</button>
      </div>
      <div className={s.contact_buttons_container}>
        <button>
          <SiGithub size={26}/>
        </button>
        <button>
          <FaLinkedin size={26}/>
        </button>
      </div>
      <p>Direitos autorais © Bernardo Stein. Todos os direitos reservados</p>
    </footer>
  );
}