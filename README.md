# 💌 Cute Apology Website

> Website permintaan maaf yang lucu, romantis, dan interaktif — dilindungi passcode tanggal spesial.

Built with **React + Vite + Framer Motion**, deployable to Vercel in minutes.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [https://cute-apology.vercel.app/](https://cute-apology.vercel.app/) — passcode: `02032026`

---

## Customization

**Edit isi surat** → `src/components/ApologyLetter.jsx`
```js
const LETTER_CONTENT = {
  greeting: "Hii sayangg,",
  paragraphs: ["..."],
  closing: "Selamanya untukmu,",
  signature: "Aku yang selalu sayang kamu ❤️",
}
```

**Ganti passcode** → `src/components/PasscodeScreen.jsx`
```js
const CORRECT_CODE = '02032026'  // format: DDMMYYYY
```

---

## Tech Stack

`React 18` · `Vite` · `Framer Motion` · `CSS Animations`

---

Made with ❤️