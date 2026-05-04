const phone = "18036646656"; // ONLY CHANGE (NEW WHATSAPP NUMBER)

/* ORDER BUTTON (PRODUCTS) */
function order(product){
window.open(`https://wa.me/${phone}?text=Hello I want ${product}`);
}

/* FLOATING ORDER BUTTON */
function quickOrder(){
window.open(`https://wa.me/${phone}?text=Hello I want to place an order`);
}

/* LOADER */
window.onload=()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1000);
};

/* IMAGE MODAL VIEW */
document.querySelectorAll(".product-grid img").forEach(img=>{
img.onclick=()=>{
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=img.src;
};
});

document.getElementById("modal").onclick=()=>{
document.getElementById("modal").style.display="none";
};

/* SCROLL ANIMATION */
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});