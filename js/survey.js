function goNext()
{
  if(a.style.display=="block")
  {
    a.style.display="none";
    b.style.display="block";
  }
  else if(b.style.display=="block")
  {
    if(userName.value=="")
    {
      document.getElementById("warn1"). innerHTML="Name cannot be empty!";
      userName.style.borderColor="red";
    }
    else
    {
      b.style.display="none";
      c.style.display="block";
    }

    var firstName=(userName.value).split(" ");
    var n=firstName[0];

    document.getElementById("msg").innerHTML="Hey "+n+"! Please wait while we load the results for you";
  }
  else if(c.style.display=="block")
  {
    c.style.display="none";
    d.style.display="block";
    
  }
  else if(d.style.display=="block")
  {
    if(age.value>0 && age.value<100)
    {
      d.style.display="none";
      e.style.display="block";
    }
    else
    {
      document.getElementById("warn2"). innerHTML="Please enter a valid age!";
      age.style.borderColor="red";
    }
  }
  else if(e.style.display=="block")
  {
    e.style.display="none";
    f.style.display="block";
  }
  else if(f.style.display=="block")
  {
    f.style.display="none";
    g.style.display="block";
  }
  else if(h.style.display=="block")
  {
    h.style.display="none";
    last.style.display="block";
  }
}

function goBack()
{
  if(f.style.display=="block")
  {
    f.style.display="none";
    e.style.display="block";
  }
  else if(b.style.display=="block")
  {
    b.style.display="none";
    a.style.display="block";
  }
  else if(c.style.display=="block")
  {
    c.style.display="none";
    b.style.display="block";
  }
  else if(d.style.display=="block")
  {
    d.style.display="none";
    c.style.display="block";
  }
  else if(e.style.display=="block")
  {
    e.style.display="none";
    d.style.display="block";
  }
}

function calculateTick()
{
  var count=0;
  var i;
  for(i=1; i<=16; i++)
  {
    var id = "cb"+((i).toString());
    if(document.getElementById(id).checked==true)
    {
      if(i<=10)
      count+=2;
      else
      count++;
    }
  }
  var message;
  if(count>15)
  {
    message = "You are at a high risk of Covid-19. Please get an appointment from a doctor!";
    last.style.backgroundColor="#b30000";
    goto.style.color="#b30000";
  }
  else if(count>10)
  {
    message = "You are at moderate risk of Covid-19. Stay quarantined and Take Care!";
    last.style.backgroundColor="#e6b800";
    goto.style.color="#e6b800";
  }
  else 
  {
    message = "You are not at risk of Covid-19. Stay Home Stay Safe!";
    last.style.backgroundColor="#29a329";
    goto.style.color="#29a329";
  }
  res.innerHTML=message;
}



