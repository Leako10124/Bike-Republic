import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { DealerCard } from '@/components/DealerCard';
import { dealers } from '@/data/dealers';
import { Dealer } from '@/lib/index';
import { motion } from 'framer-motion';
import { springPresets, staggerContainer, staggerItem } from '@/lib/motion';

export default function Dealers() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = ['all', '香港島', '九龍', '新界'] as const;

  const filteredDealers = selectedRegion === 'all'
    ? dealers
    : dealers.filter((dealer) => dealer.region === selectedRegion);

  const regionLabels: Record<string, string> = {
    all: '全部',
    '香港島': '香港島',
    '九龍': '九龍',
    '新界': '新界',
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              全港經銷網絡
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              前往以下門市體驗 Bike Republic 產品
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.1 }}
          >
            <Tabs value={selectedRegion} onValueChange={setSelectedRegion} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto p-1 bg-card/50 backdrop-blur-sm border border-border/50">
                {regions.map((region) => (
                  <TabsTrigger
                    key={region}
                    value={region}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 py-3 text-base font-medium"
                  >
                    {regionLabels[region]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {regions.map((region) => (
                <TabsContent key={region} value={region} className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {filteredDealers.map((dealer) => (
                      <motion.div key={dealer.id} variants={staggerItem}>
                        <DealerCard dealer={dealer} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {filteredDealers.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={springPresets.gentle}
                      className="text-center py-16"
                    >
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                      <p className="text-xl text-muted-foreground">
                        此地區暫無經銷商
                      </p>
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.2 }}
            className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg mb-2">覆蓋全港</h3>
                <p className="text-sm text-muted-foreground">
                  8 間門市遍佈港九新界
                </p>
              </div>
              <div>
                <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg mb-2">專業諮詢</h3>
                <p className="text-sm text-muted-foreground">
                  致電預約專業 Bike Fitting
                </p>
              </div>
              <div>
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg mb-2">彈性營業</h3>
                <p className="text-sm text-muted-foreground">
                  週末及公眾假期照常營業
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
