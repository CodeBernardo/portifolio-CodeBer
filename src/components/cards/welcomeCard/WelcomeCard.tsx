import { FaLinkedin, SiGithub } from "../../icons";

export const WelcomeCard = (): JSX.Element => {
  return (
    <>
      <section>
        <div>
          <p>DESENVOLVEDOR FULL STACK</p>
          <h1>
            Olá, meu nome é <br /> Bernardo Stein,
          </h1>
          <p>e eu crio coisas para a web</p>
          <p>
            Eu sou um desenvolvedor full stack especializado em construir
            experiências digitais excepcionais.
          </p>
        </div>
        <div>
          <button>Contato</button>
          <button>Download CV</button>
        </div>
        <div>
          <button>
            <FaLinkedin />
          </button>
          <button>
            <SiGithub />
          </button>
        </div>
      </section>
    </>
  );
};
