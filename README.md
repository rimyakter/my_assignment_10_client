# Roommate Finder 🏠
![Roommate Finder Screenshot](https://i.ibb.co/BHnKs9Ds/roommate-Finder.png)


---

## 🌐 Live Site

[Visit the Live Website](https://roommate-finder-256be.web.app)

---

## 🔹 Project Overview

**Roommate Finder** is a modern platform that helps individuals find compatible roommates based on **location, budget, lifestyle preferences, and interests**. Users can create profiles, browse listings, and connect via chat. The platform focuses on **user-friendly design, interactive UI, and secure authentication**.

---

## 💻 Technologies & Tools

### Frontend
- React.js  
- React Router  
- Lottie React  
- React Tooltip  
- Tailwind CSS / CSS3 / HTML5  

### Backend
- Node.js  
- Express.js  
- MongoDB  

### Authentication
- Firebase Authentication (Email/Password + Google OAuth)  

### Hosting
- Client-side: Netlify / Surge / Firebase  
- Server-side: Vercel  

### Environment Variables
- Stored in `.env` for Firebase config keys & MongoDB credentials  

---

## ✨ Core Features

- **User Authentication:** Secure login/signup with email/password and Google OAuth. Conditional rendering for user info.  
- **Roommate Listings:** Add, update, browse, and manage posts with detailed info (location, rent, lifestyle, availability).  
- **Protected Routes:** Private pages for adding listings, viewing details, and managing user-specific content.  
- **Responsive Design:** Optimized for mobile, tablet, and desktop.  
- **Dynamic Content:** Featured posts, interactive like system, and "see more" buttons for detailed profiles.  
- **Interactive UI Elements:** Sliders/carousels, modals, dark/light theme toggle, toast notifications, and loading spinners.  
- **Modern Animations:** Lottie React, React Awesome Reveal, React Simple Typewriter for engaging animations.  
- **404 Page:** Custom Not Found page for invalid routes.  

---

## 🏗 Layout Structure

- **Header:** Navigation links (Home, Add to Find Roommate, Browse Listings, My Listings, Login/Signup). Displays user avatar and logout option when logged in.  
- **Main Section:** Renders pages dynamically based on routes.  
- **Footer:** Contact info, social media links, and Terms & Conditions.  

---

## 📄 Pages & Functionality

- **Home Page:** Banner slider, featured roommate posts, additional meaningful sections.  
- **Find-Roommate:** Private form for adding roommate listings (title, location, rent, room type, lifestyle, description, availability, contact).  
- **Browse Listings:** Table view of all posts with "See More" buttons for details.  
- **My Listings:** User-specific posts with update and delete options.  
- **Details Page:** Full roommate info with like button, dynamic like count, conditional contact reveal.  
- **Update Page:** Update existing listings (user info read-only).  
- **404 Page:** Custom Not Found page.  

---

## ⚙️ Dependencies

- react  
- react-dom  
- react-router-dom  
- firebase  
- axios  
- lottie-react  
- react-tooltip  
- react-awesome-reveal  
- react-simple-typewriter  
- sweetalert2  
- tailwindcss  
- node  
- express  
- mongodb  

*(Check `package.json` for full list of dependencies)*

---

## 🚀 How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/rimyakter/my-portfolio-client.git
cd my-portfolio-client
