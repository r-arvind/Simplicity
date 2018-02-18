function execute(id) {
    document.getElementById(id).classList.toggle("change");  
} 

var i=0;

//closing the nav by clicking anywhere on screen when it is open
function closeNav(){
    if(i!=0){
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("rest-body").style.opacity = "1";
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    execute('sidebar');
    i=0;}
}


//opening and closing nav when clicking the button
function Nav(){
    if(i==0){
        document.getElementById("mySidenav").style.width = "250px"
        document.getElementById("rest-body").style.opacity = "0.2";
        document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
        i=2;}
  else{
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("rest-body").style.opacity = "1";
        document.getElementsByTagName("BODY")[0].style.overflow = "auto";
        i=0;}
}

