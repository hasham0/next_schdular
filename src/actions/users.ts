"use server";

import prisma from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
export type UpdateUsernameResponse = { success: boolean };

export async function updateUsername(
  username: string,
): Promise<UpdateUsernameResponse> {
  console.log("🚀 ~ updateUsername ~ username:", username);
  //   const { userId } = auth();
  //   if (!userId) {
  //     throw new Error("Unauthorized");
  //   }
  //   const isExistingUsernameValid = await prisma.user.findUnique({
  //     where: {
  //       username,
  //     },
  //   });

  //   if (isExistingUsernameValid && isExistingUsernameValid.id !== userId) {
  //     throw new Error("Username is  already taken");
  //   }

  //   // update in database
  //   await prisma.user.update({
  //     where: {
  //       clerkUserId: userId,
  //     },
  //     data: {
  //       username,
  //     },
  //   });

  //   // update in clerk client
  //   await clerkClient.users.updateUser(userId, {
  //     username,
  //   });

  return {
    success: true,
  };
}
