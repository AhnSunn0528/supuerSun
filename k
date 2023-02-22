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

curl https://api.openai.com/v1/models \
  -H 'Authorization: Bearer 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' \
  -H 'OpenAI-Organization: org-n2gjHe4TFiETEQN91veS4r5S'
  

curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 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" \
-d '{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'


{"id":"cmpl-6l9apNSWiA5ZHU9HeeX64Ly7yiHBu","object":"text_completion","created":1676696311,
"model":"text-davinci-003","choices":[{"text":"\n\nThis is indeed a test","index":0,"logprobs":null,"finish_reason":"length"}],
"usage":{"prompt_tokens":5,"completion_tokens":7,"total_tokens":12}}


curl https://api.openai.com/v1/models/text-davinci-003 \
  -H 'Authorization: Bearer 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'
{
  "id": "text-davinci-003",
  "object": "model",
  "created": 1669599635,
  "owned_by": "openai-internal",
  "permission": [
    {
      "id": "modelperm-uMf6VYZzCViLNDAJNdPIL0pI",
      "object": "model_permission",
      "created": 1676599391,
      "allow_create_engine": false,
      "allow_sampling": true,
      "allow_logprobs": true,
      "allow_search_indices": false,
      "allow_view": true,
      "allow_fine_tuning": false,
      "organization": "*",
      "group": null,
      "is_blocking": false
    }
  ],
  "root": "text-davinci-003",
  "parent": null
}