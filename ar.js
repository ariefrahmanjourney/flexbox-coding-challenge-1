document.getElementById('sidebar-menu').style.display = "none";
var menus = document.querySelector('#menus');
menus.addEventListener("click",function(){
    document.getElementById('sidebar-menu').style.display = "block";
});
var times = document.querySelector('#times');
times.addEventListener("click",function(){
    document.getElementById('sidebar-menu').style.display = "none";
});
