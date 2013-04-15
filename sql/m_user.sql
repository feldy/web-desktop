-- phpMyAdmin SQL Dump
-- version 4.0.0-beta1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 26, 2013 at 10:28 AM
-- Server version: 5.5.29-0ubuntu0.12.04.2
-- PHP Version: 5.3.10-1ubuntu3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dbs_web_desktop`
--

-- --------------------------------------------------------

--
-- Table structure for table `m_user`
--

CREATE TABLE IF NOT EXISTS `m_user` (
  `uuid` varchar(36) NOT NULL,
  `username` varchar(36) NOT NULL,
  `password` varchar(36) NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table structure for table `m_form`
--

CREATE TABLE IF NOT EXISTS `m_form` (
  `uuid` varchar(36) NOT NULL,
  `id_form` varchar(50) NOT NULL,
  `title_form` varchar(50) NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `id_form` (`id_form`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table structure for table `m_user_role`
--

CREATE TABLE IF NOT EXISTS `m_user_role` (
  `uuid` varchar(36) NOT NULL,
  `uuid_user` varchar(50) NOT NULL,
  `uuid_form` varchar(50) NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  CONSTRAINT `m_user_role_fk1` FOREIGN KEY (`uuid_user`) REFERENCES `m_user` (`uuid`)  
  	ON DELETE CASCADE 
  	ON UPDATE CASCADE,
  CONSTRAINT `m_user_role_fk2` FOREIGN KEY (`uuid_form`) REFERENCES `m_form` (`uuid`) 
  	ON DELETE CASCADE 
  	ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
