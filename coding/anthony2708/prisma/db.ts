import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
    try {
        console.log(await prisma.widget.create({ data: {} }));
    } catch (err) {
        console.error("Error executing query:", err);
    } finally {
        prisma.$disconnect();
    }
})();