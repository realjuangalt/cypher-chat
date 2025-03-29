Below is an updated `README.md` file for your Vibe Coding 101 project, reflecting its current state as a static site hosted on GitHub Pages, with dual cypherpunk and sci-fi/fantasy styles, Markdown support, and image generation via the Venice API. It includes setup instructions, features, and deployment details.

---

# Vibe Coding 101 - Cypher Chat

Welcome to **Vibe Coding 101 - Cypher Chat**, a dynamic chat application built during a coding workshop to explore intuitive, responsive user experiences. This project features a dual-aesthetic design—switch between a gritty **cypherpunk** style and an elegant **romanticized sci-fi/fantasy** style—while interacting with an AI assistant powered by the Venice API.

## Project Overview

This is a static web application with:
- A chat interface for text and image generation, powered by the Venice API.
- Two visual themes: **Cypherpunk** (neon, dystopian) and **Sci-Fi/Fantasy** (golden, serene).
- Markdown support for formatted text responses.
- Dynamic chat window sizing for optimal screen usage.
- Hosted on GitHub Pages for easy deployment.

---

## Features
- **Dual Aesthetics**:
  - **Cypherpunk**: Neon greens, purples, dark backgrounds, glitch effects, and a hacker vibe.
  - **Sci-Fi/Fantasy**: Golden tones, elegant fonts, classical architecture, and serene landscapes.
- **Chat Interface**: Send text messages or generate images with the `gen:` command (e.g., `gen: a neon city`).
- **Markdown Support**: Bot responses render Markdown (bold, italic, code blocks) for prettier formatting.
- **Responsive Design**: Chat window grows dynamically, up to 80% of viewport height, with manual scrolling.
- **Image Generation**: Uses the Venice API to generate images, displayed inline via base64 data URLs.

---

## Project Structure

```
vibe-coding-101/
├── index.html      # Main HTML file with structure and inline styles
├── script.js       # JavaScript logic for chat, API calls, and style toggling
└── README.md       # This file
```

---

## Setup Instructions

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A GitHub account for hosting.
- An API key for the Venice API (stored in `script.js` as `apiKey`).

### Local Testing
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/realjuangalt/cypher-chat.git
   cd cypher-chat
   ```

2. **Run a Local Server**:
   - Use Python’s built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your browser.

3. **Test Features**:
   - Chat: Type messages like "Tell me about tech" to get a response.
   - Image Generation: Use `gen: a neon city` to generate an image.
   - Style Toggle: Click the top-left button to switch between cypherpunk and sci-fi/fantasy themes.

### Hosting on GitHub Pages
1. **Push to GitHub**:
   - Ensure your repository is public and contains `index.html` and `script.js`.
   - If not already pushed:
     ```bash
     git add index.html script.js
     git commit -m "Initial commit for cypher-chat"
     git branch -M main
     git push -u origin main
     ```

2. **Enable GitHub Pages**:
   - Go to `https://github.com/realjuangalt/cypher-chat` > **Settings** > **Pages**.
   - Set **Source** to `main` branch, root directory (`/`).
   - Save. Your site will be live at `https://realjuangalt.github.io/cypher-chat`.

3. **Custom Domain (Optional)**:
   - Add a custom domain in **Pages** settings (e.g., `vibecoding.com`).
   - Configure DNS with A records pointing to GitHub’s IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record for `www` (e.g., `www.vibecoding.com` -> `realjuangalt.github.io.`).

---

## Code Breakdown

### `index.html`
- **Purpose**: Defines the structure and dual styles (cypherpunk, sci-fi/fantasy).
- **Key Components**:
  - Toggle button for style switching.
  - Header, main content, and chat container.
  - Inline CSS with dynamic selectors (`body.cypherpunk`, `body.scifi-fantasy`).

### `script.js`
- **Purpose**: Handles chat logic, API calls, and style toggling.
- **Key Logic**:
  - Toggles between cypherpunk and sci-fi/fantasy styles and system prompts.
  - Sends text messages to the Venice API for responses.
  - Generates images with `gen:` commands, displaying them as base64 data URLs.
  - Renders bot responses with Markdown using `marked.js`.

---

## How It Works
1. **Chat**: Type a message and press Enter or click "Send" to get a response from the Venice API.
2. **Image Generation**: Use `gen:` (e.g., `gen: a neon city`) to generate and display an image in the chat.
3. **Style Toggle**: Click the top-left button to switch between cypherpunk (neon, hacker) and sci-fi/fantasy (golden, elegant) themes.
4. **Markdown**: Bot responses support Markdown (e.g., **bold**, *italic*, ```code```) for formatted output.

---

## Improvements & Next Steps
- **Image Saving**: Add a "Download" button for images to save them manually (currently displayed as base64 URLs).
- **Dynamic Styling**: Move CSS to a separate `.css` file for better maintainability.
- **Loading State**: Add a "Generating..." indicator for image requests.
- **Message History**: Persist chat history using `localStorage`.
- **Server-Side Saving**: Reintroduce a server (e.g., Node.js on Heroku) to auto-save images to an `images/` folder.

---

## Contributing
This project was built during the Vibe Coding 101 workshop. Feel free to fork, experiment, and contribute! Add new styles, enhance the chat, or integrate other APIs. Share your ideas to keep the vibe alive.

---

## Credits
- Built during the **Vibe Coding 101 Workshop** on March 29, 2025.
- Powered by the **Venice API** (xAI-compatible).
- Markdown rendering via **marked.js**.
- Hosted on **GitHub Pages**.

---

### Testing It
1. **Local**:
   - Run `python -m http.server 8000` and open `http://localhost:8000`.
   - Test chat, image generation, and style toggle.

2. **GitHub Pages**:
   - Visit `https://realjuangalt.github.io/cypher-chat`.
   - Ensure all features work, including HTTPS (resolves "Not secure" warning).

This `README.md` provides a clear overview, setup guide, and future ideas for your project. Add it to your repo with:

```bash
echo "# Vibe Coding 101 - Cypher Chat\n\n..." > README.md
git add README.md
git commit -m "Add README.md"
git push -u origin main
```

Let me know if you’d like to tweak the README further or proceed with hosting steps! The styling should now be fixed, and your site is ready to shine on GitHub Pages.