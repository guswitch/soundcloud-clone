import { Link } from 'react-router-dom';
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    return (
        <nav className="Navbar">
            <FontAwesomeIcon className="NavLogo" icon={['fab', 'soundcloud']} />
            <button className="GetProAccount"> Get Soundcloud Pro</button>
            <ul className="NavOptions">
                <h3> For you </h3>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={['fas', 'home']} />
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={['fas', 'compass']} />
                        <span>Discover</span>
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        <FontAwesomeIcon icon={['fas', 'users']} />
                        <span>Community</span>
                    </Link>
                </li>
                <li>
                    <Link to="/stream">
                        <FontAwesomeIcon icon={['fas', 'globe']} />
                        <span>Stream</span>
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <FontAwesomeIcon icon={['fas', 'chart-bar']} />
                        <span>Statistics</span>
                    </Link>
                </li>
            </ul>
            <hr className="NavSeparator"/>
            <ul className="NavOptions">
                <h3> Collection </h3>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={['fas', 'heart']} />
                        <span>Likes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={['fas', 'music']} />
                        <span>Playlists</span>
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        <FontAwesomeIcon icon={['fas', 'folder']} />
                        <span>Albuns</span>
                    </Link>
                </li>
                <li>
                    <Link to="/stream">
                        <FontAwesomeIcon icon={['fas', 'microphone']} />
                        <span>Podcasts</span>
                    </Link>
                </li>
                <li> <Link to="/statistics">
                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                    <span>Following</span>
                </Link>
                </li>
            </ul>
        </nav>
    );
}