import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, climbingBikes, aeroBikes, enduranceBikes } from '@/data/products';
import { BikeCategory } from '@/lib/index';
import { ProductCard } from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const categoryDescriptions: Record<BikeCategory | 'all', { title: string; description: string }> = {
  all: {
    title: '全部產品',
    description: '探索 Bike Republic 完整產品系列，從輕量爬坡到極速破風，滿足你對速度與性能的所有追求',
  },
  Climbing: {
    title: '爬坡型',
    description: '極致輕量化設計，優化的爬坡幾何，讓你在大帽山的連綿斜路上輕鬆征服每一個彎道',
  },
  Aero: {
    title: '破風型',
    description: '空氣動力學優化車架，減少風阻提升速度，在平路衝刺時領先群雄，追求極致性能',
  },
  Endurance: {
    title: '耐力型',
    description: '舒適幾何設計，長途騎乘不疲累，讓你享受每一公里的風景，輕鬆完成 200 公里挑戰',
  },
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<BikeCategory | 'all'>('all');

  const getFilteredProducts = () => {
    if (activeCategory === 'all') return products;
    if (activeCategory === 'Climbing') return climbingBikes;
    if (activeCategory === 'Aero') return aeroBikes;
    if (activeCategory === 'Endurance') return enduranceBikes;
    return products;
  };

  const filteredProducts = getFilteredProducts();
  const currentDescription = categoryDescriptions[activeCategory];

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springPresets.gentle}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            產品系列
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            專業公路車系列，滿足你對速度與性能的所有追求
          </motion.p>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as BikeCategory | 'all')}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.3 }}
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 h-auto p-1 bg-card">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 py-3"
              >
                全部
              </TabsTrigger>
              <TabsTrigger
                value="Climbing"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 py-3"
              >
                爬坡型
              </TabsTrigger>
              <TabsTrigger
                value="Aero"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 py-3"
              >
                破風型
              </TabsTrigger>
              <TabsTrigger
                value="Endurance"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 py-3"
              >
                耐力型
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {currentDescription.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {currentDescription.description}
            </p>
          </motion.div>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={staggerItem}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={springPresets.gentle}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">此分類暫無產品</p>
              </motion.div>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
