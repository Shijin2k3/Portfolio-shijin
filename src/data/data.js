import image from '../assets/education.png'
import ak from '../assets/ak.jpeg'
export const navItems=[
    {
      link:'Home',path:'home'
    },
    {
      link:'About',path:'about'
    },
    {
      link:'Skills',path:'skills'
    },
    {
      link:'Projects',path:'projects'
    },
    {
      link:'Contact',path:'contact'
    }
  ]
 export const education=[
  {
    id:1,
    image:image,
    name:'ST ELIZABETH ENGLIS MEDIUM SCHOOL',
    address:'Ponganamkadu,Thrissur,Kerala',
    year:'2019',
    class: '10th CBSE',
    grade:"87.6 %"
  },
  {
    id:2,
    image:image,
    name:'SLB GOV HIGHER SECONDARY SCHOOL ',
    address:'Nagercoil,Tamilnadu',
    year:'2019 - 2021',
    class: '12th Computer Science',
    grade:"92.25 %"
  },
  {
    id:3,
    image:image,
    name:'MET ENGINEERING COLLEGE',
    address:'Aralvaimozhi,Tamilnadu',
    year:'2021 - 2025',
    class: 'Computer Science and Engineering',
    grade:"8.33 CGPA"
  },
 ] 

 export const experiences=[
  {
    id:1,
    image:ak,
    company:"AK Info Park",
    role:"Web Developer Intern",
    year:"Jan 2024 - Feb 2024 ",
    description:"Contributed to the development of web application using javascript,html,css,Bootstrap,React and Php.Managed databases and Implemented data storage using MYSQL",
    technologies:["React.js","PHP","MYSQL","JS"]
  },
  {
    id:2,
    image:ak,
    company:"AK Info Park",
    role:"Full Stack Web Developer Intern",
    year:"Feb 2025 - Mar 2025 ",
    description:"Contributed to the development of Full Stack web application using javascript,html,Tailwind Css,React and Node.js.Managed databases and Implemented data storage using MongoDB",
    technologies:["React.js","Node.js","MongoDB"]
  },
  {
    id:3,
    image:ak,
    company:"Agile Tribers",
    role:"App Developer Intern",
    year:"May 2025 - jun 2025 ",
    description:"Contributed to the development of App  using javascript,React Native and designed a simple project named Movie mania",
    technologies:["React.js","React Native","Tailwind Css","JS"]
  },
  {
    id:4,
    image:ak,
    company:"ITOI Technologies",
    role:"Junior Backend Developer",
    year:"Jun 2025 - Present ",
    description:"Contributed to the development of web application using javascript,Typescript,Prisma,Nest js and Implemented data storage using MYSQL",
    technologies:["React.js","Nest js","MYSQL","Prisma","figma"]
  }

 ]