import {Link} from "react-router-dom"
import classes from "./WebsiteNavigation.module.css"

function WebsiteNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Movie App</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/new-movie">New Movie Page</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default WebsiteNavigation