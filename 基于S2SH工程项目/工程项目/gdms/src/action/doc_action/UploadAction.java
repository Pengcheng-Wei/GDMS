package action.doc_action;

import java.io.File;
import java.util.Map;
import org.apache.commons.io.FileUtils;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import entity.per_entity.Student;
import service.per_service.IPerService;

@SuppressWarnings("serial")
public class UploadAction extends ActionSupport{
	private File attach;
	private String attachContentType;
	private String attachFileName;
	private String saveGraRep;
	private String saveRepeatRep;
	private ActionContext ac = ActionContext.getContext();
	private IPerService perService;
	
	public String upload() throws Exception
	{
		Map<String, Object> para = ac.getParameters();
		String flag = ((String[])para.get("flag"))[0];
		
		Map<String, Object> session = ac.getSession();
		Student stu = (Student)session.get("student");
		String fileName = Integer.toString(stu.getId())+"-"+attachFileName;
		
		if("gra".equals(flag))
		{
			File file = new File(saveGraRep);
			File[] files = file.listFiles();
			for (File file2 : files) {
				if(file2.getName().startsWith(Integer.toString(stu.getId())))
					file2.delete();
			}

			FileUtils.copyFile(attach, new File(saveGraRep+fileName));
			stu.setGraRep(fileName);
		}
		else
		{
			File file = new File(saveGraRep);
			File[] files = file.listFiles();
			for (File file2 : files) {
				if(file2.getName().startsWith(Integer.toString(stu.getId())))
					file2.delete();
			}
			FileUtils.copyFile(attach, new File(saveRepeatRep+fileName));
			stu.setRepeatRep(fileName);
		}
		perService.updateStu(stu);
		return SUCCESS;
	}
	
	public String getSaveGraRep() {
		return saveGraRep;
	}

	public void setSaveGraRep(String saveGraRep) {
		this.saveGraRep = saveGraRep;
	}

	public File getAttach() {
		return attach;
	}
	public void setAttach(File attach) {
		this.attach = attach;
	}
	public String getAttachContentType() {
		return attachContentType;
	}
	public void setAttachContentType(String attachContentType) {
		this.attachContentType = attachContentType;
	}

	public String getAttachFileName() {
		return attachFileName;
	}
	public void setAttachFileName(String attachFileName) {
		this.attachFileName = attachFileName;
	}


	public String getSaveRepeatRep() {
		return saveRepeatRep;
	}

	public void setSaveRepeatRep(String saveRepeatRep) {
		this.saveRepeatRep = saveRepeatRep;
	}

	public IPerService getPerService() {
		return perService;
	}


	public void setPerService(IPerService perService) {
		this.perService = perService;
	}
	
}
