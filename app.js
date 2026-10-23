(() => {
  const cfg = window.STORE_CONFIG || {};
  const product = cfg.product || {};
  const payment = cfg.payment || {};
  const money = value => `${product.currency || "₦"}${Number(value || 0).toLocaleString("en-NG")}`;
  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach(el => { if (value !== undefined && value !== null) el.textContent = value; });
  };
  setText("[data-store-name]", cfg.storeName || "Service Store");
  setText("[data-product-name]", product.name || "Premium Digital Service");
  setText("[data-product-short]", product.shortName || product.name || "Premium Service");
  setText("[data-category]", product.category || "FEATURED SERVICE");
  setText("[data-tagline]", product.tagline || "");
  setText("[data-description]", product.description || "");
  setText("[data-sale-price]", money(product.salePrice));
  setText("[data-regular-price]", money(product.regularPrice));
  setText("#payment-amount", money(product.salePrice));
  setText("#bank-name", payment.bankName || "");
  setText("#account-name", payment.accountName || "");
  setText("#account-number", payment.accountNumber || "");
  setText("#payment-reference", payment.reference || product.shortName || product.name || "");
  setText("#year", new Date().getFullYear());

  const image = document.getElementById("product-image");
  if (image && product.image) image.src = product.image;
  if (image && product.imageAlt) image.alt = product.imageAlt;

  const regular = Number(product.regularPrice || 0);
  const sale = Number(product.salePrice || 0);
  const discount = regular > sale && regular > 0 ? Math.round((regular - sale) / regular * 100) : 0;
  const discountEl = document.querySelector("[data-discount]");
  if (discountEl) {
    if (discount) discountEl.textContent = `${discount}% OFF`;
    else discountEl.hidden = true;
  }

  const featureList = document.getElementById("feature-list");
  if (featureList && Array.isArray(product.features)) {
    featureList.replaceChildren();
    product.features.forEach(feature => {
      const li = document.createElement("li");
      const check = document.createElement("span");
      check.textContent = "✓";
      const text = document.createElement("span");
      text.textContent = feature;
      li.append(check, text);
      featureList.append(li);
    });
  }

  const phone = String(cfg.whatsappNumber || "").replace(/\D/g, "");
  const serviceName = product.name || "the service";
  const message = `${cfg.whatsappGreeting || "Hello! I have made a payment."}\n\nService paid for: ${serviceName}\nPayment screenshot: I will attach it to this WhatsApp message.`;
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  ["whatsapp-button", "payment-whatsapp"].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.href = waUrl;
  });

  const warning = document.getElementById("payment-warning");
  if (warning) {
    const incomplete = !payment.bankName || /Your Bank Name/i.test(payment.bankName) ||
      !payment.accountName || /Your Account Name/i.test(payment.accountName) ||
      !payment.accountNumber || /^0+$/.test(payment.accountNumber) ||
      !phone || phone === "2348012345678";
    warning.hidden = !incomplete;
  }

  const copyBtn = document.getElementById("copy-account");
  if (copyBtn) copyBtn.addEventListener("click", async () => {
    const number = String(payment.accountNumber || "");
    try {
      await navigator.clipboard.writeText(number);
      copyBtn.textContent = "Copied!";
    } catch (e) {
      const field = document.createElement("textarea");
      field.value = number;
      document.body.append(field);
      field.select();
      document.execCommand("copy");
      field.remove();
      copyBtn.textContent = "Copied!";
    }
    setTimeout(() => { copyBtn.textContent = "Copy number"; }, 1800);
  });
})();
