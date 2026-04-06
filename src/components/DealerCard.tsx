import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Dealer } from "@/lib/index";
import { cn } from "@/lib/utils";

interface DealerCardProps {
  dealer: Dealer;
  className?: string;
}

export function DealerCard({ dealer, className }: DealerCardProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${dealer.coordinates.lat},${dealer.coordinates.lng}`;

  const regionColorMap: Record<Dealer["region"], string> = {
    香港島: "bg-primary/10 text-primary border-primary/20",
    九龍: "bg-accent/10 text-accent-foreground border-accent/20",
    新界: "bg-secondary text-secondary-foreground border-secondary/20",
  };

  return (
    <Card
      className={cn(
        "group transition-all duration-200 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl font-bold">{dealer.name}</CardTitle>
          <Badge
            variant="outline"
            className={cn("shrink-0", regionColorMap[dealer.region])}
          >
            {dealer.region}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
            <span className="text-foreground">{dealer.address}</span>
          </div>

          <a
            href={`tel:${dealer.phone}`}
            className="flex items-center gap-3 text-sm group/phone transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0 text-muted-foreground group-hover/phone:text-primary transition-colors" />
            <span className="font-medium">{dealer.phone}</span>
          </a>

          <div className="flex items-start gap-3 text-sm">
            <Clock className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
            <span className="text-muted-foreground">{dealer.hours}</span>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
        >
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="h-4 w-4 mr-2" />
            查看地圖
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
