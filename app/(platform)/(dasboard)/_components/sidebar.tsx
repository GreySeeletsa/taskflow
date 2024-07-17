"use client";

import Link from "next/link";
import { Plus } from "lucide-react"
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

// Importing custom components from the application
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

// Defining the SidebarProps interface with an optional storageKey property
interface SidebarProps {
    storageKey?: string;
};

// The Sidebar component, which accepts a storageKey prop with a default value of "t-sidebar-state"
export const Sidebar = ({
    storageKey = "t-sidebar-state",
}: SidebarProps) => {
    // Using the useLocalStorage hook to store and retrieve the expanded state of the sidebar
        const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
            storageKey,
            {}
        );
        const { organization: activeOrganization,
        isLoaded: isLoadingOrg
     } = useOrganization();
     const {
        userMemberships,
        isLoaded: isLoadedOrgList
     } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
     });

     // Deriving the default accordion values from the expanded state
     const defaultAccodianValue: string[] = Object.keys(expanded)
     .reduce((acc: string[], key: string) =>  {
        if  (expanded[key]) {
            acc.push(key)
     }
     return acc;
    }, []);

    // Defining the onExpand function to toggle the expanded state of an accordion item
    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]  : !expanded[id],
        }));
    };

    // If the organization or organization list is still loading, render a skeleton component
    if (!isLoadingOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
        <>
            <Skeleton/>
        </>
        )
    }

// Otherwise, render the sidebar component
    return (
        <div>
            Sidebar!
        </div>
    );
};