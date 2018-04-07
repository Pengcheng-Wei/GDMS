package action.doc_action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import service.doc_service.IDocService;


/**
*
* @author Allen      
* @created 2017年8月14日   
* 
*/
@SuppressWarnings("serial")
public class DownloadAction extends ActionSupport {

		private String serverPathGra;
		private String serverPathRepeat;
		private String serverPathAssBook;
		private String serverPathRePro;
		private String serverPathInCheck;
		private String serverPathReAu;
		

		private String name;
		private String downFileName;
		
		private String assBook_id;
		private String repro_id;
		private String stu_id;
		private String inCheck_id;
		private String reau_id;
		
		private IDocService docService;
	
		private ActionContext ac = ActionContext.getContext();

		
		public InputStream getInputStream(){
			Map<String, Object> para = ac.getParameters();
			String flag = ((String[])para.get("flag"))[0];
			
			try {
				
				downFileName = new String(name.getBytes(),"ISO8859-1");
			if("gra".equals(flag))
			{
				
					FileInputStream fis = new FileInputStream(new File(serverPathGra+name));
					return fis;
			}
			else if("repeat".equals(flag))
			{
					FileInputStream fis = new FileInputStream(new File(serverPathRepeat+name));
					return fis;
			}
			else if("assBook".equals(flag))
			{
				FileInputStream fis = new FileInputStream(new File(serverPathAssBook+name));
				return fis;
			}else if("rePro".equals(flag)){
				FileInputStream fis = new FileInputStream(new File(serverPathRePro+name));
				return fis;
			}else if("inCheck".equals(flag)){
				FileInputStream fis = new FileInputStream(new File(serverPathInCheck+name));
				return fis;
			}else{
				FileInputStream fis = new FileInputStream(new File(serverPathReAu+name));
				return fis;
			}
				
		}catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
		
		public String down()throws Exception{
			return "down";
		}
		
		
		
		
		
		
		
		
		
		public String getServerPathRePro() {
			return serverPathRePro;
		}

		public void setServerPathRePro(String serverPathRePro) {
			this.serverPathRePro = serverPathRePro;
		}
		
		
		
		
		
		public IDocService getDocService() {
			return docService;
		}

		public void setDocService(IDocService docService) {
			this.docService = docService;
		}

		
		

		public String getServerPathGra() {
			return serverPathGra;
		}

		public void setServerPathGra(String serverPathGra) {
			this.serverPathGra = serverPathGra;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getServerPathRepeat() {
			return serverPathRepeat;
		}

		public String getDownFileName() {
			return downFileName;
		}

		public void setDownFileName(String downFileName) {
			this.downFileName = downFileName;
		}

		public void setServerPathRepeat(String serverPathRepeat) {
			this.serverPathRepeat = serverPathRepeat;
		}

		public String getServerPathAssBook() {
			return serverPathAssBook;
		}

		public void setServerPathAssBook(String serverPathAssBook) {
			this.serverPathAssBook = serverPathAssBook;
		}

		public String getAssBook_id() {
			return assBook_id;
		}

		public void setAssBook_id(String assBook_id) {
			this.assBook_id = assBook_id;
		}

		public String getServerPathReAu() {
			return serverPathReAu;
		}

		public void setServerPathReAu(String serverPathReAu) {
			this.serverPathReAu = serverPathReAu;
		}

		public String getStu_id() {
			return stu_id;
		}

		public void setStu_id(String stu_id) {
			this.stu_id = stu_id;
		}

		public String getRepro_id() {
			return repro_id;
		}

		public void setRepro_id(String repro_id) {
			this.repro_id = repro_id;
		}

		public String getServerPathInCheck() {
			return serverPathInCheck;
		}

		public String getReau_id() {
			return reau_id;
		}

		public void setReau_id(String reau_id) {
			this.reau_id = reau_id;
		}

		public void setServerPathInCheck(String serverPathInCheck) {
			this.serverPathInCheck = serverPathInCheck;
		}

		public String getInCheck_id() {
			return inCheck_id;
		}

		public void setInCheck_id(String inCheck_id) {
			this.inCheck_id = inCheck_id;
		}

}
