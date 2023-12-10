// Get All Elements using the document
let title = document.querySelector(".title");
let ul = document.getElementsByTagName("ul")[0];
let reload = document.getElementsByClassName("reload")[0];

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", function () {
  onLine();
});

window.addEventListener("offline", function () {
  offLine();
});

reload.onclick = function () {
  window.location.reload();
};

function onLine() {
  title.innerHTML = `Online Now`;
  title.style.color = `green`;
  ul.classList.add("hide");
  reload.classList.add("hide");
}

function offLine() {
  title.innerHTML = `Offline Now`;
  title.style.color = `#666`;
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}
