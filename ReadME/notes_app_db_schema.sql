-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2021 at 07:54 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes_app_db`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addNote` (IN `title` VARCHAR(255), IN `description` VARCHAR(255), IN `archive_status` INT)  BEGIN
  INSERT INTO notes(title,description,archive_status) VALUES (title, description, archive_status);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `archiveNote` (IN `idIN` INT)  BEGIN
  UPDATE notes SET archive_status=1 WHERE id=idIN;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteNote` (IN `idIN` INT)  BEGIN
  DELETE FROM notes WHERE id=idIN;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllArchivedNotes` ()  BEGIN
  SELECT * from notes 
  where archive_status=1 ;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllUnArchivedNotes` ()  BEGIN
  SELECT * from notes 
  where archive_status=0 ;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `selectAllNotes` ()  BEGIN
  SELECT * from notes;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `unArchiveNote` (IN `idIN` INT)  BEGIN
 UPDATE notes SET archive_status=0 WHERE id=idIN;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateNote` (IN `idIN` INT, IN `titleIN` VARCHAR(255), IN `descriptionIN` VARCHAR(255), IN `archive_statusIn` INT)  BEGIN
  UPDATE notes SET title = titleIN, description = descriptionIN,archive_status=archive_statusIN  WHERE id=idIN;
 END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `archive_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `description`, `archive_status`) VALUES
(26, 'abc', 'abc description', 0),
(27, 'xyz', 'xyz description', 0),
(28, 'lmn', 'lmn description', 0),
(29, 'task t1', 'task t1 description', 0),
(30, 'task t2', 'task t2 description', 0),
(31, 'task t3', 'task t3 description', 0),
(32, 'task t6', 'task t6 description', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
