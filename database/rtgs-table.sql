/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : rtgs

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2016-04-27 21:34:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `rtgs-table`
-- ----------------------------
DROP TABLE IF EXISTS `rtgs-table`;
CREATE TABLE `rtgs-table` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `MessageID` int(255) DEFAULT NULL,
  `UpTime` int(255) DEFAULT NULL,
  `ClockTime` varchar(255) DEFAULT NULL,
  `Temperature` varchar(255) DEFAULT NULL,
  `Battery` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `Protocol` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of rtgs-table
-- ----------------------------
