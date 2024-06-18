import { SiPostgresql, SiRender, SiSwagger } from "react-icons/si";
import socialMediaImg from "../../assets/images/Social-media-prev.png";
import backEndImg from "../../assets/images/back-end-development-1.jpg";
import catalogoGeekImg from "../../assets/images/catalogo-geek-prev.png";
import controlFinanceImg from "../../assets/images/control-finance-prev.png";
import fashionStoreImg from "../../assets/images/fashion-store-prev.png";
import gitSearchImg from "../../assets/images/git-search-prev.png";
import hamburgueriaImg from "../../assets/images/hamburgueria-prev.png";
import kenziHubImg from "../../assets/images/kenzie-hub-prev.png";
import nuKenzieImg from "../../assets/images/nu-kenzie-prev.png";
import petInfoImg from "../../assets/images/pet-info-prev.png";
import portifolioImg from "../../assets/images/portifolio-prev.png";
import soundFlyImg from "../../assets/images/sound-fly-prev.png";
import todoListImg from "../../assets/images/task-list-prev.png";
import {
  PiSyringeFill,
  SiAxios,
  SiCss3,
  SiDjango,
  SiDotenv,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLetsencrypt,
  SiPrisma,
  SiPytest,
  SiPython,
  SiReact,
  SiSass,
  SiSqlite,
  SiTypescript,
  SiZod,
} from "../../components/icons";
import { Project } from "../../interfaces";
import "../../styles/abstracts/_icons.scss";

const iconsSize = 30;

export const frontEndProjects: Project[] = [
  {
    name: "Social Media",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/Rede_social-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Rede_social-CodeBernardo",
    preview: socialMediaImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Um pequeno projeto simulando algumas funcionalidades de uma rede social",
      enUS: "A small project simulating some features of a social network",
    },
  },
  {
    name: "Fashion Store",
    type: "FRONT END",
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
    description: {
      ptBR: "Um projeto realizado em grupo de um e-comerce de roupas e utilizando uma API externa, neste projeto praticamos alguns conceitos de trabalho em equipe e git flow",
      enUS: "A group project of a clothing e-commerce using an external API. In this project, we practiced some teamwork and git flow concepts",
    },
  },
  {
    name: "Kenzie hub",
    type: "FRONT END",
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
    description: {
      ptBR: "Um projeto de estudos sobre validação de formulários e CRUD completo de criação de usuários, utilizando uma API externa",
      enUS: "A study project on form validation and complete CRUD for user creation using an external API",
    },
  },
  {
    name: "Hamburgueria",
    type: "FRONT END",
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
    description: {
      ptBR: "Uma aplicaçao de um e-comerce de alimentos com a intenção de ampliar os conhecimentos em react utilizando uma API externa",
      enUS: "An e-commerce food application aiming to expand knowledge in React using an external API",
    },
  },
  {
    name: "Nu Kenzie",
    type: "FRONT END",
    deploy: "https://nu-kenzie-code-bernardo.vercel.app/",
    github: "https://github.com/CodeBernardo/Nu-kenzie-CodeBernardo",
    preview: nuKenzieImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiSass size={iconsSize} />,
      <SiReact size={iconsSize} />,
    ],
    description: {
      ptBR: "Uma aplicação de controle financeiro com o intuito de ampliar os conhecimentos sobre estados e componentização de elementos react",
      enUS: "A financial control application aiming to expand knowledge on state management and componentization in React",
    },
  },
  {
    name: "Portifólio",
    type: "FRONT END",
    deploy: "https://portifolio-m3-code-bernardo.vercel.app/",
    github: "https://github.com/CodeBernardo/Portifolio-m3-CodeBernardo",
    preview: portifolioImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiSass size={iconsSize} />,
      <SiReact size={iconsSize} />,
    ],
    description: {
      ptBR: "Meu primeiro contato com React, uma aplicação que simula um exemplo de portifólio",
      enUS: "My first contact with React, an application simulating a portfolio example",
    },
  },
  {
    name: "Sound fly",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/Sound_fly-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Sound_fly-CodeBernardo",
    preview: soundFlyImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Um projeto que simula um e-comerce de música com o objetivo de reforçar os conhecimentos em manipulação de DOM",
      enUS: "A project simulating a music e-commerce aiming to reinforce knowledge in DOM manipulation",
    },
  },
  {
    name: "Pet Info",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/Pet-info-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Control-Finance-CodeBernardo",
    preview: petInfoImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Um projeto em formato de blog sobre animais, cujo o intuito era praticar a manipulação de DOM e o uso do fetch API",
      enUS: "A blog-format project about animals, aiming to practice DOM manipulation and the use of fetch API",
    },
  },
  {
    name: "Control Finance",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/Control-Finance-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Pet-info-CodeBernardo",
    preview: controlFinanceImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Uma aplicação de controle financeiro cujo o objeto era ampliar conhecimentos sobre manipulação de DOM e a persistência de dados no navegador",
      enUS: "A financial control application aiming to expand knowledge on DOM manipulation and data persistence in the browser",
    },
  },
  {
    name: "Git Search",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/git-Search-Base-codebernardo/",
    github: "https://github.com/CodeBernardo/git-Search-Base-codebernardo",
    preview: gitSearchImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Uma aplicação que busca usuários do Github e retorna algumas informacões tal como nome de usuário, avatar e repositórios. O projeto tem como objetivo ampliar conhecimentos sobre a utilização de API's",
      enUS: "An application that searches for GitHub users and returns some information such as username, avatar, and repositories. The project aims to expand knowledge on the use of APIs",
    },
  },
  {
    name: "Todo List",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/lista-de-tarefas-CodeBernardo/",
    github: "https://github.com/CodeBernardo/lista-de-tarefas-CodeBernardo",
    preview: todoListImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Um projeto de todo list com a finalidade de aperfeiçoar conhecimentos sobre manipulação de DOM",
      enUS: "A to-do list project aiming to improve knowledge on DOM manipulation",
    },
  },
  {
    name: "Catalogo Geek",
    type: "FRONT END",
    deploy: "https://codebernardo.github.io/Catalogo-Geek-CodeBernardo/",
    github: "https://github.com/CodeBernardo/Catalogo-Geek-CodeBernardo",
    preview: catalogoGeekImg,
    techs: [
      <SiJavascript size={iconsSize} />,
      <SiHtml5 size={iconsSize} />,
      <SiCss3 size={iconsSize} />,
    ],
    description: {
      ptBR: "Um projeto de um catálogo cujo com a finalidade de aperfeiçoar conhecimentos sobre manipulação de DOM e responsividade",
      enUS: "A catalog project aiming to improve knowledge on DOM manipulation and responsiveness",
    },
  },
];

export const backEndProjects: Project[] = [
  {
    name: "Task Control API",
    type: "BACK END",
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
    description: {
      ptBR: "Uma REST API  de controle de uma aplicação de tarefas, com o objetivo de implementar o CRUD completo de criação de tarefas e de usuários, com validação de dados e criptografia de dados sensíveis.",
      enUS: "A REST API for task management, aiming to implement a complete CRUD for task and user creation, with data validation and encryption of sensitive data.",
    },
  },
  {
    name: "Cars API",
    type: "BACK END",
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
    description: {
      ptBR: "Um projeto criado do zero de uma REST API que controla um estoque de carros, com CRUD completo de cadastro de carros e usuários, com validação de dados e criptografia de dados sensíveis. Criação de testes unitários e de integração com Jest e documentação completa das features da API.",
      enUS: "A project created from scratch of a REST API that manages a car inventory, with complete CRUD for car and user registration, with data validation and encryption of sensitive data. Creation of unit and integration tests with Jest and full documentation of API features.",
    },
  },
  {
    name: "Book API",
    type: "BACK END",
    github: "https://github.com/CodeBernardo/Book-API-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiTypescript size={iconsSize} />,
      <SiZod size={iconsSize} />,
      <SiExpress size={iconsSize} />,
    ],
    description: {
      ptBR: "Uma REST API de controle de uma livraria, com o objetivo de implementar o CRUD completo de cadastro de livros.",
      enUS: "A REST API for managing a bookstore, aiming to implement a complete CRUD for book registration.",
    },
  },
  {
    name: "Book db - CRUD",
    type: "BACK END",
    github: "https://github.com/CodeBernardo/books-db-CodeBernardo",
    preview: backEndImg,
    techs: [<SiPostgresql size={iconsSize} />, <SiExpress size={iconsSize} />],
    description: {
      ptBR: "CRUD realizado através de queries diretamente no PostgreSQL.",
      enUS: "CRUD performed through queries directly on PostgreSQL.",
    },
  },
  {
    name: "CRUD",
    type: "BACK END",
    github: "https://github.com/CodeBernardo/CRUD-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiPostgresql size={iconsSize} />,
      <SiTypescript size={iconsSize} />,
      <SiExpress size={iconsSize} />,
    ],
    description: {
      ptBR: "Meu primeiro contato com o back-end, uma implementação de um CRUD completo utilizando programação orientada a objetos.",
      enUS: "My first contact with back-end, an implementation of a complete CRUD using object-oriented programming.",
    },
  },
  {
    name: "Kopa do Mundo",
    type: "BACK END",
    github: "https://github.com/CodeBernardo/kopa-do-mundo-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiPython size={iconsSize} />,
      <SiDjango size={iconsSize} />,
      <SiPytest size={iconsSize} />,
      <SiSqlite size={iconsSize} />,
    ],
    description: {
      ptBR: "Um projeto de estudo que explora o conceitos do back end com foco na utilizaçao de Python, Django e Django Rest Framework.",
      enUS: "A study project exploring back-end concepts with a focus on using Python, Django, and Django Rest Framework.",
    },
  },
  {
    name: "Kenzie Buster",
    type: "BACK END",
    github: "https://github.com/CodeBernardo/kenzie-buster-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiPython size={iconsSize} />,
      <SiDjango size={iconsSize} />,
      <SiPytest size={iconsSize} />,
      <SiSqlite size={iconsSize} />,
      <SiJsonwebtokens size={iconsSize} />,
    ],
    description: {
      ptBR: "Uma solução projetada para organizar e gerenciar dados relacionados a filmes e pedidos de forma eficiente e acessível.",
      enUS: "A solution designed to organize and manage data related to movies and orders efficiently and accessibly.",
    },
  },
  {
    name: "Kanvas",
    type: "BACK END",
    github: "https://github.com/CodeBernardo/projeto-final-kanvas-CodeBernardo",
    preview: backEndImg,
    techs: [
      <SiPython size={iconsSize} />,
      <SiDjango size={iconsSize} />,
      <SiPytest size={iconsSize} />,
      <SiPostgresql size={iconsSize} />,
      <SiDotenv size={iconsSize} />,
      <SiSwagger size={iconsSize} />,
      <SiRender size={iconsSize} />,
      <SiJsonwebtokens size={iconsSize} />,
    ],
    description: {
      ptBR: "Desenvolvido como projeto final para fins educacionais, Kanvas é uma plataforma de gerenciamento de aprendizagem, projetada para facilitar o acesso e a gestão de conteúdos, cursos e relações entre estudantes e professores.",
      enUS: "Developed as a final project for educational purposes, Kanvas is a learning management platform designed to facilitate access and management of content, courses, and relationships between students and teachers.",
    },
  },
];

export const allProjects = [...frontEndProjects, ...backEndProjects]