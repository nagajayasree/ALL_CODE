import * as React from "react";

// export const Ticketing = (age: number) => <div>{age}</div>;

export const Ticketing: React.FunctionComponent<{ age: number }> = ({
  age,
}) => <div>{age >= 18 ? "ticket issued" : "ticket is not issued"}</div>;

export const Result: React.FC<{ marks: number }> = ({ marks }) => {
  let percentage = (marks / 600) * 100;
  return percentage >= 50 ? <div>Well Done!</div> : <div>Keep Training!</div>;
};

interface Values {
  score: number;
}
export const Rating = ({ score }: Values) => {
  if (score < 50) {
    return <div>Poor</div>;
  } else if (score >= 50 && score < 75) {
    return <div>Nice</div>;
  }
  return <div>Excellent</div>;
};

type TicketsProps = { age: number; session: string };
export const Tickets = ({ age, session }: TicketsProps) => {
  return session === "afternoon" ? (
    <div>Purchase</div>
  ) : age <= 18 ? (
    <div>Allowed</div>
  ) : (
    <div>Not Allowed</div>
  );
};
