import { FaGitAlt, FaGithub, FaVsCode } from 'react-icons/fa';
import { SiFigma, SiPostman, SiNpm, SiDocker, SiVercel } from 'react-icons/si';

// This object holds all tools, their colors, and associated names
const toolsIcons = {
    vscode: {
        icon: <FaVsCode />,
        color: '#007ACC', // VS Code color
        tool: 'Visual Studio Code'
    },
    figma: {
        icon: <SiFigma />,
        color: '#F24E1E', // Figma color
        tool: 'Figma'
    },
    github: {
        icon: <FaGithub />,
        color: '#181717', // GitHub color
        tool: 'GitHub'
    },
    git: {
        icon: <FaGitAlt />,
        color: '#F1502F', // Git color
        tool: 'Git'
    },
    npm: {
        icon: <SiNpm />,
        color: '#CB3837', // NPM color
        tool: 'NPM'
    },

};

export default toolsIcons;
