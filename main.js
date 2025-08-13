// ===== Notyf
const notyf = new Notyf({
  duration: 1800,
  position: { x: "right", y: "top" },
  types: [
    { type: "info", background: "#1e90ff", icon: false, dismissible: true },
    { type: "warn", background: "orange", icon: false }
  ]
});

// ===== Dropdown
const dd = document.querySelector(".dropdown");
const ddBtn = document.querySelector(".dd-btn");
if (dd && ddBtn) {
  ddBtn.addEventListener("click", () => dd.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!dd.contains(e.target)) dd.classList.remove("open");
  });
}

// ===== Buttons (auth + cta + discord + buy)
const bindClick = (sel, fn) => {
  const el = document.querySelector(sel);
  if (el) el.addEventListener("click", (e) => { e.preventDefault(); fn(e); });
};
bindClick("#loginBtn", () => notyf.open({ type:"info", message:"🚪 تسجيل الدخول قريبًا" }));
bindClick("#signupBtn", () => notyf.success("✅ تم فتح نموذج إنشاء الحساب"));
bindClick("#loginBtn2", () => notyf.open({ type:"info", message:"🚪 تسجيل الدخول قريبًا" }));
bindClick("#signupBtn2", () => notyf.success("✅ تم فتح نموذج إنشاء الحساب"));
bindClick("#startBtn", () => notyf.success("🚀 يلا نبدأ!"));
bindClick("#discordBtn", () => notyf.open({ type:"warn", message:"⚠️ لسه السيرفر مش متاح" }));
bindClick("#buy", () => notyf.success("🐱 القط جايلك في الطريق!"));

// ===== Theme Toggle (dark/light) + persist
const toggleBtns = [document.getElementById("themeToggle"), document.getElementById("themeToggle2")];
const applyTheme = (mode) => {
  if (mode === "light") { document.body.classList.add("light"); }
  else { document.body.classList.remove("light"); }
  localStorage.setItem("wys-theme", mode);
  // تبديل الأيقونة
  toggleBtns.forEach(btn=>{
    if(!btn) return;
    btn.innerHTML = document.body.classList.contains("light")
      ? '<i class="ri-moon-line"></i>' : '<i class="ri-sun-line"></i>';
  });
};
toggleBtns.forEach(btn => btn && btn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  applyTheme(isLight ? "light" : "dark");
}));
applyTheme(localStorage.getItem("wys-theme") || "dark");
