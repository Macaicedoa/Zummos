
let containerDescripcion = document.getElementById("div-nosotros");

let containers = containerDescripcion.getElementsByTagName("div");

// let style = window.getComputedStyle(containers[0]);
// let Xvalue = style.transform.slice(20,24);
// let xValueNew = Number(Xvalue.replace(",",""));
// console.log(xValueNew)

let counter = 1;

while(counter<3){
    for (let i = 0;i<containers.length;i++) {
    containers[i].style = "transform: translateX(-"+counter*100+"vw); transition-duration: 5s;";
    }
    counter ++; 
}
    





    

    
// for (let i = 0;i<containers.length;i++) {
//     containers[i].style = "transform: translateX(+"+0+"vw), 5000ms";
//     console.log("dvxfcv")
// }