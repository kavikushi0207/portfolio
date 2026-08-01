document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize Vanta.js Dots Background
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,           // Modern Blue for the network lines
        backgroundColor: 0x050505, // Deep dark background
        points: 12.00,             // Lower number = cleaner, less cluttered look
        maxDistance: 20.00,        // How far lines reach to connect
        spacing: 18.00             // Spreads the nodes out beautifully
    });

    // 2. GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    const fadeElements = gsap.utils.toArray('.fade-up');
    
    fadeElements.forEach((element) => {
        gsap.fromTo(element, 
            { 
                y: 50, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });
    // 3. Copy to Clipboard Functionality
    
});
function copyEmail() {
        const email = "kavikushi0207@gmail.com";
        
        // Copies the email to the user's clipboard
        navigator.clipboard.writeText(email).then(() => {
            
            const copyText = document.getElementById("copyText");
            const copyIcon = document.getElementById("copyIcon");
            const copyBtn = document.getElementById("copyBtn");

            // Change text and style to show success
            copyText.innerText = "Copied!";
            copyBtn.style.color = "#10b981"; // Emerald green success color
            copyBtn.style.borderColor = "#10b981";
            
            // Change icon to a checkmark
            copyIcon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';

            // Reset the button back to normal after 3 seconds
            setTimeout(() => {
                copyText.innerText = "Copy";
                copyBtn.style.color = ""; // Resets to CSS default
                copyBtn.style.borderColor = "";
                // Reset icon to the copy squares
                copyIcon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
            }, 3000);
            
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
// 4. Initialize Swiper Carousel for Extracurriculars
    const swiper = new Swiper('.extra-swiper', {
        effect: 'coverflow',       // Gives it a premium 3D slide effect
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 'auto',     // Automatically sizes based on the CSS width
        spaceBetween: 30,          // Space between cards
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // Adjusts spacing for mobile
            320: { spaceBetween: 20 },
            768: { spaceBetween: 30 }
        }
    });    
// === MOBILE NAVIGATION TOGGLE ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const allNavItems = document.querySelectorAll(".nav-links li a"); // Selects all the links inside

// 1. Toggle the menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// 2. Automatically close the menu when a link is clicked
allNavItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
// === MULTILINGUAL SYSTEM ===

const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_pub: "Publications",
        nav_certs: "Certifications",
        nav_beyond: "Beyond Code",
        nav_contact: "Contact",
        nav_resume: "Resume",

        // Hero
        hero_hi: "Hi, my name is",
        hero_title: "Kavini<br><span class='text-accent'>Pathagamage.</span>",
        hero_desc: "I build secure cloud applications and scalable microservices. Currently a Computer Engineering MSc Student at Politecnico di Milano, focusing on Cybersecurity and Cloud Computing.",
        hero_btn: "View My Work",

        // About
        about_title: "Who I Am",
        about_role: "Software Engineer & Researcher",
        about_quote: "“ I am passionate about exploring new trends in computer engineering, particularly in cloud applications and telecommunication solutions blended with cybersecurity. My goal is to contribute to creating a safer, more connected world. ”",
        edu_title: "Education",
        badge_ongoing: "Ongoing",
        badge_completed: "Completed",
        lang_title: "Languages",
        lang_native: "C2 Native",
        lang_prof: "B2 Proficient",
        lang_inter: "B1 Intermediate",
        affil_title: "Affiliations",
        affil_assoc: "Associate Member",
        affil_student: "Student Member",
        work_title: "Work Status & Logistics",
        work_auth: "Work Authorization",
        work_auth_desc: "Fully eligible to work in Italy (Permesso di Soggiorno).",
        work_mob: "Mobility",
        work_mob_desc: "Patente B & Automunita (Personal vehicle available).",
        tech_title: "Technologies & Tools",

        // Experience
        exp_title: "Where I've Worked",
        exp_intern: "Software Engineer Intern",
        exp_desc1: "Built an Android app for submitting vehicle defect tickets and tracking updates, alongside a Web Application designed for ticket management and scheduling maintenance appointments.",
        exp_ra: "Research Assistant",
        exp_desc2: "Developed a peer-to-peer federated learning platform for Industrial IoT focusing on privacy preservation. Implemented differential privacy and encryption protocols.",
        exp_si: "Student Instructor",
        exp_desc3: "Contributed to teaching assistance through theoretical and practical examples for undergraduates.",
        exp_desc4: "Developed a internal ticketing system for managing and tracking support requests.",

        // Projects
        proj_title: "Featured Projects",
        proj_proposal: "Proposal ↓",
        proj_code: "Code ↗",
        proj_slides: "Slides ↓",
        proj_manual: "Manual ↓",
        badge_public: "Public",
        badge_private: "Private",
        proj_desc1: "Creating the official website for Itali Kuppiya, a platform for teaching the basic Italian language to Sri Lankan people in an explanatiive way.",
        proj_desc2: "This is for playing italian in sinhala language to practice italian language for Sri Lankan people.",
        proj_desc3: "Executed a comprehensive Function-as-a-Service (FaaS) performance analysis project. Involved deep cloud benchmarking and managing containerized microservices.",
        proj_desc4: "Engineered a mobile application using Flutter. Designed core code architecture, managed complex local storage integrations, and configured cross-platform deployment files.",
        proj_desc5: "Research and Development of a system consists of two apps( android app and web application)to submit and track vehicle defects and schedule appointments for maintenance.",
        proj_desc6: "Collaborative Federated Learning Platform for Privacy-preserved Decentralized Machine Learning in Industrial Internet of Things (IIoT).",

        // Publications
        pub_title: "Publications",
        pub_desc1: "A decentralized federated learning platform focusing on secure peer-to-peer data transfer and privacy preservation in IIoT environments.",
        pub_desc2: "Research accepted at APAN58 highlighting advanced encryption protocols and differential privacy techniques for collaborative learning.",
        pub_read: "Read Paper ↗",
        res_title: "Research Interests",
        res_cyber: "🛡️ Cybersecurity",
        res_cloud: "☁️ Cloud Computing",
        res_fl: "🤖 Federated Learning",
        res_iiot: "🏭 Industrial IoT (IIoT)",
        res_privacy: "🔐 Privacy Preservation",
        res_cloud_sec: "☁️🔒 Cloud Security",
        res_faas: "⚡ FaaS Performance",
        res_encryp: "🔑 Encryption Mechanisms",

        // Certifications
        cert_title: "Certifications & Awards",
        cert_ecsl: "ECSL engineer membership",
        cert_affil: "Affiliations",
        cert_gcp2: "Strategies for Cloud Risk Management",
        cert_l2: "L2 Italian certificate by CISIA",
        cert_lang: "Languages",
        cert_agile1: "Agile Project Management",
        cert_gcp1: "Introduction to security principles in cloud computing",
        cert_agile2: "Agile Project Management - Agile as a Culture",
        cert_a2: "A2 Italian certificate by CPIA",
        cert_pm: "Project Management Principles and Practices",

        // Beyond Code
        extra_title: "Beyond The Code",
        badge_social: "Social",
        badge_org: "Organizer",
        badge_sports: "Sports",
        badge_vic: "Victory",
        badge_lead: "Leadership",
        badge_mentor: "Mentorship",
        badge_int: "International Meets",
        extra_ik_t: "Owner of \"Itali Kuppiya\" Educational page",
        extra_ik_d: "Running a successful educational fb page for the Sri Lankan community to learn Italian easy and simple way from thier own mother tongue.",
        extra_hax_t: "Founder & President of HaXtreme 1.0v",
        extra_hax_d: "Founded and served as the Chairperson of IEEE HaXtreme. Managed organizing committees, structured the technical events, and successfully led the initiative from the ground up.",
        extra_ath_t: "University Athlete",
        extra_ath_d: "Dedicated university athlete balancing rigorous engineering academics with high-level sports. Earned University Colors and brought a strong work ethic from the platform into my professional life.",
        extra_weight_t: "Weightlifting Champion",
        extra_weight_d: "Secured the championship title as the Winner of Weightlifting (2022) at the faculty level, proving the value of consistency, strict training, and determination.",
        extra_power_t: "Powerlifting Captain",
        extra_power_d: "Served as the University Captain of Powerlifting (2023). Beyond leading the team, I secured personal victories including 1st Runner-Up (2022) and Winner of Powerlifting (2019).",
        extra_mentor_t: "Undergraduate Mentorship",
        extra_mentor_d: "Organized awareness programs and served as a Student Instructor, actively mentoring fresh undergraduates to ease their transition into university life and engineering principles.",
        extra_int_t: "International Meetups",
        extra_int_d: "Participated in and organized international meetups to connect with peers and professionals from around the world in Polimi.",
        extra_soc_t: "Social Entertainer",
        extra_soc_d: "Singing and performing at various events and gatherings.",

        // Contact
        contact_title: "Get In Touch",
        contact_heading: "Let's build something <span class='text-accent'>together.</span>",
        contact_desc: "I am currently open to new opportunities, collaborations, and discussions in Cloud Computing, Cybersecurity, and Software Engineering. Whether you have a question or just want to connect, my inbox is always open!",
        contact_btn: "Write Me",
        contact_copy: "Copy",
        footer_text: "All rights reserved © 2026 Kavini Madhusanka Kushani Pathagamage"
    },
    it: {
        // Navigation
        nav_about: "Chi Sono",
        nav_exp: "Esperienza",
        nav_projects: "Progetti",
        nav_pub: "Pubblicazioni",
        nav_certs: "Certificazioni",
        nav_beyond: "Oltre il Codice",
        nav_contact: "Contatti",
        nav_resume: "Curriculum",

        // Hero
        hero_hi: "Ciao, mi chiamo",
        hero_title: "Kavini<br><span class='text-accent'>Pathagamage.</span>",
        hero_desc: "Sviluppo applicazioni cloud sicure e microservizi scalabili. Attualmente studentessa magistrale in Ingegneria Informatica al Politecnico di Milano, con focus su Cybersecurity e Cloud Computing.",
        hero_btn: "Guarda i miei progetti",

        // About
        about_title: "Chi Sono",
        about_role: "Ingegnere del Software & Ricercatrice",
        about_quote: "“Appassionata nell'esplorare le nuove tendenze dell'ingegneria informatica, in particolare le applicazioni cloud e le soluzioni di telecomunicazione unite alla cybersecurity. Il mio obiettivo è contribuire a creare un mondo più sicuro e connesso.”",
        edu_title: "Formazione",
        badge_ongoing: "In corso",
        badge_completed: "Conseguita",
        lang_title: "Lingue",
        lang_native: "Madrelingua (C2)",
        lang_prof: "Livello Avanzato (B2)",
        lang_inter: "Livello Intermedio (B1)",
        affil_title: "Affiliazioni",
        affil_assoc: "Membro Associato",
        affil_student: "Membro Studente",
        work_title: "Autorizzazione & Mobilità",
        work_auth: "Autorizzazione al lavoro",
        work_auth_desc: "Pienamente idonea al lavoro in Italia (Permesso di Soggiorno valido).",
        work_mob: "Mobilità",
        work_mob_desc: "Patente B & Automunita.",
        tech_title: "Tecnologie & Strumenti",

        // Experience
        exp_title: "Esperienza Lavorativa",
        exp_intern: "Tirocinante Software Engineer",
        exp_desc1: "Sviluppo di un'app Android per la segnalazione di difetti dei veicoli e il tracciamento degli aggiornamenti, affiancata da una Web App progettata per la gestione dei ticket e la programmazione della manutenzione.",
        exp_ra: "Ricercatrice Assistente",
        exp_desc2: "Sviluppo di una piattaforma di apprendimento federato peer-to-peer per l'Industrial IoT con focus sulla tutela della privacy. Implementazione di protocolli di privacy differenziale e crittografia.",
        exp_si: "Tutor Universitario",
        exp_desc3: "Supporto alla didattica attraverso spiegazioni teoriche ed esercitazioni pratiche per studenti triennali.",
        exp_desc4: "Sviluppo di un sistema interno di ticketing per la gestione e il tracciamento delle richieste di supporto.",

        // Projects
        proj_title: "Progetti in Evidenza",
        proj_proposal: "Proposta ↓",
        proj_code: "Codice ↗",
        proj_slides: "Slide ↓",
        proj_manual: "Manuale ↓",
        badge_public: "Pubblico",
        badge_private: "Privato",
        proj_desc1: "Creazione del sito ufficiale per Itali Kuppiya, una piattaforma per l'insegnamento della lingua italiana di base ai cittadini srilankesi in modo chiaro e accessibile.",
        proj_desc2: "Applicazione per esercitarsi con la lingua italiana tramite spiegazioni in lingua singalese, pensata per la comunità srilankese.",
        proj_desc3: "Esecuzione di un'analisi approfondita delle prestazioni Function-as-a-Service (FaaS). Inclusione di benchmarking cloud avanzato e gestione di microservizi containerizzati.",
        proj_desc4: "Sviluppo di un'applicazione mobile con Flutter. Progettazione dell'architettura base del codice, gestione di integrazioni complesse di local storage e configurazione dei file di deployment.",
        proj_desc5: "Ricerca e sviluppo di un sistema composto da due applicazioni (app Android e web app) per l'invio e il tracciamento dei difetti dei veicoli e la programmazione della manutenzione.",
        proj_desc6: "Piattaforma collaborativa di Federated Learning per il Machine Learning decentralizzato e rispettoso della privacy nell'Industrial Internet of Things (IIoT).",

        // Publications
        pub_title: "Pubblicazioni",
        pub_desc1: "Una piattaforma decentralizzata di federated learning focalizzata sul trasferimento sicuro dei dati peer-to-peer e sulla conservazione della privacy in ambienti IIoT.",
        pub_desc2: "Ricerca accettata ad APAN58 che evidenzia protocolli avanzati di crittografia e tecniche di privacy differenziale per l'apprendimento collaborativo.",
        pub_read: "Leggi l'articolo ↗",
        res_title: "Interessi di Ricerca",
        res_cyber: "🛡️ Sicurezza Informatica",
        res_cloud: "☁️ Cloud Computing",  /* Cloud Computing stays in English in Italian IT context */
        res_fl: "🤖 Apprendimento Federato",
        res_iiot: "🏭 IoT Industriale (IIoT)",
        res_privacy: "🔐 Tutela della Privacy",
        res_cloud_sec: "☁️🔒 Sicurezza Cloud",
        res_faas: "⚡ Prestazioni FaaS",
        res_encryp: "🔑 Meccanismi di Crittografia",
        

        // Certifications
        cert_title: "Certificazioni & Premi",
        cert_ecsl: "Iscrizione albo ingegneri ECSL",
        cert_affil: "Affiliazioni",
        cert_gcp2: "Strategie per la Gestione del Rischio Cloud",
        cert_l2: "Certificato di lingua italiana L2 (CISIA)",
        cert_lang: "Lingue",
        cert_agile1: "Gestione di Progetti Agile",
        cert_gcp1: "Introduzione ai principi di sicurezza nel cloud computing",
        cert_agile2: "Gestione Agile - L'Agile come cultura",
        cert_a2: "Certificato di lingua italiana A2 (CPIA)",
        cert_pm: "Principi e Pratiche di Project Management",

        // Beyond Code
        extra_title: "Oltre il Codice",
        badge_social: "Sociale",
        badge_org: "Organizzatrice",
        badge_sports: "Sport",
        badge_vic: "Vittoria",
        badge_lead: "Leadership",
        badge_mentor: "Mentorship",
        badge_int: "Eventi Internazionali",
        extra_ik_t: "Proprietaria della pagina educativa 'Itali Kuppiya'",
        extra_ik_d: "Gestione di una pagina Facebook educativa di successo per aiutare la comunità srilankese a imparare l'italiano in modo semplice e nella propria lingua madre.",
        extra_hax_t: "Fondatrice e Presidente di HaXtreme 1.0v",
        extra_hax_d: "Fondatrice e Presidente di IEEE HaXtreme. Gestione dei comitati organizzativi, strutturazione degli eventi tecnici e guida di successo dell'iniziativa partendo da zero.",
        extra_ath_t: "Atleta Universitaria",
        extra_ath_d: "Atleta dedita a bilanciare i rigorosi studi di ingegneria con lo sport ad alto livello. Ottenimento di meriti sportivi universitari e applicazione di una forte etica del lavoro dalla pedana alla vita professionale.",
        extra_weight_t: "Campionessa di Sollevamento Pesi",
        extra_weight_d: "Vincitrice assoluta di sollevamento pesi a livello di facoltà (2022), dimostrando il valore della costanza, del duro allenamento e della determinazione.",
        extra_power_t: "Capitano di Powerlifting",
        extra_power_d: "Capitano della squadra universitaria di Powerlifting (2023). Oltre a guidare la squadra, ho ottenuto vittorie personali tra cui 2° classificata (2022) e Vincitrice assoluta (2019).",
        extra_mentor_t: "Mentore per Studenti Triennali",
        extra_mentor_d: "Organizzazione di programmi di sensibilizzazione e ruolo di Tutor Studentesco, supportando attivamente le matricole per facilitare il loro ingresso nella vita universitaria.",
        extra_int_t: "Eventi Internazionali",
        extra_int_d: "Partecipazione e organizzazione di incontri internazionali per fare networking con colleghi e professionisti da tutto il mondo al Polimi.",
        extra_soc_t: "Intrattenitrice",
        extra_soc_d: "Esibizioni canore e partecipazioni a vari eventi e ritrovi sociali.",

        // Contact
        contact_title: "Contatti",
        contact_heading: "Creiamo qualcosa di <span class='text-accent'>straordinario.</span>",
        contact_desc: "Attualmente sono aperta a nuove opportunità, collaborazioni e discussioni in ambito Cloud Computing, Cybersecurity e Software Engineering. Se hai una domanda o vuoi semplicemente connetterti, la mia casella di posta è sempre aperta!",
        contact_btn: "Scrivimi",
        contact_copy: "Copia",
        footer_text: "Tutti i diritti riservati © 2026 Kavini Madhusanka Kushani Pathagamage"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 
                  (navigator.language.startsWith('it') ? 'it' : 'en');

const langToggleBtn = document.getElementById('lang-toggle');

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang); 
    langToggleBtn.innerText = lang === 'en' ? '🇮🇹 IT' : '🇬🇧 EN';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        if (translations[lang][translationKey]) {
            // Notice the change to innerHTML here!
            element.innerHTML = translations[lang][translationKey]; 
        }
    });
}

setLanguage(currentLang);

langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'it' : 'en');
});    