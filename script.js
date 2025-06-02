// Datum und Uhrzeit
function updateDateTime() {
  const now = new Date();
  document.getElementById('date').textContent = now.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('time').textContent = now.toLocaleTimeString('de-DE');
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Motivation des Tages
const quotes = [
  "Du schaffst das!",
  "Ein kleiner Schritt heute bringt dich morgen weiter.",
  "Glaub an dich.",
  "Heute ist ein guter Tag für Fortschritt!",
  "Lächle – du machst das großartig."
];
document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];

// To-Do-Liste
function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${text}</span> <button onclick="this.parentElement.remove()">❌</button>`;
    li.onclick = () => li.classList.toggle("done");
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  const chatLog = document.getElementById("chat-log");
function appendChat(sender, text, botType = "") {
  const chatLog = document.getElementById("chat-log");
  const entry = document.createElement("div");
  entry.className = `chat-entry ${sender.includes("🤖") ? "bot-message" : ""} bot-${botType}`;
  
  let avatar = "";
  if (sender.includes("🤖")) {
    avatar = {
      romantic: "💘",
      roast: "🔥"
    }[botType] || "🤖";

    const likeBtn = `<button class="like-button" onclick="saveFavorite('${botType}', \`${text}\`)">⭐</button>`;
    entry.innerHTML = `<strong>${avatar} ${sender}:</strong> ${text} ${likeBtn}`;
  } else {
    entry.innerHTML = `<strong>${sender}:</strong> ${text}`;
  }

  chatLog.appendChild(entry);
  chatLog.scrollTop = chatLog.scrollHeight;
}

  saveToHistory("👤 Du", message);

  const bot = document.getElementById("bot-select").value;
  const msg = message.toLowerCase();
  let response = "Ich bin mir nicht sicher, wie ich antworten soll 🤔";

  // 🔓 Admin-Code
  if (msg === "danieldev") {
    showAllHistory();
    input.value = "";
    return;
  }


const romanticLines = [
  "Bist du ein Dieb? Du hast mein Herz gestohlen.",
  "Du bringst mein Herz zum Rasen – ohne Führerschein.",
  "Wenn Blicke töten könnten, wär ich tot – vor Liebe.",
  "Dein Lächeln hat mein Tag gerettet.",
  "Ich kann nicht aufhören, an dich zu denken.",
  "Mit dir sieht die Welt schöner aus.",
  "Ich wollte dir was Süßes schicken – aber du liest es ja gerade.",
  "Du bist wie ein Sonnenaufgang nach einer langen Nacht.",
  "Wenn du lächelst, friert mein Herz kurz ein.",
  "Ich hab das Passwort zu meinem Herzen geändert – es heißt jetzt dein Name.",
  "Du bist mein Lieblingsmensch.",
  "Kannst du mir die Zeit sagen? Ich hab mich in deinen Augen verloren.",
  "Ich würde dich lieber kennenlernen als jede Serie der Welt schauen.",
  "Du bist wie der Frühling – alles blüht, wenn du da bist.",
  "Du bist die Antwort auf meine Lieblingsfrage.",
  "Ich glaub, mein Herz hat sich verläuft – es schlägt nur für dich.",
  "Du bist wie Schokolade – süß, unwiderstehlich und macht süchtig.",
  "Ich wollte dir eine Blume schenken, aber du bist schöner.",
  "Ich wusste nicht, dass Engel WLAN benutzen.",
  "Hör auf, so süß zu sein – ich krieg Zahnschmerzen.",
  "Deine Stimme klingt wie mein Lieblingslied.",
];
response = romanticLines[Math.floor(Math.random() * romanticLines.length)];
const roasts = [
  "Du bist der Grund, warum es auf Stiften Radiergummis gibt.",
  "Wenn Dummheit weh tun würde, wärst du ein Dauerpfeifton.",
  "Du hast so viel Charisma wie ein leerer Joghurtbecher.",
  "Selbst Google findet keine Ergebnisse für dein Niveau.",
  "Du bist der Beweis, dass Evolution auch rückwärts gehen kann.",
  "Dein Gesicht ist der Grund, warum der Spiegel traurig ist.",
  "Wenn du ein Tier wärst, wärst du ein Failaffe.",
  "Du hast die emotionale Tiefe eines Toastbrots.",
  "Du bist wie ein WLAN in der U-Bahn – nutzlos.",
  "Dein Humor ist wie dein Style: nicht vorhanden.",
  "Du redest wie ein Podcast, den niemand abonniert hat.",
  "Sogar dein Schatten will nichts mit dir zu tun haben.",
  "Ich hab mit intelligenteren Steinen gesprochen.",
  "Wenn du cool wärst, wär Eiswasser Lava.",
  "Du bist wie ein Plot Hole – sinnlos und nervig.",
  "Du bist der menschgewordene Ladebalken – langsam und unnötig.",
  "Du bist nicht auf dem Holzweg – du bist der ganze Wald.",
  "Ich hab deine Meinung gehört – sie ist abgelehnt.",
  "Wenn du 'Plan B' bist, bleib ich lieber planlos.",
  "Du bringst sogar Schwerkraft dazu, dich fallen zu lassen.",
  "Dein IQ ist wie dein WLAN – abgebrochen.",
];
response = roasts[Math.floor(Math.random() * roasts.length)];


  


  setTimeout(() => {
    appendChat(`🤖 ${getBotName(bot)}`, response, bot);
    saveToHistory(`🤖 ${getBotName(bot)}`, response);
  }, 600);

  input.value = "";
}

// 👇 Chat darstellen
function appendChat(sender, text, botType = "") {
  const chatLog = document.getElementById("chat-log");
  const entry = document.createElement("div");
  entry.className = `chat-entry ${sender.includes("🤖") ? "bot-message" : ""} bot-${botType}`;
  let avatar = "";

  if (sender.includes("🤖")) {
    avatar = {
      romantic: "💘",
      roast: "🔥"
    }[botType] || "🤖";
    entry.innerHTML = `<strong>${avatar} ${sender}:</strong> ${text}`;
  } else {
    entry.innerHTML = `<strong>${sender}:</strong> ${text}`;
  }

  chatLog.appendChild(entry);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotName(bot) {
  return bot === "win" ? "WinBot" : bot === "romantic" ? "RomantikBot" : "RoastBot";
}

// 👇 Verlauf speichern
function saveToHistory(sender, text) {
  let history = JSON.parse(localStorage.getItem("chatHistory") || "[]");
  history.push({ sender, text });
  localStorage.setItem("chatHistory", JSON.stringify(history));
}

// 🔓 Alle Chatverläufe anzeigen
function showAllHistory() {
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML = "<h4>📜 Chatverläufe (Admin-Ansicht)</h4>";
  const history = JSON.parse(localStorage.getItem("chatHistory") || "[]");

  history.forEach(item => {
    const entry = document.createElement("div");
    entry.className = "chat-entry";
    entry.innerHTML = `<strong>${item.sender}:</strong> ${item.text}`;
    chatLog.appendChild(entry);
  });
}
function saveFavorite(bot, text) {
  let favorites = JSON.parse(localStorage.getItem("botFavorites") || "{}");
  if (!favorites[bot]) favorites[bot] = [];

  if (!favorites[bot].includes(text)) {
    favorites[bot].push(text);
    localStorage.setItem("botFavorites", JSON.stringify(favorites));
    alert("⭐ Spruch wurde zu deinen Favoriten hinzugefügt!");
  } else {
    alert("❗ Dieser Spruch ist schon in deinen Favoriten.");
  }
}
function showFavorites() {
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML = "<h4>🌟 Deine Lieblingssprüche</h4>";
  const favorites = JSON.parse(localStorage.getItem("botFavorites") || "{}");

  if (!Object.keys(favorites).length) {
    chatLog.innerHTML += "<p>Keine Favoriten vorhanden.</p>";
    return;
  }

  for (const bot in favorites) {
    chatLog.innerHTML += `<h5>${bot === "romantic" ? "💘 RomantikBot" : "🔥 RoastBot"}</h5>`;
    favorites[bot].forEach((text, index) => {
      const entry = document.createElement("div");
      entry.className = "favorite-entry";
      entry.innerHTML = `– ${text} <button class="delete-button" onclick="deleteFavorite('${bot}', ${index})">❌</button>`;
      chatLog.appendChild(entry);
    });
  }
}
function deleteFavorite(bot, index) {
  let favorites = JSON.parse(localStorage.getItem("botFavorites") || "{}");
  if (favorites[bot]) {
    favorites[bot].splice(index, 1); // Spruch entfernen
    if (favorites[bot].length === 0) {
      delete favorites[bot]; // Bot-Gruppe löschen, wenn leer
    }
    localStorage.setItem("botFavorites", JSON.stringify(favorites));
    showFavorites(); // Anzeige aktualisieren
  }
}
function deleteFavorite(bot, index) {
  let favorites = JSON.parse(localStorage.getItem("botFavorites") || "{}");
  if (favorites[bot]) {
    favorites[bot].splice(index, 1); // Spruch entfernen
    if (favorites[bot].length === 0) {
      delete favorites[bot]; // Bot-Gruppe löschen, wenn leer
    }
    localStorage.setItem("botFavorites", JSON.stringify(favorites));
    showFavorites(); // Anzeige aktualisieren
  }
}
function addEvent(e) {
  e.preventDefault();
  const name = document.getElementById("event-name").value;
  const date = document.getElementById("event-date").value;
  const start = document.getElementById("event-start").value;
  const end = document.getElementById("event-end").value;

  const events = JSON.parse(localStorage.getItem("events") || "[]");
  events.push({ name, date, start, end });
  localStorage.setItem("events", JSON.stringify(events));

  document.getElementById("event-form").reset();
  renderEvents();
}
function renderEvents() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";

  const events = JSON.parse(localStorage.getItem("events") || "[]");

  if (events.length === 0) {
    eventList.innerHTML = "<p>Keine Ereignisse eingetragen.</p>";
    return;
  }

  events.forEach(event => {
    const now = new Date();
    const eventDate = new Date(event.date + "T00:00:00");
    const diffTime = eventDate - now;
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const entry = document.createElement("div");
    entry.className = "event-entry";
    entry.innerHTML = `
      <strong>${event.name}</strong><br>
      📅 Datum: ${event.date}<br>
      ⏰ Von ${event.start} bis ${event.end}<br>
      🕒 Noch ${daysLeft >= 0 ? daysLeft + " Tag(e)" : "bereits vorbei"}<br>
      <button onclick="deleteEvent('${event.name}', '${event.date}')">❌ Entfernen</button>
    `;
    eventList.appendChild(entry);
  });
}
function deleteEvent(name, date) {
  let events = JSON.parse(localStorage.getItem("events") || "[]");
  events = events.filter(ev => !(ev.name === name && ev.date === date));
  localStorage.setItem("events", JSON.stringify(events));
  renderEvents();
}
document.addEventListener("DOMContentLoaded", renderEvents);
function addEvent(e) {
  e.preventDefault();
  const name = document.getElementById("event-name").value;
  const date = document.getElementById("event-date").value;
  const start = document.getElementById("event-start").value;
  const end = document.getElementById("event-end").value;
  const repeat = document.getElementById("event-repeat").checked;

  const events = JSON.parse(localStorage.getItem("events") || "[]");
  events.push({ name, date, start, end, repeat });
  localStorage.setItem("events", JSON.stringify(events));

  document.getElementById("event-form").reset();
  renderEvents();
}
function renderEvents() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";
  const events = JSON.parse(localStorage.getItem("events") || "[]");

  if (events.length === 0) {
    eventList.innerHTML = "<p>Keine Ereignisse eingetragen.</p>";
    return;
  }

  const now = new Date();

  events.forEach(event => {
    let eventDate = new Date(event.date + "T00:00:00");

    // 🔁 Falls jährlich wiederholt, verwende aktuelles Jahr
    if (event.repeat) {
      eventDate.setFullYear(now.getFullYear());
      // Wenn dieses Jahr vorbei: aufs nächste Jahr setzen
      if (eventDate < now) {
        eventDate.setFullYear(now.getFullYear() + 1);
      }
    }

    const diffTime = eventDate - now;
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 🎨 Farbcode
    let color = "#d3f9d8"; // Grün
    if (daysLeft <= 7 && daysLeft > 0) color = "#fff3cd"; // Gelb
    if (daysLeft <= 0) color = "#f8d7da"; // Rot

    const entry = document.createElement("div");
    entry.className = "event-entry";
    entry.style.backgroundColor = color;

    entry.innerHTML = `
      <strong>${event.name}</strong><br>
      📅 Datum: ${event.date} ${event.repeat ? "(jährlich)" : ""}<br>
      ⏰ Von ${event.start} bis ${event.end}<br>
      🕒 Noch ${daysLeft >= 0 ? daysLeft + " Tag(e)" : "bereits vorbei"}<br>
      <button onclick="deleteEvent('${event.name}', '${event.date}')">❌ Entfernen</button>
    `;
    eventList.appendChild(entry);
  });
}
// Hilfsfunktion: Passwort verschlüsseln (Base64 – einfaches Beispiel)
function encrypt(text) {
  return btoa(text);
}

function register() {
  const username = document.getElementById("auth-username").value.trim();
  const password = document.getElementById("auth-password").value;
  const avatarInput = document.getElementById("auth-avatar");
  if (!username || !password) return alert("Bitte Benutzername und Passwort eingeben.");

  const reader = new FileReader();
  reader.onload = function () {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) return alert("Benutzer existiert bereits.");

    users[username] = {
      password: encrypt(password),
      avatar: reader.result
    };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", username);
    if (document.getElementById("auth-stay-logged-in").checked) {
      localStorage.setItem("stayLoggedIn", "true");
    }
    loadUser();
  };

  if (avatarInput.files.length > 0) {
    reader.readAsDataURL(avatarInput.files[0]);
  } else {
    reader.onload(); // falls kein Avatar
  }
}

function login() {
  const username = document.getElementById("auth-username").value.trim();
  const password = document.getElementById("auth-password").value;

  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (!users[username] || users[username].password !== encrypt(password)) {
    return alert("Benutzername oder Passwort falsch.");
  }

  localStorage.setItem("currentUser", username);
  if (document.getElementById("auth-stay-logged-in").checked) {
    localStorage.setItem("stayLoggedIn", "true");
  }
  loadUser();
}

function loadUser() {
  const user = localStorage.getItem("currentUser");
  if (!user) return;
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (!users[user]) return;

  document.getElementById("auth-container").style.display = "none";
  document.getElementById("app-content").style.display = "block";
  document.getElementById("current-user").textContent = user;
  document.getElementById("user-avatar").src = users[user].avatar || "";
}

// Automatisch einloggen, wenn „angemeldet bleiben“ aktiv
window.onload = () => {
  if (localStorage.getItem("stayLoggedIn") === "true") {
    loadUser();
  }
};
