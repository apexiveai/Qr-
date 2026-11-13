"use client";

import { useMemo, useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, Blocks, ChevronDown,
  CircleHelp, CreditCard, Download, ExternalLink, FileCode2, Filter,
  LayoutDashboard, Link2, LockKeyhole, Menu, MoreHorizontal, Plus,
  QrCode, Search, Settings2, ShieldCheck, Sparkles, Users, X,
  BarChart3, Zap, Globe2, Smartphone, MousePointerClick
} from "lucide-react";

type QRItem = {
  name: string;
  code: string;
  type: string;
  destination: string;
  scans: string;
  status: "Active" | "Paused";
  initials: string;
  tone: string;
};

const initialRows: QRItem[] = [
  { name: "ApexiveAI Official Website", code: "APX-8K2M", type: "Website", destination: "apexiveai.com", scans: "12,840", status: "Active", initials: "A", tone: "gold" },
  { name: "Daiichi Life Campaign", code: "DCH-4P9Q", type: "Campaign", destination: "campaign.apexiveai.com/life", scans: "8,291", status: "Active", initials: "D", tone: "blue" },
  { name: "Product Catalogue 2026", code: "PRD-7N3X", type: "Product", destination: "catalog.apexiveai.com", scans: "5,672", status: "Active", initials: "P", tone: "violet" },
  { name: "Yangon Office Location", code: "LOC-2B6R", type: "Location", destination: "maps.app.goo.gl/•••", scans: "2,104", status: "Paused", initials: "Y", tone: "green" },
];

const navGroups = [
  { label: "WORKSPACE", items: [
    { name: "Overview", icon: LayoutDashboard },
    { name: "QR Management", icon: QrCode },
    { name: "Analytics", icon: BarChart3 },
    { name: "QR Designer", icon: Sparkles },
    { name: "Bulk Generator", icon: Blocks },
  ]},
  { label: "BUSINESS", items: [
    { name: "Payment QR", icon: CreditCard },
    { name: "Developers", icon: FileCode2 },
    { name: "Organization", icon: Users },
    { name: "Billing & Plans", icon: Zap },
  ]}
];

const bars = [32, 46, 39, 58, 48, 70, 54, 76, 61, 84, 67, 92, 73, 63, 88, 72, 96, 78, 68, 86, 75, 100, 82, 91];

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [query, setQuery] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [qrName, setQrName] = useState("");
  const [qrType, setQrType] = useState("Website URL");
  const [rows, setRows] = useState(initialRows);
  const [mobileNav, setMobileNav] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredRows = useMemo(() => rows.filter(r =>
    `${r.name} ${r.code} ${r.type} ${r.destination}`.toLowerCase().includes(query.toLowerCase())
  ), [rows, query]);

  function createQR() {
    if (!qrName.trim()) return;
    const code = `APX-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    setRows([{ name: qrName.trim(), code, type: qrType, destination: "Add destination", scans: "0", status: "Active", initials: qrName.trim()[0].toUpperCase(), tone: "gold" }, ...rows]);
    setQrName("");
    setShowCreate(false);
    setActive("QR Management");
    setNotice("Demo QR record created. Connect the backend to generate a real QR code.");
  }

  return (
    <main className="min-h-screen bg-[#080E19] text-slate-100">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="relative flex min-h-screen">
        <aside className={`sidebar fixed inset-y-0 left-0 z-40 flex w-[258px] flex-col border-r border-white/[0.07] bg-[#0B1322]/95 px-5 py-6 backdrop-blur-xl transition-transform lg:static lg:translate-x-0 ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="brand-mark"><QrCode size={23} strokeWidth={1.8} /></div>
              <div><div className="text-[15px] font-semibold tracking-wide">APEXIVE<span className="text-[#D6B46A]">AI</span></div><div className="mt-0.5 text-[9px] font-semibold tracking-[0.24em] text-slate-500">SMART QR PLATFORM</div></div>
            </div>
            <button className="icon-button lg:hidden" onClick={() => setMobileNav(false)} aria-label="Close menu"><X size={18}/></button>
          </div>

          <div className="mb-6 rounded-xl border border-white/[0.08] bg-white/[0.035] p-3">
            <div className="mb-2 flex items-center justify-between"><span className="eyebrow">CURRENT WORKSPACE</span><ChevronDown size={14} className="text-slate-500"/></div>
            <div className="flex items-center gap-2.5"><div className="workspace-avatar">A</div><div className="min-w-0"><div className="truncate text-xs font-semibold">ApexiveAI</div><div className="text-[10px] text-slate-500">Enterprise workspace</div></div><span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400"/></div>
          </div>

          <nav className="flex-1 space-y-7">
            {navGroups.map(group => <div key={group.label}><div className="eyebrow mb-3 px-3">{group.label}</div><div className="space-y-1">{group.items.map(item => {
              const Icon = item.icon; const selected = active === item.name;
              return <button key={item.name} onClick={() => { setActive(item.name); setMobileNav(false); }} className={`nav-item ${selected ? "nav-item-active" : ""}`}><Icon size={17}/><span>{item.name}</span>{item.name === "Payment QR" && <span className="ml-auto rounded bg-amber-400/10 px-1.5 py-0.5 text-[9px] text-[#D6B46A]">NEW</span>}</button>;
            })}</div></div>)}
          </nav>

          <div className="rounded-xl border border-[#D6B46A]/20 bg-gradient-to-br from-[#D6B46A]/10 to-transparent p-3.5">
            <div className="mb-2 flex items-center gap-2 text-[#E8CB8A]"><ShieldCheck size={15}/><span className="text-[11px] font-semibold">Enterprise security</span></div>
            <p className="text-[10px] leading-5 text-slate-400">Workspace controls and access policies are ready to configure.</p>
            <button onClick={() => setActive("Organization")} className="mt-2 text-[10px] font-semibold text-[#D6B46A]">Manage workspace <span>→</span></button>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
            <div className="profile-avatar">BH</div><div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold">Workspace Owner</div><div className="text-[10px] text-slate-500">Super Admin preview</div></div><Settings2 size={16} className="text-slate-500"/>
          </div>
        </aside>

        {mobileNav && <button aria-label="Close navigation overlay" onClick={() => setMobileNav(false)} className="fixed inset-0 z-30 bg-black/60 lg:hidden"/>}

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#080E19]/80 px-5 backdrop-blur-xl md:px-9">
            <div className="flex items-center gap-3"><button className="icon-button lg:hidden" onClick={() => setMobileNav(true)} aria-label="Open menu"><Menu size={19}/></button><div><div className="text-[11px] text-slate-500">Workspace / <span className="text-slate-300">{active}</span></div><div className="mt-0.5 text-sm font-semibold tracking-wide">{active}</div></div></div>
            <div className="flex items-center gap-2 md:gap-3"><div className="hidden items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-400 sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/><span>All systems operational</span></div><button className="icon-button relative" aria-label="Notifications"><Bell size={17}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#D6B46A]"/></button><div className="profile-avatar hidden sm:grid">BH</div></div>
          </header>

          <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-9 md:py-10">
            <div className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
              <div><div className="mb-2 flex items-center gap-2"><span className="eyebrow text-[#D6B46A]">SATURDAY, NOVEMBER 14, 2026</span><span className="h-px w-8 bg-[#D6B46A]/40"/></div><h1 className="text-2xl font-semibold tracking-tight md:text-[30px]">Command <span className="gold-text">Center.</span></h1><p className="mt-2 text-xs text-slate-500 md:text-sm">Monitor your QR ecosystem, campaigns and business performance.</p></div>
              <div className="flex flex-wrap gap-2"><button className="secondary-button" onClick={() => setNotice("Export is a UI preview. Analytics export will be enabled with the backend.")}><Download size={15}/> Export report</button><button className="primary-button" onClick={() => setShowCreate(true)}><Plus size={16}/> Create QR Code</button></div>
            </div>

            {notice && <div className="mb-5 flex items-center justify-between rounded-lg border border-[#D6B46A]/20 bg-[#D6B46A]/[0.07] px-4 py-3 text-xs text-[#E8CB8A]">{notice}<button onClick={() => setNotice("")}><X size={14}/></button></div>}

            {active !== "Overview" && <div className="mb-6 rounded-xl border border-[#D6B46A]/20 bg-[#D6B46A]/[0.06] p-4 text-xs text-slate-300"><span className="font-semibold text-[#E8CB8A]">{active}</span> module preview — navigation is active. This screen will be implemented as a dedicated page in the next frontend iteration.</div>}

            <div className="mb-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Metric title="Total QR Codes" value="1,284" change="+12.8%" icon={QrCode} tone="gold" detail="vs. previous month"/>
              <Metric title="Total Scans" value="248,391" change="+18.6%" icon={Activity} tone="blue" detail="vs. previous month"/>
              <Metric title="Unique Visitors" value="86,204" change="+9.2%" icon={Users} tone="violet" detail="estimated, privacy-aware"/>
              <Metric title="Active Campaigns" value="36" change="+4.1%" icon={Zap} tone="green" detail="across all workspaces"/>
            </div>

            <div className="mb-7 grid gap-5 xl:grid-cols-[1.65fr_1fr]">
              <div className="panel p-5 md:p-6">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-3"><div><div className="section-title">Scan performance</div><p className="mt-1 text-[11px] text-slate-500">Engagement activity across your QR network</p></div><button className="select-button">Last 30 days <ChevronDown size={13}/></button></div>
                <div className="mb-4 flex items-end gap-3"><div className="text-[30px] font-semibold tracking-tight">248,391</div><div className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-400"><ArrowUpRight size={13}/> 18.6%</div></div>
                <div className="chart-wrap"><div className="chart-guides"><span>80k</span><span>60k</span><span>40k</span><span>20k</span><span>0</span></div><div className="chart-bars">{bars.map((h,i)=><div key={i} className="chart-bar-group"><div className="chart-bar" style={{height:`${h}%`}}/><span>{i%4===0 ? ["Oct 18","Oct 22","Oct 26","Oct 30","Nov 03","Nov 07"][Math.floor(i/4)] : ""}</span></div>)}</div></div>
                <div className="mt-4 flex flex-wrap gap-5 border-t border-white/[0.06] pt-4"><Legend color="bg-[#D6B46A]" label="Total scans"/><Legend color="bg-[#D6B46A]/30" label="Previous period"/></div>
              </div>
              <div className="panel p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between"><div><div className="section-title">Scan sources</div><p className="mt-1 text-[11px] text-slate-500">Visitor device breakdown</p></div><button className="icon-button"><MoreHorizontal size={17}/></button></div>
                <div className="mx-auto my-4 flex h-40 w-40 items-center justify-center rounded-full" style={{background:"conic-gradient(#D6B46A 0 54%, #6388C8 54% 79%, #9B83C9 79% 92%, #334155 92% 100%)"}}><div className="flex h-[116px] w-[116px] flex-col items-center justify-center rounded-full bg-[#111B2D]"><span className="text-2xl font-semibold">86.2k</span><span className="text-[9px] text-slate-500">VISITORS</span></div></div>
                <div className="space-y-3"><Source icon={Smartphone} label="Mobile devices" value="54%" color="#D6B46A"/><Source icon={Globe2} label="Desktop & tablet" value="25%" color="#6388C8"/><Source icon={MousePointerClick} label="Other / unknown" value="13%" color="#9B83C9"/><Source icon={Activity} label="Unclassified" value="8%" color="#475569"/></div>
              </div>
            </div>

            <div className="panel overflow-hidden">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 md:flex-row md:items-center md:px-6"><div><div className="section-title">Recently managed QR codes</div><p className="mt-1 text-[11px] text-slate-500">Track and manage your latest QR assets</p></div><div className="flex flex-wrap gap-2"><div className="search-box"><Search size={14}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search QR codes..."/></div><button className="secondary-button !px-3"><Filter size={14}/><span className="hidden sm:inline">Filter</span></button></div></div>
              <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead><tr className="table-head"><th>QR CODE</th><th>TYPE</th><th>DESTINATION</th><th className="text-right">TOTAL SCANS</th><th>STATUS</th><th></th></tr></thead><tbody>{filteredRows.map(row=><tr key={row.code} className="table-row"><td><div className="flex items-center gap-3"><div className={`qr-mini qr-${row.tone}`}><QrCode size={19}/></div><div><div className="text-xs font-medium text-slate-200">{row.name}</div><div className="mt-1 font-mono text-[9px] tracking-wider text-slate-500">{row.code}</div></div></div></td><td><span className="type-pill">{row.type}</span></td><td className="text-xs text-slate-400">{row.destination}</td><td className="text-right font-mono text-xs text-slate-300">{row.scans}</td><td><span className={`status-pill ${row.status==="Active"?"status-active":"status-paused"}`}><span/> {row.status}</span></td><td><button className="icon-button"><MoreHorizontal size={16}/></button></td></tr>)}</tbody></table>{filteredRows.length===0 && <div className="p-8 text-center text-xs text-slate-500">No QR codes match your search.</div>}</div>
              <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-4 md:px-6"><span className="text-[10px] text-slate-500">Showing {filteredRows.length} of {rows.length} QR codes</span><button onClick={()=>setActive("QR Management")} className="flex items-center gap-1 text-[10px] font-semibold text-[#D6B46A]">View all QR codes <ExternalLink size={12}/></button></div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <QuickAction icon={QrCode} title="Dynamic QR" description="Create editable destination codes" onClick={()=>{setQrType("Website URL");setShowCreate(true)}}/>
              <QuickAction icon={Blocks} title="Bulk generation" description="Generate QR codes at scale" onClick={()=>setActive("Bulk Generator")}/>
              <QuickAction icon={FileCode2} title="Developer API" description="Connect QR to your applications" onClick={()=>setActive("Developers")}/>
            </div>
            <footer className="mt-10 flex flex-col justify-between gap-2 border-t border-white/[0.06] pt-5 text-[10px] text-slate-600 sm:flex-row"><span>© 2026 ApexiveAI Company. All rights reserved.</span><span className="flex items-center gap-3"><span>Privacy-first analytics</span><span>•</span><span>Enterprise-grade platform</span></span></footer>
          </div>
        </section>
      </div>

      {showCreate && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"><div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111B2D] p-6 shadow-2xl"><div className="mb-5 flex items-center justify-between"><div><div className="text-lg font-semibold">Create QR Code</div><p className="mt-1 text-[11px] text-slate-500">Start a new QR asset in your workspace.</p></div><button className="icon-button" onClick={()=>setShowCreate(false)}><X size={17}/></button></div><label className="field-label">QR CODE NAME</label><input className="field-input mb-4" value={qrName} onChange={e=>setQrName(e.target.value)} placeholder="e.g. Product landing page"/><label className="field-label">QR TYPE</label><select className="field-input mb-6" value={qrType} onChange={e=>setQrType(e.target.value)}><option>Website URL</option><option>Contact / vCard</option><option>Wi-Fi access</option><option>Payment QR</option><option>Campaign</option><option>Product information</option></select><div className="flex gap-2"><button className="secondary-button flex-1 justify-center" onClick={()=>setShowCreate(false)}>Cancel</button><button className="primary-button flex-1 justify-center" onClick={createQR} disabled={!qrName.trim()}><Plus size={15}/> Create record</button></div><p className="mt-4 text-[10px] leading-5 text-slate-500">Preview only: this action adds a local demo record. QR encoding and persistent storage will be connected to the API in the next phase.</p></div></div>}
    </main>
  );
}

function Metric({title,value,change,icon:Icon,tone,detail}:{title:string;value:string;change:string;icon:any;tone:string;detail:string}) {
  return <div className="panel metric-card p-5"><div className="flex items-start justify-between"><span className="text-[11px] text-slate-400">{title}</span><div className={`metric-icon metric-${tone}`}><Icon size={17}/></div></div><div className="mt-4 flex items-end justify-between gap-2"><span className="text-[27px] font-semibold tracking-tight">{value}</span><span className="mb-1 flex items-center gap-0.5 text-[10px] font-semibold text-emerald-400"><ArrowUpRight size={12}/>{change}</span></div><div className="mt-2 text-[9px] text-slate-600">{detail}</div></div>;
}
function Legend({color,label}:{color:string;label:string}) { return <div className="flex items-center gap-2 text-[10px] text-slate-500"><span className={`h-1.5 w-1.5 rounded-full ${color}`}/>{label}</div>; }
function Source({icon:Icon,label,value,color}:{icon:any;label:string;value:string;color:string}) { return <div className="flex items-center gap-2"><Icon size={13} className="text-slate-500"/><span className="flex-1 text-[10px] text-slate-400">{label}</span><span className="text-[10px] font-semibold text-slate-300">{value}</span><span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor:color}}/></div>; }
function QuickAction({icon:Icon,title,description,onClick}:{icon:any;title:string;description:string;onClick:()=>void}) { return <button onClick={onClick} className="quick-action text-left"><div className="mb-3 flex items-center justify-between"><div className="quick-icon"><Icon size={17}/></div><ArrowUpRight size={15} className="text-slate-600"/></div><div className="text-xs font-semibold text-slate-200">{title}</div><div className="mt-1 text-[10px] text-slate-500">{description}</div></button>; }
