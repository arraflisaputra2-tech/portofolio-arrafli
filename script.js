function openModal(items) {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("modalContent");

  content.innerHTML = "";

  items.forEach(item => {
    const box = document.createElement("div");
    box.className = "portfolio-item";

    const img = document.createElement("img");
    img.src = item.src;

    const title = document.createElement("div");
    title.className = "img-title";
    title.innerText = item.title;

    box.appendChild(img);
    box.appendChild(title);
    content.appendChild(box);
  });

  overlay.style.display = "flex";
}
function closeModal() {
  document.getElementById("overlay").style.display = "none";
}
function openModal(items) {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("modalContent");

  content.innerHTML = "";

  items.forEach(item => {
    const box = document.createElement("div");
    box.className = "portfolio-item";

    let media;

    if (item.type === "video") {
      media = document.createElement("video");
      media.src = item.src;
      media.controls = true;
      media.playsInline = true;
    } else {
      media = document.createElement("img");
      media.src = item.src;
    }

    const title = document.createElement("div");
    title.className = "img-title";
    title.innerText = item.title;

    box.appendChild(media);
    box.appendChild(title);
    content.appendChild(box);
  });

  overlay.style.display = "flex";
}

