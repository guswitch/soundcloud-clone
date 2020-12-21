import './style.scss';

export default function YourPlayback() {
    return (
        <div className="YourPlayback">
            <h1>Your Playback</h1>
            <p>Your most played tracks, all in one place</p>
            <div className="YourPlaybackList">


            <div className="YourPlaybackItem">
                    <img src="https://i1.sndcdn.com/artworks-PAPtmahug7UDBVqj-xJONxg-t500x500.jpg" alt="" />
                    <h3>Your 2020 Playback</h3>
                    <p>Made for Gustavo</p>
                </div>

                <div className="YourPlaybackItem">
                    <img src="https://i1.sndcdn.com/artworks-8FDMqrbAKNKgWpna-UeTZPA-t500x500.jpg" alt="" />
                    <h3>Your 2019 Playback</h3>
                    <p>Made for Gustavo</p>

                </div>

                <div className="YourPlaybackItem">
                    <img src="https://i1.sndcdn.com/artworks-000454248219-w6ekkt-t500x500.jpg" alt="" />
                    <h3>Your 2018 Playback</h3>
                    <p>Made for Gustavo</p>
                </div>

                <div className="YourPlaybackItem">
                    <img src="https://i1.sndcdn.com/artworks-000269282084-c32ytf-t500x500.jpg" alt="" />
                    <h3>Your 2017 Playback</h3>
                    <p>Made for Gustavo</p>
                </div>

            </div>

        </div>
    )
}