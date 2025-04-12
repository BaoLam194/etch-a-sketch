let body=document.querySelector("body");
let container =document.createElement("div")

container.setAttribute("class", "container");

container.style.display="flex";
container.style.flexWrap="wrap";
container.style.flex="1 1 100%";
container.style.width="80%";
container.style.justifyContent="space-between";

for(let i =1;i<=256;i++){
    let sq = document.createElement("div");
    sq.style.border="1px solid black";
    sq.style.flex="1 1 6%";
    sq.style.height ="45px";

    sq.addEventListener("mouseenter",function(e){
        sq.style.backgroundColor="black";
    });
    sq.addEventListener("mouseleave",function(e){
        sq.style.backgroundColor="white";
    });



    container.appendChild(sq);
}

body.appendChild(container);
