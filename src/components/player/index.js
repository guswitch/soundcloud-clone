import './style.scss';
import AudioUrl from '../../assets/songs/01. Sidoka - Sommelier.mp3'
export default function Player() {
    return (
        <div className="Player">
            <audio controls>
                <source src={AudioUrl} type="audio/mp3"></source>
            </audio>
        </div>
    )
}