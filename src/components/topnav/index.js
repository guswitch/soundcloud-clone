import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import myPhotoUrl from '../../assets/3BC697E4-8480-4585-9FC2-029345015C7C (1).jpg';

import './style.scss'

export default function Topnav(){
    return(
        <div className="Topnav">
            <div className="TopNavUpload">
                <button> <FontAwesomeIcon className="BtnIcon" icon={['fas', 'upload']} />&nbsp;&nbsp;Upload </button>
            </div>
            <div className="TopNavSearch">
                <input placeholder="Search..."/>
                <select>
                    <option> Playlists </option>
                    <option> Songs </option>
                    <option> Artists </option>
                </select>
                <button> <FontAwesomeIcon icon={['fas', 'search']} /> </button>
            </div>
            <div className="TopNavInfo">
            <FontAwesomeIcon className="BtnIcon" icon={['fas', 'bell']} />
            <FontAwesomeIcon className="BtnIcon" icon={['fas', 'envelope']} />
                <div className="ProfileInfo">
                    <span>Gustavo</span>
                    <img src={myPhotoUrl} alt="Your profile"/>
                    <FontAwesomeIcon className="BtnIconDropDown" icon={['fas', 'caret-down']} />
                </div>
            </div>
        </div>
    )
}