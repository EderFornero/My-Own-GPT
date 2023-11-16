// const OpenAI = require("openai")
const dotenv = require("dotenv")
dotenv.config()
// //api key config
// const apiKey = process.env.OPENAI_API_KEY; 
// const openai = new OpenAI({ apiKey });

// const getCompletion = async (prompt) => { 
//   try{
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo-0613",
//       prompt: prompt,
//       max_tokens: 200
//     })

//     return response.choices[0].text.trim();
//   }catch(error){
//     console.log("Something went wrong", error)
//     throw error; 
//   }
// } 


// const text = "Háblame de fútbol"

// const prompt = `${text}`

// getCompletion(prompt)
// .then((res) => console.log(res))
// .catch((error) => console.log(error))

const OpenAI = require("openai")
const apiKey = process.env.OPENAI_API_KEY; 
const openai = new OpenAI({ apiKey });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();