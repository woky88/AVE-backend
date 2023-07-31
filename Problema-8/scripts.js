function displayImages() {
  var num = document.getElementById('num').value;
  var imageContainer = document.getElementById('image-container');

  imageContainer.innerHTML = '';
  imageContainer.style.gridTemplateColumns = '';

  if (num < 1 || num > 15) {
    alert('Ingrese un numero entre 1 y 15');
    return;
  }

  var columns = num;
  if (num > 7) {
    columns = num % 2 == 0 ? num / 2 : Math.floor(num / 2) + 1;
  }

  imageContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  for (let i = 0; i < num; i++) {
    var img = document.createElement('img');
    img.src = 'https://picsum.photos/100/100?random=' + i;
    imageContainer.appendChild(img);
  }
}
