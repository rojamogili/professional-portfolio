const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const companyHeaders = document.querySelectorAll('.company-header');
companyHeaders.forEach((button) => {
  button.addEventListener('click', () => {
    const companyCard = button.closest('.company-card');
    if (!companyCard) return;

    const isOpen = companyCard.classList.contains('open');

    companyHeaders.forEach((item) => {
      const card = item.closest('.company-card');
      if (card) {
        card.classList.remove('open');
        item.setAttribute('aria-expanded', 'false');
      }
    });

    if (!isOpen) {
      companyCard.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

const projectToggles = document.querySelectorAll('.project-toggle');
projectToggles.forEach((button) => {
  button.addEventListener('click', () => {
    const accordion = button.closest('.project-accordion');
    if (!accordion) return;

    const isOpen = accordion.classList.contains('open');

    const siblings = accordion.parentElement?.querySelectorAll('.project-accordion') || [];
    siblings.forEach((item) => {
      item.classList.remove('open');
      const toggle = item.querySelector('.project-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      accordion.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});


