// import express from 'express';

// const Router = express.Router()

import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFaculyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartRoute } from '../modules/academicDepartment/academicDepartment.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFaculyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartRoute,
  },
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoutes);

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
