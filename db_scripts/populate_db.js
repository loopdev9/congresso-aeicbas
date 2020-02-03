const { db } = require('../config.js');
// const { multer, bucket } = require('../storage.js');

// Collection: Article
    // Doc: id
        // title: string
        // link: string

// Collection: Sponsor
    // Doc: id
        // name: string
        // link: string
        // image: image

// Collection: Lecture
    // Doc: id
        // title: string
        // description: string
        // speaker: string
        // speakerDescription: string
        // begin: string HH:MM
        // end: string HH:MM
        // day: int
        // room: int

// Collection: users
    // Doc: id (random generated?)
        // name: string
        // mail: string (é preciso o mail?)
        // password: string
        // favorites: int [] (lectures indexes)

const articles = [     
    {
        title: "Connecting Professional Practice & Technology at the Bedside",
        link: "https://journals.lww.com/cinjournal/Fulltext/2016/12000/Connecting_Professional_Practice_and_Technology_at.6.aspx?WT.mc_id=HPxADx20100319xMP"
    },
    {
        title: "Changes in Nursing Electronic Health Record Documentation",
        link: "https://journals.lww.com/cinjournal/Fulltext/2019/05000/Changes_in_Efficiency_and_Quality_of_Nursing.5.aspx?WT.mc_id=HPxADx20100319xMP"
    },
    {
        title: "Current Trends in Robotics",
        link: "https://journals.lww.com/cinjournal/Abstract/2019/06000/Current_Trends_in_Robotics_in_Nursing_Patents_A.3.aspx?WT.mc_id=HPxADx20100319xMP"
    },
    {
        title: 'Using Data Mining Strategies ',
        link: 'https://journals.lww.com/cinjournal/Fulltext/2016/10000/Using_Data_Mining_Strategies_in_Clinical_Decision.9.aspx?WT.mc_id=HPxADx20100319xMP'
    } ,
    {
        title: 'Integrating an Academic Electronic Health Record',
        link: 'https://journals.lww.com/cinjournal/Fulltext/2016/08000/Integrating_an_Academic_Electronic_Health_Record_.4.aspx?WT.mc_id=HPxADx20100319xMP'
    } ,
    {
        title: 'HITECH Programs',
        link: 'https://journals.lww.com/cinjournal/Fulltext/2011/02000/HITECH_Programs_Supporting_the_Journey_to.10.aspx?WT.mc_id=HPxADx20100319xMP'
    } ,
    {
        title: 'The Omaha System',
        link: 'https://journals.lww.com/cinjournal/Fulltext/2011/01000/The_Omaha_System_and_Meaningful_Use__Applications.11.aspx?WT.mc_id=HPxADx20100319xMP'
    } ,
    {
        title: "Connecting Professional Practice and Technology at the Bedside",
        link: "https://journals.lww.com/cinjournal/Fulltext/2016/12000/Connecting_Professional_Practice_and_Technology_at.6.aspx?WT.mc_id=HPxADx20100319xMP"
    },
]

const sponsors = [   
    {
        name: 'Google',
        link: 'https://www.google.com/',
        image: 'google.png'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/',
        image: 'linkedin.png'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/',
        image: 'facebook.png'
    },
    {
        name: 'Imdb',
        link: 'https://www.imdb.com/',
        image: 'imdb.png'
    },
    {
        name: 'ICBAS',
        link: 'https://sigarra.up.pt/icbas/pt/web_page.inicial',
        image: 'icbas.png'
    },
    {
        name: 'FEUP',
        link: 'https://sigarra.up.pt/feup/pt/web_page.inicial',
        image: 'feup.png'
    },
    {
        name: 'JuniFEUP',
        link: 'https://www.junifeup.pt/',
        image: 'junifeup.png'
    },
]

const lectures = [
    // Day 1
    {
        title: 'Check-in',
        description: '',
        speaker: '',
        speakerDescription: '',
        begin: '13:30',
        end: '14:30',
        day: 1,
        room: "Auditório Prof. Doutor Alexandre Moreira",
        type: 'break',
    },
    {
        title: 'Opening Session',
        description: '',
        speaker: '',
        speakerDescription: '',
        begin: '14:30',
        end: '15:00',
        day: 1,
        room: "Auditório Prof. Doutor Alexandre Moreira",
        type: 'event',
    },
    {
        title: 'Poster Presentation',
        description: "",
        speaker: '',
        speakerDescription: '',
        begin: '15:00',
        end: '16:00',
        day: 1,
        room: "Auditório Prof. Doutor Alexandre Moreira",
        type: 'event',
    },
    {
        title: 'Coffee-break',
        description: '',
        speaker: '',
        speakerDescription: '',
        begin: '16:00',
        end: '16:30',
        day: 1,
        room: "Auditório Prof. Doutor Alexandre Moreira",
        type: 'break',
    },
    {
        title: 'Pentagon Competition',
        description: "",
        speaker: '',
        speakerDescription: '',
        begin: '16:30',
        end: '18:00',
        day: 1,
        room: "Auditório Prof. Doutor Alexandre Moreira",
        type: 'event',
    },
    {
        title: "Porto d'Honra",
        description: '',
        speaker: '',
        speakerDescription: '',
        begin: '18:00',
        end: '20:30',
        day: 1,
        room: "Auditório Prof. Doutor Alexandre Moreira",
        type: 'event',
    },
    //Day 2
    {
        title: 'Pentagon Session 1',
        description: 'One Health',
        speaker: '',
        speakerDescription: '',
        begin: '09:00',
        end: '10:30',
        day: 2,
        room: 1,
        type: 'pentagon',
    },
    {
        title: '',
        description: 'Evaluating the Impact of Environmental Tobacco Smoke on Biological Age Markers: A Canine Model',
        speaker: 'Natalie Hutchinson',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '',
        end: '',
        day: 2,
        room: 1,
        type: 'event',
        pentagonSession:'Pentagon Session 1'
    },
    {
        title: 'EUGLOH Project',
        description: 'EUGLOH Project',
        speaker: 'Abdelghani SGHIR',
        speakerDescription: '',
        begin: '',
        end: '',
        day: 2,
        room: 1,
        type: 'event',
        pentagonSession:'Pentagon Session 1'
    },
    {
        title: 'Impact of Aquatic Pollution on Animal Health',
        description: "Impact of Aquatic Pollution on Animal Health",
        speaker: '[Por Definir]',
        speakerDescription: '',
        begin: '',
        end: '',
        day: 2,
        room: 2,
    },/*
    {
        title: 'To Blockchain or Not: A Tech Tale of Bitcoin and Libra',
        description: 'What technology provided the humans leveraged on it.\n\nBlockchain appeared to solve a problem and it’s rapidly changing the world, Bitcoin was the first use case, Libra is the the next big thing, and is aiming to achieve 50M users in record time. But what is Blockchain ? What is behind the scene ? Is C better than Rust for this systems ? I will talk about the technology behind is and what it means for the future of software development.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 1,
        room: 2,
    },
    {
        title: 'Explorando vulnerabilidades numa app Android',
        description: 'A aplicação Anda permite aos utilizadores de transportes públicos do Porto usar o telemóvel em vez de um cartão físico para viajar na rede de transportes multimodais. Na data de lançamento desta aplicação, existiam vulnerabilidades de segurança que permitiam aceder a dados de outros utilizadores, incluindo passwords em plain-text. Nesta palestra será explicado o processo de descoberta desta falha. Serão também exploradas quais as ferramentas mais adequadas para realizar este tipo de investigação em aplicações Android (por exemplo: Frida).',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:40',
        end: '16:20',
        day: 1,
        room: 2,
    },
    {
        title: 'Product Engineering',
        description: "Building a product and making the produt grow and evolve differs a lot from what's taught in courses and lectured in classes. More than engineering skills it requires a lot of communication, ownership and leadership skills. In this talk we'll discuss how is to work for an IT company, what drives change, what drives product, what drives engineering and ultimately what should you know before you start your engineering career.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:15',
        day: 1,
        room: 2,
    },
    {
        title: 'Golden Chickens - Uncovering a Malware as a Service',
        description: 'In this talk, I will present an overview of the Malware as a Service (MaaS) environment and show how a major player in this market operates. I will also uncover some threat actors, clients of MaaS providers, that perform cyber attacks on a global scale.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:20',
        end: '18:00',
        day: 1,
        room: 2,
    },
    {
        title: 'competição de programação',
        description: 'A semana de informática irá contar com uma Competição de Programação a realizar-se durante todos os dias evento.\nSerão lançados dois exercícios por dia nos primeiros três dias, de dificuldade crescente.\nA participação é individual, estará aberta a partir da sessão de abertura, dia 29 de Outubro (segunda-feira), até às 14h00 de 1 de Novembro (quinta-feira), e os vencedores serão anunciados na cerimónia de encerramento.\nA competição decorrá online no HackerRank, onde serão utilizados mecanismos anti-cópia para detetar infracções.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:30',
        day: 1,
        room: 4,
    },
    {
        title: 'software engineering at outsystems',
        description: 'Todos os procuramos do que se faz bem lá fora esquecendo que em Portugal há equipas de classe mundial a inovar nos processos de engenharia de software. É isso que pretendemos dar a conhecer durante a nossa apresentação, quais os ingredientes essenciais para uma empresa de software nascida e baseada em Portugal',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 1,
        room: 3,
    },
    {
        title: "hitchhiker's guide to hardware maintenance",
        description: 'Tens um portátil que “está lento”, que “aquece muito e desliga”? Provavelmente está a precisar de manutenção. Fazer manutenção a um computador não é díficil, mas pode meter medo. Após este WorkShop o vosso computador vai funcionar como saiu da fabrica e em alguns caso até melhor.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:30',
        end: '17:30',
        day: 1,
        room: 4,
    },
    {
        title: "building the world's understanding layer",
        description: 'In this talk we’ll know more about how Unbabel is building the world’s understanding layer and removing language barriers through a combination of AI + Humans.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:40',
        day: 1,
        room: 3,
    },
    {
        title: 'programação competitiva - o quê? quando? como? porquê?',
        description: 'Esta apresentação começa por uma introdução à Programação Competitiva: em que consiste, tipos de concursos e exemplos de problemas. O porquê da participação nestas actividades originar ofertas de emprego e a sua contribuição para o orador passar as entrevistas da Google e Facebook.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:10',
        day: 1,
        room: 4,
    },
    {
        title: 'creating new digital realities - how vr and ar become xr',
        description: 'A retrospective of the path of VR and AR so far; successes and failiures. Then a look at the present and future of digital realities empowered by MR and how everything became XR. Finally a discussion of some notable real-world case-studies for all those technologies on the fields of gaming, tourism, industrial operations and real estate.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:10',
        end: '19:00',
        day: 1,
        room: 3,
    },
    {
        title: 'pitch de oportunidades',
        description: 'No Pitch de Oportunidades terás oportunidade de aprender mais sobre várias empresas que tornaram a semana de informática 2018 possível! Cada empresa fará um breve “pitch” falando sobre si - por exemplo o que fazem, como o fazem e em que áreas estão a recrutar. No final, será possível haver networking entre os participantes e as empresas, sendo este Pitch de Oportunidades algo a não perder!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 1,
        room: 4,
    },
    {
        title: 'data science in a complex environment',
        description: 'Data science is an interdisciplinary field whose execution/implementation process may vary depending on the constraints of the surrounding environment. A brief about the data science journey at Deloitte environment will be given.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '15:00',
        day: 1,
        room: 5,
    },
    {
        title: 'build a mobile app in 2 hours',
        description: 'Ao longo do workshop irás aprender a desenvolver apps para dispositivos moveis ios e android e terás a possibilidade de experimentar no teu próprio smartphone. No final além de aprenderes terás o teu próprio ambiente na cloud gratuito para que possas continuar a programar as apps que idealizares.s',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:00',
        day: 1,
        room: 6,
    },
    {
        title: 'from a concept to an exceptional product',
        description: 'Breakdown of our workflow with a focus on bridging the gap between Designers and Developers.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 1,
        room: 5,
    },
    {
        title: 'transforming mobility',
        description: 'Será feita uma abordagem sobre a empresa e o nosso foco em trazer a próxima geração de veículos autónomos, cidades inteligentes e conectividade para a vida. Além disso, serão abordados outros temas como a nova tecnologia de condução autónoma, a redefinição da conectividade do infotainment e novas soluções inteligentes de mobilidade.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 1,
        room: 5,
    },
    {
        title: 'jogos, realidade aumentada e virtual - extensões ou amputações da experiência humana?',
        description: 'Nesta comunicação serão apresentados alguns exemplos concretos de criação e desenvolvimento de jogos e outras aplicações de realidade aumentada (RA) e virtual (RV) de forma a contextualizarem-se campos possíveis de investigação nesta área. A partir de uma breve história dos dispositivos de realidade imersiva e mista sugerem-se possibilidades de criação e desenvolvimento que tiram partido do atual estado da arte destas tecnologias e apontam para processos criativos emergentes que questionam e desafiam a experiência humana como a conhecemos.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 1,
        room: 6,
    },
    {
        title: 'blockchain 101 - decentralization, cryptoeconomics, and icos',
        description: 'Blockchain technology, coupled with cryptoeconomics, allows us to confidently approach a whole new class of problems. It’s a force for good, bringing censorship resistance to a global economy. In this short talk, I’ll give you a short overview of the ecosystem, covering decentralization, Bitcoin, Ethereum, and ICOs',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:00',
        day: 1,
        room: 5,
    },
    {
        title: 'api day - open architectures',
        description: 'Com a digitalização do mundo e consequentemente da indústria, uma estratégia de arquitetura devidamente democratizada de acesso a API’s torna-se fundamental. Com esta, diversos desafios emergem: culturais, tecnológicos, metodológicos e operativos. Nesta sessão pretendemos apresentar-vos o caminho feito e a fazer já com proposta de valor nas mãos do consumidor',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:00',
        end: '19:00',
        day: 1,
        room: 5,
    },
    {
        title: 'sessão de networking',
        description: 'A Sessão de Networking será um momento único para contacto direto entre os estudantes e representantes das empresas. Seguindo um formato de “speed dating”, terás a hipótese de falar em primeira mão com várias empresas diferentes!\nO tempo acabou! Disseste tudo o que tinhas a dizer? Segue para a próxima mesa!\nEsta sessão será certamente diferente e divertida, estando todos contra o relógio!\nPor falar em relógio, já te inscreveste? Tic tac, o tempo não para!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 1,
        room: 6,
    },
    // Day 2
    {
        title: 'Sessão de Abertura',
        description: '',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:20',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'The Lean Startup',
        description: 'Achas que tens uma ideia inovadora e gostavas de criar a tua própria empresa? O conceito de “Lean Startup” explora como os empreendedores de hoje usam a inovação contínua no processo de criação de negócios de sucesso. Durante esta sessão vamos abordar todos os aspetos associados à criação de startups “lean”, desde a alocação eficiente de recursos, à iteração contínua de aprendizagem, testes e desenvolvimento.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:30',
        end: '16:00',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'Funding your dreams',
        description: "What is stopping you from fulfilling your dreams? Fear? Money? I'll solve that for you.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:30',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'O que não nos ensinaram na escola',
        description: 'Após cerca de 18 anos de educação, os nossos maiores desafios profissionais não serão sobre tecnologia, serão sobre pessoas e a escola não nos preparou para o que vamos encontrar. Ao mesmo tempo, a tecnologia está a evoluir tão rápido e a ficar tão acessível que toda a gente pode mudar o mundo. Esta sessão é sobre o que não nos ensinaram na escola. É sobre as ferramentas para lidar com pessoas. É sobre olhar para a tecnologia de outra forma. É sobre potencial ilimitado. Nesta sala tudo será possível. Vai ser ruidoso. Estão avisados.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:00',
        end: '17:40',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'Introduction to Natural Language Processing',
        description: "In this talk, we'll see how computers can understand text by learning about modern concepts in Natural Language Processing such as representation learning and recurrent neural networks. We'll show you the basics behind the tasks of text classification, information extraction, machine translation and dialog systems. We will also cover some Python text processing libraries and how you can start building your next NLP project.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:00',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'How can we Learn from Small Datasets?',
        description: 'Como podemos abordar um problema com machine learning quando os dados escasseiam? Que abordagens e que cuidados devemos ter?',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'Crush Your Coding Interview',
        description: 'Learn how to put your best foot forward at this Crush Your Coding Interview by Facebook. This presentation will focus on how to do well in software engineering interviews. It will cover: How to walk through an algorithm problem, How to brainstorm solutions, How to discuss the problem with your interviewer, How to write (and test) code on a whiteboard',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:40',
        end: '16:20',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'Fraud prevention with Deep Learning models',
        description: 'Machine learning for fraud prevention: from tree based models with feature engineering to deep learning, passing through AutoML.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:20',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: 'Preventing blindness using Artificial Intelligence',
        description: 'A Retinopatia Diabética (DR) é a maior causa de cegueira evitável no mundo desenvolvido, afetando mais de 25% dos pacientes diabéticos. Devido aos grandes impactos sociais e económicos da cegueira, a maioria dos países desenvolvidos implementou programas de rastreio para monitorizar a população diabética. Durante o rastreio, imagens do fundo do olho são obtidas e examinadas por oftalmologistas. Nós desenvolvemos um método de Inteligência Artificial que classifica automaticamente a qualidade das imagens, deteta indícios de DR e indica se o paciente deve ser tratado ou não. Nós mostramos que o nosso modelo tem resultados comparáveis a alguns oftalmologistas e obtém os resultados suficientemente bons para ser implementado em programas de rastreio. Este método tem o potencial de reduzir a pressão sobre os oftalmologistas, permitindo que se foquem no tratamento dos pacientes com DR, com o objetivo final de reduzir o número de incidentes de cegueira relacionada com DR.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:30',
        end: '18:00',
        day: 2,
        room: 1,
        type: 'event',
    },
    {
        title: ' Open Food Network, the distributed online marketplace making food fair',
        description: "The Open Food Network and it's different dimensions: the food system, open source, open community, e-commerce platform.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:00',
        day: 2,
        room: 2,
    },
    {
        title: 'To Blockchain or Not: A Tech Tale of Bitcoin and Libra',
        description: 'What technology provided the humans leveraged on it.\n\nBlockchain appeared to solve a problem and it’s rapidly changing the world, Bitcoin was the first use case, Libra is the the next big thing, and is aiming to achieve 50M users in record time. But what is Blockchain ? What is behind the scene ? Is C better than Rust for this systems ? I will talk about the technology behind is and what it means for the future of software development.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 2,
        room: 2,
    },
    {
        title: 'Explorando vulnerabilidades numa app Android',
        description: 'A aplicação Anda permite aos utilizadores de transportes públicos do Porto usar o telemóvel em vez de um cartão físico para viajar na rede de transportes multimodais. Na data de lançamento desta aplicação, existiam vulnerabilidades de segurança que permitiam aceder a dados de outros utilizadores, incluindo passwords em plain-text. Nesta palestra será explicado o processo de descoberta desta falha. Serão também exploradas quais as ferramentas mais adequadas para realizar este tipo de investigação em aplicações Android (por exemplo: Frida).',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:40',
        end: '16:20',
        day: 2,
        room: 2,
    },
    {
        title: 'Product Engineering',
        description: "Building a product and making the produt grow and evolve differs a lot from what's taught in courses and lectured in classes. More than engineering skills it requires a lot of communication, ownership and leadership skills. In this talk we'll discuss how is to work for an IT company, what drives change, what drives product, what drives engineering and ultimately what should you know before you start your engineering career.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:15',
        day: 2,
        room: 2,
    },
    {
        title: 'Golden Chickens - Uncovering a Malware as a Service',
        description: 'In this talk, I will present an overview of the Malware as a Service (MaaS) environment and show how a major player in this market operates. I will also uncover some threat actors, clients of MaaS providers, that perform cyber attacks on a global scale.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:20',
        end: '18:00',
        day: 2,
        room: 2,
    },
    {
        title: 'competição de programação',
        description: 'A semana de informática irá contar com uma Competição de Programação a realizar-se durante todos os dias evento.\nSerão lançados dois exercícios por dia nos primeiros três dias, de dificuldade crescente.\nA participação é individual, estará aberta a partir da sessão de abertura, dia 29 de Outubro (segunda-feira), até às 14h00 de 1 de Novembro (quinta-feira), e os vencedores serão anunciados na cerimónia de encerramento.\nA competição decorrá online no HackerRank, onde serão utilizados mecanismos anti-cópia para detetar infracções.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:30',
        day: 2,
        room: 4,
    },
    {
        title: 'software engineering at outsystems',
        description: 'Todos os procuramos do que se faz bem lá fora esquecendo que em Portugal há equipas de classe mundial a inovar nos processos de engenharia de software. É isso que pretendemos dar a conhecer durante a nossa apresentação, quais os ingredientes essenciais para uma empresa de software nascida e baseada em Portugal',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 2,
        room: 3,
    },
    {
        title: "hitchhiker's guide to hardware maintenance",
        description: 'Tens um portátil que “está lento”, que “aquece muito e desliga”? Provavelmente está a precisar de manutenção. Fazer manutenção a um computador não é díficil, mas pode meter medo. Após este WorkShop o vosso computador vai funcionar como saiu da fabrica e em alguns caso até melhor.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:30',
        end: '17:30',
        day: 2,
        room: 4,
    },
    {
        title: "building the world's understanding layer",
        description: 'In this talk we’ll know more about how Unbabel is building the world’s understanding layer and removing language barriers through a combination of AI + Humans.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:40',
        day: 2,
        room: 3,
    },
    {
        title: 'programação competitiva - o quê? quando? como? porquê?',
        description: 'Esta apresentação começa por uma introdução à Programação Competitiva: em que consiste, tipos de concursos e exemplos de problemas. O porquê da participação nestas actividades originar ofertas de emprego e a sua contribuição para o orador passar as entrevistas da Google e Facebook.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:10',
        day: 2,
        room: 4,
    },
    {
        title: 'creating new digital realities - how vr and ar become xr',
        description: 'A retrospective of the path of VR and AR so far; successes and failiures. Then a look at the present and future of digital realities empowered by MR and how everything became XR. Finally a discussion of some notable real-world case-studies for all those technologies on the fields of gaming, tourism, industrial operations and real estate.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:10',
        end: '19:00',
        day: 2,
        room: 3,
    },
    {
        title: 'pitch de oportunidades',
        description: 'No Pitch de Oportunidades terás oportunidade de aprender mais sobre várias empresas que tornaram a semana de informática 2018 possível! Cada empresa fará um breve “pitch” falando sobre si - por exemplo o que fazem, como o fazem e em que áreas estão a recrutar. No final, será possível haver networking entre os participantes e as empresas, sendo este Pitch de Oportunidades algo a não perder!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 2,
        room: 4,
    },
    {
        title: 'data science in a complex environment',
        description: 'Data science is an interdisciplinary field whose execution/implementation process may vary depending on the constraints of the surrounding environment. A brief about the data science journey at Deloitte environment will be given.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '15:00',
        day: 2,
        room: 5,
    },
    {
        title: 'build a mobile app in 2 hours',
        description: 'Ao longo do workshop irás aprender a desenvolver apps para dispositivos moveis ios e android e terás a possibilidade de experimentar no teu próprio smartphone. No final além de aprenderes terás o teu próprio ambiente na cloud gratuito para que possas continuar a programar as apps que idealizares.s',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:00',
        day: 2,
        room: 6,
    },
    {
        title: 'from a concept to an exceptional product',
        description: 'Breakdown of our workflow with a focus on bridging the gap between Designers and Developers.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 2,
        room: 5,
    },
    {
        title: 'transforming mobility',
        description: 'Será feita uma abordagem sobre a empresa e o nosso foco em trazer a próxima geração de veículos autónomos, cidades inteligentes e conectividade para a vida. Além disso, serão abordados outros temas como a nova tecnologia de condução autónoma, a redefinição da conectividade do infotainment e novas soluções inteligentes de mobilidade.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 2,
        room: 5,
    },
    {
        title: 'jogos, realidade aumentada e virtual - extensões ou amputações da experiência humana?',
        description: 'Nesta comunicação serão apresentados alguns exemplos concretos de criação e desenvolvimento de jogos e outras aplicações de realidade aumentada (RA) e virtual (RV) de forma a contextualizarem-se campos possíveis de investigação nesta área. A partir de uma breve história dos dispositivos de realidade imersiva e mista sugerem-se possibilidades de criação e desenvolvimento que tiram partido do atual estado da arte destas tecnologias e apontam para processos criativos emergentes que questionam e desafiam a experiência humana como a conhecemos.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 2,
        room: 6,
    },
    {
        title: 'blockchain 101 - decentralization, cryptoeconomics, and icos',
        description: 'Blockchain technology, coupled with cryptoeconomics, allows us to confidently approach a whole new class of problems. It’s a force for good, bringing censorship resistance to a global economy. In this short talk, I’ll give you a short overview of the ecosystem, covering decentralization, Bitcoin, Ethereum, and ICOs',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:00',
        day: 2,
        room: 5,
    },
    {
        title: 'api day - open architectures',
        description: 'Com a digitalização do mundo e consequentemente da indústria, uma estratégia de arquitetura devidamente democratizada de acesso a API’s torna-se fundamental. Com esta, diversos desafios emergem: culturais, tecnológicos, metodológicos e operativos. Nesta sessão pretendemos apresentar-vos o caminho feito e a fazer já com proposta de valor nas mãos do consumidor',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:00',
        end: '19:00',
        day: 2,
        room: 5,
    },
    {
        title: 'sessão de networking',
        description: 'A Sessão de Networking será um momento único para contacto direto entre os estudantes e representantes das empresas. Seguindo um formato de “speed dating”, terás a hipótese de falar em primeira mão com várias empresas diferentes!\nO tempo acabou! Disseste tudo o que tinhas a dizer? Segue para a próxima mesa!\nEsta sessão será certamente diferente e divertida, estando todos contra o relógio!\nPor falar em relógio, já te inscreveste? Tic tac, o tempo não para!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 2,
        room: 6,
    },
    {
        title: 'thinking serverless',
        description: 'Serverless é a mais recente camada de abstração a nível de cloud computing. Irei abordar brevemente as várias camadas existentes e como foram evoluindo até ao momento. Irei explicar as vantagens e o potencial de arquitectura serverless e apresentar alguns casos reais.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '19:10',
        end: '20:00',
        day: 2,
        room: 6,
    },

    // Day 3
    {
        title: 'Sessão de Abertura',
        description: '',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:20',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'The Lean Startup',
        description: 'Achas que tens uma ideia inovadora e gostavas de criar a tua própria empresa? O conceito de “Lean Startup” explora como os empreendedores de hoje usam a inovação contínua no processo de criação de negócios de sucesso. Durante esta sessão vamos abordar todos os aspetos associados à criação de startups “lean”, desde a alocação eficiente de recursos, à iteração contínua de aprendizagem, testes e desenvolvimento.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:30',
        end: '16:00',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'Funding your dreams',
        description: "What is stopping you from fulfilling your dreams? Fear? Money? I'll solve that for you.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:30',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'O que não nos ensinaram na escola',
        description: 'Após cerca de 18 anos de educação, os nossos maiores desafios profissionais não serão sobre tecnologia, serão sobre pessoas e a escola não nos preparou para o que vamos encontrar. Ao mesmo tempo, a tecnologia está a evoluir tão rápido e a ficar tão acessível que toda a gente pode mudar o mundo. Esta sessão é sobre o que não nos ensinaram na escola. É sobre as ferramentas para lidar com pessoas. É sobre olhar para a tecnologia de outra forma. É sobre potencial ilimitado. Nesta sala tudo será possível. Vai ser ruidoso. Estão avisados.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:00',
        end: '17:40',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'Introduction to Natural Language Processing',
        description: "In this talk, we'll see how computers can understand text by learning about modern concepts in Natural Language Processing such as representation learning and recurrent neural networks. We'll show you the basics behind the tasks of text classification, information extraction, machine translation and dialog systems. We will also cover some Python text processing libraries and how you can start building your next NLP project.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:00',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'How can we Learn from Small Datasets?',
        description: 'Como podemos abordar um problema com machine learning quando os dados escasseiam? Que abordagens e que cuidados devemos ter?',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'Crush Your Coding Interview',
        description: 'Learn how to put your best foot forward at this Crush Your Coding Interview by Facebook. This presentation will focus on how to do well in software engineering interviews. It will cover: How to walk through an algorithm problem, How to brainstorm solutions, How to discuss the problem with your interviewer, How to write (and test) code on a whiteboard',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:40',
        end: '16:20',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'Fraud prevention with Deep Learning models',
        description: 'Machine learning for fraud prevention: from tree based models with feature engineering to deep learning, passing through AutoML.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:20',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: 'Preventing blindness using Artificial Intelligence',
        description: 'A Retinopatia Diabética (DR) é a maior causa de cegueira evitável no mundo desenvolvido, afetando mais de 25% dos pacientes diabéticos. Devido aos grandes impactos sociais e económicos da cegueira, a maioria dos países desenvolvidos implementou programas de rastreio para monitorizar a população diabética. Durante o rastreio, imagens do fundo do olho são obtidas e examinadas por oftalmologistas. Nós desenvolvemos um método de Inteligência Artificial que classifica automaticamente a qualidade das imagens, deteta indícios de DR e indica se o paciente deve ser tratado ou não. Nós mostramos que o nosso modelo tem resultados comparáveis a alguns oftalmologistas e obtém os resultados suficientemente bons para ser implementado em programas de rastreio. Este método tem o potencial de reduzir a pressão sobre os oftalmologistas, permitindo que se foquem no tratamento dos pacientes com DR, com o objetivo final de reduzir o número de incidentes de cegueira relacionada com DR.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:30',
        end: '18:00',
        day: 3,
        room: 1,
        type: 'event',
    },
    {
        title: ' Open Food Network, the distributed online marketplace making food fair',
        description: "The Open Food Network and it's different dimensions: the food system, open source, open community, e-commerce platform.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:00',
        day: 3,
        room: 2,
    },
    {
        title: 'To Blockchain or Not: A Tech Tale of Bitcoin and Libra',
        description: 'What technology provided the humans leveraged on it.\n\nBlockchain appeared to solve a problem and it’s rapidly changing the world, Bitcoin was the first use case, Libra is the the next big thing, and is aiming to achieve 50M users in record time. But what is Blockchain ? What is behind the scene ? Is C better than Rust for this systems ? I will talk about the technology behind is and what it means for the future of software development.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 3,
        room: 2,
    },
    {
        title: 'Explorando vulnerabilidades numa app Android',
        description: 'A aplicação Anda permite aos utilizadores de transportes públicos do Porto usar o telemóvel em vez de um cartão físico para viajar na rede de transportes multimodais. Na data de lançamento desta aplicação, existiam vulnerabilidades de segurança que permitiam aceder a dados de outros utilizadores, incluindo passwords em plain-text. Nesta palestra será explicado o processo de descoberta desta falha. Serão também exploradas quais as ferramentas mais adequadas para realizar este tipo de investigação em aplicações Android (por exemplo: Frida).',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:40',
        end: '16:20',
        day: 3,
        room: 2,
    },
    {
        title: 'Product Engineering',
        description: "Building a product and making the produt grow and evolve differs a lot from what's taught in courses and lectured in classes. More than engineering skills it requires a lot of communication, ownership and leadership skills. In this talk we'll discuss how is to work for an IT company, what drives change, what drives product, what drives engineering and ultimately what should you know before you start your engineering career.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:15',
        day: 3,
        room: 2,
    },
    {
        title: 'Golden Chickens - Uncovering a Malware as a Service',
        description: 'In this talk, I will present an overview of the Malware as a Service (MaaS) environment and show how a major player in this market operates. I will also uncover some threat actors, clients of MaaS providers, that perform cyber attacks on a global scale.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:20',
        end: '18:00',
        day: 3,
        room: 2,
    },
    {
        title: 'competição de programação',
        description: 'A semana de informática irá contar com uma Competição de Programação a realizar-se durante todos os dias evento.\nSerão lançados dois exercícios por dia nos primeiros três dias, de dificuldade crescente.\nA participação é individual, estará aberta a partir da sessão de abertura, dia 29 de Outubro (segunda-feira), até às 14h00 de 1 de Novembro (quinta-feira), e os vencedores serão anunciados na cerimónia de encerramento.\nA competição decorrá online no HackerRank, onde serão utilizados mecanismos anti-cópia para detetar infracções.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:30',
        day: 3,
        room: 4,
    },
    {
        title: 'software engineering at outsystems',
        description: 'Todos os procuramos do que se faz bem lá fora esquecendo que em Portugal há equipas de classe mundial a inovar nos processos de engenharia de software. É isso que pretendemos dar a conhecer durante a nossa apresentação, quais os ingredientes essenciais para uma empresa de software nascida e baseada em Portugal',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 3,
        room: 3,
    },
    {
        title: "hitchhiker's guide to hardware maintenance",
        description: 'Tens um portátil que “está lento”, que “aquece muito e desliga”? Provavelmente está a precisar de manutenção. Fazer manutenção a um computador não é díficil, mas pode meter medo. Após este WorkShop o vosso computador vai funcionar como saiu da fabrica e em alguns caso até melhor.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:30',
        end: '17:30',
        day: 3,
        room: 4,
    },
    {
        title: "building the world's understanding layer",
        description: 'In this talk we’ll know more about how Unbabel is building the world’s understanding layer and removing language barriers through a combination of AI + Humans.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:40',
        day: 3,
        room: 3,
    },
    {
        title: 'programação competitiva - o quê? quando? como? porquê?',
        description: 'Esta apresentação começa por uma introdução à Programação Competitiva: em que consiste, tipos de concursos e exemplos de problemas. O porquê da participação nestas actividades originar ofertas de emprego e a sua contribuição para o orador passar as entrevistas da Google e Facebook.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:10',
        day: 3,
        room: 4,
    },
    {
        title: 'creating new digital realities - how vr and ar become xr',
        description: 'A retrospective of the path of VR and AR so far; successes and failiures. Then a look at the present and future of digital realities empowered by MR and how everything became XR. Finally a discussion of some notable real-world case-studies for all those technologies on the fields of gaming, tourism, industrial operations and real estate.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:10',
        end: '19:00',
        day: 3,
        room: 3,
    },
    {
        title: 'pitch de oportunidades',
        description: 'No Pitch de Oportunidades terás oportunidade de aprender mais sobre várias empresas que tornaram a semana de informática 2018 possível! Cada empresa fará um breve “pitch” falando sobre si - por exemplo o que fazem, como o fazem e em que áreas estão a recrutar. No final, será possível haver networking entre os participantes e as empresas, sendo este Pitch de Oportunidades algo a não perder!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 3,
        room: 4,
    },
    {
        title: 'data science in a complex environment',
        description: 'Data science is an interdisciplinary field whose execution/implementation process may vary depending on the constraints of the surrounding environment. A brief about the data science journey at Deloitte environment will be given.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '15:00',
        day: 3,
        room: 5,
    },
    {
        title: 'build a mobile app in 2 hours',
        description: 'Ao longo do workshop irás aprender a desenvolver apps para dispositivos moveis ios e android e terás a possibilidade de experimentar no teu próprio smartphone. No final além de aprenderes terás o teu próprio ambiente na cloud gratuito para que possas continuar a programar as apps que idealizares.s',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:00',
        day: 3,
        room: 6,
    },
    {
        title: 'from a concept to an exceptional product',
        description: 'Breakdown of our workflow with a focus on bridging the gap between Designers and Developers.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 3,
        room: 5,
    },
    {
        title: 'transforming mobility',
        description: 'Será feita uma abordagem sobre a empresa e o nosso foco em trazer a próxima geração de veículos autónomos, cidades inteligentes e conectividade para a vida. Além disso, serão abordados outros temas como a nova tecnologia de condução autónoma, a redefinição da conectividade do infotainment e novas soluções inteligentes de mobilidade.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 3,
        room: 5,
    },
    {
        title: 'jogos, realidade aumentada e virtual - extensões ou amputações da experiência humana?',
        description: 'Nesta comunicação serão apresentados alguns exemplos concretos de criação e desenvolvimento de jogos e outras aplicações de realidade aumentada (RA) e virtual (RV) de forma a contextualizarem-se campos possíveis de investigação nesta área. A partir de uma breve história dos dispositivos de realidade imersiva e mista sugerem-se possibilidades de criação e desenvolvimento que tiram partido do atual estado da arte destas tecnologias e apontam para processos criativos emergentes que questionam e desafiam a experiência humana como a conhecemos.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 3,
        room: 6,
    },
    {
        title: 'blockchain 101 - decentralization, cryptoeconomics, and icos',
        description: 'Blockchain technology, coupled with cryptoeconomics, allows us to confidently approach a whole new class of problems. It’s a force for good, bringing censorship resistance to a global economy. In this short talk, I’ll give you a short overview of the ecosystem, covering decentralization, Bitcoin, Ethereum, and ICOs',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:00',
        day: 3,
        room: 5,
    },
    {
        title: 'api day - open architectures',
        description: 'Com a digitalização do mundo e consequentemente da indústria, uma estratégia de arquitetura devidamente democratizada de acesso a API’s torna-se fundamental. Com esta, diversos desafios emergem: culturais, tecnológicos, metodológicos e operativos. Nesta sessão pretendemos apresentar-vos o caminho feito e a fazer já com proposta de valor nas mãos do consumidor',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:00',
        end: '19:00',
        day: 3,
        room: 5,
    },
    {
        title: 'sessão de networking',
        description: 'A Sessão de Networking será um momento único para contacto direto entre os estudantes e representantes das empresas. Seguindo um formato de “speed dating”, terás a hipótese de falar em primeira mão com várias empresas diferentes!\nO tempo acabou! Disseste tudo o que tinhas a dizer? Segue para a próxima mesa!\nEsta sessão será certamente diferente e divertida, estando todos contra o relógio!\nPor falar em relógio, já te inscreveste? Tic tac, o tempo não para!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 3,
        room: 6,
    },
    {
        title: 'thinking serverless',
        description: 'Serverless é a mais recente camada de abstração a nível de cloud computing. Irei abordar brevemente as várias camadas existentes e como foram evoluindo até ao momento. Irei explicar as vantagens e o potencial de arquitectura serverless e apresentar alguns casos reais.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '19:10',
        end: '20:00',
        day: 3,
        room: 6,
    },

    // Day 4
    {
        title: 'Sessão de Abertura',
        description: '',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:20',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'The Lean Startup',
        description: 'Achas que tens uma ideia inovadora e gostavas de criar a tua própria empresa? O conceito de “Lean Startup” explora como os empreendedores de hoje usam a inovação contínua no processo de criação de negócios de sucesso. Durante esta sessão vamos abordar todos os aspetos associados à criação de startups “lean”, desde a alocação eficiente de recursos, à iteração contínua de aprendizagem, testes e desenvolvimento.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:30',
        end: '16:00',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'Funding your dreams',
        description: "What is stopping you from fulfilling your dreams? Fear? Money? I'll solve that for you.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:30',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'O que não nos ensinaram na escola',
        description: 'Após cerca de 18 anos de educação, os nossos maiores desafios profissionais não serão sobre tecnologia, serão sobre pessoas e a escola não nos preparou para o que vamos encontrar. Ao mesmo tempo, a tecnologia está a evoluir tão rápido e a ficar tão acessível que toda a gente pode mudar o mundo. Esta sessão é sobre o que não nos ensinaram na escola. É sobre as ferramentas para lidar com pessoas. É sobre olhar para a tecnologia de outra forma. É sobre potencial ilimitado. Nesta sala tudo será possível. Vai ser ruidoso. Estão avisados.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:00',
        end: '17:40',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'Introduction to Natural Language Processing',
        description: "In this talk, we'll see how computers can understand text by learning about modern concepts in Natural Language Processing such as representation learning and recurrent neural networks. We'll show you the basics behind the tasks of text classification, information extraction, machine translation and dialog systems. We will also cover some Python text processing libraries and how you can start building your next NLP project.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:00',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'How can we Learn from Small Datasets?',
        description: 'Como podemos abordar um problema com machine learning quando os dados escasseiam? Que abordagens e que cuidados devemos ter?',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'Crush Your Coding Interview',
        description: 'Learn how to put your best foot forward at this Crush Your Coding Interview by Facebook. This presentation will focus on how to do well in software engineering interviews. It will cover: How to walk through an algorithm problem, How to brainstorm solutions, How to discuss the problem with your interviewer, How to write (and test) code on a whiteboard',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:40',
        end: '16:20',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'Fraud prevention with Deep Learning models',
        description: 'Machine learning for fraud prevention: from tree based models with feature engineering to deep learning, passing through AutoML.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:20',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: 'Preventing blindness using Artificial Intelligence',
        description: 'A Retinopatia Diabética (DR) é a maior causa de cegueira evitável no mundo desenvolvido, afetando mais de 25% dos pacientes diabéticos. Devido aos grandes impactos sociais e económicos da cegueira, a maioria dos países desenvolvidos implementou programas de rastreio para monitorizar a população diabética. Durante o rastreio, imagens do fundo do olho são obtidas e examinadas por oftalmologistas. Nós desenvolvemos um método de Inteligência Artificial que classifica automaticamente a qualidade das imagens, deteta indícios de DR e indica se o paciente deve ser tratado ou não. Nós mostramos que o nosso modelo tem resultados comparáveis a alguns oftalmologistas e obtém os resultados suficientemente bons para ser implementado em programas de rastreio. Este método tem o potencial de reduzir a pressão sobre os oftalmologistas, permitindo que se foquem no tratamento dos pacientes com DR, com o objetivo final de reduzir o número de incidentes de cegueira relacionada com DR.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:30',
        end: '18:00',
        day: 4,
        room: 1,
        type: 'event',
    },
    {
        title: ' Open Food Network, the distributed online marketplace making food fair',
        description: "The Open Food Network and it's different dimensions: the food system, open source, open community, e-commerce platform.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:30',
        end: '15:00',
        day: 4,
        room: 2,
    },
    {
        title: 'To Blockchain or Not: A Tech Tale of Bitcoin and Libra',
        description: 'What technology provided the humans leveraged on it.\n\nBlockchain appeared to solve a problem and it’s rapidly changing the world, Bitcoin was the first use case, Libra is the the next big thing, and is aiming to achieve 50M users in record time. But what is Blockchain ? What is behind the scene ? Is C better than Rust for this systems ? I will talk about the technology behind is and what it means for the future of software development.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '15:30',
        day: 4,
        room: 2,
    },
    {
        title: 'Explorando vulnerabilidades numa app Android',
        description: 'A aplicação Anda permite aos utilizadores de transportes públicos do Porto usar o telemóvel em vez de um cartão físico para viajar na rede de transportes multimodais. Na data de lançamento desta aplicação, existiam vulnerabilidades de segurança que permitiam aceder a dados de outros utilizadores, incluindo passwords em plain-text. Nesta palestra será explicado o processo de descoberta desta falha. Serão também exploradas quais as ferramentas mais adequadas para realizar este tipo de investigação em aplicações Android (por exemplo: Frida).',
        begin: '15:40',
        end: '16:20',
        day: 4,
        room: 2,
    },
    {
        title: 'Product Engineering',
        description: "Building a product and making the produt grow and evolve differs a lot from what's taught in courses and lectured in classes. More than engineering skills it requires a lot of communication, ownership and leadership skills. In this talk we'll discuss how is to work for an IT company, what drives change, what drives product, what drives engineering and ultimately what should you know before you start your engineering career.",
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:50',
        end: '17:15',
        day: 4,
        room: 2,
    },
    {
        title: 'Golden Chickens - Uncovering a Malware as a Service',
        description: 'In this talk, I will present an overview of the Malware as a Service (MaaS) environment and show how a major player in this market operates. I will also uncover some threat actors, clients of MaaS providers, that perform cyber attacks on a global scale.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:20',
        end: '18:00',
        day: 4,
        room: 2,
    },
    {
        title: 'competição de programação',
        description: 'A semana de informática irá contar com uma Competição de Programação a realizar-se durante todos os dias evento.\nSerão lançados dois exercícios por dia nos primeiros três dias, de dificuldade crescente.\nA participação é individual, estará aberta a partir da sessão de abertura, dia 29 de Outubro (segunda-feira), até às 14h00 de 1 de Novembro (quinta-feira), e os vencedores serão anunciados na cerimónia de encerramento.\nA competição decorrá online no HackerRank, onde serão utilizados mecanismos anti-cópia para detetar infracções.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:30',
        day: 4,
        room: 4,
    },
    {
        title: 'software engineering at outsystems',
        description: 'Todos os procuramos do que se faz bem lá fora esquecendo que em Portugal há equipas de classe mundial a inovar nos processos de engenharia de software. É isso que pretendemos dar a conhecer durante a nossa apresentação, quais os ingredientes essenciais para uma empresa de software nascida e baseada em Portugal',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 4,
        room: 3,
    },
    {
        title: "hitchhiker's guide to hardware maintenance",
        description: 'Tens um portátil que “está lento”, que “aquece muito e desliga”? Provavelmente está a precisar de manutenção. Fazer manutenção a um computador não é díficil, mas pode meter medo. Após este WorkShop o vosso computador vai funcionar como saiu da fabrica e em alguns caso até melhor.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:30',
        end: '17:30',
        day: 4,
        room: 4,
    },
    {
        title: "building the world's understanding layer",
        description: 'In this talk we’ll know more about how Unbabel is building the world’s understanding layer and removing language barriers through a combination of AI + Humans.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '16:40',
        day: 4,
        room: 3,
    },
    {
        title: 'programação competitiva - o quê? quando? como? porquê?',
        description: 'Esta apresentação começa por uma introdução à Programação Competitiva: em que consiste, tipos de concursos e exemplos de problemas. O porquê da participação nestas actividades originar ofertas de emprego e a sua contribuição para o orador passar as entrevistas da Google e Facebook.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:10',
        day: 4,
        room: 4,
    },
    {
        title: 'creating new digital realities - how vr and ar become xr',
        description: 'A retrospective of the path of VR and AR so far; successes and failiures. Then a look at the present and future of digital realities empowered by MR and how everything became XR. Finally a discussion of some notable real-world case-studies for all those technologies on the fields of gaming, tourism, industrial operations and real estate.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:10',
        end: '19:00',
        day: 4,
        room: 3,
    },
    {
        title: 'pitch de oportunidades',
        description: 'No Pitch de Oportunidades terás oportunidade de aprender mais sobre várias empresas que tornaram a semana de informática 2018 possível! Cada empresa fará um breve “pitch” falando sobre si - por exemplo o que fazem, como o fazem e em que áreas estão a recrutar. No final, será possível haver networking entre os participantes e as empresas, sendo este Pitch de Oportunidades algo a não perder!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 4,
        room: 4,
    },
    {
        title: 'data science in a complex environment',
        description: 'Data science is an interdisciplinary field whose execution/implementation process may vary depending on the constraints of the surrounding environment. A brief about the data science journey at Deloitte environment will be given.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '15:00',
        day: 4,
        room: 5,
    },
    {
        title: 'build a mobile app in 2 hours',
        description: 'Ao longo do workshop irás aprender a desenvolver apps para dispositivos moveis ios e android e terás a possibilidade de experimentar no teu próprio smartphone. No final além de aprenderes terás o teu próprio ambiente na cloud gratuito para que possas continuar a programar as apps que idealizares.s',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '14:00',
        end: '16:00',
        day: 4,
        room: 6,
    },
    {
        title: 'from a concept to an exceptional product',
        description: 'Breakdown of our workflow with a focus on bridging the gap between Designers and Developers.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '15:00',
        end: '16:00',
        day: 4,
        room: 5,
    },
    {
        title: 'transforming mobility',
        description: 'Será feita uma abordagem sobre a empresa e o nosso foco em trazer a próxima geração de veículos autónomos, cidades inteligentes e conectividade para a vida. Além disso, serão abordados outros temas como a nova tecnologia de condução autónoma, a redefinição da conectividade do infotainment e novas soluções inteligentes de mobilidade.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 4,
        room: 5,
    },
    {
        title: 'jogos, realidade aumentada e virtual - extensões ou amputações da experiência humana?',
        description: 'Nesta comunicação serão apresentados alguns exemplos concretos de criação e desenvolvimento de jogos e outras aplicações de realidade aumentada (RA) e virtual (RV) de forma a contextualizarem-se campos possíveis de investigação nesta área. A partir de uma breve história dos dispositivos de realidade imersiva e mista sugerem-se possibilidades de criação e desenvolvimento que tiram partido do atual estado da arte destas tecnologias e apontam para processos criativos emergentes que questionam e desafiam a experiência humana como a conhecemos.',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '16:00',
        end: '17:00',
        day: 4,
        room: 6,
    },
    {
        title: 'blockchain 101 - decentralization, cryptoeconomics, and icos',
        description: 'Blockchain technology, coupled with cryptoeconomics, allows us to confidently approach a whole new class of problems. It’s a force for good, bringing censorship resistance to a global economy. In this short talk, I’ll give you a short overview of the ecosystem, covering decentralization, Bitcoin, Ethereum, and ICOs',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '18:00',
        day: 4,
        room: 5,
    },
    {
        title: 'api day - open architectures',
        description: 'Com a digitalização do mundo e consequentemente da indústria, uma estratégia de arquitetura devidamente democratizada de acesso a API’s torna-se fundamental. Com esta, diversos desafios emergem: culturais, tecnológicos, metodológicos e operativos. Nesta sessão pretendemos apresentar-vos o caminho feito e a fazer já com proposta de valor nas mãos do consumidor',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '18:00',
        end: '19:00',
        day: 4,
        room: 5,
    },
    {
        title: 'sessão de networking',
        description: 'A Sessão de Networking será um momento único para contacto direto entre os estudantes e representantes das empresas. Seguindo um formato de “speed dating”, terás a hipótese de falar em primeira mão com várias empresas diferentes!\nO tempo acabou! Disseste tudo o que tinhas a dizer? Segue para a próxima mesa!\nEsta sessão será certamente diferente e divertida, estando todos contra o relógio!\nPor falar em relógio, já te inscreveste? Tic tac, o tempo não para!',
        speaker: 'Beatriz Oliveira',
        speakerDescription: 'An entrepreneur, speaker, and visionary in the web design industry, Beatriz Oliveira is the founder and CEO of BindTuning, one of the leading platforms for building connected and engaging workplaces for Microsoft Office 365 and SharePoint. In the last 10 years Beatriz has been a speaker in international events in several countries and has been putting her technical and design expertise to the service of developing groundbreaking UX solutions for Microsoft technologies. She is actively involved in STEM education for youth, hosting monthly coding events for children in the BindTuning offices. She is also an ardent supporter of women in technology. Beatriz is currently the President of the Portuguese IAMCP chapter, and an advisor to the council of ESMAD university. A Microsoft Regional Director, Microsoft Office Development MVP and Certified Professional (MCP), Beatriz is a wife and mother of two daughters.',
        begin: '17:10',
        end: '19:00',
        day: 4,
        room: 6,
    },*/
]




// uploadFile() ;

// if it hasn't any arguments, sets all Collections
if (process.argv.length === 2) {

    for (let i = 0; i < lectures.length; i++) {
        db.collection('Lecture').doc("" + i).set(lectures[i]);
    }

    console.log("Set entries to Lecture's collection.");

    for (let i = 0; i < articles.length; i++) {
        db.collection('Article').doc("" + i).set(articles[i]);
    }

    console.log("Set entries to Article's collection.");

    for (let i = 0; i < sponsors.length; i++) {

        // uploadImg(sponsors[i].image);
        db.collection('Sponsor').doc("" + i).set(sponsors[i]);
    }

    console.log("Set entries to Sponsor's collection.");

}
// only sets the collections specified in the arguments
else {

    let args = process.argv.length - 1;

    while (args > 1) {

        let data = [];

        if (process.argv[args] == 'Lecture') 
            data = lectures;
        else if (process.argv[args] == 'Article') 
            data = articles
        else if (process.argv[args] == 'Sponsor')
            data = sponsors;
        else 
            console.log("Invalid argument " + process.argv[args] + " . Must be one of the following: lectures, articles or sponsors.");
        

            // if (process.argv[args] == 'Sponsor') {
            //     uploadImg(sponsors[i].image);
            // }

            db.collection(process.argv[args]).doc("" + i).set(data[i]);
        }

        console.log("Set entries to " + process.argv[args] + "'s collection.");

        args--;
    }

    // adapted from https://medium.com/@stardusteric/nodejs-with-firebase-storage-c6ddcf131ceb

function uploadFile  (fileName) {

    let fileUpload = bucket.file(fileName);
    
    const blobStream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype
        }
    });
    
    blobStream.on('error', (error) => {
        reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
        resolve(url);
    });

    blobStream.end(file.buffer);
}

