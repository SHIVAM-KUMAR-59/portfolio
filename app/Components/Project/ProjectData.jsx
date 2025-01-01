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
    title: 'Chat App',
    description:
      'This is a full-stack chat application that supports real-time messaging, user authentication, and both one-on-one and group chats. The app is built using Node.js, Express, MongoDB for the backend, and utilizes WebSocket for real-time communication.',
    imageUrl: '/Chatbot.png',
    githubUrl: 'https://github.com/SHIVAM-KUMAR-59/Chat-App',
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
