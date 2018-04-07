package action.doc_action;

import java.util.List;
import java.util.Map;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import entity.doc_entity.SubQuery;
import entity.doc_entity.Subject;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBean;
import service.doc_service.ISubService;
import service.per_service.IPerService;

/**
*
* @author Allen      
* @created 2017年8月10日   
* 
*/
@SuppressWarnings("serial")
public class SelectSubAction extends ActionSupport {
	private ISubService subService;
	private IPerService perService;
	private ActionContext ac = ActionContext.getContext();
	private Map<String, Object> para = ac.getParameters();
	private Map<String, Object> session = ac.getSession();
	
	private PageBean pageBean;
	private SubQuery sq;
	private final String cur = "1";
	private final String size = "5";
	
	private Subject subject;

	private String stu_id;
	private String teach_id ;
	private String sub_id   ;
	String currentPage = cur;
	String pageSize = size;
	
	
	//老师筛选一轮学生
	public String teachDelSub()
	{
		//更新学生
		String stuids = ((String[])para.get("stu_id"))[0];
		Student stu = perService.findStuById(Integer.parseInt(stuids));
		stu.setSubStatus("审核不通过");		
		perService.updateStu(stu);
		
		Subject sub = stu.getSubject();
		sub.setStuSum(sub.getStuSum()-1);//更新对应项目的通过学生人数
		subService.updateSub(sub);		
		
		//更新题目计数器
		
		Integer cnt = (Integer)session.get("avialable");
		session.put("avialable", cnt-1);
		//更新老师所指导的学生
		Teacher teacher = (Teacher)session.get("teacher");
		teacher.setStuTotal(cnt-1);
		perService.updateTeach(teacher);
		
		return getSelectResult();
	}
	//老师获取一轮最后选课情况
	public String getSelectResult()
	{
		String flag = ""; 
		
		if ((String[])para.get("flag")!=null) {
			flag = ((String[])para.get("flag"))[0];
		}
		
		Teacher teacher = (Teacher)session.get("teacher");
		List<Student> list = perService.getPassedStus(teacher);
		
		session.put("stuResultList", list);
		 if("final".equals(flag))
				return "getFinalGrade";
		 else
		 {
			 if(list!=null)
				 return "getSelectResult";
		 }
			return "Nosub_id";
	}
	//提交审核通过的id
	public String selFristStu()
	{
		
		String stuids = ((String[])para.get("stuids"))[0];
		
		String [] ids = stuids.split(",");
		
		subService.setStuPassed(stuids);
		
		Integer cnt = (Integer)session.get("avialable");
		session.put("avialable", cnt+ids.length);
		
		//更新老师所指导的人数
		Teacher teacher = (Teacher)session.get("teacher");
		teacher.setStuTotal(cnt+ids.length);
		perService.updateTeach(teacher);
		
		return "selFristStu";
	}
	//获取该老师所有通过的课题
	public String teaPassSubs()
	{
		Teacher t = (Teacher)session.get("teacher");
		
		List<Subject> list = subService.getSubPassed(t);
		session.put("list", list);
		
		//if (t.getStuTotal()==8 || t.getStuTotal()==null) {
			//return "Nosub_id";
		//} else {
			return "teaPassSubs2";
		//}
		
	}
	//查询选取该课题的全部学生
	public String teaSelstu()
	{
		String subId = ((String[])para.get("sub_id"))[0];
		
		List<Student> stulist = subService.getSubStus(Integer.parseInt(subId));

		session.put("stulist", stulist);
		
		if(stulist.size()!=0)
			return "teaSelstu";
		else
			return "Nosub_id";
	}

	
	//学生删除自己选的课题
	public String delSub()
	{
		
		Student stu = (Student)session.get("student");
		
		stu.setSubject(null);
		
		perService.updateStu(stu);
		return "delSub";
	}
	
	// 学生获取自己选的课题明细
	public String selectResult()
	{
		
		Student stu = (Student)session.get("student");
		
		if(stu.getSubject()!=null && !("".equals(stu.getSubject().getSub_id())))
		{
			Subject sub = subService.getSubById(stu.getSubject().getSub_id());
			session.put("subject", sub);
			session.put("student",stu);
			return "selectResult";
		}
		else
			return "Nosub_id";
	}
	//更新学生选的课题
	public String updateSel()
	{
		
		Student stu =(Student)session.get("student");
		
		Subject sub = subService.getSubById(subject.getSub_id());
		Teacher teacher = sub.getTeacher();
		stu.setSubject(sub);
		stu.setTeacher(teacher);
		stu.setSubStatus("未审核");

		perService.updateStu(stu);
		return "updateSel";
	}
	//服务于学生 获取所有审核通过且所选人数不大于4的项目
	public String getPassSubs()
	{

			
		if((String[])para.get("currentPage")!=null)
			currentPage = ((String[])para.get("currentPage"))[0];
		else
			currentPage = cur;
		
		if((String[])para.get("pageSize")!=null)
			pageSize = ((String[])para.get("pageSize"))[0];
		else
			pageSize = size;
		
		session.put("currentPage", currentPage);
		session.put("pageSize", pageSize);
		PageBean pageBean = subService.getPassSubs(Integer.parseInt((String)session.get("currentPage")),Integer.parseInt((String)session.get("pageSize")),sq);
		if(pageBean.getData().size()==0)
		{
			currentPage = cur;
			pageSize = size;
			session.put("currentPage", cur);
			session.put("pageSize", size);
			pageBean = subService.getPassSubs(Integer.parseInt((String)session.get("currentPage")),Integer.parseInt((String)session.get("pageSize")),sq);
		}
		session.put("pageBean", pageBean);
		
		return "getPassSubs";
	}


	public PageBean getPageBean() {
		return pageBean;
	}


	public void setPageBean(PageBean pageBean) {
		this.pageBean = pageBean;
	}


	public IPerService getPerService() {
		return perService;
	}

	public void setPerService(IPerService perService) {
		this.perService = perService;
	}

	public SubQuery getSq() {
		return sq;
	}

	public Subject getSubject() {
		return subject;
	}


	public void setSubject(Subject subject) {
		this.subject = subject;
	}
	public String getStu_id() {
		return stu_id;
	}
	public ISubService getSubService() {
		return subService;
	}
	public void setSubService(ISubService subService) {
		this.subService = subService;
	}
	public void setSq(SubQuery sq) {
		this.sq = sq;
	}
	public void setStu_id(String stu_id) {
		this.stu_id = stu_id;
	}
	public String getTeach_id() {
		return teach_id;
	}
	public void setTeach_id(String teach_id) {
		this.teach_id = teach_id;
	}
	public String getSub_id() {
		return sub_id;
	}
	public void setSub_id(String sub_id) {
		this.sub_id = sub_id;
	}

}
