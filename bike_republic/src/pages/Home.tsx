import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Wrench, Ruler, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/ProductCard';
import { ROUTE_PATHS } from '@/lib/index';
import { products, climbingBikes, aeroBikes, enduranceBikes } from '@/data/products';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Home() {
  const featuredProducts = [
    climbingBikes[0],
    aeroBikes[0],
    enduranceBikes[0],
    aeroBikes[1],
  ];

  const categories = [
    {
      id: 'climbing',
      name: '爬坡型',
      title: 'Climbing',
      description: '極輕量化設計，征服每一個陡坡',
      image: IMAGES.CLIMBING_1,
      color: 'from-orange-500/20 to-red-500/20',
      link: `${ROUTE_PATHS.PRODUCTS}#climbing`,
    },
    {
      id: 'aero',
      name: '破風型',
      title: 'Aero',
      description: '空氣動力學優化，追求極致速度',
      image: IMAGES.AERO_BIKE_1,
      color: 'from-red-500/20 to-pink-500/20',
      link: `${ROUTE_PATHS.PRODUCTS}#aero`,
    },
    {
      id: 'endurance',
      name: '耐力型',
      title: 'Endurance',
      description: '舒適幾何設計，長途騎乘首選',
      image: IMAGES.BIKE_DETAIL_1,
      color: 'from-blue-500/20 to-cyan-500/20',
      link: `${ROUTE_PATHS.PRODUCTS}#endurance`,
    },
  ];

  const whyUsFeatures = [
    {
      icon: Award,
      title: '獨家代理',
      description: '香港地區唯一授權代理商，確保正品保障與完善售後服務',
    },
    {
      icon: Users,
      title: '專業團隊',
      description: '資深單車技師與顧問團隊，提供專業選購建議與技術支援',
    },
    {
      icon: Wrench,
      title: '原廠保養',
      description: '原廠認證維修中心，使用正廠零件與專業工具進行保養',
    },
    {
      icon: Ruler,
      title: 'Bike Fitting',
      description: '專業身體測量與動態分析，打造最適合你的騎乘姿勢',
    },
  ];

  return (
    <div className="w-full">
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="hero-background">
          <img
            src={IMAGES.HERO_CYCLING_1}
            alt="Professional Cycling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-overlay" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.gentle}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPresets.gentle, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
              >
                速度與激情的完美結合
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPresets.gentle, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-white/90 font-medium"
              >
                Bike Republic - 香港知名公路車品牌獨家代理商
                <br />
                為追求速度與破風表現的本地單車發燒友，提供最齊全的車款與專業服務
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPresets.gentle, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.97]"
                >
                  <Link to={ROUTE_PATHS.PRODUCTS}>
                    探索產品
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.97]"
                >
                  <Link to={ROUTE_PATHS.CONTACT}>
                    預約試車
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">產品分類</h2>
            <p className="text-xl text-muted-foreground">選擇最適合你的騎乘風格</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={staggerItem}>
                <Link to={category.link}>
                  <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_35%,transparent)] hover:scale-[1.02]">
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                        <span className="text-sm font-mono text-muted-foreground">{category.title}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        查看更多
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="featured" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">精選產品</h2>
            <p className="text-xl text-muted-foreground">熱門車款推薦</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline" className="transition-all hover:scale-[1.02] active:scale-[0.97]">
              <Link to={ROUTE_PATHS.PRODUCTS}>
                查看全部產品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="why-us" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">為何選擇我們</h2>
            <p className="text-xl text-muted-foreground">專業服務，成就完美騎乘體驗</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="h-full hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_15%,transparent)] transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">準備好體驗極致性能了嗎？</h2>
            <p className="text-xl mb-8 text-white/90">
              立即預約試車，讓我們的專業團隊為你找到最適合的公路車
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 border-0 transition-all hover:scale-[1.02] active:scale-[0.97]"
              >
                <Link to={ROUTE_PATHS.CONTACT}>
                  立即預約試車
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.97]"
              >
                <Link to={ROUTE_PATHS.DEALERS}>
                  查看經銷網絡
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}