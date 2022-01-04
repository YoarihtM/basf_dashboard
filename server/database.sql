CREATE DATABASE tanques;
USE tanques;
CREATE TABLE `tanks` (
  `matDescription` varchar(50) NOT NULL,
  `batchNo` varchar(20) NOT NULL,
  `startDate` text NOT NULL,
  `deliveryDate` text NOT NULL,
  `client` varchar(50) NOT NULL,
  `etapaActual` varchar(30) NOT NULL,
  `id` varchar(10) NOT NULL,
  PRIMARY KEY (`batchNo`),
  UNIQUE KEY `id_UNIQUE` (`id`)
)