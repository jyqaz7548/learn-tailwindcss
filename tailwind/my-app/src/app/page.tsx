"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center  items-center h-screen">
      <Button
        onClick={() => console.log("click")}
        className=""
        variant={"outline"}
        size={"icon"}
      >
        <ChevronLeft />
      </Button>
    </div>
  );
}
