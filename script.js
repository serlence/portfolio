// Простые функции для работы сайта
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCopyEmail();
  initRandomQuote();
  initPageEnterAnimation();
});

// Переключение темы (темная/светлая)
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  let currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Устанавливаем начальную тему
  setTheme(currentTheme);
  
  // При клике переключаем тему
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
  });
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// Плавное появление страницы при входе
function initPageEnterAnimation() {
  // Удаляем класс после первой отрисовки, чтобы сработал transition
  requestAnimationFrame(() => {
    document.body.classList.remove('preload');
  });
}

function initCopyEmail() {
  const emailElems = document.querySelectorAll('.copy-email');
  emailElems.forEach(el => {
    el.addEventListener('click', async () => {
      const text = el.textContent.trim();
      await navigator.clipboard.writeText(text);
      const original = el.textContent;
      el.textContent = 'Copied!';

    });
  });
}


// Простой рандомизатор цитаты по клику
function initRandomQuote() {
  const box = document.querySelector('.quote-box');
  const text = document.querySelector('.quote-text');
  const author = document.querySelector('.quote-author');

  const quotes = [
    { t: 'Talk is cheap. Show me the code.', a: 'Linus Torvalds' },
    { t: 'First, solve the problem. Then, write the code.', a: 'John Johnson' },
    { t: 'Simplicity is the soul of efficiency.', a: 'Austin Freeman' },
    { t: 'With great power comes great electricity bill', a: 'Dr. Who' }
  ];

  box.style.cursor = 'pointer';
  box.title = 'Click to change quote';
  box.addEventListener('click', () => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    text.textContent = q.t;
    author.textContent = `- ${q.a}`;
  });
}

