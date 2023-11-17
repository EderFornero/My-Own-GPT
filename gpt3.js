import express from 'express'
import openai from './config/openai.js'
import readlineSync from 'readline-sync'
import colors from 'colors'
const app = express()
const port = 3000

app.use(express.json())
app.listen(port, () => console.log("Server running on port: " + port))

const main = async (prompt) => {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 30,
  });
  console.log(completion.choices[0].text);
}

const text = 'Háblame de fútbol';
const prompt = `${text}`;

main(prompt)