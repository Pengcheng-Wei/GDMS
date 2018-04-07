package dao.doc_dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.classic.Session;

import entity.doc_entity.AssignmentBook;
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
public class SubDao implements ISubDao {
	
	private SessionFactory sessionFactory;
	
	//根据老师查其所有题目
	@Override
	public List<Subject> getSubByTeach(Teacher t) {
		Session session = sessionFactory.getCurrentSession();
		// 命名参数查询
		Query query = session.createQuery("from Subject where tid= :tid_ ");
		query.setParameter("tid_", t.getId());
		@SuppressWarnings("unchecked")
		List<Subject> l = (List<Subject>)query.list(); 
		return l;
	}
	@Override
	public void updateSub(Subject sub) {
		Session session = sessionFactory.getCurrentSession();
		if("审核通过".equals(sub.getLeadOpt()) && "审核通过".equals(sub.getDirecOpt()))
			sub.setStatus("审核通过");
		else
			sub.setStatus("审核不通过");
		session.update(sub);
	}
	//查询所有总记录数
	@SuppressWarnings("unchecked")
	@Override
	public int queryCount(SubQuery sq) {
		Session session = sessionFactory.getCurrentSession();
		List<Subject> l = (List<Subject>)new ArrayList<Subject>(); 
		
		StringBuffer sql = new StringBuffer("from Subject where 1=1 ");
		if(sq!=null)
		{
			if(sq.getTeacherName()!=null && !sq.getTeacherName().trim().equals("")){
				sql.delete(0, sql.length());
				sql = new StringBuffer("from Subject subject join subject.teacher where subject.subName like ");
				sql.append("'%"+sq.getSubjectName().trim()+"%'");
				sql.append(" and subject.teacher.name like '%"+sq.getTeacherName().trim()+"%'");

				Query query = session.createQuery(sql.toString());
				List<Object[]> list = query.list();
				for (int i = 0; i<list.size(); i++) {
					Object[] values = list.get(i);
					// 获取数组第一个元素
					Subject sub = (Subject) values[0];
					// 获取数组第二个元素
					Teacher teach = (Teacher) values[1];
					l.add(sub);
				}
				return l.size();
			}
			else
			{
				sql.append(" and subName like '%"+sq.getSubjectName().trim()+"%'");
				Query query = session.createQuery(sql.toString());
				l = (List<Subject>)query.list();
				return l.size();
			}
		}
		else
		{
			Query query = session.createQuery(sql.toString());
			l = (List<Subject>)query.list();
			return l.size();
		}
	}
	@SuppressWarnings("unchecked")
	@Override
	public int getPassSubsNum(SubQuery sq) {
		Session session = sessionFactory.getCurrentSession();
		List<Subject> l = (List<Subject>)new ArrayList<Subject>(); 
		StringBuffer sql = new StringBuffer("from Subject where status='审核通过' and stuSum < 5 ");
		if(sq!=null)
		{
			if(sq.getTeacherName()!=null && !sq.getTeacherName().trim().equals("")){
				sql.delete(0, sql.length());
				sql = new StringBuffer("from Subject subject join subject.teacher where subject.subName like ");
				sql.append("'%"+sq.getSubjectName().trim()+"%'");
				sql.append(" and subject.teacher.name like '%"+sq.getTeacherName().trim()+"%'");

				Query query = session.createQuery(sql.toString());
				List<Object[]> list = query.list();
				for (int i = 0; i<list.size(); i++) {
					Object[] values = list.get(i);
					// 获取数组第一个元素
					Subject sub = (Subject) values[0];
					l.add(sub);
				}
				return l.size();
			}
			else
			{
				sql.append(" and subName like '%"+sq.getSubjectName().trim()+"%'");
				Query query = session.createQuery(sql.toString());
				l = (List<Subject>)query.list();
				return l.size();
			}
		}
		else
		{
			Query query = session.createQuery(sql.toString());
			l = (List<Subject>)query.list();
			return l.size();
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Subject> getPassSubs(int currentPage,int pageSize,SubQuery sq) {
		Session session = sessionFactory.getCurrentSession();
		List<Subject> l = (List<Subject>)new ArrayList<Subject>(); 
		StringBuffer sql = new StringBuffer("from Subject where status='审核通过' and stuSum <= 4 ");
		if(sq!=null)
		{
			if(sq.getTeacherName()!=null && !sq.getTeacherName().trim().equals("")){
				sql.delete(0, sql.length());
				sql = new StringBuffer("from Subject subject join subject.teacher where subject.subName like ");
				sql.append("'%"+sq.getSubjectName().trim()+"%'");
				sql.append(" and subject.teacher.name like '%"+sq.getTeacherName().trim()+"%'");

				Query query = session.createQuery(sql.toString());
				query.setFirstResult((currentPage-1)*pageSize); 
				query.setMaxResults(pageSize);
				List<Object[]> list = query.list();
				for (int i = 0; i<list.size(); i++) {
					Object[] values = list.get(i);
					// 获取数组第一个元素
					Subject sub = (Subject) values[0];
					l.add(sub);
				}
				return l;
			}
			else
			{
				sql.append(" and subName like '%"+sq.getSubjectName().trim()+"%'");
				Query query = session.createQuery(sql.toString());
				query.setFirstResult((currentPage-1)*pageSize); 
				query.setMaxResults(pageSize);
				l = (List<Subject>)query.list();
				return l;
			}
		}
		else
		{
			Query query = session.createQuery(sql.toString());
			query.setFirstResult((currentPage-1)*pageSize); 
			query.setMaxResults(pageSize);
			l = (List<Subject>)query.list();
			return l;
		}
	}
	// 查询所有题目
		@SuppressWarnings("unchecked")
		@Override
		public List<Subject> getSubAll(int currentPage,int pageSize,SubQuery sq) {
			Session session = sessionFactory.getCurrentSession();
			List<Subject> l = (List<Subject>)new ArrayList<Subject>(); 
			
			StringBuffer sql = new StringBuffer("from Subject where 1=1 ");
			if(sq!=null)
			{
				if(sq.getTeacherName()!=null && !sq.getTeacherName().trim().equals("")){
					sql.delete(0, sql.length());
					sql = new StringBuffer("from Subject subject join subject.teacher where subject.subName like ");
					sql.append("'%"+sq.getSubjectName().trim()+"%'");
					sql.append(" and subject.teacher.name like '%"+sq.getTeacherName().trim()+"%'");

					Query query = session.createQuery(sql.toString());
					query.setFirstResult((currentPage-1)*pageSize); 
					query.setMaxResults(pageSize);
					List<Object[]> list = query.list();
					for (int i = 0; i<list.size(); i++) {
						Object[] values = list.get(i);
						// 获取数组第一个元素
						Subject sub = (Subject) values[0];
						l.add(sub);
					}
					return l;
				}
				else
				{
					sql.append(" and subName like '%"+sq.getSubjectName().trim()+"%'");
					Query query = session.createQuery(sql.toString());
					query.setFirstResult((currentPage-1)*pageSize); 
					query.setMaxResults(pageSize);
					l = (List<Subject>)query.list();
					return l;
				}
			}
			else
			{
				Query query = session.createQuery(sql.toString());
				query.setFirstResult((currentPage-1)*pageSize); 
				query.setMaxResults(pageSize);
				l = (List<Subject>)query.list();
				return l;
			}
		}

		//获取对应教研室所有题目
		@Override
		public List<Subject> getSubByLead(Leader l,int currentPage,int pageSize,SubQuery sq) {
			Session session = sessionFactory.getCurrentSession();
			List<Subject> returnList = (List<Subject>)new ArrayList<Subject>(); 
			StringBuffer sql = new StringBuffer("from Subject subject join subject.teacher"
					+ " where subject.teacher.id_dept= :deptId_ ");
			
			if(sq!=null)
			{
				if(sq.getTeacherName()!=null && !sq.getTeacherName().trim().equals("")){
					sql.append(" and subject.teacher.name like '%"+sq.getTeacherName().trim()+"%'");
				}
				if(sq.getSubjectName()!=null && !sq.getSubjectName().trim().equals(""))
				{
					sql.append(" and subject.subName like '%"+sq.getSubjectName().trim()+"%'");
				}
			}
			Query q = session
					.createQuery(sql.toString());
			q.setParameter("deptId_", l.getId_dept());
			q.setFirstResult((currentPage - 1) * pageSize);
			q.setMaxResults(pageSize);
			@SuppressWarnings("unchecked")
			List<Object[]> list = q.list();
			for (int i = 0; i < list.size(); i++) {
				Object[] values = list.get(i);
				// 获取数组第一个元素
				Subject sub = (Subject) values[0];
				returnList.add(sub);
			}
			return returnList;
		}

		//查询某一主任下所有题目数量
		public int queryCountLead(Leader l,SubQuery sq) {
			Session session = sessionFactory.getCurrentSession();
			@SuppressWarnings("unused")
			List<Subject> returnList = (List<Subject>)new ArrayList<Subject>(); 
			StringBuffer sql = new StringBuffer("from Subject subject join subject.teacher"
					+ " where subject.teacher.id_dept= :deptId_ ");
			
			if(sq!=null)
			{
				if(sq.getTeacherName()!=null && !sq.getTeacherName().trim().equals("")){
					sql.append(" and subject.teacher.name like '%"+sq.getTeacherName().trim()+"%'");
				}
				if(sq.getSubjectName()!=null && !sq.getSubjectName().trim().equals(""))
				{
					sql.append(" and subject.subName like '%"+sq.getSubjectName().trim()+"%'");
				}
			}
			
			Query q = session
					.createQuery(sql.toString());
			q.setParameter("deptId_", l.getId_dept());
			 
			 @SuppressWarnings("unchecked")
			List<Object[]> list = q.list();
			return list.size();
		}

		@Override
		public void delSub(Serializable id) {
			Session session = sessionFactory.getCurrentSession();
			Subject sub = (Subject)session.get(Subject.class, id);
			session.delete(sub);
			
		}

		@Override
		public List<Subject> getSubPassed(Teacher t) {
			
			Session session = sessionFactory.getCurrentSession();
			Query query = session.createQuery("from Subject where tid= :tid_ and status='审核通过'");
			query.setParameter("tid_", t.getId());
			@SuppressWarnings("unchecked")
			List<Subject> l = (List<Subject>)query.list(); 
			return l;
		}

		@Override
		public List<Student> getSubStus(Serializable subId) {
			
			Session session = sessionFactory.getCurrentSession();
			
			Query query = session.createQuery("from Student where sub_id= :sub_id ");
			query.setParameter("sub_id", subId);
					
			@SuppressWarnings("unchecked")
			List<Student> l = (List<Student>)query.list(); 
			
			return l;
		}

	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	@Override
	public void saveSub(Subject sub) {
		Session session = sessionFactory.getCurrentSession();
		sub.setDirecOpt("未审核");
		sub.setLeadOpt("未审核");
		sub.setStatus("未审核");
		session.save(sub);
	}
	@Override
	public Subject getSubById(Serializable id) {
		Session session = sessionFactory.getCurrentSession();
		Subject sub = (Subject)session.get(Subject.class, id);
		return sub;
	}
}
