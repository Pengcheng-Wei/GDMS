package service.doc_service;

import java.io.Serializable;
import java.util.List;

import entity.doc_entity.AssignmentBook;
import entity.doc_entity.Doc;
import entity.doc_entity.ReviewAudit;
import entity.per_entity.Leader;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
import other.PageBeanAssBook;
import other.PageBeanReAu;
import other.PageBeanRePro;

/**
*
* @author Allen      
* @created 2017年8月2日   
* 
*/
public interface IDocService {
	
	public void saveDoc(Doc doc);
	public void updateDoc(Doc doc);
	public <T> T findDocById(Class<T> clazz,Serializable id);
	
	public PageBeanAssBook getAssBookOptIsNull(Integer currentPage, int pageSize,String condition);//为院长查询所有符合condition的任务书记录
	public AssignmentBook findAssBookByStuId(Serializable id);//根据学生id查询一个任务书
	
	public PageBeanRePro getReProOpt(Integer currentPage, int pageSize,String condition);//为院长查询所有符合condition的开题报告记录
	
	
	public List<ReviewAudit> getToptList(Teacher teacher);//为指导老师查找到要填写指导老师意见的评阅审核表
	public List<ReviewAudit> getCoptList(Teacher teacher);//为指导老师查找到要填写评阅老师意见的评阅审核表
	public ReviewAudit getReAuBySid(Student student); //为学生查找到评阅审核表
	public PageBeanReAu getDoptList(int currentPage, int pageSize,String condition,Leader director);//为教研室主任查找到要填写评阅小组意见的评阅审核表
	public PageBeanReAu getAll(int currentPage, int pageSize,String condition);//为院长查找到要填写评阅小组意见的评阅审核表
	
}
