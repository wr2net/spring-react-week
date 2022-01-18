import './styles.css';
import {ReactComponent as GithubIcon} from "assets/img/github.svg";
import {ReactComponent as HerokuIcon} from "assets/img/heroku.svg";

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/wr2net/spring-react-week" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/wr2net/spring-react-week</p>
                        </div>
                    </a>
                    <a href="https://wr2net-dsmovie.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <HerokuIcon />
                            <p className="dsmovie-contact-link">Start Server</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;