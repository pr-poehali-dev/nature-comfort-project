import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const categories = [
  { id: "all", name: "Все", icon: "Sparkles" },
  { id: "ceramics", name: "Керамика", icon: "Droplet" },
  { id: "textile", name: "Текстиль", icon: "Scissors" },
  { id: "wood", name: "Дерево", icon: "Trees" },
  { id: "jewelry", name: "Украшения", icon: "Gem" },
  { id: "eco", name: "Эко-товары", icon: "Leaf" },
];

const articles = [
  {
    id: 1,
    title: "Гончарное дело: с чего начать",
    excerpt: "Основы работы с глиной и первые шаги в керамике для начинающих мастеров",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg",
    category: "ceramics",
    date: "15 ноября 2024",
  },
  {
    id: 2,
    title: "Натуральные красители для тканей",
    excerpt: "Как создавать экологичные красители из растений и минералов",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg",
    category: "textile",
    date: "10 ноября 2024",
  },
  {
    id: 3,
    title: "Работа с деревом: инструменты мастера",
    excerpt: "Обзор базовых инструментов для деревообработки и уход за ними",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg",
    category: "wood",
    date: "5 ноября 2024",
  },
];

const masters = [
  {
    id: 1,
    name: "Мария Глинина",
    craft: "Керамика",
    specialty: "Посуда ручной работы",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg",
    works: 47,
    category: "ceramics",
  },
  {
    id: 2,
    name: "Анна Льняная",
    craft: "Текстиль",
    specialty: "Эко-одежда и аксессуары",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg",
    works: 32,
    category: "textile",
  },
  {
    id: 3,
    name: "Петр Древов",
    craft: "Дерево",
    specialty: "Мебель и декор",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg",
    works: 28,
    category: "wood",
  },
  {
    id: 4,
    name: "Екатерина Златова",
    craft: "Украшения",
    specialty: "Украшения из эпоксидной смолы",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg",
    works: 56,
    category: "jewelry",
  },
  {
    id: 5,
    name: "Ольга Зеленая",
    craft: "Эко-товары",
    specialty: "Натуральная косметика",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg",
    works: 41,
    category: "eco",
  },
  {
    id: 6,
    name: "Дмитрий Кожин",
    craft: "Кожевенное дело",
    specialty: "Сумки и кошельки",
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg",
    works: 39,
    category: "all",
  },
];

const galleryItems = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg",
    title: "Керамическая ваза",
    master: "Мария Глинина",
    category: "ceramics",
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg",
    title: "Льняная скатерть",
    master: "Анна Льняная",
    category: "textile",
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg",
    title: "Деревянная шкатулка",
    master: "Петр Древов",
    category: "wood",
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg",
    title: "Керамические чаши",
    master: "Мария Глинина",
    category: "ceramics",
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg",
    title: "Вышитая подушка",
    master: "Анна Льняная",
    category: "textile",
  },
  {
    id: 6,
    image: "https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg",
    title: "Разделочная доска",
    master: "Петр Древов",
    category: "wood",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMasters = masters.filter((master) => {
    const matchesCategory = selectedCategory === "all" || master.category === selectedCategory;
    const matchesSearch = master.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         master.craft.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredGallery = galleryItems.filter((item) =>
    selectedCategory === "all" || item.category === selectedCategory
  );

  const filteredArticles = articles.filter((article) =>
    selectedCategory === "all" || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Ремесла</h1>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection("home")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "home" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection("gallery")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "gallery" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => setActiveSection("articles")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "articles" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Статьи
              </button>
              <button
                onClick={() => setActiveSection("masters")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "masters" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Мастера
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === "home" && (
        <>
          <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary/20" />
              <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 animate-fade-in">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full">
                    <Icon name="Sparkles" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Творчество • Природа • Гармония</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1]">
                    Мир рукоделия
                    <span className="block text-primary mt-2">и экологичной жизни</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                    Вдохновляйтесь работами талантливых мастеров, создавайте уникальные вещи своими руками и живите в гармонии с природой
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      size="lg"
                      onClick={() => setActiveSection("gallery")}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <Icon name="Eye" size={20} className="mr-2" />
                      Смотреть работы
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setActiveSection("masters")}
                      className="border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all"
                    >
                      <Icon name="Users" size={20} className="mr-2" />
                      Наши мастера
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">250+</div>
                      <div className="text-sm text-muted-foreground">Работ мастеров</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Талантливых мастеров</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Полезных статей</div>
                    </div>
                  </div>
                </div>

                <div className="relative lg:block hidden">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src="https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg"
                          alt="Керамика"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src="https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/15f9c105-c8f1-4d4e-9580-15ac33b935ae.jpg"
                          alt="Текстиль"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src="https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/aaddcd6e-b53a-4dc7-81ac-5b2ad1b92dc5.jpg"
                          alt="Дерево"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src="https://cdn.poehali.dev/projects/3d399d97-fa3c-4cee-a287-690e3e6b045a/files/ae9cd7a9-315d-466f-ac69-5c7fd1a8d86f.jpg"
                          alt="Ремесла"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold">Виды ремесел</h3>
                <p className="text-muted-foreground text-lg">
                  Откройте для себя разнообразие традиционных и современных техник
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {categories.slice(1).map((category, index) => (
                  <Card
                    key={category.id}
                    className="group hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-border bg-card animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setActiveSection("gallery");
                    }}
                  >
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={category.icon} size={28} className="text-primary" />
                      </div>
                      <p className="font-semibold text-base">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 px-4">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-bold">Последние статьи</h3>
                  <p className="text-muted-foreground text-lg">Полезные знания от опытных мастеров</p>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setActiveSection("articles")}
                  className="border-primary text-primary hover:bg-primary/10 group"
                >
                  Все статьи
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-border animate-fade-in hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        <span>{article.date}</span>
                      </div>
                      <h4 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-lg">
                  <Icon name="Leaf" size={16} className="text-primary" />
                  <span className="text-sm font-medium">Присоединяйтесь к сообществу</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  Станьте частью нашего мира <span className="text-primary">творчества</span>
                </h3>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Делитесь своими работами, находите вдохновение и общайтесь с единомышленниками
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    onClick={() => setActiveSection("masters")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Стать мастером
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    <Icon name="Mail" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === "gallery" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Галерея работ</h2>
              <p className="text-muted-foreground">Вдохновляющие работы мастеров со всей страны</p>
            </div>

            <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon name={category.icon} size={16} className="mr-2" />
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-border"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.master}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "articles" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Статьи и советы</h2>
              <p className="text-muted-foreground">Полезные материалы для мастеров и начинающих</p>
            </div>

            <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon name={category.icon} size={16} className="mr-2" />
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-border"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Calendar" size={14} />
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-xl font-semibold">{article.title}</h4>
                    <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                    <Button variant="ghost" className="w-full text-primary hover:text-primary/80 hover:bg-primary/10">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "masters" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Каталог мастеров</h2>
              <p className="text-muted-foreground mb-6">Найдите мастеров по виду ремесла</p>
              
              <div className="max-w-md">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Поиск по имени или ремеслу..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon name={category.icon} size={16} className="mr-2" />
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMasters.map((master) => (
                <Card
                  key={master.id}
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-border"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={master.image}
                      alt={master.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{master.name}</h4>
                      <p className="text-sm text-primary font-medium">{master.craft}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{master.specialty}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                      <Icon name="Briefcase" size={16} />
                      <span>{master.works} работ</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMasters.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Мастера не найдены. Попробуйте другой поиск.</p>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="bg-card border-t border-border py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Leaf" size={24} className="text-primary" />
                <span className="font-bold text-lg">Ремесла</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Блог о рукоделии, мастерах и экологичном образе жизни
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setActiveSection("home")} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => setActiveSection("gallery")} className="hover:text-primary transition-colors">Галерея</button></li>
                <li><button onClick={() => setActiveSection("articles")} className="hover:text-primary transition-colors">Статьи</button></li>
                <li><button onClick={() => setActiveSection("masters")} className="hover:text-primary transition-colors">Мастера</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ремесла</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {categories.slice(1, 5).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setActiveSection("gallery");
                      }}
                      className="hover:text-primary transition-colors"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@remesla.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Ремесла. Создано с любовью к природе и ручной работе</p>
          </div>
        </div>
      </footer>
    </div>
  );
}