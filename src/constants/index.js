import { development, design1, design2, science, business } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "course",
    title: "Course",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "login",
    title: "Login",
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Kaberuka Gerrard",
    designation: "Nyamata, Rwanda",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Karamage Yves",
    designation: "Masaka, Rwanda",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ihimbazwe Placide",
    designation: "Burera, Rwanda",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const courses = [
  {
    id: 1,
    image: development,
    course: "Development"
  },
  {
    id: 2,
    image: business,
    course: "Business"
  },
  {
    id: 3,
    image: science,
    course: "Science"
  },
  {
    id: 4,
    image: design1,
    course: "Design"
  },
];

const reviews = [
  {
    id: 1,
    heading: "Everything Done",
    tag: "Something really interesting , it provides whatever the shit u need for your studies",
    person: "Kaberuka Gerrard",
    residency: "Moscow, Russia"
  },
  {
    id: 2,
    heading: "Everything Done",
    tag: "Something really interesting , it provides whatever the shit u need for your studies",
    person: "Karamage Yves",
    residency: "California, USA"
  },
  {
    id: 3,
    heading: "Everything Done",
    tag: "Something really interesting , it provides whatever the shit u need for your studies",
    person: "Kotana Allan",
    residency: "Kigali, Rwanda"
  }
]

export { testimonials, courses, reviews }
