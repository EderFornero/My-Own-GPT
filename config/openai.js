import "dotenv/config.js"
import  OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

const chatCompletion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "What is Spiderman?"}],
});
console.log(chatCompletion.choices[0].message);

export default openai; 