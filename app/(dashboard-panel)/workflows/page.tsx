"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconPlayerPlay, IconTool, IconEdit } from "@tabler/icons-react"

// Dummy workflow data
const workflows = [
  {
    id: 1,
    name: "New Lead Automation",
    description: "Runs when a new lead is added.",
    trigger: "Form Submission",
    status: "active",
    lastRun: "2 hours ago",
  },
  {
    id: 2,
    name: "Client Onboarding",
    description: "Sends onboarding emails & creates workspace.",
    trigger: "Manual",
    status: "inactive",
    lastRun: "1 day ago",
  },
  {
    id: 3,
    name: "Invoice Reminder",
    description: "Sends payment reminders automatically.",
    trigger: "Scheduled",
    status: "active",
    lastRun: "3 hours ago",
  },
]

export default function WorkflowsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Workflows</h1>

        <Button className="gap-2">
          <IconTool size={20} />
          Create Workflow
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflows.map((workflow) => (
          <Card key={workflow.id} className="border">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{workflow.name}</span>

                <Badge
                  variant={workflow.status === "active" ? "default" : "secondary"}
                >
                  {workflow.status}
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {workflow.description}
              </p>

              <p className="text-xs mb-1">
                <span className="font-medium">Trigger:</span> {workflow.trigger}
              </p>

              <p className="text-xs mb-4">
                <span className="font-medium">Last run:</span> {workflow.lastRun}
              </p>

              <div className="flex gap-2">
                <Button variant="outline" className="gap-1 flex-1">
                  <IconEdit size={18} />
                  Edit
                </Button>

                <Button variant="default" className="gap-1 flex-1">
                  <IconPlayerPlay size={18} />
                  Run
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
