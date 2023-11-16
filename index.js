const hourE1=document.getElementById("hour");
const minutesE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");
const ampmE1=document.getElementById("ampm");

function changebg(){
    const images=[
        'url("https://images.unsplash.com/photo-1671154765825-7426a9532ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1671452740241-102b68df545c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1671167831465-8c3b480f7a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1671452740241-102b68df545c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1670272590027-72888b060829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1671436330188-0bfb33687b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1671434921057-b35fec191377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60")',
        'url("https://images.unsplash.com/photo-1671050578787-e271e550ba0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")'
    ]
    const body=document.querySelector('body');
    const bg=images[Math.floor(Math.random()*images.length)];
    body.style.backgroundImage=bg;

}
setInterval(changebg,5000)

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am= h>=12 ? "PM" : "AM";

    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;

    hourE1.innerText=h;
    minutesE1.innerText=m;
    secondE1.innerText=s;
    ampmE1.innerText = am;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()
