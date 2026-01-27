const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');

// Lirik lagu dengan waktu (detik)
const lyrics = [
  { time: 6 text: "mengapa tuhan pertemuka" }
  { time: 7, text: "kita yang tak mungkin menyatu" }
  { time: 6, text: "aku yang telah terikat janji " }
  { time: 4, text: "engkau pun begitu" }
  { time: 7, text: ".............."}
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


