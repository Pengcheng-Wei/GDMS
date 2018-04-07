package dao.doc_dao;

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
public interface ICreateDoc {
	public void createDoc(Doc doc);
	public void createAssBook(AssignmentBook assBook,String filename);//创建任务书word版
	public void createRePro(ReaserchProposal proposal,String filename);//创建开题报告word版
	public void createInCheck(InterimCheck interimCheck,String filename);//创建中期检测表word版
	public void createReAu(ReviewAudit reviewAudit,String filename);//创建评阅审核表word版

}
