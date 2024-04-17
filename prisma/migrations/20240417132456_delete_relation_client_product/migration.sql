/*
  Warnings:

  - You are about to drop the `_clienttoproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_clienttoproduct` DROP FOREIGN KEY `_ClientToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_clienttoproduct` DROP FOREIGN KEY `_ClientToProduct_B_fkey`;

-- DropTable
DROP TABLE `_clienttoproduct`;
