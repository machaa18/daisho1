const helloBtn=document.getElementById("hellobBtn");
const message=document.getElementById("message");

helloBtn.addEventListener("click",()=>{
    const hour=newDate().getHours();
    let greeting="こんにちは！";
    if(hour<12){
        greeting="おはようございます！";
    }else if(hour>=18){
        greeting="こんばんは！";
    }
    message.textContent='${greeting}GitHub Pages の公開に成功しました！';
});