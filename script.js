const gridContainer = document.getElementById('grid');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.className = 'grid-item';
  cell.addEventListener('click', () => {
    cell.classList.toggle('active');
  });
  gridContainer.appendChild(cell);
}
