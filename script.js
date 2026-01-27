const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');

// Lirik lagu dengan waktu (detik)
const lyrics = [
  { time: 0, text: "Lirik baris 1" },
  { time: 5, text: "Lirik baris 2" },
  { time: 10, text: "Lirik baris 3" },
  { time: 15, text: "Lirik baris 4" }
];

let currentLyricIndex = 0;

playButton.addEventListener('click', () => {
  audio.play();
  currentLyricIndex = 0;
  lyricsDiv.innerHTML = "";
});

// Update lirik sesuai waktu musik
audio.addEventListener('timeupdate', () => {
  if (currentLyricIndex < lyrics.length && audio.currentTime >= lyrics[currentLyricIndex].time) {
    lyricsDiv.innerHTML += lyrics[currentLyricIndex].text + "<br>";
    currentLyricIndex++;
  }
});