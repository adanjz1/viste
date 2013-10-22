-- phpMyAdmin SQL Dump
-- version 2.10.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Jun 27, 2010 at 12:33 PM
-- Server version: 5.0.45
-- PHP Version: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `jqueryimageupload`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `match_item`
-- 

CREATE TABLE `match_item` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `match_item`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `match_item_image`
-- 

CREATE TABLE `match_item_image` (
  `id` int(11) NOT NULL auto_increment,
  `item_id` bigint(11) default NULL,
  `image` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `match_item_image`
-- 

