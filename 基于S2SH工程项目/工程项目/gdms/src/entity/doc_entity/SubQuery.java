package entity.doc_entity;
/**
*
* @author Allen      
* @created 2017年8月8日   
* 
*/
public class SubQuery {
	private String subjectName;
	private String teacherName;
	
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	@Override
	public String toString() {
		return "SubQuery [subjectName=" + subjectName + ", teacherName=" + teacherName + "]";
	}
	
}
