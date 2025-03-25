/**
 * @swagger
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       required:
 *         - capacity
 *         - productId
 *         - stock_Quantity
 *         - location
 *       properties:
 *         _id:
 *           type: string
 *           description: ID của kho
 *         capacity:
 *           type: number
 *           description: Sức chứa của kho
 *         productId:
 *           type: string
 *           description: ID sản phẩm trong kho
 *         stock_Quantity:
 *           type: number
 *           description: Số lượng tồn kho hiện tại
 *         location:
 *           type: string
 *           description: Địa chỉ kho
 *         sold_Quantity:
 *           type: number
 *           description: Số lượng đã bán
 *           default: 0
 *         ReorderQuantity:
 *           type: number
 *           description: Ngưỡng cảnh báo nhập thêm hàng
 *           default: 5
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         _id: "6600be4fe6b1ad79c0f3b512"
 *         capacity: 500
 *         productId: "65f83a4dbf8cfe001d455b21"
 *         stock_Quantity: 300
 *         location: "Kho HCM"
 *         sold_Quantity: 50
 *         ReorderQuantity: 5
 *         createdAt: "2024-03-26T12:34:56.789Z"
 *         updatedAt: "2024-03-26T12:34:56.789Z"
 */

/**
 * @swagger
 * tags:
 *   - name: Inventory
 *     description: API quản lý kho hàng
 */

/**
 * @swagger
 * /api/inventory:
 *   post:
 *     summary: Tạo mới một inventory
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               capacity:
 *                 type: string
 *               productId:
 *                 type: string
 *               stock_Quantity:
 *                 type: string
 *               location:
 *                 type: string
 *               sold_Quantity:
 *                 type: string
 *               ReorderQuantity:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo inventory thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       400:
 *         description: Lỗi dữ liệu hoặc productId không tồn tại
 *
 *   get:
 *     summary: Lấy danh sách tất cả inventory
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventory'
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /api/inventory/{id}:
 *   get:
 *     summary: Lấy chi tiết inventory theo ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID inventory
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       404:
 *         description: Không tìm thấy inventory
 *       500:
 *         description: Lỗi server
 *
 *   put:
 *     summary: Cập nhật inventory theo ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID inventory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Lỗi dữ liệu
 *
 *   delete:
 *     summary: Xóa inventory theo ID (soft delete)
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID inventory
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       500:
 *         description: Lỗi server
 */
