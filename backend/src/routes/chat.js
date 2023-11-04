
// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');

// Using Express Router Class
const router = express.Router();
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

router.post('/', async (req, res) => {
    const { message } = req.body;
    
    // const userMessage = { role: "user", content: message };
    // global.messages.push(userMessage);

    // const response = await fetch('https://api.openai.com/v1/chat/completions', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': `Bearer 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`,
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         model: 'gpt-3.5-turbo',
    //         messages: global.messages,
    //         max_tokens: 100,
    //     }),
    // });
    
    // if (!response.ok) {
    //     const error = await response.json();
    //     console.error('OpenAI API Error:', error);
    //     return res.json({ status: 'error', data: null });
    // }
    
    // const data = await response.json();
    // const botAnswer = data?.choices?.[0]?.message?.content
    // const botMessage = { role: "assistant", content: botAnswer };
    // global.messages.push(botMessage);
    

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
  });
  
  const prompt = "Repeat after me: one, two,";
  client
    .generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    })
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      return res.json(result);
    });
   // return res.json({ status: 'success', data: botAnswer });
});

module.exports = router;
