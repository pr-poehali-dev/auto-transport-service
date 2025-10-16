import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    route: '',
    carType: ''
  });

  const [selectedH1, setSelectedH1] = useState(0);
  const h1Variants = [
    'Доставим ваш автомобиль из Уссурийска во Владивосток за 24 часа — безопасно и с гарантией',
    'Переезд или покупка авто? Перевезем машину по России без повреждений с полным страхованием груза',
    'От 8500₽ за перевозку авто Уссурийск–Владивосток. Доставка точно в срок или компенсация',
    'Нужно перевезти автомобиль по России? Закрытый автовоз, страховка до 2 млн руб. и контроль 24/7',
    'Перевозка авто без переплат и скрытых платежей: честная цена + полис страхования в подарок'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в течение 5 минут');
    setFormData({ name: '', phone: '', route: '', carType: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" className="text-primary" size={32} />
            <span className="font-heading font-bold text-xl text-primary">АВТО АЗРОДИ</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {['process', 'prices', 'services', 'reviews', 'faq'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item === 'process' && 'Как работает'}
                {item === 'prices' && 'Тарифы'}
                {item === 'services' && 'Услуги'}
                {item === 'reviews' && 'Отзывы'}
                {item === 'faq' && 'FAQ'}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Icon name="Phone" size={20} className="text-primary" />
            <span className="font-semibold">+7-XXX-XXX-XX-XX</span>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent hover:bg-accent text-white px-4 py-2 text-sm animate-pulse">
              Доставили 2500+ автомобилей
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {h1Variants[selectedH1]}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
              Безопасно, с гарантией и полным страхованием
            </p>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Автовозы класса люкс и эконом. Работаем по договору с фиксацией сроков. Перевозим легковые авто, кроссоверы и внедорожники по всей России
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => scrollToSection('cta-form')}
              >
                Получить расчет за 5 минут
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection('prices')}
              >
                Смотреть тарифы
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white">
              {[
                { icon: 'BadgeCheck', text: 'Фиксированная цена' },
                { icon: 'Shield', text: 'Страхование без переплат' },
                { icon: 'MapPin', text: 'Трек авто онлайн' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                Пытались самостоятельно организовать доставку машины?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                Знакомая история: поиск надежного автовоза — квест. Обещание низких цен сменяется переплатой в 1,5-2 раза. В итоге: стресс, переплата, риски повреждений.
              </p>
              <Badge variant="destructive" className="text-sm">
                В 2023-2024 стоимость доставки авто выросла в 2+ раза, сроки — непредсказуемы
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'AlertCircle', title: 'Скрытые платежи', text: 'Итоговая цена выше сайта на 70%' },
                { icon: 'ShieldAlert', title: 'Повреждения', text: 'Царапины, сколы, никто не отвечает' },
                { icon: 'Clock', title: 'Задержки', text: 'Привезли через 3 недели вместо 5 дней' }
              ].map((item, idx) => (
                <Card key={idx} className="border-2 border-destructive/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon name={item.icon} className="mx-auto mb-4 text-destructive" size={40} />
                    <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20 mb-12">
              <CardContent className="p-8 text-center">
                <Icon name="Sparkles" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Представьте: вы звоните один раз — и забываете о головной боли
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Оставили заявку, получили фиксированную цену, подписали договор онлайн, все этапы — фото и трекинг, автомобиль — в срок и в идеале.
                </p>
                <p className="text-primary font-semibold italic text-lg">
                  "Вот так должна работать каждая транспортная компания!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Почему 2500+ клиентов доверили нам перевозку
            </h2>
            <p className="text-center text-muted-foreground mb-12">своих автомобилей</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'BadgeCheck', title: 'Честная цена', text: 'с первого звонка' },
                { icon: 'ShieldCheck', title: 'Полное страхование', text: 'до 2 000 000₽' },
                { icon: 'Truck', title: 'Выбор типа', text: 'автовоза' },
                { icon: 'Clock', title: 'Точные сроки', text: 'с компенсацией' },
                { icon: 'Headphones', title: 'Контроль 24/7', text: 'и поддержка' },
                { icon: 'Home', title: 'Доставка', text: 'от двери до двери' }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Icon name={item.icon} className="text-primary mb-4" size={36} />
                    <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '2500+', text: 'авто доставлено без повреждений' },
                { number: '98.7%', text: 'клиентов рекомендуют нас' },
                { number: '5 лет', text: 'на рынке' },
                { number: '24/7', text: 'круглосуточная поддержка' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              Простой процесс: от заявки до получения авто за 5 шагов
            </h2>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: 'FileText', title: 'Заявка', text: 'Расчет за 5 мин' },
                { icon: 'FileSignature', title: 'Договор', text: 'Предоплата 30%' },
                { icon: 'Truck', title: 'Забор авто', text: 'Фотоконтроль' },
                { icon: 'Navigation', title: 'Доставка', text: 'Онлайн-трекинг' },
                { icon: 'CheckCircle', title: 'Приемка', text: 'Остаток оплаты' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-heading font-bold text-primary">{idx + 1}</span>
                      </div>
                      <Icon name={step.icon} className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-heading font-bold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.text}</p>
                    </CardContent>
                  </Card>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Прозрачные тарифы
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Выберите оптимальный вариант для вашего авто
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Эконом',
                  badge: false,
                  carType: 'Открытый автовоз',
                  insurance: '500,000₽',
                  time: '24-36 часов',
                  delivery: '+2,000₽',
                  priceLocal: '8,500₽',
                  priceMoscow: '90,000₽'
                },
                {
                  name: 'Стандарт',
                  badge: true,
                  carType: 'Открытый/закрытый',
                  insurance: '1,000,000₽',
                  time: '24 часов',
                  delivery: 'Включено',
                  priceLocal: '12,000₽',
                  priceMoscow: '105,000₽'
                },
                {
                  name: 'Премиум',
                  badge: false,
                  carType: 'Закрытый автовоз',
                  insurance: '2,000,000₽',
                  time: '12-18 часов',
                  delivery: 'Включено',
                  priceLocal: '18,000₽',
                  priceMoscow: '125,000₽'
                }
              ].map((tariff, idx) => (
                <Card 
                  key={idx} 
                  className={`relative hover:shadow-xl transition-all ${tariff.badge ? 'border-2 border-primary shadow-lg scale-105' : ''}`}
                >
                  {tariff.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-accent text-white">Популярный</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold text-center mb-6">{tariff.name}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Icon name="Truck" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Тип автовоза</p>
                          <p className="text-sm text-muted-foreground">{tariff.carType}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Страхование</p>
                          <p className="text-sm text-muted-foreground">{tariff.insurance}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Время доставки</p>
                          <p className="text-sm text-muted-foreground">{tariff.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Home" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Доставка от двери</p>
                          <p className="text-sm text-muted-foreground">{tariff.delivery}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">GPS-трекинг</p>
                          <p className="text-sm text-muted-foreground">✓ Включено</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Уссурийск—Владивосток</p>
                        <p className="text-3xl font-heading font-bold text-primary">{tariff.priceLocal}</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-1">Владивосток—Москва</p>
                        <p className="text-2xl font-heading font-bold">{tariff.priceMoscow}</p>
                      </div>
                      <Button 
                        className={`w-full ${tariff.badge ? 'bg-accent hover:bg-accent/90' : ''}`}
                        onClick={() => scrollToSection('cta-form')}
                      >
                        Оформить заявку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              * Цена зависит от марки автомобиля и маршрута. Для точного расчета оставьте заявку
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Дополнительные услуги
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'КАСКО', desc: 'До 5 млн₽', price: 'от 2% стоимости авто', icon: 'ShieldCheck', gift: false },
                { name: 'Эвакуация неисправного авто', desc: '', price: '3,000₽', icon: 'Truck', gift: false },
                { name: 'Мойка после доставки', desc: '', price: '1,500₽', icon: 'Sparkles', gift: true },
                { name: 'Перевозка личных вещей', desc: '', price: '2,000₽', icon: 'Package', gift: false },
                { name: 'Хранение на складе', desc: '5 дней бесплатно', price: 'далее 300₽/день', icon: 'Warehouse', gift: false }
              ].map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 relative">
                  {service.gift && (
                    <Badge className="absolute -top-3 -right-3 bg-accent text-white">🎁 Подарок</Badge>
                  )}
                  <CardContent className="p-6">
                    <Icon name={service.icon} className="text-primary mb-4" size={36} />
                    <h3 className="font-heading font-bold text-lg mb-2">{service.name}</h3>
                    {service.desc && <p className="text-sm text-muted-foreground mb-2">{service.desc}</p>}
                    <p className="text-primary font-semibold">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Гарантии безопасности
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'Shield', text: 'Страхование в топовой СК до 25 млн₽' },
                { icon: 'FileText', text: 'Договор с фиксацией условий' },
                { icon: 'DollarSign', text: 'Компенсация за опоздание 500₽/день' },
                { icon: 'Camera', text: 'Фото/видеофиксация состояния авто' },
                { icon: 'Scale', text: 'Юридическая защита' }
              ].map((guarantee, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <Icon name={guarantee.icon} className="text-primary flex-shrink-0" size={32} />
                  <p className="font-medium">{guarantee.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Отзывы клиентов
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: 'Забрали прямо от подъезда, привезли через 20 часов — раньше обещанного! Рекомендую.',
                  client: 'Максим',
                  city: 'Владивосток',
                  car: 'Toyota Camry'
                },
                {
                  text: 'Переезжали в СПб с Hyundai: договор онлайн, закрытый автовоз, идеальное состояние.',
                  client: 'Александр',
                  city: 'Санкт-Петербург',
                  car: 'Hyundai Santa Fe'
                },
                {
                  text: 'Боялись обмана, но всё было честно — цена фикс, GPS-трек. Теперь рекомендую знакомым.',
                  client: 'Елена',
                  city: 'Владивосток',
                  car: 'Nissan X-Trail'
                }
              ].map((review, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="User" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{review.client}</p>
                        <p className="text-sm text-muted-foreground">{review.city}</p>
                        <p className="text-xs text-muted-foreground">{review.car}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: 'Сколько стоит перевозка?',
                  a: 'В среднем 8,500–18,000₽ в зависимости от тарифа и маршрута. Для точного расчета оставьте заявку.'
                },
                {
                  q: 'Какие нужны документы?',
                  a: 'Паспорт, СТС, доверенность — если вы не собственник.'
                },
                {
                  q: 'Можно ли расширить страховку?',
                  a: 'Да, КАСКО до 5 млн₽, доплата 2% от стоимости авто.'
                },
                {
                  q: 'Что если машина повреждена при перевозке?',
                  a: 'Составляется акт, делаются фото — ущерб возмещаем по страховке.'
                },
                {
                  q: 'Как отследить авто?',
                  a: 'Онлайн-трекинг GPS и SMS-уведомления на каждом этапе.'
                },
                {
                  q: 'Есть ли срочная подача?',
                  a: '24 часа — стандарт, от 2 часов — срочно, оплачивается отдельно.'
                },
                {
                  q: 'Есть доставка в выходные и ночью?',
                  a: 'Да, график обсуждается индивидуально.'
                },
                {
                  q: 'Что включает цена?',
                  a: 'Погрузка, крепление, страховка, GPS-трекинг. Доставка "от двери" — доплата.'
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted/50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Остались вопросы?
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Получите бесплатную консультацию от нашего менеджера
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'Phone', title: '+7-XXX-XXX-XX-XX', desc: 'Звонок бесплатный' },
                { icon: 'MessageCircle', title: 'WhatsApp / Telegram', desc: 'Быстрый ответ' },
                { icon: 'Mail', title: 'info@company.ru', desc: 'Ответим в течение часа' },
                { icon: 'MapPin', title: 'Владивосток, ул. Примерная, 10', desc: 'Работаем 24/7' }
              ].map((contact, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.title}</p>
                      <p className="text-sm text-muted-foreground">{contact.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Менеджер ответит за 5 минут, рассчитает стоимость персонально
            </p>
          </div>
        </div>
      </section>

      <section id="cta-form" className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Готовы доверить нам свой автомобиль?
              </h2>
              <p className="text-white/90 text-lg mb-2">
                Оставьте заявку и получите расчет стоимости за 5 минут
              </p>
              <Badge className="bg-accent text-white animate-pulse">
                🔥 За 7 дней — 47 новых заказов
              </Badge>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="route">Маршрут</Label>
                    <Select value={formData.route} onValueChange={(value) => setFormData({ ...formData, route: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите маршрут" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ussuriisk-vladivostok">Уссурийск → Владивосток</SelectItem>
                        <SelectItem value="vladivostok-moscow">Владивосток → Москва</SelectItem>
                        <SelectItem value="vladivostok-spb">Владивосток → Санкт-Петербург</SelectItem>
                        <SelectItem value="custom">Другой маршрут</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="carType">Тип автомобиля</Label>
                    <Select value={formData.carType} onValueChange={(value) => setFormData({ ...formData, carType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип авто" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Седан</SelectItem>
                        <SelectItem value="crossover">Кроссовер</SelectItem>
                        <SelectItem value="suv">Внедорожник</SelectItem>
                        <SelectItem value="minivan">Минивэн</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg">
                    Получить расчет стоимости
                  </Button>
                </form>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Скидка 10% на первую перевозку + бесплатная консультация
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} />
                <span className="font-heading font-bold text-xl">АВТО АЗРОДИ</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональная перевозка автомобилей по России
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                {['Тарифы', 'Услуги', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
                  <li key={item}>
                    <button className="text-white/80 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7-XXX-XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@company.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Владивосток, ул. Примерная, 10
                </p>
                <p className="text-white/60">Работаем 24/7</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4">Мессенджеры</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 АВТО АЗРОДИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
