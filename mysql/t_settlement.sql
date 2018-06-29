/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:20:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_settlement
-- ----------------------------
DROP TABLE IF EXISTS `t_settlement`;
CREATE TABLE `t_settlement` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `sales` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `addres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `farg` varchar(50) DEFAULT NULL,
  `numprice` decimal(50,0) NOT NULL,
  `check` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of t_settlement
-- ----------------------------
INSERT INTO `t_settlement` VALUES ('5', '水润面膜3片+水润眼膜1盒', '199.00', 'http://127.0.0.1:5000/images/index-8.png', '5135', '深圳', 'QF00309', '1005', '1', null);
