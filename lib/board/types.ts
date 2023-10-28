import { LegacyRef, ReactNode } from "react";

export interface props {
  setNodeRef: LegacyRef<HTMLDivElement> | undefined;
  children: ReactNode;
  style: object;
  title: string;
}
