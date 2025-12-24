import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  IconTarget, 
  IconRocket, 
  IconChartBar, 
  IconUsers, 
  IconSearch, 
  IconArrowRight,
  IconMapPin,
  IconCpu,
  IconMessageCircle,
  IconRoad,
  IconWalk,
  IconConfetti,
  IconHome
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Proposal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-32">
      {/* Slide 1: Executive Summary */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-[url('https://www.heritageoflakegeorge.com/wp-content/uploads/2019/04/photos-page.jpg')] bg-cover bg-center opacity-10 grayscale" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge variant="outline" className="text-sm px-4 py-1 border-slate-400 text-slate-600 uppercase tracking-widest bg-white/50 backdrop-blur-sm">
            Proposal for The Heritage of Lake George
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Dominating the <span className="text-primary">Digital Landscape</span> of Lake George Village
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A fully functional high-performance engine designed to outperform every competitor in Lake George.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 text-sm font-medium text-slate-500 uppercase tracking-wider">
            <span>Presentation by C&L Strategy</span>
            <span className="hidden md:inline">•</span>
            <span>cl-strategy.com</span>
          </div>
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
          <IconArrowRight className="rotate-90 text-slate-400 w-8 h-8" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-32">
        
        {/* Slide 2: The Challenge */}
        <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold mb-2">The Challenge: The "Digital Brochure" Problem</h2>
            <p className="text-xl text-slate-500">Why Your Current Website is Costing You Bookings</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg border-slate-100">
              <CardHeader>
                <IconUsers className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Passive vs. Active</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Your current site waits for people who already know your name. A modern site must actively hunt for new guests via search.
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-slate-100">
              <CardHeader>
                <IconRocket className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Performance Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Modern travelers abandon sites that take >3s to load. We’ve built this prototype to load in under 1 second.
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-slate-100">
              <CardHeader>
                <IconSearch className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Invisibility</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                You are missing out on thousands of searches for "Hotels near Shepard Park" because those pages don't exist yet.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Slide 3: The Solution */}
        <section className="space-y-8">
           <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold mb-2">The Solution: The 2026 Infrastructure</h2>
            <p className="text-xl text-slate-500">Built for Speed, Conversion, and Scale</p>
          </div>
          <Card className="bg-slate-900 text-slate-50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <IconCpu className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Modern Tech Stack</h3>
                      <p className="text-slate-400">Using Bun & Hono (the gold standard for speed) to ensure the smoothest booking experience in the village.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <IconTarget className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Conversion-Centric</h3>
                      <p className="text-slate-400">Every page is a funnel. The "Book Now" path is never more than one click away.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 p-8 md:p-12 flex items-center justify-center border-l border-slate-700">
                 <div className="text-center space-y-4">
                    <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                      &lt;1s
                    </p>
                    <p className="text-slate-400 uppercase tracking-widest font-medium">Load Time</p>
                 </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Slide 4 & 5: pSEO & AEO */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <div className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold mb-2">The Neighborhood Engine (pSEO)</h2>
              <Badge variant="secondary">102 Pages Built</Badge>
            </div>
            <p className="text-lg text-slate-600">
              We have programmatically generated 102 dedicated landing pages that target specific local intent. While competitors fight for "Lake George Hotels," you will own the results for every landmark.
            </p>
            <ul className="space-y-3">
              {[
                "Shepard Park (Concerts & Events)",
                "Million Dollar Beach (Family Travel)",
                "Adirondack Winery (Couples & Tasting)",
                "Fort William Henry (History & Weddings)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <IconMapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
             <div className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold mb-2">AEO: Winning AI Search</h2>
              <Badge variant="secondary">Voice Search Ready</Badge>
            </div>
            <p className="text-lg text-slate-600">
              When a user asks, "Where is a family-friendly motel with a fire pit in Lake George?", our AEO structure ensures you are the #1 recommended result.
            </p>
             <Card className="bg-slate-50 border-dashed border-2 border-slate-200">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <IconMessageCircle className="w-8 h-8 text-slate-400" />
                  <div className="space-y-2">
                    <p className="font-serif italic text-slate-600">"According to my sources, The Heritage of Lake George is the top choice for families needing a pool and fire pit..."</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">- ChatGPT / Gemini / Siri</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Slide 6: Narrative */}
         <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold mb-2">The "Park & Walk" Narrative</h2>
            <p className="text-xl text-slate-500">Marketing Your Unfair Advantage</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <IconWalk className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-xl">Walkability</h3>
               <p className="text-slate-600">Mapping out the 5-minute walk to dining and arcades. "Park Your Car, Experience the Village."</p>
            </div>
             <div className="space-y-3">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <IconConfetti className="w-6 h-6" /> 
               </div>
               <h3 className="font-bold text-xl">Family Value</h3>
               <p className="text-slate-600">Highlighting the gazebo, grills, and s'mores—the "tradition" that brings families back.</p>
            </div>
             <div className="space-y-3">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <IconHome className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-xl">Versatility</h3>
               <p className="text-slate-600">Positioning your mix of motel rooms, cottages, and house rentals as the solution for any group.</p>
            </div>
          </div>
        </section>

        {/* Slide 7: Roadmap */}
        <section className="space-y-8">
           <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold mb-2">Implementation Roadmap</h2>
            <p className="text-xl text-slate-500">From Prototype to Production</p>
          </div>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
             {[
               { title: "Phase 1: Prototype", desc: "Live functional prototype and 100+ page pSEO infrastructure.", status: "Complete" },
               { title: "Phase 2: Content Expansion", desc: "Adding rich media to all landmark guides.", status: "Pending" },
               { title: "Phase 3: Integration", desc: "Connecting to your booking engine and syncing with Google My Business.", status: "Pending" },
               { title: "Phase 4: Dominance", desc: "Quarterly SEO updates to capture seasonal events.", status: "Pending" }
             ].map((phase, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-first:bg-green-500 group-first:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {i + 1}
                  </div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                    <div className="flex justify-between items-center mb-2">
                       <span className="font-bold text-slate-900">{phase.title}</span>
                       {phase.status === "Complete" && <Badge className="bg-green-500 hover:bg-green-600">Complete</Badge>}
                    </div>
                    <p className="text-sm text-slate-600">{phase.desc}</p>
                  </Card>
                </div>
             ))}
          </div>
        </section>

         {/* Slide 8: Conclusion */}
        <section className="py-24 text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Ready to Own the Map?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The prototype is live. This isn't a cost; it's a digital asset that works 24/7 to fill your rooms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
             <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={() => navigate("/")}
            >
              Explore the Prototype
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-full"
            >
              Schedule Implementation Call
            </Button>
          </div>
          <div className="pt-16 text-slate-400 text-sm tracking-widest uppercase">
            © 2026 C&L Strategy • cl-strategy.com
          </div>
        </section>

      </div>
    </div>
  );
}


