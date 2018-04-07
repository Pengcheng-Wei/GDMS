package entity.doc_entity;

import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月19日   
* 
*/

public class ReaserchProposal extends Doc{
	
	private Integer repro_id;
	private String sub_gogal   ;
	private String sub_content ;
	private String sub_plan    ;
	private String sub_question;
	private String sub_background;
	

	private String sub_refe    ;
	private String t_opt       ;
	private String date        ;
	private String t_time      ;
	private String dept_time   ;
	private String deadline    ;
	private String totalSum    ;
	private String dept_name    ;
	private String dept_opt    ;
	
	private Student student;
	private Teacher teacher;
	
	public String getDept_opt() {
		return dept_opt;
	}

	public void setDept_opt(String dept_opt) {
		this.dept_opt = dept_opt;
	}

	

	public String getDept_name() {
		return dept_name;
	}

	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public String getSub_gogal() {
		return sub_gogal;
	}

	public void setSub_gogal(String sub_gogal) {
		this.sub_gogal = sub_gogal;
	}

	public String getSub_content() {
		return sub_content;
	}

	public void setSub_content(String sub_content) {
		this.sub_content = sub_content;
	}

	public String getSub_plan() {
		return sub_plan;
	}

	public void setSub_plan(String sub_plan) {
		this.sub_plan = sub_plan;
	}

	public String getSub_question() {
		return sub_question;
	}

	public void setSub_question(String sub_question) {
		this.sub_question = sub_question;
	}

	public String getSub_refe() {
		return sub_refe;
	}

	public void setSub_refe(String sub_refe) {
		this.sub_refe = sub_refe;
	}

	public String getT_opt() {
		return t_opt;
	}

	public void setT_opt(String t_opt) {
		this.t_opt = t_opt;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getT_time() {
		return t_time;
	}

	public void setT_time(String t_time) {
		this.t_time = t_time;
	}

	public String getDept_time() {
		return dept_time;
	}

	public void setDept_time(String dept_time) {
		this.dept_time = dept_time;
	}

	public String getDeadline() {
		return deadline;
	}

	public String getSub_background() {
		return sub_background;
	}

	public void setSub_background(String sub_background) {
		this.sub_background = sub_background;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	public String getTotalSum() {
		return totalSum;
	}

	public void setTotalSum(String totalSum) {
		this.totalSum = totalSum;
	}

	public Integer getRepro_id() {
		return repro_id;
	}

	public void setRepro_id(Integer repro_id) {
		this.repro_id = repro_id;
	}

}
