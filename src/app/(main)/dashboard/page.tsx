"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { usernameSchema, usernameSchemaTS } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

function dashboardPage({}: Props) {
  const { user, isLoaded } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<usernameSchemaTS>({
    resolver: zodResolver(usernameSchema),
  });
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["username"],
    queryFn: () => {},
  });

  const onSubmit = async (data: usernameSchemaTS) => {
    //    await fnUpdateUsername(data.username);
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
                  <span>{window?.location.origin}/</span>
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
              {isLoading && (
                <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
              )}
              <Button type="submit" disabled={isLoading}>
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
