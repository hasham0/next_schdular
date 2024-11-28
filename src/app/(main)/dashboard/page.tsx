"use client";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useUser } from "@clerk/nextjs";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { usernameSchema, usernameSchemaTS } from "@/validations/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUsername, UpdateUsernameResponse } from "@/actions/users";

type Props = {};

function dashboardPage({}: Props) {
  const { user, isLoaded } = useUser();
  const [origin, setOrigin] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<usernameSchemaTS>({
    resolver: zodResolver(usernameSchema),
  });

  useEffect(() => {
    if (!user?.username) return;
    return setValue("username", user?.username);
  }, [isLoaded]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const {
    mutate,
    data: userData,
    isError,
    isPending,
    error,
  } = useMutation<UpdateUsernameResponse, Error, string>({
    mutationKey: ["username"],
    mutationFn: (username) => updateUsername(username),
  });

  const onSubmit: SubmitHandler<usernameSchemaTS> = async (data) => {
    const d = mutate(data.username);
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<usernameSchemaTS>= ~ d:",
      userData,
    );
  };

  return (
    <div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user?.firstName}!</CardTitle>
          </CardHeader>
          <CardContent>
            {/* {!loadingUpdates ? (
              <div className="space-y-6 font-light">
                <div>
                  {upcomingMeetings && upcomingMeetings?.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {upcomingMeetings?.map((meeting) => (
                        <li key={meeting.id}>
                          {meeting.event.title} on{" "}
                          {format(
                            new Date(meeting.startTime),
                            "MMM d, yyyy h:mm a",
                          )}{" "}
                          with {meeting.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No upcoming meetings</p>
                  )}
                </div>
              </div>
            ) : (
              <p>Loading updates...</p>
            )} */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Unique Link</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <p>{origin}/</p>
                  <Input {...register("username")} placeholder="username" />
                </div>
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
                {isError && (
                  <p className="mt-1 text-sm text-red-500">{error?.message}</p>
                )}
              </div>
              {isPending && (
                <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
              )}
              <Button type="submit" disabled={isPending}>
                Update Username
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default dashboardPage;
