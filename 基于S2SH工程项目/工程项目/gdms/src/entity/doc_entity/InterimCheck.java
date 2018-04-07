package entity.doc_entity;

import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月20日   
* 
*/
public class InterimCheck extends Doc{
	private Integer inCheck_id  ;
	private String finish      ;
	private String unfinish    ;
	private String sub_plan    ;
	private String t_opt       ;
	private String t_time      ;
	private String date        ;
	private Student student;
	private Teacher teacher;
	
	
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public Integer getInCheck_id() {
		return inCheck_id;
	}
	public void setInCheck_id(Integer inCheck_id) {
		this.inCheck_id = inCheck_id;
	}
	public String getFinish() {
		return finish;
	}
	public void setFinish(String finish) {
		this.finish = finish;
	}
	public String getUnfinish() {
		return unfinish;
	}
	public void setUnfinish(String unfinish) {
		this.unfinish = unfinish;
	}
	public String getSub_plan() {
		return sub_plan;
	}
	public void setSub_plan(String sub_plan) {
		this.sub_plan = sub_plan;
	}
	public String getT_opt() {
		return t_opt;
	}
	public void setT_opt(String t_opt) {
		this.t_opt = t_opt;
	}
	public String getT_time() {
		return t_time;
	}
	public void setT_time(String t_time) {
		this.t_time = t_time;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
}                              
                               