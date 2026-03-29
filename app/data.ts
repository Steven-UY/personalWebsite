type Project = {
  name: string
  description: string
  link: string
  photo: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'PharmaSee',
    description:
      'a comprehensive medication management system. Built at HoyaHacks 2025.',
    link: 'https://github.com/Steven-UY/hoyahacks25',
    photo:
      '/assets/pharmaSee.png',
    id: 'project1',
  },
  {
    name: 'Danaher Droid',
    description: 'RAG chatbot for those who want to improve their jiu-jitsu skills',
    link: 'https://github.com/Steven-UY/Danaher-Droid/',
    photo:
      '/assets/danaherDroid.png',
    id: 'project2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Hello World!',
    description: 'More about me who am I? More personal stuff I guess...',
    link: '/blog/helloWorld',
    uid: 'blog-1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Novare',
    title: 'Data Engineer Intern',
    start: 'July 2024',
    end: 'August 2024',
    id: 'work1',
  },
  
{

    company: 'Emerald Energy',
    title: 'Software Engineer Intern',
    start: 'May 2024',
    end: 'July 2024',
    id: 'work2',
  },
]

//type annotation is then used 
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Steven-UY',
  },
  {
    label: 'Goodreads',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
]

export const EMAIL = 'suy4@fordham.edu'

