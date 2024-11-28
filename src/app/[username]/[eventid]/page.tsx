import React from "react";

type Props = {
  params: { username: string; eventid: string };
};

export default function EventPage({ params: { username, eventid } }: Props) {
  return (
    <div>
      Dynamic {username} Event Page {eventid}
    </div>
  );
}
