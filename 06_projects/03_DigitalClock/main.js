const clock=document.getElementById('clock');

setInterval(()=>{
    const date=new Date();
    // clock.innerHTML=date.toLocaleTimeString();  //Local time string displas the time in the user's local timezone
    clock.innerHTML=date.toLocaleTimeString();
},1000);