const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const aiRoutes = require('./aiRoutes');

router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/ai', aiRoutes);

module.exports = router;