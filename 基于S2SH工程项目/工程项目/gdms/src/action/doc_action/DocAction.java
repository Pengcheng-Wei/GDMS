package action.doc_action;

import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import entity.doc_entity.AssignmentBook;
import entity.doc_entity.InterimCheck;
import entity.doc_entity.ReaserchProposal;
import entity.doc_entity.ReviewAudit;
import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBeanAssBook;
import other.PageBeanReAu;
import other.PageBeanRePro;
import other.PageBeanStudent;
import service.doc_service.IDocService;
import service.doc_service.ISubService;
import service.per_service.IPerService;

/**
*
* @author Allen      
* @created 2017年8月25日   
* 
*/
@SuppressWarnings("serial")
public class DocAction extends ActionSupport {
	private IDocService docService;
	private IPerService perService;
	private ActionContext ac = ActionContext.getContext();
	private AssignmentBook assignmentBook;
	private ReaserchProposal reaserchProposal;
	private InterimCheck interimCheck;
	private ReviewAudit reviewAudit;
	private PageBeanAssBook pageBeanAssBook;
	private PageBeanReAu pageBeanReAu;
	private PageBeanStudent pageBeanStudent;
	private final String cur = "1";
	private final String size = "5";
	String currentPage = cur;
	String pageSize = size;
	private String stu_id;
	private String teach_id ;
	
	private Map<String, Object> session = ac.getSession();
	private Map<String, Object> para = ac.getParameters();
	
	//老师获取一轮最后选课情况
	public void getSelectResult()
	{
		Teacher teacher = (Teacher)session.get("teacher");
		List<Student> list = perService.getPassedStus(teacher);
		session.put("stuResultList", list);
	}
	
	//教师 转向四个文件的视图

	//教师：转向任务书填写的视图，该视图是这老师下所有要填写任务书的列表
	public String docIndex()
	{
		getSelectResult();
		String flag = ((String[])para.get("flag"))[0];
		if("assBook".equals(flag))
			return "assBookIndex";
		else if("rePro".equals(flag))
			return "reProIndex";
		else 
			return "inCheckIndex";
		
	}
		//教师：转向评阅审核填写的视图，该视图是这老师下所有要填写评阅意见的列表
		public String reviewRepForTeacherIndex()
		{
			Teacher teacher = (Teacher)session.get("teacher");
			//1 准备指导老师要填写的评阅审核表	填写指导老师意见
			List<ReviewAudit> loptList = (List<ReviewAudit>)docService.getToptList(teacher);
			//2 准备指导老师要填写的评阅审核表	填写评阅老师意见
			List<ReviewAudit> coptList = (List<ReviewAudit>)docService.getCoptList(teacher);
			
			session.put("loptList", loptList);
			session.put("coptList", coptList);
			return "reviewRepForTeacherIndex";
			
		}
		//教师：转向评阅审核表单填写的视图，为该表单准备初始化数据
		public String updateReviewAuditIndex()
		{
			Map<String, Object> contextMap = ac.getParameters();
			String reau_id = ((String[])contextMap.get("reau_id"))[0];
			String flag = "topt";
			if((String[])contextMap.get("flag")!=null)
				flag = ((String[])contextMap.get("flag"))[0];
			ReviewAudit reviewAudit = (ReviewAudit)docService.findDocById(ReviewAudit.class,Integer.parseInt(reau_id));
			Map<String, Object> session = ac.getSession();
			Person p = (Person)session.get("person");
			session.put("reviewAudit", reviewAudit);
			
			if("director".equals(p.getIdentity()))
				return "updateReviewAuditIndexForDire";
			else if("leader".equals(p.getIdentity()))
					return "updateReviewAuditIndexForLead";
			else if("copt".equals(flag))
				return "updateReviewAuditIndexForCopt";
			return "updateReviewAuditIndex";
		}
		//教师：转向评阅审核表单填写的视图
		public String updateReviewAudit()
		{
			reviewAudit.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			reviewAudit.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			
			docService.updateDoc(reviewAudit);
			
			Map<String, Object> session = ac.getSession();
			Person p = (Person)session.get("person");
			session.put("reviewAudit", reviewAudit);
			
			if("director".equals(p.getIdentity()))
				return reviewRepForDireIndex();
			else if("leader".equals(p.getIdentity()))
				return reviewRepForLeadIndex();
			return reviewRepForTeacherIndex();
		}
		//教师：转向评阅审核表单填写的视图
		public String getReAuBySid()
		{
			Map<String, Object> session = ac.getSession();
			Student student = (Student)session.get("student");
			ReviewAudit reviewAudit = docService.getReAuBySid(student);
			session.put("reviewAudit", reviewAudit);
			return "getReAuBySid";
		}
		
		//教研室主任获取其下所有要填写的评阅审核表
		public String reviewRepForDireIndex()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			Leader director = (Leader)session.get("director");
			String condition = "all";
			if(contextMap.size()==0)
			{
				currentPage = cur;
				pageSize = size;
			}
			else
			{
				if((String[])contextMap.get("condition")!=null)
					 condition = ((String[])contextMap.get("condition"))[0];
				if(((String[])contextMap.get("currentPage"))!=null)
					currentPage = ((String[])contextMap.get("currentPage"))[0];
				if ("".equals(currentPage)) {
					currentPage = cur;
				}
				if(((String[])contextMap.get("pageSize"))!=null)
					pageSize = ((String[])contextMap.get("pageSize"))[0];
				if("".equals(pageSize)){
					pageSize = size;
				}
			}
			
			session.put("condition", condition);
			session.put("currentPage", currentPage);
			session.put("pageSize", pageSize);
			
			PageBeanReAu pageBeanReAu = docService.getDoptList(Integer.parseInt((String)session.get("currentPage")),Integer.parseInt((String)session.get("pageSize")),condition, director);
			
			session.put("pageBeanReAu", pageBeanReAu);
			return "reviewRepForDireIndex";
		}
		//教研室主任获取其下所有学生的最终成绩
		public String getFinalGradeForDire()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			Leader director = (Leader)session.get("director");
			String condition = "all";
			if(contextMap.size()==0)
			{
				currentPage = cur;
				pageSize = size;
			}
			else
			{
				if((String[])contextMap.get("condition")!=null)
					condition = ((String[])contextMap.get("condition"))[0];
				if(((String[])contextMap.get("currentPage"))!=null)
					currentPage = ((String[])contextMap.get("currentPage"))[0];
				if ("".equals(currentPage)) {
					currentPage = cur;
				}
				if(((String[])contextMap.get("pageSize"))!=null)
					pageSize = ((String[])contextMap.get("pageSize"))[0];
				if("".equals(pageSize)){
					pageSize = size;
				}
			}
			
			session.put("condition", condition);
			session.put("currentPage", currentPage);
			session.put("pageSize", pageSize);
			
			PageBeanStudent pageBeanStudent = perService.getDStus(Integer.parseInt((String)session.get("currentPage")),Integer.parseInt((String)session.get("pageSize")),condition, director);
			
			session.put("pageBeanStudent", pageBeanStudent);
			return "getFinalGradeForDire";
		}
		//院长获取所有学生的最终成绩
		public String getFinalGradeAll()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			String condition = "all";
			if(contextMap.size()==0)
			{
				currentPage = cur;
				pageSize = size;
			}
			else
			{
				if((String[])contextMap.get("condition")!=null)
					condition = ((String[])contextMap.get("condition"))[0];
				if(((String[])contextMap.get("currentPage"))!=null)
					currentPage = ((String[])contextMap.get("currentPage"))[0];
				if ("".equals(currentPage)) {
					currentPage = cur;
				}
				if(((String[])contextMap.get("pageSize"))!=null)
					pageSize = ((String[])contextMap.get("pageSize"))[0];
				if("".equals(pageSize)){
					pageSize = size;
				}
			}
			
			session.put("condition", condition);
			session.put("currentPage", currentPage);
			session.put("pageSize", pageSize);
			
			PageBeanStudent pageBeanStudent = 
					perService.getStusAllFinalGrade(Integer.parseInt((String)session.get("currentPage")),Integer.parseInt((String)session.get("pageSize")),condition);
			
			session.put("pageBeanStudent", pageBeanStudent);
			return "getFinalGradeAll";
		}
		//院长获取其下所有要填写的评阅审核表
		public String reviewRepForLeadIndex()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			String condition = "all";
			if(contextMap.size()==0)
			{
				currentPage = cur;
				pageSize = size;
			}
			else
			{
				if((String[])contextMap.get("condition")!=null)
					condition = ((String[])contextMap.get("condition"))[0];
				if(((String[])contextMap.get("currentPage"))!=null)
					currentPage = ((String[])contextMap.get("currentPage"))[0];
				if ("".equals(currentPage)) {
					currentPage = cur;
				}
				if(((String[])contextMap.get("pageSize"))!=null)
					pageSize = ((String[])contextMap.get("pageSize"))[0];
				if("".equals(pageSize)){
					pageSize = size;
				}
			}
			
			session.put("condition", condition);
			session.put("currentPage", currentPage);
			session.put("pageSize", pageSize);
			
			PageBeanReAu pageBeanReAu = docService.getAll(Integer.parseInt((String)session.get("currentPage")),Integer.parseInt((String)session.get("pageSize")),condition);
			
			session.put("pageBeanReAu", pageBeanReAu);
			return "reviewRepForLeadIndex";
		}
		
		//教师：转向论文下载查看的视图，获得该教师指导的学生论文提交列表
		public String checkReportIndex()
		{
			getSelectResult();
			return "checkReportIndex";
		}
		
		//在为学生添加任务书时准备数据，主要是准备student对象，获取到表单初始的一些信息，比如学生姓名，课题题目等，跳转到添加任务书表单
		public String getStuForAssBook()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			String stu_id = ((String[])contextMap.get("stu_id"))[0];
			Student student = perService.findStuById(Integer.parseInt(stu_id));
			session.put("student", student);
			session.remove("assignmentBook");
			return "getStuForAssBook";
		}
		//由s_home触发，Iframe跳向开题报告表单
		public String addReProIndex()
		{
			Map<String, Object> session = ac.getSession();
			Student student = (Student)session.get("student");
			if(student.getReaserchProposal()!=null)
			{
				session.put("reaserchProposal",student.getReaserchProposal());
			}
			return "addReProIndex";
		}
		//由s_home触发，Iframe跳向中期检查表表单
		public String addInCheckIndex()
		{
			Map<String, Object> session = ac.getSession();
			Student student = (Student)session.get("student");
			if(student.getReaserchProposal()!=null)
			{
				session.put("interimCheck",student.getInterimCheck());
			}
			return "addInCheckIndex";
		}
		//存入一条任务书
		public String addAssBook()
		{
			assignmentBook.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			assignmentBook.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			
			
			if(assignmentBook.getAssBook_id()!=null && assignmentBook.getAssBook_id()!=0)
			{
				docService.updateDoc(assignmentBook);
			}else{
				docService.saveDoc(assignmentBook);
				//更新学生	
				Student student = perService.findStuById(Integer.parseInt(stu_id));
				student.setAssignmentBook(assignmentBook);
				perService.updateStu(student);
			}
			getSelectResult();
			return "assBookIndex";
		}
		//存入一条开题报告
		public String addRePro()
		{
			reaserchProposal.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			reaserchProposal.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			
			
			if(reaserchProposal.getRepro_id()!=null && reaserchProposal.getRepro_id()!=0)
			{
				docService.updateDoc(reaserchProposal);
			}else{
				docService.saveDoc(reaserchProposal);
				//更新学生	
				Student student = perService.findStuById(Integer.parseInt(stu_id));
				student.setReaserchProposal(reaserchProposal);
				perService.updateStu(student);
			}
			Map<String, Object> session = ac.getSession();
			session.put("reaserchProposal", reaserchProposal);
			return "addRePro";
		}
		//存入一条中期检查表
		public String addInCheck()
		{
			interimCheck.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			interimCheck.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			
			
			if(interimCheck.getInCheck_id()!=null && interimCheck.getInCheck_id()!=0)
			{
				docService.updateDoc(interimCheck);
			}else{
				docService.saveDoc(interimCheck);
				//更新学生	
				Student student = perService.findStuById(Integer.parseInt(stu_id));
				student.setInterimCheck(interimCheck);
				perService.updateStu(student);
			}
			Map<String, Object> session = ac.getSession();
			session.put("interimCheck", interimCheck);
			return "addInCheckIndex";
		}
		//更新任务书，主要服务于院长意见 插入院长意见
		public String updateAssBookLead()
		{
			assignmentBook.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			assignmentBook.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			docService.updateDoc(assignmentBook);
			Map<String, Object> session = ac.getSession();
			session.put("assignmentBook", assignmentBook);
			return assBookForLead();
		}
		//更新开题报告，主要服务于教师意见  插入教师意见
		public String updateReProForTeach()
		{
			reaserchProposal.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			reaserchProposal.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			docService.updateDoc(reaserchProposal);
			Map<String, Object> session = ac.getSession();
			session.put("reaserchProposal", reaserchProposal);
			
			getSelectResult();
			return "reProIndex";
		}
		//更新中期检查表，主要服务于教师意见  插入教师意见
		public String updateInCheckForTeach()
		{
			interimCheck.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			interimCheck.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			docService.updateDoc(interimCheck);
			Map<String, Object> session = ac.getSession();
			session.put("interimCheck", interimCheck);
			
			getSelectResult();
			return "inCheckIndex";
		}
		//更新开题报告，主要服务于院长意见 插入院长意见
		public String updateReProForLead()
		{
			reaserchProposal.setStudent(perService.findStuById(Integer.parseInt(stu_id)));
			reaserchProposal.setTeacher(perService.findTeachById(Integer.parseInt(teach_id)));
			docService.updateDoc(reaserchProposal);
			Map<String, Object> session = ac.getSession();
			session.put("reaserchProposal", reaserchProposal);
			return reProForLead();
		}
		// 教师要修改任务书时的点击动作，为修改页面准备数据，转向form视图
		public String updateAssBookIndex()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			
			String stu_id = ((String[])contextMap.get("stu_id"))[0];
			Student student = perService.findStuById(Integer.parseInt(stu_id));
			session.put("student", student);
			
			String assBook_id = ((String[])contextMap.get("assBook_id"))[0];
			AssignmentBook assignmentBook = (AssignmentBook)docService.findDocById(AssignmentBook.class,Integer.parseInt(assBook_id));
			session.put("assignmentBook", assignmentBook);
			return "getStuForAssBook";
		}
		// 教师要修改开题报告时的点击动作，为修改页面准备数据，转向form视图
		public String updateReProIndex()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			
			String stu_id = ((String[])contextMap.get("stu_id"))[0];
			Student student = perService.findStuById(Integer.parseInt(stu_id));
			ReaserchProposal rePro = (ReaserchProposal)docService.findDocById(ReaserchProposal.class,student.getReaserchProposal().getRepro_id());
			//ReaserchProposal rePro = docService.findReProById(student.getReaserchProposal().getRepro_id());
			
			session.put("reaserchProposal", rePro);
			
			return "updateReProIndex";
		}
		// 教师要修改 中期检查 时的点击动作，为修改页面准备数据，转向form视图
		public String updateInCheckIndex()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			
			String stu_id = ((String[])contextMap.get("stu_id"))[0];
			Student student = perService.findStuById(Integer.parseInt(stu_id));
			InterimCheck interimCheck = (InterimCheck)docService.findDocById(InterimCheck.class,student.getInterimCheck().getInCheck_id());
			
			session.put("interimCheck", interimCheck);
			
			return "updateInCheckIndex";
		}
		//为院长根据条件（初始条件是all）查询所有任务书
		public String assBookForLead()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			String condition="";
			if(contextMap.size()==0)
			{
				currentPage = cur;
				pageSize = size;
				session.put("currentPage", cur);
				session.put("pageSize", size);
			}
			else
			{
				if((String[])contextMap.get("condition")!=null)
				 condition = ((String[])contextMap.get("condition"))[0];
				 session.put("condition", condition);
				if((String[])contextMap.get("currentPage")!=null)
					 currentPage = ((String[])contextMap.get("currentPage"))[0];
				if (currentPage == null || currentPage.equals("")) {
					currentPage = cur;
					session.put("currentPage", cur);
				}
				session.put("currentPage", currentPage);
				if((String[])contextMap.get("pageSize")!=null)
					pageSize = ((String[])contextMap.get("pageSize"))[0];
				if(pageSize==null || pageSize.equals("")){
					pageSize = size;
					session.put("pageSize", size);
				}
				session.put("pageSize", pageSize);
			}
			PageBeanAssBook pageBeanAssBooks = 
					docService.getAssBookOptIsNull(Integer.parseInt(currentPage), Integer.parseInt(pageSize),(String)session.get("condition"));
			session.put("pageBeanAssBooks", pageBeanAssBooks);
			return "assBookForLead";
		}



		//为院长根据条件（初始条件是all）查询所有开题报告
		public String reProForLead()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			String condition="all";
			if(contextMap.size()==0)
			{
				currentPage = cur;
				pageSize = size;
				session.put("currentPage", cur);
				session.put("pageSize", size);
			}
			else
			{
				if((String[])contextMap.get("condition")!=null)
					condition = ((String[])contextMap.get("condition"))[0];
				session.put("condition", condition);
				if((String[])contextMap.get("currentPage")!=null)
					currentPage = ((String[])contextMap.get("currentPage"))[0];
				if (currentPage == null || currentPage.equals("")) {
					currentPage = cur;
					session.put("currentPage", cur);
				}
				session.put("currentPage", currentPage);
				if((String[])contextMap.get("pageSize")!=null)
					pageSize = ((String[])contextMap.get("pageSize"))[0];
				if(pageSize==null || pageSize.equals("")){
					pageSize = size;
					session.put("pageSize", size);
				}
				session.put("pageSize", pageSize);
			}
			PageBeanRePro pageBeanRePro = docService.getReProOpt(Integer.parseInt(currentPage), Integer.parseInt(pageSize),(String)session.get("condition"));
			session.put("pageBeanRePro", pageBeanRePro);
			return "reProForLead";
		}
		// 为院长要填写院长意见准备数据，转向任务书表单视图
		public String leadOptAssBook()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			
			String assBook_id= ((String[])contextMap.get("assBook_id"))[0];
			AssignmentBook assignmentBook = (AssignmentBook)docService.findDocById(AssignmentBook.class,Integer.parseInt(assBook_id));
			session.put("assignmentBook", assignmentBook);
			
			return "leadOptAssBook";
		}
		// 为院长要填写院长意见准备数据，转向开题报告表单视图
		public String leadOptRePro()
		{
			Map<String, Object> contextMap = ac.getParameters();
			Map<String, Object> session = ac.getSession();
			
			String repro_id= ((String[])contextMap.get("repro_id"))[0];
			ReaserchProposal reaserchProposal = (ReaserchProposal)docService.findDocById(ReaserchProposal.class,Integer.parseInt(repro_id));
			session.put("reaserchProposal", reaserchProposal);
			
			return "leadOptRePro";
		}
		//为学生准备任务书数据，直接转向任务书表单（因为每个学生都只有一张任务书），所以直接跳转
		public String getAssBookStu()
		{
			Map<String, Object> session = ac.getSession();
			Student student = (Student)session.get("student");
			AssignmentBook assignmentBook = docService.findAssBookByStuId(student.getId());
			if(assignmentBook==null)
				return "Nosub_id";
			else{
				session.put("assignmentBook", assignmentBook);
				return "getAssBookStu";
			}
		}
		
	
	
	

	public IPerService getPerService() {
		return perService;
	}

	public void setPerService(IPerService perService) {
		this.perService = perService;
	}

	public IDocService getDocService() {
		return docService;
	}

	public void setDocService(IDocService docService) {
		this.docService = docService;
	}
	public AssignmentBook getAssignmentBook() {
		return assignmentBook;
	}
	public void setAssignmentBook(AssignmentBook assignmentBook) {
		this.assignmentBook = assignmentBook;
	}
	public ReaserchProposal getReaserchProposal() {
		return reaserchProposal;
	}
	public void setReaserchProposal(ReaserchProposal reaserchProposal) {
		this.reaserchProposal = reaserchProposal;
	}
	public InterimCheck getInterimCheck() {
		return interimCheck;
	}
	public void setInterimCheck(InterimCheck interimCheck) {
		this.interimCheck = interimCheck;
	}
	public ReviewAudit getReviewAudit() {
		return reviewAudit;
	}
	public void setReviewAudit(ReviewAudit reviewAudit) {
		this.reviewAudit = reviewAudit;
	}
	public PageBeanAssBook getPageBeanAssBook() {
		return pageBeanAssBook;
	}
	public void setPageBeanAssBook(PageBeanAssBook pageBeanAssBook) {
		this.pageBeanAssBook = pageBeanAssBook;
	}
	public PageBeanReAu getPageBeanReAu() {
		return pageBeanReAu;
	}
	public void setPageBeanReAu(PageBeanReAu pageBeanReAu) {
		this.pageBeanReAu = pageBeanReAu;
	}
	public PageBeanStudent getPageBeanStudent() {
		return pageBeanStudent;
	}
	public void setPageBeanStudent(PageBeanStudent pageBeanStudent) {
		this.pageBeanStudent = pageBeanStudent;
	}
	public String getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(String currentPage) {
		this.currentPage = currentPage;
	}
	public String getStu_id() {
		return stu_id;
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

}
