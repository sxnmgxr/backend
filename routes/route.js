const router = require('express').Router();

const { adminRegister, adminLogIn, getAdminDetail } = require();

const {
  sclassCreate,
  sclassList,
  deleteSclass,
  deleteSclasses,
  getSclassDetail,
  getSclassStudents,
} = require();
const { complainCreate, complainList } = require();
const {
  noticeCreate,
  noticeList,
  deleteNotices,
  deleteNotice,
  updateNotice,
} = require();

const {
  studentRegister,
  studentLogIn,
  getStudents,
  getStudentDetail,
  deleteStudents,
  deleteStudent,
  updateStudent,
  deleteStudentsByClass,
  updateExamResult,
  clearAllStudentsAttendanceBySubject,
  clearAllStudentsAttendance,
  removeStudentAttendanceBySubject,
  removeStudentAttendance,
} = require();

const {
  subjectCreate,
  classSubjects,
  deleteSubjectsByClass,
  getSubjectDetail,
  deleteSubject,
  freeSubjectList,
  allSubjects,
  deleteSubjects,
} = require();

const {
  teacherRegister,
  teacherLogIn,
  getTeachers,
  getTeacherDetail,
  deleteTeachers,
  deleteTeachersByClass,
  deleteTeacher,
  updateTeacherSubject,
  teacherAttendance,
} = require();

//admin
router.post('/AdminReg', adminRegister);
router.post('/AdminLogin', adminLogIn);

router.get('/Admin/:id', getAdminDetail);
router.delete('/Admin/:id', deleteAdmin);

//Student
router.post('/StudentReg', studentRegister);
router.post('/StudentLogin', studentLogIn);

router.get('/students/:id', getStudents);
router.get('student/:id', getStudentDetail);

router.delete('/Students/:id', deleteStudents);
router.delete('StudentsClass/:id', deleteStudentsByClass);
router.delete('/Student/:id', deleteStudent);

router.put('/Student/:id', updateStudent);

router.put('/UpdateExamResult/:id', updateExamResult);

router.put('/StudentAttendance/:id', studentAttendance);

router.put(
  '/RemoveAllStudentsSubAtten/:id',
  clearAllStudentsAttendanceBySubject,
);
router.put('/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);
