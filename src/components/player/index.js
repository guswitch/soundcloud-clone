import './style.scss';
import AudioUrl from '../../assets/songs/somelier.ogg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
    return (
        <div className="Player">
            <AudioPlayer
                autoPlay
                src={AudioUrl}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div >
    )
}