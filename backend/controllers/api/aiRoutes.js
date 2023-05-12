const router = require('express').Router();
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Setup API config
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

router.post('/generate', async (req, res) => {
    try {
        const prompt = `Generate a blog post written in the tone of a a tech writer based on the following information:             
        ${req.body.prompt}
        """
        Provide the title for this blog that has been optimized for SEO and the blog post`

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": prompt }],
            temperature: 0.2,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        const data = response.data.choices[0].message.content;

        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;