package service.per_service;

import java.io.Serializable;
import java.util.List;

import dao.per_dao.IPerEntityDao;
import entity.doc_entity.ReviewAudit;
import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBeanReAu;
import other.PageBeanStudent;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
public class PerService implements IPerService {
	private IPerEntityDao perDao;
	private Person daop;
	
	

	@Override
	public Person verify(Person p)
	{
		daop = perDao.findById(p.getId());
		if(daop==null)
		{
			return null;
		}
		else
		{
			if(daop.getPassword().equals(p.getPassword()))
			{
				daop.setId(p.getId());
				return daop;
			}
			else 
				return null;
		}
	}
	
	
	
	
	
	
	public IPerEntityDao getPerDao() {
		return perDao;
	}

	public void setPerDao(IPerEntityDao perDao) {
		this.perDao = perDao;
	}






	@Override
	public Leader findLeadById(Serializable id) {
		return perDao.findLeadById(id);
	}






	@Override
	public void updateStu(Student stu) {
		perDao.updateStu(stu);
		
	}






	@Override
	public Student findStuById(Serializable id) {
		return perDao.findStuById(id);
	}






	@Override
	public List<Student> getPassedStus(Teacher teacher) {
		return perDao.getPassedStus(teacher);
	}






	@Override
	public Teacher findTeachById(Serializable id) {
		return perDao.findTeachById(id);
	}






	@Override
	public void updateTeach(Teacher teacher) {
		perDao.updateTeach(teacher);
	}






	@Override
	public PageBeanStudent getDStus(int currentPage, int pageSize, String condition, Leader director) {
		PageBeanStudent pageBeanStudent = new PageBeanStudent();
		pageBeanStudent.setCurrentPage(currentPage);
		pageBeanStudent.setPageSize(pageSize);
		// 从数据库中读取当前页数据
		List<Student> list = perDao.getStusForDirector(currentPage, pageSize, director, condition);
		pageBeanStudent.setTotalCount(perDao.getStusForDirectorCnt(director, condition));
		pageBeanStudent.setData(list);
		return pageBeanStudent;
	}






	@Override
	public PageBeanStudent getStusAllFinalGrade(int currentPage, int pageSize, String condition) {
		PageBeanStudent pageBeanStudent = new PageBeanStudent();
		pageBeanStudent.setCurrentPage(currentPage);
		pageBeanStudent.setPageSize(pageSize);
		// 从数据库中读取当前页数据
		List<Student> list = perDao.getStusAll(currentPage, pageSize, condition);
		pageBeanStudent.setTotalCount(perDao.getStusCnt(condition));
		pageBeanStudent.setData(list);
		return pageBeanStudent;
	}






	@Override
	public void updateDirector(Leader director) {
		perDao.updateDirector(director);
	}






	@Override
	public Leader getDirectorByStu(Student student) {
		return perDao.getDirectorByStu(student);
	}
}
