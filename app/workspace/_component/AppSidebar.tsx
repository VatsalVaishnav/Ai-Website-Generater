"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { use, useContext, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import { Progress } from "@/components/ui/progress";
import { UserButton } from "@clerk/nextjs";
import { Ghost, User } from "lucide-react";

export function AppSidebar() {
  const [project, setproject] = useState<any>(null);
  const { userDetail, setUserDetail } = useContext(UserDetailContext); // <-- fix here
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={35} height={35} />
          <h2 className="font-bold text-xl">AI Website Generater</h2>
        </div>
        <Link className=" mt-5 w-full" href={"/workspace"}>
          <Button className="w-full">Pleas Add New Project</Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          {(!project || project.length === 0) && (
            <h2 className="text-sm px-2 text-gray-500">No Project Found</h2>
          )}
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <div className="p-3 border rounded-xl space-y-3 bg-secondary">
          <h2 className="flex justify-between items-center">
            Remaining Credits{" "}
            <span className="font-bold">{userDetail?.credits}</span>
          </h2>
          <Progress value={33} />
          <Button className="w-full">upgrade to unlimited</Button>
        </div>
        <div className="flex items-center gap-2">
          <UserButton />
          <Button variant={'ghost'}>Settings</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
