import express from 'express';
import {
  createEmpData,
  getEmpData,
  updateEmpData,
  deleteEmpData,
} from '../controllers/emp.js';
import CategoryModel from '../models/category.js';

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

/**
 * @swagger
 * /emp/{id}:
 *   patch:
 *     tags: ["Employee"]
 *     summary: update an employee
 *     description: Api used to update an employee registed in company
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The employee id
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
 *       200:
 *         description: success
 *       400:
 *         description: fail
 *
 */

router.patch('/:id', updateEmpData);

/**
 * @swagger
 * /emp/{id}:
 *   delete:
 *     tags: ["Employee"]
 *     summary: delete an employee
 *     description: Api used to delete an employee registed in company
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The employee id
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: fail
 *
 */

router.delete('/:id', deleteEmpData);

router.get('/category', async (req, res) => {
  try {
    const data = await CategoryModel.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log('server error');
  }
});

export default router;
