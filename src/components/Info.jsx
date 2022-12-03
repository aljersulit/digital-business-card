import profile from "../images/Rectangle 90.png"
import email from '../images/Mail.png'
import linkedin from '../images/linkedin.png'

export default function Info() {
    return (
      <header className="info">
        <img src={profile} />
        <h1 className="fullname">Laura Smith</h1>
        <h2 className="job-title">Frontend Developer</h2>
        <h3 className="portfolio">laurasmith.website</h3>
        <div className="btn-container">
          <a href="#">
            <button type="button" className="email btn">
              <img src={email} />
              Email
            </button>
          </a>
          <a href="#">
            <button type='button' className="linkedin btn">
              <img src={linkedin} />
              LinkedIn
            </button>
          </a>
        </div>
      </header>
    );
}