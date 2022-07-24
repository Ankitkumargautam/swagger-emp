import express from 'express';
import {
  createEmpData,
  getEmpData,
  updateEmpData,
  deleteEmpData,
} from '../controllers/emp.js';

const router = express.Router();

//Defining the schema

/**
 * @swagger
 * components:
 *   schemas:
 *     emp:
 *       type: object
 *       required:
 *         - empno
 *         - ename
 *         - job
 *         - hiredate
 *         - salary
 *       properties:
 *         empno:
 *           type: number
 *           description: The auto-generated id of the book
 *         ename:
 *           type: string
 *           description: The emp ename
 *         job:
 *           type: string
 *           description: The emp job name
 *         hiredate:
 *           type: string
 *           description: The emp job name
 *         salary:
 *           type: string
 *           description: The emp job name
 *
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

//This is the starting tag that will come on the top

/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Employee managing API
 */

router.get('/', getEmpData);

/**
 * @swagger
 * /emp:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employee]
 *     basePath: '../'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'models/emp.js'
 *     responses:
 *       200:
 *         description: Employee was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'models/emp.js'
 *       500:
 *         description: Some server error
 */

router.post('/', createEmpData);
router.patch('/:id', updateEmpData);
router.delete('/:id', deleteEmpData);

export default router;
