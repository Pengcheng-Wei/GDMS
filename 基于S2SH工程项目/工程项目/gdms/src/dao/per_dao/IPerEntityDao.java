package dao.per_dao;

import java.io.Serializable;
import java.util.List;

import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年7月31日   
* 
*/
public interface IPerEntityDao {
	public Person findById(Serializable id);//根据id查人
	
	public Leader findLeadById(Serializable id);
	public Student findStuById(Serializable id);
	public Teacher findTeachById(Serializable id);
	
	public void updateStu(Student stu);
	public void updateTeach(Teacher teacher);
	public List<Student> getPassedStus(Teacher teacher);//获取审核通过的学生
	
	public List<Student> getStusForDirector(Integer currentPage, int pageSize,Leader director,String condition);
	public int getStusForDirectorCnt(Leader director, String condition);
	
	public List<Student> getStusAll(Integer currentPage, int pageSize,String condition);
	public int getStusCnt(String condition);
	
	public void updateDirector(Leader director);
	public Leader getDirectorByStu(Student student);
}
