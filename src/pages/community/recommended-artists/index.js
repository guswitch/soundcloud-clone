import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

export default function RecommendedArtists() {
    return (
            <div className="RecommendedArtists">
                <div className="RecommendedInfo">
                    <h2>Artists you may like</h2>
                    <a href="#">View all</a>
                </div>
                <div className="ArtistsProfile">
                    <div className="ArtistProfile">
                        <img src="https://i.scdn.co/image/ab67706c0000bebb2a7e72a2e79f6ff13cf599f7" alt=""/>
                        <span className="FollowBtn">
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <h4> Yung Nobre </h4>
                        <span> 192K followers </span>
                    </div>


                    <div className="ArtistProfile">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwngX0HAx5hQjAUQ7CIUhqJbIfRXGdIJYl6Pw6f0v=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                        <span className="FollowBtn">
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <h4> Bruxo 021 </h4>
                        <span> 305K followers </span>
                    </div>


                    <div className="ArtistProfile">
                        <img src="https://pbs.twimg.com/profile_images/1297640734917566464/pQRa-XMs_400x400.jpg" />
                        <span className="FollowBtn">
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <h4> QTZ Tivityn </h4>
                        <span> 102K followers </span>
                    </div>

                    <div className="ArtistProfile">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwngnMKmJiu1oDuhECif1aGwsfwQXaMuJnvENtAGx=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                        <span className="FollowBtn">
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <h4> Martelin </h4>
                        <span> 106K followers </span>
                    </div>

                    <div className="ArtistProfile">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwng8NspzzWGBRHu1mYX406CjQP8ScYajOZHnmjn-=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                        <span className="FollowBtn">
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <h4> Raffa Moreira </h4>
                        <span> 1.2M followers </span>
                    </div>

                    <div className="ArtistProfile">
                        <img src="https://i.pinimg.com/736x/08/23/f3/0823f3bd56b4194f12939531d562b1d0.jpg" alt=""/>
                        <span className="FollowBtn">
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <h4> Matuê </h4>
                        <span> 1M followers </span>
                    </div>

                </div>
            </div>
    );
}