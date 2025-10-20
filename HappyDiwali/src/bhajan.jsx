import { useRef, useState } from "react";
import music from "./assets/audio/audio.mp3";

function Bhajan() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <audio ref={audioRef} src={music} />
            {!isPlaying && (
                <button
                    onClick={playAudio}
                    className="fixed bottom-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
                >
                    🎵 Play Bhajan
                </button>
            )}
        </>
    );
}

export default Bhajan;
