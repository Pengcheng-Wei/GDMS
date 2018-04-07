-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: gdms
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_assignmentbook`
--

DROP TABLE IF EXISTS `t_assignmentbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_assignmentbook` (
  `assBook_id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_id` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `sub_src` varchar(20) DEFAULT NULL,
  `sub_property` varchar(55) DEFAULT NULL,
  `sub_baseReq` varchar(1500) DEFAULT NULL,
  `sub_gogal` varchar(1500) DEFAULT NULL,
  `sub_content` varchar(1500) DEFAULT NULL,
  `sub_refe` varchar(500) DEFAULT NULL,
  `sub_process` varchar(1000) DEFAULT NULL,
  `sub_deptOpt` varchar(1000) DEFAULT NULL,
  `sub_deptName` varchar(20) DEFAULT NULL,
  `check_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`assBook_id`),
  KEY `fk_student_idx` (`stu_id`),
  KEY `fk_teacher_idx` (`tid`),
  KEY `FKA9F48A6153EDB563` (`stu_id`),
  KEY `FKA9F48A61A34C2893` (`tid`),
  CONSTRAINT `fk_student` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_teacher` FOREIGN KEY (`tid`) REFERENCES `t_teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_assignmentbook`
--

LOCK TABLES `t_assignmentbook` WRITE;
/*!40000 ALTER TABLE `t_assignmentbook` DISABLE KEYS */;
INSERT INTO `t_assignmentbook` VALUES (1,2015101145,2015101113,'教师拟定','实验、学习, 工程实践','   完成这个选题，一定要实现储备必要的知识基础和技能，了解完成此毕业设计所涉及的步骤和主要问题，明确相关的重点难点。\r\n （1）毕业论文题目应适合社会的发展和社会的联系，命名规范，有新意；\r\n （2）论文题目不宜过大、过难能够较好地完成毕业论文的写作任务；\r\n（3）小组成员要亲身实践，做到理论联系实际；\r\n（4）合理规划时间，注意及时完成相应的任务；\r\n（5）了解本科生论文撰写的规范和格式，并了解提交流程等； \r\n（6） 参考相应的文献，学习相关文献对本课题的研究。\r\n','论文的主要研究任务：（1）工业现场485通信硬件设计；（2）FreeMdobus库的移植； \r\n预期目标：设计并实现一个基于ADM2483芯片的硬件电路，并成功进行FreeModbus的移植操作完成指定功能。 \r\n','（1）485通信原理图的绘制；\r\n（2）485信号的抗干扰处理\r\n（3）485Modbus协议层的移植\r\n（4）485集成FreeModbus的测试\r\n','[1]王明亮.STM32F10XX参考手册英文第二版\r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社，2013-07-01\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，北京航空航天大学出版社，2003\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告,2012（06）\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006\r\n','1	熟悉资料和相关技术，提交开题报告	2016/11/01—2016/11/30\r\n2	所选课题项目的总体设计和详细设计	2016/12/01—2016/12/31\r\n3	着手工程搭建和代码编写	2017/01/01—2017/03/30\r\n4	中期检查	2017/04/01—2017/04/30\r\n5	剩余工作的完成，并初步撰写完成毕业论文	2017/05/01—2017/05/20\r\n6	修改润色，完善资料，装备毕业答辩	2017/05/21—2017/06/11','审核通过','李树金','2017 年 8 月 24 日 '),(3,2015101222,2015101113,'教师拟定','理论研究, 实验、学习','完成这个选题，一定要实现储备必要的知识基础和技能，了解完成此毕业设计所涉及的步骤和主要问题，明确相关的重点难点。\r\n   （1）毕业论文题目应适合社会的发展和社会的联系，命名规范，有新意；\r\n   （2）论文题目不宜过大、过难能够较好地完成毕业论文的写作任务；\r\n（3）小组成员要亲身实践，做到理论联系实际；\r\n（4）合理规划时间，注意及时完成相应的任务；\r\n（5）了解本科生论文撰写的规范和格式，并了解提交流程等； \r\n（6） 参考相应的文献，学习相关文献对本课题的研究。  \r\n','论文的主要研究任务：（1）工业现场485通信硬件设计；（2）FreeMdobus库的移植； \r\n预期目标：设计并实现一个基于ADM2483芯片的硬件电路，并成功进行FreeModbus的移植操作完成指定功能。\r\n','（1）485通信原理图的绘制；\r\n（2）485信号的抗干扰处理\r\n（3）485Modbus协议层的移植\r\n（4）485集成FreeModbus的测试\r\n','[1]王明亮.STM32F10XX参考手册英文第二版\r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社，2013-07-01\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，北京航空航天大学出版社，2003\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告,2012（06）\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006\r\n','1	熟悉资料和相关技术，提交开题报告	2016/11/01—2016/11/30\r\n2	所选课题项目的总体设计和详细设计	2016/12/01—2016/12/31\r\n3	着手工程搭建和代码编写	2017/01/01—2017/03/30\r\n4	中期检查	2017/04/01—2017/04/30\r\n5	剩余工作的完成，并初步撰写完成毕业论文	2017/05/01—2017/05/20\r\n6	修改润色，完善资料，装备毕业答辩	2017/05/21—2017/06/10\r\n','我觉得不错','李树金','2017 年 8 月 24 日 '),(4,2015101223,2015101113,'教师拟定','理论研究, 实验、学习','完成这个选题，一定要实现储备必要的知识基础和技能，了解完成此毕业设计所涉及的步骤和主要问题，明确相关的重点难点。\r\n   （1）毕业论文题目应适合社会的发展和社会的联系，命名规范，有新意；\r\n   （2）论文题目不宜过大、过难能够较好地完成毕业论文的写作任务；\r\n（3）小组成员要亲身实践，做到理论联系实际；\r\n（4）合理规划时间，注意及时完成相应的任务；\r\n（5）了解本科生论文撰写的规范和格式，并了解提交流程等； \r\n（6） 参考相应的文献，学习相关文献对本课题的研究。\r\n','论文的主要研究任务：（1）工业现场485通信硬件设计；（2）FreeMdobus库的移植； \r\n预期目标：设计并实现一个基于ADM2483芯片的硬件电路，并成功进行FreeModbus的移植操作完成指定功能。 \r\n','（1）485通信原理图的绘制；\r\n（2）485信号的抗干扰处理\r\n（3）485Modbus协议层的移植\r\n（4）485集成FreeModbus的测试\r\n','[1]王明亮.STM32F10XX参考手册英文第二版\r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社，2013-07-01\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，北京航空航天大学出版社，2003\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告,2012（06）\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006\r\n','1	熟悉资料和相关技术，提交开题报告	2016/11/01—2016/11/30\r\n2	所选课题项目的总体设计和详细设计	2016/12/01—2016/12/31\r\n3	着手工程搭建和代码编写	2017/01/01—2017/03/30\r\n4	中期检查	2017/04/01—2017/04/30\r\n5	剩余工作的完成，并初步撰写完成毕业论文	2017/05/01—2017/05/20\r\n6	修改润色，完善资料，装备毕业答辩	2017/05/21—2017/06/10\r\n','','','2017 年 8 月 19 日 '),(5,2015101225,2015101113,'教师拟定','理论研究, 实验、学习','完成这个选题，一定要实现储备必要的知识基础和技能，了解完成此毕业设计所涉及的步骤和主要问题，明确相关的重点难点。\r\n   （1）毕业论文题目应适合社会的发展和社会的联系，命名规范，有新意；\r\n   （2）论文题目不宜过大、过难能够较好地完成毕业论文的写作任务；\r\n（3）小组成员要亲身实践，做到理论联系实际；\r\n（4）合理规划时间，注意及时完成相应的任务；\r\n（5）了解本科生论文撰写的规范和格式，并了解提交流程等； \r\n（6） 参考相应的文献，学习相关文献对本课题的研究。 \r\n','论文的主要研究任务：（1）工业现场485通信硬件设计；（2）FreeMdobus库的移植； \r\n预期目标：设计并实现一个基于ADM2483芯片的硬件电路，并成功进行FreeModbus的移植操作完成指定功能。 \r\n','（1）485通信原理图的绘制；\r\n（2）485信号的抗干扰处理\r\n（3）485Modbus协议层的移植\r\n（4）485集成FreeModbus的测试\r\n','[1]王明亮.STM32F10XX参考手册英文第二版\r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社，2013-07-01\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，北京航空航天大学出版社，2003\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告,2012（06）\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006\r\n','1	熟悉资料和相关技术，提交开题报告	2016/11/01—2016/11/30\r\n2	所选课题项目的总体设计和详细设计	2016/12/01—2016/12/31\r\n3	着手工程搭建和代码编写	2017/01/01—2017/03/30\r\n4	中期检查	2017/04/01—2017/04/30\r\n5	剩余工作的完成，并初步撰写完成毕业论文	2017/05/01—2017/05/20\r\n6	修改润色，完善资料，装备毕业答辩	2017/05/21—2017/06/10\r\n','','','2017 年 8 月 19 日 '),(6,2015101238,2015101113,'教师拟定','实验、学习, 工程实践',' 完成这个选题，一定要实现储备必要的知识基础和技能，了解完成此毕业设计所涉及的步骤和主要问题，明确相关的重点难点。\r\n   （1）毕业论文题目应适合社会的发展和社会的联系，命名规范，有新意；\r\n   （2）论文题目不宜过大、过难能够较好地完成毕业论文的写作任务；\r\n（3）小组成员要亲身实践，做到理论联系实际；\r\n（4）合理规划时间，注意及时完成相应的任务；\r\n（5）了解本科生论文撰写的规范和格式，并了解提交流程等； \r\n（6） 参考相应的文献，学习相关文献对本课题的研究。  \r\n','论文的主要研究任务：（1）工业现场485通信硬件设计；（2）FreeMdobus库的移植； \r\n预期目标：设计并实现一个基于ADM2483芯片的硬件电路，并成功进行FreeModbus的移植操作完成指定功能。 \r\n','（1）485通信原理图的绘制；\r\n（2）485信号的抗干扰处理\r\n（3）485Modbus协议层的移植\r\n（4）485集成FreeModbus的测试\r\n','[1]王明亮.STM32F10XX参考手册英文第二版\r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社，2013-07-01\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，北京航空航天大学出版社，2003\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告,2012（06）\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006\r\n','序号	论文（设计）各阶段任务	起 止 日 期\r\n1	熟悉资料和相关技术，提交开题报告	2016/11/01—2016/11/30\r\n2	所选课题项目的总体设计和详细设计	2016/12/01—2016/12/31\r\n3	着手工程搭建和代码编写	2017/01/01—2017/03/30\r\n4	中期检查	2017/04/01—2017/04/30\r\n5	剩余工作的完成，并初步撰写完成毕业论文	2017/05/01—2017/05/20\r\n6	修改润色，完善资料，装备毕业答辩	2017/05/21—2017/06/10\r\n','','','2017 年 8 月 24 日 '),(7,2015101147,2015101113,'教师拟定','理论研究, 实验、学习','完成这个选题，一定要实现储备必要的知识基础和技能，了解完成此毕业设计所涉及的步骤和主要问题，明确相关的重点难点。\r\n   （1）毕业论文题目应适合社会的发展和社会的联系，命名规范，有新意；\r\n   （2）论文题目不宜过大、过难能够较好地完成毕业论文的写作任务；\r\n（3）小组成员要亲身实践，做到理论联系实际；\r\n（4）合理规划时间，注意及时完成相应的任务；\r\n（5）了解本科生论文撰写的规范和格式，并了解提交流程等； \r\n（6） 参考相应的文献，学习相关文献对本课题的研究。 \r\n','论文的主要研究任务：（1）工业现场485通信硬件设计；（2）FreeMdobus库的移植； \r\n预期目标：设计并实现一个基于ADM2483芯片的硬件电路，并成功进行FreeModbus的移植操作完成指定功能。 \r\n','（1）485通信原理图的绘制；\r\n（2）485信号的抗干扰处理\r\n（3）485Modbus协议层的移植\r\n（4）485集成FreeModbus的测试\r\n','[1]王明亮.STM32F10XX参考手册英文第二版\r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社，2013-07-01\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，北京航空航天大学出版社，2003\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告,2012（06）\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006\r\n','1	熟悉资料和相关技术，提交开题报告	2016/11/01—2016/11/30\r\n2	所选课题项目的总体设计和详细设计	2016/12/01—2016/12/31\r\n3	着手工程搭建和代码编写	2017/01/01—2017/03/30\r\n4	中期检查	2017/04/01—2017/04/30\r\n5	剩余工作的完成，并初步撰写完成毕业论文	2017/05/01—2017/05/20\r\n6	修改润色，完善资料，装备毕业答辩	2017/05/21—2017/06/10\r\n','这项目不错。','李树金','2017 年 8 月 25 日 ');
/*!40000 ALTER TABLE `t_assignmentbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_check`
--

DROP TABLE IF EXISTS `t_check`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_check` (
  `sub_id` int(11) DEFAULT NULL,
  `lid` int(11) DEFAULT NULL,
  `direOpt` varchar(10) DEFAULT NULL,
  `leadOpt` varchar(10) DEFAULT NULL,
  `checkDate` date DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  KEY `fk_subid_idx` (`sub_id`),
  KEY `fk_lid_idx` (`lid`),
  CONSTRAINT `fk_check_lid` FOREIGN KEY (`lid`) REFERENCES `t_leader` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_check_subid` FOREIGN KEY (`sub_id`) REFERENCES `t_subject` (`sub_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_check`
--

LOCK TABLES `t_check` WRITE;
/*!40000 ALTER TABLE `t_check` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_check` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_defensegroup`
--

DROP TABLE IF EXISTS `t_defensegroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_defensegroup` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `hid` int(11) DEFAULT NULL,
  `seid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_defensegroup`
--

LOCK TABLES `t_defensegroup` WRITE;
/*!40000 ALTER TABLE `t_defensegroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_defensegroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_dept`
--

DROP TABLE IF EXISTS `t_dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_dept` (
  `id_dept` int(11) NOT NULL AUTO_INCREMENT,
  `deptName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_dept`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_dept`
--

LOCK TABLES `t_dept` WRITE;
/*!40000 ALTER TABLE `t_dept` DISABLE KEYS */;
INSERT INTO `t_dept` VALUES (1,'计算机软件教研室'),(2,'计算机硬件教研室'),(3,'计算机网络教研室'),(4,'计算机基础教研室'),(5,'院长办公室'),(6,'实验教学中心');
/*!40000 ALTER TABLE `t_dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_interimcheck`
--

DROP TABLE IF EXISTS `t_interimcheck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_interimcheck` (
  `inCheck_id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `finish` varchar(1000) DEFAULT NULL,
  `unfinish` varchar(1000) DEFAULT NULL,
  `sub_plan` varchar(1000) DEFAULT NULL,
  `t_opt` varchar(500) DEFAULT NULL,
  `t_time` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`inCheck_id`),
  KEY `fk_inCheck_student_idx` (`sid`),
  KEY `fk_inCheck_teacher_idx` (`tid`),
  KEY `FKE1DFDFF3A34C2893` (`tid`),
  KEY `FKE1DFDFF38918DB2B` (`sid`),
  CONSTRAINT `fk_inCheck_student` FOREIGN KEY (`sid`) REFERENCES `t_student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_inCheck_teacher` FOREIGN KEY (`tid`) REFERENCES `t_teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_interimcheck`
--

LOCK TABLES `t_interimcheck` WRITE;
/*!40000 ALTER TABLE `t_interimcheck` DISABLE KEYS */;
INSERT INTO `t_interimcheck` VALUES (1,2015101222,2015101113,'1.485通信的原理图电路设计\r\n2.485通信的PCB布线\r\n','1.Freemodbus的移植\r\n2.上位机通信的协议设计\r\n','计划在5月底完成功能并进行测试，对于项目中感觉困难的部分查阅相关资料并寻求老师的帮助。','该项目进展顺利，到目前为止已经完成预定任务，剩余任务难度在于上位机通信协议的设计，需要更多的时间在通信协议的设计上。','2017 年 8 月 24 日 ','2017 年 8 月 20 日 '),(2,2015101145,2015101113,'1.485通信的原理图电路设计\r\n2.485通信的PCB布线\r\n','1.Freemodbus的移植\r\n2.上位机通信的协议设计\r\n','计划在5月底完成功能并进行测试，对于项目中感觉困难的部分查阅相关资料并寻求老师的帮助。','项目进展顺利，到目前为止已经完成预定任务，剩余任务难度在于上位机通信协议的设计，需要更多的时间在通信协议的设计上。要继续努力。','2017 年 8 月 24 日 ','2017 年 8 月 24 日 '),(3,2015101147,2015101113,'1.485通信的原理图电路设计\r\n2.485通信的PCB布线\r\n','1.Freemodbus的移植\r\n2.上位机通信的协议设计\r\n','计划在5月底完成功能并进行测试，对于项目中感觉困难的部分查阅相关资料并寻求老师的帮助。','抓紧干。','2017 年 8 月 25 日 ','2017 年 8 月 25 日 ');
/*!40000 ALTER TABLE `t_interimcheck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_leader`
--

DROP TABLE IF EXISTS `t_leader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_leader` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `id_dept` int(11) DEFAULT NULL,
  `dStuSum` int(11) DEFAULT '0',
  `dDate` varchar(45) DEFAULT NULL,
  `dPlace` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_dppt_idx` (`id_dept`),
  CONSTRAINT `fk_dppt` FOREIGN KEY (`id_dept`) REFERENCES `t_dept` (`id_dept`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_leader`
--

LOCK TABLES `t_leader` WRITE;
/*!40000 ALTER TABLE `t_leader` DISABLE KEYS */;
INSERT INTO `t_leader` VALUES (2015101001,'李伟','教研主任','18866992102','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',4,19,'2018年6月14日','实验楼B509'),(2015101002,'倪现君','教研主任','18866992102','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',3,0,NULL,NULL),(2015101003,'黄秀清','教研主任','18866992102','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',2,0,NULL,NULL),(2015101004,'陈檀','教研主任','18866992102','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',1,0,NULL,NULL),(2015101110,'李树金','院长','18660775511','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',5,0,NULL,NULL),(2015101111,'冯希叶','教研主任','18866992102','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',6,0,NULL,NULL);
/*!40000 ALTER TABLE `t_leader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_reaserchproposal`
--

DROP TABLE IF EXISTS `t_reaserchproposal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_reaserchproposal` (
  `repro_id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `sub_gogal` varchar(1500) DEFAULT NULL,
  `sub_background` varchar(1000) DEFAULT NULL,
  `sub_content` varchar(1000) DEFAULT NULL,
  `sub_plan` varchar(1000) DEFAULT NULL,
  `sub_question` varchar(1000) DEFAULT NULL,
  `sub_refe` varchar(1000) DEFAULT NULL,
  `t_opt` varchar(500) DEFAULT NULL,
  `dept_opt` varchar(500) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `t_time` varchar(45) DEFAULT NULL,
  `dept_time` varchar(45) DEFAULT NULL,
  `deadline` varchar(45) DEFAULT NULL,
  `totalSum` varchar(45) DEFAULT NULL,
  `dept_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`repro_id`),
  KEY `fk_student_idx` (`sid`),
  KEY `fk_repro_teacher_idx` (`tid`),
  KEY `FK7182FD54A34C2893` (`tid`),
  KEY `FK7182FD548918DB2B` (`sid`),
  CONSTRAINT `fk_repro_student` FOREIGN KEY (`sid`) REFERENCES `t_student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_repro_teacher` FOREIGN KEY (`tid`) REFERENCES `t_teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_reaserchproposal`
--

LOCK TABLES `t_reaserchproposal` WRITE;
/*!40000 ALTER TABLE `t_reaserchproposal` DISABLE KEYS */;
INSERT INTO `t_reaserchproposal` VALUES (6,2015101222,2015101113,'研究目的：\r\n设计一套完整的基于stm32芯片的工业控制系统，主要包括多种传感器信号的采集、放大、滤波等处理，以及对不同类型的执行部件进行驱动，以代替人工操作，提高生产效率。并适应恶劣的工业生产环境。\r\n研究意义：\r\n嵌入式的迅速发展，提高了工业自动化控制程度。工业的生产环境引入嵌入式系统，极大地提高了效率，节约了成本。stm32芯片是应用最为广泛的嵌入式控制芯片，其价格低廉，灵活性高，资源丰富，受到了开发者的欢迎。能够结合工业现场复杂的环境，合理设计工控系统，保证系统自身的稳定性、灵活性、可扩展性，能够创造巨大的经济价值。\r\n','  随着科技的发展，我国工业自动化程度越来越高，但与很多国家仍有差距。目前很多工业流水线依旧存在生产效率低，成本高等缺点。工业自动化控制前景巨大。\r\n目前的工业控制系统中，很大一部分都是采用的PLC控制，因为其抗干扰能力强、故障率低等优点， 所以应用较为广泛。但是PLC的价格相对较高。随着嵌入式系统的不断发展，很多人开始选择stm32等芯片进行工业系统的设计。\r\n','硬件方面：电路PCB板的设计与控制系统的外型设计以满足：\r\n1.多种传感器信号的采集。\r\n2.不同执行机构的驱动。\r\n3.系统的功耗，抗干扰等。\r\n软件方面：stm32下位机及PC端上位机以满足：\r\n1.较高的执行效率，精确控制，对传感器信号的处理。\r\n 2.合理的软件系统，实现数据的高效获取，丰富的呈现方式，简单快速的控制。\r\n','已完成的工作：\r\n1.	搜集关于工控系统的应用及技术资料。\r\n2.	学习stm32的片上资源，接触嵌入式实时操作系统。\r\n3.	上位机软件准备采用的平台工具。\r\n计划再做的工作：\r\n1．	结合实际的工业场景的需求，确定系统的功能。\r\n2．	进行系统的框架设计。\r\n3．	进行软件、硬件等方面的设计。\r\n4．	系统设计完成后进行系统的测试。\r\n','1.	电路板的抗干扰性能。\r\n2.	下位机与上位机的传输协议，保证信息传递的高效、稳定等。\r\n3.	传感器信号的处理（滤波、放大、拟合）。\r\n4.	执行机构的精准控制。\r\n','[1]王明亮.STM32F10XX参考手册英文第二版[EB/OL]. http://www.st.com/stonline/products/literature/rm/13902.pdf \r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社 ，2013-07-01：1-300\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010：5-28\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，邵贝贝译，第2版，北京航空航天大学出版社，2003：10-108\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2：2-14\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告（下半月）,2012（06）.\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006（01）.\r\n','你这项目太好了','我也觉得这项目可以。','2017年08月17日','2017 年 8 月 19 日 ','2017 年 8 月 20 日 ','2018/05/31','5','李树金'),(9,2015101145,2015101113,'研究目的：\r\n设计一套完整的基于stm32芯片的工业控制系统，主要包括多种传感器信号的采集、放大、滤波等处理，以及对不同类型的执行部件进行驱动，以代替人工操作，提高生产效率。并适应恶劣的工业生产环境。\r\n研究意义：\r\n嵌入式的迅速发展，提高了工业自动化控制程度。工业的生产环境引入嵌入式系统，极大地提高了效率，节约了成本。stm32芯片是应用最为广泛的嵌入式控制芯片，其价格低廉，灵活性高，资源丰富，受到了开发者的欢迎。能够结合工业现场复杂的环境，合理设计工控系统，保证系统自身的稳定性、灵活性、可扩展性，能够创造巨大的经济价值。\r\n','随着科技的发展，我国工业自动化程度越来越高，但与很多国家仍有差距。目前很多工业流水线依旧存在生产效率低，成本高等缺点。工业自动化控制前景巨大。\r\n目前的工业控制系统中，很大一部分都是采用的PLC控制，因为其抗干扰能力强、故障率低等优点， 所以应用较为广泛。但是PLC的价格相对较高。随着嵌入式系统的不断发展，很多人开始选择stm32等芯片进行工业系统的设计。\r\n','硬件方面：电路PCB板的设计与控制系统的外型设计以满足：\r\n1.多种传感器信号的采集。\r\n2.不同执行机构的驱动。\r\n3.系统的功耗，抗干扰等。\r\n软件方面：stm32下位机及PC端上位机以满足：\r\n1.较高的执行效率，精确控制，对传感器信号的处理。\r\n   2.合理的软件系统，实现数据的高效获取，丰富的呈现方式，简单快速的控制。\r\n','已完成的工作：\r\n1.	搜集关于工控系统的应用及技术资料。\r\n2.	学习stm32的片上资源，接触嵌入式实时操作系统。\r\n3.	上位机软件准备采用的平台工具。\r\n计划再做的工作：\r\n1．	结合实际的工业场景的需求，确定系统的功能。\r\n2．	进行系统的框架设计。\r\n3．	进行软件、硬件等方面的设计。\r\n4．	系统设计完成后进行系统的测试。\r\n','1.	电路板的抗干扰性能。\r\n2.	下位机与上位机的传输协议，保证信息传递的高效、稳定等。\r\n3.	传感器信号的处理（滤波、放大、拟合）。\r\n4.	执行机构的精准控制。\r\n','[1]王明亮.STM32F10XX参考手册英文第二版[EB/OL]. http://www.st.com/stonline/products/literature/rm/13902.pdf \r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社 ，2013-07-01：1-300\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010：5-28\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，邵贝贝译，第2版，北京航空航天大学出版社，2003：10-108\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2：2-14\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告（下半月）,2012（06）.\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006（01）.\r\n','该项目选题有实用价值，符合传统企业技术改造的发展趋势，有较大的市场应用空间。项目技术复杂度较高、工作量大，并且需要实际工作场所的验证。建议做好思想准备，应对项目实施过程中的各种困难和异常，投入足够的时间、精力。以期顺利完成本项目。','项目很好。','2017 年 8 月 20 日 ','2017 年 8 月 24 日 ','2017 年 8 月 25 日 ','2018/05/31','5','李树金'),(10,2015101223,2015101113,'研究目的：\r\n设计一套完整的基于stm32芯片的工业控制系统，主要包括多种传感器信号的采集、放大、滤波等处理，以及对不同类型的执行部件进行驱动，以代替人工操作，提高生产效率。并适应恶劣的工业生产环境。\r\n研究意义：\r\n嵌入式的迅速发展，提高了工业自动化控制程度。工业的生产环境引入嵌入式系统，极大地提高了效率，节约了成本。stm32芯片是应用最为广泛的嵌入式控制芯片，其价格低廉，灵活性高，资源丰富，受到了开发者的欢迎。能够结合工业现场复杂的环境，合理设计工控系统，保证系统自身的稳定性、灵活性、可扩展性，能够创造巨大的经济价值。\r\n','随着科技的发展，我国工业自动化程度越来越高，但与很多国家仍有差距。目前很多工业流水线依旧存在生产效率低，成本高等缺点。工业自动化控制前景巨大。\r\n目前的工业控制系统中，很大一部分都是采用的PLC控制，因为其抗干扰能力强、故障率低等优点， 所以应用较为广泛。但是PLC的价格相对较高。随着嵌入式系统的不断发展，很多人开始选择stm32等芯片进行工业系统的设计。\r\n','硬件方面：电路PCB板的设计与控制系统的外型设计以满足：\r\n1.多种传感器信号的采集。\r\n2.不同执行机构的驱动。\r\n3.系统的功耗，抗干扰等。\r\n软件方面：stm32下位机及PC端上位机以满足：\r\n1.较高的执行效率，精确控制，对传感器信号的处理。\r\n   2.合理的软件系统，实现数据的高效获取，丰富的呈现方式，简单快速的控制。\r\n','已完成的工作：\r\n1.	搜集关于工控系统的应用及技术资料。\r\n2.	学习stm32的片上资源，接触嵌入式实时操作系统。\r\n3.	上位机软件准备采用的平台工具。\r\n计划再做的工作：\r\n1．	结合实际的工业场景的需求，确定系统的功能。\r\n2．	进行系统的框架设计。\r\n3．	进行软件、硬件等方面的设计。\r\n4．	系统设计完成后进行系统的测试。\r\n','1.	电路板的抗干扰性能。\r\n2.	下位机与上位机的传输协议，保证信息传递的高效、稳定等。\r\n3.	传感器信号的处理（滤波、放大、拟合）。\r\n4.	执行机构的精准控制。\r\n','[1]王明亮.STM32F10XX参考手册英文第二版[EB/OL]. http://www.st.com/stonline/products/literature/rm/13902.pdf \r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社 ，2013-07-01：1-300\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010：5-28\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，邵贝贝译，第2版，北京航空航天大学出版社，2003：10-108\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2：2-14\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告（下半月）,2012（06）.\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006（01）.\r\n','','','2017 年 8 月 24 日 ',NULL,'','2018/05/31','8',''),(11,2015101147,2015101113,'研究目的：\r\n设计一套完整的基于stm32芯片的工业控制系统，主要包括多种传感器信号的采集、放大、滤波等处理，以及对不同类型的执行部件进行驱动，以代替人工操作，提高生产效率。并适应恶劣的工业生产环境。\r\n研究意义：\r\n嵌入式的迅速发展，提高了工业自动化控制程度。工业的生产环境引入嵌入式系统，极大地提高了效率，节约了成本。stm32芯片是应用最为广泛的嵌入式控制芯片，其价格低廉，灵活性高，资源丰富，受到了开发者的欢迎。能够结合工业现场复杂的环境，合理设计工控系统，保证系统自身的稳定性、灵活性、可扩展性，能够创造巨大的经济价值。','随着科技的发展，我国工业自动化程度越来越高，但与很多国家仍有差距。目前很多工业流水线依旧存在生产效率低，成本高等缺点。工业自动化控制前景巨大。\r\n目前的工业控制系统中，很大一部分都是采用的PLC控制，因为其抗干扰能力强、故障率低等优点， 所以应用较为广泛。但是PLC的价格相对较高。随着嵌入式系统的不断发展，很多人开始选择stm32等芯片进行工业系统的设计。','硬件方面：电路PCB板的设计与控制系统的外型设计以满足：\r\n1.多种传感器信号的采集。\r\n2.不同执行机构的驱动。\r\n3.系统的功耗，抗干扰等。\r\n软件方面：stm32下位机及PC端上位机以满足：\r\n1.较高的执行效率，精确控制，对传感器信号的处理。\r\n   2.合理的软件系统，实现数据的高效获取，丰富的呈现方式，简单快速的控制。','已完成的工作：\r\n1.	搜集关于工控系统的应用及技术资料。\r\n2.	学习stm32的片上资源，接触嵌入式实时操作系统。\r\n3.	上位机软件准备采用的平台工具。\r\n计划再做的工作：\r\n1．	结合实际的工业场景的需求，确定系统的功能。\r\n2．	进行系统的框架设计。\r\n3．	进行软件、硬件等方面的设计。\r\n4．	系统设计完成后进行系统的测试。\r\n','1.	电路板的抗干扰性能。\r\n2.	下位机与上位机的传输协议，保证信息传递的高效、稳定等。\r\n3.	传感器信号的处理（滤波、放大、拟合）。\r\n4.	执行机构的精准控制。','[1]王明亮.STM32F10XX参考手册英文第二版[EB/OL]. http://www.st.com/stonline/products/literature/rm/13902.pdf \r\n[2]青岛东和信息技术有限公司. Cortex-M3开发技术及实践[Ｍ].西安：西安科技大学出版社 ，2013-07-01：1-300\r\n[3]任哲.嵌入式实时操作系统μC/OS-II原理及应用(第4版) [Ｍ].北京：北京航空航天大学出版社\r\n[4]GB/T, Modbus协议规范[S].\r\n[5]陈海宴.51单片机原理及应用[M].北京航空航天大学出版社，2010：5-28\r\n[6]Jean J Labrosse，《嵌入式实时操作系统μCOS-II》，邵贝贝译，第2版，北京航空航天大学出版社，2003：10-108\r\n[7]Modbus的使用说明详解[J/OL]\r\n[8]杨欣等.电子设计从零开始[M].北京:清华大学出版社.2012.2：2-14\r\n[9]余春平.浅析电子电路设计制作常用调试方法与步骤7J].时代报告（下半月）,2012（06）.\r\n[10]虞金成.浅谈应用型电子电路渐近式的组合设计方法[J].福建教育学院学报,2006（01）.\r\n','你做的很好。','你做的很好。','2017 年 8 月 25 日 ','2017 年 8 月 25 日 ','2017 年 8 月 25 日 ','2018/05/31','7','李树金');
/*!40000 ALTER TABLE `t_reaserchproposal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_reviewaudit`
--

DROP TABLE IF EXISTS `t_reviewaudit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_reviewaudit` (
  `reau_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_opt` varchar(255) DEFAULT NULL,
  `t_time` varchar(255) DEFAULT NULL,
  `c_opt` varchar(255) DEFAULT NULL,
  `c_time` varchar(255) DEFAULT NULL,
  `cid` varchar(255) DEFAULT NULL,
  `did` varchar(255) DEFAULT NULL,
  `d_opt` varchar(255) DEFAULT NULL,
  `d_time` varchar(255) DEFAULT NULL,
  `l_opt` varchar(255) DEFAULT NULL,
  `d_name` varchar(255) DEFAULT NULL,
  `l_time` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `c_name` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `totalSum` varchar(255) DEFAULT NULL,
  `t_grade` int(11) DEFAULT NULL,
  `c_grade` int(11) DEFAULT NULL,
  `d_grade` int(11) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  PRIMARY KEY (`reau_id`),
  KEY `FK3F76CC38A34C2893` (`tid`),
  KEY `FK3F76CC388918DB2B` (`sid`),
  CONSTRAINT `FK3F76CC388918DB2B` FOREIGN KEY (`sid`) REFERENCES `t_student` (`id`),
  CONSTRAINT `FK3F76CC38A34C2893` FOREIGN KEY (`tid`) REFERENCES `t_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_reviewaudit`
--

LOCK TABLES `t_reviewaudit` WRITE;
/*!40000 ALTER TABLE `t_reviewaudit` DISABLE KEYS */;
INSERT INTO `t_reviewaudit` VALUES (1,'论文选题符合专业培养目标，能够达到综合训练目标，题目有较高难度，工作量大。选题具有较高的学术研究价值。该生查阅文献资料能力较强，写作过程中能综合运用专业知识。文章篇幅完全符合学院规定，内容完整，层次结构安排科学，主要观点突出，逻辑关系清楚，有一定的个人见解。论文论点突出，论述紧扣主题。语言表达流畅，格式完全符合规范要求。参考了丰富的文献资料，其时效性较强。本次工控通信设计达到了预期的设计目标，测试效果良好。','2017 年 8 月 26 日 ','全文结构基本合理科学，逻辑思路清晰，观点表达准确，语言流畅，论证方法较 合理，参考的文献资料符合主题要求，从主题到内容符合专业要求，部分之间衔接的比较紧密，但个别引文没有标著出来，真正属于自己创新的内容还不是很多，个别概念比较模糊，总体上达到毕业论文要求。','2017 年 8 月 26 日 ','2015101111','2015101001','该论文成绩综合评定为：     优秀   ','2017 年 8 月 26 日 ','做的不错。','李伟','2017 年 8 月 26 日 ','李树金','冯希叶','2017 年 8 月 26 日 ','7',90,88,88,2015101145,2015101113),(2,NULL,NULL,NULL,NULL,'2015101111','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101146,2015101114),(3,NULL,NULL,NULL,NULL,'2015101111','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101147,2015101113),(4,NULL,NULL,NULL,NULL,'2015101111','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101222,2015101113),(5,NULL,NULL,NULL,NULL,'2015101111','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101223,2015101113),(6,NULL,NULL,NULL,NULL,'2015101112','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101224,2015101114),(7,NULL,NULL,NULL,NULL,'2015101112','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101225,2015101113),(8,NULL,NULL,NULL,NULL,'2015101112','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101238,2015101113),(9,NULL,NULL,NULL,NULL,'2015101112','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101250,2015101113),(10,NULL,NULL,NULL,NULL,'2015101114','2015101001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2015101252,2015101113);
/*!40000 ALTER TABLE `t_reviewaudit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_student`
--

DROP TABLE IF EXISTS `t_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_student` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `gender` varchar(2) DEFAULT NULL,
  `dept` varchar(20) DEFAULT NULL,
  `major` varchar(45) DEFAULT NULL,
  `grade` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `sub_id` int(11) DEFAULT NULL,
  `stype` varchar(10) DEFAULT NULL,
  `subStatus` varchar(10) DEFAULT '未审核',
  `graRep` varchar(100) DEFAULT NULL,
  `repeatRep` varchar(100) DEFAULT NULL,
  `assBook_id` int(11) DEFAULT NULL,
  `rePro_id` int(11) DEFAULT NULL,
  `inCheck_id` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `finalGrade` varchar(10) DEFAULT 'E',
  `cid` int(11) DEFAULT NULL,
  `id_dept` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_subid_idx` (`sub_id`),
  KEY `fk_assBookId_idx` (`assBook_id`),
  KEY `FK4B907570F361E622` (`rePro_id`),
  KEY `fk_stu_inCheck_idx` (`inCheck_id`),
  KEY `fk_teacher_idx` (`tid`),
  KEY `FK4B9075706000A35F` (`assBook_id`),
  KEY `FK4B907570B5FDB378` (`inCheck_id`),
  KEY `FK4B907570CDF0F4D` (`sub_id`),
  KEY `FK4B907570A34C2893` (`tid`),
  CONSTRAINT `fk_assBookId` FOREIGN KEY (`assBook_id`) REFERENCES `t_assignmentbook` (`assBook_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_stu_inCheck` FOREIGN KEY (`inCheck_id`) REFERENCES `t_interimcheck` (`inCheck_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_stu_rePro` FOREIGN KEY (`rePro_id`) REFERENCES `t_reaserchproposal` (`repro_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_stu_teacher` FOREIGN KEY (`tid`) REFERENCES `t_teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_subid` FOREIGN KEY (`sub_id`) REFERENCES `t_subject` (`sub_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_student`
--

LOCK TABLES `t_student` WRITE;
/*!40000 ALTER TABLE `t_student` DISABLE KEYS */;
INSERT INTO `t_student` VALUES (2015101145,'秦长伯','男','信息科学与工程学院','计算机科学与技术（软件外包方向）','15级软件外包','15662683338','291118300@qq.com','3eb2d6b1adb37b19000a45c49c399f63',7,'本科','审核通过','2015101145-论文-秦长伯.doc',NULL,1,9,2,2015101113,'B',2015101111,4),(2015101146,'李萍','女','信息科学与工程学院','计算机科学与技术（软件外包方向）','15级软件外包','15550018186','973035529@qq.com','3eb2d6b1adb37b19000a45c49c399f63',38,'本科','审核通过','2015101146-论文-李萍.doc',NULL,NULL,NULL,NULL,2015101114,'E',2015101111,4),(2015101147,'陆瑶','女','信息科学与工程学院','计算机科学与技术（软件外包方向）','15级软件外包','17853148645','1136056793@qq.com','3eb2d6b1adb37b19000a45c49c399f63',11,'本科','审核通过','2015101147-论文-陆瑶.doc',NULL,7,11,3,2015101113,'B',2015101111,4),(2015101222,'魏鹏程','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','18866992102','enthusiast521@gmail.com','3eb2d6b1adb37b19000a45c49c399f63',7,'本科','审核通过','2015101222-论文-魏鹏程.doc','2015101222-齐鲁师范学院本科毕业论文（设计）任务书.doc',3,6,1,2015101113,'B',2015101111,4),(2015101223,'梁东楠','女','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','17853149084','1004822156@qq.com','3eb2d6b1adb37b19000a45c49c399f63',7,'本科','审核通过',NULL,NULL,4,10,NULL,2015101113,'E',2015101111,4),(2015101224,'张瑞','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','13336308919','zhangrui@outlook.com','3eb2d6b1adb37b19000a45c49c399f63',29,'本科','审核通过',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101112,4),(2015101225,'徐欣欣','女','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','17853148615','848841458@qq.com','3eb2d6b1adb37b19000a45c49c399f63',11,'本科','审核通过',NULL,NULL,5,NULL,NULL,2015101113,'E',2015101112,4),(2015101237,'黎相龙','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','18615401049','858199882@qq.com','3eb2d6b1adb37b19000a45c49c399f63',11,'本科','审核不通过',NULL,NULL,NULL,NULL,NULL,2015101113,'E',2015101112,0),(2015101238,'陈桂婷','女','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','18390883926','1115485601@qq.com','3eb2d6b1adb37b19000a45c49c399f63',11,'本科','审核通过',NULL,NULL,6,NULL,NULL,2015101113,'E',2015101112,4),(2015101250,'孙珂欣','女','信息科学与工程学院','计算机科学与技术（软件外包方向）','15级软件外包','15662683338','616625446@qq.com','3eb2d6b1adb37b19000a45c49c399f63',11,'本科','审核通过',NULL,NULL,NULL,NULL,NULL,2015101113,'E',2015101112,4),(2015101251,'杨美玉','女','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','18866996688','yangmeiyu@gmail.com','3eb2d6b1adb37b19000a45c49c399f63',38,'本科','审核不通过',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101113,0),(2015101252,'王辉','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15264785264','wanghui@163.com','3eb2d6b1adb37b19000a45c49c399f63',7,'本科','审核通过',NULL,NULL,NULL,NULL,NULL,2015101113,'E',2015101114,4),(2015101253,'仇广源','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15254784353','qiuguangyuan@163.com','3eb2d6b1adb37b19000a45c49c399f63',29,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101113,0),(2015101254,'吴爱迪','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','18866992102','wanghui@163.com','3eb2d6b1adb37b19000a45c49c399f63',29,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101113,0),(2015101255,'郭学伟','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15264785264','guoxuewei@163.com','3eb2d6b1adb37b19000a45c49c399f63',29,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101113,0),(2015101256,'黎相龙','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15264785264','lixiang;ong@163.com','3eb2d6b1adb37b19000a45c49c399f63',29,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101113,0),(2015101257,'冷金龙','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15264785264','lengjinlong@163.com','3eb2d6b1adb37b19000a45c49c399f63',38,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101115,0),(2015101258,'许崇津','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15264785264','xuchognjin@163.com','3eb2d6b1adb37b19000a45c49c399f63',38,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101115,0),(2015101259,'杨洪磊','男','信息科学与工程学院','计算机科学与技术（物联网方向）','15级物联网','15264785264','yanghonglei@163.com','3eb2d6b1adb37b19000a45c49c399f63',38,'本科','未审核',NULL,NULL,NULL,NULL,NULL,2015101114,'E',2015101115,0);
/*!40000 ALTER TABLE `t_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_subject`
--

DROP TABLE IF EXISTS `t_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_subject` (
  `sub_id` int(11) NOT NULL AUTO_INCREMENT,
  `subName` varchar(80) DEFAULT NULL,
  `en_name` varchar(150) DEFAULT NULL,
  `intro` varchar(1000) DEFAULT NULL COMMENT '需求，即要完成的功能',
  `tid` int(11) DEFAULT NULL,
  `tech` varchar(1000) DEFAULT NULL COMMENT '所需要的技术',
  `faceTo` varchar(45) DEFAULT NULL COMMENT '面向对象：分为专科和本科',
  `sub_type` varchar(20) DEFAULT NULL COMMENT '课程类型：工程设计还是纯理论',
  `major_direction` varchar(45) DEFAULT NULL COMMENT '专业方向：包括计算机理论与软件等',
  `direcOpt` varchar(10) DEFAULT '审核不通过',
  `leadOpt` varchar(10) DEFAULT '审核不通过',
  `status` varchar(10) DEFAULT '审核不通过',
  `stuSum` int(11) DEFAULT NULL,
  PRIMARY KEY (`sub_id`),
  KEY `fk_tid_idx` (`tid`),
  KEY `FK4C3C4861A34C2893` (`tid`),
  CONSTRAINT `fk_tid` FOREIGN KEY (`tid`) REFERENCES `t_teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_subject`
--

LOCK TABLES `t_subject` WRITE;
/*!40000 ALTER TABLE `t_subject` DISABLE KEYS */;
INSERT INTO `t_subject` VALUES (5,'基于单片机的自行车里程表的设计及实现','Design and implementation of bicycle odometer based on MCU','    本课题要求利用单片机小巧便携的特点，设计一款自行车里程表，主要研究内容如下 ：\r\n    系统总体功能：采用单片机为主要控制芯片，运用自行车车轮上的传感器进行数据采集，结合自行车本身车轮参数，经过单片机对采集信号进行分析计算，最终在液晶显示器上显示车辆行驶的里程和速度。\r\n    具体研究内容：在对系统的工作原理研究的基础上，提出系统整体设计方案；进行主控芯片及传感器等硬件选择及各部分的主要功能；系统整体软件流程及具体实现。',2015101111,'单片机应用','本科','工程设计','电子应用技术','未审核','审核通过','审核不通过',0),(6,'基于单片机的自动干手器设计及实现','Design and implementation of automatic dry hand based on MCU','本课题要求利用单片机成本低廉、小巧便携的特点，设计一款全自动干手器，主要研究内容如下 ：\r\n    系统总体功能：采用单片机为主要控制芯片，利用红外感应原理，来检测人手的进入和离开，经过单片机对采集信号处理，控制继电器的开合来控制电吹风的开关实现干手器的作用。包括冷热风的选择、工作时间设计等功能。\r\n    具体研究内容：在对系统的工作原理研究的基础上，提出系统整体设计方案；进行主控芯片及传感器等硬件选择及各部分的主要功能；系统整体软件流程及具体实现。',2015101111,'单片机应用','本科','工程设计','电子应用技术','未审核','审核通过','审核不通过',0),(7,'IPV6网络环境下社区物业系统的设计与实现','The design and implementation of community property system under IPV6 network environment','IPV6网络环境下社区物业系统包括客户端app(ios和Android不限)和服务端系统，设计主要包含以下几个方面的内容：\r\n1.首先确定设计方法，明确设计思路，依照设计要求设计收集相关素材，了解系统用户需求。\r\n2.根据需求分析，确定主要功能模块。包括前台移动端的设计，以及后台服务端的设计。\r\n3.通过数据库设计，完善系统后台管理，最后使用相应的编程语言将前台和后台联系在一起。\r\n4.最后根据设计内容对系统进行测试，检测系统是否实现已预期的功能，并对测试过程中发现的问题及时作出修改',2015101113,'网络通信技术','本科','工程设计','网络与信息系统','审核通过','审核通过','审核通过',4),(8,'网络蜘蛛机器人的设计与实现','Design and implementation of web spider robot ','研究内容主要包括：分析搜索引擎的工作原理和相关的搜索技术，实现网络蜘蛛在互联网上抓取Web页面，并对此设计了详细的Web抓取模块、页面存储模块和数据模块设计。结合现有的网络蜘蛛搜索策略并用队列设计出简单而又有效的搜索算法，这就使网络蜘蛛的实现更加容易。\r\n设计思路及开发技术：\r\n本课题按照软件工程的设计方法进行，首先查阅资料学习Java或者.net开发技术，掌握oracle数据库开发设计方法，以及Web系统的设计过程等。\r\n开发工具：Java、.net等。\r\n',2015101112,'分析搜索引擎的工作原理和相关的搜索技术','本科','工程设计','计算机软件与理论','未审核','审核通过','审核不通过',0),(9,'迁移学习算法在网络流量分类中的应用研究','Study on Application of algorithm in network traffic classification of learning transfer','现如今对于网络流量的分类的研究多采用传统机器学习的方法，但不能够很好的达到理想的分类效果。传统机器学习假设训练数据与测试数据服从相同的数据分布。然而许多情况下，这种同分布假设并不满足。通常可能发生的情况如训练数据过期，也就是好不容易标定的数据要被丢弃，而另外有一大堆新的数据要重新标定。当前只有少量新的标记的数据，但是有大量旧的已标记的数据（甚至是其他类别的有效数据），这时通过挑选这些旧数据中的有效的数据，加入到当前的训练数据中，训练新的模型。因此迁移学习在网络流量分类问题研究的目标是从其他网络数据分布场景中学到的知识，用来帮助本分布场景网络流量的分类。',2015101112,'基本的编程基础与数学基础','本科','理论研究','人工智能及其应用','未审核','审核通过','审核不通过',0),(11,'基于小波变换的数字图像水印技术研究及软件实现','Research and software implementation of digital image watermarking technology based on Wavelet Transform','数字水印是一种全新的信息安全技术，它通过将不可见信息嵌入到数字化媒体中，然后通过对它的检测来对图像的使用情况进行跟踪，从而实现信息隐藏、存储等功能。                   \r\n    本课题要求以静止数字图像为研究对象，在对国内外数字水印技术研究现状分析的基础上，对以小波变换为基础的数字图像水印技术进行研究，采用其中一种数字图像水印技术进行实现，或者提出一种新的数字图像水印技术并实现之。',2015101113,'数字水印','本科','工程设计','网络与信息系统','审核通过','审核通过','审核通过',4),(12,'基于MATLAB的图像特效处理算法研究及实现','Research and implementation of image special effects processing algorithm based on MATLAB','    图像是人们获取和交换信息的重要途径。图像特效显示变化灵活多样，如图像的平移、缩放、旋转、模糊、浮雕效果等，可广泛应用于数码、广告、影视、多媒体等大部分与图像显示相关的领域。因此，本课题的研究会具有一定的应用价值。\r\n数字图像处理是信号处理的一个重要分支，本课题要求学生首先学习数字图像处理基础知识，能够利用MATLAB的GUI实现数字图像在的读取、显示、保存等基本操作。\r\n    在此基础上，对数字图像各种图像特效显示算法进行研究，包括：图像的移动、图像的缩放、图像缩放、图像的旋转、图像浮雕处理等各种图像显示特效。并利用MATLAB编程软件进行实现，要求能够利用GUI 实现界面设计，显示各种算法的运行结果。\r\n',2015101113,'数字图像处理','本科','工程设计','信号与信息处理','审核通过','审核通过','审核通过',0),(13,'基于小波变换的图像融合技术研究','Research on image fusion technology based on Wavelet Transform','本课题的主要研究内容是基于小波变换的图像融合算法，涉及的内容包括图像融合的概念、图像融合的层次、图像融合的目的、图像融合的小波分解、图像融合的准则以及图像融合的评价标准等。具体有：\r\n（1）、研究小波变换的基本原理；\r\n（2）、学习MATLAB语言开发环境，运用MATLAB进行相关图像处理。\r\n（3）、研究使用小波变换进行图像融合的方法，给出客观评价指标；\r\n（4）、结合MATLAB仿真实验，分析小波基、小波分解层数对小波图像融合效果的影响。',2015101113,'图像融合','本科','理论研究','信号与信息处理','审核通过','审核通过','审核通过',0),(14,'视频监控场景下人群密度估计方法研究','Research on crowd density estimation method in video surveillance scene','1.利用常见的监控相机，进行监控场景下人群密度数据的采集；\r\n2.研究基于像素统计的人群密度估计方法，并利用MATLAB或者C++对其进行仿真，分析基于像素统计的人群密度估计方法在常见应用场景中的缺陷；\r\n3.研究基于纹理特征分析的人群密度估计方法，并对该算法进行改进，通过设定阈值把人群图像划分为低密度人群和中高密度人群；\r\n4.利用人群密度估计结果搭建人群密度预警系统，利用采集的数据对人群密度预警系统进行验证。',2015101113,'图形图像基本处理方法','本科','理论研究','信号与信息处理','审核通过','审核通过','审核通过',0),(15,'基于遗传算法的种群进化的可视化问题研究','Research on visualization of population evolution based on genetic algorithm','研究内容：调研相关的遗传算法的研究资料及其相关的应用，进而研究图像图形技术，从而能够实现遗传算法的动态演示，实现遗传算法的可视化研究。本课题研究的内容主要是，针对特定的基因块，积木块进行统计，在每一代给出每一个需要统计的类型具体的统计值，并且随着进化的过程实时的展示，从而能够动态的看出在整个进化过程中的变化情况，动态的展示信息可以使在线也可以是离线的信息展示，主要是能够展示统计数据随迭代过程的变化。编程语言不限。',2015101113,'图像图形技术','本科','理论研究','信号与信息处理','审核通过','审核通过','审核通过',0),(16,'基于子带结构的宽带波束形成技术的研究与仿真','Research and Simulation of wideband beamforming based on Subband Structure','波束形成技术，是各个阵元信号进行加权求和，形成一定的波束以通过有用信号或需要方向的信号，并抑制不需要方向的干扰，实现“空域滤波”，极大地提高了系统容量和通信质量。子带自适应滤波器利用多速率信号处理技术可大大降低运算复杂度，所以本设计研究基于子带结构的自适应波束形成技术，并实现仿真。\r\n学习自适应信号处理知识，了解常用算法，掌握子带结构自适应滤波器原理、自适应波束形成基本原理；                                             　　　　　\r\n深入研究子带结构的自适应波束形成工作原理；　　　　　　　　\r\n通过MATLAB软件，实现该算法的仿真；　　     　　　　　　　　　　　　　　　　\r\n并通过仿真结果分析和改进该算法的性能；\r\n    ',2015101113,'波束形成技术','本科','理论研究','信号与信息处理','审核通过','审核通过','审核通过',0),(17,'基于HDFS的云盘系统的设计与实现','Design and implementation of cloud disk system based on HDFS','（1）掌握HDFS工作基本原理。\r\n内部机制是将一个文件分割成一个或多个块，这些块被存储在一组数据节点中。名字节点用来操作文件命名空间的文件或目录操作，如打开，关闭，重命名等等。它同时确定块与数据节点的映射。数据节点负责来自文件系统客户的读写请求。数据节点同时还要执行块的创建，删除，和来自名字节点的块复制指令。\r\n（2）部署Hadoop HDFS分布式文件系统，要求一个namenode，两个datanode。\r\n（3）实现上传文件到HDFS。',2015101112,'HDFS技术','本科','工程设计','计算机软件与理论','未审核','审核通过','审核不通过',0),(18,'基于Android智能手机的的流媒体客户端软件的设计与实现','Design and implementation of streaming media client software based on Android smart phone','1、研究Android系统的系统架构、开发模式及重要组件的生命周期。2、研究与移动流媒体客户端相关的标准与协议，包括实时流媒体传输协议 RTSP/RTCP协议、RTP协议，以及MPEG音频标准、MPEG4视频标准等。3、完成需求分析、总体设计。4、设计并实现网络通信模块，包括了RTSP包的发送控制、RTCP包的发送和RTP包的接收。5、基于Android平台中多媒体框架的核心库，实现客户端系统音频/视频的解码。6、实现移动流媒体客户端系统，并对其做相关性能测试，达到预期的效果。',2015101112,'安卓开发','本科','工程设计','计算机软件与理论','未审核','未审核','审核不通过',0),(19,'基于计算机软件逆向技术的几类流行木马恶意行为分析','Malicious behavior analysis of several popular Trojan horses based on computer software reverse technology','第一项研究内容：由于目前网络上流行的木马病毒种类繁多，且一类恶意软件的变种类型多种多样；所以第一个研究内容就是根据网上流行的恶意软件样本，了解其大体功能并进行分类总结。\r\n第二项研究内容：木马病毒的传播性、欺骗性决定了其是否能够实现恶意行为；所以，根据不同类型的木马病毒，总结、分析其传播途径与伪装方式，这将为反木马病毒工作中提供宝贵的数据资料。\r\n第三个研究内容：通过软件逆向分析技术，针对网络上流行的主要类型的木马病毒样本，分析其深层次的恶意行为，并掌握其全部行为的具体代码实现；从而能够对不同类型的木马病毒制定有针对性的预防与杀毒措施。',2015101112,'病毒查杀','本科','理论研究','计算机软件与理论','未审核','未审核','审核不通过',0),(20,'基于555定时器的温度测试仪的设计与实现','Design and implementation of temperature measuring instrument based on 555 timer','系统主要采用了 555 定时器构成的 RC 振荡电路和单片机技术。设计思路:被测热敏电阻R与555定时器接成多谐振荡器。 通过多谐振荡转换成频率信号,送入单片机测频,对该频率进行运算处理求出被测电阻的值,并查表得到对应温度值，并送显示器显示。其主要由测量电路和控制电路两部分组成。\r\n   具体过程如下：当接入电阻后,由 555 定时器构成 RC 振荡器产生方波信号,把此信号通过接口传到 AT89C51 单片机 I/O 口上,对此方波信号进行测频,通过软件编程,计算出得到被测电阻值,查表得到对应温度值，由 LCD1602 液晶显示。',2015101111,'单片机开发及使用','本科','工程设计','电子应用技术','未审核','未审核','审核不通过',0),(21,'基于单片机的车辆收费系统的设计与实现','Design and implementation of vehicle charging system based on single chip microcomputer','本车辆收费系统以单片机为控制器，结合无线射频技术设计一款不停车收费系统。首先要了解无线射频技术，它具有有非接触、阅读速度快、阅读信息量大、可读可写、识别率极高、不受环境的影响、便于调试和安装、保密性强、无磨损、寿命长、能同时识别多个目标等特点和优势。因此将RFID应用于车辆的自动收费系统是十分理想的。然后结合无线射频技术的特点，完成停车收费系统的设计方案。最后实现相应的硬件电路设计和软件程序开发。',2015101111,'单片机开发及使用','本科','工程设计','电子应用技术','未审核','审核通过','审核不通过',0),(22,'基于VerilogHDL的数字密码锁的设计与实现','Design and implementation of digital cipher lock based on VerilogHDL','通过EDA技术对数字密码锁进行FPGA编程，并对其进行仿真验证。设计一种基于VerilogHDL的数字式电子密码锁的原理和方法，将数字密码锁分为以下11个模块：使能电路模块、分频模块、键盘消抖模块、编码模块、密码预设存储模块、比较模块、计数器选择模块、数码管扫描模块、显示译码模块、指示灯报警模块和控制器模块。利用仿真工具QuartersII对每个模块进行仿真，验证此密码锁是否能实现密码设置、密码输入、密码验证、密码清除和指示报警等功能。',2015101111,'单片机开发及使用','本科','工程设计','电子应用技术','未审核','未审核','审核不通过',0),(29,'带有P-top层LDMOS器件的击穿电压和导通电阻研究','Study on breakdown voltage and on resistance of LDMOS devices with Ptop layer','该课题主要研究P-top层对N型LDMOS器件击穿电压和导通电阻的影响。在学生熟悉半导体的击穿电压和电流能力相关基础知识之后，利用Sentaurus设计软件，研究对比加入P-top层之后LDMOS器件的击穿电压和电流能力变化。并进一步研究P-top层的横向位置、掺杂浓度和P-top层的数量对器件的击穿电压和电流能力的影响。最终，设计一个击穿电压大于200V的带有P-top层LDMOS器件，并给出P-top层LDMOS器件设计的指导原则。',2015101114,'数字电路，模拟电路','本科','理论研究','电子应用技术','审核通过','审核通过','审核通过',4),(31,'基于红外传感器的人体检测模块的设计','Design of human detection module based on infrared sensor','理解检测传感器的原理、应用技术和检测电路的实现方法，明确应采用的主要技术手段，给出实现功能需要的基本结构单元。利用红外热释电传感器件，完成低功耗人体接近检测、移动侦测等功能的模块。主要完成信号预处理、滤波降噪、检测等处理电路的设计，具备当有人接近，或附近有人体移动时能够输出触发信号等功能，并且功耗较低，可长时间待机连续监测。使用仿真工具检验设计的可行性，并实现主要设计功能的验证。分析能够进一步采用的抗干扰措施，提高监测的灵敏度和准确率。',2015101114,'传感器的原理、应用技术和检测电路的实现方法','本科','工程设计','电子应用技术','审核通过','未审核','审核不通过',0),(36,'机器学习在中药材图象识别系统中的应用','Application of machine learning in image recognition system of Chinese medicinal herbs','1、    卷积神经网络的理解与掌握，由于需要赋予计算机以图象自动理解的能力，因此对卷积神经网络的理解与掌握是本课题进行的基础和保障。\r\n2、    深度学习方法的理解与掌握，对神经网络的设计过程是通过模拟自然界中的学习过程来实现的，使用学习算法来优化人工神经网络是本课题的核心。\r\n3、    手机平台下的图形化应用程序设计能力的熟练。以图形用户界面为开发环境，透过可视化设计工具与编译器，配合电脑智能，设计手机环境下的识别软件。 \r\n4、    研究利用安卓平台，实现基于卷积神经网络的中药材识别系统。\r\n5、    系统的编码与实现。\r\n6、    测试与改进。\r\n',2015101114,'卷积神经网络技术','本科','工程设计','人工智能及其应用','审核不通过','审核通过','审核不通过',0),(37,'基于Socket的分布式软件程序构架的研究与实现','Research and implementation of distributed software program framework based on Socket','本课题研究的内容是Socket为核心，设计的语言是C++。整个分布式计算框架主要分成两个部分，服务器程序，客户端程序。服务器其程序主要是用于数据的分发和数据的回收操作，特别是回收的数据需要进一步总和，框架中的客户端主要是用来接收服务器端分发的数据，并完成相关的运算，并将数据发还给服务器端。最后能够在次构架下面实现矩阵的加法和乘法连个运算。这个矩阵的加法和乘法，需要特别的设计，才能够使用当前分布式的计算构架',2015101113,'Socket为核心，设计的语言是C++','本科','工程设计','网络与信息系统','审核通过','审核通过','审核通过',0),(38,'基于单片机的超声波测距系统的设计与实现','Design and implementation of ultrasonic ranging system based on MCU','1.单片机上电复位电路、手动复位电路（复位按键）、晶振电路（给单片机提供时钟周期）。\r\n   2.LCD1602液晶显示超声波测到的距离，液晶第一行显示实时测到的距离，第二行显示设置的报警距离。\r\n   3.当超声波测出的距离小于设定的距离时就会使得蜂鸣器报警。\r\n   4.可设置 报警距离，按下设置键后 就可以再按 加减键 就可以修改报警距离并具有 掉电保存 功能。\r\n   5.设置三个按键减键、加键、设置键。单独一按键为复位按键。 \r\n   6.HC-SR04超声波传感器模块测距，测量范围：2cm--5m。',2015101114,'单片机技术','本科','工程设计','电子应用技术','审核通过','审核通过','审核通过',4);
/*!40000 ALTER TABLE `t_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_teacher`
--

DROP TABLE IF EXISTS `t_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `id_dept` int(11) DEFAULT NULL,
  `place` varchar(10) DEFAULT NULL,
  `stuTotal` int(11) DEFAULT '0',
  `cStuSum` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_dept_idx` (`id_dept`),
  CONSTRAINT `fk_dept` FOREIGN KEY (`id_dept`) REFERENCES `t_dept` (`id_dept`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_teacher`
--

LOCK TABLES `t_teacher` WRITE;
/*!40000 ALTER TABLE `t_teacher` DISABLE KEYS */;
INSERT INTO `t_teacher` VALUES (2015101111,'冯希叶','副教授','13020017575','36643412@qq.com','3eb2d6b1adb37b19000a45c49c399f63',6,'校内',0,5),(2015101112,'朱海林','讲师','13176699815','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',1,'校内',0,5),(2015101113,'闫乐林','教授','13176699815','75353041@qq.com','3eb2d6b1adb37b19000a45c49c399f63',3,'校内',8,5),(2015101114,'韩业红','教授','13569453876','7755655@qq.com','3eb2d6b1adb37b19000a45c49c399f63',3,'校内',2,1),(2015101115,'黄秀清','教授','15662683338','huangxiuqing@163.com','3eb2d6b1adb37b19000a45c49c399f63',6,'校内',0,3);
/*!40000 ALTER TABLE `t_teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-27 19:56:34
