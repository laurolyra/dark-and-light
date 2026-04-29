const app = document.querySelector('#app');

const saved = localStorage.getItem('theme') ?? 'light';
document.documentElement.dataset.theme = saved;

app.innerHTML = `
  <h1>Dark &amp; Light</h1>
  <button id="toggle">Switch to ${saved === 'dark' ? 'light' : 'dark'} mode</button>
`;

document.querySelector('#toggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  document.querySelector('#toggle').textContent = `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`;
});
