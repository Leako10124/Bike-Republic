import { motion } from "framer-motion";
import { Zap, Award, Cog, Sparkles } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function Brand() {
  const milestones = [
    { year: "2018", title: "品牌創立", description: "Bike Republic 正式成為香港獨家代理商，引入頂級公路車品牌" },
    { year: "2020", title: "技術突破", description: "引入最新碳纖維製造技術，車架重量突破 700g 極限" },
    { year: "2022", title: "服務升級", description: "設立專業 Bike Fitting 中心，提供動態分析與座艙優化" },
    { year: "2024", title: "市場領先", description: "成為香港最大公路車代理商，經銷網絡覆蓋全港" },
    { year: "2026", title: "持續創新", description: "推出 AI 驅動的個人化車架推薦系統，引領行業未來" },
  ];

  const technologies = [
    {
      icon: Zap,
      title: "碳纖維技術",
      description: "採用航太級 T1000 碳纖維，實現極致輕量化與剛性平衡。700g 車架重量，助你輕鬆征服大帽山連綿斜路。",
    },
    {
      icon: Award,
      title: "空氣動力學設計",
      description: "風洞測試優化的破風造型，減少 15% 風阻。每小時節省 30 瓦功率，讓你在平路衝刺時更具優勢。",
    },
    {
      icon: Cog,
      title: "精密製造工藝",
      description: "全自動化生產線配合人工品質檢測，確保每一支車架都達到專業賽事標準。5 年原廠保固，品質保證。",
    },
  ];

  const values = [
    { icon: Zap, title: "速度", description: "追求極致性能，突破速度極限" },
    { icon: Sparkles, title: "激情", description: "熱愛騎行，享受破風的快感" },
    { icon: Award, title: "專業", description: "專業團隊，提供頂級服務" },
    { icon: Cog, title: "創新", description: "持續創新，引領行業未來" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_CYCLING_3}
            alt="Bike Republic 品牌形象"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            追求極致性能
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Bike Republic 致力於為香港單車發燒友帶來世界頂級的公路車產品與專業服務
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">品牌歷程</h2>
            <p className="text-lg text-muted-foreground">從創立到領先，我們始終堅持品質與創新</p>
          </motion.div>

          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={staggerItem}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:pr-12 md:text-right" style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                <div
                  className="hidden md:flex w-12 h-12 rounded-full bg-primary items-center justify-center z-10 flex-shrink-0"
                  style={{ order: index % 2 === 0 ? 2 : 1 }}
                >
                  <div className="w-4 h-4 rounded-full bg-background" />
                </div>
                <div className="flex-1" style={{ order: index % 2 === 0 ? 3 : 0 }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">技術優勢</h2>
            <p className="text-lg text-muted-foreground">領先業界的製造技術與設計理念</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">品牌價值觀</h2>
            <p className="text-lg text-muted-foreground">我們的核心信念，驅動每一次創新</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">專業團隊</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                我們的團隊由資深單車技師、專業 Bike Fitting 顧問及熱愛騎行的專家組成。每位成員都擁有豐富的行業經驗，致力於為每位客戶提供最專業的建議與服務。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                從車架選擇、尺寸建議到售後保養，我們全程陪伴你的騎行旅程，確保你獲得最佳的騎乘體驗。
              </p>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <img
                src={IMAGES.SERVICE_1}
                alt="專業團隊"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <img
                src={IMAGES.BIKE_DETAIL_2}
                alt="碳纖維工藝"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">匠心工藝</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                每一支車架都經過嚴格的品質檢測，從碳纖維鋪層到最終塗裝，我們堅持最高標準。精密的製造工藝確保車架在輕量化的同時，保持卓越的剛性與耐用性。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我們相信，細節決定品質。每一個接縫、每一條走線，都體現了我們對完美的追求。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">加入我們的騎行社群</h2>
            <p className="text-lg text-muted-foreground mb-8">
              體驗 Bike Republic 的專業服務，讓我們陪伴你征服每一段旅程
            </p>
            <motion.a
              href="#/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              立即預約試車
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}