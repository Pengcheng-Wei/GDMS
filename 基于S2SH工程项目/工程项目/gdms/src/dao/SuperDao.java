package dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

import entity.doc_entity.Doc;
import entity.doc_entity.ReviewAudit;
import entity.doc_entity.Subject;
import entity.per_entity.Leader;
import entity.per_entity.Person;
import entity.per_entity.Student;
import entity.per_entity.Teacher;
/**
*
* @author Allen      
* @created 2017年8月26日   
* 
*/
public class SuperDao {
	private static SessionFactory sessionFactory;
	static {
		sessionFactory = new Configuration()
			.configure()
			.addClass(Doc.class)
			.addClass(Person.class)
			.buildSessionFactory();
	}
	
	// 3) 分评阅小组 每个小组最多答辩100人
	@SuppressWarnings("unchecked")
	public static void dispachDGroup()
	{
		Session session = sessionFactory.getCurrentSession();
		session.beginTransaction();
	
		Query qureyStu = session.createQuery("from Student where subStatus = '审核通过'");
		List<Student> listStu = (List<Student>)qureyStu.list();
		Query queryLead = session.createQuery("from Leader where title = '教研主任'");
		List<Leader> listLead = (List<Leader>)queryLead.list();
		for (Student student : listStu) {
			for (Leader leader : listLead) {
				if(student.getTeacher().getId_dept()!=leader.getId_dept() && leader.getdStuSum()!=100)
				{
					student.setId_dept(leader.getId_dept());
					leader.setdStuSum(leader.getdStuSum()+1);
					ReviewAudit reviewAudit = new ReviewAudit();
					reviewAudit.setStudent(student);
					reviewAudit.setTeacher(student.getTeacher());
					reviewAudit.setDid(Integer.toString(leader.getId()));
					reviewAudit.setCid(Integer.toString(student.getCid()));
					session.save(reviewAudit);
					break;
				}
			}
		}
		
		
		
	
		session.getTransaction().commit();
	}
	// 2)分配评阅老师 每个评阅老师评阅5个学生
	@SuppressWarnings("unchecked")
	public static void dispachCTeacher()
	{
		Session session = sessionFactory.getCurrentSession();
		session.beginTransaction();
		
		Query queryTea = session.createQuery("from Teacher");
		List<Teacher> listTea = (List<Teacher>)queryTea.list();
		Query qureyStu = session.createQuery("from Student");
		List<Student> listStu = (List<Student>)qureyStu.list();
		
		for (Student student : listStu) {
			for (Teacher teacher : listTea) {
				if(student.getTeacher()!=teacher && teacher.getcStuSum()!=5)
				{
					student.setCid(teacher.getId());
					teacher.setcStuSum(teacher.getcStuSum()+1);
					break;
				}
			}
		}
		session.getTransaction().commit();
	}
	
	
	
	
	
	
	
	
	
	// 1) 随机分配未选上课的学生
	@SuppressWarnings("unchecked")
	public static void dispatchStu()
	{
		List<Student> listStu;
		List<Subject> listSub;
		Session session = sessionFactory.getCurrentSession();
		session.beginTransaction();
		
		Query queryStu = session.createQuery("from Student student where student.subject = null");
		listStu = (List<Student>)queryStu.list();
		
		Query querySub = session.createQuery("from Subject where stuSum < 4 and status = '审核通过'");
		listSub = (List<Subject>)querySub.list();
		
		for (Student student : listStu) {
			for (Subject subject : listSub) {
				if(subject.getStuSum()!=4 && subject.getTeacher().getStuTotal()!=8)
				{
					student.setSubject(subject);
					student.setTeacher(subject.getTeacher());
					break;
				}
			}
		}
		session.getTransaction().commit();
	}
	
	public static void main(String[] args) {
		dispachDGroup();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
}
