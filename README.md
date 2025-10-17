# Roommate Finder

A modern platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can create profiles, browse listings, and connect via chat.


![Roommate Finder Screenshot](https://i.ibb.co/BHnKs9Ds/roommate-Finder.png)


---

## 🌐 Live Site

[Visit the Live Website](https://roommate-finder-256be.web.app/)

---

## Features

- **User Authentication:** Secure email/password login with Google OAuth support. Conditional rendering of login/signup buttons and user profile info.
- **Roommate Listings:** Add, update, browse, and manage roommate posts with detailed info like location, rent, lifestyle preferences, and availability.
- **Protected Routes:** Private pages for adding listings, viewing details, and managing user-specific content. Users are redirected to login if not authenticated.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Dynamic Content:** Featured posts on the homepage, see-more buttons redirecting to detailed roommate profiles, and interactive like system revealing contact information.
- **Interactive UI Elements:** Includes sliders/carousels, modals, dark/light theme toggle, toast notifications, and loading spinners.
- **Modern Animations:** Integration of packages like Lottie React, React Awesome Reveal, and React Simple Typewriter for engaging animations.
- **404 Page:** Custom Not Found page for invalid routes.

---

## Layout Structure

- **Header:** Navigation links for Home, Add to Find Roommate (protected), Browse Listings, My Listings (protected), Login/Signup (conditional). Displays user avatar and logout option when logged in.
- **Main Section:** Renders pages dynamically based on route.
- **Footer:** Contact info, social media links, and Terms & Conditions.

---

## Pages & Functionality

- **Home Page:** Banner slider, featured roommate posts (6 dynamic posts), two extra meaningful sections.
- **Find-Roommate:** Private form for adding roommate listings with fields for title, location, rent, room type, lifestyle, description, availability, and contact info.
- **Browse-Listing-Page:** Table view of all posts with a "See More" button for details.
- **My Listings:** Private table of user-specific posts with update and delete options.
- **Details Page:** Shows full roommate info with like button, dynamic like count, and conditional contact number reveal.
- **Update Page:** Update existing roommate listings (user info read-only).
- **404 Page:** Custom Not Found page.

---

## Technologies & Tools

- **Frontend:** React.js, React Router, Lottie React, React Tooltip
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication (email/password and Google login)
- **Hosting:** Client-side (Netlify/Surge/Firebase), Server-side (Vercel)
- **Environment Variables:** Stored in `.env` for Firebase config keys & MongoDB credentials

---

## Development Guidelines

- Minimum **15 client-side commits** and **8 server-side commits**.
- Meaningful content; avoid placeholders like Lorem Ipsum.
- Unique design inspired by modern platforms like ThemeForest.
- Ensure reload does not break routes and private routes are properly protected.
- Error and success messages displayed via sweet alert.

---

## Notes

- Users cannot like their own posts but can like multiple other posts.
- Contact info is revealed only after liking a profile.
- Passwords must meet complexity: at least one uppercase, one lowercase, and minimum 6 characters.

---

## License

This project is for educational purposes and personal portfolio use.
