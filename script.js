const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');

// Lirik lagu dengan waktu (detik)
const lyrics = [
  { time: 0, text: "..they said.." },
  { time: 1.5,text: "..all teenagers scare the livin shit out of me.." },
  { time: 7,text: "..they could care less as long as someone bleed.. " },
  { time: 11,text: "..So darken your clothes, or strike a violent pose.." },
  { time: 15,text: "Maybe they'll leave you alone, but not me"},
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










