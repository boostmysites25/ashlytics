import logo from "../assets/logo/logo.png";
import circleImg from "../assets/images/circle.png";
import moonShapeImg from "../assets/images/yellow-moon-shape.png";
import { IoChatbubblesOutline, IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline, IoMdGlobe } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";

export { logo, circleImg, moonShapeImg };

export const companyDetails = {
  email: "abc@example.com",
  location: "Flat No. 704, Wing No. 12, Swapnapurti, Jivlapada, Thakur Village, Kandivali East, Mumbai – 400101.",
  phone: "91-7738900931",
  whatsapp: "https://wa.me/917738900931",
  instagram: "https://www.instagram.com/ash_lytics?igsh=MWtzMDE0Z2l0Nm1hYg==",
  linkedin: "https://www.linkedin.com/company/ashlytics/?viewAsMember=true",
  website: "https://ashlytics.com/",
};

// industries
export const industries = [
  {
    id: 1,
    title: "E-commerce and Retail",
    image: "/assets/images/icons/E-commerce and Retail.png",
    desc: "Building powerful online stores with seamless payment integration, inventory management, and customer analytics to boost sales and enhance shopping experiences.",
  },
  {
    id: 2,
    title: "Healthcare and Biotech",
    image: "/assets/images/icons/Healthcare and Biotech.png",
    desc: "Creating secure patient portals, appointment systems, and telemedicine platforms that streamline healthcare delivery and improve patient outcomes.",
  },
  {
    id: 3,
    title: "FinTech and Banking",
    image: "/assets/images/icons/FinTech and Banking.png",
    desc: "Developing secure financial applications with real-time transaction processing, fraud detection, and regulatory compliance features.",
  },
  {
    id: 4,
    title: "Education and E-Learning",
    image: "/assets/images/icons/Education and E-Learning.png",
    desc: "Building interactive learning platforms with video streaming, progress tracking, and collaborative tools for modern education.",
  },
  {
    id: 5,
    title: "Logistics and Supply Chain Management",
    image: "/assets/images/icons/Logistics and Supply Chain Management.png",
    desc: "Creating comprehensive logistics solutions with real-time tracking, route optimization, and warehouse management systems.",
  },
  {
    id: 6,
    title: "Gaming and Entertainment",
    image: "/assets/images/icons/Gaming and Entertainment.png",
    desc: "Developing engaging mobile games and entertainment apps with immersive graphics, multiplayer features, and social integration.",
  },
  {
    id: 7,
    title: "Restaurants and Hotels",
    image: "/assets/images/icons/Restaurants and Hotels.png",
    desc: "Building reservation systems, food delivery apps, and hospitality management platforms to enhance guest experiences.",
  },
];

export const testimonials = [
  {
    name: "Arjun Mehta",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "Ashlytics transformed our outdated website into a modern, responsive platform that increased our online conversions by 300%. Their attention to detail and technical expertise exceeded our expectations.",
    position: "Marketing Director",
    company: "TECHNOVATE SOLUTIONS",
  },
  {
    name: "Sandheep Kumar",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "The mobile app they developed for our restaurant chain revolutionized our ordering system. Customer satisfaction scores improved dramatically, and our operational efficiency increased by 40%.",
    position: "Operations Manager",
    company: "DIGITAL DINING PRO",
  },
  {
    name: "Sarah Joseph",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Working with Ashlytics was a game-changer for our startup. They built a scalable e-commerce platform that grew with our business, handling 10x more traffic without any performance issues.",
    position: "Founder & CEO",
    company: "ECOMMERCE INNOVATIONS",
  },
];

export const futureGoals = [
  {
    icon: <IoChatbubblesOutline size={30} />,
    title: "Expand Digital Solutions Portfolio",
    description:
      "Develop comprehensive digital transformation services that help businesses thrive in the modern digital landscape with cutting-edge web and mobile solutions.",
  },
  {
    icon: <RiTeamLine size={30} />,
    title: "Foster Sustainable Innovation",
    description:
      "Create environmentally conscious digital solutions while maintaining high performance standards and reducing carbon footprint through optimized development practices.",
  },
  {
    icon: <IoDiamondOutline size={30} />,
    title: "Client-Centric Excellence",
    description:
      "Build every solution around client objectives, ensuring each project delivers measurable business value and exceeds stakeholder expectations.",
  },
  {
    icon: <IoMdGlobe size={30} />,
    title: "Global Reach, Local Expertise",
    description:
      "Establish international presence while maintaining deep understanding of local market needs and cultural nuances for better client relationships.",
  },
  {
    icon: <IoMdCheckmarkCircleOutline size={30} />,
    title: "Superior User Experience Design",
    description:
      "Create intuitive, accessible, and engaging digital experiences that delight users and drive meaningful business outcomes.",
  },
  {
    icon: <LuBrainCircuit size={30} />,
    title: "Pioneer Emerging Technologies",
    description:
      "Stay at the forefront of technological innovation, integrating the latest advancements to deliver future-proof digital solutions.",
  },
];

// frequently asked questions
export const faqs = [
  {
    id: 1,
    question: "What's the difference between native and cross-platform mobile apps?",
    answer: `Native apps are built specifically for one platform (iOS or Android) using platform-specific programming languages like Swift for iOS and Kotlin for Android. They offer superior performance and full access to device features.

Cross-platform apps use frameworks like React Native or Flutter to create apps that work on multiple platforms from a single codebase. While they may have slightly lower performance, they significantly reduce development time and cost.`,
  },
  {
    id: 2,
    question: "How long does it typically take to develop a mobile application?",
    answer:
      "Mobile app development timelines vary based on complexity, features, and platform requirements. Simple apps with basic functionality typically take 2-4 months, while complex applications with advanced features can take 6-12 months. We provide detailed project timelines during the planning phase.",
  },
  {
    id: 3,
    question: "Should we develop for iOS, Android, or both platforms?",
    answer:
      "The platform choice depends on your target audience and business goals. iOS users tend to spend more on apps, while Android has a larger global market share. For maximum reach, we recommend cross-platform development using React Native or Flutter, which allows you to target both platforms efficiently.",
  },
  {
    id: 4,
    question: "What factors influence mobile app development costs?",
    answer:
      "App development costs depend on features complexity, design requirements, platform selection, third-party integrations, and development timeline. Simple apps start around $15,000, while complex enterprise applications can cost $100,000+. We provide detailed cost breakdowns during project planning.",
  },
  {
    id: 5,
    question: "How do you ensure mobile app security and data protection?",
    answer:
      "We implement industry-standard security measures including data encryption, secure API communication, regular security audits, and compliance with privacy regulations like GDPR. All apps undergo thorough security testing before deployment.",
  },
  {
    id: 6,
    question: "Do you provide ongoing maintenance and support after app launch?",
    answer:
      "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and compatibility maintenance for new OS versions. We also provide analytics monitoring and user feedback integration.",
  },
];

// web development portfolio
export const webDevelopmentPortfolio = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    image: require("../assets/images/portfolio/web development/5ghomes.webp"),
  },
  {
    id: 2,
    title: "Enterprise Management System",
    image: require("../assets/images/portfolio/web development/Autopilot.png"),
  },
  {
    id: 3,
    title: "Real Estate Marketplace",
    image: require("../assets/images/portfolio/web development/bayut.webp"),
  },
  {
    id: 4,
    title: "Corporate Business Website",
    image: require("../assets/images/portfolio/web development/cold creekcap.webp"),
  },
  {
    id: 5,
    title: "Healthcare Information Portal",
    image: require("../assets/images/portfolio/web development/collegenutritionist.png"),
  },
  {
    id: 6,
    title: "Educational Learning Platform",
    image: require("../assets/images/portfolio/web development/leadership.net.png"),
  },
  {
    id: 7,
    title: "Restaurant Management System",
    image: require("../assets/images/portfolio/web development/menissa caterings.webp"),
  },
  {
    id: 8,
    title: "Technology Innovation Site",
    image: require("../assets/images/portfolio/web development/think reality.webp"),
  },
];

// app development portfolio
export const appDevelopmentPortfolio = [
  {
    id: 1,
    title: "Digital Currency Trading App",
    image: require("../assets/images/portfolio/app development/cryptopadie.png"),
  },
  {
    id: 2,
    title: "Medical Consultation App",
    image: require("../assets/images/portfolio/app development/doctorplus.png"),
  },
  {
    id: 3,
    title: "Travel Companion App",
    image: require("../assets/images/portfolio/app development/dubai travel guide.webp"),
  },
  {
    id: 4,
    title: "Beauty Services App",
    image: require("../assets/images/portfolio/app development/elora hair palour.webp"),
  },
  {
    id: 5,
    title: "Personal Finance Manager",
    image: require("../assets/images/portfolio/app development/evans francis.webp"),
  },
  {
    id: 6,
    title: "Spiritual Guidance App",
    image: require("../assets/images/portfolio/app development/house of deliverance.png"),
  },
  {
    id: 7,
    title: "Mobile Shopping App",
    image: require("../assets/images/portfolio/app development/mybitsshop.webp"),
  },
  {
    id: 8,
    title: "Prayer Time Assistant",
    image: require("../assets/images/portfolio/app development/namaz.webp"),
  },
  {
    id: 9,
    title: "Lifestyle Management App",
    image: require("../assets/images/portfolio/app development/potea.webp"),
  },
  {
    id: 10,
    title: "Property Rental Platform",
    image: require("../assets/images/portfolio/app development/rentop.png"),
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Responsive Website Design",
    image: require("../assets/images/landing page/Custom Website Design.jpg"),
    description:
      "We craft stunning, responsive websites that adapt perfectly to all devices and screen sizes. Our designs prioritize user experience, loading speed, and conversion optimization. From corporate websites to personal portfolios, we create digital experiences that captivate visitors and drive business results.",
  },
  {
    id: 2,
    title: "E-commerce Platform Development",
    image: require("../assets/images/landing page/E-commerce Solutions.jpg"),
    description:
      "Build powerful online stores with advanced features like secure payment processing, inventory management, customer analytics, and marketing tools. Our e-commerce solutions are designed to maximize sales, improve customer retention, and provide seamless shopping experiences across all devices.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.jpg"),
    description:
      "Implement user-friendly CMS platforms that empower your team to manage website content effortlessly. We work with WordPress, Drupal, and custom solutions to create flexible, scalable content management systems that grow with your business needs.",
  },
  {
    id: 4,
    title: "API Development & Integration",
    image: require("../assets/images/landing page/API Integration.jpg"),
    description:
      "Connect your website with third-party services and internal systems through robust API development and integration. We ensure seamless data flow between platforms, enabling automation, improved efficiency, and enhanced user experiences.",
  },
  {
    id: 5,
    title: "Website Maintenance & Optimization",
    image: require("../assets/images/landing page/Website Maintenance & Support.jpg"),
    description:
      "Keep your website running smoothly with our comprehensive maintenance services. We handle security updates, performance optimization, content updates, and technical support to ensure your site remains fast, secure, and up-to-date.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Application Development",
    image: require("../assets/images/landing page/iOS App Development.jpg"),
    description:
      "Create exceptional iOS applications that leverage the full potential of Apple's ecosystem. Our native iOS development ensures optimal performance, seamless user experience, and full integration with iOS features. We build apps for iPhone, iPad, and Apple Watch that users love.",
  },
  {
    id: 2,
    title: "Android Application Development",
    image: require("../assets/images/landing page/Android App Development.jpg"),
    description:
      "Develop powerful Android applications that work flawlessly across all Android devices. We use the latest Android frameworks and best practices to create apps that are fast, reliable, and user-friendly. Our Android apps are designed for scalability and long-term success.",
  },
  {
    id: 3,
    title: "Cross-Platform Mobile Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.jpg"),
    description:
      "Reach users on both iOS and Android with a single codebase using React Native or Flutter. Our cross-platform development approach reduces time-to-market and development costs while maintaining high performance and native-like user experiences.",
  },
  {
    id: 4,
    title: "Mobile App UI/UX Design",
    image: require("../assets/images/landing page/UIUX Design for Apps.jpg"),
    description:
      "Design intuitive and engaging mobile app interfaces that users love to interact with. Our UI/UX design process focuses on user research, wireframing, prototyping, and usability testing to create apps that are both beautiful and functional.",
  },
  {
    id: 5,
    title: "App Testing & Deployment Services",
    image: require("../assets/images/landing page/App Testing & Deployment.jpg"),
    description:
      "Ensure your app is ready for launch with comprehensive testing across multiple devices and platforms. We handle the entire deployment process, from app store optimization to launch management, ensuring a smooth release and successful market entry.",
  },
];
