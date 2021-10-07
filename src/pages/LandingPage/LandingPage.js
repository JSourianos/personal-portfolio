import coding from "../../assets/web-programming.png";
import design from "../../assets/web-design.png";
import business from "../../assets/briefcase.png";
import profileImage2 from "../../assets/profileimage_copy.jpg";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <main>
        <div className="main">
          <div className="left-container">
            <h3>Hi, my name is Thomas</h3>
            <h1>
              I am a student developer currently studying at Høyskolen
              Kristiania
            </h1>
          </div>
          <div className="right-container">
            <img src={profileImage2} />
          </div>
        </div>
        <div className="bottom-container">
          <h3>What I do</h3>
          <div className="product-container">
            <div className="product-container-box">
              <img src={coding} />
              <h4>Coding {/* ADD title props in comp here */}</h4>
              <p>
                Through school I have learnt HTML, CSS, JavaScript, and my
                framework of choice is React.
                <br />I am also in the process of learning app development, and
                I have completed projects with both React Native for
                crossplatform and Kotlin for Native Android Development.
              </p>
            </div>

            <div className="product-container-box">
              <img src={design} />
              <h4>Design</h4>
              <p>
                I have also had courses in Responsive Design, and UX Interface
                design.
                <br />
                Figma and Adobe XD are the tools I am most familiar with, and I
                have created many projects with these tools.
              </p>
            </div>
            <div className="product-container-box">
              <img src={business} />
              <h4>
                Business & Development {/* ADD title props in comp here */}
              </h4>
              <p>
                I also have experience with agile methods such as Scrum, through
                our Agile Exam.
                <br />I also run a side-business outside of school where I
                design and create websites and webshops, both with Wordpress and
                with coding.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
