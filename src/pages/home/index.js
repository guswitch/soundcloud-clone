import './style.scss';
import Suggestion from './suggestion';
import YourPlayback from './your-playback';
import Player from '../../components/player';

export default function Home() {
    return (
        <div className="Home">
            <YourPlayback />
            <Suggestion />
            <Player />
        </div>
    );
}