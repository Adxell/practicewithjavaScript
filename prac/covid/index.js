window.onload = start;

function start() {
  let search = document.getElementById("search");
  search.addEventListener("click", searchClick);
}
async function loadUrl(url) {
  let result = await fetch(url);
  return result.json();
}
async function searchClick() {
  let country = document.querySelector("#select").value;
  let date = document.querySelector("#inputDate").value;
  let data = await loadUrl(
    `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`
  );
  let query = data.dates[`${date}`].countries[country];
  document.getElementById("today_confirmed").innerHTML = query.today_confirmed;
  document.getElementById("today_deaths").innerHTML = query.today_deaths;
  document.getElementById(
    "today_hospitalised_patients_with_symptoms"
  ).innerHTML = query.today_hospitalised_patients_with_symptoms;
  document.getElementById("today_intensive_care").innerHTML = query.today_intensive_care;
  document.getElementById("today_new_confirmed").innerHTML = query.today_new_confirmed;
  document.getElementById("today_new_deaths").innerHTML = query.today_new_deaths;
  document.getElementById("today_new_intensive_care").innerHTML =
    query.today_new_intensive_care;
  document.getElementById("today_new_open_cases").innerHTML =
    query.today_new_open_cases;
  document.getElementById("today_new_recovered").innerHTML =
    query.today_new_recovered;
  document.getElementById("today_new_total_hospitalised_patients").innerHTML =
    query.today_new_total_hospitalised_patients;
  document.getElementById("today_recovered").innerHTML = query.today_recovered;
}
