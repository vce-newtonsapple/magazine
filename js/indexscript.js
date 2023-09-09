function search_func(){
    content = (document.getElementById("search_content").value).toLowerCase();
    titles = document.getElementsByClassName("block_title");
    for(var i=0; i<titles.length; i++){
        var current = (titles[i].innerHTML).toLowerCase();
        if(current.includes(content)){
            document.getElementById(titles[i].getAttribute("data-target")).style.display = "block";
        }
        else{
            document.getElementById(titles[i].getAttribute("data-target")).style.display = "none";
        }
    }
}
window.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        document.getElementsByClassName("search_btn")[0].click();
    }
});
window.onload = (event) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.api-ninjas.com/v1/counter?id=newtonsapple");
    api_key = "oyW0OIreUZGOBV6qxtFviQ==PVgpFZUr1QWkpcGZ"
    xhr.setRequestHeader("X-Api-Key", api_key);
    xhr.responseType = "json";
    xhr.onload = function() {
        var count = document.getElementById("main_count");
        count.innerHTML = `views: ${this.response.value}`;
        console.log(count.innerHTML);
    }
    xhr.send();
};
function updateViews(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.api-ninjas.com/v1/counter?id=newtonsapple&hit=true");
    api_key = "oyW0OIreUZGOBV6qxtFviQ==PVgpFZUr1QWkpcGZ"
    xhr.setRequestHeader("X-Api-Key", api_key);
    xhr.responseType = "json";
    xhr.send();
    console.log("hello");
}
function burgerClick(){
    var link_list = document.getElementsByClassName("linkList")[0];
    var style = style = window.getComputedStyle(link_list);
    var status = style.getPropertyValue('display');
    if(status == "none"){
        link_list.style.display = "block";
    }
    else{
        link_list.style.display = "none";
    }
}
function aboutMove(){
    document.getElementsByClassName("about")[0].scrollIntoView()
}

function getCurrentSlide(){
    for(var i=0; i<3; i++){
        var curr = "about_" + i;
        var elem = document.getElementById(curr);
        var status = window.getComputedStyle(elem).display;
        if(status == "block")   return i;
    }
}

function moveSlides(n){
    let num = getCurrentSlide();
    let curr = "about_" + num;
    document.getElementById(curr).style.display = "none";
    curr = "about_" + (Math.abs(num+n))%3;
    document.getElementById(curr).style.display = "block";
}

flip = 1;

function rotator(flag){
    console.log(flag);
    let elem = document.getElementById("triangle");
    if(flag == 1){
        elem.style.transform = "rotate(180deg)";
    }
    if(flag == 0){
        elem.style.transform = "rotate(-180deg)";
    }
    if(flag == 2){
        if(flip == 1){  
            elem.style.transform = "scale(-1, -1)";
            flip = 0;
        }
        else{
            elem.style.transform = "scale(1, 1)";
            flip = 1;
        }
    }
}