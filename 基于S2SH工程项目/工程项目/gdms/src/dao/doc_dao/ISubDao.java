package dao.doc_dao;

import java.io.Serializable;
import java.util.List;

import entity.doc_entity.SubQuery;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年8月24日   
* 
*/
public interface ISubDao {
	public void saveSub(Subject sub);//存储一个题目
	public List<Subject> getSubByTeach(Teacher t);//根据老师查询其所有题目
	public List<Subject> getSubPassed(Teacher t);//获取该老师通过的题目
	public Subject getSubById(Serializable id);//根据id查对应题目
	public void updateSub(Subject sub);//更新一条数据
	public int queryCount(SubQuery sq);//获取全部记录数
	public List<Subject> getSubAll(int currentPage,int pageSize,SubQuery sq);//获取所有题目
	public List<Subject> getSubByLead(Leader l,int currentPage,int pageSize,SubQuery sq);//查询对应教研室下所有题目
	public int queryCountLead(Leader l,SubQuery sq);//查询对应教研室下题目总数
	public void delSub(Serializable id);//根据id删除这条题目
	public List<Subject> getPassSubs(int currentPage,int pageSize,SubQuery sq);//  获取审核通过 且 所选人数不大于4的题目
	public int getPassSubsNum(SubQuery sq);//获取审核通过 且 所选人数不大于4的题目数量
	public List<Student> getSubStus(Serializable subId);//获取选取该id的所有学生
}
