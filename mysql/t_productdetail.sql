/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : 127.0.0.1:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-28 20:20:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_productdetail
-- ----------------------------
DROP TABLE IF EXISTS `t_productdetail`;
CREATE TABLE `t_productdetail` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `code` varchar(50) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `describe` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `oldprice` decimal(10,2) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `sales` varchar(255) NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `farg` varchar(255) NOT NULL,
  `numprice` decimal(50,0) NOT NULL DEFAULT '1',
  PRIMARY KEY (`did`),
  KEY `pid` (`pid`),
  KEY `sales` (`sales`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_productdetail
-- ----------------------------
INSERT INTO `t_productdetail` VALUES ('1', '1', '普罗旺斯醒目薰衣草精油', '138.00', 'QF00301', 'http://127.0.0.1:5000/images/index-12.png', '平衡舒缓 ', '188.00', '0', '2250', '东莞', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('2', '2', '保加利亚大马士革玫瑰精油', '298.00', 'QF00302', 'http://127.0.0.1:5000/images/index-13.png', '弹润白皙  水润雪肌', '388.00', '0', '1790', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('3', '3', '汇美舍玫瑰水润纯露', '59.00', 'QF00303', 'http://127.0.0.1:5000/images/index-14.png', '保湿滋润  提亮肤色', '128.00', '0', '2035', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('4', '4', '汇美舍玫瑰檀香丝柔润滑眼霜', '169.00', 'QF00304', 'http://127.0.0.1:5000/images/index-15.png', '滋润眼周  减淡眼纹', '226.00', '0', '986', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('5', '5', '水润面膜3片+水润眼膜1盒', '199.00', 'QF00309', 'http://127.0.0.1:5000/images/index-8.png', '菁华乳/17g+', '218.00', '0', '5135', '深圳', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('6', '6', '保加利亚玫瑰体验礼盒', '298.00', 'QF00310', 'http://127.0.0.1:5000/images/index-9.png', '水润雪肌', '338.00', '0', '2154', '深圳', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('7', '7', '玫瑰乳木果莹润沐浴露490g', '598.00', 'QF00311', 'http://127.0.0.1:5000/images/index-10.png', '平滑淡纹', '599.00', '0', '5168', '深圳', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('8', '8', '水润清颜面膜贴/10片', '69.00', 'QF00312', 'http://127.0.0.1:5000/images/index-11.png', '花萃补水  温和滋润', '99.00', '0', '14515', '深圳', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('9', '9', '玫瑰檀香丝柔润滑套装/3件', '325.00', 'QF00313', 'http://127.0.0.1:5000/images/index-16.png', '弹润紧致  平滑淡纹', '325.00', '0', '15561', '北京', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('10', '10', '玫瑰水润护肤礼盒/3件', '159.00', 'QF00314', 'http://127.0.0.1:5000/images/index-16.png', '深层补水  提亮肤色', '200.00', '0', '23161', '上海', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('11', '11', '汇美舍保加利亚玫瑰补水', '915.00', 'QF00315', 'http://127.0.0.1:5000/images/shoppingCart-6.png', '套装补水护肤品套装', '1088.00', '0', '5654', '淘宝', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('12', '12', '汇美舍玫瑰檀香丝柔润滑', '434.00', 'QF00316', 'http://127.0.0.1:5000/images/shoppingCart-7.png', '套装保湿补水平滑提亮套装 ', '488.00', '0', '5115', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('13', '13', '汇美舍精油玫瑰丰润提升精油', '390.00', 'QF00317', 'http://127.0.0.1:5000/images/shoppingCart-8.png', '50ml紧致提升弹性弹润胸部', '399.00', '0', '1561', '东莞', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('14', '14', '汇美舍保加利亚大马士革玫瑰精油5ML单方', '498.00', 'QF00318', 'http://127.0.0.1:5000/images/shoppingCart-9.png', '精油香薰滋养', '499.00', '0', '51156', '上海', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('15', '15', '汇美舍茉莉玫瑰籽水漾', '102.00', 'QF00319', 'http://127.0.0.1:5000/images/shoppingCart-10.png', '舒缓爽肤液150ml爽肤水舒缓', '188.00', '0', '1151', '上海', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('16', '16', '汇美舍普罗旺斯薰衣草菁华液160ml', '110.00', 'QF00320', 'http://127.0.0.1:5000/images/shoppingCart-11.png', '补水保湿滋润控油爽', '188.00', '0', '1451', '上海', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('17', '17', '普罗旺斯真实薰衣草精油', '138.00', 'QF00321', 'http://127.0.0.1:5000/images/shoppingCart-1.png', '单方精油 	精油护肤', '158.00', '0', '44353', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('18', '18', '汇美舍普罗旺斯薰衣草护肤', '169.00', 'QF00322', 'http://127.0.0.1:5000/images/shoppingCart-2.png', '礼盒套装补水舒缓肌肤', '188.00', '0', '5265', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('19', '19', '汇美舍单方精油普罗旺斯真实薰衣草精油10ml', '294.00', 'QF00323', 'http://127.0.0.1:5000/images/shoppingCart-3.png', '舒缓修护淡化痘印', '298.00', '0', '5145', '上海', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('20', '20', '汇美舍普罗旺斯薰衣草菁华凝露90g', '158.00', 'QF00324', 'http://127.0.0.1:5000/images/shoppingCart-4.png', '清爽补水保湿细致毛孔精华露', '188.00', '0', '5162', '汕头', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('21', '21', '汇美舍面霜普罗旺斯薰衣草菁华面霜50g', '198.00', 'QF00325', 'http://127.0.0.1:5000/images/shoppingCart-5.png', '滋润保湿淡化细纹细致毛孔', '288.00', '0', '1511', '广州', '1005', '1');
INSERT INTO `t_productdetail` VALUES ('22', '22', '补水保湿', '58.00', 'QF00326', 'http://127.0.0.1:5000/images/classification-1.png', '舒缓修复', '88.00', '0', '1551', '广州', '1006', '1');
INSERT INTO `t_productdetail` VALUES ('23', '23', '提亮肤色', '68.00', 'QF00327', 'http://127.0.0.1:5000/images/classification-2.png', '深层补水  提亮肤色', '88.00', '0', '1562', '郑州', '1006', '1');
INSERT INTO `t_productdetail` VALUES ('24', '24', '紧致淡纹', '69.00', 'QF00328', 'http://127.0.0.1:5000/images/classification-3.png', '保湿滋润  提亮肤色', '98.00', '0', '1256', '中州', '1006', '1');
INSERT INTO `t_productdetail` VALUES ('25', '25', '祛痘淡印', '59.00', 'QF00329', 'http://127.0.0.1:5000/images/classification-4.png', '花萃补水  温和滋润', '68.00', '0', '1245', '贵州', '1007', '1');
INSERT INTO `t_productdetail` VALUES ('26', '26', '舒缓修复', '68.00', 'QF00330', 'http://127.0.0.1:5000/images/classification-5.png', '滋润眼周  减淡眼纹', '88.00', '0', '1352', '济南', '1007', '1');
INSERT INTO `t_productdetail` VALUES ('27', '27', '舒缓修复', '68.00', 'QF00331', 'http://127.0.0.1:5000/images/classification-5.png', '滋润眼周  减淡眼纹', '88.00', '0', '1352', '济南', '1007', '1');
INSERT INTO `t_productdetail` VALUES ('28', '28', '洁面', '58.00', 'QF00332', 'http://127.0.0.1:5000/images/skincaresteps-1.png', '精油香薰滋养', '68.00', '0', '1252', '贵州', '1008', '1');
INSERT INTO `t_productdetail` VALUES ('29', '29', '花露', '60.00', 'QF00333', 'http://127.0.0.1:5000/images/skincaresteps-2.png', '弹润紧致  平滑淡纹', '68.00', '0', '1523', '济南', '1008', '1');
INSERT INTO `t_productdetail` VALUES ('30', '30', '精华', '78.00', 'QF00334', 'http://127.0.0.1:5000/images/skincaresteps-3.png', '精油香薰滋养', '108.00', '0', '1522', '济南', '1008', '1');
INSERT INTO `t_productdetail` VALUES ('31', '31', '乳液', '88.00', 'QF00335', 'http://127.0.0.1:5000/images/skincaresteps-6.png', '舒缓修护淡化痘印', '98.00', '0', '1653', '上海', '1009', '1');
INSERT INTO `t_productdetail` VALUES ('32', '32', '眼霜', '38.00', 'QF00336', 'http://127.0.0.1:5000/images/skincaresteps-5.png', '清爽补水保湿细致毛孔精华露', '48.00', '0', '1254', '广州', '1009', '1');
INSERT INTO `t_productdetail` VALUES ('33', '33', '身体护理', '58.00', 'QF00337', 'http://127.0.0.1:5000/images/skincaresteps-4.png', '舒缓修复', '68.00', '0', '1352', '上海', '1009', '1');
INSERT INTO `t_productdetail` VALUES ('34', '34', '手部护理', '28.00', 'QF00338', 'http://127.0.0.1:5000/images/skincaresteps-7.png', '舒缓爽肤液150ml爽肤水舒缓', '30.00', '0', '462', '镇江', '1010', '1');
INSERT INTO `t_productdetail` VALUES ('35', '35', '面霜', '48.00', 'QF00339', 'http://127.0.0.1:5000/images/skincaresteps-8.png', '礼盒套装补水舒缓肌肤', '50.00', '0', '5156', '上海', '1010', '1');
INSERT INTO `t_productdetail` VALUES ('36', '36', '面膜', '50.00', 'QF00340', 'http://127.0.0.1:5000/images/skincaresteps-9.png', '补水保湿滋润控油爽', '50.00', '0', '1565', '广州', '1010', '1');
