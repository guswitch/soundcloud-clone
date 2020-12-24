import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar() {
    useEffect(() => {

    }, [])
    let [clicked, setClicked] = useState(false);

    function ToogleAsideBar(clicked) {
        console.log('clicado');
        return clicked ? setClicked(false) : setClicked(true);
    }
    return (

        <>
            <aside className={`Navbar${clicked ? "-Show" : ""}`}>
                { clicked ? (<FontAwesomeIcon className="responsive-btn" onClick={() => setClicked(false)} icon={['fas', 'times']} />) : ("") }
                <FontAwesomeIcon className="NavLogo" icon={['fab', 'soundcloud']} />
                <button className="GetProAccount"> Get Soundcloud Pro</button>
                <ul className="NavOptions">
                    <h3> For you </h3>
                    <li>
                        <Link to="/home">
                            <FontAwesomeIcon icon={['fas', 'home']} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="community">
                            <FontAwesomeIcon icon={['fas', 'users']} />
                            <span>Community</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home">
                            <FontAwesomeIcon icon={['fas', 'compass']} />
                            <span>Discover</span>
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
                <hr className="NavSeparator" />
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
            </aside>
            <div className="NavResponsive">
                <FontAwesomeIcon className="responsive-btn" onClick={() => ToogleAsideBar(clicked)} icon={['fas', 'bars']} />
                <FontAwesomeIcon className="responsive-btn" icon={['fab', 'soundcloud']} />
            </div>
        </>
    );
}