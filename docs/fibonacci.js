/**
 * @swagger
 * tags:
 *   name: Fibonacci
 *   description: Fibonacci algorithm
 */

/**
 * @swagger
 * /v1/fibonacci:
 *  get:
 *    description: Get Fibonacci sequence
 *    tags: [Fibonacci]
 *    parameters:
 *     - in: query
 *       name: n
 *       description: Number n of Fibonacci
 *       required: true
 *       type: number
 *    responses:
 *      "200":
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Fibonacci'
 */
