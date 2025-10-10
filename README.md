# AppStore — Productive Apps

**Repository:** [Rafi570/Productive-Apps](https://github.com/Rafi570/Productive-Apps)

---

## 🧾 Overview

**AppStore (Productive Apps)** is a complete responsive web application built using **React + Vite**. It simulates an App Store where users can browse, search, view details, and install or uninstall apps with persistent data using `localStorage`. The UI is elegant, responsive, and inspired by modern app marketplaces.

---

## 🧱 Key Features

### 🏠 Home Page

* Hero Banner with heading and two functional buttons:

  * **App Store** → redirects to the real App Store
  * **Play Store** → redirects to Google Play Store
* 3 State Cards (statistics section)
* **Top Apps Section:** Displays 8 popular apps (4-column grid)
* **Show All Button:** Navigates to the All Apps page

### 📱 All Apps Page

* Displays all available apps from local JSON data.
* **Live Search:** Case-insensitive filtering by app title.
* Shows **Total Apps Count** and a **No App Found** message when no matches.
* Each app card displays title, rating, downloads, and image.

### 📊 App Details Page

* Left: App image
* Right: App details — title, description, company, size, rating, reviews, and downloads.
* **Install Button:**

  * Saves the app to `localStorage`
  * Shows Toast notification on success
  * Button text changes to **Installed** and becomes disabled
* **Recharts Graph:** Displays app rating distribution (1–5 stars)
* **App Not Found Handling:** Custom component `DataFound` shows when invalid app ID is accessed.

### 💾 My Installation Page

* Lists all installed apps (retrieved from `localStorage`)
* **Uninstall Button:** Removes app from UI and `localStorage`
* **Sorting Dropdown:** Sorts apps by downloads — High → Low / Low → High
* Toast notifications for all actions

### ⚙️ Additional Pages

* **Custom 404 Error Page:** Shown for invalid routes
* **Loading Animations:** Implemented for search and page navigation
* **Fully Responsive Layout:** Works smoothly on mobile, tablet, and desktop

---

## 🧩 Data Schema Example

```json
{
  "image": "https://example.com/app.png",
  "title": "Task Tracker",
  "companyName": "Focus Inc.",
  "id": 1,
  "description": "Track your daily tasks with productivity insights.",
  "size": 50,
  "reviews": 1400,
  "ratingAvg": 4.7,
  "downloads": 85000,
  "ratings": [
    { "name": "1 star", "count": 10 },
    { "name": "2 star", "count": 20 },
    { "name": "3 star", "count": 80 },
    { "name": "4 star", "count": 300 },
    { "name": "5 star", "count": 990 }
  ]
}
```

> Contains 12–20 objects stored in `src/data/apps.js`.

---

## 🧰 Technologies Used

* **React.js (Vite)** — Frontend framework
* **React Router v6** — Navigation and routing
* **Tailwind CSS** — Styling and responsiveness
* **Recharts** — Visualization for app ratings
* **localStorage API** — Persistent storage for installation data
* **SweetAlert2 / react-toastify** — Toast messages for feedback

---

## 📂 Project Structure

```
Productive-Apps/
├─ public/
│  └─ assets/ (images, icons)
├─ src/
│  ├─ assets/ → Images and icons
│  ├─ components/
│  │  ├─ Header.jsx → Navigation bar with GitHub link
│  │  ├─ Footer.jsx → Custom creative footer
│  │  ├─ TrendingApp.jsx → For top apps section
│  │  ├─ DisplayAppsContainer.jsx → Displays all apps with search & loader
│  │  ├─ DataFound.jsx → Handles “App Not Found” case
│  │  ├─ InstallCard.jsx → For installed apps in My Installation page
│  │  ├─ SkeletonLoader.jsx → Loading animation during search/page change
│  │  └─ Utility/Utility.js → LocalStorage and helper functions
│  ├─ pages/
│  │  ├─ Home.jsx → Banner, Top Apps
│  │  ├─ Apps.jsx → All Apps list with search
│  │  ├─ AppDetails.jsx → App details with install button & Recharts
│  │  ├─ Installations.jsx → Installed apps list & sorting
│  │  └─ ErrorPage.jsx → Custom 404 page
│  ├─ App.jsx → Root component with routes
│  ├─ main.jsx → React entry point
│  └─ data/apps.js → Contains JSON app data
├─ .gitignore
├─ README.md
├─ package.json
├─ vite.config.js
└─ eslint.config.js
```

---


---

## ⚙️ Local Setup

```bash
git clone https://github.com/Rafi570/Productive-Apps.git
cd Productive-Apps
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

---

## 🚀 Deployment Guide

Recommended Platforms: **Netlify**, **Vercel**, or **Cloudflare Pages**.

### 🔧 Netlify Setup

Add a `_redirects` file in the `public/` folder:

```
/*    /index.html   200
```

> This ensures React Router routes work after reload.

After building (`npm run build`), deploy the `dist/` folder.

### ✅ Verify Before Deployment

* No console errors
* Fully responsive UI
* Navigation works after reload
* Toasts display properly
* Install/Uninstall persists in localStorage

---

## 🧾 Production Checklist

* [x] Responsive for all devices
* [x] Live search working
* [x] App not found message visible (`DataFound`)
* [x] LocalStorage install/uninstall functional
* [x] Sorting dropdown implemented
* [x] Toast and Loader integrated
* [x] No errors on page reload
* [x] Deployed successfully
* [x] At least 5+ commits done

---

## 👨‍💻 Author

**Hasan Rafi Ahmed**
📍 Barishal Information Technology College
🔗 [GitHub Profile](https://github.com/Rafi570)

---

## 💬 Credits

* Project Developed by **Hasan Rafi Ahmed**
* UI inspired by Figma challenge requirements
* Built with ❤️ using React, Tailwind CSS, and Recharts
