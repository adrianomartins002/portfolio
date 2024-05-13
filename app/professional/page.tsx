import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Professional Journey and Expertise</h1>
      <h3 className="font-semibold text-1xl mb-8 tracking-tighter"> Committed to Excellence and Ongoing Growth in Software Development</h3>
      
        <p><strong>Education: </strong> I earned my Bachelor’s degree in Computer Science from Pitágoras College in São Luís, Maranhão, Brazil, completing the four-year program that gave me a solid foundation in software development. I continued my education at the same college, obtaining an MBA in Project Management over two years, which equipped me with skills in leading projects and strategic planning.</p>
<p><strong>Professional Development: </strong>I am dedicated to continuous personal and professional development, consistently engaging with the latest advancements in technology. Each day, I dedicate time to study new technologies, particularly those that can enhance my effectiveness at work. Currently, I am deeply focused on the realm of generative AI, exploring both open-source projects like Facebook's Ollama and leading innovations such as ChatGPT from OpenAI. This daily practice not only keeps me informed but also strategically equipped to leverage new tools and techniques in my projects.</p>
{/* <p><strong>Technical Skills and Achievements:</strong> Provide a concise list or a graphical representation of your technical skills, significant projects, and any recognitions or certifications you have achieved.</p>
<p><strong>Learning Philosophy:</strong> Share your approach to learning and staying current in a fast-evolving field.</p> */}
<p>
<div className="container">
        <h2>Technical Skills and Achievements</h2>
        <h3>Core Technical Skills:</h3>
        <ul>
            <li><strong>Programming Languages:</strong> C++, Java, Node.js, Python</li>
            <li><strong>Databases:</strong> SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Redis)</li>
            <li><strong>Cloud Services:</strong> AWS, Azure, DigitalOcean</li>
            <li><strong>DevOps:</strong> CI/CD (GitHub, GitLab), SonarQube, Linters</li>
        </ul>
        <h3>Key Projects:</h3>
        <ul>
            <li>Developed scalable cloud solutions, improving system efficiency and reliability.</li>
            <li>Led the integration of CI/CD pipelines, reducing deployment times and enhancing code quality.</li>
        </ul>
        <h3>Professional Development:</h3>
        <ul>
            <li>Continuous improvement in code quality through unit testing, integration testing, and clean coding.</li>
            <li>Advanced knowledge of software development tools and environments.</li>
        </ul>
    </div>
    </p>
      {/* <BlogPosts /> */}
    </section>
  )
}
