function wordCount(){
  let text=document.getElementById("textInput").value.trim();
  let count=text?text.split(/\s+/).length:0;
  document.getElementById("wordResult").innerText="Words: "+count;
}

function generatePassword(){
  let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
  let pass="";
  for(let i=0;i<12;i++){
    pass+=chars[Math.floor(Math.random()*chars.length)];
  }
  document.getElementById("passResult").innerText=pass;
}

function checkStrength(){
  let p=document.getElementById("strengthInput").value;
  let strength="Weak";
  if(p.length>10) strength="Medium";
  if(p.length>15) strength="Strong";
  document.getElementById("strengthResult").innerText=strength;
}

function toUpper(){
  let t=document.getElementById("convertText").value;
  document.getElementById("convertResult").innerText=t.toUpperCase();
}

function toLower(){
  let t=document.getElementById("convertText").value;
  document.getElementById("convertResult").innerText=t.toLowerCase();
}

function randomNumber(){
  document.getElementById("randomResult").innerText=Math.floor(Math.random()*10000);
}

function cleanText(){
  let t=document.getElementById("cleanInput").value;
  let cleaned=t.replace(/[^\w\s]/gi,"");
  document.getElementById("cleanResult").innerText=cleaned;
}

function reverseText(){
  let t=document.getElementById("reverseInput").value;
  document.getElementById("reverseResult").innerText=t.split("").reverse().join("");
}

function generateQR(){
  let t=document.getElementById("qrText").value;
  document.getElementById("qrResult").innerHTML=
  `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${t}">`;
}

function formatJSON(){
  try{
    let t=document.getElementById("jsonInput").value;
    let obj=JSON.parse(t);
    document.getElementById("jsonResult").innerText=
    JSON.stringify(obj,null,2);
  }catch(e){
    document.getElementById("jsonResult").innerText="Invalid JSON";
  }
}

function encodeURL(){
  let t=document.getElementById("urlInput").value;
  document.getElementById("urlResult").innerText=encodeURIComponent(t);
}

function decodeURL(){
  let t=document.getElementById("urlInput").value;
  document.getElementById("urlResult").innerText=decodeURIComponent(t);
}

function filterTools(){
  let val=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    let name=card.getAttribute("data-name")||"";
    card.style.display=name.includes(val)?"block":"none";
  });
}

function copyText(id){
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  alert("Copied!");
}