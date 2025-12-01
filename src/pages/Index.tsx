import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const crafts = [
  { id: 1, name: 'Керамика', icon: 'Sparkles' },
  { id: 2, name: 'Текстиль', icon: 'Scissors' },
  { id: 3, name: 'Дерево', icon: 'Trees' },
  { id: 4, name: 'Вязание', icon: 'Wind' },
  { id: 5, name: 'Мыловарение', icon: 'Flower' },
  { id: 6, name: 'Вышивка', icon: 'Star' }
];

const masters = [
  {
    id: 1,
    name: 'Анна Березина',
    craft: 'Керамика',
    description: 'Создаю уникальную керамическую посуду в природных тонах',
    image: 'https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg',
    tags: ['посуда', 'декор', 'эко']
  },
  {
    id: 2,
    name: 'Мария Ивлева',
    craft: 'Текстиль',
    description: 'Ручное ткачество из натуральных материалов',
    image: 'https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg',
    tags: ['лён', 'хлопок', 'натуральное']
  },
  {
    id: 3,
    name: 'Дмитрий Кедров',
    craft: 'Дерево',
    description: 'Деревянная утварь и декор ручной работы',
    image: 'https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg',
    tags: ['мебель', 'кухня', 'массив']
  },
  {
    id: 4,
    name: 'Елена Травникова',
    craft: 'Вязание',
    description: 'Вязаные изделия из шерсти и альпаки',
    image: 'https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg',
    tags: ['одежда', 'аксессуары', 'тепло']
  },
  {
    id: 5,
    name: 'Ольга Медова',
    craft: 'Мыловарение',
    description: 'Натуральное мыло с травами и маслами',
    image: 'https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg',
    tags: ['косметика', 'уход', 'травы']
  },
  {
    id: 6,
    name: 'Софья Нитяева',
    craft: 'Вышивка',
    description: 'Вышивка гладью на льняных изделиях',
    image: 'https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg',
    tags: ['декор', 'текстиль', 'орнамент']
  }
];

const articles = [
  {
    id: 1,
    title: 'Как начать работу с глиной',
    excerpt: 'Первые шаги в керамике: выбор материала и инструментов',
    category: 'Керамика',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'Экологичные красители для ткани',
    excerpt: 'Натуральные способы окрашивания текстиля растениями',
    category: 'Текстиль',
    readTime: '7 мин'
  },
  {
    id: 3,
    title: 'Обработка дерева без химии',
    excerpt: 'Природные масла и воски для защиты древесины',
    category: 'Дерево',
    readTime: '6 мин'
  }
];

export default function Index() {
  const [selectedCraft, setSelectedCraft] = useState<string>('Все');

  const filteredMasters = selectedCraft === 'Все' 
    ? masters 
    : masters.filter(m => m.craft === selectedCraft);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Ремесла</h1>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#articles" className="text-foreground hover:text-primary transition-colors">Статьи</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Мир рукоделия и природы
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Откройте для себя уникальные изделия ручной работы от мастеров, 
              которые создают красоту из натуральных материалов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {crafts.map((craft, index) => (
              <Card 
                key={craft.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon name={craft.icon} size={32} className="mx-auto mb-3 text-accent" />
                  <p className="font-medium text-foreground">{craft.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Каталог мастеров</h2>
            <p className="text-lg text-muted-foreground">Выберите вид ремесла</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedCraft === 'Все' ? 'default' : 'outline'}
              onClick={() => setSelectedCraft('Все')}
              className="rounded-full"
            >
              Все
            </Button>
            {crafts.map(craft => (
              <Button
                key={craft.id}
                variant={selectedCraft === craft.name ? 'default' : 'outline'}
                onClick={() => setSelectedCraft(craft.name)}
                className="rounded-full"
              >
                {craft.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMasters.map((master, index) => (
              <Card 
                key={master.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={master.image} 
                    alt={master.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3" variant="secondary">{master.craft}</Badge>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{master.name}</h3>
                  <p className="text-muted-foreground mb-4">{master.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {master.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Статьи и вдохновение</h2>
            <p className="text-lg text-muted-foreground">Узнайте больше о ремеслах и экологичном образе жизни</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4" variant="secondary">{article.category}</Badge>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {article.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-3xl font-bold mb-4">Присоединяйтесь к сообществу</h3>
          <p className="text-lg mb-6 opacity-90">
            Делитесь своими работами и вдохновляйтесь творчеством других мастеров
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            Стать мастером
          </Button>
        </div>
      </footer>
    </div>
  );
}
