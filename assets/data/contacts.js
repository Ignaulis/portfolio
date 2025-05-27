import { FaGithub, FaLinkedin, FaSquareUpwork } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";



export const contacts = [
    { text: "GitHub", href: "https://github.com/Ignaulis", icon: FaGithub },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ignas-naulis/", icon: FaLinkedin },
    { text: "UpWork", href: "https://www.upwork.com/freelancers/~01c9ac47fb1c3e96d3", icon: FaSquareUpwork },
    { text: "Email", href: "mailto:ignas.naulis@gmail.com", icon: BiLogoGmail }
]

export const contactSend = [
    { text: 'send me', icon: RiMailSendLine, onclick: (setShowForm) => setShowForm(prev => !prev) }
]