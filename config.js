/*
  EDIT THIS FILE to reuse the site for any service.
  WhatsApp number format: country code + number, digits only (no +, spaces, or dashes).
  Example for Nigeria: 2348012345678
*/
window.STORE_CONFIG = {
  storeName: "Service Store",
  product: {
    name: "Premium Digital Service",
    shortName: "Premium Service",
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
    bankName: "Your Bank Name",
    accountName: "Your Account Name",
    accountNumber: "0000000000",
    reference: "Service Order"
  },
  whatsappNumber: "2348012345678",
  whatsappGreeting: "Hello! I have made a payment and would like to confirm my order."
};
