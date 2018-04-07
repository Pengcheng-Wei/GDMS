package entity.per_entity;

import entity.doc_entity.AssignmentBook;
import entity.doc_entity.InterimCheck;
import entity.doc_entity.ReaserchProposal;
import entity.doc_entity.Subject;

/**
*
* @author Allen      
* @created 2017年7月31日   
* 
*/
public class Student extends Person{
	private String gender;
	private String dept;
	private String major;
	private String grade;
	private String stype;
	private String subStatus;
	private String graRep;
	private String repeatRep;
	private String finalGrade;
	private Integer cid;
	private Integer id_dept;
	private Subject subject;
	private Teacher teacher;
	private AssignmentBook assignmentBook;
	private ReaserchProposal reaserchProposal;
	private InterimCheck interimCheck;
	
	public InterimCheck getInterimCheck() {
		return interimCheck;
	}
	public void setInterimCheck(InterimCheck interimCheck) {
		this.interimCheck = interimCheck;
	}
	public AssignmentBook getAssignmentBook() {
		return assignmentBook;
	}
	public void setAssignmentBook(AssignmentBook assignmentBook) {
		this.assignmentBook = assignmentBook;
	}
	public String getStype() {
		return stype;
	}
	public void setStype(String stype) {
		this.stype = stype;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getSubStatus() {
		return subStatus;
	}
	public void setSubStatus(String subStatus) {
		this.subStatus = subStatus;
	}
	public Subject getSubject() {
		return subject;
	}
	public String getFinalGrade() {
		return finalGrade;
	}
	public void setFinalGrade(String finalGrade) {
		this.finalGrade = finalGrade;
	}
	public void setSubject(Subject subject) {
		this.subject = subject;
	}
	public String getGraRep() {
		return graRep;
	}
	public void setGraRep(String graRep) {
		this.graRep = graRep;
	}
	public Integer getId_dept() {
		return id_dept;
	}
	public void setId_dept(Integer id_dept) {
		this.id_dept = id_dept;
	}
	public String getRepeatRep() {
		return repeatRep;
	}
	public Integer getCid() {
		return cid;
	}
	public void setCid(Integer cid) {
		this.cid = cid;
	}
	public void setRepeatRep(String repeatRep) {
		this.repeatRep = repeatRep;
	}
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	public ReaserchProposal getReaserchProposal() {
		return reaserchProposal;
	}
	public void setReaserchProposal(ReaserchProposal reaserchProposal) {
		this.reaserchProposal = reaserchProposal;
	}
	
	
	
	
	
	
}
