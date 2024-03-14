import { FaLinkedin, SiGithub } from "../icons";

export const PageFooter = (): JSX.Element => {
  return (
    <footer>
      <div>
        <h2>
          Pronto para trazer suas ideias ao mundo real? Estou aqui para ajudar.
        </h2>
        <button>Contato</button>
      </div>
      <div>
        <button>
          <SiGithub />
        </button>
        <button>
          <FaLinkedin />
        </button>
      </div>
      <p>Direitos autorais © Bernardo Stein. Todos os direitos reservados</p>
    </footer>
  );
}