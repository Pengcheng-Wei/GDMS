package test;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.junit.Test;

import entity.doc_entity.Subject;
import entity.per_entity.Teacher;


/**
*
* @author Allen      
* @created 2017年8月7日   
* 
*/
public class HiberTest {
	private static SessionFactory sf;
	static {
		sf = new Configuration()
			.configure()
			.addClass(Subject.class)
			.addClass(Teacher.class)
			.buildSessionFactory();
	}
	@Test
	public void test_inner()
	{
		Session s = sf.openSession();
		System.out.println(s);
	}

}
