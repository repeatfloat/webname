/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:20:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_mycollection2
-- ----------------------------
DROP TABLE IF EXISTS `t_mycollection2`;
CREATE TABLE `t_mycollection2` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `pfag` varchar(50) DEFAULT '1008',
  `numprice` decimal(50,0) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `pid` (`pid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of t_mycollection2
-- ----------------------------
