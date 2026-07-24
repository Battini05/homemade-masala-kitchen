# Homemade Masala Kitchen — Next.js starter

This is a static Next.js website designed for Cloudflare Pages. It includes:

- Responsive public website
- Editable menu data
- Food image support
- WhatsApp order buttons
- Email and contact information
- Static export for Cloudflare Pages

## 1. Install the required software

Install:

1. Node.js LTS
2. Visual Studio Code
3. Git
4. A GitHub account

## 2. Run it on your computer

Open the project folder in Visual Studio Code, then open Terminal and run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Stop it using `Ctrl + C`.

## 3. Change business details

Open:

```text
data/menu.js
```

Change:

- `whatsappNumber`
- `email`
- `phoneDisplay`
- headings
- delivery suburbs
- ordering notice

Important: WhatsApp number must include the country code and contain no plus sign or spaces.

Example:

```js
whatsappNumber: "61412345678"
```

## 4. Change menu names and prices

In `data/menu.js`, each item looks like:

```js
{
  id: 1,
  name: "Chicken Dum Biryani",
  category: "Biryani",
  description: "Aromatic basmati rice...",
  price: 18,
  image: "/images/chicken-biryani.jpg",
  available: true
}
```

- Change `price: 18` to your price.
- Set `available: false` to hide an item.
- Add another object to add another food item.
- Every item should have a unique `id`.

## 5. Add your food pictures

Copy photos into:

```text
public/images
```

For example:

```text
public/images/chicken-biryani.jpg
```

Then use:

```js
image: "/images/chicken-biryani.jpg"
```

Use lowercase file names without spaces. JPG, JPEG, PNG and WebP are suitable.

## 6. Build-test before publishing

Run:

```bash
npm run build
```

The static website will be generated in:

```text
out
```

## 7. Upload to GitHub

Create an empty GitHub repository named:

```text
homemade-masala-kitchen
```

Then run in the project terminal:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 8. Deploy to Cloudflare Pages

In Cloudflare:

1. Open **Workers & Pages**.
2. Select **Create application**.
3. Choose **Pages** and connect to Git.
4. Connect GitHub and select this repository.
5. Set the production branch to `main`.
6. Use build command:

```text
npm run build
```

7. Use build output directory:

```text
out
```

8. Save and deploy.

Cloudflare will provide a temporary address similar to:

```text
homemade-masala-kitchen.pages.dev
```

## 9. Connect homemademasalakitchen.com

Inside the deployed Pages project:

1. Open **Custom domains**.
2. Select **Set up a custom domain**.
3. Enter:

```text
homemademasalakitchen.com
```

4. Confirm the domain.
5. Add `www.homemademasalakitchen.com` as another custom domain if desired.

Because the domain already uses Cloudflare DNS, Cloudflare normally creates or proposes the necessary DNS records. Use the Pages custom-domain workflow instead of manually guessing an IP address.

Choose one primary address. A simple option is:

```text
homemademasalakitchen.com
```

You can redirect `www` to the main address later.

## 10. Set up a business email address

A good first address is:

```text
orders@homemademasalakitchen.com
```

For free incoming-email forwarding:

1. Cloudflare dashboard → **Compute** → **Email Service** → **Email Routing**.
2. Select `homemademasalakitchen.com`.
3. Onboard/enable Email Routing.
4. Add and verify your existing destination inbox, such as Gmail.
5. Create a routing rule:
   - Custom address: `orders@homemademasalakitchen.com`
   - Destination: your verified Gmail address
6. Send a test email to the new address.

Email Routing forwards received mail. It does not automatically make Gmail send outgoing mail as that domain address.

For proper sending and receiving as `orders@...`, use a mailbox provider such as Google Workspace, Microsoft 365 or Zoho Mail, and add the provider's MX, SPF, DKIM and DMARC records to Cloudflare DNS exactly as provided by that service.

## 11. Publish future changes

After editing menu information or pictures:

```bash
git add .
git commit -m "Update menu"
git push
```

Cloudflare automatically rebuilds and publishes the site.

## Important launch checklist

- Replace the placeholder WhatsApp number.
- Replace placeholder phone number.
- Confirm prices and serving sizes.
- Use your real food photos.
- State delivery zones and fees clearly.
- Add allergen and food-safety information.
- Test every WhatsApp button on a phone.
- Test the website on iPhone and desktop.
- Do not publish a home address unless customers are meant to visit it.
