/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:20:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_mycollection
-- ----------------------------
DROP TABLE IF EXISTS `t_mycollection`;
CREATE TABLE `t_mycollection` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `numprice` decimal(50,0) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `sales` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `farg` varchar(255) NOT NULL DEFAULT '1007',
  PRIMARY KEY (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of t_mycollection
-- ----------------------------
