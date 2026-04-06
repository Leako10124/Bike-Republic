import { motion } from "framer-motion";
import { ArrowRight, Weight, Wrench } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/index";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const categoryColors = {
  Climbing: "bg-accent/20 text-accent border-accent/30",
  Aero: "bg-primary/20 text-primary border-primary/30",
  Endurance: "bg-chart-4/20 text-chart-4 border-chart-4/30",
};

const categoryLabels = {
  Climbing: "爬坡型",
  Aero: "破風型",
  Endurance: "耐力型",
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 35 }}
      whileHover={{ y: -4 }}
      className={cn("group", className)}
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_15%,transparent)] hover:border-primary/30">
        <CardHeader className="p-0 relative">
          <div className="aspect-[4/3] bg-background/50 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          </div>
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge
              variant="outline"
              className={cn(
                "font-medium backdrop-blur-sm",
                categoryColors[product.category]
              )}
            >
              {categoryLabels[product.category]}
            </Badge>
            {!product.available && (
              <Badge variant="destructive" className="backdrop-blur-sm">
                售罄
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.benefitCopy}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50">
              <Weight className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {product.weight}g
              </span>
            </div>
            <Badge variant="secondary" className="font-medium">
              {product.material}
            </Badge>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50">
              <Wrench className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {product.groupset}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-border/50">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground">HKD</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            className="w-full group/btn transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
            disabled={!product.available}
          >
            <span>查看詳情</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
