const musicImage = document.getElementById('music-image');
const musicTitle = document.getElementById('music-title');
const musicArtist = document.getElementById('music-artist');
const audio = document.getElementById('audio');
const masterPlay = document.getElementById('masterPlay');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const musicBar = document.querySelector(".music-bar");
const currentTime = document.querySelector(".current-time");
const maxTime = document.querySelector(".max-time");


let songIndex = 0;

const songs = [
    {
        id: 0,
        songName: "Tralala - Vierra",
        artist: "Vierra",
        musicImage: "assets/img/background.jpg",
        audio: "assets/music/background.mp3"
    },
    {
        id: 1,
        songName: "Cinta Luar Biasa - Andmesh",
        artist: "Andmesh",
        musicImage: "assets/img/music2.jpg",
        audio: "assets/music/music2.mp3",
    },
    {
        id: 2,
        songName: "C.H.R.I.S.Y.E. - Diskoria ft. Laleilmanino",
        artist: "Diskoria",
        musicImage: "assets/img/music3.jpg",
        audio: "assets/music/music3.mp3",
    },
];

const loadSong = (song) => {
    musicImage.src = song.musicImage;
    musicTitle.innerText = song.songName;
    musicArtist.innerText = song.artist;
    audio.src = song.audio;
};

const playMusic = () => {
    masterPlay.classList.remove('ri-play-fill');
    masterPlay.classList.add('ri-pause-fill');
    audio.play();
    musicBar.classList.add('active');
}

const pauseMusic = () => {
    masterPlay.classList.add('ri-play-fill');
    masterPlay.classList.remove('ri-pause-fill');
    audio.pause();
    musicBar.classList.remove('active');
}

loadSong(songs[songIndex]);

// Event Listener
masterPlay.addEventListener('click', () => {
    if(audio.paused || audio.currentTime <= 0){
        playMusic();
    }else{
        pauseMusic();
    }
});

next.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
});

prev.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
});

// Update progress bar based on time
audio.addEventListener('timeupdate', (e) => {
    const currentTimeAudio = e.target.currentTime;
    const durationAudio = e.target.duration;
    
    let progressWidth = (currentTimeAudio / durationAudio) * 100;
    musicBar.style.width = `${progressWidth}%`

    let currentMin = Math.floor(currentTimeAudio / 60);
    let currentSec = Math.floor(currentTimeAudio % 60);
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    currentTime.innerText = `${currentMin}:${currentSec}`;

    audio.addEventListener('loadeddata', ()=>{
        let audioDuration = audio.duration;
        let maxMin = Math.floor(audioDuration / 60);
        let maxSec = Math.floor(audioDuration % 60);
        if(maxSec < 10){
           maxSec = `0${maxSec}`
        }
        maxTime.innerText = `${maxMin}:${maxSec}`
    });
});