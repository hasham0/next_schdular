import React from "react";

type Props = { params: { username: string } };

export default function UsernamePage({ params: { username } }: Props) {
  return <div>Dynamic {username} Page</div>;
}
