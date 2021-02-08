//navbar
// Get all buttons with class="btn" inside the container
var Li = document.getElementsByClassName('item')

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < Li.length; i++) {
  Li[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// sticky navbar
const header = document.querySelector('header');
window.addEventListener('scroll' , ()=>{
  header.classList.toggle('sticky' , window.pageYOffset > 0)
});
//counter
const counters = document.querySelectorAll('.counter');
const speed = 500;

counters.forEach(counter =>{
    const updateCount =()=>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount , 1);
        }
        else{
            count.innerText = target;
        }
    }
    updateCount();
});

let btnUp = document.querySelector("#btnUp");
btnUp.addEventListener('click',function(){

  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
})
