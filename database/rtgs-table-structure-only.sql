/*
Navicat MySQL Data Transfer

Source Server         : This-PC(localhost)
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : rtgs-db

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2016-06-18 12:13:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for rtgs-tbl
-- ----------------------------
DROP TABLE IF EXISTS `rtgs-tbl`;
CREATE TABLE `rtgs-tbl` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `MessageID` varchar(255) DEFAULT NULL,
  `UpTime` varchar(255) DEFAULT NULL,
  `ClockTime` varchar(255) DEFAULT NULL,
  `Temperature` varchar(255) DEFAULT NULL,
  `Battery` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `Protocol` varchar(255) DEFAULT NULL,
  `RTT` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=759 DEFAULT CHARSET=latin1;
