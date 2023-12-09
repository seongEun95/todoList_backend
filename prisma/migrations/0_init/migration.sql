-- CreateTable
CREATE TABLE `todos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(200) NOT NULL,
    `done` BOOLEAN NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;