async function fetchData()
{
  const url = "https://api.covid19india.org/data.json";
  var response = await fetch(url);
  var data = await response.json();
  var state = data.statewise;
  var arr = [29,9,21,11,35,16,17];
  var i;
  for(i=0; i<7; i++)
  {
    var id = "nm"+((i+1).toString());
    document.getElementById(id).innerHTML = state[arr[i]].state;
    
    var id = "ac"+((i+1).toString());
    document.getElementById(id).innerHTML = state[arr[i]].confirmed;
    
    var id = "ft"+((i+1).toString());
    document.getElementById(id).innerHTML = state[arr[i]].active;

    var id = "rc"+((i+1).toString());
    document.getElementById(id).innerHTML = state[arr[i]].recovered;
    
    var id = "tdh"+((i+1).toString());
    document.getElementById(id).innerHTML = state[arr[i]].deaths;
  }
}
fetchData();
