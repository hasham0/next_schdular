"use server";

import prisma from "@/database/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export type UpdateUsernameResponse = { message: string; success: boolean };

export async function updateUsername(
  username: string,
): Promise<UpdateUsernameResponse> {
  try {
    const { userId } = auth();
    // TODO: is user exist
    if (!userId) {
      throw new Error("Unauthorized");
    }

    // TODO: is username valid
    const isExistingUsernameValid = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (isExistingUsernameValid && isExistingUsernameValid.id !== userId) {
      throw new Error("Username is  already taken");
    }

    //TODO: update in database
    await prisma.user.update({
      where: {
        clerkUserId: userId,
      },
      data: {
        username,
      },
    });

    //TODO: update in clerk client
    await clerkClient().users.updateUser(userId, {
      username,
    });

    return {
      message: "username is valid",
      success: true,
    };
  } catch (error) {
    const errMsg = (error as unknown as { message: string }).message;
    return {
      message: errMsg,
      success: false,
    };
  }
}
