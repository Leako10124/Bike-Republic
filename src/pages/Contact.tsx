import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/data/products';
import { springPresets } from '@/lib/motion';

const formSchema = z.object({
  name: z.string().min(2, { message: '請輸入至少 2 個字元的姓名' }),
  phone: z.string().min(8, { message: '請輸入有效的電話號碼' }),
  email: z.string().email({ message: '請輸入有效的電郵地址' }),
  bikeInterest: z.string().min(1, { message: '請選擇感興趣的車款' }),
  preferredDate: z.string().min(1, { message: '請選擇預約日期' }),
  message: z.string().min(10, { message: '請輸入至少 10 個字元的訊息內容' }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      bikeInterest: '',
      preferredDate: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    toast({
      title: '預約成功！',
      description: '我們已收到您的預約申請，將於 24 小時內與您聯絡確認試車時間。',
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: '電話',
      value: '+852 2345 6789',
      link: 'tel:+85223456789',
    },
    {
      icon: Mail,
      label: '電郵',
      value: 'info@bikerepublic.hk',
      link: 'mailto:info@bikerepublic.hk',
    },
    {
      icon: MapPin,
      label: '地址',
      value: '香港中環皇后大道中 123 號',
      link: 'https://maps.google.com/?q=香港中環皇后大道中123號',
    },
    {
      icon: Clock,
      label: '營業時間',
      value: '星期一至日 10:00 - 20:00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            聯絡我們
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            預約試車或諮詢服務，我們的專業團隊隨時為您服務
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.1 }}
          >
            <Card className="h-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">預約試車</CardTitle>
                <CardDescription>
                  填寫以下表單，我們將盡快與您聯絡安排試車時間
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>姓名 *</FormLabel>
                          <FormControl>
                            <Input placeholder="請輸入您的姓名" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>電話 *</FormLabel>
                            <FormControl>
                              <Input placeholder="9123 4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>電郵 *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="example@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="bikeInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>感興趣的車款 *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="請選擇車款" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="all">所有車款</SelectItem>
                              {products.map((product) => (
                                <SelectItem key={product.id} value={product.id}>
                                  {product.name} - {product.category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>預約日期 *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>訊息內容 *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="請告訴我們您的需求或問題"
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span>
                          提交中...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          提交預約
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">聯絡資訊</CardTitle>
                <CardDescription>
                  歡迎親臨門市或透過以下方式聯絡我們
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">為何選擇 Bike Republic？</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">獨家代理</span> - 香港唯一授權代理商
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">專業團隊</span> - 資深技師提供專業建議
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">原廠保養</span> - 原廠零件與保養服務
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Bike Fitting</span> - 專業調校服務
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
