import { FaReact, FaNode, FaNpm, FaFigma, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiJavascript, SiMysql, SiFramer, SiThreedotjs, SiSass, SiNextdotjs, SiWebgl } from 'react-icons/si';
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
    { icon: SiWebgl, label: 'WebGl', color: 'crimson' },
];

export const backend = [
    { icon: FaNode, label: 'node.js', color: '#339933' },
    { icon: SiExpress, label: 'express.js', color: '#000000' },
    { icon: FaDatabase, label: 'SQL', color: 'pink' },
    { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
];

export const tools = [
    { icon: FaGitAlt, label: 'Git', color: '#F05032' },
    { icon: FaGithub, label: 'GitHub', color: '#181717' },
    { icon: VscVscode, label: 'VS Code', color: '#007ACC' },
    { icon: FaFigma, label: 'Figma', color: '#F24E1E' },
    { icon: FaNpm, label: 'npm', color: '#F24E1E' },
];

export const approaches = [{
    name: 'Approaches',
    app: [
        'Responsive Design',
        'UI/UX Focused',
        'Component-Based Architecture',
        'Performance Optimization',
        'Agile',
        'Modular Folder Structure',
        'Consistent Code Organization'
    ]
}]


export const expreience = [
    {
        name: 'Experience',
        oc: 'Web Developer',
        pos: 'Freelance ',
        time: 'January 2025 - Present',
        des: 'I specialize in building modern, interactive frontends with React and Next.js, focusing on clean design and great UX. I’m passionate about creating immersive UIs using react-three-fiber (R3F) and Three.js. My main focus is on crafting responsive, high-performance interfaces with TailwindCSS and SCSS. While my experience extends to full stack development, including Node.js and MySQL, I’m constantly improving my skills in the latest frontend and 3D web technologies.'
    }
]


export const education = [
    {
        name: 'Education',
        ed: [
            {
                institution: 'Baltic Institute of Technology',
                deg: 'Web Development Course',
                duration: 'September 2024 - March 2025',
                details: [
                    'Completed an intensive 880-hour web development program.',
                    'Focused on front-end technologies: HTML, CSS, JavaScript, and React for building dynamic user interfaces.',
                    'Gained experience in back-end development using Node.js and Express.',
                    'Learned to integrate MySQL databases and develop RESTful APIs.',
                    'Understood the full-stack development lifecycle and web application deployment processes.',
                ],
            },
            {
                institution: 'Three.js Journey (Self-Study)',
                deg: '3D Web Development with Three.js',
                duration: 'March 2025 - April 2025',
                details: [
                    'Acquired skills in 3D web development using the Three.js library.',
                    'Gained practical experience with React Three Fiber (R3F) and related libraries (Drei, postprocessing).',
                ],
            },
        ]
    }
];