import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
              Caring for your health
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Providing Quality Healthcare for You and Your Family
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experienced doctors and staff are dedicated to
              providing the highest quality healthcare services with compassion
              and care.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-rose-500 hover:bg-rose-600">
                Book Appointment
              </Button>
              <Button variant="outline">Our Services</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500">50+</div>
                <div className="text-sm text-gray-500">Specialists</div>
              </div>
              <div className="h-10 border-r border-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500">15k+</div>
                <div className="text-sm text-gray-500">Happy Patients</div>
              </div>
              <div className="h-10 border-r border-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500">35+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] relative aspect-video lg:aspect-square overflow-hidden rounded-xl">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Hospital building"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
