async function generateImage() {
  let input = document.getElementById("imageInput");
  let imageBox = document.getElementById("imageBox");
  if(input.value === "") return;

  imageBox.innerHTML = "<p><i>Generating image...</i></p>";

  try {
    const response = await fetch("https://hf.space/embed/stabilityai/stable-diffusion-2/api/predict/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [input.value] })
    });

    const data = await response.json();
    const url = data.data[0];
    imageBox.innerHTML = `<img src="${url}" width="300"/>`;
  } catch(err) {
    imageBox.innerHTML = "<p>Error generating image. Try again.</p>";
  }
}
