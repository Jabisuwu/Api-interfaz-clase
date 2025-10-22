async function mostrarGato() {
  const img = document.getElementById('gato');
  img.style.opacity = 0;

  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    img.src = data[0].url;
    img.onload = () => {
      img.style.opacity = 1;
    };
  } catch (error) {
    console.error('Error al obtener el gato:', error);
  }
}