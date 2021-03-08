var y=0;
function details(){
  if(y==0){
    document.getElementById("details").style.height='70px';
    y=1;
  }
  else{
    document.getElementById("details").style.height='0';
    y=0;
  }
}
function leapyear()
{
  var year=document.getElementById("yr").value;
  
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function leapyear2(year)
{

  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function loading(){
  document.getElementById("loadit").src="load.gif";
  document.getElementById("loadhide").style.display="none";
  document.getElementById("loadhide2").style.display="none";
}


function main(){
  document.getElementById("details").style.height='0';
  document.getElementById("display").innerHTML=":)";
  var d=document.getElementById("month").value;
  
  if(document.getElementById("date").value=="" || document.getElementById("yr").value=="" || document.getElementById("date").value==0 || document.getElementById("yr").value==0)
  {
    document.getElementById("emptymsg").innerHTML="input can't be empty";
    document.getElementById("emptymsg").style.display="block";
    document.getElementById("display2").innerHTML="...";
  }
  else if (document.getElementById("yr").value > 99999)
  {
    document.getElementById("emptymsg").innerHTML="year: (1 - 99999)";
    document.getElementById("emptymsg").style.display="block";
    document.getElementById("display2").innerHTML="...";
  }
  else if (d==1||d== 3||d==5 || d== 7||d== 8 ||d== 10 ||d== 12)
  {
    if (document.getElementById("date").value>31)
    {
      document.getElementById("emptymsg").innerHTML = "invalid date";
      document.getElementById("emptymsg").style.display = "block";
      document.getElementById("display2").innerHTML="...";
    }
    else
    {
      document.getElementById("emptymsg").innerHTML = "invalid date";
      document.getElementById("emptymsg").style.display = "none";
      result();
    }
  }
  else if (d== 4 ||d== 6 ||d== 9 ||d== 11)
  {
    if(document.getElementById("date").value>30)
    {
      document.getElementById("emptymsg").innerHTML = "invalid date";
      document.getElementById("emptymsg").style.display = "block";
      document.getElementById("display2").innerHTML="...";
    }
    else
    {
      document.getElementById("emptymsg").innerHTML = "invalid date";
      document.getElementById("emptymsg").style.display = "none";
      result();
    }
  }
  else if (document.getElementById("month").value==2)
  {
    if(leapyear())
    {
      if(document.getElementById("date").value>29)
      {
        document.getElementById("emptymsg").innerHTML = "invalid date";
        document.getElementById("emptymsg").style.display = "block";
        document.getElementById("display2").innerHTML="...";
      }
      else
      {
        document.getElementById("emptymsg").innerHTML = "invalid date";
        document.getElementById("emptymsg").style.display = "none";
        result();
      }
    }
    else
    {
      if (document.getElementById("date").value > 28)
      {
        document.getElementById("emptymsg").innerHTML = "invalid date";
        document.getElementById("emptymsg").style.display = "block";
        document.getElementById("display2").innerHTML="...";
      }
      else
      {
        document.getElementById("emptymsg").innerHTML = "invalid date";
        document.getElementById("emptymsg").style.display = "none";
        result();
      }
    }
  }
}
function result()
{
  var finalyear=document.getElementById("yr").value;
  var finalmonth=document.getElementById("month").value;
  var finaldate=document.getElementById("date").value;
  var i=1;
  var d=0;
  while(i<finalyear)
  {
    if (leapyear2(i))
    {
      d=(d+2);
    }
    else
    {
      d=(d+1);
    }
    i++;
  }
  
  var c=1;
  while(c<finalmonth)
  {
    switch (c)
    {
    case 1 || 3 || 5 || 7 || 8 || 10 ||12 :
        d=d+31;
        break;
    case 2 :
        if (leapyear()==1){
            d=d+29;
        }
        else {
            d=d+28;
        }
        break;
    default:
        d=d+30;
        break;
    }
    c++;
  }
  
d=d+(finaldate-1);

if (finalmonth==4 || finalmonth==5){
    d=d+1;
}
else if (finalmonth==6 || finalmonth==7){
    d=d+2;
}
else if (finalmonth==8){
    d=d+3;
}
else if (finalmonth==9 || finalmonth==10){
    d=d+4;
}
else if (finalmonth==11 |finalmonth==12){
    d=d+5;
}


switch(d%7){
    case 7 :
      document.getElementById("display2").innerHTML="Monday";
        break;
    case 0:
      document.getElementById("display2").innerHTML="Monday";
        break;
    case 1:
      document.getElementById("display2").innerHTML="Tuesday";
        break;
    case 2:
      document.getElementById("display2").innerHTML="Wednesday";
        break;
    case 3:
      document.getElementById("display2").innerHTML="Thursday";
        break;
    case 4:
      document.getElementById("display2").innerHTML="Friday";
        break;
    case 5:
      document.getElementById("display2").innerHTML="Saturday";
        break;
    case 6:
      document.getElementById("display2").innerHTML="Sunday";
        break;
    default:
        break;        
    }




  document.getElementById("display").innerHTML=finaldate+" / "+finalmonth+" / "+finalyear; 
}
