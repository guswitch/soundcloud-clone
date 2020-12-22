import './style.scss';
import Suggestion from './suggestion';
import YourPlayback from './your-playback';

export default function Home() {
    return (
        <div className="Home">
            <YourPlayback />
            <Suggestion />    
        </div>
    );
}