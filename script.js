const text="Before you scroll... I want you to remember something.";
let i=0;
const typing=document.querySelector("#typing");
function type(){typing.textContent=text.slice(0,i++);if(i<=text.length)setTimeout(type,38)}
setTimeout(type,450);

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

const canvas=document.querySelector("#stars"),ctx=canvas.getContext("2d");
let stars=[];
function resize(){
 canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;
 canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";
 ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
 stars=Array.from({length:Math.min(130,Math.floor(innerWidth/8))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.2+Math.random()*1.2,a:.15+Math.random()*.5,s:.001+Math.random()*.004}));
}
addEventListener("resize",resize);resize();
function draw(t){
 ctx.clearRect(0,0,innerWidth,innerHeight);
 stars.forEach(s=>{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(143,210,255,${Math.max(.04,s.a+Math.sin(t*s.s+s.x)*.12)})`;ctx.fill()});
 requestAnimationFrame(draw)
}
requestAnimationFrame(draw);

const audio=document.querySelector("#bgMusic"),btn=document.querySelector("#musicBtn");
let on=false;
btn.onclick=async()=>{try{if(!on){await audio.play();on=true;btn.innerHTML="♫ <span>Music on</span>"}else{audio.pause();on=false;btn.innerHTML="♫ <span>Music</span>"}}catch(e){alert("Add assets/music.mp3 first 🎵")}};
