import './header.css'
import Headerimg_1 from '../../assets/me71.png'

const Header = () => {
  return (
    <section id='home'>
        <div>
            <h2>My name is Mike</h2>
            <p>I am programmer</p>
        </div>

        <img src={Headerimg_1} alt="Me" />
    </section>
  )
}
export default Header