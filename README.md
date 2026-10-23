# Service Storefront

A lightweight, responsive product page for selling a service. It is a static website and can be hosted free with GitHub Pages.

## Files
- `index.html` — service/product page
- `payment.html` — payment details and instructions
- `styles.css` — all colors, spacing, and responsive styling
- `config.js` — **edit this file to change the service, prices, payment details, and WhatsApp number**
- `app.js` — fills the pages from the configuration
- `assets/service-illustration.svg` — default service image; replace it with your own image if desired

## Before publishing
1. Open `config.js`.
2. Update `storeName`.
3. Update the product name, short name, category, tagline, description, image path, prices, currency, and feature list.
4. Enter your real bank name, account name, account number, and payment reference.
5. Set `whatsappNumber` to your WhatsApp number using digits only, including the country code. For example, Nigeria uses `234` followed by the phone number without its leading `0`.
6. Optionally replace `assets/service-illustration.svg` with a picture of your service. If you use a different filename, update `product.image` in `config.js`.
7. Check both pages on your phone and computer before sharing the site.

**Important:** The sample bank details and WhatsApp number are placeholders. Replace them before going live. This is a static storefront: it does not automatically process card payments or verify transfers. Buyers manually transfer funds and send their payment screenshot through WhatsApp.

## Publish on GitHub Pages
1. Sign in to GitHub and create a new repository (a public repository is the simplest option for GitHub Pages).
2. Upload all files and the `assets` folder from this package to the repository root. Keep the file/folder structure intact.
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment section, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. GitHub will display your public website URL in the Pages settings.

No build tools, package installation, or backend server are required.
