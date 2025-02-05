"use client";
import { useEffect } from "react";

export const ErrorMessage =({ message }: { message: Error })=> {
  useEffect(() => {
    console.error(`${message}`);
  }, [message]);
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-red-500">{message}</div>
    </div>
  );
}