import userEvent from "@testing-library/user-event";
import * as React from "react";

export const Users: React.FC<{
  users: [{ id: number; name: string }];
}> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p>
          Id:{user.id},Name:{user.name}
        </p>
      ))}
    </div>
  );
};

export const PersonDetails: React.FC<{
  persons: [{ id: number; name: string }];
}> = ({ persons }) => {
  return (
    <div>
      {Object.keys(persons).map((key) => (
        <p>{key}</p>
      ))}
    </div>
  );
};
