package dao.doc_dao;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.classic.Session;

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
public class DocDao implements IDocDao{
	
	private SessionFactory sessionFactory;
	
	@Override
	public void saveDoc(Doc doc) {
		Session session = sessionFactory.getCurrentSession();
		session.save(doc);
	}
	@Override
	public void updateDoc(Doc doc) {
		Session session = sessionFactory.getCurrentSession();
		session.update(doc);
	}
	@SuppressWarnings("rawtypes")
	public Doc findDocById(Class clazz,Serializable id)
	{
		Session session = sessionFactory.getCurrentSession();
		
		return (Doc)session.get(clazz, id);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<AssignmentBook> getAssBookOptIsNull(int currentPage,int pageSize,String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from AssignmentBook where 1=1 ");
		if("NotNull".equals(condition))
			sql.append("and sub_deptOpt != ''");
		else if("Null".equals(condition))
			sql.append("and sub_deptOpt = ''");
		
		Query query = session.createQuery(sql.toString());
			
		query.setFirstResult((currentPage-1)*pageSize); 
		query.setMaxResults(pageSize);
		List<AssignmentBook> list = (List<AssignmentBook>)query.list();
		return list;
	}


	@Override
	public int getABOptNullCnt(String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from AssignmentBook where 1=1 ");
		if(condition!=null && condition!="")
		{
			if("NotNull".equals(condition))
				sql.append("and sub_deptOpt != ''");
			else if("Null".equals(condition))
				sql.append("and sub_deptOpt = ''");
		}
		Query query = session.createQuery(sql.toString());
		@SuppressWarnings("unchecked")
		List<AssignmentBook> list = (List<AssignmentBook>)query.list();
		return list.size();
	}

	@Override
	public AssignmentBook findAssBookByStuId(Serializable id) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from AssignmentBook where stu_id = :id_");
		query.setParameter("id_", id);
		@SuppressWarnings("unchecked")
		List<AssignmentBook> assBook = (List<AssignmentBook>)query.list();
		if(assBook.size()==0)
			return null;
		return assBook.get(0);
	}
	@Override
	public List<ReaserchProposal> getReProOpt(int currentPage, int pageSize, String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from ReaserchProposal where 1=1 ");
		if("NotNull".equals(condition))
			sql.append("and dept_opt != ''");
		else if("Null".equals(condition))
			sql.append("and dept_opt = ''");
		
		Query query = session.createQuery(sql.toString());
			
		query.setFirstResult((currentPage-1)*pageSize); 
		query.setMaxResults(pageSize);
		@SuppressWarnings("unchecked")
		List<ReaserchProposal> list = (List<ReaserchProposal>)query.list();
		return list;
	}

	@Override
	public int getReProCnt(String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from ReaserchProposal where 1=1 ");
		if(condition!=null && condition!="")
		{
			if("NotNull".equals(condition))
				sql.append("and dept_opt != ''");
			else if("Null".equals(condition))
				sql.append("and dept_opt = ''");
		}
		Query query = session.createQuery(sql.toString());
		@SuppressWarnings("unchecked")
		List<ReaserchProposal> list = (List<ReaserchProposal>)query.list();
		return list.size();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ReviewAudit> getToptList(Teacher teacher) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from ReviewAudit where tid = :tid_");
		query.setParameter("tid_", teacher.getId());
		List<ReviewAudit> list = (List<ReviewAudit>)query.list();
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ReviewAudit> getCoptList(Teacher teacher) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from ReviewAudit where cid = :cid_");
		query.setParameter("cid_", Integer.toString(teacher.getId()));
		List<ReviewAudit> list = (List<ReviewAudit>)query.list();
		return list;
	}

	@Override
	public List<ReviewAudit> getDoptList(Integer currentPage, int pageSize,String condition,Leader director) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from ReviewAudit where did = :did_ ");
		if("NotNull".equals(condition))
			sql.append("and d_opt != ''");
		else if("Null".equals(condition))
			sql.append("and d_opt = null");
		
		Query query = session.createQuery(sql.toString());
		query.setParameter("did_", Integer.toString(director.getId()));
			
		query.setFirstResult((currentPage-1)*pageSize); 
		query.setMaxResults(pageSize);
		@SuppressWarnings("unchecked")
		List<ReviewAudit> list = (List<ReviewAudit>)query.list();
		return list;
	}
	@Override
	public int getDoptListCnt(String condition, Leader director) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from ReviewAudit where did = :did_ ");
		if("NotNull".equals(condition))
			sql.append("and d_opt != ''");
		else if("Null".equals(condition))
			sql.append("and d_opt = null");
		
		Query query = session.createQuery(sql.toString());
		query.setParameter("did_", Integer.toString(director.getId()));
		
		@SuppressWarnings("unchecked")
		List<ReviewAudit> list = (List<ReviewAudit>)query.list();
		return list.size();
	}

	@Override
	public List<ReviewAudit> getAll(int currentPage, int pageSize,String condition) {
		
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from ReviewAudit where 1 = 1 ");
		if("NotNull".equals(condition))
			sql.append("and l_opt != ''");
		else if("Null".equals(condition))
			sql.append("and l_opt = null");
		
		Query query = session.createQuery(sql.toString());
			
		query.setFirstResult((currentPage-1)*pageSize); 
		query.setMaxResults(pageSize);
		@SuppressWarnings("unchecked")
		List<ReviewAudit> list = (List<ReviewAudit>)query.list();
		return list;
	}
	@Override
	public int getAllCnt(String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from ReviewAudit where 1 = 1 ");
		if("NotNull".equals(condition))
			sql.append("and l_opt != ''");
		else if("Null".equals(condition))
			sql.append("and l_opt = null");
		
		Query query = session.createQuery(sql.toString());
		
		@SuppressWarnings("unchecked")
		List<ReviewAudit> list = (List<ReviewAudit>)query.list();
		return list.size();
	}

	@Override
	public ReviewAudit getReAuBySid(Student student) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from ReviewAudit where sid = :sid_");
		query.setParameter("sid_", Integer.toString(student.getId()));
		@SuppressWarnings("unchecked")
		List<ReviewAudit> ReAu = (List<ReviewAudit>)query.list();
		if(ReAu.size()==0)
			return null;
		return ReAu.get(0);
	}
	
	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

}
