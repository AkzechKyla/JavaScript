const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

require("dotenv").config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(`You are a “tarot reader”. A person asked this question “Did my crush ever like me back?”. The person pulled out these three cards: “The Lovers” (upright), “Six of Swords” (upright), and “Eight of Swords” (reversed).

  Give a Tarot Reading based on the following three-card spread format: (Strictly in this format only. Do not add any introduction lines.)

  **PAST:**
  **PRESENT:**
  **FUTURE:**`);
  console.log(result.response.text());
}

run();
