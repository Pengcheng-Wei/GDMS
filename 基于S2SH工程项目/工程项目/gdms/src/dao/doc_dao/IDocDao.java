package dao.doc_dao;

import java.io.Serializable;
import java.util.List;

import entity.doc_entity.AssignmentBook;
import entity.doc_entity.Doc;
import entity.doc_entity.ReaserchProposal;
import entity.doc_entity.ReviewAudit;
import entity.per_entity.Leader;
import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
public interface IDocDao{
	
	public void saveDoc(Doc doc);
	public void updateDoc(Doc doc);
	public Doc findDocById(@SuppressWarnings("rawtypes") Class clazz,Serializable id);
	
	public AssignmentBook findAssBookByStuId(Serializable id);//根据学生id查询一个任务书
	public List<AssignmentBook> getAssBookOptIsNull(int currentPage,int pageSize,String condition); //获取任务书中院长意见为空的记录
	public int getABOptNullCnt(String condition);//获取任务书中院长意见为空的记录数
	
	public List<ReaserchProposal> getReProOpt(int currentPage,int pageSize,String condition); //为院长获取符合条件的开题报告记录
	public int getReProCnt(String condition);//获取符合条件的开题报告记录数
	
	
	public List<ReviewAudit> getToptList(Teacher teacher); //为指导老师查找到要填写指导老师意见的评阅审核表
	public ReviewAudit getReAuBySid(Student student); //为学生查找到评阅审核表
	public List<ReviewAudit> getCoptList(Teacher teacher);//为评阅老师查找到要填写评阅老师意见的评阅审核表
	public List<ReviewAudit> getDoptList(Integer currentPage, int pageSize,String condition,Leader director);//为教研室主任查找到要填写评阅小组意见的评阅审核表
	public int getDoptListCnt(String condition,Leader director);//为教研室主任查找到要填写评阅小组意见的评阅审核表
	public List<ReviewAudit> getAll(int currentPage, int pageSize,String condition);//为指导老师查找到要填写评阅小组意见的评阅审核表
	public int getAllCnt(String condition);//为指导老师查找到要填写评阅小组意见的评阅审核表
	
}
