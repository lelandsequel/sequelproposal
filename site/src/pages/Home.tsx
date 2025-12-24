import {
  IconWaves,
  IconFlame,
  IconWalk,
  IconMapPin,
  IconCheck,
  IconPool,
  IconHome,
  IconConfetti,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import accommodations from "../data/accommodations.json";
import landmarks from "../data/landmarks.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://www.heritageoflakegeorge.com/wp-content/uploads/2019/04/photos-page.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary">
            <IconMapPin className="mr-1 size-3" />
            Heart of Lake George Village
          </Badge>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            Tradition, Value & <br />
            <span className="text-primary italic">Adirondack Hospitality</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
            Immaculate motel rooms, cozy cottages, and spacious house rentals. 
            Walk to beaches, shops, and dining. Experience Lake George as it was meant to be.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 px-8 text-lg font-bold">
              Book Your 2026 Stay
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              Explore Accommodations
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">30+</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Years of Tradition</div>
          </div>
          <div>
            <div className="text-4xl font-bold">419</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Canada Street</div>
          </div>
          <div>
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Smoke Free</div>
          </div>
          <div>
            <div className="text-4xl font-bold">Heated</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Outdoor Pool</div>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Your Home Away From Home</h2>
          <p className="text-lg text-muted-foreground">Choose the perfect space for your Lake George getaway.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {accommodations.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:border-primary transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {item.features.map(f => (
                    <li key={f} className="flex items-center text-sm gap-2">
                      <IconCheck className="size-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">View Rates</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* pSEO Landmarks Section (The Secret Sauce) */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">Ideally Located for Every Adventure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're here for the Americade motorcycle rally, a wedding at Fort William Henry, 
              or just a quiet family beach week, we are the central hub for your activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landmarks.slice(0, 6).map((item) => (
              <Link key={item.slug} to={`/guide/${item.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-primary/10 hover:border-primary/40 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <IconMapPin className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.distance}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{item.landmark}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{item.content}</p>
                    <Button variant="link" className="px-0 mt-4 text-primary">View Neighborhood Guide →</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              + {landmarks.length - 6} more local guides available via search and site map.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <IconPool className="size-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Heated Outdoor Pool</h3>
            <p className="text-muted-foreground">Relax in our sparkling clean, heated pool surrounded by comfortable lounge chairs.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <IconFlame className="size-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Nightly Fire Pit</h3>
            <p className="text-muted-foreground">Enjoy our outdoor fire pit. Complimentary s'mores kits available for the kids!</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <IconWalk className="size-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Park & Walk</h3>
            <p className="text-muted-foreground">Forget the parking hassle. Walk to all village attractions, restaurants, and beaches.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <img 
              src="https://www.heritageoflakegeorge.com/wp-content/uploads/2016/02/logo-heritage.png" 
              alt="Heritage Logo" 
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="max-w-xs text-muted-foreground mb-6">
              Your top choice for Lake George lodging since the 1980s. Family-owned and operated with pride.
            </p>
            <div className="flex gap-4">
              <IconConfetti className="size-6 text-primary" />
              <span className="font-semibold">S'mores Kits Included!</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Explore</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Motel Rooms</Link></li>
              <li><Link to="/">Cottages</Link></li>
              <li><Link to="/">House Rentals</Link></li>
              <li><Link to="/">Amenities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>419 Canada Street</li>
              <li>Lake George, NY 12845</li>
              <li>518-668-3357</li>
              <li><Button variant="default" className="mt-4 w-full">Book Now</Button></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-24 pt-8 border-t text-sm text-muted-foreground flex justify-between">
          <p>© 2026 The Heritage of Lake George. Build by Candle Strategy.</p>
          <div className="flex gap-8">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}




