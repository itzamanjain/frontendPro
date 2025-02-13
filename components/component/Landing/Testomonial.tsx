import { Testimonials } from "../ui/testimonials"

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'CodeFront helped me ace my frontend interviews at FAANG! The machine coding problems are exactly what I encountered in real interviews.',
    name: 'Alice Johnson',
    username: '@alicejohnson',
    position: 'Frontend Engineer at Google',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The timed challenges and real-time feedback helped me improve my problem-solving speed. Cracked my dream frontend role!',
    name: 'David Smith',
    username: '@davidsmith',
    position: 'Senior UI Developer at Meta',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/kaDy9hV.jpeg',
    text: 'Best platform for practicing machine coding rounds. The variety of UI challenges really helped me understand different patterns.',
    name: 'Emma Brown',
    username: '@emmabrown',
    position: 'Frontend Lead at Stripe',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/cRwFxtE.png',
    text: 'The interactive editor and live preview feature is a game-changer. It feels just like a real interview environment!',
    name: 'James Wilson',
    username: '@jameswilson',
    position: 'UI Engineer at Netflix',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/TQIqsob.png',
    text: 'From component design to state management, CodeFront covers everything you need for frontend interviews. Highly recommended!',
    name: 'Sophia Lee',
    username: '@sophialee',
    position: 'Frontend Dev at Amazon',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/3ROmJ0S.png',
    text: 'The community solutions and discussions helped me learn different approaches to the same problem. Invaluable resource!',
    name: 'Michael Davis',
    username: '@michaeldavis',
    position: 'React Developer at Airbnb',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/6fKCuVC.png',
    text: 'Practice problems are perfectly curated for frontend roles. Helped me understand what companies really look for.',
    name: 'Emily Chen',
    username: '@emilychen',
    position: 'UI Engineer at Microsoft',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/Jjqe7St.png',
    text: 'The structured learning path and progress tracking kept me motivated throughout my interview prep journey.',
    name: 'Robert Lee',
    username: '@robertlee',
    position: 'Frontend Architect at Uber',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/bG88vHI.png',
    text: 'From basic components to complex UI patterns, CodeFront has everything you need to master frontend interviews.',
    name: 'Sarah Taylor',
    username: '@sarahtaylor',
    position: 'UI Developer at LinkedIn',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/tjmS77j.png',
    text: 'The detailed explanations and best practices shared in solutions helped me understand the why behind each implementation.',
    name: 'Kevin White',
    username: '@kevinwhite',
    position: 'Frontend Lead at Twitter',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/yTsomza.png',
    text: 'Perfect platform for frontend interview prep! The challenges mirror real interview questions from top tech companies.',
    name: 'Rachel Patel',
    username: '@rachelpatel',
    position: 'UI Engineer at Apple',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/pnsLqpq.png',
    text: 'The focus on machine coding rounds really sets CodeFront apart. Essential practice for any frontend developer.',
    name: 'Brian Kim',
    username: '@briankim',
    position: 'Frontend Dev at Spotify',
    social: 'https://i.imgur.com/VRtqhGC.png'
  }
];

export function TestimonialsDemo() {
  return (
    <div className="container py-10 flex max-w-7xl mx-auto">
      <Testimonials testimonials={testimonials} />
    </div>
  )
}