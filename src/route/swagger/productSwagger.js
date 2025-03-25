/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Quản lý sản phẩm
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         supplierId:
 *           type: string
 *         inventoryId:
 *           type: string
 *         categoryId:
 *           type: string
 *         productName:
 *           type: string
 *         description:
 *           type: string
 *         imageUrl:
 *           type: string
 *         brand:
 *           type: string
 *         quantityPerUnit:
 *           type: number
 *         buyPrice:
 *           type: number
 *         sellPrice:
 *           type: number
 *         rating:
 *           type: number
 *         numberReviews:
 *           type: number
 *         isFeature:
 *           type: boolean
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Thêm sản phẩm mới
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               supplierId:
 *                 type: string
 *               inventoryId:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               productName:
 *                 type: string
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               brand:
 *                 type: string
 *               quantityPerUnit:
 *                 type: number
 *               buyPrice:
 *                 type: number
 *               sellPrice:
 *                 type: number
 *               rating:
 *                 type: number
 *               numberReviews:
 *                 type: number
 *               isFeature:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       201:
 *         description: Tạo sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Lấy sản phẩm theo ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thông tin sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Không tìm thấy sản phẩm
 */

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Cập nhật sản phẩm
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               brand:
 *                 type: string
 *               quantityPerUnit:
 *                 type: number
 *               buyPrice:
 *                 type: number
 *               sellPrice:
 *                 type: number
 *               isFeature:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Lỗi khi cập nhật
 */

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Xóa sản phẩm
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       500:
 *         description: Lỗi server
 */
