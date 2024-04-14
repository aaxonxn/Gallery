const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

  
  const images = ['spider1.jpg', 'spider2.jpg', 'spider3.jpg', 'spider4.jpg', 'spider5.jpg'];
const alts = {
  'spider1.jpg': 'Icon of 1',
  'spider2.jpg': 'Icon of 2',
  'spider3.jpg': 'Icon of 3',
  'spider4.jpg': 'Icon of 4',
  'spider5.jpg': 'Icon of 5',
};

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.getAttribute('src');
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
