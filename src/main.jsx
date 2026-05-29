import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Function that registers service worker
import { registerSW } from "virtual:pwa-register";

// Register service worker immediately
registerSW({
  immediate: true
});

createRoot(document.getElementById('root')).render(
    <App />
)
