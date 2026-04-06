import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { IMAGES } from '@/assets/images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const processSteps = [
  { number: '01', title: '預約', description: '線上或電話預約服務時間' },
  { number: '02', title: '到店', description: '攜帶愛車前往指定門市' },
  { number: '03', title: '服務', description: '專業技師進行調校或維修' },
  { number: '04', title: '完成', description: '取車並獲得詳細報告' },
];

const faqs = [
  {
    question: 'Bike Fitting 需要多久時間？',
    answer: '完整的 Bike Fitting 服務通常需要 2-3 小時。這包含身體測量、柔軟度評估、動態騎乘分析、座艙調整以及最終確認。我們建議預留充足時間，以確保達到最佳調校效果。',
  },
  {
    question: '我需要攜帶什麼來進行 Bike Fitting？',
    answer: '請攜帶您的公路車、騎行服、車鞋與踏板（如有使用卡踏）。如果您有特殊的身體狀況或舊傷，也請事先告知我們的技師，以便提供更精準的調校建議。',
  },
  {
    question: '定期保養的頻率應該是多久一次？',
    answer: '我們建議每騎乘 1,000 公里或每 3 個月進行一次定期保養，以先到者為準。如果您經常在惡劣天氣或多塵環境騎乘，建議縮短保養週期至每 500-800 公里。',
  },
  {
    question: '保養服務是否使用原廠零件？',
    answer: '是的，我們所有的保養維修服務都使用原廠認證零件與專業工具。這確保您的愛車保持最佳性能，並維持原廠保固的有效性。',
  },
  {
    question: '車架幾何諮詢是否需要預約？',
    answer: '車架幾何諮詢服務完全免費，但我們建議事先預約，以確保有專業顧問為您提供一對一的詳細分析。您也可以直接到店諮詢，但可能需要等候。',
  },
  {
    question: '如果調校後感覺不適應，可以再調整嗎？',
    answer: '當然可以。我們提供三個月內的免費微調服務。身體適應新的騎乘姿勢需要時間，如果在適應期內感到不適，歡迎隨時回店進行微調，直到找到最舒適的設定。',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.FITTING_1}
            alt="專業服務"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              專業服務，成就完美騎乘
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              從專業的 Bike Fitting 調校到原廠保養維修，我們提供全方位的服務，
              確保您的每一次騎乘都能發揮最佳性能，享受最舒適的體驗。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">服務流程</h2>
            <p className="text-muted-foreground text-lg">
              簡單四步驟，輕鬆享受專業服務
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">常見問題</h2>
              <p className="text-muted-foreground text-lg">
                關於我們服務的常見疑問解答
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springPresets.gentle, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.SERVICE_3}
            alt="立即預約"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              準備好提升您的騎乘體驗了嗎？
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              立即預約我們的專業服務，讓您的公路車發揮最佳性能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-200"
              >
                立即預約
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/dealers"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg hover:bg-secondary/80 transition-all duration-200"
              >
                查看門市位置
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
