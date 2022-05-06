-- MySQL Script generated by MySQL Workbench
-- Fri May  6 16:37:34 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema desafio-selaski
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema desafio-selaski
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `desafio-selaski` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `desafio-selaski` ;

-- -----------------------------------------------------
-- Table `desafio-selaski`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `desafio-selaski`.`User` ;

CREATE TABLE IF NOT EXISTS `desafio-selaski`.`User` (
  `IdUser` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(120) NULL,
  `Email` VARCHAR(120) NULL,
  `Status` TINYINT(1) NULL,
  `Password` VARCHAR(100) NULL,
  PRIMARY KEY (`IdUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `desafio-selaski`.`Orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `desafio-selaski`.`Orders` ;

CREATE TABLE IF NOT EXISTS `desafio-selaski`.`Orders` (
  `IdOrder` INT NOT NULL AUTO_INCREMENT,
  `IdUser` INT NOT NULL,
  `OrderNumber` INT NULL,
  `DateTime` DATETIME NULL,
  `ProviderName` VARCHAR(120) NULL,
  `DateCreated` DATETIME NULL,
  `Observation` VARCHAR(255) NULL,
  `TotalValue` DECIMAL(5,2) NULL,
  `Status` TINYINT(1) NULL,
  `PayOrder` DATE NULL,
  PRIMARY KEY (`IdOrder`),
  INDEX `fk_Orders_User_idx` (`IdUser` ASC) VISIBLE,
  CONSTRAINT `fk_Orders_User`
    FOREIGN KEY (`IdUser`)
    REFERENCES `desafio-selaski`.`User` (`IdUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `desafio-selaski`.`OrdersProducts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `desafio-selaski`.`OrdersProducts` ;

CREATE TABLE IF NOT EXISTS `desafio-selaski`.`OrdersProducts` (
  `IdOrdersProducts` INT NOT NULL AUTO_INCREMENT,
  `IdOrder` INT NOT NULL,
  `ValueUnit` DECIMAL(5,2) NULL,
  `Unit` ENUM('cm', 'kg', 'libras') NULL,
  `Description` VARCHAR(255) NULL,
  `SKU` VARCHAR(120) NULL,
  `Quantity` INT NULL,
  `QtyBox` INT NULL,
  `Weight` DECIMAL(5,2) NULL,
  `Volumen` DECIMAL(5,2) NULL,
  `Mark` VARCHAR(120) NULL,
  `Status` TINYINT(1) NULL,
  PRIMARY KEY (`IdOrdersProducts`),
  INDEX `fk_OrdersProducts_Orders1_idx` (`IdOrder` ASC) VISIBLE,
  CONSTRAINT `fk_OrdersProducts_Orders1`
    FOREIGN KEY (`IdOrder`)
    REFERENCES `desafio-selaski`.`Orders` (`IdOrder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
