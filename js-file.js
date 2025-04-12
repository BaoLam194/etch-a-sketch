let body=document.querySelector("body");

function handleLeave(e){
    e.target.style.backgroundColor="white";
}



function setupContainer(container){
    container.setAttribute("class", "container");

    container.style.display="flex";
    container.style.flexWrap="wrap";
    container.style.flex="1 1 100%";
    container.style.width="80%";
    container.style.justifyContent="space-between";
}

let container =document.createElement("div")
setupContainer(container);


let bigWidth = screen.width * 80/100;

function createGridIntoContainer(n,container){
    for(let i =1;i<=n*n;i++){
        let sq = document.createElement("div");
        sq.style.border="1px solid black";
        let temp = bigWidth - 4*n;
        temp /=n;
        temp = temp*100/(bigWidth-2*n);
        sq.style.margin ="0";
        sq.style.flex =`1 1 ${temp}%`;
        sq.style.height ="45px";
        
        sq.addEventListener("mouseenter",function(e){
            if(!sq.style.backgroundColor || sq.style.backgroundColor=="white") sq.style.backgroundColor=randomRGB();
        });
        sq.addEventListener("mouseleave",handleLeave);
    
    
        container.appendChild(sq);
    }
}
createGridIntoContainer(25,container);

body.appendChild(container);


let but =document.querySelector(".btn");
but.addEventListener("click", function(e){
    let n=prompt("Enter the size of grid you want, for example: 5 for 5x5 grid.");
    
    n=Number(n);
    console.log(n, typeof n);
    if(typeof n != "number") {
        alert("Please only input numbers");
        return;
    }
    if(n > 50){
        alert("Please be aware that big n will result in bad grid\nIt is optimal at most 40");
    }
    let oldcontainer=document.querySelector(".container");
    body.removeChild(oldcontainer);
    let newcontainer=document.createElement("div");
    setupContainer(newcontainer);
    createGridIntoContainer(n,newcontainer);
    body.appendChild(newcontainer);
});

function randomRGB(){
    function ranNum(n){
        return Math.random()*n;
    }
    return `rgb(${ranNum(255)}, ${ranNum(255)}, ${ranNum(255)})`;
}



let resetButton = document.querySelector(".btnre");
resetButton.addEventListener("click", function(e){
    let currentContainer=document.querySelector(".container");
    for(let child of currentContainer.children){
        child.style.backgroundColor="white";
    }
});

let toggleButton = document.querySelector(".btntog");
let toggleBoolean = false;
toggleButton.addEventListener("click",function(e){
    let currentContainer=document.querySelector(".container");
    if(toggleBoolean == false){
        toggleButton.textContent="Draw-Enabled";
        
        for(let child of currentContainer.children){
            child.removeEventListener("mouseleave",handleLeave);
        }
    }
    else{
        toggleButton.textContent="Draw-Disabled";
        for(let child of currentContainer.children){
            child.addEventListener("mouseleave",handleLeave);
        }
    }
    toggleBoolean =!toggleBoolean;
});