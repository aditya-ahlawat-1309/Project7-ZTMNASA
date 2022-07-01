const API_URL = "https://ztm-nasa.herokuapp.com";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const res = await fetch(`${API_URL}/planets`);
  return res.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
const res =  await fetch(`${API_URL}/launches`);
const fetchedLaunches = await res.json();
return fetchedLaunches.sort((a, b) => {
  return a.flightNumber - b.flightNumber;
});
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try{
return await fetch(`${API_URL}/launches`,{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(launch),
  })
  }
  catch(err){
    return {
      ok:false,
    };
  }
  
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try{
  return await fetch(`${API_URL}/launches/${id}`,{
    method: "delete",

  });
}catch(err){
  return {
ok:false,
  }
}
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};