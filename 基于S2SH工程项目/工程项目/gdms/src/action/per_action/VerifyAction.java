package action.per_action;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import service.per_service.IPerService;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
@SuppressWarnings("serial")
public class VerifyAction extends ActionSupport{
	
	private Person p;
	private IPerService perService;
	private ActionContext ac = ActionContext.getContext();
	private String dDate;
	private String dPlace;

	public String setDGroup()
	{
		Map<String, Object> session = ac.getSession();
		Leader director = (Leader)session.get("director");
		director.setdDate(dDate);
		director.setdPlace(dPlace);
		perService.updateDirector(director);
		session.put("director", director);
		return "setDGroup";
	}
	public String getDGroup()
	{
		Map<String, Object> session = ac.getSession();
		Student student = (Student)session.get("student");
		Leader director = perService.getDirectorByStu(student);
		session.put("director", director);
		return "getDGroup";
	}
	
	
	
	
	public String verify() throws Exception{
		p=perService.verify(p);
		Map<String, Object> session = ac.getSession();
		
		if(p!=null){
			ac = ActionContext.getContext();
			session.put("person", p);
			
			if (p.getIdentity()==Person.STUDENT) {
				Student student = perService.findStuById(p.getId());
				session.clear();
				session.put("person", p);
				session.put("student", student);
				return Person.STUDENT;
			} else {
				if (p.getIdentity().equals(Person.LEADER)) {
					Leader leader = perService.findLeadById(p.getId());
					session.clear();
					session.put("person", p);
					session.put("leader", leader);
						return Person.LEADER;
				} 
				else if(p.getIdentity().equals(Person.DIRECTOR)){

					Leader director = perService.findLeadById(p.getId());
					session.clear();
					session.put("person", p);
					session.put("director", director);
					return Person.DIRECTOR;
				}
				else
				{
					Teacher teach = perService.findTeachById(p.getId());
					session.clear();
					session.put("person", p);
					session.put("teacher",teach);
					session.put("avialable", teach.getStuTotal());
					return Person.TEACHER;
				}
				
			}
		}
		else
			return "failSign";
	}
	
	
	
	
	
	public ActionContext getAc() {
		return ac;
	}



	public void setAc(ActionContext ac) {
		this.ac = ac;
	}


	public IPerService getPerService() {
		return perService;
	}

	public void setPerService(IPerService perService) {
		this.perService = perService;
	}
	public Person getP() {
		return p;
	}
	public void setP(Person p) {
		this.p = p;
	}
	public String getDDate() {
		return dDate;
	}
	public void setDDate(String dDate) {
		this.dDate = dDate;
	}
	public String getDPlace() {
		return dPlace;
	}
	public void setDPlace(String dPlace) {
		this.dPlace = dPlace;
	}
}
