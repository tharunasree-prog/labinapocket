let currentData = null;

// --- 1. BUILT-IN HACKATHON DEMO PRESETS (100% OFFLINE SAFE) ---
const PRESETS = {
  cliff: {
    topic: "Projectile Motion — Horizontal Inertia Bug",
    vars: "u (Initial Velocity) = 15 m/s  |  h (Cliff Height) = 45 m",
    error: "⚠️ Conceptual Flaw Detected: You drew the ball dropping straight down at the cliff edge, ignoring horizontal inertia (u = 15 m/s).",
    socratic: "🤔 Socratic Check: Without air drag, what happens to the 15 m/s horizontal speed after leaving the cliff?  👉 [Answer: It stays constant, creating a parabolic curve!]",
    vocab: ["ముందుకు వెళ్లే వేగం → Horizontal Velocity (ux)", "వంపు మార్గం → Parabolic Trajectory"],
    voice: {
      "te-IN": "మీరు గీసిన diagram లో బంతి కొండ అంచు నుండి నేరుగా కింద పడుతున్నట్లు గీశారు. కానీ Horizontal Velocity 15 meters per second ఉండటం వల్ల అది Parabolic trajectory లో ముందుకు వెళ్లి పడుతుంది. Fix బటన్ నొక్కి చూడండి!",
      "hi-IN": "आपने अपने चित्र में गेंद को चट्टान से सीधा नीचे गिरते हुए दिखाया है। लेकिन 15 m/s के Horizontal Velocity के कारण यह Parabolic पथ में आगे जाकर गिरेगी।",
      "ta-IN": "உங்கள் படத்தில் பந்து செங்குத்தாக கீழே விழுவது போல் வரைந்துள்ளீர்கள். ஆனால் கிடைமட்ட வேகம் இருப்பதால் அது பரவளைய பாதையில் செல்லும்.",
      "en-IN": "In your notebook sketch, you drew the ball dropping straight down. Because of its 15 meters per second horizontal velocity, it follows a parabolic trajectory. Click Fix to compare!"
    },
    components: [
      { label: "Cliff & Rolling Ball (u=15 m/s)", box: [70, 100, 235, 165], err: false },
      { label: "Flawed Vertical Drop Vector", box: [200, 155, 315, 335], err: true }
    ],
    canvas_code: `<!DOCTYPE html><html><body style="margin:0;background:#0f172a;color:#fff;font-family:sans-serif;padding:10px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px;">
  <button onclick="fixed=!fixed;t=0;this.style.background=fixed?'#22c55e':'#ef4444';this.innerText=fixed?'🟢 Fixed Reality: Parabolic Path':'🔴 Student Sketch (Flawed) — Click to Fix!';" style="background:#ef4444;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-weight:bold;">🔴 Student Sketch (Flawed) — Click to Fix!</button>
  <label style="font-size:13px;">Velocity (u): <input type="range" min="5" max="30" value="15" oninput="u=Number(this.value);document.getElementById('v').innerText=u;t=0;"> <span id="v">15</span> m/s</label>
</div>
<canvas id="c" width="560" height="250" style="background:#1e293b;border-radius:8px;width:100%;"></canvas>
<script>
let fixed=false,t=0,u=15,c=document.getElementById('c'),ctx=c.getContext('2d');
function loop(){
  ctx.clearRect(0,0,560,250);
  ctx.fillStyle='#334155'; ctx.fillRect(0,75,130,175);
  ctx.fillStyle='#94a3b8'; ctx.fillText('CLIFF (45m)',25,165);
  ctx.strokeStyle='#ef4444'; ctx.setLineDash([5,5]); ctx.beginPath(); ctx.moveTo(130,75); ctx.lineTo(145,235); ctx.stroke();
  if(fixed){ ctx.strokeStyle='#22c55e'; ctx.setLineDash([]); ctx.beginPath(); for(let i=0;i<55;i++) ctx.lineTo(130+u*i*0.35,75+0.09*i*i); ctx.stroke(); }
  let bx=fixed?130+u*t*0.35:130+t*0.3, by=75+0.09*t*t;
  t = by<235 ? t+0.6 : 0;
  ctx.fillStyle=fixed?'#22c55e':'#ef4444'; ctx.beginPath(); ctx.arc(bx,by,10,0,Math.PI*2); ctx.fill();
  requestAnimationFrame(loop);
} loop();
<\/script></body></html>`
  },

  circuit: {
    topic: "DC Circuits — Short-Circuit Current Bypass",
    vars: "V (Battery) = 9V  |  R_bypass = 0 Ω (Short Circuit)",
    error: "⚠️ Wiring Flaw Detected: Your middle wire connects the positive path directly back to the negative terminal before the bulb, bypassing it completely.",
    socratic: "🤔 Socratic Check: Why does current skip the lightbulb?  👉 [Answer: Electric current takes the zero-resistance bypass wire!]",
    vocab: ["తక్కువ నిరోధం → Least Resistance", "షార్ట్ సర్క్యూట్ → Short Circuit Bypass"],
    voice: {
      "te-IN": "మీరు గీసిన circuit లో బల్బ్ కంటే ముందే వైర్ ని తిరిగి బ్యాటరీకి కలిపారు. దీనివల్ల Short Circuit జరిగి కరెంట్ బల్బ్ లోకి వెళ్ళదు. Fix బటన్ నొక్కి ఆ వైర్ తొలగించండి!",
      "hi-IN": "आपने बल्ब से पहले ही तार को वापस जोड़ दिया है। इससे शॉर्ट सर्किट होता है और करंट बल्ब तक नहीं पहुंचता।",
      "ta-IN": "பல்புக்கு முன்பே கம்பியை இணைத்துள்ளீர்கள். இதனால் ஷார்ட் சர்க்யூட் ஏற்பட்டு பல்ப் எரியாது.",
      "en-IN": "You connected a wire across the terminals before the bulb, creating a short circuit so current bypasses the bulb. Click Fix to remove the short!"
    },
    components: [
      { label: "9V Battery Source", box: [80, 160, 180, 255], err: false },
      { label: "Short-Circuit Bypass Wire", box: [235, 135, 315, 275], err: true }
    ],
    canvas_code: `<!DOCTYPE html><html><body style="margin:0;background:#0f172a;color:#fff;font-family:sans-serif;padding:10px;">
<button onclick="fixed=!fixed;this.style.background=fixed?'#22c55e':'#ef4444';this.innerText=fixed?'🟢 Fixed: Bypass Removed (Bulb Glowing!)':'🔴 Short-Circuit (Bulb Dark) — Click to Fix!';" style="background:#ef4444;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-weight:bold;margin-bottom:8px;">🔴 Short-Circuit (Bulb Dark) — Click to Fix!</button>
<canvas id="c" width="560" height="250" style="background:#1e293b;border-radius:8px;width:100%;"></canvas>
<script>
let fixed=false,off=0,c=document.getElementById('c'),ctx=c.getContext('2d');
function loop(){
  ctx.clearRect(0,0,560,250); off=(off+2)%32;
  ctx.strokeStyle='#64748b'; ctx.lineWidth=4; ctx.setLineDash([]); ctx.strokeRect(100,45,350,165);
  if(!fixed){ ctx.strokeStyle='#ef4444'; ctx.beginPath(); ctx.moveTo(260,45); ctx.lineTo(260,210); ctx.stroke(); ctx.fillStyle='#ef4444'; ctx.fillText('⚠️ SHORT BYPASS',205,130); }
  ctx.fillStyle='#3b82f6'; ctx.fillRect(70,98,60,60); ctx.fillStyle='#fff'; ctx.fillText('9V BAT',82,133);
  ctx.beginPath(); ctx.arc(450,128,28,0,Math.PI*2); ctx.fillStyle=fixed?'#facc15':'#334155'; ctx.fill(); ctx.stroke();
  ctx.fillStyle=fixed?'#000':'#fff'; ctx.fillText(fixed?'💡 ON':'OFF',435,133);
  ctx.strokeStyle=fixed?'#22c55e':'#ef4444'; ctx.setLineDash([8,8]); ctx.lineDashOffset=-off;
  ctx.strokeRect(100,45,fixed?350:160,165);
  requestAnimationFrame(loop);
} loop();
<\/script></body></html>`
  },

  loop: {
    topic: "C / Python Arrays — Off-By-One Index Overflow",
    vars: "Array Size N = 5 (Valid Indices: 0..4)  |  Handwritten Loop: i <= 5",
    error: "⚠️ Logic Bug Detected: Array arr[5] has valid indices 0 to 4. Writing i <= 5 accesses arr[5], reading garbage memory outside the array!",
    socratic: "🤔 Socratic Check: What should the loop condition be so it stops at index 4?  👉 [Answer: Change i <= 5 to i < 5]",
    vocab: ["హద్దు దాటడం → Index Out of Bounds", "సున్నా నుండి లెక్క → Zero-Based Indexing"],
    voice: {
      "te-IN": "మీరు రాసిన C loop లో i less than or equal to 5 అని పెట్టారు. కానీ సైజు 5 ఉన్న Array లో indices 0 నుండి 4 వరకు మాత్రమే ఉంటాయి. i equal to 5 అయినప్పుడు Garbage value వస్తుంది!",
      "hi-IN": "आपने लूप में i <= 5 लिखा है, लेकिन 5 साइज के एरे में इंडेक्स केवल 0 से 4 तक होते हैं। i = 5 पर यह मेमोरी के बाहर चला जाता है।",
      "ta-IN": "நீங்கள் i <= 5 என எழுதியுள்ளீர்கள், ஆனால் 5 அளவுள்ள வரிசையில் 0 முதல் 4 வரை மட்டுமே குறியீடுகள் இருக்கும்.",
      "en-IN": "You wrote i less than or equal to 5, which steps outside the array bounds at index 5. Click Fix to change the condition to i less than 5."
    },
    components: [
      { label: "Valid Array Declaration arr[5]", box: [70, 70, 470, 125], err: false },
      { label: "Off-By-One Bug: i <= 5", box: [70, 145, 430, 205], err: true }
    ],
    canvas_code: `<!DOCTYPE html><html><body style="margin:0;background:#0f172a;color:#fff;font-family:monospace;padding:10px;">
<button onclick="fixed=!fixed;idx=0;this.style.background=fixed?'#22c55e':'#ef4444';this.innerText=fixed?'🟢 Fixed: i < 5 (Safe Array Bounds)':'🔴 Bug: i <= 5 (Memory Overflow) — Click to Fix!';" style="background:#ef4444;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-weight:bold;margin-bottom:8px;">🔴 Bug: i &lt;= 5 (Memory Overflow) — Click to Fix!</button>
<canvas id="c" width="560" height="250" style="background:#1e293b;border-radius:8px;width:100%;"></canvas>
<script>
let fixed=false,idx=0,vals=[10,20,30,40,50,'💥ERR'],c=document.getElementById('c'),ctx=c.getContext('2d');
setInterval(()=>{ idx = (idx+1) > (fixed?4:5) ? 0 : idx+1; }, 1050);
function loop(){
  ctx.clearRect(0,0,560,250); ctx.font='bold 15px monospace'; ctx.fillStyle='#fff';
  ctx.fillText(fixed?'for(int i=0; i < 5; i++)  | Current i = '+idx : 'for(int i=0; i <= 5; i++) | Current i = '+idx, 25, 32);
  for(let k=0;k<6;k++){
    let x=25+k*86, y=75;
    ctx.strokeStyle=k===5?'#ef4444':'#38bdf8'; ctx.lineWidth=k===idx?4:2; ctx.strokeRect(x,y,74,74);
    ctx.fillStyle=k===idx?(k===5?'#7f1d1d':'#065f46'):'#0f172a'; ctx.fillRect(x+2,y+2,70,70);
    ctx.fillStyle='#fff'; ctx.fillText(vals[k],x+14,y+42); ctx.fillText('arr['+k+']',x+10,y+95);
  }
  ctx.fillStyle=(idx===5&&!fixed)?'#ef4444':'#22c55e';
  ctx.fillText((idx===5&&!fixed)?'⚠️ CRASH: arr[5] is outside array bounds!':'✓ Valid Memory Read: arr['+idx+'] = '+vals[idx], 25, 220);
  requestAnimationFrame(loop);
} loop();
<\/script></body></html>`
  }
};

// --- 2. DRAW SYNTHETIC NOTEBOOK SKETCH & BOUNDING BOXES ---
function drawNotebookPreset(key) {
  const canvas = document.getElementById("sketchCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, 600, 360);

  // Notebook ruled lines
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  for (let y = 35; y < 360; y += 28) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(600, y); ctx.stroke();
  }
  ctx.strokeStyle = "#fca5a5";
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(55, 0); ctx.lineTo(55, 360); ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 16px monospace";

  if (key === "cliff") {
    ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(80, 140); ctx.lineTo(210, 140); ctx.lineTo(210, 325); ctx.lineTo(520, 325); ctx.stroke();
    ctx.fillStyle = "#3b82f6"; ctx.beginPath(); ctx.arc(195, 125, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillText("u = 15 m/s ->", 85, 90);
    ctx.strokeStyle = "#dc2626"; ctx.setLineDash([6, 4]);
    ctx.beginPath(); ctx.moveTo(210, 140); ctx.lineTo(230, 320); ctx.stroke();
    ctx.setLineDash([]);
  } else if (key === "circuit") {
    ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 3;
    ctx.strokeRect(95, 175, 75, 65);
    ctx.fillText("9V Bat", 105, 213);
    ctx.strokeRect(170, 150, 260, 115);
    ctx.strokeStyle = "#dc2626"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(270, 150); ctx.lineTo(270, 265); ctx.stroke();
    ctx.fillStyle = "#eab308"; ctx.beginPath(); ctx.arc(430, 205, 25, 0, Math.PI * 2); ctx.fill();
  } else {
    ctx.fillText("int arr[5] = {10, 20, 30, 40, 50};", 80, 105);
    ctx.fillStyle = "#dc2626";
    ctx.fillText("for (int i = 0; i <= 5; i++) {", 80, 175);
    ctx.fillStyle = "#0f172a";
    ctx.fillText("   printf(\"%d\", arr[i]);", 80, 230);
    ctx.fillText("}", 80, 280);
  }

  drawCoordinateBoxes(PRESETS[key].components);
}

function drawCoordinateBoxes(components) {
  const canvas = document.getElementById("sketchCanvas");
  const ctx = canvas.getContext("2d");
  (components || []).forEach(c => {
    const [x1, y1, x2, y2] = c.box;
    ctx.strokeStyle = c.err ? "#ef4444" : "#22c55e";
    ctx.lineWidth = 3;
    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
    ctx.fillStyle = c.err ? "#ef4444" : "#15803d";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText((c.err ? "⚠️ " : "✓ ") + c.label, x1, Math.max(16, y1 - 6));
  });
}

// --- 3. RENDER UI PANELS ---
function loadPreset() {
  const key = document.getElementById("presetSelect").value;
  currentData = PRESETS[key];
  drawNotebookPreset(key);
  renderRightPanel();
}

function updateTranscript() {
  if (!currentData) return;
  const lang = document.getElementById("langSelect").value;
  const txt = (currentData.voice && currentData.voice[lang]) || currentData.voice?.["en-IN"] || "";
  const chips = (currentData.vocab || []).map(v => `<span class="vocab-chip">📘 ${v}</span>`).join("");
  document.getElementById("voiceTranscript").innerHTML =
    `<strong>🗣️ Bilingual Voice Tutor (${lang}):</strong> ${txt}<div style="margin-top:6px;">${chips}</div>`;
}

function renderRightPanel() {
  document.getElementById("topicTitle").innerText = "⚡ Step 3: " + currentData.topic;
  document.getElementById("varsBox").innerHTML = "<strong>🔢 Extracted Handwritten Variables:</strong> " + currentData.vars;
  document.getElementById("errorBox").innerText = currentData.error;
  document.getElementById("socraticBox").innerText = currentData.socratic;
  updateTranscript();

  document.getElementById("simFrame").srcdoc = currentData.canvas_code;
  const kb = (new Blob([currentData.canvas_code]).size / 1024).toFixed(2);
  document.getElementById("sizeBadge").innerText = `⚡ 2G Payload: ${kb} KB`;
  document.getElementById("jsonView").innerText = JSON.stringify(
    { ...currentData, canvas_code: "[<5KB SELF-CONTAINED HTML5 CANVAS]" },
    null,
    2
  );
}

// --- 4. VERNACULAR VOICE & OFFLINE WHATSAPP CARTRIDGE EXPORT ---
function speakVoice() {
  if (!currentData) return;
  window.speechSynthesis.cancel();
  const lang = document.getElementById("langSelect").value;
  const text = currentData.voice[lang] || currentData.voice["en-IN"];
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  window.speechSynthesis.speak(utter);
}

function downloadCartridge() {
  if (!currentData) return;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([currentData.canvas_code], { type: "text/html" }));
  a.download = "LabInAPocket_Offline_Cartridge.html";
  a.click();
}

// --- 5. LIVE GEMINI 2.5 FLASH MULTIMODAL COMPILER ---
async function analyzeLivePhoto() {
  const key = document.getElementById("apiKey").value.trim();
  const file = document.getElementById("photoInput").files[0];
  if (!key) return alert("Please paste your free Gemini API Key in the top bar first (or click 'Load Instant Demo')!");
  if (!file) return alert("Please select or snap a photo of a notebook sketch first!");

  const btn = document.getElementById("analyzeBtn");
  btn.innerText = "⏳ Compiling with Gemini 2.5 Flash...";

  const b64 = await new Promise(r => {
    const fr = new FileReader();
    fr.onload = () => r(fr.result.split(",")[1]);
    fr.readAsDataURL(file);
  });

  const cv = document.getElementById("sketchCanvas");
  const ctx = cv.getContext("2d");
  const img = new Image();
  await new Promise(resolve => {
    img.onload = () => { ctx.drawImage(img, 0, 0, cv.width, cv.height); resolve(); };
    img.src = URL.createObjectURL(file);
  });

  const prompt = `Analyze this handwritten STEM diagram or code snippet. Return ONLY valid JSON with these exact keys:
  "topic": string,
  "vars": string of extracted handwritten numbers/variables,
  "error": string explaining the student's mistake,
  "socratic": string asking a quick question with the answer,
  "vocab": array of 2 strings mapping vernacular terms to English exam terms,
  "voice": object with keys "te-IN", "hi-IN", "ta-IN", "en-IN" containing 2 conversational sentences,
  "components": array of objects {"label": string, "box": [xmin, ymin, xmax, ymax] scaled to 600x360 canvas, "err": boolean},
  "canvas_code": string containing a complete self-contained HTML5 document (<style>, <canvas width="560" height="250">, vanilla <script>) with a button that toggles between animating the student's RED flaw and GREEN fixed reality.`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }, { inline_data: { mime_type: file.type, data: b64 } }] }],
        generationConfig: { response_mime_type: "application/json", temperature: 0.2 }
      })
    });
    const raw = await res.json();
    currentData = JSON.parse(raw.candidates[0].content.parts[0].text);
    drawCoordinateBoxes(currentData.components);
    renderRightPanel();
    speakVoice();
  } catch (err) {
    alert("API Error: Check that your Gemini API Key is valid and you have an active internet connection.");
  }
  btn.innerText = "📸 Analyze Real Photo (Gemini)";
}

window.onload = loadPreset;