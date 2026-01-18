async function sendMsg() {
  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chatBox");
  if(input.value === "") return;

  const userText = input.value;
  chatBox.innerHTML += "<p><b>You:</b> " + userText + "</p>";
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  chatBox.innerHTML += "<p><i>AI typing...</i></p>";

  try {
    const response = await fetch("https://hf.space/embed/akhaliq/text2text-large/api/predict/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [userText] })
    });

    const data = await response.json();
    const aiText = data.data[0];
    chatBox.innerHTML = chatBox.innerHTML.replace("<p><i>AI typing...</i></p>", "");
    chatBox.innerHTML += "<p><b>AI:</b> " + aiText + "</p>";
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch(err) {
    chatBox.innerHTML = "<p><b>AI:</b> Error aavyo. Thodi vaar pachi try karo.</p>";
  }
}
