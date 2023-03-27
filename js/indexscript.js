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
    console.log("hellworld");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/NAmarch2k23.com/mainArticle");
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
    xhr.open("GET", "https://api.countapi.xyz/hit/NAmarch2k23.com/mainArticle");
    xhr.responseType = "json";
    xhr.onload = function() {
        var count = document.getElementById("main_count");
        count.innerHTML = `views: ${this.response.value}`;
        console.log(count.innerHTML);
        // alert(`This button has been clicked ${this.response.value} times!`);
    }
    xhr.send();
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
