package entity.doc_entity;

import java.util.Date;

import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
public class Subject {
	
	private Integer sub_id;
	private String subName;
	private String en_name;
	private String intro;
	private String tech;
	private String faceTo;
	private String sub_type;
	private String major_direction;
	
	private String direcOpt;
	private String leadOpt;
	private String status;
	
	private Integer stuSum=0;
	
	
	private Teacher teacher;  //一个老师对应多个项目 one 2 many


	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public Subject(){
		
	}

	public Integer getSub_id() {
		return sub_id;
	}
	public void setSub_id(Integer sub_id) {
		this.sub_id = sub_id;
	}
	public String getSubName() {
		return subName;
	}
	public void setSubName(String subName) {
		this.subName = subName;
	}
	public String getEn_name() {
		return en_name;
	}
	public void setEn_name(String en_name) {
		this.en_name = en_name;
	}

	public String getTech() {
		return tech;
	}
	public void setTech(String tech) {
		this.tech = tech;
	}
	
	public String getFaceTo() {
		return faceTo;
	}
	public void setFaceTo(String faceTo) {
		this.faceTo = faceTo;
	}
	public String getSub_type() {
		return sub_type;
	}
	public void setSub_type(String sub_type) {
		this.sub_type = sub_type;
	}
	
	public String getMajor_direction() {
		return major_direction;
	}
	public void setMajor_direction(String major_direction) {
		this.major_direction = major_direction;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}



	public String getDirecOpt() {
		return direcOpt;
	}

	public Integer getStuSum() {
		return stuSum;
	}

	public void setStuSum(Integer stuSum) {
		this.stuSum = stuSum;
	}

	public void setDirecOpt(String direcOpt) {
		this.direcOpt = direcOpt;
	}

	public String getLeadOpt() {
		return leadOpt;
	}

	public void setLeadOpt(String leadOpt) {
		this.leadOpt = leadOpt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Subject [sub_id=" + sub_id + ", subName=" + subName + ", faceTo=" + faceTo + ", sub_type=" + sub_type
				+ ", major_direction=" + major_direction + ", direcOpt=" + direcOpt + ", leadOpt=" + leadOpt
				+ ", status=" + status + ", stuSum=" + stuSum + "]";
	}




	
	
	
	
	
	
}
