/*
  EDIT THIS FILE to reuse the site for any service.
  WhatsApp number format: country code + number, digits only (no +, spaces, or dashes).
  Example for Nigeria: 2348012345678
*/
window.STORE_CONFIG = {
  storeName: "Abban Service Store",
  product: {
    name: "Webinar Designs",
    shortName: "Webinar Service",
    category: "FEATURED SERVICE",
    tagline: "A straightforward service designed to help you move forward with confidence.",
    description: "Get a professional, convenient service with clear guidance from start to finish. Review the details, complete payment, then send your payment confirmation on WhatsApp so we can identify your order and assist you.",
    image: "assets/service-illustration.svg",
    imageAlt: "Illustration representing the service",
    regularPrice: 20000,
    salePrice: 15000,
    currency: "₦",
    features: [
      "Simple, guided process",
      "Support after payment",
      "Clear next steps"
    ]
  },
  payment: {
    bankName: "Palmpay",
    accountName: "Anyanwu Abban",
    accountNumber: "8171133864",
    reference: "Service Order"
  },
  whatsappNumber: "2348070624412",
  whatsappGreeting: "Hello! I have made a payment and would like to confirm my order."
};
