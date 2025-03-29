// Get DOM elements
const sendButton = document.getElementById("sendButton");
const inputField = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const styleToggle = document.getElementById("styleToggle");

// Shared API key (replace with process.env.AI_CHATBOT in production)
const apiKey = "_2oZ2gz6m0lBoz3m1BqsdVXfIsCEOjwFm5Hbd8-rB9";

// Include marked.js for Markdown parsing
if (!window.marked) {
  console.error("Please include marked.js in your HTML for Markdown support.");
}

// Style state
let isCypherpunk = true;

// System prompts
const systemPrompts = {
  cypherpunk: "You are a cypherpunk AI assistant, cryptic and sharp. Embrace a dark, neon-lit aesthetic—think glitchy tech, encrypted grids, and rebellious undertones. For text, respond with a terse, futuristic tone using Markdown for formatting (e.g., **bold**, *italic*, ```code```). For image prompts (prefixed with 'gen:'), craft visuals with neon greens, purples, dark backgrounds, and a dystopian, hacker vibe.",
  scifiFantasy: "You are a regal AI companion, elegant and wise, from a romanticized sci-fi/fantasy realm. Blend futuristic grandeur with classical beauty—think majestic alien landscapes, ornate architecture, and celestial serenity. For text, respond with a poetic, graceful tone using Markdown (e.g., **bold**, *italic*, ```code```). For image prompts (prefixed with 'gen:'), craft visuals of grand terraces with classical arches, cascading waterfalls, glowing skies, and characters in flowing ceremonial attire, exuding otherworldly elegance."
};

// Toggle style function
styleToggle.addEventListener("click", () => {
  isCypherpunk = !isCypherpunk;
  document.body.className = isCypherpunk ? "cypherpunk" : "scifi-fantasy";
  styleToggle.textContent = isCypherpunk ? "Toggle to Sci-Fi/Fantasy" : "Toggle to Cypherpunk";
});

// Function to send message or generate image
async function sendMessage() {
  const userMessage = inputField.value.trim();

  if (!userMessage) {
    console.log("No signal transmitted.");
    return;
  }

  // Display user message (plain text, no Markdown for user input)
  const userMessageElement = document.createElement("div");
  userMessageElement.textContent = `${userMessage}`;
  userMessageElement.classList.add("user-message");
  chatMessages.appendChild(userMessageElement);

  // Clear input field
  inputField.value = "";

  console.log("Processing signal:", userMessage);

  // Check if user wants to generate an image
  if (userMessage.toLowerCase().startsWith("gen:")) {
    const imagePrompt = userMessage.slice(4).trim();
    await generateImage(imagePrompt);
  } else {
    // Handle text response
    await fetchTextResponse(userMessage);
  }
}

// Function to fetch text response from Venice API
async function fetchTextResponse(userMessage) {
  try {
    const response = await fetch("https://api.venice.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b",
        messages: [
          { role: "system", content: isCypherpunk ? systemPrompts.cypherpunk : systemPrompts.scifiFantasy },
          { role: "user", content: userMessage }
        ],
        frequency_penalty: 0,
        presence_penalty: 0,
        repetition_penalty: 1.2,
        n: 1,
        max_tokens: 500,
        temperature: 0.7,
        top_k: 40,
        top_p: 0.9,
        min_p: 0.05,
        stop: null,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Text API Response:", data);
    const botMessage = data.choices?.[0]?.message?.content || "Error: Signal lost in the void.";

    // Display bot message with Markdown rendering
    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    botMessageElement.innerHTML = marked.parse(botMessage);
    chatMessages.appendChild(botMessageElement);
  } catch (error) {
    console.error("Error in the grid:", error);
    const errorMessageElement = document.createElement("div");
    errorMessageElement.textContent = "System: Grid failure detected.";
    errorMessageElement.classList.add("bot-message");
    chatMessages.appendChild(errorMessageElement);
  }
}

// Function to generate and display an image
async function generateImage(imagePrompt) {
  try {
    // Clean the prompt
    let cleanedPrompt = imagePrompt.replace(/^make me an image of /i, '').trim();
    const finalPrompt = isCypherpunk
      ? `A cypherpunk vision of ${cleanedPrompt}, drenched in neon greens and purples, set against a dark, glitchy dystopian backdrop, with a rebellious hacker vibe`
      : `A romanticized sci-fi fantasy vision of ${cleanedPrompt}, featuring grand terraces with classical arches, cascading waterfalls, glowing celestial skies, and elegant figures in flowing ceremonial attire, blending futuristic technology with serene natural beauty`;

    // Generate image via Venice API
    const response = await fetch("https://api.venice.ai/api/v1/image/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "flux-dev-uncensored",
        prompt: finalPrompt,
        negative_prompt: isCypherpunk ? "bright daylight, soft pastels, realistic textures" : "dark dystopia, neon overkill, gritty chaos",
        height: 512,
        width: 512,
        steps: 25,
        cfg_scale: 7.5,
        seed: 123456789,
        safe_mode: false,
        return_binary: false,
        format: "webp"
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Image API Error Response:", errorData);
      throw new Error(`Image API Error: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log("Image API Response:", data);

    // Get base64 image data from 'images' field
    const images = data.images || [];
    if (!images.length || !images[0]) {
      throw new Error("No image data returned in 'images' field");
    }

    const base64Image = images[0];
    const imageSrc = `data:image/webp;base64,${base64Image}`;

    // Display image in chat using base64 data URL
    const imageElement = document.createElement("div");
    imageElement.classList.add("bot-message");
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Generated image: ${cleanedPrompt}`;
    img.style.maxWidth = "100%";
    img.style.border = "1px solid " + (isCypherpunk ? "#9933ff" : "#ffd700");
    imageElement.appendChild(img);
    chatMessages.appendChild(imageElement);

  } catch (error) {
    console.error("Image generation failed:", error);
    const errorMessageElement = document.createElement("div");
    errorMessageElement.textContent = `System: ${isCypherpunk ? "Grid" : "Celestial"} offline - ${error.message}`;
    errorMessageElement.classList.add("bot-message");
    chatMessages.appendChild(errorMessageElement);
  }
}

// Send message on button click
sendButton.addEventListener("click", sendMessage);

// Send message on Enter key press
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

// Set initial toggle button text and ensure style applies
styleToggle.textContent = "Toggle to Sci-Fi/Fantasy";
document.body.className = "cypherpunk"; // Force apply on load