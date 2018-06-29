/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:19:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_addres
-- ----------------------------
DROP TABLE IF EXISTS `t_addres`;
CREATE TABLE `t_addres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(50) NOT NULL,
  `city` varchar(255) CHARACTER SET utf8 NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `province` varchar(255) CHARACTER SET utf8 NOT NULL,
  `region` varchar(255) CHARACTER SET utf8 NOT NULL,
  `setadd` varchar(255) CHARACTER SET utf8 NOT NULL,
  `editAddress` varchar(255) CHARACTER SET utf8 NOT NULL,
  `selectAddress` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `delete` varchar(255) CHARACTER SET utf8 NOT NULL,
  `farg` varchar(255) NOT NULL DEFAULT '1006',
  `num` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of t_addres
-- ----------------------------
