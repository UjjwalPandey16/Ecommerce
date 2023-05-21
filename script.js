const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const nav = document.querySelector('.sidebar');

bar.addEventListener("click", function(){
    nav.classList.toggle("show-sidebar");
});

close.addEventListener("click",function(){
    nav.classList.remove("show-sidebar");
});