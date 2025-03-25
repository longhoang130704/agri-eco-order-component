/**
 * @swagger
 * tags:
 *   name: Order
 *   description: API quản lý đơn hàng
 */

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Tạo đơn hàng mới
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               inventoryId:
 *                 type: string
 *               totalAmount:
 *                 type: number
 *               totalPrice:
 *                 type: number
 *               shippingId:
 *                 type: string
 *               productList:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     discount:
 *                       type: number
 *     responses:
 *       201:
 *         description: Đơn hàng được tạo thành công
 *       500:
 *         description: Lỗi server
 *
 *   get:
 *     summary: Lấy danh sách tất cả đơn hàng
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Lấy danh sách thành công
 *       400:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết đơn hàng
 *     tags: [Order]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID của đơn hàng
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy đơn hàng
 *       400:
 *         description: Lỗi server
 *
 *   put:
 *     summary: Cập nhật đơn hàng
 *     tags: [Order]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID của đơn hàng
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, cancelled, shipped, completed]
 *               totalAmount:
 *                 type: number
 *               totalPrice:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy đơn hàng
 *       400:
 *         description: Lỗi server
 *
 *   delete:
 *     summary: Xóa đơn hàng (soft delete)
 *     tags: [Order]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID của đơn hàng
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       400:
 *         description: Lỗi server
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - userId
 *         - orderDetailId
 *         - inventoryId
 *         - totalAmount
 *         - totalPrice
 *         - shippingId
 *       properties:
 *         _id:
 *           type: string
 *           description: ID của đơn hàng (tự sinh bởi MongoDB)
 *         userId:
 *           type: string
 *           description: ID người dùng
 *         orderDetailId:
 *           type: array
 *           items:
 *             type: string
 *             description: Danh sách ID của các orderDetail
 *         inventoryId:
 *           type: string
 *           description: ID của kho hàng liên quan
 *         status:
 *           type: string
 *           enum: [pending, confirmed, cancelled, shipped, completed]
 *           default: pending
 *           description: Trạng thái đơn hàng
 *         totalAmount:
 *           type: number
 *           description: Tổng số lượng sản phẩm
 *         totalPrice:
 *           type: number
 *           description: Tổng giá trị đơn hàng
 *         discount:
 *           type: number
 *           description: Giảm giá (nếu có)
 *         shippingId:
 *           type: string
 *           description: ID của thông tin vận chuyển
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian tạo đơn hàng
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian cập nhật đơn hàng
 *       example:
 *         _id: "6600be4fe6b1ad79c0f3b512"
 *         userId: "65f83a4dbf8cfe001d455b21"
 *         orderDetailId: ["65f83a4dbf8cfe001d455b22", "65f83a4dbf8cfe001d455b23"]
 *         inventoryId: "65f83a4dbf8cfe001d455b25"
 *         status: "pending"
 *         totalAmount: 10
 *         totalPrice: 200000
 *         discount: 5000
 *         shippingId: "65f83a4dbf8cfe001d455b26"
 *         createdAt: "2024-03-26T12:34:56.789Z"
 *         updatedAt: "2024-03-26T12:34:56.789Z"
 */
