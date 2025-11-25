const playAudio = (audio: string) => {
  const audioElement = new Audio(audio);
  audioElement.volume = 0.4;
  audioElement.play().catch((error) => {
    console.error("Error playing audio:", error);
  });
};

export default playAudio;
