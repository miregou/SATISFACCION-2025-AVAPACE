// Iconografía SVG integrada
const IconHeart = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>;
const IconUsers = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const IconTrending = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
const IconMessage = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const IconAward = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
const IconCheck = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
const IconAlert = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const IconPrinter = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>;
const IconTarget = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const IconZap = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const IconStar = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;

const DATA = {
    stats: { nps: 62, avg: 4.15, responses: 101 },
    blocks: [
        { id: 1, title: "1. Ambiente Laboral", desc: "Clima de colaboración, respeto y agilidad operativa.", avg: 4.28, strengths: ["El respeto entre niveles es excelente.", "Fuerte sentimiento de apoyo mutuo."], improvements: ["Agilizar la burocracia administrativa."], data: [{ name: "Respeto", d1: 0, d2: 2, d3: 8, d4: 20, d5: 70 }, { name: "Apoyo", d1: 2, d2: 5, d3: 10, d4: 34, d5: 49 }, { name: "Agilidad", d1: 15, d2: 25, d3: 30, d4: 20, d5: 10 }] },
        { id: 2, title: "2. Condiciones Físicas", desc: "Limpieza, mantenimiento y materiales de trabajo.", avg: 3.92, strengths: ["Niveles de limpieza muy altos.", "Seguridad y uso de EPIs correcto."], improvements: ["Renovación de equipos tecnológicos."], data: [{ name: "Limpieza", d1: 0, d2: 4, d3: 10, d4: 50, d5: 36 }, { name: "Comodidad", d1: 5, d2: 12, d3: 20, d4: 45, d5: 18 }, { name: "Materiales", d1: 8, d2: 15, d3: 25, d4: 35, d5: 17 }] },
        { id: 3, title: "3. Relación con Responsables", desc: "Feedback y apoyo del liderazgo directo.", avg: 4.31, strengths: ["Cercanía y trato humano excelente.", "Expectativas claras."], improvements: ["Feedback formal frecuente."], data: [{ name: "Apoyo", d1: 0, d2: 3, d3: 12, d4: 30, d5: 55 }, { name: "Feedback", d1: 3, d2: 7, d3: 15, d4: 41, d5: 34 }] },
        { id: 4, title: "4. Reconocimiento y Desarrollo", desc: "Valoración del talento y formación.", avg: 3.85, strengths: ["Planes de formación técnica.", "Reconocimiento público de logros."], improvements: ["Valoración individualizada."], data: [{ name: "Formación", d1: 2, d2: 10, d3: 22, d4: 40, d5: 26 }, { name: "Valoración", d1: 5, d2: 12, d3: 22, d4: 38, d5: 23 }] },
        { id: 5, title: "5. Bienestar y Equilibrio", desc: "Gestión del estrés y motivación diaria.", avg: 4.08, strengths: ["Alta motivación intrínseca.", "Compromiso con el usuario."], improvements: ["Prevención del desgaste emocional."], data: [{ name: "Motivación", d1: 2, d2: 4, d3: 18, d4: 40, d5: 36 }, { name: "Estrés", d1: 10, d2: 18, d3: 32, d4: 28, d5: 12 }] },
        { id: 6, title: "6. Comunicación Interna", desc: "Transparencia y flujo de información.", avg: 3.65, strengths: ["Objetivos claros.", "Canales oficiales establecidos."], improvements: ["Rapidez informativa entre centros."], data: [{ name: "Procedimientos", d1: 6, d2: 15, d3: 35, d4: 30, d5: 14 }, { name: "Información", d1: 10, d2: 20, d3: 35, d4: 25, d5: 10 }] },
        { id: 7, title: "7. Conciliación e Igualdad", desc: "Respeto a la vida personal y equidad.", avg: 4.38, strengths: ["Igualdad real percibida.", "Respeto a la vida familiar."], improvements: ["Antelación en los turnos."], data: [{ name: "Igualdad", d1: 0, d2: 2, d3: 12, d4: 30, d5: 56 }, { name: "Flexibilidad", d1: 0, d2: 5, d3: 12, d4: 45, d5: 38 }] },
        { id: 8, title: "8. Propósito y Misión", desc: "Alineación con los valores sociales de AVAPACE.", avg: 4.82, strengths: ["Orgullo masivo de pertenencia.", "Identificación total con la Misión."], improvements: ["Liderar desde el propósito."], data: [{ name: "Misión", d1: 0, d2: 0, d3: 2, d4: 15, d5: 83 }, { name: "Orgullo", d1: 0, d2: 2, d3: 5, d4: 30, d5: 63 }] }
    ],
    qualitative: [
        {
            id: "Q1", title: "Operatividad y Eficiencia",
            summary: "La burocracia en papel es la mayor queja percibida; el equipo siente que resta tiempo valioso al cuidado directo.",
            actions: ["Digitalización integral (x32)", "Renovación de tablets (x18)", "Optimización WiFi (x12)"],
            quotes: [
                "Eliminar el papel para devolver tiempo a la atención directa.",
                "Optimizar el tiempo y los recursos para que la burocracia sea más ágil.",
                "PCs y tablets van muy lentos en los centros; necesitamos renovación.",
                "Digitalizar los registros diarios e informes de seguimiento."
            ]
        },
        {
            id: "Q2", title: "Bienestar y Cultura",
            summary: "Se requiere un refuerzo del apoyo emocional y más espacios de cohesión ante la carga emocional diaria.",
            actions: ["Grupos de descarga (x40)", "Encuentros lúdicos (x25)", "Reconocimientos (x15)"],
            quotes: [
                "Crear grupos de apoyo para gestionar la alta carga emocional de nuestro trabajo.",
                "Buzón de agradecimientos entre compañeros/as.",
                "Organizar más encuentros informales presenciales entre centros.",
                "Reconocimientos simbólicos por años de antigüedad."
            ]
        }
    ],
    allComments: [
        "Actualización de los equipos informáticos, van muy lentos y se pierde mucho tiempo.",
        "Eliminar el papel definitivamente, digitalizar registros ayudaría mucho a centrarse en el usuario.",
        "Mejorar la climatización (frío/calor) de las salas, es un tema recurrente cada año.",
        "Siento que somos una gran familia y eso se nota en el trato al usuario.",
        "Los cuadrantes deberían entregarse con más antelación para poder conciliar.",
        "Digitalizar los informes de seguimiento para que sean más ágiles de consultar.",
        "Mejorar la conexión WiFi en las zonas de trabajo, hay muchos puntos ciegos.",
        "Cercanía y trato humano excelente por parte de mi responsable directo.",
        "Inversión en material didáctico y de estimulación nuevo para los talleres.",
        "Necesitamos PC portátiles más modernos para las reuniones técnicas.",
        "Orgullo de ser parte de la familia AVAPACE desde hace muchos años.",
        "Fomentar el teletrabajo en los puestos donde sea técnicamente posible.",
        "Más formación específica en grandes necesidades de apoyo y deglución.",
        "Arreglar persianas y elementos de mantenimiento que llevan tiempo rotos.",
        "El compromiso de los compañeros es el mayor activo que tiene esta asociación.",
        "Facilitar la jornada intensiva en verano para mejorar el bienestar del equipo.",
        "Agilizar la burocracia administrativa con los centros territoriales.",
        "Me siento muy orgullosa de pertenecer a AVAPACE y de la labor que hacemos.",
        "Unificar criterios entre los diferentes centros para trabajar de la misma forma.",
        "Crear grupos de apoyo emocional para gestionar la carga del trabajo diario.",
        "Pangea debe ser más intuitivo para que no perdamos tanto tiempo registrando.",
        "Sillas de oficina más ergonómicas, pasamos muchas horas sentados en gestión.",
        "Fomentar el reconocimiento no solo por antigüedad sino por el buen desempeño.",
        "La comunicación entre centros es mejorable, a veces nos falta información clave.",
        "Se debería fomentar más la cohesión entre los distintos centros de la organización.",
        "Saber que mi trabajo tiene un propósito social me motiva cada mañana.",
        "Optimizar el tiempo de los registros para que no quiten tiempo de calidad de atención.",
        "Me gusta la libertad que tengo para proponer actividades nuevas con los usuarios.",
        "Las instalaciones de algunos centros necesitan una reforma estética y funcional.",
        "Siento que mi voz es escuchada cuando hay problemas reales en el servicio.",
        "El respeto entre compañeros es la mayor fortaleza que tenemos ahora mismo.",
        "Necesitamos espacios para poder descargar emocionalmente tras situaciones críticas.",
        "Conciliación familiar muy respetada, me siento apoyada por la entidad.",
        "Más formación técnica específica para el personal de nueva incorporación.",
        "El apoyo mutuo entre compañeros hace que el día a día sea más llevadero.",
        "Agilizar los trámites de reposición de materiales de limpieza y protección.",
        "Me siento muy comprometida con los objetivos específicos de mi centro.",
        "Potenciar las reuniones de equipo para compartir casos de éxito y buenas prácticas.",
        "La igualdad es real en esta casa, se nota en el trato y las oportunidades.",
        "Me gustaría tener más feedback formal sobre mi desempeño individual anualmente.",
        "Sentirse respaldada por la organización en la toma de decisiones técnicas.",
        "Mejorar la rapidez de respuesta de los servicios centrales ante incidencias.",
        "La formación en gestión emocional y mindfulness sería un gran acierto.",
        "Poder participar en el diseño del Plan de Gestión me hace sentir parte de AVAPACE.",
        "Cuidar el desgaste de los profesionales con mayor antigüedad.",
        "El trato humano de AVAPACE marca la diferencia con otras entidades del sector.",
        "Facilitar el acceso a la información relevante de forma digital y centralizada.",
        "Los procesos de acogida al personal nuevo deberían ser más estructurados y cálidos.",
        "La transparencia en la comunicación interna ha mejorado mucho últimamente.",
        "Ver la evolución de los usuarios compensa cualquier esfuerzo administrativo.",
        "Un buzón de sugerencias real que se revise y del que se den respuestas.",
        "La Misión de la entidad es lo que me mantiene ilusionada con el proyecto.",
        "Aprecio mucho la formación continua y especializada que se nos ofrece.",
        "El ambiente entre los compañeros es inmejorable, hay mucha piña y respeto.",
        "Los materiales de fisioterapia y logopedia necesitan una renovación periódica.",
        "Me siento valorada por mis responsables cuando el trabajo sale bien.",
        "Estaría bien tener más momentos de encuentro lúdico fuera del trabajo.",
        "La agilidad burocrática es el gran reto que tiene la entidad este año.",
        "Sentir que cuidamos a las personas con la máxima dignidad posible.",
        "Potenciar el intercambio de experiencias entre los centros periféricos y sede.",
        "La seguridad y salud laboral están muy bien gestionadas y nos sentimos protegidos.",
        "Necesitamos una plataforma única que centralice toda la documentación técnica.",
        "La pasión de los profesionales se contagia y ayuda en los días difíciles.",
        "Espero que los cambios tecnológicos vengan acompañados de formación práctica.",
        "El clima laboral es el motivo principal por el que no me planteo cambiar de trabajo.",
        "Reforzar los equipos en las franjas horarias de mayor carga asistencial.",
        "Apostar por el talento interno de AVAPACE para cubrir las vacantes de responsabilidad.",
        "La labor de AVAPACE es indispensable para las familias y la sociedad valenciana.",
        "Me gusta que se nos pida opinión antes de realizar cambios de calado en los centros.",
        "Digitalizar las actas de las reuniones para que la información fluya mejor.",
        "Fomentar hábitos saludables (fruta, estiramientos) dentro del entorno laboral.",
        "Agradezco la claridad en las instrucciones recibidas por parte de coordinación.",
        "Trabajar por la autonomía de las personas con parálisis cerebral es nuestra meta.",
        "Los turnos están equilibrados y se respetan escrupulosamente los descansos.",
        "Falta un sistema de agradecimiento formal que visibilice el trabajo bien hecho.",
        "La ética profesional es un valor transversal en todas nuestras actuaciones.",
        "Necesitamos hardware que no se bloquee al trabajar con registros de gran volumen.",
        "Mejorar el flujo de información descendente desde la dirección a la base.",
        "Saber que mi esfuerzo cuenta para mejorar la calidad de vida de otras personas.",
        "La conciliación en AVAPACE es real, no solo algo que se dice en los papeles.",
        "Fomentar la cultura del refuerzo positivo entre departamentos y servicios.",
        "Alinear mis objetivos personales con la Misión social de la entidad.",
        "Gracias por realizar estas encuestas y darnos un altavoz para mejorar.",
        "Aportamos corazón y mucha profesionalidad en cada una de nuestras acciones.",
        "El compromiso de AVAPACE con las personas es también mi propio compromiso.",
        "Mejorar la señalización de accesibilidad en los centros más antiguos.",
        "Fomentar la creatividad en el diseño de las actividades diarias con los usuarios.",
        "El bienestar de nosotros como trabajadores repercute en la calidad de la atención.",
        "La burocracia actual a veces asfixia las ganas de innovar en el día a día.",
        "Sentirse parte de una organización que es referente en el sector.",
        "Potenciar la formación en nuevas tecnologías aplicadas a la diversidad.",
        "Mejorar la ventilación en las zonas comunes de los centros territoriales.",
        "La estabilidad laboral que ofrece AVAPACE nos da mucha tranquilidad.",
        "El apoyo de los técnicos es fundamental para que el trabajo sea excelente.",
        "Agradezco la flexibilidad ante emergencias familiares imprevistas.",
        "Seguir siendo una entidad puntera en el acompañamiento a las familias.",
        "Mejorar el mantenimiento de los vehículos de transporte adaptado.",
        "Sentir que formas parte de un equipo con valores humanos muy sólidos.",
        "La comunicación interna debe ser más rápida y menos formal en lo operativo.",
        "Juntos hacemos de AVAPACE un lugar mejor cada año.",
        "Mi compromiso con los usuarios es total, me siento muy motivado.",
        "Que la digitalización sea una realidad este año para soltar el papel."
    ]
};

const COLORS_MAP = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#15803d'];

// Expose to window for global access
window.IconHeart = IconHeart;
window.IconUsers = IconUsers;
window.IconTrending = IconTrending;
window.IconMessage = IconMessage;
window.IconAward = IconAward;
window.IconCheck = IconCheck;
window.IconAlert = IconAlert;
window.IconPrinter = IconPrinter;
window.IconTarget = IconTarget;
window.IconZap = IconZap;
window.IconStar = IconStar;
window.DATA = DATA;
window.COLORS_MAP = COLORS_MAP;
