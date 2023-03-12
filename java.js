document.body.addEventListener("mousemove", myFunction);

function myFunction(e) {
  console.log(e.clientX, e.clientY);
  let x = Math.floor((e.clientX / document.documentElement.clientWidth) * 100);
  let y = Math.floor((e.clientY / document.documentElement.clientHeight) * 100);

  document.body.style.backgroundImage = `radial-gradient(circle at ${x.toString()}% ${y.toString()}%, #8787FE, blue 27%)`;


}
