# New Sunny Batteries Website

A premium, responsive catalogue/enquiry website for New Sunny Batteries, Hathi Gate, Amritsar.

## 1. Open locally
Double-click `index.html`, or use VS Code Live Server.

## 2. First edit
Open `script.js` and replace:

phone: "ADD_PHONE_NUMBER"
whatsapp: "ADD_WHATSAPP_NUMBER_WITH_COUNTRY_CODE"
email: "ADD_EMAIL_ADDRESS"
maps: "ADD_GOOGLE_MAPS_LINK"

Use India country code for WhatsApp, e.g. 91XXXXXXXXXX (digits only).

## 3. Add your real products
In `PRODUCTS` inside `script.js`, replace the starter placeholder entries with your actual models/specifications.

Correct product mapping:
- PowerZone: Car Battery, Motorcycle Battery
- Windsor: Inverter Battery, Inverter Unit, Tractor Battery
- Kaycee: Inverter Battery, Inverter Unit, Tractor Battery
- Skylark: Inverter Battery, Inverter Unit, Tractor Battery

Do not add unverified specifications.

## 4. Add product photos
Create `assets/products/` and put product images there. Then add an `image` field to each product and update the product-card image block if desired.

## 5. Publish on GitHub Pages
1. Create a GitHub repository, e.g. `new-sunny-batteries`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder.
3. GitHub → Settings → Pages.
4. Choose `Deploy from a branch`.
5. Select `main` and `/root`.
6. Save.
7. GitHub will give you the public website URL.

## 6. Important
This starter intentionally does not invent phone, email, product models, prices, stock, warranties or technical specifications. Add verified business/product information before launch.


## Visitor Requirement Gate
The website now starts with a required form for full name, mobile number, email, location (city/area), and requirement. The visitor enters the main website after submitting it. Details are stored in the visitor's browser using localStorage and pre-filled on the next visit from that browser. This version does not send data to an email/database; a backend or form service is needed for that.


## Formspree Enquiry Submission
The visitor requirement gate now submits to the connected Formspree endpoint before allowing the visitor into the website. The form sends name, mobile number, email, location, requirement, and submission time. The Formspree account must be configured to receive notifications at the desired email address.
