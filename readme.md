Below is a README file for your Vibe Coding Workshop project. It provides an overview of the project, setup instructions, and details about the code structure and functionality. Feel free to tweak it to match your workshop's vibe!

---

# Vibe Coding 101 Workshop

Welcome to the **Vibe Coding 101** workshop! This project is a simple test site built during a coding workshop, designed to teach participants how to create smooth, responsive, and intuitive user experiences. The site features a chat interface that interacts with the **Venice API** (an OpenAI-compatible cloud API service) to provide real-time AI responses.

## Project Overview

This project consists of a single-page web application with:
- A welcoming landing page explaining the concept of "Vibe Coding."
- A fixed-position chat widget that allows users to interact with an AI assistant powered by the Venice API.
- Clean, minimalistic styling with smooth interactions.

The goal is to demonstrate real-time responsiveness, intuitive UI design, and integration with a cloud API—all key principles of "vibe coding."

---

## Features
- **Chat Interface**: Users can type messages and receive responses from the Venice API in real-time.
- **Responsive Design**: The chat widget is fixed to the bottom-right corner and adapts to different screen sizes.
- **Smooth UX**: Messages scroll naturally, and the input field clears after each submission.
- **Error Handling**: Basic error logging and user feedback for failed API calls.

---

## Project Structure

```
vibe-coding-workshop/
├── index.html      # Main HTML file with structure and inline styles
├── script.js       # JavaScript logic for chat functionality and API integration
├── .env            # Environment file storing the API key (not tracked in version control)
└── README.md       # This file
```

---

## Setup Instructions

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A text editor (e.g., VS Code).
- An API key for the Venice API service (stored in `.env`).

### Installation
1. **Clone or Download the Project**:
   - Download the project files or clone the repository to your local machine.

2. **Set Up the Environment**:
   - Create a `.env` file in the root directory.
   - Add your Venice API key as follows:
     ```
     AI_CHATBOT=_2oZ2gz6m0lBoz3m1BqsdVXfIsCEOjwFm5Hbd8-rB9
     ```
   - Note: Replace the example key with your actual Venice API key.

3. **Open the Project**:
   - Open `index.html` in a web browser to view the site.
   - Alternatively, use a local development server (e.g., via VS Code's Live Server extension) for a smoother experience.

4. **Test the Chat**:
   - Type a message in the chat input field and click "Send" to see the AI respond.

---

## Code Breakdown

### `index.html`
- **Purpose**: Defines the structure and styling of the page.
- **Key Components**:
  - A header with a title and description.
  - A main section explaining "Vibe Coding" principles.
  - A chat container with a header, message area (`#chatMessages`), and input field (`#chatInput` + `#sendButton`).
- **Styling**: Inline CSS for simplicity, using a purple accent color (`#6200ea`) and a clean, modern layout.

### `script.js`
- **Purpose**: Handles the chat functionality and API communication.
- **Key Logic**:
  - Listens for clicks on the "Send" button.
  - Displays the user's message in the chat window.
  - Sends the message to the Venice API via a `fetch` request.
  - Displays the AI's response or an error message if the request fails.
  - Scrolls the chat to the latest message.
- **API Configuration**:
  - Uses the `llama-3.3-70b` model.
  - Customizable parameters like `max_tokens` (123), `temperature` (0.7), and `repetition_penalty` (1.2).
  - Hardcoded API key (should be replaced with an environment variable in production).

---

## How It Works
1. User types a message in the input field and clicks "Send."
2. The message is appended to the chat window with a "You: " prefix.
3. The script sends a POST request to the Venice API with the user's message.
4. The API responds with a completion, which is displayed with a "Bot: " prefix.
5. If an error occurs (e.g., network issue or invalid API key), a fallback message is shown.

---

## Improvements & Next Steps
- **Secure API Key**: Replace the hardcoded API key in `script.js` with a reference to `process.env.AI_CHATBOT` (requires a build tool like Vite or a server-side setup).
- **Dynamic Styling**: Move CSS to a separate `.css` file for better maintainability.
- **Loading State**: Add a "typing..." indicator while waiting for the API response.
- **Input Validation**: Prevent sending empty messages with a user-friendly alert.
- **Message History**: Persist chat history using `localStorage`.
- **Streaming Responses**: Enable the `stream: true` option in the API call for real-time response streaming.

---

## Contributing
This is a workshop project, so feel free to experiment! Add features, tweak the design, or integrate other APIs. Share your ideas with the group to keep the vibe going.

---

## Credits
- Built during the **Vibe Coding 101 Workshop** on March 29, 2025.
- Powered by the **Venice API** (xAI-compatible).
- Special thanks to the workshop participants for the collaborative energy!

---

Let me know if you'd like to refine this further or add specific details about your workshop! Happy coding!