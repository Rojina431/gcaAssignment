function calculating()
    {

      var billAmount=document.getElementById("bill_amount").value;

      var serviceQual=document.getElementById("choose").value;

      var peo=document.getElementById("people").value;

      //condition for not entering the bill amount

      if (billAmount=="")
      {  
        document.getElementById("bill_amount").style.border="1px solid red";
        document.getElementById("lbltext").style.visibility="visible";
      }

      else
      {
          document.getElementById("end_div").style.visibility="visible";
          document.getElementById("lbltext").style.visibility="hidden";
      }

      //condition for not choosing the service quality
      if (serviceQual==0)
      {   
        document.getElementById("choose").style.border="1px solid red";
        document.getElementById("lbtext").style.visibility="visible";
      }

      else
      {
          document.getElementById("end_div").style.visibility="visible";
          document.getElementById("lbtext").style.visibility="hidden";
        }


      if(billAmount==""||serviceQual==0)
      {
      	document.getElementById("end_div").style.visibility="hidden";
      }


      //condition for no of people not entered or entered as less than zero
      if(peo==""||peo<1)
      {
        document.getElementById("peotext").style.visibility="visible";
        document.getElementById("end_div").style.visibility="hidden";
      }
      else
      {
        document.getElementById("peotext").style.visibility="hidden";
      }

     
      var total=(billAmount*serviceQual)/peo;

      //round off to 2 decimal digit
      total=total.toFixed(2);

      //display the tip
      document.getElementById("tip").innerHTML=total;
    }


    