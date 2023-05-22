const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
console.log(openai)

const getGPTResponse = async (question) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Answer the question strictly based on the content provided like a helpful assistant",
      },
      { role: "assistant", content: question },
      { role: "user", content: question },
    ],
  });

  console.log(completion["data"]["choices"][0]["message"]["content"]);
  return completion["data"]["choices"][0]["message"]["content"];
};

export { getGPTResponse };