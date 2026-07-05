import { FaReact } from "react-icons/fa";
import { SiDotnet, SiJsonwebtokens, SiSpotify, SiCloudinary, SiOpenjdk, SiSpringboot, SiHibernate, SiMysql, SiVuedotjs, SiDocker } from "react-icons/si";
import { BiServer } from "react-icons/bi";
import FitTrackImage from '../assets/images/FitTrack-landing_page.png';
import BeatHubImage from '../assets/images/BeatHub-landing_page.png';

const projectsData = [
    {
        id: 1,
        title: "FitTrack",
        description: "A full-stack training management application for creating workout routines, logging sessions, and tracking strength progression. Features JWT authentication with BCrypt hashing, an exercise catalogue with a user request/admin approval flow, and a custom admin panel.",
        image: FitTrackImage,
        technologies: [
            { name: "React 19", icon: <FaReact className="text-cyan-400" /> },
            { name: "ASP.NET Core 9", icon: <SiDotnet className="text-blue-400" /> },
            { name: "Entity Framework Core", icon: <BiServer className="text-gray-300" /> },
            { name: "PostgreSQL", icon: <BiServer className="text-gray-300" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
        ],
        github: "https://github.com/prospi-dev/FitTrack",
        demo: "https://fittrack-prospi.netlify.app/",
        featured: true
    },
    {
        id: 2,
        title: "BeatHub",
        description: "A community-driven music discovery platform integrated with the Spotify API (\"Letterboxd for Music\"). Includes a full social system (followers, activity feed), custom JWT authentication, and Cloudinary-powered image uploads. Uses Axios interceptors for session renewal/expiration and custom debounce hooks to optimize calls to the external API.",
        image: BeatHubImage,
        technologies: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: ".NET 8", icon: <SiDotnet className="text-blue-400" /> },
            { name: "Entity Framework Core", icon: <BiServer className="text-gray-300" /> },
            { name: "PostgreSQL", icon: <BiServer className="text-gray-300" /> },
            { name: "Spotify API", icon: <SiSpotify className="text-green-400" /> },
            { name: "Cloudinary", icon: <SiCloudinary className="text-sky-400" /> },
        ],
        github: "https://github.com/prospi-dev/BeatHub",
        demo: "https://beathub-prospi.netlify.app/",
        featured: true
    },
    {
        id: 3,
        title: "Domitila",
        description: "Corporate ERP system for HR management and social projects. Designed a 15+ table MySQL relational schema with engine-level business logic (triggers, computed fields) and a custom security architecture built with Spring Security + JWT.",
        image: null,
        technologies: [
            { name: "Java", icon: <SiOpenjdk className="text-orange-400" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
            { name: "JPA/Hibernate", icon: <SiHibernate className="text-yellow-600" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
            { name: "Vue.js 3", icon: <SiVuedotjs className="text-emerald-400" /> },
            { name: "Pinia", icon: <SiVuedotjs className="text-yellow-400" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        ],
        github: null,
        demo: null,
        featured: true,
        private: true
    }
];

export default projectsData;
