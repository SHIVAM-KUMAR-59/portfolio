// Animation variants
const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}

export const projectsData = [
  {
    title: 'AI Integrated Chatbot',
    description:
      'This is a conversational AI chat bot built using modern web technologies like NextJs, TypeScript, Tailwind CSS for the frontend, and Convex and Clerk for backend services. The chat bot can answer questions and have a normal conversation with users.',
    imageUrl: '/Chatbot.png',
    githubUrl: 'https://github.com/SHIVAM-KUMAR-59/Chat-Bot',
    isReversed: false,
    variants: slideInFromLeft,
    margin: 'ml-3',
  },
  {
    title: 'Blog App',
    description:
      'This is a full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides a platform for users to create, read, update, and delete blog posts while managing user authentication and profiles.',
    imageUrl: '/Blog-App.png',
    githubUrl: 'https://github.com/SHIVAM-KUMAR-59/Blog-App',
    isReversed: true,
    variants: slideInFromRight,
    margin: 'mr-3',
  },
]
