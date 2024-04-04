const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
const altText = {
    "pic1.jpg":"Ottis sleeping",
    "pic2.jpg":"Ottis with gloves",
    "pic3.jpg":"Ottis holding a milk carton",
    "pic4.jpg":"Ottis in a shirt",
    "pic5.jpg":"Ottis outside"}

for (const photo of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${photo}`);
    newImage.setAttribute('alt', altText[photo]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
});

}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
