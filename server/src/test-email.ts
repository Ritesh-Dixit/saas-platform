import dotenv from "dotenv";
dotenv.config();

import { sendEmail } from "./utils/sendEmail";

const test = async () => {
  await sendEmail(
    process.env.EMAIL_USER as string,
    "Test Email from SaaS Backend",
    "🎉 Congratulations! Your Nodemailer setup is working."
  );

  console.log("Done!");
};

test();