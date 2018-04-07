package service.per_service;

import java.io.Serializable;
import java.util.List;

import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBeanStudent;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
public interface IPerService {

	public Person verify(Person p);
	
	public Leader findLeadById(Serializable id);
	public Student findStuById(Serializable id);
	public Teacher findTeachById(Serializable id) ;
	
	public void updateStu(Student stu);
	public void updateTeach(Teacher teacher);
	public List<Student> getPassedStus(Teacher teacher);//获取审核通过的学生
	
	public PageBeanStudent getDStus(int currentPage, int pageSize,String condition,Leader director);
	public PageBeanStudent getStusAllFinalGrade(int currentPage, int pageSize,String condition);
	
	public void updateDirector(Leader director);
	public Leader getDirectorByStu(Student student);
}