CREATE SCHEMA `admindb` ;

CREATE TABLE `admindb`.`users` (
  `idusers` INT(4) zerofill NOT NULL auto_increment,
  `pass` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `idusers_UNIQUE` (`idusers` ASC) VISIBLE);
