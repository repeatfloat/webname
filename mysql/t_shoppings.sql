/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:20:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_shoppings
-- ----------------------------
DROP TABLE IF EXISTS `t_shoppings`;
CREATE TABLE `t_shoppings` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `farg` varchar(255) NOT NULL,
  `numprice` decimal(50,0) NOT NULL,
  PRIMARY KEY (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_shoppings
-- ----------------------------
INSERT INTO `t_shoppings` VALUES ('17', '普罗旺斯真实薰衣草精油', '138.00', 'http://127.0.0.1:5000/images/shoppingCart-1.png', '广州', '44353', 'QF00321', '1005', '1');
INSERT INTO `t_shoppings` VALUES ('18', '汇美舍普罗旺斯薰衣草护肤', '169.00', 'http://127.0.0.1:5000/images/shoppingCart-2.png', '广州', '5265', 'QF00322', '1005', '1');
