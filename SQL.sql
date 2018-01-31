-- MySQL Script generated by MySQL Workbench
-- mar 30 ene 2018 14:30:23 CST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sucursal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `conexiones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `conexiones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mac` VARCHAR(17) NULL,
  `registrado` CHAR(1) NULL,
  `rssi` VARCHAR(11) NULL,
  `ssid` VARCHAR(45) NULL,
  `latitud` FLOAT NULL,
  `longitud` FLOAT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `sucursal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_conexiones_sucursal`
    FOREIGN KEY (`sucursal_id`)
    REFERENCES `sucursal` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `id_UNIQUE` ON `conexiones` (`id` ASC);

CREATE INDEX `fk_conexiones_sucursal_idx` ON `conexiones` (`sucursal_id` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
