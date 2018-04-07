package entity.per_entity;
/**
*
* @author Allen      
* @created 2017年7月31日   
* 
*/
public class Teacher extends Person{
	private String title;
	private String place;
	private Integer id_dept;
	private Integer stuTotal;
	private Integer cStuSum;
	
	
	

	public Integer getId_dept() {
		return id_dept;
	}
	public Integer getStuTotal() {
		return stuTotal;
	}
	public void setStuTotal(Integer stuTotal) {
		this.stuTotal = stuTotal;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "Teacher [title=" + title + ", place=" + place + ", id_dept=" + id_dept + "]";
	}
	public Integer getcStuSum() {
		return cStuSum;
	}
	public void setcStuSum(Integer cStuSum) {
		this.cStuSum = cStuSum;
	}
	public void setId_dept(Integer id_dept) {
		this.id_dept = id_dept;
	}
	
}
