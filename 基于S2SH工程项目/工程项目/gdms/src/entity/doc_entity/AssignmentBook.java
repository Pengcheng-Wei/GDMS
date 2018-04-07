package entity.doc_entity;

import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月17日   
* 
*/
public class AssignmentBook extends Doc{
	private Integer assBook_id;
	private String sub_src;
	private String sub_property;
	private String sub_baseReq;
	private String sub_gogal;
	private String sub_content;
	private String sub_refe;
	private String sub_process;
	private String sub_deptOpt;
	private String sub_deptName;
	private String check_time;
	
	private Student student;
	private Teacher teacher;
	
	
	
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	public Integer getAssBook_id() {
		return assBook_id;
	}
	public void setAssBook_id(Integer assBook_id) {
		this.assBook_id = assBook_id;
	}
	public String getSub_src() {
		return sub_src;
	}
	public void setSub_src(String sub_src) {
		this.sub_src = sub_src;
	}
	public String getSub_property() {
		return sub_property;
	}
	public void setSub_property(String sub_property) {
		this.sub_property = sub_property;
	}
	public String getSub_baseReq() {
		return sub_baseReq;
	}
	public void setSub_baseReq(String sub_baseReq) {
		this.sub_baseReq = sub_baseReq;
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
	public String getSub_refe() {
		return sub_refe;
	}
	public void setSub_refe(String sub_refe) {
		this.sub_refe = sub_refe;
	}
	public String getSub_process() {
		return sub_process;
	}
	public void setSub_process(String sub_process) {
		this.sub_process = sub_process;
	}
	public String getSub_deptOpt() {
		return sub_deptOpt;
	}
	public void setSub_deptOpt(String sub_deptOpt) {
		this.sub_deptOpt = sub_deptOpt;
	}
	public String getSub_deptName() {
		return sub_deptName;
	}
	public void setSub_deptName(String sub_deptName) {
		this.sub_deptName = sub_deptName;
	}
	public String getCheck_time() {
		return check_time;
	}
	public void setCheck_time(String check_time) {
		this.check_time = check_time;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	
}
