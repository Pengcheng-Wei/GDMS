package service.doc_service;

import java.io.Serializable;
import java.util.List;

import org.junit.Test;

import dao.doc_dao.ICreateDoc;
import dao.doc_dao.IDocDao;
import dao.doc_dao.ISubDao;
import entity.doc_entity.AssignmentBook;
import entity.doc_entity.Doc;
import entity.doc_entity.InterimCheck;
import entity.doc_entity.ReaserchProposal;
import entity.doc_entity.ReviewAudit;
import entity.doc_entity.SubQuery;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBean;
import other.PageBeanAssBook;
import other.PageBeanReAu;
import other.PageBeanRePro;
import service.per_service.IPerService;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
public class DocService implements IDocService {
	private IDocDao docDao;
	private IPerService perService;
	private ICreateDoc createDoc;
	private ISubDao subDao;

	

	@Override
	public void saveDoc(Doc doc) {
		docDao.saveDoc(doc);
	}
	@Override
	public void updateDoc(Doc doc) {
		if(doc instanceof ReviewAudit)
		{
			ReviewAudit reviewAudit = (ReviewAudit)doc;
			if(reviewAudit.getD_grade()!=null)
			{
				if (reviewAudit.getD_grade()>0) {
					updateReAuUtil(reviewAudit);
				}
			}
		}
		createDoc.createDoc(doc);
		docDao.updateDoc(doc);
	}
	
	@SuppressWarnings("unchecked")
	public <T> T findDocById(Class<T> clazz,Serializable id)
	{
		return (T)docDao.findDocById(clazz, id);
	}
	
	public void updateReAuUtil(ReviewAudit reviewAudit)
	{
			int finalGrade = Math.round((reviewAudit.getC_grade()+reviewAudit.getD_grade()+reviewAudit.getT_grade())/3);
			String tag = "";
			String[] grade = {"A","A","B","C","D"};//10-100/10=[0] = 10-98/10=[1] = "A"  
			
			if(finalGrade>=60)
				tag = grade[10-(finalGrade/10)];
			else
				tag = "E";
			Student stu = perService.findStuById(reviewAudit.getStudent().getId());
			stu.setFinalGrade(tag);
			perService.updateStu(stu);
	}
	

	@Override
	public PageBeanAssBook getAssBookOptIsNull(Integer currentPage, int pageSize,String condition) {
		PageBeanAssBook pageBeanAssBook = new PageBeanAssBook();
		pageBeanAssBook.setCurrentPage(currentPage);
		pageBeanAssBook.setPageSize(pageSize);
		// 从数据库中读取当前页数据
		List<AssignmentBook> list = docDao.getAssBookOptIsNull(pageBeanAssBook.getCurrentPage(),
				pageBeanAssBook.getPageSize(),condition);
		pageBeanAssBook.setTotalCount(docDao.getABOptNullCnt(condition));
		pageBeanAssBook.setData(list);
		
		return pageBeanAssBook;
	}

	@Override
	public AssignmentBook findAssBookByStuId(Serializable id) {
		return docDao.findAssBookByStuId(id);
	}


	@Override
	public PageBeanRePro getReProOpt(Integer currentPage, int pageSize, String condition) {
		PageBeanRePro pageBeanRePro = new PageBeanRePro();
		pageBeanRePro.setCurrentPage(currentPage);
		pageBeanRePro.setPageSize(pageSize);
		// 从数据库中读取当前页数据
		List<ReaserchProposal> list = docDao.getReProOpt(pageBeanRePro.getCurrentPage(),
				pageBeanRePro.getPageSize(),condition);
		pageBeanRePro.setTotalCount(docDao.getReProCnt(condition));
		pageBeanRePro.setData(list);
		
		return pageBeanRePro;
	}

	@Override
	public List<ReviewAudit> getToptList(Teacher teacher) {
		return docDao.getToptList(teacher);
	}

	@Override
	public PageBeanReAu getAll(int currentPage, int pageSize,String condition) {
		PageBeanReAu pageBeanReAu = new PageBeanReAu();
		pageBeanReAu.setCurrentPage(currentPage);
		pageBeanReAu.setPageSize(pageSize);
		// 从数据库中读取当前页数据
		List<ReviewAudit> list = docDao.getAll(pageBeanReAu.getCurrentPage(),pageBeanReAu.getPageSize(),condition);
		pageBeanReAu.setTotalCount(docDao.getAllCnt(condition));
		pageBeanReAu.setData(list);
		return pageBeanReAu;
	}
	@Override
	public List<ReviewAudit> getCoptList(Teacher teacher) {
		return docDao.getCoptList(teacher);
	}
	
	@Override
	public PageBeanReAu getDoptList(int currentPage, int pageSize,String condition,Leader director) {
		PageBeanReAu pageBeanReAu = new PageBeanReAu();
		pageBeanReAu.setCurrentPage(currentPage);
		pageBeanReAu.setPageSize(pageSize);
		// 从数据库中读取当前页数据
		List<ReviewAudit> list = docDao.getDoptList(pageBeanReAu.getCurrentPage(),
				pageBeanReAu.getPageSize(),condition,director);
		pageBeanReAu.setTotalCount(docDao.getDoptListCnt(condition,director));
		pageBeanReAu.setData(list);
		return pageBeanReAu;
		
	}
	
	
	public ISubDao getSubDao() {
		return subDao;
	}



	public void setSubDao(ISubDao subDao) {
		this.subDao = subDao;
	}



	@Override
	public ReviewAudit getReAuBySid(Student student) {
		return docDao.getReAuBySid(student);
	}

	public IPerService getPerService() {
		return perService;
	}

	public void setPerService(IPerService perService) {
		this.perService = perService;
	}

	public ICreateDoc getCreateDoc() {
		return createDoc;
	}

	public void setCreateDoc(ICreateDoc createDoc) {
		this.createDoc = createDoc;
	}

	public IDocDao getDocDao() {
		return docDao;
	}
	
	public void setDocDao(IDocDao docDao) {
		this.docDao = docDao;
	}



	
	
	
}
