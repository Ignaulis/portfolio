import { FaReact, FaNode, FaNpm, FaFigma, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiJavascript, SiMysql, SiFramer, SiThreedotjs, SiSass, SiNextdotjs, SiSqlite } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";




// Array of objects, each representing a skill with its icon component, label, and true logo color
export const frontend = [
    { icon: FaHtml5, label: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, label: 'CSS3', color: '#1572B6' },
    { icon: SiSass, label: 'SCSS', color: '#CC6699' },
    { icon: FaBootstrap, label: 'Bootstrap', color: '#363D7C' },
    { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#38BDF8' },
    { icon: TbBrandFramerMotion, label: 'Framer Motion', color: '#0055FF' },
    { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, label: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
    { icon: SiThreedotjs, label: 'Three.js', color: '#000000' },
];

export const backend = [
    { icon: FaNode, label: 'node.js', color: '#339933' },
    { icon: SiExpress, label: 'express.js', color: '#000000' },
    { icon: FaDatabase, label: 'SQL', color: '#003B57' },
    { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
];

export const tools = [
    { icon: FaGitAlt, label: 'Git', color: '#F05032' },
    { icon: FaGithub, label: 'GitHub', color: '#181717' },
    { icon: VscVscode, label: 'VS Code', color: '#007ACC' },
    { icon: FaFigma, label: 'Figma', color: '#F24E1E' },
    { icon: FaNpm, label: 'npm', color: '#F24E1E' },
];
