// Project filters work without a build tool or external libraries.
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project-card[data-tags]');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach(project => {
      project.hidden = filter !== 'all' && !project.dataset.tags.split(' ').includes(filter);
    });
  });
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
