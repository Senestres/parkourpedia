function renderRandomPost(dataId, cardId) {
  const posts = JSON.parse(document.querySelector(dataId).textContent);
  const post = posts[Math.floor(Math.random() * posts.length)];
  const card = document.querySelector(cardId);

  card.querySelector("a").setAttribute("href", post.url);
  card.querySelector(".card-overlay").textContent = post.title || post.url;

  const img = card.querySelector(".card-img");
  if (post.coverImage || post.video) {
    img.src = post.coverImage || post.video;
    img.style.display = "";
  }
}
renderRandomPost("#move-posts", "#random-move-card");
renderRandomPost("#training-posts", "#random-training-card");

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".randomize");
  if (!btn || btn.disabled) return;
  btn.disabled = true;

  renderRandomPost(
    btn.dataset.source,
    btn.dataset.target
  );
    setTimeout(() => {
    btn.disabled = false;
  }, 400);
});
  


