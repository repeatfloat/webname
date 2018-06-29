/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:20:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_compiler
-- ----------------------------
DROP TABLE IF EXISTS `t_compiler`;
CREATE TABLE `t_compiler` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `farg` varchar(255) NOT NULL,
  `numprice` decimal(50,0) NOT NULL,
  `check` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of t_compiler
-- ----------------------------
INSERT INTO `t_compiler` VALUES ('5', '水润面膜3片+水润眼膜1盒', '199.00', 'http://127.0.0.1:5000/images/index-8.png', '深圳', '5135', 'QF00309', '1005', '1', null);
