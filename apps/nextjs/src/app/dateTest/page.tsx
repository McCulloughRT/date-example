"use client";

import { useState } from "react";

import { Button } from "@acme/ui/button";

import { api } from "~/trpc/react";

export default function Page() {
  const [date] = useState(new Date());
  const dateQuery = api.dateTest.get.useQuery({
    testDate: date,
  });

  console.log("dateQuery", dateQuery.data);
  console.log("typeof dateQuery.data", typeof dateQuery.data);

  const dateMutation = api.dateTest.update.useMutation();

  const onUpdate = async () => {
    if (dateQuery.data == null) return;
    const mutationResult = await dateMutation.mutateAsync({
      testDate: new Date(),
    });
    console.log("mutationResult", mutationResult);
  };
  return (
    <div>
      <div>Date Test</div>
      <div>{dateQuery.data?.outputDate.toUTCString()}</div>
      <div>
        <Button onClick={onUpdate}>Try Date Mutation</Button>
      </div>
    </div>
  );
}
