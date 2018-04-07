package dao.per_dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import entity.doc_entity.ReviewAudit;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;

/**
*
* @author Allen      
* @created 2017年7月31日   
* 
*/
public class PerEntityDao implements IPerEntityDao {
	


	private SessionFactory sessionFactory;
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public Person findById(Serializable id) {
	
			//1） 创建session
			Person p = null;
			Session session = sessionFactory.getCurrentSession();
			//2）开启事务
			p = (Student)session.get(Student.class, id);//查询学生表
			if(p==null)//若为空则查询教师表
			{
				p=(Teacher)session.get(Teacher.class, id);//查询教师表
				if(p==null)//若为空 则查询领导表
				{
					p=(Leader)session.get(Leader.class, id);//查询领导表
					if(p!=null)
					{
						if(p.getId()==2015101110)
							p.setIdentity(Person.LEADER);
						else
							p.setIdentity(Person.DIRECTOR);
					}
					return p;//不管是否为空，都要返回Person对象
				}
				else
				{
					p.setIdentity(Person.TEACHER);
					return p;
				}
			}
			else
			{
				p.setIdentity(Person.STUDENT);
				return p;
			}
		
		
	}
	
	@Override
	public Leader findLeadById(Serializable id) {
		Session session = sessionFactory.getCurrentSession();
		Leader l = (Leader)session.get(Leader.class, id);
		return l;
	}
	
	@Override
	public Student findStuById(Serializable id) {
		Session session = sessionFactory.getCurrentSession();
		Student stu = (Student)session.get(Student.class, id);
		return stu;
	}
	@Override
	public void updateStu(Student stu) {
		Session session = sessionFactory.getCurrentSession();
		if(stu.getSubject()!=null)
		{
			if(stu.getSubject().getSub_id()==null||stu.getSubject().getSub_id().equals(""))
				stu.setSubStatus("未审核");
		}
		session.update(stu);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> getPassedStus(Teacher teacher) {
		Session session = sessionFactory.getCurrentSession();
		List<Student> returnList =(List<Student>)new ArrayList<Student>();
		// 命名参数查询
		Query query = session.createQuery("from Student student join student.subject where student.subStatus= '审核通过' and student.subject.teacher = :tid_");
		query.setParameter("tid_", teacher);
		
		List<Object[]> list = query.list();
		for (int i = 0; i < list.size(); i++) {
			Object[] values = list.get(i);
			// 获取数组第一个元素
			Student sub = (Student) values[0];
			returnList.add(sub);
		}
		
		//returnList = (List<Student>)query.list();
		return returnList;
	}

	@Override
	public Teacher findTeachById(Serializable id) {
		Session session = sessionFactory.getCurrentSession();
		Teacher teacher = (Teacher)session.get(Teacher.class, id);
		return teacher;
	}

	@Override
	public void updateTeach(Teacher teacher) {
		Session session = sessionFactory.getCurrentSession();
		session.update(teacher);
	}
	@Override
	public void updateDirector(Leader director) {
		Session session = sessionFactory.getCurrentSession();
		session.update(director);
	}

	@Override
	public List<Student> getStusForDirector(Integer currentPage, int pageSize, Leader director, String condition) {
		Session session = sessionFactory.getCurrentSession();
		List<Student> returnList = (List<Student>)new ArrayList<Student>(); 
		StringBuffer sql = new StringBuffer("from Student student join student.teacher"
								+ " where student.teacher.id_dept= :deptId_ ");
		if("NotPass".equals(condition))
			sql.append(" and finalGrade ='E'");
		else if("Pass".equals(condition))
			sql.append(" and finalGrade != 'E'");
		
		Query query = session.createQuery(sql.toString());
		query.setParameter("deptId_",director.getId_dept());
			
		query.setFirstResult((currentPage-1)*pageSize); 
		query.setMaxResults(pageSize);
		@SuppressWarnings("unchecked")
		List<Object[]> list = query.list();
		for (int i = 0; i < list.size(); i++) {
			Object[] values = list.get(i);
			// 获取数组第一个元素
			Student sub = (Student) values[0];
			returnList.add(sub);
		}
		return returnList;
	}
	@Override
	public int getStusForDirectorCnt(Leader director, String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from Student student join student.teacher"
				+ " where student.teacher.id_dept= :deptId_ ");
		if("NotPass".equals(condition))
			sql.append(" and finalGrade ='E'");
		else if("Pass".equals(condition))
			sql.append(" and finalGrade != 'E'");
		
		Query query = session.createQuery(sql.toString());
		query.setParameter("deptId_", director.getId_dept());
		
		@SuppressWarnings("unchecked")
		List<Object[]> list = query.list();
		return list.size();
	}

	@Override
	public List<Student> getStusAll(Integer currentPage, int pageSize, String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from Student where 1= 1 ");
		
		if("NotPass".equals(condition))
			sql.append(" and finalGrade ='E'");
		else if("Pass".equals(condition))
			sql.append(" and finalGrade != 'E'");
		
		Query query = session.createQuery(sql.toString());
			
		query.setFirstResult((currentPage-1)*pageSize); 
		query.setMaxResults(pageSize);
		@SuppressWarnings("unchecked")
		List<Student> list = (List<Student>)query.list();
		return list;
	}

	@Override
	public int getStusCnt(String condition) {
		Session session = sessionFactory.getCurrentSession();
		StringBuffer sql = new StringBuffer("from Student where 1= 1 ");
		if("NotPass".equals(condition))
			sql.append(" and finalGrade ='E'");
		else if("Pass".equals(condition))
			sql.append(" and finalGrade != 'E'");
		
		Query query = session.createQuery(sql.toString());
		
		@SuppressWarnings("unchecked")
		List<Student> list = (List<Student>)query.list();
		return list.size();
	}

	@Override
	public Leader getDirectorByStu(Student student) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from Leader where id_dept = :idDept");
		query.setParameter("idDept", student.getId_dept());
		Leader leader = (Leader)query.list().get(0);
		return leader;
	}

}
