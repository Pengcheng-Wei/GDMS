package entity.per_entity;
/**
*
* @author Allen      
* @created 2017年7月31日   
* 
*/
public class Person {
	private Integer id;
	private String name;
	private String phone;
	private String email;
	private String password;
	private String identity;
	public static final String STUDENT ="student";
	public static final String TEACHER ="teacher";
	public static final String LEADER ="leader";
	public static final String DIRECTOR ="director";
	
	public Person() {
		super();
	}
	public Person(Integer id, String name, String phone, String email, String password, String identity) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.identity = identity;
	}
	public String getIdentity() {
		return identity;
	}
	public void setIdentity(String identity) {
		this.identity = identity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", phone=" + phone + ", email=" + email + ", password="
				+ password + "]";
	}
	
}
