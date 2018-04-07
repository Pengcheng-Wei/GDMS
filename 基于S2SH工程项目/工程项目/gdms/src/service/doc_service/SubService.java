package service.doc_service;

import java.io.Serializable;
import java.util.List;

import dao.doc_dao.ISubDao;
import entity.doc_entity.SubQuery;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBean;
import service.per_service.IPerService;

/**
*
* @author Allen      
* @created 2017年8月24日   
* 
*/
public class SubService implements ISubService{
	private IPerService perService;
	private ISubDao subDao;
	
	@Override
	public void saveSub(Subject sub) {
		subDao.saveSub(sub);
	}
	
	@Override
	public List<Subject> getSubByTeach(Teacher t) {
		List<Subject> l = subDao.getSubByTeach(t);
		return l;
	}

	@Override
	public Subject getSubById(Serializable id) {
		return subDao.getSubById(id);
	}
	
	@Override
	public void updateSub(Subject sub) {
		subDao.updateSub(sub);
		
	}
	

	@Override
	public PageBean getPassSubs(Integer currentPage,int pageSize,SubQuery sq) {
		
		PageBean pageBean = new PageBean();
		pageBean.setCurrentPage(currentPage);
		pageBean.setPageSize(pageSize);
		List<Subject> list = subDao.getPassSubs(pageBean.getCurrentPage(),
				pageBean.getPageSize(),sq);
		pageBean.setTotalCount(subDao.getPassSubsNum(sq));
		pageBean.setData(list);
		
		return pageBean;
		
	}
	@Override
	public PageBean getSubAll(Integer currentPage, int pageSize,SubQuery sq) {
		PageBean pageBean = new PageBean();
		pageBean.setCurrentPage(currentPage);
		pageBean.setPageSize(pageSize);
		List<Subject> list = subDao.getSubAll(pageBean.getCurrentPage(),
				pageBean.getPageSize(),sq);
		pageBean.setTotalCount(subDao.queryCount(sq));
		pageBean.setData(list);
		return pageBean;
	}

	@Override
	public PageBean getSubByLead(Leader l,Integer currentPage, int pageSize,SubQuery sq) { 
		PageBean pageBean = new PageBean();
		pageBean.setCurrentPage(currentPage);
		int count = subDao.queryCountLead(l,sq);
		pageBean.setTotalCount(count);
		pageBean.setPageSize(pageSize);
		List<Subject> list = subDao.getSubByLead(l, currentPage, pageSize,sq);
		pageBean.setData(list);
		return pageBean;
	}

	@Override
	public void delSub(Serializable id) {
		subDao.delSub(id);
	}

	@Override
	public List<Subject> getSubPassed(Teacher t) {
		return subDao.getSubPassed(t);
	}

	@Override
	public List<Student> getSubStus(Serializable subId) {
		return subDao.getSubStus(subId);
	}
	
	
	@Override
	public void setStuPassed(String stuids) {
		if (stuids!=null&&!("".equals(stuids))) {
			
			String [] list = stuids.split(",");
			for (String string : list) {
				Student stu = perService.findStuById(Integer.parseInt(string));
				stu.setSubStatus("审核通过");
				stu.getSubject().setStuSum(1+stu.getSubject().getStuSum());
				perService.updateStu(stu);
			}
		}
		
	}

	
	
	
	
	public IPerService getPerService() {
		return perService;
	}
	public void setPerService(IPerService perService) {
		this.perService = perService;
	}
	public ISubDao getSubDao() {
		return subDao;
	}
	public void setSubDao(ISubDao subDao) {
		this.subDao = subDao;
	}
}
