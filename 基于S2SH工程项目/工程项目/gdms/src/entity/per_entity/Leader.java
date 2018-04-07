package entity.per_entity;
/**
*
* @author Allen      
* @created 2017年7月31日   
* 
*/
public class Leader extends Person{
	private String title;
	private String dPlace;
	private String dDate;
	private Integer id_dept;
	private Integer dStuSum;
	
	
	
	
	public String getdPlace() {
		return dPlace;
	}
	public void setdPlace(String dPlace) {
		this.dPlace = dPlace;
	}
	public String getdDate() {
		return dDate;
	}
	public void setdDate(String dDate) {
		this.dDate = dDate;
	}
	public Integer getdStuSum() {
		return dStuSum;
	}
	public void setdStuSum(Integer dStuSum) {
		this.dStuSum = dStuSum;
	}
	public Integer getId_dept() {
		return id_dept;
	}
	public void setId_dept(Integer id_dept) {
		this.id_dept = id_dept;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Override
	public String toString() {
		return "Leader [title=" + title + ", id_dept=" + id_dept + "]";
	}
	
}
