package entity.doc_entity;

import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月22日   
* 
*/
public class ReviewAudit extends Doc{
	private Integer reau_id ;
	private String t_opt   ;
	private String t_time  ;
	private String c_opt   ;
	private String c_time  ;
	private String cid  ;
	private String did  ;
	private String d_opt   ;
	private String d_time  ;
	private String l_opt   ;
	private String l_time  ;
	private String d_name  ;
	private String l_name  ;
	private String c_name  ;
	private String date    ;
	private String totalSum;
	private Integer t_grade  ;
	private Integer c_grade  ;
	private Integer d_grade  ;
	private Student student;
	private Teacher teacher;
	public Integer getT_grade() {
		return t_grade;
	}
	public void setT_grade(Integer t_grade) {
		this.t_grade = t_grade;
	}
	public Integer getC_grade() {
		return c_grade;
	}
	public void setC_grade(Integer c_grade) {
		this.c_grade = c_grade;
	}
	public Integer getD_grade() {
		return d_grade;
	}
	public void setD_grade(Integer d_grade) {
		this.d_grade = d_grade;
	}
	public Integer getReau_id() {
		return reau_id;
	}
	public void setReau_id(Integer reau_id) {
		this.reau_id = reau_id;
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
	public String getC_opt() {
		return c_opt;
	}
	public void setC_opt(String c_opt) {
		this.c_opt = c_opt;
	}
	public String getC_time() {
		return c_time;
	}
	public void setC_time(String c_time) {
		this.c_time = c_time;
	}
	public String getD_opt() {
		return d_opt;
	}
	public void setD_opt(String d_opt) {
		this.d_opt = d_opt;
	}
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getD_time() {
		return d_time;
	}
	public void setD_time(String d_time) {
		this.d_time = d_time;
	}
	public String getL_opt() {
		return l_opt;
	}
	public void setL_opt(String l_opt) {
		this.l_opt = l_opt;
	}
	public String getL_time() {
		return l_time;
	}
	public void setL_time(String l_time) {
		this.l_time = l_time;
	}
	public String getD_name() {
		return d_name;
	}
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	public String getDid() {
		return did;
	}
	public void setDid(String did) {
		this.did = did;
	}
	public void setD_name(String d_name) {
		this.d_name = d_name;
	}
	public String getL_name() {
		return l_name;
	}
	public void setL_name(String l_name) {
		this.l_name = l_name;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTotalSum() {
		return totalSum;
	}
	public void setTotalSum(String totalSum) {
		this.totalSum = totalSum;
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
	
}
