const router = require('express').Router();
const { Blog } = require('../../models');
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            order: [['date_created', 'DESC']]
        })
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.status(200).send(blogs);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                },
            ]
        })
        if (!blogData) {
            return res.status(404).json({ error: 'Blog not found' });
        }


        const blog = blogData.get({ plain: true });
        res.status(200).json(blog);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Create a blog
router.post('/', async (req, res) => {
    try {
        const file = req.files.photo;
        const uploadPath = __dirname+ '/../../../portfolio/build/uploads/' + file.name
        const uploadPathTwo = __dirname+ '/../../../portfolio/public/uploads/' + file.name

        await file.mv(uploadPath);
        await file.mv(uploadPathTwo);

        const blogData = await Blog.create({
            ...req.body,
            photo: file.name, // Save the file name or path in your database
            user_id: req.session.user_id,
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a blog
router.delete('/:id', async (req, res) => {

    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }
        res.status(200).json(blogData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Update a blog
router.put('/:id', async (req, res) => {

    try {
        const updatedBlog = await Blog.update(
            {
                title: req.body.title,
                description: req.body.description,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );

        if (!updatedBlog) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;