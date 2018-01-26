/*
Navicat MySQL Data Transfer

Source Server         : dismsql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-22 10:51:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `loginStatus` int(255) NOT NULL DEFAULT '0',
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `pwd` varchar(32) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `oldpwd` varchar(32) DEFAULT NULL,
  `registerTime` datetime NOT NULL,
  `agreement` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `identity` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', '1', '96e79218965eb72c92a549dd5a330112', '15876441382', null, '2018-01-22 10:43:43', '100', null, null, null, null);
