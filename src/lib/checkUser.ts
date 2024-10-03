import { clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;
  try {
    const isUserLoggedIn = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (!isUserLoggedIn) {
      const name = `${user.firstName} ${user.lastName}`;
      await clerkClient().users.updateUser(user.id, {
        username: name.split(" ").join("-") + user.id.slice(-4),
      });
      const newUser = await prisma.user.create({
        data: {
          clerkUserId: user.id,
          name,
          imageUrl: user.imageUrl,
          email: user.emailAddresses[0].emailAddress,
          username: name.split(" ").join("-") + user.id.slice(-4),
        },
      });
      return newUser;
    }
    return isUserLoggedIn;
  } catch (error) {
    console.error("🚀 ~ checkUser ~ error:", error);
  }
};

export default checkUser;