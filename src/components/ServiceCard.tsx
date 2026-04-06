import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/lib/index";
import { Wrench, Ruler, Settings, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { springPresets } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  ruler: Ruler,
  settings: Settings,
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon.toLowerCase()] || Settings;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springPresets.gentle}
      whileHover={{ scale: 1.02 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_15%,transparent)]">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold mb-2">
                {service.name}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <div className="space-y-3">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="text-sm font-medium">{service.priceRange}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-sm font-medium">{service.duration}</span>
            </Badge>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
          >
            <a href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
              立即預約
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}