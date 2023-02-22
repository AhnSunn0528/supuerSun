// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
//     temperature: 0,
//     max_tokens: 100,
//     top_p: 1.0,
//     frequency_penalty: 0.2,
//     presence_penalty: 0.0,
//     stop: ["\n"],
// });

const { Configuration, OpenAIApi } = require('openai');
// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const configuration = new Configuration({
    apiKey: "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",
});
const OPENAI_API_KEY = "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";
//const openai = new OpenAI(OPENAI_API_KEY);
const openai = new OpenAIApi(configuration);

(async() => {
    const gptResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
        temperature: 0,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,
        stop: ["\n"],
    });

    console.log(gptResponse);
})();