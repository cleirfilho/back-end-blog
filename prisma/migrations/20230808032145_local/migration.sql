-- AlterTable
ALTER TABLE `post` ADD COLUMN `loca_publicacao` ENUM('BLOG', 'SOBRE', 'DESTAQUE') NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `role` ENUM('ADMIN', 'USER') NULL;
