
import Image from 'next/image'
import './timeline.css'
const EducationSection = () => {
  return (
        <section id="education">

            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                    
                </span>
                <span className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'> Education </span>
            </h1>

            <div className="timeline">

                <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                        <Image src="/images/dtu.jpg" width={500} height={500} />
                        </div>
                        <h3 className="education-designation  m0"> B.Tech Software Engineering </h3>
                        <h4 className="education-company-name "> Delhi Technological University </h4>
                        <h5 className="education-duration m0"> 2021 -2025 </h5>
                        <p className="education-description text-align-justify"> Currently I am in 3rd year of my college pursuing Software Enginerring having an aggregate CGPA of 8.79. </p>
                    </div>
                </div>
                
                <div className="timeline-box right ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                        <Image src="/images/schoollogo.jpg" width={500} height={500} />
                        </div>
                        <h3 className="education-designation  m0 "> Class XII </h3>
                        <h4 className="education-company-name "> Satyakaam International School</h4>
                        <h5 className="education-duration m0"> 2019-2020 </h5>
                        <p className="education-description text-align-justify"> Completed my class XII in 2020 with an aggregate of 97.2% in CBSE board examination.</p>
                    </div>
                </div>

                <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                        <Image src="/images/schoollogo.jpg" width={500} height={500} />
                        </div>
                        <h3 className="education-designation  m0"> Class X </h3>
                        <h4 className="education-company-name "> Satyakaam International School </h4>
                        <h5 className="education-duration m0"> 2017-2018 </h5>

                        <p className="education-description text-align-justify">Completed my class X in 2018 with an aggregate of 92% .</p>
                    </div>
                </div>
                
                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <div>
                            <i className="fas fa-car-side" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

            </div>

        </section>
  )
}

export default EducationSection
