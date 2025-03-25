/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Quản lý danh mục sản phẩm
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Lấy danh sách tất cả danh mục
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Danh sách danh mục
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Thêm danh mục mới
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Thêm danh mục thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: Lấy chi tiết danh mục theo ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 605c72b3fc13ae3bdc000001
 *     responses:
 *       200:
 *         description: Thông tin danh mục
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Không tìm thấy danh mục
 */

/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Cập nhật danh mục
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 605c72b3fc13ae3bdc000001
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryInput'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Xóa mềm danh mục
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 605c72b3fc13ae3bdc000001
 *     responses:
 *       200:
 *         description: Xóa thành công
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 605c72b3fc13ae3bdc000001
 *         categoryName:
 *           type: string
 *           example: Rau củ
 *         description:
 *           type: string
 *           example: Các loại rau củ tươi
 *         imageUrl:
 *           type: string
 *           example: https://example.com/image.png
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
