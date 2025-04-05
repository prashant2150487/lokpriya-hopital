import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Building,
  Stethoscope,
  Activity,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Target,
  Eye,
  BookOpen,
  Briefcase,
  FileText,
  Microscope,
  GraduationCap,
  Handshake,
  Trophy,
  BarChart,
  Globe,
  CheckCircle,
} from "lucide-react"
import { Link } from "react-router-dom"

const About=()=> {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">MediCare Hospital</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Home
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Services
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Departments
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Doctors
            </Link>
            <Link to="#" className="text-sm font-medium text-rose-500 transition-colors">
              About
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Contact
            </Link>
            <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
              Book Appointment
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Top Info Bar */}
      <div className="w-full bg-gray-100 py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-rose-500" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-rose-500" />
              <span>info@medicarehospital.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-rose-500">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link to="#" className="hover:text-rose-500">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link to="#" className="hover:text-rose-500">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link to="#" className="hover:text-rose-500">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-rose-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">About Us</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Story of Healing</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the journey, mission, and people behind MediCare Hospital's commitment to excellence in
                  healthcare since 1985
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="w-full py-6 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="flex overflow-x-auto pb-2 gap-4 justify-center">
              <Link
                to="#history"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Our History
              </Link>
              <Link
                to="#mission"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Mission & Vision
              </Link>
              <Link
                to="#leadership"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Leadership
              </Link>
              <Link
                to="#facilities"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Facilities
              </Link>
              <Link
                to="#achievements"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Achievements
              </Link>
              <Link
                to="#community"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Community
              </Link>
              <Link
                to="#research"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Research
              </Link>
              <Link
                to="#careers"
                className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section id="history" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Our History</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  A Legacy of Healing Since 1985
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From humble beginnings to becoming a leading healthcare institution, our journey has been defined by a
                  commitment to excellence and compassionate care
                </p>
              </div>
            </div>

            <div className="relative border-l-4 border-rose-200 ml-4 md:ml-0 md:mx-auto md:max-w-4xl pl-8 md:pl-0 space-y-12 md:space-y-0">
              {[
                {
                  year: "1985",
                  title: "Founding of MediCare Clinic",
                  description:
                    "Dr. Robert Johnson and Dr. Elizabeth Chen founded MediCare as a small community clinic with just 15 beds and 5 physicians, dedicated to serving the underserved neighborhoods of Medical City.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1992",
                  title: "Expansion to General Hospital",
                  description:
                    "After seven years of growth, MediCare expanded to a 100-bed general hospital, adding departments for pediatrics, obstetrics, and emergency medicine to meet the growing needs of the community.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2001",
                  title: "Opening of Specialized Care Centers",
                  description:
                    "The hospital opened specialized centers for cardiac care, cancer treatment, and neurology, bringing advanced medical technologies and specialized physicians to the region.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2010",
                  title: "Research & Education Wing",
                  description:
                    "The addition of a dedicated research and education wing established MediCare as a teaching hospital, partnering with leading medical schools to train the next generation of healthcare professionals.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2018",
                  title: "Technological Modernization",
                  description:
                    "A comprehensive technological upgrade brought state-of-the-art diagnostic equipment, electronic health records, and telemedicine capabilities to enhance patient care and operational efficiency.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2023",
                  title: "New Medical Tower & Expansion",
                  description:
                    "The opening of our new medical tower increased capacity to 350 beds and added advanced surgical suites, reflecting our continued commitment to meeting the healthcare needs of our growing community.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:relative`}
                >
                  <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 z-10"></div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <div className="absolute -left-[21px] md:hidden w-4 h-4 rounded-full bg-rose-500"></div>
                    <span className="inline-block text-xl font-bold text-rose-500 mb-2">{milestone.year}</span>
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-500">{milestone.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:w-1/2">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <img
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        className="object-cover"
                        fill
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Button className="bg-rose-500 hover:bg-rose-600">
                Learn More About Our History <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section id="mission" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Our Purpose</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mission, Vision & Values
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The guiding principles that drive our commitment to exceptional healthcare and shape every aspect of
                  our patient care
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-rose-500" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-500">
                    To improve the health and well-being of the communities we serve through compassionate, high-quality
                    care, innovative medical practices, and education for the next generation of healthcare providers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-rose-500" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-500">
                    To be the region's most trusted healthcare provider, recognized nationally for excellence in patient
                    care, medical innovation, and community health improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <CardTitle className="text-2xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <span className="font-medium">Compassion</span> - Treating each patient with kindness and empathy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <span className="font-medium">Excellence</span> - Striving for the highest standards in all we do
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <span className="font-medium">Integrity</span> - Acting with honesty and transparency
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <span className="font-medium">Innovation</span> - Embracing new ideas and technologies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <span className="font-medium">Teamwork</span> - Collaborating for better patient outcomes
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 p-8 bg-rose-500 text-white rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Commitment to Patient Care</h3>
                  <p className="mb-4">
                    At MediCare Hospital, we believe that exceptional healthcare goes beyond medical treatment. It
                    encompasses a holistic approach that addresses the physical, emotional, and spiritual needs of our
                    patients.
                  </p>
                  <p>
                    Our patient-centered care philosophy ensures that every decision we make and every service we
                    provide is guided by what's best for those we serve. We are committed to treating each patient with
                    dignity, respect, and compassion.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="h-6 w-6" />, text: "Patient-Centered Care" },
                    { icon: <BookOpen className="h-6 w-6" />, text: "Evidence-Based Practices" },
                    { icon: <CheckCircle className="h-6 w-6" />, text: "Quality & Safety" },
                    { icon: <Globe className="h-6 w-6" />, text: "Cultural Sensitivity" },
                  ].map((item, index) => (
                    <div key={index} className="bg-rose-600 p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="mb-2">{item.icon}</div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section id="leadership" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Our Leadership
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet the Team Leading Our Vision
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our experienced leadership team brings together diverse expertise to guide MediCare Hospital's mission
                  of excellence in healthcare
                </p>
              </div>
            </div>

            <Tabs defaultValue="executive" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
                <TabsTrigger value="executive">Executive Leadership</TabsTrigger>
                <TabsTrigger value="medical">Medical Leadership</TabsTrigger>
                <TabsTrigger value="board">Board of Directors</TabsTrigger>
              </TabsList>

              <TabsContent value="executive" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Dr. James Wilson",
                      title: "Chief Executive Officer",
                      bio: "Dr. Wilson has led MediCare Hospital for over 15 years, bringing a wealth of experience in healthcare administration and a background in internal medicine. Under his leadership, the hospital has expanded its services and enhanced its reputation for quality care.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Sarah Johnson, MBA",
                      title: "Chief Financial Officer",
                      bio: "With over 20 years of experience in healthcare finance, Sarah has been instrumental in ensuring the hospital's financial stability while supporting its mission to provide accessible, high-quality care to all patients.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Michael Chen",
                      title: "Chief Medical Officer",
                      bio: "Dr. Chen oversees all clinical operations and medical staff affairs. His focus on evidence-based medicine and quality improvement has led to significant enhancements in patient outcomes and safety measures.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Jennifer Rodriguez, RN",
                      title: "Chief Nursing Officer",
                      bio: "Jennifer leads our nursing department with a passion for excellence in patient care. Her initiatives have improved nursing satisfaction and retention while enhancing the quality of care delivered at the bedside.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Robert Thompson",
                      title: "Chief Information Officer",
                      bio: "Robert has spearheaded the hospital's digital transformation, implementing electronic health records and cybersecurity measures that protect patient data while improving the efficiency of care delivery.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Emily Patel",
                      title: "Chief of Quality & Safety",
                      bio: "Dr. Patel leads our quality improvement and patient safety initiatives. Her work has resulted in MediCare Hospital receiving numerous accreditations and recognitions for excellence in healthcare quality.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                  ].map((leader, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative aspect-square w-full">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{leader.name}</CardTitle>
                        <CardDescription className="font-medium text-rose-500">{leader.title}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-gray-500 text-sm">{leader.bio}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0"
                        >
                          View Full Profile
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="medical" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Dr. Elizabeth Taylor",
                      title: "Chief of Surgery",
                      bio: "Dr. Taylor is a renowned surgeon with specialization in minimally invasive techniques. She oversees all surgical departments and has implemented numerous protocols that have improved surgical outcomes.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. David Kim",
                      title: "Chief of Internal Medicine",
                      bio: "With expertise in complex medical conditions, Dr. Kim leads our largest department with a focus on comprehensive care and interdisciplinary collaboration to address patients' diverse needs.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Maria Gonzalez",
                      title: "Chief of Pediatrics",
                      bio: "Dr. Gonzalez has dedicated her career to children's health. Under her leadership, our pediatrics department has expanded its services and earned recognition for excellence in pediatric care.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Thomas Johnson",
                      title: "Chief of Emergency Medicine",
                      bio: "Dr. Johnson's innovations in emergency care protocols have significantly reduced wait times and improved outcomes for critical patients in our emergency department.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Lisa Wong",
                      title: "Chief of Obstetrics & Gynecology",
                      bio: "Dr. Wong has developed comprehensive women's health programs that address needs across the lifespan, from adolescence through menopause and beyond.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Robert Martinez",
                      title: "Chief of Cardiology",
                      bio: "A pioneer in cardiac care, Dr. Martinez has established our heart center as a regional leader in the diagnosis and treatment of cardiovascular diseases.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                  ].map((leader, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative aspect-square w-full">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{leader.name}</CardTitle>
                        <CardDescription className="font-medium text-rose-500">{leader.title}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-gray-500 text-sm">{leader.bio}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0"
                        >
                          View Full Profile
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="board" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Richard Anderson",
                      title: "Board Chair",
                      bio: "As the CEO of a major technology company, Richard brings business acumen and strategic vision to guide the hospital's growth and development.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Patricia Lee",
                      title: "Vice Chair",
                      bio: "A retired surgeon with over 30 years of medical experience, Dr. Lee provides valuable clinical insights to board decisions.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Marcus Williams",
                      title: "Treasurer",
                      bio: "With a background in investment banking, Marcus ensures sound financial governance and long-term sustainability for the hospital.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Elena Rodriguez",
                      title: "Secretary",
                      bio: "A community advocate and nonprofit leader, Elena ensures the hospital remains responsive to the needs of the diverse communities it serves.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Dr. Samuel Thompson",
                      title: "Board Member",
                      bio: "As a professor of public health, Dr. Thompson brings expertise in population health management and healthcare policy.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                    {
                      name: "Grace Chen",
                      title: "Board Member",
                      bio: "A healthcare attorney, Grace provides guidance on regulatory compliance and legal matters affecting the hospital's operations.",
                      image: "/placeholder.svg?height=400&width=300",
                    },
                  ].map((leader, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative aspect-square w-full">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{leader.name}</CardTitle>
                        <CardDescription className="font-medium text-rose-500">{leader.title}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-gray-500 text-sm">{leader.bio}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0"
                        >
                          View Full Profile
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-10">
              <Button className="bg-rose-500 hover:bg-rose-600">Meet Our Full Team</Button>
            </div>
          </div>
        </section>

        {/* Facilities & Technology */}
        <section id="facilities" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Our Facilities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  State-of-the-Art Healthcare Facilities
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our modern facilities designed to provide the highest standard of care in a healing
                  environment
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hospital main building"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Main Hospital Campus</h3>
                <p className="text-gray-500">
                  Our main campus spans over 15 acres and includes our 350-bed inpatient facility, emergency department,
                  surgical center, and outpatient clinics. The campus was designed with patient comfort and healing in
                  mind, featuring abundant natural light, healing gardens, and thoughtful layouts that enhance the
                  patient experience.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">350 Private Patient Rooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">24 Operating Rooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">Level I Trauma Center</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">Healing Gardens</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">Dedicated Pediatric Wing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">Rooftop Helipad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Surgical Innovation Center",
                  description:
                    "Our surgical center features 24 state-of-the-art operating rooms equipped with the latest surgical technologies, including robotic surgical systems, advanced imaging capabilities, and integrated operating suites.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Women's & Children's Pavilion",
                  description:
                    "Dedicated to the unique healthcare needs of women and children, this facility includes labor and delivery suites, a neonatal intensive care unit, pediatric specialty clinics, and family-centered care spaces.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Cancer Treatment Center",
                  description:
                    "Our comprehensive cancer center provides the full spectrum of oncology services, from diagnosis to treatment and survivorship, featuring the latest in radiation therapy technology and infusion centers designed for patient comfort.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((facility, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{facility.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0">
                      Take a Virtual Tour <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Cutting-Edge Medical Technology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-500">
                    At MediCare Hospital, we invest in the latest medical technologies to provide our patients with the
                    most advanced diagnostic and treatment options available. Our commitment to technological innovation
                    enables our medical teams to deliver precise, effective, and minimally invasive care.
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Advanced Imaging Systems",
                        description: "Including 3T MRI, 256-slice CT scanners, and PET/CT for precise diagnosis",
                      },
                      {
                        title: "Robotic Surgical Systems",
                        description:
                          "Enabling minimally invasive procedures with greater precision and faster recovery",
                      },
                      {
                        title: "Integrated Electronic Health Records",
                        description: "Secure, comprehensive patient information accessible to care teams",
                      },
                      {
                        title: "Telemedicine Capabilities",
                        description: "Extending our reach to provide care beyond our physical locations",
                      },
                    ].map((tech, index) => (
                      <div key={index} className="border-l-4 border-rose-500 pl-4">
                        <h4 className="font-bold">{tech.title}</h4>
                        <p className="text-gray-500 text-sm">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { image: "/placeholder.svg?height=200&width=300", alt: "MRI Machine" },
                    { image: "/placeholder.svg?height=200&width=300", alt: "Robotic Surgery System" },
                    { image: "/placeholder.svg?height=200&width=300", alt: "Digital Health Records" },
                    { image: "/placeholder.svg?height=200&width=300", alt: "Telemedicine Setup" },
                  ].map((img, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                      <img src={img.image || "/placeholder.svg"} alt={img.alt} className="object-cover" fill />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Accreditations */}
        <section id="achievements" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Recognition</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Achievements & Accreditations
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our commitment to excellence has been recognized through numerous awards, certifications, and
                  accreditations
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Top 100 Hospitals",
                      organization: "National Healthcare Rankings",
                      year: "2023",
                      description:
                        "Recognized for excellence in clinical outcomes, patient experience, and operational efficiency",
                    },
                    {
                      title: "Excellence in Patient Safety",
                      organization: "Patient Safety Foundation",
                      year: "2022",
                      description:
                        "Awarded for implementing innovative safety protocols that significantly reduced adverse events",
                    },
                    {
                      title: "Best Places to Work in Healthcare",
                      organization: "Healthcare Employment Review",
                      year: "2023",
                      description:
                        "Recognized for employee satisfaction, professional development opportunities, and workplace culture",
                    },
                    {
                      title: "Innovation in Healthcare Technology",
                      organization: "Health Tech Awards",
                      year: "2022",
                      description: "Honored for pioneering the implementation of AI-assisted diagnostic tools",
                    },
                  ].map((award, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="rounded-full bg-rose-100 p-3 h-fit">
                        <Trophy className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold">{award.title}</h4>
                          <Badge className="bg-rose-100 text-rose-500 hover:bg-rose-100">{award.year}</Badge>
                        </div>
                        <p className="text-sm text-rose-500 mb-1">{award.organization}</p>
                        <p className="text-gray-500 text-sm">{award.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Accreditations & Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Joint Commission Accreditation",
                      logo: "/placeholder.svg?height=100&width=200",
                      description: "Gold Seal of Approval for hospital standards",
                    },
                    {
                      name: "Magnet Recognition",
                      logo: "/placeholder.svg?height=100&width=200",
                      description: "Excellence in nursing practice and patient care",
                    },
                    {
                      name: "Stroke Center Certification",
                      logo: "/placeholder.svg?height=100&width=200",
                      description: "Comprehensive stroke treatment capabilities",
                    },
                    {
                      name: "Chest Pain Center Accreditation",
                      logo: "/placeholder.svg?height=100&width=200",
                      description: "Excellence in cardiac care",
                    },
                    {
                      name: "Cancer Center Accreditation",
                      logo: "/placeholder.svg?height=100&width=200",
                      description: "Comprehensive cancer care services",
                    },
                    {
                      name: "Bariatric Surgery Center of Excellence",
                      logo: "/placeholder.svg?height=100&width=200",
                      description: "Specialized weight management services",
                    },
                  ].map((accreditation, index) => (
                    <Card key={index} className="flex flex-col items-center p-4 text-center">
                      <div className="relative h-12 w-full mb-4">
                        <img
                          src={accreditation.logo || "/placeholder.svg"}
                          alt={accreditation.name}
                          className="object-contain"
                          fill
                        />
                      </div>
                      <h4 className="font-bold text-sm mb-1">{accreditation.name}</h4>
                      <p className="text-gray-500 text-xs">{accreditation.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-rose-50 p-8 rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Quality Metrics</h3>
                <p className="text-gray-500">
                  Our commitment to transparency includes sharing our performance on key quality measures
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    metric: "Patient Satisfaction",
                    value: "92%",
                    description: "Patients who rated their care as excellent",
                    icon: <Star className="h-6 w-6 text-rose-500" />,
                  },
                  {
                    metric: "Infection Rate",
                    value: "0.8%",
                    description: "Well below the national average of 3.2%",
                    icon: <Activity className="h-6 w-6 text-rose-500" />,
                  },
                  {
                    metric: "Readmission Rate",
                    value: "4.3%",
                    description: "Lower than the national average of 15.2%",
                    icon: <BarChart className="h-6 w-6 text-rose-500" />,
                  },
                ].map((metric, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{metric.metric}</CardTitle>
                        {metric.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-rose-500 mb-2">{metric.value}</div>
                      <CardDescription>{metric.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section id="community" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Community Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Serving Beyond Our Walls
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our commitment to health extends beyond patient care to improving the wellbeing of the communities we
                  serve
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Community Health Initiatives</h3>
                <p className="text-gray-500">
                  At MediCare Hospital, we believe that true healthcare extends beyond treating illness to preventing
                  disease and promoting wellness throughout our community. Our community health initiatives focus on
                  addressing the social determinants of health and providing resources to underserved populations.
                </p>
                <div className="space-y-4 mt-6">
                  {[
                    {
                      title: "Free Health Screenings",
                      description:
                        "Regular community events offering blood pressure, diabetes, and cholesterol screenings",
                      icon: <Stethoscope className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Health Education Programs",
                      description:
                        "Workshops and classes on nutrition, chronic disease management, and preventive care",
                      icon: <BookOpen className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "School Health Partnerships",
                      description:
                        "Collaborations with local schools to promote health education and provide sports physicals",
                      icon: <GraduationCap className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Mobile Health Clinics",
                      description: "Bringing healthcare services directly to underserved neighborhoods and rural areas",
                      icon: <Building className="h-6 w-6 text-rose-500" />,
                    },
                  ].map((initiative, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="rounded-full bg-rose-100 p-2 mt-1">{initiative.icon}</div>
                      <div>
                        <h4 className="font-bold">{initiative.title}</h4>
                        <p className="text-gray-500">{initiative.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { image: "/placeholder.svg?height=300&width=400", alt: "Community health fair" },
                  { image: "/placeholder.svg?height=300&width=400", alt: "Health education workshop" },
                  { image: "/placeholder.svg?height=300&width=400", alt: "School health program" },
                  { image: "/placeholder.svg?height=300&width=400", alt: "Mobile health clinic" },
                ].map((img, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <img src={img.image || "/placeholder.svg"} alt={img.alt} className="object-cover" fill />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-6">Charitable Foundation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-500">
                    The MediCare Hospital Foundation was established to support our mission of improving community
                    health through philanthropy. The Foundation funds programs that address healthcare disparities,
                    support patient assistance, and advance medical research and education.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <p className="font-medium">$2.5 million in annual community grants</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <p className="font-medium">Patient financial assistance programs</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <p className="font-medium">Medical equipment donations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                      <p className="font-medium">Healthcare workforce development scholarships</p>
                    </div>
                  </div>
                  <Button className="bg-rose-500 hover:bg-rose-600 mt-2">Support Our Foundation</Button>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Foundation event"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Volunteer Program",
                  description:
                    "Join our team of dedicated volunteers who contribute thousands of hours annually to enhance the patient experience and support hospital operations.",
                  cta: "Become a Volunteer",
                  icon: <Users className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Community Partnerships",
                  description:
                    "We collaborate with local organizations, businesses, and government agencies to address community health needs and create sustainable health improvements.",
                  cta: "Our Partners",
                  icon: <Handshake className="h-10 w-10 text-rose-500" />,
                },
                {
                  title: "Annual Impact Report",
                  description:
                    "Transparency in our community efforts is important to us. Our annual impact report details our initiatives, investments, and outcomes in community health.",
                  cta: "View Report",
                  icon: <FileText className="h-10 w-10 text-rose-500" />,
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0">
                      {item.cta} <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Innovation */}
        <section id="research" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Research & Innovation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Advancing Medical Knowledge
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our commitment to research and innovation drives improvements in patient care and contributes to
                  medical advancements
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Research laboratory"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Research Center</h3>
                <p className="text-gray-500">
                  The MediCare Research Center is dedicated to advancing medical knowledge and improving patient
                  outcomes through innovative clinical and translational research. Our multidisciplinary research teams
                  collaborate with academic institutions and industry partners to address the most pressing healthcare
                  challenges.
                </p>
                <p className="text-gray-500">
                  With state-of-the-art laboratories and a dedicated clinical trials unit, we provide our researchers
                  with the resources they need to make groundbreaking discoveries and translate them into improved
                  patient care.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">50+ Active Clinical Trials</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">$15M Annual Research Funding</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">30+ Research Publications</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <p className="font-medium">12 Research Partnerships</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">Current Research Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    area: "Cardiovascular Research",
                    description:
                      "Investigating new treatments for heart failure and developing advanced cardiac imaging techniques",
                    icon: <Heart className="h-8 w-8 text-rose-500" />,
                  },
                  {
                    area: "Cancer Immunotherapy",
                    description:
                      "Developing innovative approaches to harness the immune system to fight various types of cancer",
                    icon: <Activity className="h-8 w-8 text-rose-500" />,
                  },
                  {
                    area: "Neurodegenerative Diseases",
                    description:
                      "Studying the mechanisms of Alzheimer's and Parkinson's diseases to develop new therapeutic strategies",
                    icon: <Microscope className="h-8 w-8 text-rose-500" />,
                  },
                  {
                    area: "Precision Medicine",
                    description:
                      "Tailoring medical treatments to individual patient characteristics based on genetic profiles",
                    icon: <Clipboard className="h-8 w-8 text-rose-500" />,
                  },
                  {
                    area: "Digital Health Technologies",
                    description: "Developing and evaluating mobile health applications and remote monitoring systems",
                    icon: <Globe className="h-8 w-8 text-rose-500" />,
                  },
                  {
                    area: "Healthcare Delivery Science",
                    description: "Improving healthcare quality, safety, and efficiency through systems-level research",
                    icon: <BarChart className="h-8 w-8 text-rose-500" />,
                  },
                ].map((area, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader>
                      <div className="mb-2">{area.icon}</div>
                      <CardTitle>{area.area}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Clinical Trials</h3>
                <p className="text-gray-500 mb-4">
                  Our clinical trials program offers patients access to cutting-edge treatments before they are widely
                  available. Participation in clinical trials not only provides potential benefits to individual
                  patients but also contributes to the advancement of medical knowledge.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      title: "Current Enrolling Trials",
                      content:
                        "We currently have over 50 clinical trials enrolling patients across multiple specialties, including oncology, cardiology, neurology, and endocrinology. Each trial has specific eligibility criteria to ensure patient safety and scientific validity.",
                    },
                    {
                      title: "Patient Benefits",
                      content:
                        "Participants in clinical trials may gain access to new treatments before they are widely available, receive expert medical care, and play an active role in their healthcare. All trial-related care is provided at no cost to participants.",
                    },
                    {
                      title: "How to Participate",
                      content:
                        "If you're interested in participating in a clinical trial, speak with your physician about potential opportunities. Our clinical research coordinators can help determine if there are trials appropriate for your condition and guide you through the enrollment process.",
                    },
                    {
                      title: "Safety and Ethics",
                      content:
                        "All clinical trials at MediCare Hospital are reviewed and approved by our Institutional Review Board to ensure they meet the highest ethical standards. Patient safety is our top priority, with continuous monitoring throughout the trial process.",
                    },
                  ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                      <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button className="bg-rose-500 hover:bg-rose-600 mt-6">View All Clinical Trials</Button>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Innovation & Technology Transfer</h3>
                <p className="text-gray-500 mb-4">
                  Our Innovation Center supports the development and commercialization of new healthcare technologies
                  and approaches developed by our physicians and researchers. We work to translate promising discoveries
                  into solutions that benefit patients worldwide.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Patent Portfolio",
                      description: "Over 25 patents for medical devices, diagnostic tools, and therapeutic approaches",
                    },
                    {
                      title: "Startup Incubator",
                      description: "Supporting physician-entrepreneurs in developing healthcare innovations",
                    },
                    {
                      title: "Industry Partnerships",
                      description:
                        "Collaborations with pharmaceutical and medical device companies to accelerate development",
                    },
                    {
                      title: "Innovation Challenges",
                      description: "Annual competitions to identify and support promising healthcare solutions",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-rose-500 pl-4">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl mt-6">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Innovation center"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Join Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Careers at MediCare Hospital
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build a rewarding career in healthcare with opportunities for growth, learning, and making a
                  difference
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Why Work With Us</h3>
                <p className="text-gray-500">
                  At MediCare Hospital, we believe our employees are our greatest asset. We're committed to creating a
                  supportive, inclusive workplace where talented individuals can thrive professionally while making a
                  meaningful difference in patients' lives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "Competitive Compensation",
                      description: "Salary packages that recognize your skills and experience",
                      icon: <Briefcase className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Comprehensive Benefits",
                      description: "Health, dental, vision, retirement, and paid time off",
                      icon: <Heart className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Professional Development",
                      description: "Continuing education and career advancement opportunities",
                      icon: <GraduationCap className="h-6 w-6 text-rose-500" />,
                    },
                    {
                      title: "Work-Life Balance",
                      description: "Flexible scheduling options and wellness programs",
                      icon: <Clock className="h-6 w-6 text-rose-500" />,
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="rounded-full bg-rose-100 p-2 mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="font-bold">{benefit.title}</h4>
                        <p className="text-gray-500 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img src="/placeholder.svg?height=600&width=800" alt="Hospital staff" className="object-cover" fill />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-6">Current Opportunities</h3>
              <div className="space-y-4">
                {[
                  {
                    position: "Registered Nurse - Emergency Department",
                    type: "Full-time",
                    location: "Main Campus",
                    posted: "2 days ago",
                  },
                  {
                    position: "Physical Therapist",
                    type: "Full-time",
                    location: "Rehabilitation Center",
                    posted: "1 week ago",
                  },
                  {
                    position: "Clinical Research Coordinator",
                    type: "Full-time",
                    location: "Research Center",
                    posted: "3 days ago",
                  },
                  {
                    position: "Medical Technologist",
                    type: "Full-time",
                    location: "Laboratory Services",
                    posted: "5 days ago",
                  },
                  {
                    position: "Patient Care Assistant",
                    type: "Part-time",
                    location: "Women's & Children's Pavilion",
                    posted: "1 day ago",
                  },
                ].map((job, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold">{job.position}</h4>
                        <div className="flex gap-4 text-sm text-gray-500 mt-1">
                          <span>{job.type}</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge className="bg-rose-100 text-rose-500 hover:bg-rose-100">Posted {job.posted}</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 mt-2"
                        >
                          View & Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button className="bg-rose-500 hover:bg-rose-600">View All Job Openings</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Nursing Careers",
                  description:
                    "Join our Magnet-recognized nursing team and be part of a culture that values clinical excellence, professional development, and nurse-led innovation.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Physician Opportunities",
                  description:
                    "Practice medicine in a supportive environment with state-of-the-art facilities, multidisciplinary collaboration, and a focus on work-life balance.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Allied Health Professionals",
                  description:
                    "From physical therapists to laboratory technicians, our allied health professionals are essential members of our healthcare team.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((career, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <img src={career.image || "/placeholder.svg"} alt={career.title} className="object-cover" fill />
                  </div>
                  <CardHeader>
                    <CardTitle>{career.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{career.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0">
                      Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Voices from Our Community</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from patients, staff, and community members about their experiences with MediCare Hospital
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-rose-50 border-none">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic">
                    "After my heart attack, the cardiac team at MediCare Hospital not only saved my life but also helped
                    me make the lifestyle changes needed to prevent future problems. The care I received was
                    exceptional, from the emergency room through cardiac rehabilitation. I'm grateful every day for
                    their expertise and compassion."
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Patient portrait"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div>
                      <p className="font-medium">Robert Thompson</p>
                      <p className="text-sm text-gray-500">Cardiac Patient</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card className="bg-rose-50 border-none">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic">
                    "Working at MediCare Hospital has been the most rewarding experience of my nursing career. The
                    collaborative environment, opportunities for professional growth, and genuine focus on
                    patient-centered care make this a special place. I'm proud to be part of a team that makes such a
                    difference in our community."
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Nurse portrait"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson, RN</p>
                      <p className="text-sm text-gray-500">Nurse, Oncology Department</p>
                    </div>
                  </div>
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
                  Experience the MediCare Difference
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're seeking care, considering a career, or looking to partner with us, we invite you to be
                  part of our mission
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-rose-500 hover:bg-rose-100">Book an Appointment</Button>
                <Button variant="outline" className="text-white border-white hover:bg-rose-600">
                  Contact Us
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
                Providing quality healthcare services since 1985. Our mission is to improve the health and wellbeing of
                the people we serve.
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
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="#history" className="hover:text-white transition-colors">
                  Our History
                </Link>
                <Link to="#mission" className="hover:text-white transition-colors">
                  Mission & Vision
                </Link>
                <Link to="#leadership" className="hover:text-white transition-colors">
                  Leadership
                </Link>
                <Link to="#facilities" className="hover:text-white transition-colors">
                  Facilities
                </Link>
                <Link to="#achievements" className="hover:text-white transition-colors">
                  Achievements
                </Link>
                <Link to="#community" className="hover:text-white transition-colors">
                  Community
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">More Information</h3>
              <nav className="flex flex-col gap-2 text-gray-400">
                <Link to="#research" className="hover:text-white transition-colors">
                  Research
                </Link>
                <Link to="#careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  News & Events
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Patient Resources
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Donate
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Contact Us
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
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
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
  )
}
export default About

