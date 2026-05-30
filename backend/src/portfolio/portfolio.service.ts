import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  getPortfolioData() {
    return {
      personal: {
        name: 'Jeet Pal',
        title: 'Full Stack Developer',
        subtitle: 'Vue.js · Nuxt.js · Node.js · NestJS · MERN Stack · 1+ Year Experience',
        email: 'jeetpal7804322@gmail.com',
        location: 'Howrah, West Bengal, India',
        linkedin: 'https://www.linkedin.com/in/jeet-pal/',
        github: 'https://github.com/jeetpal',
        leetcode: 'https://leetcode.com/',
        bio: `Full Stack Developer with 1+ year of professional experience at Codelogicx. I specialise in building complete web applications from frontend to backend using Vue.js, Nuxt.js, Node.js, NestJS, and MySQL. I focus on clean interfaces, scalable architecture, and real-world production delivery.`,
        objective: `Full Stack Developer with hands-on industry experience, building frontend interfaces, APIs, and database-driven features. Proficient in Vue.js, Nuxt.js, Node.js, NestJS, and MySQL. Looking to grow within a strong engineering team.`,
      },
      experience: [
        {
          id: 1,
          company: 'Codelogicx',
          role: 'Junior Software Developer',
          type: 'Full-time',
          period: '2023 – Present',
          duration: '1+ Year',
          location: 'India',
          current: true,
          description:
            'Working as a Junior Software Developer at Codelogicx, contributing to full-stack development. Responsible for building responsive frontend interfaces, developing APIs, managing database integration, and delivering end-to-end features from concept to deployment.',
          responsibilities: [
            'Developing and maintaining RESTful APIs with Node.js and Express',
            'Designing and optimising MongoDB and MySQL database schemas',
            'Building backend logic for web applications used in production',
            'Collaborating with frontend team on API contracts and integration',
            'Participating in code reviews and maintaining code quality',
          ],
          tech: ['Vue.js', 'Nuxt.js', 'Node.js', 'NestJS', 'Sequelize', 'MySQL', 'JavaScript', 'Git'],
        },
      ],
      skills: {
        languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'SQL'],
        backend: ['Node.js', 'Express.js', 'NestJS', 'REST API', 'Microservices'],
        frontend: ['React', 'HTML5', 'CSS3', 'Vue.js'],
        databases: ['MongoDB', 'MySQL', 'Mongoose'],
        tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'JWT', 'bcrypt.js', 'Socket.io'],
        soft: ['Problem Solving', 'Effective Communication', 'Teamwork', 'Quick Learning'],
      },
      projects: [
        {
          id: 1,
          title: 'Authentication System using MERN Stack',
          year: '2024',
          description:
            'A full-fledged authentication system built with MERN Stack. Backend developed independently using Node.js, Express, MongoDB, JWT, bcrypt.js, and nodemailer. Features include user registration with email verification, JWT-based login, secure password hashing, session management, and password recovery.',
          tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'bcrypt.js', 'nodemailer'],
          highlights: [
            'Email verification on registration',
            'JWT-based secure authentication',
            'Bcrypt password hashing',
            'Session management with logout',
            'Email-based password recovery',
          ],
          github: '#',
        },
        {
          id: 2,
          title: 'Full-Stack Chat Application',
          year: '2024',
          description:
            'A comprehensive real-time chat application using MERN Stack and Socket.io. Features real-time messaging between users, user authentication, and online status tracking. Built with Node.js/Express backend and React frontend.',
          tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Material UI', 'JWT'],
          highlights: [
            'Real-time bi-directional messaging via Socket.io',
            'User authentication & session management',
            'Online/offline status tracking',
            'Material UI responsive design',
            'Message history persistence',
          ],
          github: '#',
        },
        {
          id: 3,
          title: 'Full Stack File Sharing Application',
          year: '2024',
          description:
            'A file-sharing application enabling users to select and share any file type. The system generates unique shareable links per uploaded file, ensuring secure file transfers and quick access for recipients.',
          tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Secure File Handling'],
          highlights: [
            'Unique link generation per upload',
            'Multi-format file support',
            'Secure file transfer pipeline',
            'Quick-access download links',
            'Clean sharing interface',
          ],
          github: '#',
        },
      ],
      education: [
        {
          degree: 'Bachelor of Computer Application (BCA)',
          institution: 'RCC Institute of Information Technology',
          board: 'Autonomous',
          period: 'Oct 2022 – Sep 2025',
          score: 'CGPA: 8.59 (up to 4th sem)',
          location: 'Kolkata, West Bengal',
        },
        {
          degree: 'Higher Secondary (Class XII)',
          institution: 'Howrah Zilla School',
          board: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
          period: 'Aug 2020 – Jun 2022',
          score: 'Percentage: 88%',
          location: 'Howrah, West Bengal',
        },
        {
          degree: 'Secondary (Class X)',
          institution: 'Patha Bhavan Dankuni',
          board: 'West Bengal Board of Secondary Education (WBBSE)',
          period: 'Jun 2009 – Jun 2020',
          score: 'Percentage: 83%',
          location: 'Hooghly, West Bengal',
        },
      ],
      certifications: [
        {
          title: 'HackerRank SQL Intermediate',
          issuer: 'HackerRank',
          year: '2024',
          link: '#',
        },
        {
          title: 'Web Development using React',
          issuer: 'Internship Program',
          year: '2024',
          link: '#',
        },
      ],
      stats: {
        yearsExperience: '1+',
        projectsBuilt: 3,
        technologiesUsed: 15,
        cgpa: 8.59,
        certifications: 2,
      },
    };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Jeet Pal Portfolio API',
    };
  }
}
