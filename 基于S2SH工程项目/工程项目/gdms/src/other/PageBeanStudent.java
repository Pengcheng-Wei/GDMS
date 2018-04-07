package other;

import java.util.List;

import entity.per_entity.Student;

/**
*
* @author Allen      
* @created 2017年8月7日   
* 
*/
public class PageBeanStudent {
	List<Student> data; // 当前页数据
	int firstPage; // 首页
	int prePage; // 上一页
	int nextPage;// 下一页
	int totalPage;// 末页/总页数
	int currentPage;// 当前页
	int totalCount;// 总记录数
	int pageSize;// 每页显示记录数
	public List<Student> getData() {
		return data;
	}
	public void setData(List<Student> data) {
		this.data = data;
	}
	/**
	 * 首页
	 * @return
	 */
	public int getFirstPage() {
		return 1;
	}
	public void setFirstPage(int firstPage) {
		this.firstPage = firstPage;
	}
	/**
	 * 上一页 算法：如果当前页是首页，则为1，否则为（当前页-1）
	 * @return
	 */
	public int getPrePage() {
		return this.getCurrentPage()==this.getFirstPage()
					?1:
					this.getCurrentPage()-1;
	}
	public void setPrePage(int prePage) {
		this.prePage = prePage;
	}
	
	/**
	 * 下一页  算法： 如果当前页是末页，则为末页，否则为（当前页+1）
	 * @return
	 */
	public int getNextPage() {
		return this.getCurrentPage()==this.getTotalPage()
				? this.getTotalPage()
				: this.getCurrentPage()+1;
	}
	public void setNextPage(int nextPage) {
		this.nextPage = nextPage;
	}
	/**
	 * 总页数  算法：  如果   总记录数%每页显示记录数能够整除 ,则为（总记录数/每页显示记录数），否则  （总记录数/每页显示记录数+1）  
	 * @return
	 */
	public int getTotalPage() {
		return this.getTotalCount()%this.getPageSize()==0
				? this.getTotalCount()/this.getPageSize()
				: this.getTotalCount()/this.getPageSize()+1;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
}
