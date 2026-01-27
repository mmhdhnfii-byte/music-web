const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');

// Lirik lagu dengan waktu (detik)
const lyrics = [
  { time: 0, text: "..mengapa tuhan pertemukan.." },
  { time: 7, text: "..kita yang tak mungkin menyatu.." },
  { time: 15, text: "..aku yang telah terikat janji.. " },
  { time: 21, text: "..engkau pun begitu.." },
  { time: 22, text: "................"},
];

audio.addEventListener("timeupdate", () => {
  if(index < lyrics.length && audio.currentTime >= lyrics[index].time){
    lyricElement.textContent = lyrics[index].text; // ganti teks lirik
    index++;
  }
});
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







