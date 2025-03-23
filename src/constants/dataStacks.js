import { SiVisualstudiocode, SiPostman, SiSlack, SiSonarqube, SiJenkins, SiAzuredevops } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaBitbucket, FaJira } from "react-icons/fa";

import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, } from "react-icons/di";
import { SiFirebase, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux, TbBrandTypescript } from "react-icons/tb";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


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
