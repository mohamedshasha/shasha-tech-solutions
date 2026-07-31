/* =========================================================
   شاشا تِك سوليوشنز - نموذج طلب خدمة
   لا توجد أسعار داخل النموذج — يتم تحديد السعر بعد التواصل
   ========================================================= */

const WHATSAPP_NUMBER = "249912243850"; // رقم استقبال الطلبات

// جمل تحفيزية تتبدّل تلقائياً أسفل النموذج
const TEASERS = [
  "أرسل طلبك الآن… وشاهد فكرتك وهي تتحوّل إلى نظام يعمل بين يديك.",
  "منافسك يبني نظامه اليوم — والسوق لا ينتظر أحداً.",
  "كل يوم تديره بالورق هو ربح يضيع منك وأنت لا تراه.",
  "هويتك البصرية أول ما يراه عميلك… فماذا يرى عنك الآن؟",
  "عرضك الخاص يُحدَّد بعد التواصل مباشرة — اطلب واعرف نصيبك.",
  "جرّبنا مرة واحدة… وستعرف لماذا لا يبحث عملاؤنا عن غيرنا.",
  "الفكرة التي تؤجّلها اليوم، سيطلقها غيرك غداً باسمه.",
];

function getServiceName() {
  let serviceSelect = document.getElementById("service");
  let customService = document.getElementById("customService");
  if (serviceSelect.value === "other") {
    return customService.value.trim() || "خدمة أخرى (لم تُحدَّد)";
  }
  return serviceSelect.options[serviceSelect.selectedIndex].text;
}

function getKindName() {
  let kindSelect = document.getElementById("kind");
  let customKind = document.getElementById("customKind");
  if (kindSelect.value === "other") {
    return customKind.value.trim() || "نشاط آخر (لم يُحدَّد)";
  }
  return kindSelect.value;
}

function getOrderDetails() {
  let packageSelect = document.getElementById("package");

  return {
    service: getServiceName(),
    package: packageSelect.options[packageSelect.selectedIndex].text,
    kind: getKindName(),
    deliveryTime: document.getElementById("deliveryTime").value,
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

/* تبديل الجمل التحفيزية */
function startTeasers() {
  let el = document.getElementById("teaser");
  if (!el) return;
  let i = Math.floor(Math.random() * TEASERS.length);
  el.textContent = TEASERS[i];
  el.classList.add("show");

  setInterval(() => {
    el.classList.remove("show");
    setTimeout(() => {
      i = (i + 1) % TEASERS.length;
      el.textContent = TEASERS[i];
      el.classList.add("show");
    }, 600);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
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
  startTeasers();
});

/* رقم مرجعي غير تسلسلي: تاريخ + رموز عشوائية
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

function submitOrder() {
  let orderDetails = getOrderDetails();

  if (
    orderDetails.name === "" ||
    orderDetails.phone === "" ||
    orderDetails.location === ""
  ) {
    alert("يرجى ملء جميع الحقول المطلوبة!");
    return;
  }

  let orderCode = generateOrderCode();
  document.getElementById("orderNumber").textContent = orderCode;
  document.getElementById("orderConfirmation").style.display = "block";

  alert(
    ` تم تسجيل بياناتك — اضغط على زر "أرسل الطلب الآن" لإكمال الطلب\n\n` +
      ` العميل: ${orderDetails.name}\n` +
      ` رقم الهاتف: ${orderDetails.phone}\n` +
      ` الموقع: ${orderDetails.location}\n` +
      ` الخدمة: ${orderDetails.service}\n` +
      ` الباقة: ${orderDetails.package}\n` +
      ` نوع النشاط: ${orderDetails.kind}\n` +
      ` زمن التنفيذ: ${orderDetails.deliveryTime}\n\n` +
      ` سيصلك العرض والسعر مباشرة بعد التواصل.`
  );
}

function buildMessage(details) {
  let orderNumber =
    document.getElementById("orderNumber").textContent || "غير محدد";

  return (
    `طلب خدمة جديد - شاشا تِك سوليوشنز:\n\n` +
    ` الخدمة: ${details.service}\n` +
    ` الباقة: ${details.package}\n` +
    ` نوع النشاط: ${details.kind}\n` +
    ` زمن التنفيذ: ${details.deliveryTime}\n` +
    ` العميل: ${details.name}\n` +
    ` الموقع: ${details.location}\n` +
    ` رقم الهاتف: ${details.phone}\n` +
    (details.notes ? ` تفاصيل إضافية: ${details.notes}\n` : "") +
    ` الرقم المرجعي: ${orderNumber}\n\n` +
    `أرجو تزويدي بالعرض والسعر.`
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

/* زر نسخ نص الطلب */
document.addEventListener("DOMContentLoaded", function () {
  let copyBtn = document.getElementById("copyBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    let field = document.getElementById("fallbackText");
    let done = () => {
      copyBtn.textContent = "تم النسخ ✓";
      setTimeout(() => (copyBtn.textContent = "انسخ نص الطلب"), 2500);
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
});

document.getElementById("orderButton").addEventListener("click", () => {
  let orderDetails = getOrderDetails();

  if (
    orderDetails.name === "" ||
    orderDetails.phone === "" ||
    orderDetails.location === ""
  ) {
    alert("يرجى ملء جميع الحقول المطلوبة!");
    return;
  }

  // إنشاء رقم طلب تلقائياً إذا لم يضغط العميل على "التأكد من البيانات"
  if (!document.getElementById("orderNumber").textContent) {
    submitOrder();
  }

  sendWhatsAppNotification(orderDetails);
});
