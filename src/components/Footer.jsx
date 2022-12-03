import facebook from '../images/Facebook Icon.png'
import github from '../images/GitHub Icon.png'
import instagram from '../images/Instagram Icon.png'
import twitter from '../images/Twitter Icon.png'

export default function Footer() {
    return (
      <footer>
        <a href="#">
          <img src={twitter} alt="twitter icon" />
        </a>
        <a href="#">
          <img src={facebook} alt="facebook icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram icon" />
        </a>
        <a href="#">
          <img src={github} alt="github icon" />
        </a>
      </footer>
    );
}