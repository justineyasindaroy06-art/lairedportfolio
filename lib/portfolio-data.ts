import {
  Zap,
  ClipboardList,
  BookOpen,
  CheckCircle2,
  Palette,
  type LucideIcon,
} from 'lucide-react'

export type Project = {
  id: number
  title: string
  category: string
  description: string
  fullDescription: string
  technologies: string[]
  image: string
}

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export type Testimonial = {
  name: string
  title: string
  company: string
  quote: string
  avatar: string
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const heroBadges = [
  'AI Automation',
  'Executive Support',
  'Workflow Optimization',
  'Process Documentation',
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Executive Operations Management',
    category: 'Operations',
    description: 'End-to-End Administrative Support System',
    fullDescription:
      'Designed and implemented a comprehensive executive operations management system to streamline administrative workflows. Managed executive inbox with priority triage and automated labeling, coordinated cross-functional tasks and deadlines, prepared briefing materials for 50+ executive meetings, tracked 15+ concurrent projects, and facilitated team alignment.',
    technologies: ['Google Workspace', 'ClickUp', 'Notion', 'Slack'],
    image: '/images/executive-operations.png',
  },
  {
    id: 2,
    title: 'AI-Powered Workflow Automation',
    category: 'Automation',
    description: 'Intelligent Process Optimization System',
    fullDescription:
      'Built and deployed an end-to-end AI workflow automation ecosystem that reduced manual administrative work by 60%. Designed custom ChatGPT prompt systems, integrated n8n and Make for automated workflows connecting multiple business tools, and optimized processes reducing turnaround time from days to minutes with 99.8% accuracy.',
    technologies: ['ChatGPT', 'n8n', 'Google Sheets/Docs', 'Slack', 'Zapier'],
    image: '/images/workflow-automation.png',
  },
  {
    id: 3,
    title: 'Documentation & SOP Systems',
    category: 'Systems',
    description: 'Organizational Knowledge Infrastructure',
    fullDescription:
      'Developed a centralized documentation and SOP ecosystem serving as the single source of truth. Created 24+ detailed SOPs covering core business processes, built a knowledge base with 156+ articles, and reduced onboarding time by 40% while minimizing operational errors.',
    technologies: ['Notion', 'Google Docs/Drive', 'Canva', 'ClickUp', 'Asana'],
    image: '/images/documentation-sop.png',
  },
  {
    id: 4,
    title: 'Creative Marketing & Graphic Design',
    category: 'Design',
    description: 'Brand Storytelling & Visual Communication',
    fullDescription:
      'Designed and executed visually compelling marketing campaigns blending strategic brand storytelling with graphic design. Developed social media campaigns achieving 4.2% engagement rate and 45K+ reach, created high-impact promotional graphics, and built a brand asset library ensuring 98% consistency.',
    technologies: ['Canva Pro', 'Pinterest'],
    image: '/images/creative-marketing.png',
  },
]

export const services: Service[] = [
  {
    title: 'AI Automation & Workflow Solutions',
    description:
      'Design and implement AI-powered workflows that reduce repetitive tasks, improve efficiency, and streamline daily business operations.',
    icon: Zap,
  },
  {
    title: 'Executive Operations & Administrative Support',
    description:
      'Provide reliable executive support through inbox management, calendar coordination, project tracking, meeting preparation, and operational organization.',
    icon: ClipboardList,
  },
  {
    title: 'Documentation & SOP Management',
    description:
      'Develop clear process documentation, standard operating procedures (SOPs), and centralized knowledge bases that improve consistency and team collaboration.',
    icon: BookOpen,
  },
  {
    title: 'Project & Workflow Management',
    description:
      'Coordinate projects, organize tasks, manage deadlines, and optimize workflows using modern productivity and collaboration tools.',
    icon: CheckCircle2,
  },
  {
    title: 'Creative Design & Digital Content',
    description:
      'Create professional marketing materials, presentations, social media graphics, and branded visual content that supports business communication.',
    icon: Palette,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    title: 'CEO',
    company: 'NovaTech Solutions',
    quote:
      "I want to personally thank you for the exceptional work you've done over the past 6 months. Your inbox management alone saved me 2 hours every day. You're the best executive assistant I've worked with in 15 years.",
    avatar: 'SM',
  },
  {
    name: 'James Rodriguez',
    title: 'VP of Operations',
    company: 'Meridian Group',
    quote:
      'Working with you has been transformative for our operations team. Your ability to coordinate across 5 departments and prepare flawless meeting materials is remarkable. You brought structure to chaos and professionalism to every interaction.',
    avatar: 'JR',
  },
  {
    name: 'Lisa Chen',
    title: 'Founder',
    company: 'Catalyst Ventures',
    quote:
      'You managed my entire executive operations with precision and grace. From coordinating international travel to preparing board decks, you handled everything seamlessly. Your workflow automation skills using n8n saved us countless hours.',
    avatar: 'LC',
  },
  {
    name: 'David Kim',
    title: 'Director of Marketing',
    company: 'Elevate Brands',
    quote:
      'Your creative marketing and graphic design work elevated our entire brand presence. The social media campaigns you designed achieved our highest engagement rates in 2 years. You have a rare combination of operational excellence and creative talent.',
    avatar: 'DK',
  },
  {
    name: 'Maria Lopez',
    title: 'COO',
    company: 'Pinnacle Industries',
    quote:
      'Your documentation and knowledge base work has fundamentally improved how our team operates. The 24 SOPs you created are referenced daily. You build systems, not just complete tasks—that sets you apart.',
    avatar: 'ML',
  },
]

export const contactInfo = {
  email: 'justineyasindaroy06@gmail.com',
  phone: '+63 992 254 2335',
  phoneHref: 'tel:+639922542335',
  linkedin: 'https://www.linkedin.com/in/justine-daroy-11a738347/',
}

export const serviceOptions = [
  'AI Automation & Workflow Solutions',
  'Executive Operations & Administrative Support',
  'Documentation & SOP Management',
  'Project & Workflow Management',
  'Creative Design & Digital Content',
]

export const budgetOptions = ['$1K - $5K', '$5K - $10K', '$10K - $25K', '$25K+']
