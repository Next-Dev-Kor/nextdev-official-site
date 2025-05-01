"use client";

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
import { useState } from "react";

interface DeployProjectsProps {
  initialData: DeployProjectResponse;
}

const DeployProjects = ({ initialData }: DeployProjectsProps) => {
  const [selectedType, setSelectedType] = useState<"APP" | "WEB" | "ALL">(
    "ALL"
  );
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects =
    selectedType === "ALL"
      ? initialData.projects
      : initialData.projects.filter((project) => project.type === selectedType);

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
          <DropdownMenuItem onClick={() => setSelectedType("ALL")}>
            전체
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedType("WEB")}>
            Web
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedType("APP")}>
            App
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DeployCard data={filteredProjects} />
      </div>
    </div>
  );
};

export default DeployProjects;
