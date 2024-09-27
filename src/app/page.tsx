import Testimonials from "@/components/customComp/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features, howItWorks } from "@/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* <!-- hero section --> */}
      <div className="mb-24 flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="gradient-title pb-6 text-7xl font-extrabold">
            Simplify Your Scheduling
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            Schedulrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="/poster.png"
              alt="Scheduling illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* <!-- Key Features Section  --> */}
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index: number) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="mx-auto mb-4 h-12 w-12 text-blue-500" />
                <CardTitle className="text-center text-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* <!-- Testimonials Section  --> */}
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          What Our Users Say
        </h2>
        <Testimonials />
      </div>
      {/* <!-- How It Works Section  --> */}
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index: number) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-xl font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- CTA Section  --> */}{" "}
      <div className="rounded-lg bg-blue-600 p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Simplify Your Scheduling?
        </h2>
        <p className="mb-6 text-xl">
          Join thousands of professionals who trust Schedulrr for efficient time
          management.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
