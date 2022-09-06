import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return(
        <header>
            <img src={logo} alt="logo Meta System" />
            <h1>Meta System</h1>
            <p>Desenvolvido por <a href="https://joaoortegar.netlify.app" target="_blank">João Ortega</a></p>
        </header>
    )
  }
  
  export default Header