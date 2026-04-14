 let clubs = [
  "StoneKick Wien",
  "Alpen Kicker",
  "Hill Masters",
  "FC Geröll Graz",
  "Boulder Bashers Linz",
  "Tiroler Trittverein",
  "Salzburg Stone Strikers",
  "Kärnten Kick Crew",
  "Steinwurf Union Innsbruck",
  "Rock Rangers Niederösterreich",
  "Mountain Kickers Vorarlberg",
  "Gravel Gladiators",
  "Die Hügel Helden",
  "SteinSchub Squad",
  "Peak Pushers Club"
];

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderClubs() {
  const list = document.getElementById("clubList");
  list.innerHTML = "";
  clubs.forEach(club => {
    const li = document.createElement("li");
    li.textContent = club;
    list.appendChild(li);
  });
}

function addClub() {
  const input = document.getElementById("clubInput");
  if (input.value.trim() !== "") {
    clubs.push(input.value);
    input.value = "";
    renderClubs();
  }
}

let position = 0;
function kickStone() {
  const stone = document.getElementById("stone");
  position += Math.random() * 30;
  if (position > 260) {
    alert("🏆 Geschafft! Der Stein ist oben!");
    position = 0;
  }
  stone.style.bottom = position + "px";
}

// Init
renderClubs();

