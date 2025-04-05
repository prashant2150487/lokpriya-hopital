import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  Star,
  Award,
  Building,
  Stethoscope,
  Activity,
  Microscope,
  Thermometer,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/common/Header";
import InfoBar from "@/components/ui/common/InfoBar";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>

      {/* Top Info Bar */}
     <InfoBar/>

      <main className="flex-1">
       
<HeroSection/>
        {/* Emergency Banner */}
        <section className="w-full bg-rose-500 py-4 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 animate-pulse" />
                <div>
                  <h3 className="font-bold text-lg">Emergency Hotline</h3>
                  <p className="text-rose-100">
                    Available 24/7 for urgent care
                  </p>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold">
                1-800-MEDICARE
              </div>
              <Button className="bg-white text-rose-500 hover:bg-rose-100">
                Call Now
              </Button>
            </div>
          </div>
        </section>

        {/* Key Services */}
        <section id="services" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Healthcare Services
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of medical services to meet your
                  healthcare needs with state-of-the-art facilities and expert
                  care
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  title: "Emergency Care",
                  description:
                    "24/7 emergency medical services for critical conditions with rapid response teams",
                  icon: <Clock className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Primary Care",
                  description:
                    "Comprehensive healthcare for patients of all ages, from routine check-ups to chronic disease management",
                  icon: <Users className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Specialized Treatment",
                  description:
                    "Advanced care for specific medical conditions with cutting-edge technology and specialized physicians",
                  icon: <Heart className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Laboratory Services",
                  description:
                    "State-of-the-art diagnostic testing with quick and accurate results for better treatment decisions",
                  icon: <Microscope className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Preventive Care",
                  description:
                    "Proactive health screenings and wellness programs to prevent illness before it starts",
                  icon: <Activity className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Rehabilitation",
                  description:
                    "Comprehensive physical, occupational, and speech therapy to help patients recover and regain independence",
                  icon: <Thermometer className="h-10 w-10 text-rose-500" />,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="#"
                      className="text-rose-500 hover:text-rose-600 text-sm font-medium flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button className="bg-rose-500 hover:bg-rose-600">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Our Departments
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Specialized Medical Departments
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our hospital features specialized departments equipped with
                  advanced technology and staffed by expert medical
                  professionals
                </p>
              </div>
            </div>

            <Tabs defaultValue="cardiology" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-auto">
                <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
                <TabsTrigger value="neurology">Neurology</TabsTrigger>
                <TabsTrigger value="orthopedics">Orthopedics</TabsTrigger>
                <TabsTrigger value="pediatrics">Pediatrics</TabsTrigger>
                <TabsTrigger value="oncology">Oncology</TabsTrigger>
                <TabsTrigger value="gynecology">Gynecology</TabsTrigger>
              </TabsList>

              {[
                {
                  id: "cardiology",
                  title: "Cardiology Department",
                  description:
                    "Our Cardiology Department is equipped with the latest technology for diagnosing and treating heart conditions. Our team of cardiologists are experts in interventional procedures, cardiac rehabilitation, and preventive cardiology.",
                  features: [
                    "Advanced cardiac imaging",
                    "Cardiac catheterization lab",
                    "Electrophysiology studies",
                    "Heart failure clinic",
                    "Cardiac rehabilitation program",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "neurology",
                  title: "Neurology Department",
                  description:
                    "The Neurology Department specializes in disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Our neurologists use advanced diagnostic tools and treatments for conditions ranging from headaches to complex neurological disorders.",
                  features: [
                    "Neuroimaging services",
                    "Epilepsy monitoring unit",
                    "Movement disorders clinic",
                    "Stroke center",
                    "Neuromuscular disease management",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "orthopedics",
                  title: "Orthopedics Department",
                  description:
                    "Our Orthopedics Department provides comprehensive care for musculoskeletal conditions and injuries. From sports injuries to joint replacements, our orthopedic surgeons offer both surgical and non-surgical treatment options.",
                  features: [
                    "Joint replacement surgery",
                    "Sports medicine",
                    "Spine surgery",
                    "Trauma care",
                    "Pediatric orthopedics",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "pediatrics",
                  title: "Pediatrics Department",
                  description:
                    "The Pediatrics Department is dedicated to the health and well-being of infants, children, and adolescents. Our child-friendly environment and specialized pediatricians ensure that young patients receive age-appropriate care.",
                  features: [
                    "Well-child visits",
                    "Pediatric emergency care",
                    "Childhood immunizations",
                    "Developmental assessments",
                    "Pediatric subspecialty care",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "oncology",
                  title: "Oncology Department",
                  description:
                    "Our Oncology Department provides comprehensive cancer care, from diagnosis to treatment and survivorship. Our multidisciplinary team works together to develop personalized treatment plans for each patient.",
                  features: [
                    "Medical oncology",
                    "Radiation therapy",
                    "Surgical oncology",
                    "Clinical trials",
                    "Cancer support services",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  id: "gynecology",
                  title: "Gynecology Department",
                  description:
                    "The Gynecology Department offers comprehensive women's health services, from routine check-ups to specialized treatments. Our gynecologists are committed to providing compassionate care for women at every stage of life.",
                  features: [
                    "Well-woman exams",
                    "Obstetric care",
                    "Gynecologic surgery",
                    "Menopause management",
                    "Reproductive health services",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((dept) => (
                <TabsContent key={dept.id} value={dept.id} className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <img
                        src={dept.image || "/placeholder.svg"}
                        alt={dept.title}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{dept.title}</h3>
                      <p className="text-gray-500">{dept.description}</p>
                      <ul className="space-y-2">
                        {dept.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-rose-500 hover:bg-rose-600 mt-2">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Excellence in Healthcare You Can Trust
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At MediCare Hospital, we are committed to providing
                  exceptional care with a patient-centered approach. Here's why
                  patients choose us for their healthcare needs:
                </p>
                <div className="grid gap-4 mt-6">
                  {[
                    {
                      title: "Expert Medical Team",
                      description:
                        "Board-certified physicians and specialists with years of experience",
                      icon: <Stethoscope className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Advanced Technology",
                      description:
                        "State-of-the-art diagnostic and treatment equipment for precise care",
                      icon: <Activity className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Patient-Centered Care",
                      description:
                        "Personalized treatment plans tailored to individual needs",
                      icon: <Users className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Comprehensive Services",
                      description:
                        "Full range of medical services under one roof for convenience",
                      icon: <Building className="h-6 w-6 text-rose-500" />,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="rounded-full bg-rose-100 p-2 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-video md:aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Medical professionals"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-rose-500" />
                    <span className="font-bold text-sm">
                      Accredited Excellence
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Nationally recognized for quality care and patient safety
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Team */}
        <section id="doctors" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Our Doctors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet Our Expert Physicians
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of highly qualified doctors are committed to
                  providing exceptional care with compassion and expertise
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  specialty: "Cardiology",
                  image: "/placeholder.svg?height=400&width=300",
                  education: "Harvard Medical School",
                  experience: "15+ years experience",
                },
                {
                  name: "Dr. Michael Chen",
                  specialty: "Neurology",
                  image: "/placeholder.svg?height=400&width=300",
                  education: "Johns Hopkins University",
                  experience: "12+ years experience",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  specialty: "Pediatrics",
                  image: "/placeholder.svg?height=400&width=300",
                  education: "Stanford University",
                  experience: "10+ years experience",
                },
                {
                  name: "Dr. James Wilson",
                  specialty: "Orthopedics",
                  image: "/placeholder.svg?height=400&width=300",
                  education: "Yale School of Medicine",
                  experience: "18+ years experience",
                },
              ].map((doctor, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <CardHeader className="p-4">
                    <Badge className="w-fit mb-2 bg-rose-100 text-rose-500 hover:bg-rose-100">
                      {doctor.specialty}
                    </Badge>
                    <CardTitle>{doctor.name}</CardTitle>
                    <CardDescription>{doctor.education}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {doctor.experience}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0"
                    >
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button className="bg-rose-500 hover:bg-rose-600">
                View All Doctors
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Patients Say
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our patients about their experiences and the quality
                  of care they received at MediCare Hospital
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Jennifer Adams",
                  text: "The care I received at MediCare Hospital was exceptional. The doctors were knowledgeable and took the time to explain everything. The nursing staff was compassionate and attentive. I couldn't have asked for better care during my surgery and recovery.",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                  service: "Cardiac Surgery",
                },
                {
                  name: "Robert Thompson",
                  text: "After struggling with chronic pain for years, the specialists at MediCare Hospital finally provided the diagnosis and treatment plan that has given me my life back. The comprehensive approach to care and the follow-up has been outstanding.",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                  service: "Pain Management",
                },
                {
                  name: "Maria Gonzalez",
                  text: "Having my baby at MediCare Hospital was a wonderful experience. The maternity team was supportive throughout my pregnancy and delivery. The facilities were clean and comfortable, and the lactation consultants were incredibly helpful.",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                  service: "Maternity Care",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-left">
                  <CardHeader className="pb-2">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base text-gray-700 italic">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] relative aspect-video lg:aspect-square overflow-hidden rounded-xl order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Medical team"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium">Established 1985</p>
                    <h3 className="text-xl font-bold">
                      35+ Years of Excellence
                    </h3>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Committed to Excellence in Healthcare
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 1985, MediCare Hospital has been providing
                  exceptional healthcare services to our community for over 35
                  years. Our mission is to improve the health and wellbeing of
                  the people we serve through compassionate care and medical
                  excellence.
                </p>
                <p className="text-gray-500">
                  From our humble beginnings as a small clinic, we have grown
                  into a comprehensive medical center with state-of-the-art
                  facilities and a team of dedicated healthcare professionals.
                  Throughout our journey, our commitment to patient-centered
                  care has remained unwavering.
                </p>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">
                      State-of-the-art facilities and equipment
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">
                      Board-certified physicians and specialists
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">
                      Compassionate and experienced nursing staff
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">
                      Cutting-edge research and innovative treatments
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    Our History <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Our Mission</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-rose-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "35+", label: "Years of Service" },
                { number: "50k+", label: "Patients Treated" },
                { number: "200+", label: "Medical Professionals" },
                { number: "25+", label: "Specialized Departments" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-rose-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services,
                  appointments, insurance, and more
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do I schedule an appointment?",
                    answer:
                      "You can schedule an appointment by calling our main appointment line at (123) 456-7890, using our online appointment booking system on our website, or visiting our hospital in person. For specialist appointments, you may need a referral from your primary care physician.",
                  },
                  {
                    question: "What insurance plans do you accept?",
                    answer:
                      "We accept most major insurance plans, including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our billing department at (123) 456-7891 to verify if we accept your specific insurance plan.",
                  },
                  {
                    question: "What should I bring to my appointment?",
                    answer:
                      "Please bring your photo ID, insurance card, list of current medications, medical records or test results relevant to your visit, and any referral forms if required. Arriving 15 minutes before your scheduled appointment time is recommended to complete any necessary paperwork.",
                  },
                  {
                    question: "Do you offer telehealth services?",
                    answer:
                      "Yes, we offer telehealth services for certain types of appointments. Telehealth visits allow you to consult with our healthcare providers from the comfort of your home using a computer, tablet, or smartphone. Please call our appointment line to determine if your medical concern is appropriate for a telehealth visit.",
                  },
                  {
                    question: "What are your visiting hours?",
                    answer:
                      "Our general visiting hours are from 9:00 AM to 8:00 PM daily. However, visiting hours may vary by department, especially for intensive care units and maternity. We recommend checking our website or calling ahead to confirm visiting hours for specific departments.",
                  },
                  {
                    question: "How can I access my medical records?",
                    answer:
                      "You can access your medical records through our patient portal, which allows secure online access to your health information. Alternatively, you can submit a written request to our Medical Records Department. Please note that there may be a processing fee for paper copies of medical records.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">
                Still have questions? Contact our patient support team
              </p>
              <Button className="bg-rose-500 hover:bg-rose-600">
                Contact Support
              </Button>
            </div>
          </div>
        </section>

        {/* News & Health Tips */}
        <section id="news" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Latest Updates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  News & Health Tips
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay informed with the latest hospital news and expert health
                  advice from our medical professionals
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "New Advanced MRI Machine Now Available",
                  excerpt:
                    "We're excited to announce the addition of a new state-of-the-art MRI machine that provides faster, more detailed imaging with enhanced patient comfort.",
                  date: "April 2, 2025",
                  category: "Hospital News",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "5 Tips for Heart Health Month",
                  excerpt:
                    "Our cardiologists share simple lifestyle changes you can make to improve your heart health and reduce your risk of cardiovascular disease.",
                  date: "March 28, 2025",
                  category: "Health Tips",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Community Health Fair Scheduled for June",
                  excerpt:
                    "Join us for our annual Community Health Fair featuring free screenings, health education, family activities, and more.",
                  date: "March 15, 2025",
                  category: "Events",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((article, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="object-cover"
                      fill
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-rose-500">{article.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {article.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button className="bg-rose-500 hover:bg-rose-600">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Appointment Booking */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Book an Appointment
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Schedule Your Visit Today
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step towards better health by scheduling an
                  appointment with our experienced medical professionals. We
                  offer flexible scheduling options to accommodate your busy
                  life.
                </p>
                <div className="grid gap-4 mt-6">
                  {[
                    {
                      title: "Online Booking",
                      description:
                        "Schedule your appointment anytime through our secure online portal",
                      icon: <Calendar className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Phone Scheduling",
                      description:
                        "Call our appointment line at (123) 456-7890",
                      icon: <Phone className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Same-Day Appointments",
                      description:
                        "Urgent care appointments often available for immediate concerns",
                      icon: <Clock className="h-6 w-6 text-rose-500" />,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="rounded-full bg-rose-100 p-2 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle>Request an Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you to confirm
                    your appointment
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium">
                      Department
                    </label>
                    <select
                      id="department"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="primary-care">Primary Care</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Reason for Visit
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">
                    Submit Request
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-rose-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Experience Quality Healthcare?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of medical professionals is ready to provide you and
                  your family with the care you deserve
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-rose-500 hover:bg-rose-100">
                  Book an Appointment
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-rose-600"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Find Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Location
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conveniently located in the heart of Medical City with easy
                  access to public transportation and ample parking
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hospital location map"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-gray-500">
                    123 Healthcare Avenue
                    <br />
                    Medical City, MC 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hours of Operation</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-500">
                    <div>Monday - Friday</div>
                    <div>8:00 AM - 8:00 PM</div>
                    <div>Saturday</div>
                    <div>9:00 AM - 5:00 PM</div>
                    <div>Sunday</div>
                    <div>10:00 AM - 2:00 PM</div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Emergency services available 24/7
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="space-y-2 text-gray-500">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-rose-500" />
                      <span>Main: (123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-rose-500" />
                      <span>Emergency: (123) 456-7999</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-rose-500" />
                      <span>info@medicarehospital.com</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-rose-500 hover:bg-rose-600">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span className="text-xl font-bold">MediCare Hospital</span>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services since 1985. Our mission is
                to improve the health and wellbeing of the people we serve.
              </p>
              <div className="flex items-center gap-4">
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col gap-2 text-gray-400">
                <Link
                  to="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="#departments"
                  className="hover:text-white transition-colors"
                >
                  Departments
                </Link>
                <Link
                  to="#doctors"
                  className="hover:text-white transition-colors"
                >
                  Doctors
                </Link>
                <Link
                  to="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="#news"
                  className="hover:text-white transition-colors"
                >
                  News & Tips
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Our Services</h3>
              <nav className="flex flex-col gap-2 text-gray-400">
                <Link to="#" className="hover:text-white transition-colors">
                  Emergency Care
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Primary Care
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Specialized Treatment
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Laboratory Services
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Preventive Care
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Rehabilitation
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Telemedicine
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Information</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span>
                    123 Healthcare Avenue
                    <br />
                    Medical City, MC 12345
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-rose-500" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-rose-500" />
                  <span>info@medicarehospital.com</span>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-2">
                  Subscribe to our newsletter
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} MediCare Hospital. All rights
              reserved.
            </p>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
