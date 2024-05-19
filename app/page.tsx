import Image from 'next/image'
import firstImage from '../app/assets/adriano1.png'
import secondImage from '../app/assets/adriano2.png'

export default function Page() {
  return (
    <section>
      <div className='head-container'>
        <div className="image-container">
          <Image src={firstImage} alt="Adriano Martins" className="first" width={150} height={150} />
          <Image src={secondImage} alt="Adriano Martins" className="second" width={150} height={150} />
        </div>
        <div className='container-titles'>
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
            Portfolio of Adriano Martins, Full-Stack Software Engineer
          </h1>
          <h3>Enthusiast and Innovator in Software Engineering</h3>
        </div>

      </div>

      <p className="mb-4 mt-4">
        {`I'm Adriano passionate full-stack software engineer with a solid background in both 
        front-end and back-end technologies. 
        I'm a 29 years old men with so much enthusiasm for continuous learning and innovation in the field.`}
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
