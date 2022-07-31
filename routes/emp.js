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

/**
 * @swagger
 * /emp:
 *   get:
 *     tags: ["Employee"]
 *     summary: Get all employee
 *     description: Api used to gell all employee registed in company
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: fail
 *
 */

router.get('/', getEmpData);

/**
 * @swagger
 * /emp:
 *   post:
 *     tags: ["Employee"]
 *     summary: Create a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               empno:
 *                 type: number
 *               ename:
 *                 type: string
 *               job:
 *                 type: string
 *               hiredate:
 *                 type: string
 *               salary:
 *                 type: string
 *             required:
 *               -empno
 *               -ename
 *               -job
 *               -hiredate
 *     responses:
 *       201:
 *         description: Employee was successfully created
 *       400:
 *         description: fail
 *       500:
 *         description: Some server error
 */

router.post('/', createEmpData);
router.patch('/:id', updateEmpData);
router.delete('/:id', deleteEmpData);

export default router;
