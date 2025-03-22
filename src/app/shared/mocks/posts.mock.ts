// src/app/shared/mocks/posts.mock.ts

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export const POSTS: BlogPost[] = [
  {
    id: 1,
    image: '/assets/photos/pexels-01.jpg',
    title: 'A Continually Unfolding History — Hillview by Made by Hand',
    author: 'Alec Whitten',
    date: '17 Jan 2024',
    excerpt: 'A single building occupies the hillside at Hillview...',
    tags: ['Design', 'Architecture'],
  },
  {
    id: 2,
    image: '/assets/photos/pexels-02.jpg',
    title: 'Cognitive Dissonance Theory: Crash Course for UX Designers',
    author: 'Demi Wilkinson',
    date: '16 Jan 2024',
    excerpt: 'We all like to think of ourselves in certain ways...',
    tags: ['Product', 'Research', 'Frameworks'],
  },
  {
    id: 3,
    image: '/assets/photos/pexels-03.jpg',
    title: 'How Remote Work Drastically Improved My Design Skills',
    author: 'Candice Wu',
    date: '15 Jan 2024',
    excerpt: 'Remote working might not only be feasible but beneficial...',
    tags: ['Design', 'Research'],
  },
  {
    id: 4,
    image: '/assets/photos/pexels-04.jpg',
    title: 'Exclusive Interview with Product Visionary Mia Kim',
    author: 'Phoenix Baker',
    date: '14 Jan 2024',
    excerpt:
      'Mia Kim shares insights on bridging the gap between business and design...',
    tags: ['Interview', 'Leadership'],
  },
  {
    id: 5,
    image: '/assets/photos/pexels-05.jpg',
    title: 'The Art of Collaborative Design in Remote Teams',
    author: 'Natali Craig',
    date: '13 Jan 2024',
    excerpt: 'Strategies for building synergy among distributed designers...',
    tags: ['Remote', 'Collaboration'],
  },
  {
    id: 6,
    image: '/assets/photos/pexels-06.jpg',
    title: 'Design System Essentials: Why Consistency is Key',
    author: 'Thomas Avery',
    date: '12 Jan 2024',
    excerpt: 'Learn how design systems can streamline development...',
    tags: ['Design', 'Systems'],
  },
  {
    id: 7,
    image: '/assets/photos/pexels-07.jpg',
    title: 'How AI Tools are Shaping the Future of UX Research',
    author: 'Lana Steiner',
    date: '11 Jan 2024',
    excerpt: 'A look at how emerging AI can expedite user testing...',
    tags: ['AI', 'UX Research'],
  },
  {
    id: 8,
    image: '/assets/photos/pexels-08.jpg',
    title: 'Minimalist UI Trends: When Less is More',
    author: 'Orlando Diggs',
    date: '10 Jan 2024',
    excerpt: 'Modern minimalism stands out in a cluttered digital... ',
    tags: ['Design', 'Trends'],
  },
  {
    id: 9,
    image: '/assets/photos/pexels-09.jpg',
    title: 'Scaling a Startup: From MVP to Millions of Users',
    author: 'Felicia Ortiz',
    date: '09 Jan 2024',
    excerpt:
      'Tips to handle growth, avoid pitfalls, and maintain product quality...',
    tags: ['Startup', 'Scaling', 'Business'],
  },
  {
    id: 10,
    image: '/assets/photos/pexels-10.jpg',
    title: 'Typography Secrets: Elevating Readability and Brand Identity',
    author: 'Jayden Carter',
    date: '08 Jan 2024',
    excerpt:
      'Fonts do more than convey text; they set the tone of your entire product...',
    tags: ['Design', 'Typography'],
  },
  {
    id: 11,
    image: 'https://placehold.co/300x200?text=FEATURE-11',
    title: 'Winning Clients With a Strong UX Case Study',
    author: 'Gloria Lin',
    date: '07 Jan 2024',
    excerpt: 'Showcasing thoughtful design decisions can help you stand out...',
    tags: ['UX', 'Case Study', 'Freelancing'],
  },
  {
    id: 12,
    image: 'https://placehold.co/300x200?text=FEATURE-12',
    title: 'Why Dark Mode Design is Here to Stay',
    author: 'Antonio Evans',
    date: '06 Jan 2024',
    excerpt:
      'Accessibility, battery savings, and style converge in dark UI themes...',
    tags: ['UI', 'Accessibility'],
  },
  {
    id: 13,
    image: 'https://placehold.co/300x200?text=FEATURE-13',
    title: 'Leadership Lessons From a Former Pixar Designer',
    author: 'Rebecca Hall',
    date: '05 Jan 2024',
    excerpt: 'Collaboration, iteration, and storytelling in product design...',
    tags: ['Leadership', 'Design'],
  },
  {
    id: 14,
    image: 'https://placehold.co/300x200?text=FEATURE-14',
    title: 'A Guide to Conducting Effective User Interviews',
    author: 'Marcus Bond',
    date: '04 Jan 2024',
    excerpt: 'Asking the right questions can reveal deeper motivations...',
    tags: ['Research', 'Interviews'],
  },
  {
    id: 15,
    image: 'https://placehold.co/300x200?text=FEATURE-15',
    title: 'Developer Handoff: How to Avoid Design Debt',
    author: 'Lina Floyd',
    date: '03 Jan 2024',
    excerpt:
      'Bridging the gap between design mockups and production code efficiently...',
    tags: ['Design', 'Developer'],
  },
  {
    id: 16,
    image: 'https://placehold.co/300x200?text=FEATURE-16',
    title: 'Tips for Running a Successful Design Sprint',
    author: 'Calvin Moss',
    date: '02 Jan 2024',
    excerpt:
      'A structured approach to problem-solving with cross-functional teams...',
    tags: ['Sprint', 'Teamwork'],
  },
  {
    id: 17,
    image: 'https://placehold.co/300x200?text=FEATURE-17',
    title: 'Building a Personal Brand as a UI/UX Designer',
    author: 'Karen Blake',
    date: '01 Jan 2024',
    excerpt:
      'Portfolios, social media, and case studies that highlight your unique style...',
    tags: ['Career', 'Branding'],
  },
  {
    id: 18,
    image: 'https://placehold.co/300x200?text=FEATURE-18',
    title: 'Gamification: Boosting User Engagement Through Play',
    author: 'Irene Dupont',
    date: '31 Dec 2023',
    excerpt:
      'Reward systems and game-like mechanics can keep users invested...',
    tags: ['Gamification', 'Product'],
  },
  {
    id: 19,
    image: 'https://placehold.co/300x200?text=FEATURE-19',
    title: 'Designing for Inclusivity: Accessibility Beyond Color Contrast',
    author: 'Oscar Lane',
    date: '30 Dec 2023',
    excerpt:
      'Building experiences that welcome users with varying abilities...',
    tags: ['Accessibility', 'Inclusivity'],
  },
  {
    id: 20,
    image: 'https://placehold.co/300x200?text=FEATURE-20',
    title: 'Why Micro-Interactions Matter: A Subtle Delight',
    author: 'Wendy Howard',
    date: '29 Dec 2023',
    excerpt: 'Micro-animations can create a surprising amount of user joy...',
    tags: ['UX', 'Animation'],
  },
];
