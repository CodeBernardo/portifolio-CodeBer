import {
  BiLogoPostgresql,
  BiLogoSpringBoot,
  FaAngular,
  FaJava,
  FaNodeJs,
  SiBun,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNpm,
  SiPrisma,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "../../components/icons";
import { Skill } from "../../interfaces";

const iconSize = 40;

export const hardSkillsList: Skill[] = [
  {
    name: "Javascript",
    icon: <SiJavascript size={iconSize} />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={iconSize} />,
  },
  {
    name: "Html5",
    icon: <SiHtml5 size={iconSize} />,
  },
  {
    name: "CSS",
    icon: <SiCss3 size={iconSize} />,
  },
  {
    name: "Sass",
    icon: <SiSass size={iconSize} />,
  },
  {
    name: "Framer",
    icon: <SiFramer size={iconSize} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={iconSize} />,
  },
  {
    name: "React",
    icon: <SiReact size={iconSize} />,
  },
  {
    name: "Node",
    icon: <FaNodeJs size={iconSize} />,
  },
  {
    name: "Express",
    icon: <SiExpress size={iconSize} />,
  },
  {
    name: "Nest",
    icon: <SiNestjs size={iconSize} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={iconSize} />,
  },
  {
    name: "Git",
    icon: <SiGit size={iconSize} />,
  },
  {
    name: "Github",
    icon: <SiGithub size={iconSize} />,
  },
  {
    name: "Npm",
    icon: <SiNpm size={iconSize} />,
  },
  {
    name: "Bun",
    icon: <SiBun size={iconSize} />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={iconSize} />,
  },
  {
    name: "Wordpress",
    icon: <SiWordpress size={iconSize} />,
  },
  {
    name: "Java",
    icon: <FaJava size={iconSize} />,
  },
  {
    name: "Python",
    icon: <SiPython size={iconSize} />,
  },
  {
    name: "Spring boot",
    icon: <BiLogoSpringBoot size={iconSize} />,
  },
  {
    name: "Jest",
    icon: <SiJest size={iconSize} />,
  },
  {
    name: "Docker",
    icon: <SiDocker size={iconSize} />,
  },
  {
    name: "Angular",
    icon: <FaAngular size={iconSize} />,
  },
];
