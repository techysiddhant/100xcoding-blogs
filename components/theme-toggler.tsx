"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="hidden md:block mr-2">
            <Button
                variant="ghost"
                size="icon"
                className=""
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <Sun className="h-4 w-4 dark:hidden" color="#000" />
                <Moon className="hidden h-4 w-4 dark:block" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}
export function MobileThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="block md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <Sun className="h-4 w-4 dark:hidden" color="#000" />
                <Moon className="hidden h-4 w-4 dark:block" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}