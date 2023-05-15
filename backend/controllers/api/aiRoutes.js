const router = require('express').Router();
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Setup API config
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

const taskQueue = [];

router.post('/generate', async (req, res) => {
    try {
        const task = {
            prompt: req.body.prompt,
            status: 'pending',
        };

        // Enqueue the task
        taskQueue.push(task);

        // Return initial response with the task ID
        res.status(202).json({ taskId: taskQueue.indexOf(task) });

        // Process the task asynchronously
        processTask(task);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/generate/status/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const task = taskQueue[taskId];

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (task.status === 'completed') {
        return res.status(200).json(task);
    } else if (task.status === 'failed') {
        return res.status(500).json({ message: 'Task failed' });
    }

    // Task is still in progress, return a pending status
    res.status(202).json({ message: 'Task is still in progress' });
});

const processTask = async (task) => {
    try {
        const prompt = `Generate a blog post written in the tone of a tech writer based on the following information:
      ${task.prompt}
      """
      Provide the title for this blog that has been optimized for SEO and the blog post`;

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.2,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        const data = response.data.choices[0].message.content;

        // Update the task status and result
        task.status = 'completed';
        task.result = data;
    } catch (err) {
        // Handle task processing error
        task.status = 'failed';
        task.error = err;
    }
}

module.exports = router;