
DROP DATABASE atelier;

CREATE DATABASE atelier;

USE atelier;

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS `features`;

CREATE TABLE `features` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER(6) NOT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'products'
--
-- ---

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` INTEGER(6) NOT NULL,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `slogan` VARCHAR(100) NULL DEFAULT NULL,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  `default_price` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'feature'
--
-- ---

DROP TABLE IF EXISTS `feature`;

CREATE TABLE `feature` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER(6) NOT NULL,
  `feature` VARCHAR(30) NULL DEFAULT NULL,
  `value` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'styles'
--
-- ---

DROP TABLE IF EXISTS `styles`;

CREATE TABLE `styles` (
  `id` INTEGER(6) NOT NULL,
  `product_id` INTEGER(6) NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'results'
--
-- ---

DROP TABLE IF EXISTS `results`;

CREATE TABLE `results` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER(6) NOT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'style_id'
--
-- ---

DROP TABLE IF EXISTS `style_id`;

CREATE TABLE `style_id` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER(6) NOT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `original_price` VARCHAR(15) NULL DEFAULT NULL,
  `sale_price` VARCHAR(15) NULL DEFAULT NULL,
  `default?` TINYINT(1) NULL DEFAULT NULL,
  `photos` INTEGER(6) NULL DEFAULT NULL,
  `skus` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER(6) NOT NULL,
  `thumbnail_url` VARCHAR(300) NULL DEFAULT NULL,
  `url` VARCHAR(300) NULL DEFAULT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'skus'
--
-- ---

DROP TABLE IF EXISTS `skus`;

CREATE TABLE `skus` (
  `id` INTEGER NOT NULL,
  `ref_Id` INTEGER NOT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'sku'
--
-- ---

DROP TABLE IF EXISTS `sku`;

CREATE TABLE `sku` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER NOT NULL,
  `sku_number` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Table 'quantity/size'
--
-- ---

DROP TABLE IF EXISTS `quantity/size`;

CREATE TABLE `quantity/size` (
  `id` INTEGER(6) NOT NULL,
  `ref_Id` INTEGER(6) NOT NULL,
  `quantity` INTEGER(4) NULL DEFAULT NULL,
  `size` VARCHAR(6) NULL DEFAULT NULL,
  PRIMARY KEY (`ref_Id`),
  UNIQUE KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `features` ADD FOREIGN KEY (id) REFERENCES `feature` (`ref_Id`);
ALTER TABLE `products` ADD FOREIGN KEY (id) REFERENCES `features` (`ref_Id`);
ALTER TABLE `products` ADD FOREIGN KEY (id) REFERENCES `styles` (`product_id`);
ALTER TABLE `styles` ADD FOREIGN KEY (id) REFERENCES `results` (`ref_Id`);
ALTER TABLE `results` ADD FOREIGN KEY (id) REFERENCES `style_id` (`ref_Id`);
ALTER TABLE `style_id` ADD FOREIGN KEY (photos) REFERENCES `photos` (`ref_Id`);
ALTER TABLE `style_id` ADD FOREIGN KEY (skus) REFERENCES `skus` (`ref_Id`);
ALTER TABLE `skus` ADD FOREIGN KEY (id) REFERENCES `sku` (`ref_Id`);
ALTER TABLE `sku` ADD FOREIGN KEY (id) REFERENCES `quantity/size` (`ref_Id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `feature` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `results` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `style_id` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sku` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `quantity/size` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `features` (`id`,`ref_Id`) VALUES
-- ('','');
-- INSERT INTO `products` (`id`,`name`,`slogan`,`description`,`default_price`) VALUES
-- ('','','','','');
-- INSERT INTO `feature` (`id`,`ref_Id`,`feature`,`value`) VALUES
-- ('','','','');
-- INSERT INTO `styles` (`id`,`product_id`) VALUES
-- ('','');
-- INSERT INTO `results` (`id`,`ref_Id`) VALUES
-- ('','');
-- INSERT INTO `style_id` (`id`,`ref_Id`,`name`,`original_price`,`sale_price`,`default?`,`photos`,`skus`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `photos` (`id`,`ref_Id`,`thumbnail_url`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `skus` (`id`,`ref_Id`) VALUES
-- ('','');
-- INSERT INTO `sku` (`id`,`ref_Id`,`sku_number`) VALUES
-- ('','','');
-- INSERT INTO `quantity/size` (`id`,`ref_Id`,`quantity`,`size`) VALUES
-- ('','','','');