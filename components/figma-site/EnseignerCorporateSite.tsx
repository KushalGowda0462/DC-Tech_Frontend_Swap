"use client";

import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  BarChart3,
  Building2,
  Cable,
  Camera,
  Factory,
  FileCheck,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MonitorDot,
  Network,
  Phone,
  Radio,
  Server,
  Shield,
  ShoppingBag,
  Users,
  Wrench,
  X,
  Zap,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logoPath = "/enseigner-logo-transparent.png";
const heroImage =
  "https://images.unsplash.com/photo-1680992046626-418f7e910589?w=1600&h=1000&fit=crop&auto=format";

const metrics = [
  { icon: Shield, value: "12+", label: "Years Enterprise Execution", sub: "Deep infrastructure delivery experience since 2012" },
  { icon: Building2, value: "100+", label: "Enterprise Clients", sub: "BFSI, government, ports, healthcare, retail, and education" },
  { icon: MapPin, value: "10,000+", label: "Branch & Site Installations", sub: "Pan-India distributed deployment footprint" },
  { icon: Network, value: "200+", label: "OEM Partner Ecosystem", sub: "Security, compute, storage, networking, and data centre partners" },
];

const services = [
  {
    icon: Camera,
    code: "SYS-01",
    title: "Security Systems & Integration",
    desc: "Enterprise surveillance, access control, intrusion detection, PSIM integration, and unified security command platforms.",
    tags: ["CCTV", "Access Control", "PSIM", "Intrusion"],
  },
  {
    icon: Server,
    code: "SYS-02",
    title: "Enterprise Data Centre Solutions",
    desc: "Data centre design, build, commissioning, compute, storage, HCI, UPS, precision cooling, and co-location infrastructure.",
    tags: ["HCI", "Storage", "Cooling", "UPS"],
  },
  {
    icon: Radio,
    code: "SYS-03",
    title: "Networking & Command Centres",
    desc: "LAN/WAN, SD-WAN, firewalls, NOC/SOC setup, and integrated command centre infrastructure for 24x7 operations.",
    tags: ["SD-WAN", "Firewall", "NOC/SOC", "Command"],
  },
  {
    icon: Eye,
    code: "SYS-04",
    title: "Computer Vision & AI Operations",
    desc: "Video analytics, behaviour intelligence, crowd management, workforce visibility, and real-time anomaly detection.",
    tags: ["AI Analytics", "VMS", "LPR", "Edge AI"],
  },
  {
    icon: Cable,
    code: "SYS-05",
    title: "Structured Cabling & Passive Infra",
    desc: "Cat6A, fibre backbone, OFC, cable management, modular patch solutions, and enterprise campus passive infrastructure.",
    tags: ["Cat6A", "OFC", "BICSI", "Patch"],
  },
  {
    icon: Wrench,
    code: "SYS-06",
    title: "Managed Services & AMC",
    desc: "SLA-backed AMC, remote monitoring, on-site response, lifecycle management, and technology refresh for critical systems.",
    tags: ["AMC", "SLA", "Remote NOC", "L3 Support"],
  },
];

const aiModules = [
  { icon: Users, code: "WFI", label: "Workforce Intelligence", value: "4,812", unit: "active personnel tracked", status: "LIVE", trend: "+2.4%" },
  { icon: KeyRound, code: "ACI", label: "Access Intelligence", value: "98.7%", unit: "compliance rate", status: "OPTIMAL", trend: "+0.3%" },
  { icon: AlertTriangle, code: "ANM", label: "Anomaly Detection", value: "3", unit: "alerts in last 24h", status: "ALERT", trend: "down from 11" },
  { icon: BarChart3, code: "VAN", label: "Visitor Analytics", value: "1,247", unit: "visitors today", status: "LIVE", trend: "+18.2%" },
  { icon: FileCheck, code: "CPR", label: "Compliance Reporting", value: "100%", unit: "audit-ready", status: "OPTIMAL", trend: "Q2 ready" },
  { icon: MonitorDot, code: "MSC", label: "Multi-Site Command", value: "38", unit: "sites online", status: "LIVE", trend: "0 offline" },
];

const industries = [
  { icon: Landmark, code: "IND-01", label: "Banking & Finance", desc: "Branch security, surveillance, compliance infrastructure, and data centre modernization for banks and NBFCs." },
  { icon: Shield, code: "IND-02", label: "Government & Defence", desc: "Secure command centres, surveillance networks, and mission-critical infrastructure for public sector operations." },
  { icon: Anchor, code: "IND-03", label: "Ports & Logistics", desc: "Container terminal security, perimeter surveillance, cargo visibility, and port command centre integration." },
  { icon: HeartPulse, code: "IND-04", label: "Healthcare", desc: "Hospital security, campus networking, data protection, and managed services for healthcare environments." },
  { icon: ShoppingBag, code: "IND-05", label: "Retail", desc: "Multi-store security rollouts, loss prevention, footfall analytics, and centralized surveillance management." },
  { icon: GraduationCap, code: "IND-06", label: "Education", desc: "Campus security, smart classroom infrastructure, network backbone, and access intelligence." },
  { icon: Factory, code: "IND-07", label: "Manufacturing", desc: "Industrial CCTV, production floor monitoring, OT network security, and plant command operations." },
  { icon: Zap, code: "IND-08", label: "Critical Infrastructure", desc: "Utilities, power, oil and gas, and high-availability security and communications infrastructure." },
];

const deployments = [
  {
    sector: "BFSI",
    label: "Banking, Financial Services & Insurance",
    projects: [
      "Branch security and structured cabling across multi-state networks",
      "Data centre consolidation with lifecycle AMC",
      "Corporate campus access, surveillance, and network integration",
    ],
  },
  {
    sector: "GOV",
    label: "Government & Public Sector",
    projects: [
      "City surveillance and command centre modernization",
      "Smart city traffic, CCTV, and fibre backbone integration",
      "Secure perimeter and access systems for sensitive facilities",
    ],
  },
  {
    sector: "PORT",
    label: "Ports & Logistics",
    projects: [
      "Port-wide surveillance, LPR, and container yard visibility",
      "Warehouse security, fire systems, access control, and connectivity",
      "Airside cargo facility biometric access and PSIM integration",
    ],
  },
  {
    sector: "HLTH",
    label: "Healthcare & Research",
    projects: [
      "Hospital chain unified CCTV and IT infrastructure",
      "Private cloud infrastructure for medical research campuses",
      "Clean-room monitoring and access control modernization",
    ],
  },
];

const partners = [
  "Cisco",
  "Fortinet",
  "Sophos",
  "Dell Technologies",
  "HPE",
  "NetApp",
  "Hikvision",
  "Axis Communications",
  "CP Plus",
  "Bosch Security",
  "Honeywell",
  "VMware",
  "Veeam",
  "Palo Alto",
  "CommScope",
  "Legrand",
  "APC by Schneider",
  "Vertiv",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#c9a84c]" />
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">
        {children}
      </span>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Capabilities", "#capabilities"],
    ["AI & Operations", "#ai-ops"],
    ["Industries", "#industries"],
    ["Partners", "#partners"],
    ["Deployments", "#deployments"],
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-[#c9a84c]/20 bg-[#080d16]/95 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center">
          <Image src={logoPath} alt="Enseigner" width={1081} height={223} className="h-8 w-auto object-contain brightness-0 invert md:h-9" priority />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7a90a8] transition hover:text-[#c9a84c]">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden border border-[#c9a84c] px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#080d16] sm:inline-flex">
            Contact
          </a>
          <button className="text-[#dce8f5] lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#c9a84c]/15 bg-[#080d16]/98 px-6 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block border-b border-[#c9a84c]/10 py-3 text-base font-bold uppercase tracking-[0.08em] text-[#dce8f5]">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex border border-[#c9a84c] px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[#c9a84c]">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080d16]">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Enterprise data centre infrastructure" fill className="object-cover opacity-[0.22]" priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#080d16_42%,rgba(8,13,22,0.72)_74%,rgba(8,13,22,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.045)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>
      <div className="absolute left-0 top-1/2 h-40 w-1 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent,#c9a84c,transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-8 px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="col-span-12 max-w-3xl lg:col-span-8">
          <SectionLabel>Enterprise Infrastructure · Since 2012</SectionLabel>
          <h1 className="text-[clamp(3.1rem,7vw,5.9rem)] font-black uppercase leading-[0.95] tracking-tight text-[#dce8f5]">
            Engineering <br />
            <span className="text-[#c9a84c]">Intelligent</span> <br />
            Enterprise <br />
            Infrastructure <br />
            <span className="text-[#7a90a8]">Across India</span>
          </h1>
          <div className="my-7 h-0.5 w-20 bg-[linear-gradient(to_right,#c9a84c,transparent)]" />
          <p className="max-w-xl text-lg leading-8 text-[#7a90a8]">
            Security-first. Infrastructure-led. AI-enabled. India-proven. Enseigner modernises the systems enterprises depend on every day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#capabilities" className="inline-flex items-center gap-2 bg-[#c9a84c] px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#080d16] transition hover:bg-[#dbb85a]">
              Explore Capabilities <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-[#dce8f5]/25 px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#dce8f5] transition hover:border-[#c9a84c] hover:text-[#c9a84c]">
              <Phone size={16} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-3">
          {[
            ["12+", "Years of Enterprise Execution"],
            ["100+", "Enterprise Clients"],
            ["10K+", "Branch & Site Installations"],
          ].map(([value, label]) => (
            <div key={value} className="w-44 border border-[#c9a84c]/25 bg-[#0c1422]/85 p-5 backdrop-blur-md">
              <div className="text-4xl font-black leading-none text-[#c9a84c]">{value}</div>
              <div className="mt-2 text-sm leading-5 text-[#7a90a8]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,#080d16)]" />
    </section>
  );
}

function TrustMetrics() {
  return (
    <section className="bg-[#080d16] pb-24">
      <div className="h-px bg-[linear-gradient(to_right,transparent,#c9a84c_20%,#c9a84c_80%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid border border-[#c9a84c]/15 bg-[#c9a84c]/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.value} className="relative border-b border-[#c9a84c]/15 bg-[#0c1422]/80 p-8 transition hover:bg-[#0f1a28] sm:border-r lg:border-b-0">
                <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[#c9a84c]" />
                <Icon className="mb-5 text-[#c9a84c]" size={24} strokeWidth={1.5} />
                <div className="text-5xl font-black leading-none text-[#dce8f5]">{metric.value}</div>
                <h3 className="mt-3 text-base font-black uppercase tracking-[0.07em] text-[#c9a84c]">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-[#7a90a8]">{metric.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-[#080d16] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.025)_1px,transparent_1px)] bg-[length:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[#dce8f5]">What We Do</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#7a90a8]">
            Six integrated practice areas covering enterprise infrastructure, physical security, data centre, networking, command visibility, and AI-driven operations.
          </p>
        </div>

        <div className="grid gap-px bg-[#c9a84c]/15 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.code} className="group relative flex min-h-[320px] flex-col gap-4 bg-[#0c1422] p-8 transition hover:bg-[#0f1a28]">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#c9a84c]/55">{service.code}</span>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a84c]/35 text-[#c9a84c]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-2xl font-black uppercase leading-tight text-[#dce8f5]">{service.title}</h3>
                </div>
                <p className="grow text-sm leading-7 text-[#7a90a8]">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="border border-[#c9a84c]/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#c9a84c]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[linear-gradient(to_right,#c9a84c,transparent)] opacity-0 transition group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  const [active, setActive] = useState(0);
  const statusColor: Record<string, string> = { LIVE: "#1a9e6d", OPTIMAL: "#2a7ab5", ALERT: "#d4a017" };

  return (
    <section id="ai-ops" className="relative overflow-hidden bg-[#060b13] py-24">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(201,168,76,0.012)_2px,rgba(201,168,76,0.012)_4px)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Intelligent Operations</SectionLabel>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black uppercase leading-none text-[#dce8f5]">
              AI-Enabled Operations <br />
              <span className="text-[#c9a84c]">Built on Enterprise</span> <br />
              Infrastructure
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[#7a90a8]">
              Enseigner&apos;s AI layer sits on top of proven physical infrastructure. Computer vision, edge analytics, and command intelligence turn site activity into operational visibility.
            </p>
            <div className="mt-5 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-[0.08em]">
              <span className="text-[#1a9e6d]">System Operational</span>
              <span className="text-[#7a90a8]">38/38 Sites Online</span>
            </div>
          </div>
        </div>

        <div className="border border-[#c9a84c]/20 bg-[#0c1422]/80">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c9a84c]/15 px-5 py-4">
            <div className="flex items-center gap-5">
              <span className="flex gap-1.5">
                {["#c0392b", "#d4a017", "#1a9e6d"].map((color) => (
                  <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                ))}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#7a90a8]">Enseigner Intelligent Command Dashboard</span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#c9a84c]">Live IST</span>
          </div>

          <div className="grid gap-px bg-[#c9a84c]/10 p-px sm:grid-cols-2 xl:grid-cols-3">
            {aiModules.map((module, index) => {
              const Icon = module.icon;
              const isActive = active === index;
              return (
                <button
                  key={module.code}
                  onClick={() => setActive(index)}
                  className={`relative border-l-2 p-6 text-left transition ${isActive ? "border-[#c9a84c] bg-[#0f1a28]" : "border-transparent bg-[#0c1422] hover:bg-[#0f1a28]"}`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#c9a84c]/70">
                      <Icon size={16} strokeWidth={1.5} />
                      {module.code}
                    </span>
                    <span className="border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: statusColor[module.status], borderColor: statusColor[module.status] }}>
                      {module.status}
                    </span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#7a90a8]">{module.label}</div>
                  <div className={`mt-2 text-4xl font-black leading-none ${isActive ? "text-[#c9a84c]" : "text-[#dce8f5]"}`}>{module.value}</div>
                  <div className="mt-1 text-xs text-[#7a90a8]">{module.unit}</div>
                  <div className="mt-3 font-mono text-[10px] uppercase text-[#1a9e6d]">{module.trend}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-[#080d16] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel>Industries Served</SectionLabel>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[#dce8f5]">
              Built for India&apos;s Most <br /> Demanding Sectors
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-[#7a90a8]">
            Sector-specific infrastructure expertise across regulated, distributed, and mission-critical enterprise environments.
          </p>
        </div>

        <div className="grid gap-px bg-[#c9a84c]/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.code} className="group relative min-h-[260px] bg-[#0c1422] p-7 transition hover:bg-[#0f1a28]">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#c9a84c]/45">{industry.code}</span>
                <div className="my-5 flex h-12 w-12 items-center justify-center border border-[#c9a84c]/25 text-[#7a90a8] transition group-hover:border-[#c9a84c] group-hover:text-[#c9a84c]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight text-[#dce8f5]">{industry.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7a90a8]">{industry.desc}</p>
                <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-transparent transition group-hover:border-[#c9a84c]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeploymentRecord() {
  return (
    <section id="deployments" className="relative bg-[#060b13] py-24">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.45)_30%,rgba(201,168,76,0.45)_70%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <SectionLabel>Deployment Track Record</SectionLabel>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[#dce8f5]">Enterprise Credibility Built Over 12 Years</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#7a90a8]">
            A cross-sector portfolio of enterprise deployments demonstrating deep technical capability and project execution across India.
          </p>
        </div>

        <div className="grid gap-px bg-[#c9a84c]/15 lg:grid-cols-2">
          {deployments.map((deployment) => (
            <article key={deployment.sector} className="bg-[#0c1422] p-8">
              <div className="mb-7 flex flex-wrap items-center gap-4">
                <span className="bg-[#c9a84c] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-[#080d16]">{deployment.sector}</span>
                <span className="text-base font-black uppercase tracking-[0.06em] text-[#7a90a8]">{deployment.label}</span>
              </div>
              <div className="space-y-5">
                {deployment.projects.map((project) => (
                  <div key={project} className="flex gap-4 border-b border-[#c9a84c]/10 pb-5 last:border-b-0 last:pb-0">
                    <span className="mt-1 w-0.5 shrink-0 bg-[#c9a84c]/35" />
                    <p className="text-sm leading-7 text-[#dce8f5]">{project}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OEMPartners() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let pos = 0;
    const animate = () => {
      if (rowRef.current) {
        pos -= 0.45;
        const half = rowRef.current.scrollWidth / 2;
        if (Math.abs(pos) >= half) pos = 0;
        rowRef.current.style.transform = `translateX(${pos}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="partners" className="overflow-hidden bg-[#080d16] py-24">
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-8">
        <SectionLabel>OEM Partner Ecosystem</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-none text-[#dce8f5]">200+ Global OEM Technology Partners</h2>
          <p className="max-w-md text-base leading-8 text-[#7a90a8]">
            Direct relationships with global technology OEMs for security, compute, storage, networking, cabling, and data centre systems.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(to_right,#080d16,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(to_left,#080d16,transparent)]" />
        <div className="overflow-hidden">
          <div ref={rowRef} className="flex will-change-transform">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={`${partner}-${index}`} className="mx-2 flex h-24 min-w-[190px] shrink-0 flex-col items-center justify-center border border-[#c9a84c]/15 bg-[#0c1422] px-6 text-center transition hover:border-[#c9a84c]/45 hover:bg-[#0f1a28]">
                <div className="text-lg font-black text-[#dce8f5]">{partner}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#c9a84c]/55">Technology OEM</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#060b13] pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a84c]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Start a Conversation</span>
            <span className="h-px w-10 bg-[#c9a84c]" />
          </div>
          <h2 className="text-[clamp(2.7rem,6vw,5.3rem)] font-black uppercase leading-none text-[#dce8f5]">
            Ready to Modernise Your <br />
            <span className="text-[#c9a84c]">Enterprise Infrastructure?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#7a90a8]">
            One partner for consultancy, design, supply, implementation, and long-term operations across India.
          </p>
          <a href="mailto:enterprise@enseigner.in" className="mt-10 inline-flex items-center gap-3 bg-[#c9a84c] px-10 py-5 text-base font-black uppercase tracking-[0.1em] text-[#080d16] transition hover:bg-[#dbb85a]">
            Contact Enseigner <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-px bg-[#c9a84c]/15 lg:grid-cols-3">
          {[
            { icon: Phone, label: "Call Us", value: "+91 98200 XXXXX", sub: "Mon-Sat, 9AM-6PM IST" },
            { icon: Mail, label: "Email", value: "enterprise@enseigner.in", sub: "Response within 4 business hours" },
            { icon: MapPin, label: "Headquarters", value: "Mumbai, India", sub: "Pan-India project execution" },
          ].map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.label} className="flex gap-4 bg-[#0c1422] p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c9a84c]/25 text-[#c9a84c]">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-mono text-[11px] font-black uppercase tracking-[0.12em] text-[#c9a84c]">{contact.label}</div>
                  <div className="mt-1 text-xl font-black text-[#dce8f5]">{contact.value}</div>
                  <div className="mt-1 text-sm text-[#7a90a8]">{contact.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="relative mt-px border-t border-[#c9a84c]/10 bg-[#080d16]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-8 sm:px-8">
          <Image src={logoPath} alt="Enseigner" width={1081} height={223} className="h-7 w-auto object-contain brightness-0 invert opacity-85" />
          <p className="text-sm text-[#7a90a8]">© 2026 Enseigner · Enterprise Infrastructure Across India</p>
          <div className="flex gap-5 text-sm text-[#7a90a8]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Certifications</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default function EnseignerCorporateSite() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080d16] text-[#dce8f5]">
      <NavBar />
      <HeroSection />
      <TrustMetrics />
      <Capabilities />
      <AISection />
      <Industries />
      <DeploymentRecord />
      <OEMPartners />
      <FinalCTA />
    </main>
  );
}
