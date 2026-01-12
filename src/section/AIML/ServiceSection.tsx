"use client";

import {
  ChevronRight,
  Sparkles,
  Clock,
  Cpu,
  FileText,
  // Import ALL Card Icons here
  ClipboardCheck,
  Lightbulb,
  Layers,
  TrendingUp,
  Map,
  ShieldCheck,
  Target,
  Users,
  Brain,
  GitMerge,
  RefreshCw,
  Zap,
  MessageSquareText,
  ScanSearch,
  FolderOpen,
  MessageCircleQuestion,
  Languages,
  TableProperties,
  Bot,
  Scan,
  Image as ImageIcon,
  ScanFace,
  AlertTriangle,
  Video,
  Cuboid,
  UserMinus,
  Wrench,
  Banknote,
  ShieldAlert,
  Tag,
  Workflow,
  Settings2,
  MessageSquare,
  Mail,
} from "lucide-react";

// --- THE MAP ---
const IconMap: Record<string, any> = {
  ClipboardCheck,
  Lightbulb,
  Layers,
  TrendingUp,
  Map,
  ShieldCheck,
  Target,
  Users,
  Brain,
  GitMerge,
  RefreshCw,
  Zap,
  MessageSquareText,
  ScanSearch,
  FolderOpen,
  FileText,
  MessageCircleQuestion,
  Languages,
  TableProperties,
  Bot,
  Scan,
  ImageIcon,
  ScanFace,
  AlertTriangle,
  Video,
  Cuboid,
  UserMinus,
  Wrench,
  Banknote,
  ShieldAlert,
  Tag,
  Workflow,
  Settings2,
  MessageSquare,
  Mail,
};

interface ServiceData {
  id: string;
  header: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
  };
  cards: any[];
  process?: string[] | null;
  footer: {
    left: any;
    right: any;
  };
}

export default function ServiceSection({ data }: { data: ServiceData }) {
  if (!data) return null;

  return (
    <section className="relative bg-white py-10 font-sora px-5 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#2776ea_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
            <Sparkles size={14} className="text-[#2776ea] fill-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              {data.header.badge}
            </span>
          </div> */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles size={14} className="text-[#2776ea] fill-[#2776ea]" />

            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              {data.header.badge}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl  font-black text-slate-900 tracking-tighter leading-tight mb-6">
            {data.header.titleLine1} <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {data.header.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {data.header.description}
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {data.cards.map((card: any, index: number) => {
            // LOOK UP ICON FROM MAP
            const IconComponent = IconMap[card.icon] || Layers; // Fallback to Layers if not found

            return (
              <div
                key={index}
                className={`group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full ${
                  card.span || ""
                }`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 ${card.bg?.replace(
                    "/10",
                    ""
                  )} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent size={26} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                  {card.title}
                </h3>

                <div className="text-sm font-medium text-slate-500 leading-relaxed mb-4">
                  {card.desc}
                </div>

                {card.list && (
                  <ul className="space-y-2 pt-2 border-t border-slate-100 mt-auto">
                    {card.list.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs font-semibold text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#76ea27] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {card.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {card.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* PROCESS SECTION */}
        {data.process && (
          <div className="mb-20">
            <h3 className="text-xl font-black text-slate-900 mb-10 flex items-center gap-3">
              <span className="h-8 w-1 bg-[#2776ea] rounded-full" />
              Development Process
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.process.map((step: string, i: number) => (
                <div key={i} className="relative group">
                  <div className="h-full p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center text-center hover:border-[#2776ea] transition-colors shadow-sm">
                    <span className="h-8 w-8 rounded-full bg-slate-50 text-slate-400 font-bold text-xs flex items-center justify-center mb-3 group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <p className="text-xs font-bold text-slate-800 leading-tight">
                      {step}
                    </p>
                  </div>
                  {i < data.process!.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-slate-300">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-slate-900/20 text-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2776ea]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <FooterContent block={data.footer.left} />
            <div className="lg:border-l lg:border-white/10 lg:pl-12">
              <FooterContent block={data.footer.right} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterContent({ block }: { block: any }) {
  if (!block) return null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {block.type === "highlight" ? (
          <Clock className="text-[#76ea27]" size={24} />
        ) : (
          <Cpu className="text-[#2776ea]" size={20} />
        )}
        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">
          {block.title}
        </h4>
      </div>

      {block.type === "highlight" && (
        <div>
          <p className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            {block.content}
          </p>
          <p className="text-xs text-slate-500 font-medium mt-1">{block.sub}</p>
        </div>
      )}

      {block.type === "tags" && (
        <div className="flex flex-wrap gap-2">
          {block.content.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold text-slate-200 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {block.type === "metrics" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {block.content.map((metric: any, i: number) => (
            <div key={i}>
              <p className="text-3xl font-black text-white mb-2">
                {metric.value}
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {block.type === "list" && (
        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
          {block.content.map((item: string, i: number) => (
            <li
              key={i}
              className="flex items-center gap-2 text-xs font-medium text-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {block.type === "mixed" && (
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-2xl font-black text-white">{block.mainText}</p>
            <p className="text-xs text-slate-500 mt-1">{block.subText}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText size={14} className="text-[#2776ea]" />
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {block.listTitle}
              </p>
            </div>
            <ul className="text-xs font-medium text-slate-300 space-y-1.5">
              {block.list.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
