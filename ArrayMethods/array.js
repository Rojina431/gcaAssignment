function favoritePlace(){
   let places=["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
   places.splice(3,1,'Butwal','Hetauda')
   let no=places.length;
   let result=`<p>These ${no} places are my favorite places:</p><p>${places}</p>`
   document.getElementById('places').innerHTML=result;
}