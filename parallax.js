
window.onload = function() {
  const mainbody = document.querySelector('#main');
  for(let i = 0; i<100; i++){
    let tempimg = document.createElement('img');
    mainbody.appendChild(tempimg);

    tempimg.id = "staricon";
    tempimg.src = "stars.png";
    tempimg.width = 20;
    tempimg.height = 20;

    let randtop = Math.floor(Math.random() * (mainbody.offsetHeight*.95)) + (mainbody.offsetHeight*.05);
    let randleft = Math.floor(Math.random() * mainbody.offsetWidth);

    let top = randtop;
    let left = randleft;

    tempimg.style.top = top + "px";
    tempimg.style.left = left + "px";

  }


}
