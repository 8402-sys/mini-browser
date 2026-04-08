const form = document.getElementById('form');
const viewer = document.getElementById('viewer');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let url = document.getElementById('urlInput').value;

  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }

  viewer.src = `/browse?url=${url}`;
});
