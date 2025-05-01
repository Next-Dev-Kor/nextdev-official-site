"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { DeployProjectResponse } from "@/app/(route)/project/types";
import DeployCard from "@/app/(route)/project/_components/deploy-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface DeployProjectsProps {
  data: DeployProjectResponse;
  loading: boolean;
  selectedType: "APP" | "WEB" | "ALL";
  onTypeChange: Dispatch<SetStateAction<"APP" | "WEB" | "ALL">>;
}

const DeployProjects = ({
  data,
  loading,
  selectedType,
  onTypeChange,
}: DeployProjectsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-foreground text-xl font-semibold">배포 프로젝트</div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[100px] rounded-full">
            {selectedType === "ALL" ? "전체" : selectedType}
            <ChevronDownIcon
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onTypeChange("ALL")}>
            전체
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTypeChange("WEB")}>
            Web
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTypeChange("APP")}>
            App
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {loading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[124px] bg-gray-200 animate-pulse"
            />
          ))
        ) : (
          <DeployCard data={data.projects} />
        )}
      </div>
    </div>
  );
};

export default DeployProjects;
