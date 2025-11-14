// script.js

function toggleTheme() {
  document.body.classList.toggle('dark');

  // Save preference in localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Apply saved preference on load
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};
