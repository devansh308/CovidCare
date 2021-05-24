async function fetchData()
{
  const url = "https://api.covid19india.org/data.json";
  var response = await fetch(url);
  var data = await response.json();
  var state = data.statewise;  
  var i;
  for(i=1; i<38; i++)
  {
    if(i!=31)
    {
      var flag;
      if(i>31)
      flag = i;
      else
      flag = i+1;
      
      var id = "tnm"+((flag).toString());
     document.getElementById(id).innerHTML = state[i].state;
    
      var id = "tac"+((flag).toString());
      document.getElementById(id).innerHTML = state[i].confirmed;
    
      var id = "tft"+((flag).toString());
      document.getElementById(id).innerHTML = state[i].active;

      var id = "trc"+((flag).toString());
      document.getElementById(id).innerHTML = state[i].recovered;
    
      var id = "ttdh"+((flag).toString());
      document.getElementById(id).innerHTML = state[i].deaths;
    }
  }
}
fetchData();