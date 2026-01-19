# 🌍 GeoJourney --- Smart Travel & City Tracker

GeoJourney is a modern React application that helps users track cities
they've visited across the world using an interactive map. Users can
explore locations, manage city and country lists, and view detailed
information --- all within a clean, responsive UI.

This project demonstrates advanced React concepts such as **useContext,
useMemo, useCallback, closures**, and scalable state management patterns
used in real-world applications.

---

## 📦 Repository Name

**geo-journey**

## 📝 Project Description

> GeoJourney is a React-based travel tracker that allows users to pin
> cities on a map, manage visited locations, and view rich city details.
> The project focuses on performance optimization and clean architecture
> using modern React patterns such as Context API, memoization hooks,
> and functional closures.

---

## ✨ Features

- 🗺️ Interactive map with city markers (Leaflet / OpenStreetMap)\
- 📍 Track visited cities and countries\
- 🧭 View detailed city information (date, notes, links)\
- 🎯 Tab navigation between Cities & Countries\
- ⚡ Optimized performance using useMemo and useCallback\
- 🧠 Global state management using Context API\
- 📱 Fully responsive layout\
- 🎨 Clean dark UI

---

## 🛠️ Tech Stack

- React (Vite)\
- React Router v6\
- Context API (useContext)\
- useMemo & useCallback for performance optimization\
- Leaflet + OpenStreetMap\
- CSS Modules\
- JSON Server (mock backend)

---

## 🧠 React Concepts Used

### useContext

Used to manage global state for: - Cities data\

- Selected city\
- Loading states\
- App-wide actions

### useMemo

Used to: - Prevent unnecessary recalculations (e.g., derived
city/country lists)\

- Optimize expensive computations

### useCallback

Used to: - Memoize event handlers passed to child components\

- Prevent unnecessary re-renders

### Closures

Used to: - Maintain state inside custom hooks\

- Preserve values across renders in event-driven logic

These patterns make the app more **performant, scalable, and
production-ready**.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/geo-journey.git
cd geo-journey
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the JSON Server

```bash
npx json-server --watch data/cities.json --port 9000
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser at:\
http://localhost:5173

---

## 📂 Project Structure

    src/
    ├── components/
    │   ├── Map.jsx
    │   ├── CityList.jsx
    │   ├── CountryList.jsx
    │   ├── CityDetails.jsx
    │   ├── AppNav.jsx
    │   └── ...
    ├── context/
    │   └── CitiesContext.jsx
    ├── hooks/
    │   └── useGeolocation.js
    ├── pages/
    │   ├── AppLayout.jsx
    │   ├── Login.jsx
    │   └── Homepage.jsx
    ├── App.jsx
    └── index.css

---

## 📸 Screenshots

> Add screenshots or a demo GIF here for better GitHub presentation

---

## 🛣️ Future Improvements

- User authentication\
- Cloud backend (Firebase / Supabase)\
- Persistent user profiles\
- Offline-first support\
- Search & filtering for cities\
- Dark/light theme toggle

---

## 🤝 Contributing

Contributions are welcome.

1.  Fork the repository\
2.  Create your branch (`git checkout -b feature/amazing-feature`)\
3.  Commit your changes (`git commit -m "Add amazing feature"`)\
4.  Push to the branch (`git push origin feature/amazing-feature`)\
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ by Pramod

If you like this project, feel free to give it a ⭐ on GitHub!
