-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `CategoriesOnBooks` DROP FOREIGN KEY `CategoriesOnBooks_book_id_fkey`;

-- DropForeignKey
ALTER TABLE `CategoriesOnBooks` DROP FOREIGN KEY `CategoriesOnBooks_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_book_id_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_user_id_fkey`;

-- CreateIndex
CREATE INDEX `CategoriesOnBooks_book_id_idx` ON `CategoriesOnBooks`(`book_id`);

-- RenameIndex
ALTER TABLE `Account` RENAME INDEX `Account_userId_fkey` TO `Account_userId_idx`;

-- RenameIndex
ALTER TABLE `CategoriesOnBooks` RENAME INDEX `CategoriesOnBooks_categoryId_fkey` TO `CategoriesOnBooks_categoryId_idx`;

-- RenameIndex
ALTER TABLE `Session` RENAME INDEX `Session_userId_fkey` TO `Session_userId_idx`;

-- RenameIndex
ALTER TABLE `ratings` RENAME INDEX `ratings_book_id_fkey` TO `ratings_book_id_idx`;

-- RenameIndex
ALTER TABLE `ratings` RENAME INDEX `ratings_user_id_fkey` TO `ratings_user_id_idx`;
