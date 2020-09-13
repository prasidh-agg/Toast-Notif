const btn = document.getElementById("btn");
const container = document.getElementById("container");
let img = document.getElementById("img");
var counter=0;
var length=0;

btn.addEventListener("click", () => {
    createNotification();
	randomBg();
});

function randomBg() {
	
	var x = Math.floor(Math.random() * 360);
	var bgcolor= "hsl(" + x + "," + "90%,40%)";
	console.log(bgcolor);

	document.body.style.background= bgcolor;
	
}

function createNotification() {
	if(length==0){counter=0;}
	length++;
	counter++;

    const notif = document.createElement("div");

    if(counter%4==0){
    	notif.classList.add("toast-green");
    	notif.innerText="Taa Ra Ra";
        img.classList.toggle("active");
    }
    else{
    notif.classList.add("toast");
    notif.innerText = "Tunak Tunak Tun";
    img.classList.remove("active");
}

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    	length--;
    }, 3000);

}
