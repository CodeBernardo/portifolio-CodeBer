import { Project } from "../../interfaces";
import socialMediaImg from "../../assets/images/Social-media-prev.png";
import fashionStoreImg from "../../assets/images/fashion-store-prev.png";
import kenziHubImg from "../../assets/images/kenzie-hub-prev.png";
import hamburgueriaImg from "../../assets/images/hamburgueria-prev.png";
import nuKenzieImg from "../../assets/images/nu-kenzie-prev.png";
import portifolioImg from "../../assets/images/portifolio-prev.png";
import soundFlyImg from "../../assets/images/sound-fly-prev.png";
import petInfoImg from "../../assets/images/pet-info-prev.png";
import controlFinanceImg from "../../assets/images/control-finance-prev.png";
import gitSearchImg from "../../assets/images/git-search-prev.png";
import todoListImg from "../../assets/images/task-list-prev.png";
import catalogoGeekImg from "../../assets/images/catalogo-geek-prev.png";
import backEndImg from "../../assets/images/back-end-development-1.jpg";
import {
  PiSyringeFill,
  SiAxios,
  SiCss3,
  SiDotenv,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLetsencrypt,
  SiPrisma,
  SiReact,
  SiSass,
  SiTypescript,
  SiZod,
} from "../../components/icons";
import { SiPostgresql } from "react-icons/si";
const iconsSize = 30
export const frontEndProjects: Project[] = [
  {
    name: "Social Media",
    deploy: "https://codebernardo.github.io/Rede_social-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Rede_social-CodeBernardo",
    preview: socialMediaImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Um pequeno projeto simulando algumas funcionalidades de uma rede social",
  },
  {
    name: "Fashion Store",
    deploy: "https://fashion-store-lime.vercel.app/",
    github: "https://github.com/joaolucasgusmao/fashion-store",
    preview: fashionStoreImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiSass size={iconsSize} />,
      <SiZod size={iconsSize} />,
      <SiAxios size={iconsSize} />,
      <SiReact size={iconsSize} />,
      <SiFramer size={iconsSize} />,
    ],
    description:
      "Um projeto realizado em grupo de um e-comerce de roupas e utilizando uma API externa, neste projeto praticamos alguns conceitos de trabalho em equipe e git flow",
  },
  {
    name: "Kenzie hub",
    deploy: "https://kenzie-hub-code-bernardo.vercel.app/",
    github: "https://github.com/CodeBernardo/kenzie-hub-CodeBernardo",
    preview: kenziHubImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiSass size={iconsSize} />,
      <SiZod size={iconsSize} />,
      <SiAxios size={iconsSize} />,
      <SiReact size={iconsSize} />,
    ],
    description:
      "Um projeto de estudos sobre validação de formulários e CRUD completo de criação de usuários, utilizando uma API externa",
  },
  {
    name: "Hamburgueria",
    deploy: "https://hamburgueria-kenzie-code-bernardo.vercel.app/",
    github: "https://github.com/CodeBernardo/hamburgueria-Kenzie-CodeBernardo",
    preview: hamburgueriaImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiSass size={iconsSize} />,
      <SiAxios size={iconsSize} />,
      <SiReact size={iconsSize} />,
    ],
    description:
      "Uma aplicaçao de um e-comerce de alimentos com a intenção de ampliar os conhecimentos em react utilizando uma API externa",
  },
  {
    name: "Nu Kenzie",
    deploy: "https://nu-kenzie-code-bernardo.vercel.app/",
    github: "https://github.com/CodeBernardo/Nu-kenzie-CodeBernardo",
    preview: nuKenzieImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiSass size={iconsSize} />, <SiReact size={iconsSize} />],
    description:
      "Uma aplicação de controle financeiro com o intuito de ampliar os conhecimentos sbore estados e componentização de elementos react",
  },
  {
    name: "Portifólio",
    deploy: "https://portifolio-m3-code-bernardo.vercel.app/",
    github: "https://github.com/CodeBernardo/Portifolio-m3-CodeBernardo",
    preview: portifolioImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiSass size={iconsSize} />, <SiReact size={iconsSize} />],
    description:
      "Meu primeiro contato com React, uma aplicação que simula um exemplo de portifólio",
  },
  {
    name: "Sound fly",
    deploy: "https://codebernardo.github.io/Sound_fly-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Sound_fly-CodeBernardo",
    preview: soundFlyImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Um projecto que simula um e-comerce de música com o objetivo de reforçar os conhecimentos em manipulação de DOM",
  },
  {
    name: "Pet Info",
    deploy: "https://codebernardo.github.io/Pet-info-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Control-Finance-CodeBernardo",
    preview: petInfoImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Um projeto em formato de blog sobre animais, cujo o intuito era praticar a manipulação de DOM e o uso do fetch API",
  },
  {
    name: "Control Finance",
    deploy: "https://codebernardo.github.io/Control-Finance-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Pet-info-CodeBernardo",
    preview: controlFinanceImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Uma aplicaçao de controle financeiro cujo o objeto era ampliar conhecimentos sobre manipulação de DOM e a persistência de dados no navegador",
  },
  {
    name: "Git Search",
    deploy: "https://codebernardo.github.io/git-Search-Base-codebernardo/",
    github: "https://github.com/CodeBernardo/git-Search-Base-codebernardo",
    preview: gitSearchImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Uma aplicação que busca usuários do Github e retorna algumas informacões tal como nome de usuário, avatar e repositórios. O projeto tem como objetivo ampliar conhecimentos sobre a utilização de API's",
  },
  {
    name: "Todo List",
    deploy: "https://codebernardo.github.io/lista-de-tarefas-CodeBernardo/",
    github: "https://github.com/CodeBernardo/lista-de-tarefas-CodeBernardo",
    preview: todoListImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Um projeto de todo list cujo com a finalidade de aperfeiçoar conhecimentos sobre manipulação de DOM",
  },
  {
    name: "Catalogo Geek",
    deploy: "https://codebernardo.github.io/Catalogo-Geek-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Catalogo-Geek-CodeBernardo",
    preview: catalogoGeekImg,
    techs: [<SiJavascript size={iconsSize} />, <SiHtml5 size={iconsSize} />, <SiCss3 size={iconsSize} />],
    description:
      "Um projeto de um catálogo cujo com a finalidade de aperfeiçoar conhecimentos sobre manipulação de DOM e responsividade",
  },
];

export const backEndProjects: Project[] = [
  {
    name: "Task Control API",
    github: "https://github.com/CodeBernardo/task_control_api_Code_Bernardo",
    preview: backEndImg,
    techs: [
      <SiTypescript size={iconsSize} />,
      <SiZod size={iconsSize} />,
      <SiExpress size={iconsSize} />,
      <SiPrisma size={iconsSize} />,
      <SiJsonwebtokens size={iconsSize} />,
      <PiSyringeFill size={iconsSize} />,
      <SiLetsencrypt size={iconsSize} />,
      <SiDotenv size={iconsSize} />,
    ],
    description:
      "Uma REST API  de controle de uma aplicação de tarefas, com o objetivo de implementar o CRUD completo de criação de tarefas e de usuários, com validação de dados e criptografia de dados sensíveis.",
  },
  {
    name: "Cars API",
    github: "https://github.com/CodeBernardo/Cars-api-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiTypescript size={iconsSize} />,
      <SiZod size={iconsSize} />,
      <SiExpress size={iconsSize} />,
      <SiPrisma size={iconsSize} />,
      <SiJsonwebtokens size={iconsSize} />,
      <PiSyringeFill size={iconsSize} />,
      <SiLetsencrypt size={iconsSize} />,
      <SiDotenv size={iconsSize} />,
      <SiJest size={iconsSize} />,
    ],
    description:
      "Um projeto criado do zero de uma REST API que controla um estoque de carros, com CRUD completo de cadastro de carros e usuários, com validação de dados e criptografia de dados sensíveis. Criação de testes unitários e de integração com Jest e documentação completa das features da API.",
  },
  {
    name: "Book API",
    github: "https://github.com/CodeBernardo/Book-API-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiTypescript size={iconsSize} />,
      <SiZod size={iconsSize} />,
      <SiExpress size={iconsSize} />,
    ],
    description:
      "Uma API RESTful de controle de uma livraria, com o objetivo de implementar o CRUD completo de cadastro de livros.",
  },
  {
    name: "Book db",
    github: "https://github.com/CodeBernardo/books-db-CodeBernardo",
    preview: backEndImg,
    techs: [<SiPostgresql size={iconsSize} />, <SiExpress size={iconsSize} />],
    description: "CRUD realizado através de queries diretamente no PostgreSQL.",
  },
  {
    name: "SQL CRUD",
    github: "https://github.com/CodeBernardo/CRUD-CodeBernardo",
    preview: backEndImg,
    techs: [<SiPostgresql size={iconsSize} />],
    description:
      "Meu primeiro contato com o back-end, uma implementação de um CRUD completo utilizando programação orientada a objetos.",
  },
];
