import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiFramer, SiThreeDotJs, SiSass } from 'react-icons/si';

// This is now an array of objects, each representing a skill
const reactIcons = [
    {
        icon: <FaReact />,
        color: '#61DAFB', // React color
        skill: 'React'
    },
    {
        icon: <FaNode />,
        color: '#68A063', // Node.js color
        skill: 'Node.js'
    },
    {
        icon: <FaHtml5 />,
        color: '#E34F26', // HTML5 color
        skill: 'HTML5'
    },
    {
        icon: <FaCss3Alt />,
        color: '#1572B6', // CSS3 color
        skill: 'CSS3'
    },
    {
        icon: <SiSass />,
        color: '#CC6699', // SCSS color
        skill: 'SCSS'
    },
    {
        icon: <FaGitAlt />,
        color: '#F1502F', // Git color
        skill: 'Git'
    },
    {
        icon: <FaBootstrap />,
        color: '#563D7C', // Bootstrap color
        skill: 'Bootstrap'
    },
    {
        icon: <SiTailwindcss />,
        color: '#38BDF8', // Tailwind color
        skill: 'Tailwind CSS'
    },
    {
        icon: <SiMysql />,
        color: '#4479A1', // MySQL color
        skill: 'MySQL'
    },
    {
        icon: <SiFramer />,
        color: '#F24E1E', // Framer Motion color
        skill: 'Framer Motion'
    },
    {
        icon: <SiThreeDotJs />,
        color: '#000000', // Three.js color
        skill: 'Three.js'
    }
];

export default reactIcons;
