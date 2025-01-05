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
    title: 'Sooth Mind',
    description:
      'The Mental Well-being Platform is a web application designed to support users in tracking and enhancing their mental health. It enables users to write daily journal entries, which are analyzed using advanced AI models from Hugging Face. The platform evaluates the mood reflected in the entries and provides tailored feedback.',
    imageUrl: '/LandingPage.png',
    githubUrl: 'https://github.com/SHIVAM-KUMAR-59/sooth-mind',
    isReversed: true,
    variants: slideInFromRight,
    margin: 'mr-3',
  },
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
]
