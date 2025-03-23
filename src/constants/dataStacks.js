import { SiVisualstudiocode, SiPostman, SiSlack, SiSonarqube, SiJenkins, SiAzuredevops } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaBitbucket, FaJira } from "react-icons/fa";

import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, } from "react-icons/di";
import { SiFirebase, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux, TbBrandTypescript } from "react-icons/tb";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

import landingPageJm from '../Assets/Projects/landingPageJm.avif';
import appDog from '../Assets/Projects/app-dog.avif';

export const ToolsStack = [
    { name: "VsCode", Icon: SiVisualstudiocode },
    { name: "Postman", Icon: SiPostman },
    { name: "Slack", Icon: SiSlack },
    { name: "Github", Icon: VscGithubInverted },
    { name: "BitBucket", Icon: FaBitbucket },
    { name: "SonarQube", Icon: SiSonarqube },
    { name: "Jenkins", Icon: SiJenkins },
    { name: "AzureDevops", Icon: SiAzuredevops },
    { name: "Jira", Icon: FaJira },
];


export const techStack = [
    { name: "Html5", Icon: FaHtml5 },
    { name: "Css3", Icon: FaCss3Alt },
    { name: "Tailwindcss", Icon: SiTailwindcss },
    { name: "Javascript", Icon: DiJavascript1 },
    { name: "Typescript", Icon: TbBrandTypescript },
    { name: "React", Icon: DiReact },
    { name: "Redux", Icon: TbBrandRedux },
    { name: "NextJs", Icon: SiNextdotjs },
    { name: "Node", Icon: DiNodejs },
    { name: "MongoDB", Icon: DiMongodb },
    { name: "Git", Icon: DiGit },
    { name: "Firebase", Icon: SiFirebase },
    { name: "Postgresql", Icon: SiPostgresql },
];

export const projects = [
    {
        imgPath: appDog,
        title: "Landig Page",
        description: "Landing Page Demo de un sitio web de adopcion de mascotas, construido con React.js, Material-UI, Vite, Redux para el manejo y gestion de los usuarios, consumo de API para mostrar datos de las mascotas. Cuenta con información de los servicios prestados, un formulario de registro de mascota y otro para la adopción, filtros entre otras opciones.",
        demoLink: "https://my-app-adoptions-pets.web.app/",
        isBlog: false
    },
    {
        imgPath: landingPageJm,
        title: "Landig Page",
        description: "Landing Page para la presentación de los servicios ofrecidos como asistente virtual, construido con React.js, Tailwindcss y NextJs. Cuenta con información de los servicios prestados y un formulario de contacto.",
        demoLink: "https://jenni-web.vercel.app/",
        isBlog: false
    },
]
