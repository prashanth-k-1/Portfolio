(() => {
  'use strict';
  const layers = [
    ['A clear path from menu to order.', 'Guests order through a QR menu. React and TypeScript connect the customer-facing experience to restaurant operations.'],
    ['An API that protects the workflow.', 'The backend connects ordering, billing, and restaurant operations. Razorpay webhook validation checks payment events before they are trusted.'],
    ['One platform. Isolated restaurant data.', 'A PostgreSQL schema with 30+ tables and row-level security supports the multi-tenant data model.'],
    ['Orders move with the service.', 'WebSockets carry order updates to the kitchen display, connecting the guest experience to the team preparing the food.']
  ];
  const tabs = [...document.querySelectorAll('[data-layer]')];
  const panel = document.querySelector('#layer-detail');
  function select(index) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[index].id);
    panel.querySelector('b').textContent = layers[index][0];
    panel.querySelector('p').textContent = layers[index][1];
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      select(next);
      tabs[next].focus();
    });
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('in-view', entry.isIntersecting));
  }, { threshold:0.15 });
  document.querySelectorAll('.system-story,.project-feature').forEach(el => observer.observe(el));
  // Expanding a case study changes the scroll positions used by the scene rig.
  document.querySelectorAll('.project-details').forEach(el => {
    el.addEventListener('toggle', () => window.dispatchEvent(new Event('resize')));
  });
})();
