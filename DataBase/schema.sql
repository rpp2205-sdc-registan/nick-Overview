
DROP DATABASE IF EXISTS atelier;

CREATE DATABASE atelier;

USE atelier;

-- ---
-- Table 'products'
--
-- ---

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` INTEGER(10) NOT NULL,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `slogan` VARCHAR(1000) NULL DEFAULT NULL,
  `description` VARCHAR(2000) NULL DEFAULT NULL,
  `category` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS `features`;

CREATE TABLE `features` (
  `id` INTEGER(10) NOT NULL,
  `feats_ref_Id` INTEGER(10) NOT NULL,
  `feature` VARCHAR(300) NULL DEFAULT NULL,
  `value` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
KEY (`feats_ref_Id`)
);

-- ---
-- Table 'styles'
--
-- ---

DROP TABLE IF EXISTS `styles`;

CREATE TABLE `styles` (
  `id` INTEGER(10) NOT NULL,
  `style_ref_Id` INTEGER(10) NOT NULL,
  `name` VARCHAR(200) NULL DEFAULT NULL,
  `sale_price` VARCHAR(15) NULL DEFAULT NULL,
  `original_price` VARCHAR(15) NULL DEFAULT NULL,
  `isDefault` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
KEY (`style_ref_Id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER(10) NOT NULL,
  `photos_ref_Id` INTEGER(10) NOT NULL,
  `thumbnail_url` VARCHAR(2000) NULL DEFAULT NULL,
  `url` VARCHAR(2000) NULL DEFAULT NULL,
KEY (`photos_ref_Id`),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'skus'
--
-- ---

DROP TABLE IF EXISTS `skus`;

CREATE TABLE `skus` (
  `id` INTEGER(10) NOT NULL,
  `skus_ref_Id` INTEGER(10) NOT NULL,
  `quantity` VARCHAR(10) NULL DEFAULT NULL,
  `size` VARCHAR(10) NULL DEFAULT NULL,
KEY (`skus_ref_Id`),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `features` ADD FOREIGN KEY (feats_ref_Id) REFERENCES `products` (`id`);
ALTER TABLE `styles` ADD FOREIGN KEY (style_ref_Id) REFERENCES `products` (`id`);
ALTER TABLE `photos` ADD FOREIGN KEY (photos_ref_Id) REFERENCES `styles` (`id`);
ALTER TABLE `skus` ADD FOREIGN KEY (skus_ref_Id) REFERENCES `styles` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `products` (`id`,`name`,`slogan`,`description`,`category`) VALUES
-- ('','','','','');
-- INSERT INTO `features` (`id`,`feats_ref_Id`,`feature`,`value`) VALUES
-- ('','','','');
-- INSERT INTO `styles` (`id`,`style_ref_Id`,`name`,`sale_price`,`original_price`,`isDefault`) VALUES
-- ('','','','','','');
-- INSERT INTO `photos` (`id`,`photos_ref_Id`,`thumbnail_url`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `skus` (`id`,`skus_ref_Id`,`quantity`,`size`) VALUES
-- ('','','','');