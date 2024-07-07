"use server";

import { driver } from "@/db";

export const getUserById = async (id: string) => {
  // Fetch the user by applicationId
  const result = await driver.executeQuery(
    `MATCH (u: User {applicationId: $applicationId}) RETURN u`,
  );
  // Extract the user from the result and return it
  const user = result.records.map((record) => record.get("u").properties);

  return user;
};
