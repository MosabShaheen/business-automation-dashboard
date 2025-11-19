"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  IconBolt,
  IconBrandNem,
//   IconBrandN8n,
  IconMessageChatbot,
  IconPlus,
  IconSettings,
} from "@tabler/icons-react"

export default function BuilderPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <aside className="w-60 border-r p-4 space-y-6 bg-muted/30">
        <div>
          <h2 className="text-sm font-semibold mb-2">Triggers</h2>
          <div className="space-y-2">
            <BuilderItem icon={<IconBolt size={18} />} label="Webhook Trigger" />
            <BuilderItem icon={<IconBrandNem size={18} />} label="Schedule Trigger" />
            <BuilderItem icon={<IconMessageChatbot size={18} />} label="AI Trigger" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-2">Actions</h2>
          <div className="space-y-2">
            <BuilderItem icon={<IconPlus size={18} />} label="Add to Database" />
            <BuilderItem icon={<IconPlus size={18} />} label="Send Email" />
            <BuilderItem icon={<IconPlus size={18} />} label="Slack Message" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-2">AI Tools</h2>
          <div className="space-y-2">
            <BuilderItem icon={<IconMessageChatbot size={18} />} label="AI Generate Text" />
            <BuilderItem icon={<IconMessageChatbot size={18} />} label="AI Classify Data" />
          </div>
        </div>
      </aside>

      {/* Center Canvas */}
      <main className="flex-1 p-6 bg-background">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Workflow Builder</h1>
          <Button className="gap-2">
            <IconSettings size={18} />
            Workflow Settings
          </Button>
        </div>

        <div className="h-full w-full border rounded-lg bg-muted/20 flex items-center justify-center">
          <p className="text-muted-foreground">
            Drag items from the left to start building your workflow...
          </p>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-72 border-l p-4 bg-muted/20">
        <h2 className="text-sm font-semibold mb-2">Step Settings</h2>
        <ScrollArea className="h-full">
          <Card className="p-4">
            <p className="text-muted-foreground text-sm">
              Select a workflow step to edit its settings here.
            </p>
          </Card>
        </ScrollArea>
      </aside>
    </div>
  )
}

function BuilderItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="outline"
      className="w-full justify-start gap-2"
    >
      {icon}
      {label}
    </Button>
  )
}
