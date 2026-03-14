function loadIframe(wrapper) {
  const iframe = document.createElement("iframe");
  iframe.src = wrapper.dataset.src;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.style = "width:100%;aspect-ratio:16/9;border:none;display:block";
  wrapper.replaceWith(iframe);
}



document.querySelectorAll(".video-wrapper").forEach(wrapper => {
  if (localStorage.getItem("video-consent") === "true") {
    loadIframe(wrapper);
    return;
  }

  const overlay = document.querySelector(".video-consent-overlay");

  overlay.querySelector(".video-consent-yes").addEventListener("click", () => {
      localStorage.setItem("video-consent", "true");
      loadIframe(wrapper);
  });
  overlay.querySelector(".video-consent-no").addEventListener("click", () => {
      overlay.remove();
  });

});

console.log("load script")