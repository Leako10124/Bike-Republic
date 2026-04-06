import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS } from '@/lib/index';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: '爬坡型', path: `${ROUTE_PATHS.PRODUCTS}?category=climbing` },
    { name: '破風型', path: `${ROUTE_PATHS.PRODUCTS}?category=aero` },
    { name: '耐力型', path: `${ROUTE_PATHS.PRODUCTS}?category=endurance` },
  ];

  const navLinks = [
    { name: '首頁', path: ROUTE_PATHS.HOME },
    { name: '品牌專區', path: ROUTE_PATHS.BRAND },
    { name: '經銷網絡', path: ROUTE_PATHS.DEALERS },
    { name: '服務項目', path: ROUTE_PATHS.SERVICES },
    { name: '聯絡我們', path: ROUTE_PATHS.CONTACT },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold tracking-tight"
              >
                <span className="text-primary">Bike</span>
                <span className="text-foreground">Republic</span>
              </motion.div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    產品分類
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.path} asChild>
                      <Link
                        to={category.path}
                        className="w-full cursor-pointer"
                      >
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to={ROUTE_PATHS.CONTACT}>預約試車</Link>
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}

                  <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                    產品分類
                  </div>
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-8 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}

                  <div className="pt-4">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link
                        to={ROUTE_PATHS.CONTACT}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        預約試車
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: `${headerHeight}px` }} className="flex-1">
        {children}
      </main>

      <footer className="bg-card border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="text-primary">Bike</span>
                <span className="text-foreground">Republic</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                香港知名公路車品牌獨家代理商，專為追求速度與破風表現的本地單車發燒友，提供最齊全的車款、頂級原廠保養及 Bike Fitting 諮詢服務。
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">快速連結</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">產品分類</h4>
              <ul className="space-y-2">
                {productCategories.map((category) => (
                  <li key={category.path}>
                    <Link
                      to={category.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">聯絡資訊</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>電話: +852 1234 5678</li>
                <li>電郵: info@bikerepublic.hk</li>
                <li>地址: 香港九龍旺角道123號</li>
              </ul>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiX className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Bike Republic. 版權所有。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
