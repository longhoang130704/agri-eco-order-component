/**
 * @swagger
 * tags:
 *   name: OrderDetail
 *   description: Quản lý chi tiết đơn hàng
 */

/**
 * @swagger
 * /api/orderDetail:
 *   get:
 *     summary: Lấy tất cả chi tiết đơn hàng
 *     tags: [OrderDetail]
 *     responses:
 *       200:
 *         description: Danh sách chi tiết đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderDetail'
 */

/**
 * @swagger
 * /api/orderDetail:
 *   post:
 *     summary: Thêm mới chi tiết đơn hàng
 *     tags: [OrderDetail]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: string
 *               discount:
 *                 type: string allow null
 *     responses:
 *       201:
 *         description: Thêm thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderDetail'
 *       400:
 *         description: productId không tồn tại
 */

/**
 * @swagger
 * /api/orderDetail/{id}:
 *   get:
 *     summary: Lấy chi tiết đơn hàng theo ID
 *     tags: [OrderDetail]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của OrderDetail
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thông tin chi tiết đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderDetail'
 *       404:
 *         description: Không tìm thấy OrderDetail
 */

/**
 * @swagger
 * /api/orderDetail/{id}:
 *   put:
 *     summary: Cập nhật chi tiết đơn hàng
 *     tags: [OrderDetail]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của OrderDetail
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderDetailInput'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderDetail'
 *       404:
 *         description: Không tìm thấy OrderDetail
 */

/**
 * @swagger
 * /api/orderDetail/{id}:
 *   delete:
 *     summary: Xóa mềm chi tiết đơn hàng
 *     tags: [OrderDetail]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của OrderDetail
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderDetail:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 605c72b3fc13ae3bdc000001
 *         productId:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: 605c72b3fc13ae3bdc000002
 *             productName:
 *               type: string
 *               example: Táo Mỹ
 *         quantity:
 *           type: number
 *           example: 10
 *         discount:
 *           type: number
 *           example: 5
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
