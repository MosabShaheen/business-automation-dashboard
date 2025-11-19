import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconBolt,
  IconRobot,
  IconUsers,
  IconFolder,
  IconSettings,
  IconArrowRight,
  IconRoute,
} from "@tabler/icons-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button className="gap-2">
          <IconBolt size={18} />
          New Workflow
        </Button>
      </div>

      {/* METRICS */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Total Clients</CardTitle>
            <IconUsers size={22} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Projects</CardTitle>
            <IconFolder size={22} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18</p>
            <p className="text-sm text-muted-foreground">3 active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Workflows</CardTitle>
            <IconRoute size={22} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">74</p>
            <p className="text-sm text-muted-foreground">Running 5</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>AI Actions</CardTitle>
            <IconRobot size={22} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">321</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

      </div>

      {/* QUICK ACTIONS */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        <Card className="hover:bg-muted/50 transition cursor-pointer">
          <CardHeader>
            <CardTitle>Manage Clients</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-muted-foreground">View and add clients</p>
            <IconArrowRight size={20} />
          </CardContent>
        </Card>

        <Card className="hover:bg-muted/50 transition cursor-pointer">
          <CardHeader>
            <CardTitle>Project Automation</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-muted-foreground">Assign and automate</p>
            <IconArrowRight size={20} />
          </CardContent>
        </Card>

        <Card className="hover:bg-muted/50 transition cursor-pointer">
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-muted-foreground">Ask anything</p>
            <IconRobot size={22} />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
