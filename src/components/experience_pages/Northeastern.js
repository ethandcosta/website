import ExperiencePage from "./ExperiencePage";

const content=[
    {type:"project",
     title: "Object-Oriented Design Teaching Assistant",
    description: "As an OOD TA, I taught several classes totalling roughly 500 students fundamental software"+
      " design concepts like SOLID principles and architectures like model-server and MVC. I also ran 5 hours of office"+
      " hours a week for students to pop in with questions on the homework, which I also graded.",
    skills: ["Java", "software dev", "JUnit", "Git", "Java Swing", "teaching", "leadership"]
    },
    {type: "project",
     title: "Professional Development for Co-op Teaching Assistant",
     description: "As a Co-op TA, I helped roughly 200 students develop the skills required to get and succeed in a computer"+
     " science co-op. This involved running mock interviews, helping them build resumes, and teaching them networking etiquette.",
     skills: ["networking", "interpersonal communication", "teaching", "leadership"]
    }
];

const Northeastern = () => {
     return <ExperiencePage title="My Experience at Northeastern University" content={content}/>
};

export default Northeastern;