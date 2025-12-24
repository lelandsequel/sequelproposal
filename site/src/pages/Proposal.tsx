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
  IconHome,
  IconCheck
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Proposal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-32">
      {/* Slide 1: Executive Summary */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.heritageoflakegeorge.com/wp-content/uploads/2019/04/photos-page.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge variant="outline" className="text-sm px-4 py-1 border-white/40 text-white uppercase tracking-widest bg-white/10 backdrop-blur-sm font-semibold">
            Proposal for The Heritage of Lake George
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
            Dominating the <span className="text-blue-300 drop-shadow-md">Digital Landscape</span> of Lake George Village
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
            A fully functional high-performance engine designed to outperform every competitor in Lake George.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 text-sm font-bold text-slate-200 uppercase tracking-wider">
            <span>Presentation by C&L Strategy</span>
            <span className="hidden md:inline">•</span>
            <span>cl-strategy.com</span>
          </div>
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
          <IconArrowRight className="rotate-90 text-slate-600 w-10 h-10 drop-shadow-sm" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-32 -mt-20 relative z-20">
        
        {/* Slide 2: The Challenge */}
        <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6 bg-white/50 backdrop-blur-sm p-4 rounded-r-lg border-l-blue-600">
            <h2 className="text-3xl font-extrabold mb-2 text-slate-900">The Challenge: The "Digital Brochure" Problem</h2>
            <p className="text-xl text-slate-700 font-medium">Why Your Current Website is Costing You Bookings</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <IconUsers className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Passive vs. Active</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-lg leading-relaxed font-medium">
                Your current site waits for people who already know your name. A modern site must actively hunt for new guests via search.
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <IconRocket className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Performance Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-lg leading-relaxed font-medium">
                Modern travelers abandon sites that take &gt;3s to load. We’ve built this prototype to load in under 1 second.
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <IconSearch className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Invisibility</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-lg leading-relaxed font-medium">
                You are missing out on thousands of searches for "Hotels near Shepard Park" because those pages don't exist yet.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Slide 3: The Solution */}
        <section className="space-y-8">
           <div className="border-l-4 border-primary pl-6 bg-slate-100/50 p-4 rounded-r-lg border-l-blue-600">
            <h2 className="text-3xl font-extrabold mb-2 text-slate-900">The Solution: The 2026 Infrastructure</h2>
            <p className="text-xl text-slate-700 font-medium">Built for Speed, Conversion, and Scale</p>
          </div>
          <Card className="bg-slate-900 text-slate-50 overflow-hidden shadow-2xl border-slate-800">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <IconCpu className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">Modern Tech Stack</h3>
                      <p className="text-slate-300 text-lg mt-1 font-medium">Using Bun & Hono (the gold standard for speed) to ensure the smoothest booking experience in the village.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <IconTarget className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">Conversion-Centric</h3>
                      <p className="text-slate-300 text-lg mt-1 font-medium">Every page is a funnel. The "Book Now" path is never more than one click away.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 p-8 md:p-12 flex items-center justify-center border-l border-slate-700/50">
                 <div className="text-center space-y-4">
                    <p className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white drop-shadow-lg">
                      &lt;1s
                    </p>
                    <p className="text-slate-300 uppercase tracking-widest font-bold text-xl">Load Time</p>
                 </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Slide 4 & 5: pSEO & AEO */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <div className="border-l-4 border-primary pl-6 border-l-blue-600">
              <h2 className="text-2xl font-bold mb-2 text-slate-900">The Neighborhood Engine (pSEO)</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-bold px-3 py-1">102 Pages Built</Badge>
            </div>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              We have programmatically generated 102 dedicated landing pages that target specific local intent. While competitors fight for "Lake George Hotels," you will own the results for every landmark.
            </p>
            <ul className="space-y-3">
              {[
                "Shepard Park (Concerts & Events)",
                "Million Dollar Beach (Family Travel)",
                "Adirondack Winery (Couples & Tasting)",
                "Fort William Henry (History & Weddings)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-slate-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <IconMapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-bold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
             <div className="border-l-4 border-primary pl-6 border-l-blue-600">
              <h2 className="text-2xl font-bold mb-2 text-slate-900">AEO: Winning AI Search</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-bold px-3 py-1">Voice Search Ready</Badge>
            </div>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              When a user asks, "Where is a family-friendly motel with a fire pit in Lake George?", our AEO structure ensures you are the #1 recommended result.
            </p>
             <Card className="bg-white border-2 border-slate-300 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <div className="shrink-0">
                     <IconMessageCircle className="w-10 h-10 text-blue-500 fill-blue-50" />
                  </div>
                  <div className="space-y-3">
                    <p className="font-serif italic text-slate-800 text-xl leading-relaxed">"According to my sources, The Heritage of Lake George is the top choice for families needing a pool and fire pit..."</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      ChatGPT / Gemini / Siri
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Slide 6: Narrative */}
         <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6 border-l-blue-600">
            <h2 className="text-3xl font-extrabold mb-2 text-slate-900">The "Park & Walk" Narrative</h2>
            <p className="text-xl text-slate-700 font-medium">Marketing Your Unfair Advantage</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 shadow-lg p-6 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 mx-auto">
                 <IconWalk className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl text-slate-900 text-center mb-3">Walkability</h3>
               <p className="text-slate-700 text-center font-medium leading-relaxed">Mapping out the 5-minute walk to dining and arcades. "Park Your Car, Experience the Village."</p>
            </Card>
             <Card className="bg-white border-slate-200 shadow-lg p-6 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 mx-auto">
                 <IconConfetti className="w-8 h-8" /> 
               </div>
               <h3 className="font-bold text-xl text-slate-900 text-center mb-3">Family Value</h3>
               <p className="text-slate-700 text-center font-medium leading-relaxed">Highlighting the gazebo, grills, and s'mores—the "tradition" that brings families back.</p>
            </Card>
             <Card className="bg-white border-slate-200 shadow-lg p-6 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 mx-auto">
                 <IconHome className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl text-slate-900 text-center mb-3">Versatility</h3>
               <p className="text-slate-700 text-center font-medium leading-relaxed">Positioning your mix of motel rooms, cottages, and house rentals as the solution for any group.</p>
            </Card>
          </div>
        </section>

        {/* Slide 7: Roadmap */}
        <section className="space-y-8">
           <div className="border-l-4 border-primary pl-6 border-l-blue-600">
            <h2 className="text-3xl font-extrabold mb-2 text-slate-900">Implementation Roadmap</h2>
            <p className="text-xl text-slate-700 font-medium">From Prototype to Production</p>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-200">
             {[
               { title: "Phase 1: Prototype", desc: "Live functional prototype and 100+ page pSEO infrastructure.", status: "Complete" },
               { title: "Phase 2: Content Expansion", desc: "Adding rich media to all landmark guides.", status: "Pending" },
               { title: "Phase 3: Integration", desc: "Connecting to your booking engine and syncing with Google My Business.", status: "Pending" },
               { title: "Phase 4: Dominance", desc: "Quarterly SEO updates to capture seasonal events.", status: "Pending" }
             ].map((phase, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${phase.status === 'Complete' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {phase.status === 'Complete' ? <IconCheck className="w-6 h-6" /> : <span className="font-bold">{i + 1}</span>}
                  </div>
                  <Card className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 shadow-md border-slate-200 ${phase.status === 'Complete' ? 'border-l-4 border-l-green-500 bg-green-50/50' : 'bg-white'}`}>
                    <div className="flex justify-between items-center mb-3">
                       <span className="font-bold text-xl text-slate-900">{phase.title}</span>
                       {phase.status === "Complete" && <Badge className="bg-green-600 hover:bg-green-700 text-white px-3">Complete</Badge>}
                    </div>
                    <p className="text-base text-slate-700 font-medium">{phase.desc}</p>
                  </Card>
                </div>
             ))}
          </div>
        </section>

         {/* Slide 8: Conclusion */}
        <section className="py-24 text-center space-y-8 bg-slate-100 rounded-3xl p-12 shadow-inner border border-slate-200">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Ready to Own the Map?</h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
            The prototype is live. This isn't a cost; it's a digital asset that works 24/7 to fill your rooms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
             <Button 
              size="lg" 
              className="text-xl px-10 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all bg-blue-600 hover:bg-blue-700 text-white font-bold"
              onClick={() => navigate("/preview")}
            >
              <IconRocket className="w-6 h-6 mr-2" />
              Explore the Prototype
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-10 py-8 rounded-full border-2 border-slate-300 hover:bg-white hover:border-slate-400 text-slate-700 font-bold"
            >
              Schedule Implementation Call
            </Button>
          </div>
          <div className="pt-12 text-slate-500 text-sm tracking-[0.2em] uppercase font-bold">
            © 2026 C&L Strategy • cl-strategy.com
          </div>
        </section>

      </div>
    </div>
  );
}





