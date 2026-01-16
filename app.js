const {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} = window.Recharts;

const {
    IconHeart, IconUsers, IconTrending, IconMessage, IconAward,
    IconCheck, IconAlert, IconPrinter, IconTarget, IconZap, IconStar,
    DATA, COLORS_MAP
} = window;

function StatCard({ icon: IconComp, label, value, color, sub }) {
    return (
        <div className="premium-card p-4 flex items-center gap-3 border-l-4 border-l-[#0069b4] flex-1 min-w-[140px]">
            <div className={`p-2 rounded-lg ${color} bg-opacity-10 text-slate-700 shrink-0`}>
                <IconComp />
            </div>
            <div className="min-w-0">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-wider truncate">{label}</p>
                <div className="flex items-baseline gap-1.5">
                    <h3 className="text-2xl font-black text-slate-800 leading-none">{value}</h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{sub}</span>
                </div>
            </div>
        </div>
    );
}

function BlockAnalysis({ block, index }) {
    return (
        <div className="premium-card p-6 md:p-8 mb-6 break-inside-avoid shadow-sm flex flex-col">
            <div className="flex justify-between items-start gap-4 mb-4">
                <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-[#0069b4] text-white w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shrink-0 italic">0{index + 1}</span>
                        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{block.title}</h3>
                    </div>
                    <p className="text-slate-500 text-[11px] font-medium leading-relaxed border-l-2 border-slate-100 pl-3">{block.desc}</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-base font-black text-[#0069b4] leading-none">{block.avg}</span>
                    <span className="text-[6px] font-black uppercase opacity-60 mt-0.5 tracking-widest text-center leading-none">Media</span>
                </div>
            </div>

            <div className="h-[180px] mb-6 bg-slate-50 rounded-xl p-3 border border-slate-100 shadow-inner">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={block.data} stackOffset="expand">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={85} axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#64748b' }} />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    const rowData = payload[0].payload;
                                    const total = rowData.d1 + rowData.d2 + rowData.d3 + rowData.d4 + rowData.d5;
                                    return (
                                        <div className="bg-white p-2 border shadow-lg rounded-lg text-[9px]">
                                            <p className="font-bold text-slate-800 border-b pb-1 mb-1 uppercase tracking-wider">{label}</p>
                                            {payload.slice().reverse().map((entry, i) => (
                                                <div key={i} className="flex items-center justify-between gap-4 py-0.5">
                                                    <span className="font-bold text-slate-500 uppercase">{entry.name}:</span>
                                                    <span className="font-black" style={{ color: entry.color }}>
                                                        {total > 0 ? ((entry.value / total) * 100).toFixed(0) : 0}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar name="M. Desacuerdo" dataKey="d1" stackId="a" fill={COLORS_MAP[0]} />
                        <Bar name="Desacuerdo" dataKey="d2" stackId="a" fill={COLORS_MAP[1]} />
                        <Bar name="Neutral" dataKey="d3" stackId="a" fill={COLORS_MAP[2]} />
                        <Bar name="De Acuerdo" dataKey="d4" stackId="a" fill={COLORS_MAP[3]} />
                        <Bar name="M. de Acuerdo" dataKey="d5" stackId="a" fill={COLORS_MAP[4]} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-1.5 text-emerald-700 mb-1">
                        <IconCheck />
                        <span className="text-[9px] font-black uppercase tracking-widest">Fortalezas</span>
                    </div>
                    <ul className="space-y-0.5">
                        {block.strengths.map((s, i) => <li key={i} className="text-[10px] font-semibold text-slate-700 flex items-start gap-1.5 leading-tight"><div className="w-1 h-1 rounded-full bg-emerald-400 mt-1 shrink-0" />{s}</li>)}
                    </ul>
                </div>
                <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-1.5 text-amber-700 mb-1">
                        <IconAlert />
                        <span className="text-[9px] font-black uppercase tracking-widest">Mejoras</span>
                    </div>
                    <ul className="space-y-0.5">
                        {block.improvements.map((im, i) => <li key={i} className="text-[10px] font-semibold text-slate-700 flex items-start gap-1.5 leading-tight"><div className="w-1 h-1 rounded-full bg-amber-400 mt-1 shrink-0" />{im}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function App() {
    const [activeTab, setActiveTab] = React.useState('dashboard');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 pt-4 pb-0 flex flex-col gap-4 border-b border-slate-200 no-print rounded-b-xl shadow-sm mb-6">
                <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-4">
                        <img src="logo-avapace.png" alt="Logo AVAPACE" className="h-10 w-auto object-contain" />
                        <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block text-blue-600">Informe de Satisfacción 2025</span>
                    </div>
                    <button onClick={() => window.print()} className="bg-avapace-gradient text-white px-5 py-2 rounded-lg flex items-center gap-3 font-black text-[10px] uppercase tracking-widest shadow-md active:scale-95 transition-all">
                        <IconPrinter /> PDF
                    </button>
                </div>

                {/* TABS NAVIGATION */}
                <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`text-sm font-black uppercase tracking-widest py-3 border-b-2 transition-all whitespace-nowrap ${activeTab === 'dashboard' ? 'border-[#0069b4] text-[#0069b4]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                    >
                        Informe 2025
                    </button>
                    <button
                        onClick={() => setActiveTab('voice')}
                        className={`text-sm font-black uppercase tracking-widest py-3 border-b-2 transition-all whitespace-nowrap ${activeTab === 'voice' ? 'border-[#0069b4] text-[#0069b4]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                    >
                        Vuestra Voz
                    </button>
                </div>
            </header>

            {/* DASHBOARD TAB CONTENT */}
            {activeTab === 'dashboard' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <section className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8 border-b border-slate-100 relative">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 bg-blue-50 text-[#0069b4] px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                                <IconAward />
                                <span className="text-[9px] font-black uppercase tracking-widest italic text-center">Resultados del Informe</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[0.9] text-slate-900">
                                Vuestra voz es nuestra <span className="text-[#0069b4] italic">Misión.</span>
                            </h1>
                            <div className="premium-card p-8 border-l-[12px] border-l-[#0069b4] shadow-xl relative z-30 bg-white">
                                <p className="text-base md:text-lg text-slate-700 leading-relaxed text-justify font-medium italic">
                                    Hola equipo de Avapace, me hace mucha ilusión compartir contigo los resultados de la encuesta de satisfacción del personal. Este informe es un reflejo de vuestras voces, experiencias y del compromiso de todo el equipo. Queremos escucharte de verdad, reconocer fortalezas y encontrar oportunidades para mejorar el bienestar de esta gran familia.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 relative z-30">
                                <StatCard icon={IconUsers} label="Participantes" value={DATA.stats.responses} color="bg-blue-600" sub="Personas" />
                                <StatCard icon={IconHeart} label="eNPS Score" value={`+${DATA.stats.nps}`} color="bg-rose-600" sub="Lealtad" />
                                <StatCard icon={IconTrending} label="Media Real" value={DATA.stats.avg} color="bg-emerald-600" sub={<span>/ <span className="text-lg">5.0</span></span>} />

                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <img
                                src="dibujo-avapace-960.png"
                                alt="AVAPACE Ilustración"
                                className="relative w-full max-w-sm h-auto rounded-[3rem] shadow-2xl border-[10px] border-white transform rotate-1 z-20"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'dibujo-avapace.png'; }}
                            />
                            <div className="absolute -inset-10 bg-blue-400/5 rounded-full blur-3xl z-10"></div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="w-full bg-avapace-gradient p-8 md:p-10 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
                            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                                <div className="shrink-0 bg-white text-[#0069b4] w-32 h-32 rounded-[2rem] flex flex-col items-center justify-center shadow-2xl">
                                    <span className="text-5xl font-black italic">+{DATA.stats.nps}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest mt-1 text-center leading-none text-blue-400">eNPS<br />Score</span>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-white/10 rounded-xl"><IconHeart /></div>
                                        <h3 className="text-2xl font-black uppercase italic">Análisis de Compromiso</h3>
                                    </div>
                                    <p className="text-base md:text-lg leading-relaxed font-medium text-blue-50 text-justify">
                                        Un resultado de <strong className="text-white underline decoration-rose-400 decoration-4 underline-offset-4">+{DATA.stats.nps}</strong> es excepcional. Pone en valor el altísimo nivel de <strong className="text-white">lealtad</strong> y <strong className="text-white">orgullo</strong> que sentimos por pertenecer a Avapace. Supone que somos un equipo de <strong className="text-white italic">embajadores</strong> comprometidos con la misión.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECCIÓN I. CUANTITATIVO */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-100 pb-4">
                            <div className="bg-white p-2 rounded-lg shadow-md border border-slate-100 text-[#0069b4]"><IconAward /></div>
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-none text-blue-900">I. Análisis Cuantitativo</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {DATA.blocks.map((block, i) => <BlockAnalysis key={i} block={block} index={i} />)}
                        </div>
                    </section>

                    {/* SECCIÓN II. CUALITATIVO */}
                    <section className="mb-16 space-y-10">
                        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4">
                            <div className="bg-slate-900 p-2 rounded-lg shadow-md text-white"><IconMessage /></div>
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">II. Resumen Cualitativo</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {DATA.qualitative.map((item, idx) => (
                                <div key={idx} className="premium-card overflow-hidden flex flex-col border-l-8 border-l-slate-900 shadow-md">
                                    <div className="p-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-black text-white shadow-sm italic">Q{idx + 1}</div>
                                            <h4 className="text-base font-black text-slate-900 uppercase italic truncate">{item.title}</h4>
                                        </div>
                                        <div className="text-blue-500 animate-pulse"><IconZap /></div>
                                    </div>
                                    <div className="p-6 space-y-6 flex-1 bg-white">
                                        <p className="text-base text-slate-700 leading-relaxed font-bold italic border-l-4 border-blue-500 pl-4">{item.summary}</p>
                                        <div className="space-y-3">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest border-b pb-1">Voces del equipo</p>
                                            <div className="space-y-2">
                                                {item.quotes.map((quote, qIdx) => (
                                                    <div key={qIdx} className="bg-slate-50 p-3 rounded-lg text-[11px] italic text-slate-600 border border-slate-100 relative">
                                                        <span className="text-blue-200 text-2xl absolute -top-1 left-1 pointer-events-none opacity-50 italic leading-none">“</span>
                                                        <p className="pl-4 leading-snug">"{quote}"</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2 mt-auto pt-4 border-t border-slate-100">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-blue-600">Líneas de actuación priorizadas</p>
                                            <div className="grid gap-1.5">
                                                {item.actions.map((act, i) => (
                                                    <div key={i} className="flex items-center gap-2.5 bg-blue-50/50 p-2 rounded-lg text-[10px] font-black border border-blue-100 text-blue-900">
                                                        <IconZap /><span className="uppercase tracking-tighter">{act}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN III. FORTALEZAS, MEJORAS Y RETOS */}
                    <section className="mb-16 space-y-8">
                        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4">
                            <div className="bg-emerald-600 p-2 rounded-lg shadow-md text-white"><IconStar /></div>
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">III. Resumen Ejecutivo: Fortalezas, Mejoras y Retos</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Fortalezas */}
                            <div className="premium-card p-6 border-t-8 border-t-emerald-500 shadow-lg">
                                <div className="flex items-center gap-3 mb-6 text-emerald-700">
                                    <IconAward />
                                    <h4 className="font-black uppercase tracking-widest text-sm">Fortalezas</h4>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0" />
                                        Compromiso absoluto con la Misión y Valores sociales.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0" />
                                        Clima de respeto y apoyo mutuo entre compañeros/as.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0" />
                                        Cercanía y trato humano por parte de los responsables directos.
                                    </li>
                                </ul>
                            </div>
                            {/* Mejoras */}
                            <div className="premium-card p-6 border-t-8 border-t-amber-500 shadow-lg">
                                <div className="flex items-center gap-3 mb-6 text-amber-700">
                                    <IconTarget />
                                    <h4 className="font-black uppercase tracking-widest text-sm">Propuestas de Mejora</h4>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0" />
                                        Digitalización de procesos para agilizar la carga burocrática.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0" />
                                        Renovación planificada de dispositivos TIC y mejora de redes.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0" />
                                        Sistematización del feedback formal y reconocimiento individual.
                                    </li>
                                </ul>
                            </div>
                            {/* Retos */}
                            <div className="premium-card p-6 border-t-8 border-t-blue-500 shadow-lg">
                                <div className="flex items-center gap-3 mb-6 text-blue-700">
                                    <IconTrending />
                                    <h4 className="font-black uppercase tracking-widest text-sm">Retos Estratégicos</h4>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0" />
                                        Cuidar a quienes cuidan: Gestión proactiva de la carga emocional.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0" />
                                        Fomentar la cohesión inter-centros en una organización creciente.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0" />
                                        Implementar cambios tecnológicos sin perder la cercanía humana.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECCIÓN IV. PLAN ESTRATÉGICO */}
                    <section className="mb-16">
                        <div className="premium-card p-10 relative overflow-hidden border-t-8 border-t-[#0069b4] shadow-xl bg-white">
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="bg-avapace-gradient p-3 rounded-xl shadow-lg text-white shrink-0"><IconTarget /></div>
                                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">VI. Hoja de Ruta: Plan de Gestión 2026</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                {[
                                    { t: "Digitalización Integral", d: "Sustitución de registros en papel por sistemas digitales integrados para optimizar el tiempo de atención." },
                                    { t: "Bienestar Emocional", d: "Creación del 'Espacio de Escucha' mensual con apoyo profesional externo para la gestión emocional." },
                                    {
                                        t: "Cultura de Valoración",
                                        d: (
                                            <>
                                                Queremos que cada persona se sienta vista y valorada por su dedicación diaria, reconociendo el corazón que ponéis en cada atención:
                                                <ul className="list-disc pl-3 mt-2 space-y-1 opacity-90">
                                                    <li>Espacios de agradecimiento compartido para poner en valor el apoyo mutuo del día a día.</li>
                                                    <li>Conversaciones de desarrollo constructivas y cercanas, centradas en vuestras fortalezas y en cómo os sentís en el equipo.</li>
                                                    <li>Celebración de vuestra trayectoria en AVAPACE, honrando los años de vida y compromiso que hemos caminado juntos.</li>
                                                </ul>
                                            </>
                                        )
                                    }
                                ].map((obj, idx) => (
                                    <div key={idx} className="group p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 space-y-3 transition-all hover:bg-white hover:shadow-md">
                                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md text-base font-black text-[#0069b4] italic border border-slate-100 group-hover:bg-[#0069b4] group-hover:text-white transition-all">{idx + 1}</div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-black text-slate-900 uppercase italic leading-tight">{obj.t}</h4>
                                            <div className="text-[11px] text-slate-500 font-bold leading-relaxed">{obj.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* VOICE TAB CONTENT */}
            {activeTab === 'voice' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <section className="mb-16 pt-8">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-100 pb-4">
                            <div className="bg-rose-500 p-2 rounded-lg shadow-md text-white"><IconMessage /></div>
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">V. Vuestra Voz: Muro de Mensajes</h2>
                        </div>
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {DATA.allComments && DATA.allComments.map((comment, i) => (
                                <div key={i} className="break-inside-avoid bg-white p-5 rounded-2xl shadow-sm border border-slate-200 relative group hover:shadow-md transition-all">
                                    <span className="text-6xl absolute -top-2 left-2 text-rose-100 font-serif leading-none select-none">“</span>
                                    <p className="relative z-10 text-xs font-medium text-slate-600 leading-relaxed italic text-center pt-2">
                                        {comment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}

            <footer className="py-12 border-t-4 border-slate-100 flex flex-col items-center gap-6 no-print opacity-70">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="bg-[#0069b4] w-8 h-8 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg text-base leading-none">A</div>
                    <img src="logo-avapace.png" alt="Logo AVAPACE" className="h-6 w-auto grayscale" />
                    <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                    <span className="text-xl font-black text-slate-300 uppercase tracking-widest italic leading-none">2025</span>
                </div>
                <p className="text-[10px] font-black text-[#0069b4] uppercase tracking-[0.4em] text-center italic opacity-60">Escucha Activa • Impacto Real • Misión Compartida</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
