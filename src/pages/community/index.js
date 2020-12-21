import './style.scss';
import RecommendedArtists from './recommended-artists';
import Events from '../community/Events';

export default function Community() {
  return (
    <div className="Community">
      <RecommendedArtists />
      <Events />
    </div>
  );
}