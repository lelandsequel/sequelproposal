import React from "react";
import { useParams, Link } from "react-router-dom";
import landmarksData from "../../data/landmarks.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconMapPin, IconArrowLeft } from "@tabler/icons-react";

export default function LandmarkPage() {
  const { slug } = useParams();
  const landmark = landmarksData.find((l) => l.slug === slug);

  if (!landmark) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <Link to="/">
          <Button variant="link">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <IconArrowLeft className="mr-2 size-4" />
            Back to Home
          </Button>
        </Link>
        
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary mb-2">
              <IconMapPin className="size-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">Local Landmark Guide</span>
            </div>
            <CardTitle className="text-4xl font-bold">The Heritage of Lake George: Your Ideal {landmark.landmark} Lodging</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg leading-relaxed">
            <div className="bg-primary/5 border-l-4 border-primary p-4 italic">
              "We are located just a {landmark.distance} from {landmark.landmark}."
            </div>
            <p>{landmark.content}</p>
            <p>
              When visiting {landmark.landmark}, why settle for a generic hotel? The Heritage offers 
              Adirondack charm, a heated pool, and nightly fire pits right in the heart of the village. 
              Our location on Canada Street means you can park once and walk to everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="px-8">Book Your Stay</Button>
              <Button size="lg" variant="outline">View Gallery</Button>
            </div>
          </CardContent>
        </Card>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Why Travelers Choose The Heritage near {landmark.landmark}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader><CardTitle className="text-lg">Unbeatable Proximity</CardTitle></CardHeader>
              <CardContent>Just a {landmark.distance} away. Spend more time enjoying and less time driving.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Village Heart</CardTitle></CardHeader>
              <CardContent>Steps from Lake George's best dining, shopping, and nightlife.</CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}



