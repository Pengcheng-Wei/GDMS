package service.doc_service;

import java.io.Serializable;
import java.util.List;

import entity.doc_entity.SubQuery;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBean;

/**
*
* @author Allen      
* @created 2017年8月24日   
* 
*/
public interface ISubService {
	
	public void saveSub(Subject sub);//存储一个题目
	public List<Subject> getSubByTeach(Teacher t);//根据老师查询其所有题目
	public Subject getSubById(Serializable id);//根据id查对应题目
	public void updateSub(Subject sub) ;//更新一条数据
	public PageBean getSubAll(Integer currentPage,int pageSize,SubQuery sq);//获取所有题目
	public PageBean getSubByLead(Leader l,Integer currentPage, int pageSize,SubQuery sq);//查询对应教研室下所有题目
	public void delSub(Serializable id);//根据id删除这条题目
	public PageBean getPassSubs(Integer currentPage,int pageSize,SubQuery sq);//  获取审核通过 且 所选人数不大于4的题目
	public List<Subject> getSubPassed(Teacher t);
	public List<Student> getSubStus(Serializable subId);
	
	public void setStuPassed(String stuids);//设置学生选题通过
}
