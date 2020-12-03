window.onload=function(){
    let eng_month=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec'];
    setInterval(showTime,1000);
    function showTime(){
      let datetime=new Date();
      let hrstime=datetime.getHours();
      let mintime=datetime.getMinutes();
      let sectime=datetime.getSeconds();
      let date=datetime.getDay()+' '+eng_month[datetime.getMonth()]+' '+datetime.getFullYear();;
      let am_pm="AM";
      if(hrstime>12){
          hrstime-=12;
          am_pm="PM"
      }
      let time=`<div class="time"><h1>${hrstime}:${mintime}:${sectime}<sub>${am_pm}</sub></h1><br/><h3>
      ${date}</h3></div>`;
      document.getElementById('clock').innerHTML=time;
   }
}
