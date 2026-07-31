/* =========================================================
   شاشا تِك سوليوشنز - نموذج طلب خدمة (عربي / إنجليزي)
   Shasha Tech Solutions - service request form (AR / EN)
   ========================================================= */

const WHATSAPP_NUMBER = "249912243850"; // رقم استقبال الطلبات

/* ================= الترجمات ================= */
const I18N = {
  ar: {
    "doc.title": "طلب خدمة - شاشا تِك سوليوشنز",
    tagline: '"فكرة تُصمَّم ،،، ونظام يُبنى"',
    trust:
      "أكثر من <strong>9 أنظمة</strong> تعمل الآن لدى عملائنا — وهويات بصرية كاملة سلّمناها لشركات ومطاعم ومدارس وصيدليات",

    "label.service": "الخدمة المطلوبة:",
    "grp.brand": "الهوية البصرية والدعاية",
    "grp.systems": "أنظمة الإدارة والمحاسبة",
    "grp.web": "المواقع والتطبيقات",
    "s.logo": "تصميم شعار",
    "s.identity": "هوية بصرية كاملة",
    "s.rebrand": "تطوير هوية قائمة",
    "s.print": "تصميم مطبوعات ودعاية",
    "s.social": "إدارة حسابات التواصل الاجتماعي (شهرياً)",
    "s.motion": "مونتاج وموشن جرافيك",
    "s.signage": "لوحات ولافتات دعائية",
    "s.accounting": "نظام محاسبة متكامل",
    "s.inventory": "نظام مخزون ومبيعات ونقاط بيع",
    "s.resto": "نظام إدارة مطاعم وكافيهات",
    "s.school": "نظام إدارة مدارس",
    "s.pharmacy": "نظام إدارة صيدليات",
    "s.clinic": "نظام إدارة عيادات ومستشفيات",
    "s.hr": "نظام موارد بشرية ورواتب",
    "s.landing": "صفحة هبوط / موقع تعريفي",
    "s.website": "موقع إلكتروني متكامل",
    "s.store": "متجر إلكتروني",
    "s.app": "تطبيق موبايل (أندرويد + آيفون)",
    "s.dashboard": "لوحة تحكم وربط API",
    "s.hosting": "استضافة ودومين (سنوي)",
    "s.support": "صيانة ودعم فني (سنوي)",
    "s.other": "خدمة أخرى (أكتب طلبك)",
    "ph.customService": "اكتب الخدمة التي تريدها",

    "label.package": "مستوى الباقة:",
    "p.basic": "أساسية",
    "p.pro": "احترافية",
    "p.premium": "متكاملة (Premium)",

    "label.kind": "نوع النشاط",
    "k.company": "شركة",
    "k.sole": "مؤسسة فردية",
    "k.shop": "محل تجاري",
    "k.resto": "مطعم أو كافيه",
    "k.pharmacy": "صيدلية",
    "k.clinic": "عيادة أو مستشفى",
    "k.school": "مدرسة أو مركز تدريب",
    "k.factory": "مصنع",
    "k.farm": "مزرعة",
    "k.market": "سوبر ماركت أو مول",
    "k.bank": "بنك أو جهة مالية",
    "k.gov": "القطاع الحكومي",
    "k.ngo": "منظمة",
    "k.other": "نشاط آخر",
    "ph.customKind": "اكتب نوع نشاطك",

    "label.delivery": "زمن التنفيذ والتسليم:",
    "d.24h": "24 ساعة",
    "d.48h": "48 ساعة",
    "d.3d": "3 أيام",
    "d.1w": "أسبوع",
    "d.2w": "أسبوعين",
    "d.1m": "شهر",
    "d.2m": "شهرين",
    "d.3m": "3 أشهر",
    "d.agree": "حسب الاتفاق",

    "ph.name": "اسم العميل / الجهة",
    "ph.location": "المدينة والعنوان",
    "ph.phone": "رقم الهاتف / واتساب",
    "ph.notes": "تفاصيل إضافية (اختياري)",

    "btn.check": "التأكد من البيانات",
    "btn.send": "أرسل الطلب الآن",
    "conf.saved": "تم تسجيل طلبك ✓",
    "conf.ref": "الرقم المرجعي:",

    "fb.title": "لم يفتح واتساب؟ انسخ طلبك وأرسله لنا:",
    "btn.copy": "انسخ نص الطلب",
    "btn.copied": "تم النسخ ✓",
    "fb.link": "فتح واتساب يدوياً",

    "alert.fill": "يرجى ملء جميع الحقول المطلوبة!",
    "alert.next": ' تم تسجيل بياناتك — اضغط على زر "أرسل الطلب الآن" لإكمال الطلب',
    "alert.client": "العميل",
    "alert.phone": "رقم الهاتف",
    "alert.place": "الموقع",
    "alert.service": "الخدمة",
    "alert.package": "الباقة",
    "alert.kind": "نوع النشاط",
    "alert.time": "زمن التنفيذ",
    "alert.after": "سيصلك العرض والسعر مباشرة بعد التواصل.",

    "msg.head": "طلب خدمة جديد - شاشا تِك سوليوشنز:",
    "msg.notes": "تفاصيل إضافية",
    "msg.ref": "الرقم المرجعي",
    "msg.ask": "أرجو تزويدي بالعرض والسعر.",
    "msg.unset": "غير محدد",
    "msg.otherService": "خدمة أخرى (لم تُحدَّد)",
    "msg.otherKind": "نشاط آخر (لم يُحدَّد)",
  },

  en: {
    "doc.title": "Request a service - Shasha Tech Solutions",
    tagline: '"An idea designed ,,, a system built"',
    trust:
      "More than <strong>9 systems</strong> running for our clients today — plus complete brand identities delivered to companies, restaurants, schools and pharmacies",

    "label.service": "Service you need:",
    "grp.brand": "Brand identity & advertising",
    "grp.systems": "Management & accounting systems",
    "grp.web": "Websites & mobile apps",
    "s.logo": "Logo design",
    "s.identity": "Complete brand identity",
    "s.rebrand": "Rebrand an existing identity",
    "s.print": "Print & advertising design",
    "s.social": "Social media management (monthly)",
    "s.motion": "Video editing & motion graphics",
    "s.signage": "Signage & outdoor boards",
    "s.accounting": "Full accounting system",
    "s.inventory": "Inventory, sales & POS system",
    "s.resto": "Restaurant & café system",
    "s.school": "School management system",
    "s.pharmacy": "Pharmacy management system",
    "s.clinic": "Clinic & hospital system",
    "s.hr": "HR & payroll system",
    "s.landing": "Landing page / company profile site",
    "s.website": "Full website",
    "s.store": "Online store",
    "s.app": "Mobile app (Android + iOS)",
    "s.dashboard": "Dashboard & API integration",
    "s.hosting": "Hosting & domain (yearly)",
    "s.support": "Maintenance & support (yearly)",
    "s.other": "Something else (describe it)",
    "ph.customService": "Describe the service you need",

    "label.package": "Package level:",
    "p.basic": "Basic",
    "p.pro": "Professional",
    "p.premium": "Premium",

    "label.kind": "Type of business",
    "k.company": "Company",
    "k.sole": "Sole proprietorship",
    "k.shop": "Retail shop",
    "k.resto": "Restaurant or café",
    "k.pharmacy": "Pharmacy",
    "k.clinic": "Clinic or hospital",
    "k.school": "School or training centre",
    "k.factory": "Factory",
    "k.farm": "Farm",
    "k.market": "Supermarket or mall",
    "k.bank": "Bank or financial body",
    "k.gov": "Government sector",
    "k.ngo": "Organisation",
    "k.other": "Other",
    "ph.customKind": "Describe your business",

    "label.delivery": "Delivery time:",
    "d.24h": "24 hours",
    "d.48h": "48 hours",
    "d.3d": "3 days",
    "d.1w": "1 week",
    "d.2w": "2 weeks",
    "d.1m": "1 month",
    "d.2m": "2 months",
    "d.3m": "3 months",
    "d.agree": "As agreed",

    "ph.name": "Your name / organisation",
    "ph.location": "City and address",
    "ph.phone": "Phone / WhatsApp number",
    "ph.notes": "Extra details (optional)",

    "btn.check": "Check my details",
    "btn.send": "Send request now",
    "conf.saved": "Request saved ✓",
    "conf.ref": "Reference:",

    "fb.title": "WhatsApp didn't open? Copy your request and send it to us:",
    "btn.copy": "Copy request text",
    "btn.copied": "Copied ✓",
    "fb.link": "Open WhatsApp manually",

    "alert.fill": "Please fill in all required fields.",
    "alert.next": ' Your details are saved — press "Send request now" to finish',
    "alert.client": "Client",
    "alert.phone": "Phone",
    "alert.place": "Location",
    "alert.service": "Service",
    "alert.package": "Package",
    "alert.kind": "Business type",
    "alert.time": "Delivery time",
    "alert.after": "You'll receive the offer and price right after we talk.",

    "msg.head": "New service request - Shasha Tech Solutions:",
    "msg.notes": "Extra details",
    "msg.ref": "Reference",
    "msg.ask": "Please send me the offer and the price.",
    "msg.unset": "not set",
    "msg.otherService": "Other service (not specified)",
    "msg.otherKind": "Other business (not specified)",
  },
};

/* جمل تحفيزية لكل لغة */
const TEASERS = {
  ar: [
    "أرسل طلبك الآن… وشاهد فكرتك وهي تتحوّل إلى نظام يعمل بين يديك.",
    "منافسك يبني نظامه اليوم — والسوق لا ينتظر أحداً.",
    "كل يوم تديره بالورق هو ربح يضيع منك وأنت لا تراه.",
    "هويتك البصرية أول ما يراه عميلك… فماذا يرى عنك الآن؟",
    "عرضك الخاص يُحدَّد بعد التواصل مباشرة — اطلب واعرف نصيبك.",
    "جرّبنا مرة واحدة… وستعرف لماذا لا يبحث عملاؤنا عن غيرنا.",
    "الفكرة التي تؤجّلها اليوم، سيطلقها غيرك غداً باسمه.",
  ],
  en: [
    "Send your request and watch your idea turn into a system you can actually use.",
    "Your competitor is building their system today — the market waits for no one.",
    "Every day you run on paper is profit slipping away unnoticed.",
    "Your brand is the first thing a client sees. What does yours say right now?",
    "Your quote is set right after we talk — ask and find out.",
    "Try us once, and you'll see why our clients never shop around.",
    "The idea you postpone today, someone else launches tomorrow under their name.",
  ],
};

let currentLang = "ar";
const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || key;

/* ================= تبديل اللغة ================= */
function applyLang(lang) {
  currentLang = I18N[lang] ? lang : "ar";
  let isAr = currentLang === "ar";

  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-ph"));
  });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    el.label = t(el.getAttribute("data-i18n-label"));
  });

  document.title = t("doc.title");
  document.getElementById("langToggle").textContent = isAr ? "EN" : "ع";

  try {
    localStorage.setItem("lang", currentLang);
  } catch (e) {
    /* الوضع الخاص قد يمنع التخزين */
  }

  startTeasers();
}

/* ================= قراءة بيانات الطلب ================= */
function textOf(selectId) {
  let el = document.getElementById(selectId);
  return el.options[el.selectedIndex].text.trim();
}

function getServiceName() {
  let serviceSelect = document.getElementById("service");
  if (serviceSelect.value === "other") {
    return (
      document.getElementById("customService").value.trim() ||
      t("msg.otherService")
    );
  }
  return textOf("service");
}

function getKindName() {
  let kindSelect = document.getElementById("kind");
  if (kindSelect.value === "other") {
    return (
      document.getElementById("customKind").value.trim() || t("msg.otherKind")
    );
  }
  return textOf("kind");
}

function getOrderDetails() {
  return {
    service: getServiceName(),
    package: textOf("package"),
    kind: getKindName(),
    deliveryTime: textOf("deliveryTime"),
    name: document.getElementById("name").value.trim(),
    location: document.getElementById("location").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    notes: document.getElementById("notes").value.trim(),
  };
}

/* إظهار حقل الكتابة اليدوية عند اختيار "خدمة أخرى" */
function updateService() {
  let serviceSelect = document.getElementById("service");
  let customService = document.getElementById("customService");
  customService.style.display =
    serviceSelect.value === "other" ? "block" : "none";
  if (serviceSelect.value === "other") customService.focus();
}

/* إظهار حقل الكتابة اليدوية عند اختيار "نشاط آخر" */
function updateKind() {
  let kindSelect = document.getElementById("kind");
  let customKind = document.getElementById("customKind");
  customKind.style.display = kindSelect.value === "other" ? "block" : "none";
  if (kindSelect.value === "other") customKind.focus();
}

/* ================= الجمل التحفيزية ================= */
let teaserTimer = null;

function startTeasers() {
  let el = document.getElementById("teaser");
  if (!el) return;
  if (teaserTimer) clearInterval(teaserTimer);

  let list = TEASERS[currentLang];
  let i = Math.floor(Math.random() * list.length);
  el.textContent = list[i];
  el.classList.add("show");

  teaserTimer = setInterval(() => {
    el.classList.remove("show");
    setTimeout(() => {
      i = (i + 1) % list.length;
      el.textContent = list[i];
      el.classList.add("show");
    }, 600);
  }, 5000);
}

/* ================= الرقم المرجعي ================= */
/* غير تسلسلي: تاريخ + رموز عشوائية
   (لا يكشف عدد الطلبات ولا يمكن مقارنته بطلب آخر) */
function generateOrderCode() {
  let d = new Date();
  let yy = String(d.getFullYear()).slice(2);
  let mm = String(d.getMonth() + 1).padStart(2, "0");
  let dd = String(d.getDate()).padStart(2, "0");

  const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // بدون أحرف تلتبس بالأرقام
  let rand = "";
  for (let i = 0; i < 4; i++) {
    rand += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }

  return `SH-${yy}${mm}${dd}-${rand}`;
}

/* ================= إرسال الطلب ================= */
function submitOrder() {
  let o = getOrderDetails();

  if (o.name === "" || o.phone === "" || o.location === "") {
    alert(t("alert.fill"));
    return;
  }

  document.getElementById("orderNumber").textContent = generateOrderCode();
  document.getElementById("orderConfirmation").style.display = "block";

  alert(
    `${t("alert.next")}\n\n` +
      ` ${t("alert.client")}: ${o.name}\n` +
      ` ${t("alert.phone")}: ${o.phone}\n` +
      ` ${t("alert.place")}: ${o.location}\n` +
      ` ${t("alert.service")}: ${o.service}\n` +
      ` ${t("alert.package")}: ${o.package}\n` +
      ` ${t("alert.kind")}: ${o.kind}\n` +
      ` ${t("alert.time")}: ${o.deliveryTime}\n\n` +
      ` ${t("alert.after")}`
  );
}

function buildMessage(o) {
  let ref = document.getElementById("orderNumber").textContent || t("msg.unset");

  return (
    `${t("msg.head")}\n\n` +
    ` ${t("alert.service")}: ${o.service}\n` +
    ` ${t("alert.package")}: ${o.package}\n` +
    ` ${t("alert.kind")}: ${o.kind}\n` +
    ` ${t("alert.time")}: ${o.deliveryTime}\n` +
    ` ${t("alert.client")}: ${o.name}\n` +
    ` ${t("alert.place")}: ${o.location}\n` +
    ` ${t("alert.phone")}: ${o.phone}\n` +
    (o.notes ? ` ${t("msg.notes")}: ${o.notes}\n` : "") +
    ` ${t("msg.ref")}: ${ref}\n\n` +
    `${t("msg.ask")}`
  );
}

/* خطة بديلة: إذا منع المتصفح فتح واتساب، نعرض نص الطلب
   مع زر نسخ ورابط مباشر حتى لا يضيع العميل */
function showFallback(message, whatsappURL) {
  let box = document.getElementById("fallbackBox");
  document.getElementById("fallbackText").value = message;
  document.getElementById("waLink").href = whatsappURL;
  box.style.display = "block";
  box.scrollIntoView({ behavior: "smooth", block: "center" });
}

function sendWhatsAppNotification(details) {
  let message = buildMessage(details);
  let whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  let win = null;
  try {
    win = window.open(whatsappURL, "_blank");
  } catch (e) {
    win = null;
  }

  // المتصفح حجب النافذة أو لا يوجد واتساب على الجهاز
  if (!win || win.closed || typeof win.closed === "undefined") {
    showFallback(message, whatsappURL);
  }
}

/* ================= التشغيل ================= */
document.addEventListener("DOMContentLoaded", function () {
  // العربية هي الافتراضية دائماً — ولا تتغير إلا إذا بدّلها العميل بنفسه
  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch (e) {
    saved = null;
  }
  applyLang(saved || "ar");

  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(currentLang === "ar" ? "en" : "ar");
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value) {
        this.setAttribute("placeholder-shown", "true");
      } else {
        this.removeAttribute("placeholder-shown");
      }
    });
  });

  updateService();
  updateKind();

  // زر نسخ نص الطلب
  let copyBtn = document.getElementById("copyBtn");
  copyBtn.addEventListener("click", () => {
    let field = document.getElementById("fallbackText");
    let done = () => {
      copyBtn.textContent = t("btn.copied");
      setTimeout(() => (copyBtn.textContent = t("btn.copy")), 2500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(field.value).then(done, () => {
        field.select();
        document.execCommand("copy");
        done();
      });
    } else {
      field.select();
      field.setSelectionRange(0, 99999); // للأجهزة المحمولة
      document.execCommand("copy");
      done();
    }
  });

  document.getElementById("orderButton").addEventListener("click", () => {
    let o = getOrderDetails();

    if (o.name === "" || o.phone === "" || o.location === "") {
      alert(t("alert.fill"));
      return;
    }

    // إنشاء رقم مرجعي تلقائياً إذا لم يضغط العميل على "التأكد من البيانات"
    if (!document.getElementById("orderNumber").textContent) {
      submitOrder();
    }

    sendWhatsAppNotification(o);
  });
});
