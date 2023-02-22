//import openai;
//import requests;

'use strict';

const OpenAI = require('openai-api');
const requests = require('requests');

OpenAI.api_key = "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";
const prompt = "Hello, how are you?"

// response = Requests.AXO.post("https://api.openai.com/v1/engines/davinci-codex/completions",
//     headers = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${OpenAI.api_key}`
//     },
//     json = {
//         "prompt": prompt,
//         "max_tokens": 10
//     }
// )

// requests('https://api.openai.com/v1/engines/davinci-codex/completions', { headers, json })
//     .on('data', function(chunk) {
//         console.log(chunk)
//     })
//     .on('end', function(err) {
//         if (err) return console.log('connection closed due to errors', err);

//         console.log('end');
//     });

var url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
requests({
    url: url,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OpenAI.api_key}`
    },
    body: {
        "prompt": prompt,
        "max_tokens": 10
    },
    json: true
});
//print(response.json()["choices"][0]["text"])