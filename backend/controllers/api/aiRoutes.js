const router = require('express').Router();
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Setup API config
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/generate', async (req, res) => {
    try {
        // const prompt = `Generate a blog post written in the tone of a a tech writer based on the following information:             
        // ${req.body.prompt}
        // """
        // Provide the title for this blog that has been optimized for SEO and the blog post`

        // const response = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [{ "role": "user", "content": prompt }],
        //     temperature: 0.2,
        //     max_tokens: 1000,
        //     top_p: 1.0,
        //     frequency_penalty: 0.0,
        //     presence_penalty: 0.0,
        // });

        // const data = response.data.choices[0].message.content;

        const data = 'title: "The Future of Tech: How AI is Revolutionizing the Industry"\n' +
        '\n' +
        "As technology continues to advance at an unprecedented rate, it's no surprise that artificial intelligence (AI) is becoming increasingly prevalent in the tech industry. From chatbots to self-driving cars, AI is transforming the way we interact with technology and the world around us. In this blog post, we'll explore the ways in which AI is revolutionizing the tech industry and what the future holds for this exciting technology.\n" +
        '\n' +
        'One of the most significant ways in which AI is changing the tech industry is through automation. AI-powered automation is allowing companies to streamline their processes and increase efficiency, saving time and money in the process. For example, AI-powered chatbots can handle customer inquiries and support, freeing up human employees to focus on more complex tasks. Similarly, AI-powered software can automate repetitive tasks, such as data entry or report generation, allowing employees to focus on more strategic work.\n' +
        '\n' +
        'Another area in which AI is making a significant impact is in the development of self-driving cars. Companies like Tesla and Google are leading the charge in this area, using AI to create cars that can navigate roads and traffic without human intervention. While there are still some challenges to overcome, such as ensuring safety and reliability, the potential benefits of self-driving cars are enormous, including reduced traffic congestion, improved safety, and increased accessibility for those who are unable to drive.\n' +
        '\n' +
        'AI is also being used to improve healthcare, with applications ranging from disease diagnosis to drug discovery. For example, AI-powered algorithms can analyze medical images to detect signs of disease, such as cancer, with greater accuracy than human doctors. Similarly, AI can be used to analyze large datasets of patient information to identify patterns and trends that can help researchers develop new treatments and therapies.\n' +
        '\n' +
        'As AI continues to evolve, the possibilities for its use in the tech industry are virtually limitless. From improving customer service to revolutionizing transportation, AI has the potential to transform the way we live and work. However, as with any new technology, there are also potential risks and challenges to consider, such as job displacement and ethical concerns around data privacy and bias.\n' +
        '\n' +
        "In conclusion, AI is already having a significant impact on the tech industry, and its potential for future growth and innovation is enormous. As companies continue to invest in AI research and development, we can expect to see even more exciting applications of this technology in the years to come. Whether you're a tech enthusiast or simply curious about the future of technology, AI is definitely a topic worth exploring."

        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;