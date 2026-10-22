
const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Great! Your app is working.";
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        console.log("Service worker registered successfully.");
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}
