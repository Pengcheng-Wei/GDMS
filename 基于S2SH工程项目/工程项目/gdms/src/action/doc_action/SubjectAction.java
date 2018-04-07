package action.doc_action;

import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import entity.doc_entity.SubQuery;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Teacher;
import other.PageBean;
import service.doc_service.ISubService;
import service.per_service.IPerService;

/**
*
* @author Allen      
* @created 2017年8月7日   
* 
*/
@SuppressWarnings("serial")
public class SubjectAction extends ActionSupport {
	private Subject subject;
	private final String cur = "1";
	private final String size = "5";
	private Teacher teacher;
	private ISubService subService;
	private Person person;
	private IPerService perService;
	private ActionContext ac = ActionContext.getContext();
	private PageBean pageBean;
	private SubQuery sq;
	String currentPage = null;
	String pageSize = null;
	
	//获取一教研室下所有题目
	public String getSubLead()
	{
		Map<String, Object> contextMap = ac.getParameters();
		Map<String, Object> session = ac.getSession();
		Leader l = (Leader)session.get("director");
		
		if(contextMap.size()==0)
		{
			currentPage = cur;
			pageSize = size;
		}
		else
		{
			if((String[])contextMap.get("currentPage")!=null)
				currentPage = ((String[])contextMap.get("currentPage"))[0];
			else
				currentPage = cur;
			
			if((String[])contextMap.get("pageSize")!=null)
				pageSize = ((String[])contextMap.get("pageSize"))[0];
			else
				pageSize = size;
			
		}
		session.put("currentPage", currentPage);
		session.put("pageSize", pageSize);
		session.put("sq", sq);
		PageBean pageBean = subService.getSubByLead(l, Integer.parseInt(currentPage), Integer.parseInt(pageSize),sq);
		if(pageBean.getData().size()==0)
		{
			currentPage = cur;
			pageSize = size;
			session.put("currentPage", cur);
			session.put("pageSize", size);
			pageBean = subService.getSubByLead(l, Integer.parseInt(currentPage), Integer.parseInt(pageSize),sq);
		}
		
		session.put("pageBean", pageBean);
		return "subLead";
	}
	
	//获取全部题目，并分页显示
	public String getAll()
	{
		
		/****  1）接收用户输入的参数 ： currentPage参数   ****/
		Map<String, Object> contextMap = ac.getParameters();
		Map<String, Object> session = ac.getSession();
		if(contextMap.size()==0)
		{
			currentPage = cur;
			pageSize = size;
		}
		else
		{
			
			if((String[])contextMap.get("currentPage")!=null)
				currentPage = ((String[])contextMap.get("currentPage"))[0];
			else
				currentPage = cur;
			
			if((String[])contextMap.get("pageSize")!=null)
				pageSize = ((String[])contextMap.get("pageSize"))[0];
			else
				pageSize = size;
		}
		session.put("currentPage", currentPage);
		session.put("pageSize", pageSize);
		session.put("sq", sq);
		
		PageBean pageBean = subService.getSubAll(Integer.parseInt(currentPage),Integer.parseInt(pageSize),sq);
		if(pageBean.getData().size()==0)
		{
			currentPage = cur;
			pageSize = size;
			session.put("currentPage", cur);
			session.put("pageSize", size);
			pageBean = subService.getSubAll(Integer.parseInt(currentPage),Integer.parseInt(pageSize),sq);
		}
		session.put("pageBean", pageBean);
		return "getAll";
	}
	
	/**
	 * 插入一条subject记录
	 * */
	public String insert()
	{
		Map<String, Object> map = ac.getSession();
		subject.setTeacher(teacher);
		subService.saveSub(subject);

		List<Subject> list = subService.getSubByTeach(teacher);
		map.put("list", list);
		return "insertSuccess";
	}
	//查看某一题目 服务于院长 和 教研主任
	public String seeSub()
	{
		Map<String, Object> ps = ac.getParameters();//获取参数
		String sub_id = ((String[])ps.get("sub_id"))[0];
		
		Map<String, Object> session = ac.getSession();
		Person p = (Person)session.get("person");
		
		Subject sub = subService.getSubById(Integer.parseInt(sub_id));
		 Map<String, Object> map = ac.getSession();//获取session域
		
		 map.put("subject", sub);
		 
		 if("student".equals(p.getIdentity()))
			 return "seeSubFstu";
		 else
			 return "seeSub";
	}
	
	public String delSub()
	{
		Map<String, Object> ps = ac.getParameters();
		 Map<String, Object> map = ac.getSession();
		String sub_id = ((String[])ps.get("sub_id"))[0];
		
		Teacher t = subService.getSubById(Integer.parseInt(sub_id)).getTeacher();
		subService.delSub(Integer.parseInt(sub_id));
		
		List<Subject> list = subService.getSubByTeach(t);
		map.put("list", list);
		
		return "delSub";
	}
	
	
	//更新subject
	public String update()
	{
		subject.setTeacher(teacher);
		PageBean pageBean =null;
		
		Map<String, Object> ps = ac.getParameters();//获取参数
		
		
		Map<String, Object> session = ac.getSession();
		Person p = (Person)session.get("person");
		
		Leader l = perService.findLeadById(p.getId());
		if(l!=null)
		{
			String ifPass = ((String[])ps.get("ifPass"))[0];
			if("院长".equals(l.getTitle()))
			{
				if("passed".equals(ifPass))
					subject.setLeadOpt("审核通过");
				else if("unpassed".equals(ifPass))
					subject.setLeadOpt("审核不通过");
				subService.updateSub(subject);
				pageBean = 
						subService.getSubAll(Integer.parseInt((String)session.get("currentPage")),
								Integer.parseInt((String)session.get("pageSize")),(SubQuery)session.get("sq"));
				if(pageBean.getData().size()==0)
				{
					currentPage = cur;
					pageSize = size;
					session.put("currentPage", cur);
					session.put("pageSize", size);
					pageBean = subService.getSubAll(Integer.parseInt(currentPage),Integer.parseInt(pageSize),sq);
				}
				
			}
			else
			{
				if("passed".equals(ifPass))
					subject.setDirecOpt("审核通过");
				else if("unpassed".equals(ifPass))
					subject.setDirecOpt("审核不通过");
				subService.updateSub(subject);
				pageBean = subService.getSubByLead(l, 
								Integer.parseInt((String)session.get("currentPage")), 
								Integer.parseInt((String)session.get("pageSize")),(SubQuery)session.get("sq"));
				if(pageBean.getData().size()==0)
				{
					currentPage = cur;
					pageSize = size;
					session.put("currentPage", cur);
					session.put("pageSize", size);
					pageBean = subService.getSubByLead(l, Integer.parseInt(currentPage), Integer.parseInt(pageSize),sq);
				}
			}
			
			session.put("pageBean", pageBean);
		}
		else
		{
			subject.setLeadOpt("未审核");
			subject.setDirecOpt("未审核");
			subService.updateSub(subject);
			List<Subject> list = subService.getSubByTeach(teacher);
			session.put("list", list);
		}
		if(p.getIdentity().equals("teacher"))
			return "update";
		if(p.getIdentity().equals("leader"))
			return "ifPass_l";
		else
			return "ifPass_d";
	}
	
	
	//获取对应题目的详细内容
	public String checkSub()
	{
		Map<String, Object> ps = ac.getParameters();//获取参数
		String sub_id = ((String[])ps.get("sub_id"))[0];
		
		Subject sub = subService.getSubById(Integer.parseInt(sub_id));
		 Map<String, Object> map = ac.getSession();//获取session域
		
		 map.put("subject", sub);
		return "checkSub";
	}
	/**
	 * 
	 * 获取指定老师所有项目
	 * 
	 * */
	public String getSubsList()
	{
		
		 Map<String, Object> map = ac.getSession();//获取session域
		 teacher = (Teacher)map.get("teacher");
				
		List<Subject> l = subService.getSubByTeach(teacher);//进行查询	
		
		map.put("list", l);
		Map<String, Object> ps = ac.getParameters();//获取参数
		String flag = ((String[])ps.get("flag"))[0];
		if(cur.equals(flag))
			return "getSubs";
		else
			return "teachSubResult";
	}
	
	

	public Teacher getTeacher() {
		return teacher;
	}




	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}




	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}




	public ISubService getsubService() {
		return subService;
	}




	public void setsubService(ISubService subService) {
		this.subService = subService;
	}






	public Person getPerson() {
		return person;
	}






	public void setPerson(Person person) {
		this.person = person;
	}






	public IPerService getPerService() {
		return perService;
	}






	public void setPerService(IPerService perService) {
		this.perService = perService;
	}

	public PageBean getPageBean() {
		return pageBean;
	}

	public void setPageBean(PageBean pageBean) {
		this.pageBean = pageBean;
	}

	public SubQuery getSq() {
		return sq;
	}

	public void setSq(SubQuery sq) {
		this.sq = sq;
	}

}
