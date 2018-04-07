package dao.doc_dao;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.usermodel.Range;

import entity.doc_entity.AssignmentBook;
import entity.doc_entity.Doc;
import entity.doc_entity.InterimCheck;
import entity.doc_entity.ReaserchProposal;
import entity.doc_entity.ReviewAudit;

/**
*
* @author Allen      
* @created 2017年8月24日   
* 
*/
public class CreateDoc implements ICreateDoc {
	
	@Override
	public void createDoc(Doc doc) {
		if(doc instanceof AssignmentBook)
		{
			AssignmentBook assBook = (AssignmentBook)doc;
			if(assBook.getSub_deptOpt()!=null)
				createAssBook(assBook, Integer.toString(assBook.getStudent().getId()));
		}
		else if(doc instanceof ReaserchProposal)
		{
			ReaserchProposal proposal = (ReaserchProposal)doc;
			if(proposal.getDept_opt()!=null)
			createRePro(proposal, Integer.toString(proposal.getStudent().getId()));
		}
		else if(doc instanceof InterimCheck)
		{
			InterimCheck interimCheck = (InterimCheck)doc;
			if(interimCheck.getT_opt()!=null)
				createInCheck(interimCheck, Integer.toString(interimCheck.getStudent().getId()));
		}else if(doc instanceof ReviewAudit){
			ReviewAudit reviewAudit = (ReviewAudit)doc;
			if(reviewAudit.getL_opt()!=null)
				createReAu(reviewAudit, Integer.toString(reviewAudit.getStudent().getId()));
		}
	}

	@Override
	public void createAssBook(AssignmentBook assBook,String filename) {

	      String templatePath = "G://GraduationDocs//template//任务书.doc";  
	      InputStream is;
		try {
			  is = new FileInputStream(templatePath);
			  @SuppressWarnings("resource")
			HWPFDocument doc = new HWPFDocument(is);  
		      Range range = doc.getRange();  
		      
		      range.replaceText("${sub_name}", assBook.getStudent().getSubject().getSubName());  
		      range.replaceText("${t_name}", assBook.getTeacher().getName());  
		      range.replaceText("${t_title}", assBook.getTeacher().getTitle());  
		      range.replaceText("${s_name}", assBook.getStudent().getName());  
		      range.replaceText("${s_id}", Integer.toString(assBook.getStudent().getId()));  
		      range.replaceText("${s_major}", assBook.getStudent().getMajor());  
		      range.replaceText("${s_grade}", assBook.getStudent().getGrade());  
		      range.replaceText("${sub_type}", assBook.getStudent().getSubject().getSub_type());  
		      range.replaceText("${sub_src}", assBook.getSub_src());  
		      range.replaceText("${sub_property}", assBook.getSub_property());  
		      range.replaceText("${sub_baseReq}", assBook.getSub_baseReq());  
		      range.replaceText("${sub_gogal}", assBook.getSub_gogal());  
		      range.replaceText("${sub_content }", assBook.getSub_content());  
		      range.replaceText("${sub_refe}", assBook.getSub_refe());  
		      range.replaceText("${sub_process}", assBook.getSub_process());  
		      range.replaceText("${sub_deptOpt}", assBook.getSub_deptOpt());  
		      range.replaceText("${sub_deptName}", assBook.getSub_deptName());  
		      range.replaceText("${check_time}", assBook.getCheck_time());  
		      OutputStream os = new FileOutputStream("G://GraduationDocs//AssignmentBook//"+filename+"-任务书.doc");  
		      //把doc输出到输出流中  
		      doc.write(os);  
		      closeStream(os);  
		      closeStream(is);  
		} catch (Exception e) {
			e.printStackTrace();
		}  
	}
	@Override
	public void createRePro(ReaserchProposal proposal, String filename) {
		 String templatePath = "G://GraduationDocs//template//开题报告.doc";  
	      InputStream is;
		try {
			  is = new FileInputStream(templatePath);
			  @SuppressWarnings("resource")
			HWPFDocument doc = new HWPFDocument(is);  
		      Range range = doc.getRange();  
		      
		      range.replaceText("${date}", proposal.getDate());  
		      range.replaceText("${s_name}", proposal.getStudent().getName());  
		      range.replaceText("${s_major}", proposal.getStudent().getMajor());  
		      range.replaceText("${s_id}", Integer.toString(proposal.getStudent().getId()));  
		      range.replaceText("${s_grade}", proposal.getStudent().getGrade()); 
		      range.replaceText("${s_phone}", proposal.getStudent().getPhone());  
		      range.replaceText("${s_email}", proposal.getStudent().getEmail());  
		      range.replaceText("${t_name}", proposal.getTeacher().getName());  
		      range.replaceText("${t_phone}", proposal.getTeacher().getPhone());  
		      range.replaceText("${t_email}", proposal.getTeacher().getEmail());  
		      
		      range.replaceText("${sub_name}", proposal.getStudent().getSubject().getSubName());  
		      range.replaceText("${deadline}", proposal.getDeadline());  
		      range.replaceText("${totalSum}", proposal.getTotalSum());  
		      range.replaceText("${sub_gogal}", proposal.getSub_gogal());  
		      range.replaceText("${sub_background}", proposal.getSub_background());  
		      range.replaceText("${sub_content}", proposal.getSub_content());  
		      range.replaceText("${sub_plan}", proposal.getSub_plan());  
		      range.replaceText("${sub_question}", proposal.getSub_question());  
		      range.replaceText("${sub_refe}", proposal.getSub_refe());  
		      range.replaceText("${t_opt}", proposal.getT_opt());  
		      range.replaceText("${t_name}", proposal.getTeacher().getName());  
		      range.replaceText("${t_time}", proposal.getT_time());  
		      range.replaceText("${dept_opt}", proposal.getDept_opt());  
		      range.replaceText("${dept_name}", proposal.getDept_name());  
		      range.replaceText("${dept_time}", proposal.getDept_time());  
		      OutputStream os = new FileOutputStream("G://GraduationDocs//ResearchProposal//"+filename+"-开题报告.doc");  
		      //把doc输出到输出流中  
		      doc.write(os);  
		      closeStream(os);  
		      closeStream(is);  
		} catch (Exception e) {
			e.printStackTrace();
		}  
	}
	@Override
	public void createReAu(ReviewAudit reviewAudit, String filename) {
		String templatePath = "G://GraduationDocs//template//评阅审核表.doc";  
	      InputStream is;
		try {
			  is = new FileInputStream(templatePath);
			  @SuppressWarnings("resource")
			HWPFDocument doc = new HWPFDocument(is);  
		      Range range = doc.getRange();  
		      
		      range.replaceText("${date}", reviewAudit.getDate());  
		      range.replaceText("${s_name}", reviewAudit.getStudent().getName());  
		      range.replaceText("${s_id}", Integer.toString(reviewAudit.getStudent().getId()));  
		      range.replaceText("${s_major}", reviewAudit.getStudent().getMajor());  
		      range.replaceText("${s_grade}", reviewAudit.getStudent().getGrade()); 
		      range.replaceText("${s_phone}", reviewAudit.getStudent().getPhone());  
		      range.replaceText("${s_email}", reviewAudit.getStudent().getEmail());  
		      range.replaceText("${t_name}", reviewAudit.getTeacher().getName());  
		      range.replaceText("${t_phone}", reviewAudit.getTeacher().getPhone());  
		      range.replaceText("${t_email}", reviewAudit.getTeacher().getEmail());   
		      range.replaceText("${sub_name}", reviewAudit.getStudent().getSubject().getSubName());  
		      
		      range.replaceText("${totalSum}", reviewAudit.getTotalSum());  
		      range.replaceText("${t_opt}", reviewAudit.getT_opt());  
		      range.replaceText("${t_time}", reviewAudit.getT_time());  
		      range.replaceText("${c_opt}", reviewAudit.getC_opt());  
		      range.replaceText("${c_time}", reviewAudit.getC_time());  
		      range.replaceText("${c_name}", reviewAudit.getC_name());  
		      range.replaceText("${d_opt}", reviewAudit.getD_opt());  
		      range.replaceText("${d_name}", reviewAudit.getD_name());  
		      range.replaceText("${d_time}", reviewAudit.getD_time());  
		      range.replaceText("${l_opt}", reviewAudit.getL_opt());  
		      range.replaceText("${l_name}", reviewAudit.getL_name());  
		      range.replaceText("${l_time}", reviewAudit.getL_time());  
		      OutputStream os = new FileOutputStream("G://GraduationDocs//ReviewAudit//"+filename+"-评阅审核表.doc");  
		      //把doc输出到输出流中  
		      doc.write(os);  
		      closeStream(os);  
		      closeStream(is);  
		} catch (Exception e) {
			e.printStackTrace();
		}  
	}
	@Override
	public void createInCheck(InterimCheck interimCheck, String filename) {
		String templatePath = "G://GraduationDocs//template//中期检查表.doc";  
	      InputStream is;
		try {
			  is = new FileInputStream(templatePath);
			  @SuppressWarnings("resource")
			HWPFDocument doc = new HWPFDocument(is);  
		      Range range = doc.getRange();  
		      
		      range.replaceText("${date}", interimCheck.getDate());  
		      range.replaceText("${s_name}", interimCheck.getStudent().getName());  
		      range.replaceText("${s_id}", Integer.toString(interimCheck.getStudent().getId()));  
		      range.replaceText("${s_major}", interimCheck.getStudent().getMajor());  
		      range.replaceText("${s_grade}", interimCheck.getStudent().getGrade()); 
		      range.replaceText("${s_phone}", interimCheck.getStudent().getPhone());  
		      range.replaceText("${s_email}", interimCheck.getStudent().getEmail());  
		      range.replaceText("${t_name}", interimCheck.getTeacher().getName());  
		      range.replaceText("${sub_name}", interimCheck.getStudent().getSubject().getSubName());  
		      
		      range.replaceText("${finish}", interimCheck.getFinish());  
		      range.replaceText("${unfinish}", interimCheck.getUnfinish());  
		      range.replaceText("${sub_plan}", interimCheck.getSub_plan());  
		      range.replaceText("${t_opt}", interimCheck.getT_opt());  
		      range.replaceText("${t_time}", interimCheck.getT_time());  
		      OutputStream os = new FileOutputStream("G://GraduationDocs//InterimCheck//"+filename+"-中期检查表.doc");  
		      //把doc输出到输出流中  
		      doc.write(os);  
		      closeStream(os);  
		      closeStream(is);  
		} catch (Exception e) {
			e.printStackTrace();
		}  
	}
	  
	   private void closeStream(InputStream is) {  
	      if (is != null) {  
	         try {  
	            is.close();  
	         } catch (IOException e) {  
	            e.printStackTrace();  
	         }  
	      }  
	   }  
 
	   private void closeStream(OutputStream os) {  
	      if (os != null) {  
	         try {  
	            os.close();  
	         } catch (IOException e) {  
	            e.printStackTrace();  
	         }  
	      }
	   }


}
