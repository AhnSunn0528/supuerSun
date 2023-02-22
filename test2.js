const OpenAI = require('openai-api');
// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)

const OPENAI_API_KEY = "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";
const openai = new OpenAI(OPENAI_API_KEY);

(async() => {
    const gptResponse = await openai.complete({
        engine: 'text-davinci-003',
        prompt: 'Write in a diary for me',
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "testing"]
    });

    console.log(gptResponse.data);
})();

// (async() => {
//     const gptResponse = await openai.complete({
//         engine: 'davinci',
//         prompt: 'this is a test',
//         maxTokens: 5,
//         temperature: 0.9,
//         topP: 1,
//         presencePenalty: 0,
//         frequencyPenalty: 0,
//         bestOf: 1,
//         n: 1,
//         stream: false,
//         stop: ['\n', "testing"]
//     });

//     console.log(gptResponse.data);
// })();

// {
// id: 'cmpl-6lAFIs9goNElaQ9mEdbB7UVnrWvTh',
// object: 'text_completion',
// created: 1676698820,
// model: 'davinci',
// choices: [
//     {
//     text: '). Your Home page page',
//     index: 0,
//     logprobs: null,
//     finish_reason: 'length'
//     }
// ],
// usage: { prompt_tokens: 4, completion_tokens: 5, total_tokens: 9 }
// }

// Search API call
// (async() => {
//     const gptResponse = await openai.search({
//         engine: 'davinci',
//         documents: ["White House", "hospital", "school"],
//         query: "the president"
//     });

//     console.log(gptResponse.data);
// })();


// Answers API call
// (async() => {
//     try {
//         const gptResponse = await openai.answers({
//             // "documents": ["Puppy A is happy.", "Puppy B is sad."],
//             "question": "which puppy is happy?",
//             "search_model": "ada",
//             "model": "curie",
//             "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
//             "examples": [
//                 ["What is human life expectancy in the United States?", "78 years."]
//             ],
//             "max_tokens": 5,
//             "stop": ["\n", "<|endoftext|>"],
//         });
//         console.log(gptResponse.data);
//     } catch (error) {
//         console.log(error);
//     }
// })();
/*
// Classification API call
(async() => {
    const gptResponse = await openai.classification({
        "examples": [
            ["A happy moment", "Positive"],
            ["I am sad.", "Negative"],
            ["I am feeling awesome", "Positive"]
        ],
        "labels": ["Positive", "Negative", "Neutral"],
        "query": "It is a raining day :(",
        "search_model": "ada",
        "model": "curie"
    });

    console.log(gptResponse.data);
})();

// Engines API call
(async() => {
    const gptResponse = await openai.engines();

    console.log(gptResponse.data);
})();

// Embeddings API call 
Documentation: https: //beta.openai.com/docs/api-reference/embeddings

(async() => {
    const gptResponse = await openai.embeddings({
        "engine": "test-similarity-babbage-001",
        "input": [
            "A happy moment",
            "I am sad.",
            "I am feeling awesome"
        ],
    });

    console.log(gptResponse.data); // see index.d.ts interface Embedding
})();
*/