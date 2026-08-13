import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.createMany({
    data: [
      {
        name: "Basic",
        description: "Basic plan for individuals",
        price: 299,
        duration: "monthly",
        isActive: true,
      },
      {
        name: "Free",
        description: "Free plan with basic features",
        price: 0,
        duration: "monthly",
        isActive: true,
      },
      {
        name: "Pro",
        description: "Pro plan with advanced features",
        price: 999,
        duration: "monthly",
        isActive: true,
      },
      {
        name: "Enterprise",
        description: "Enterprise plan with custom features",
        price: 4999,
        duration: "monthly",
        isActive: true,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Plans seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });