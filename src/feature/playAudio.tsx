const playAudio = (audio: string) => {
  const audioElement = new Audio(audio);
  audioElement.load();
  audioElement.play().catch((error) => {
    console.error("Error playing audio:", error);
  });
};

export default playAudio;
