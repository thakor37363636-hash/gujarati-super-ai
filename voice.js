const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "gu-IN"; // Gujarati / hi-IN / en-US

recognition.onstart = () => {
  document.getElementById("voiceBox").innerHTML = "<p>🎙️ Listening...</p>";
};

recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById("voiceBox").innerHTML = "<p><b>You said:</b> " + transcript + "</p>";

  try {
    const response = await fetch("https://hf.space/embed/akhaliq/text2text-large/api/predict/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [transcript] })
    });

    const data = await response.json();
    const aiText = data.data[0];
    document.getElementById("voiceBox").innerHTML += "<p><b>AI:</b> " + aiText + "</p>";

    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(aiText);
    synth.speak(utter);
  } catch(err) {
    document.getElementById("voiceBox").innerHTML += "<p><b>AI:</b> Error aavyo. Try again.</p>";
  }
};

function startVoice() {
  recognition.start();
}
