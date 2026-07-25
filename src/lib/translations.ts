export type Lang = "en" | "pt";

export const translations = {
  en: {
    nav: { bio: "Works", playground: "Playground", contact: "About & Contact" },
    bio: {
      label: "Bio",
      p1: "Designer with 20+ years shaping product design and branding experiences. From early ideation and visual craft to shipped products and solutions, using AI as a creative force. Hands-on by nature, I lead by doing, staying close to the craft across strategy, design, and build.",
      p4a: "Founder of",
      p4b: ".",
      cta: "Get in touch",
    },
    projects: { type: "Type", year: "Year", role: "Role", name: "Project's Name" },
    works: { craft: "Craft", build: "Digital Artifacts" },
    categories: {
      "Design System":   "Design System",
      "Brand Identity":  "Brand Identity",
      "Digital Product": "Digital Product",
      "Interactive":     "Interactive",
      "Product Design":  "Product Design",
      "Branding":        "Branding",
      "Creative":        "Creative System",
    },
    experience: { current: "Current", past: "Professional Experience" },
    roles: {
      "Design Manager":    "Design Manager",
      "Creative Director": "Creative Director",
      "Head of Design":    "Head of Design",
      "Design Director":   "Design Director",
      "Senior Designer":   "Senior Designer",
      "Founder":           "Founder",
      "Designer":          "Designer",
      "Creative Direction":"Creative Direction",
      "Product Design":    "Product Design",
    },
    footer: {
      skills:      "Professional Skills",
      clients:     "Clients",
      contact:     "Contact",
      recognition: "Recognition",
    },
    skills: [
      "Creative Direction",
      "Product Envisioning",
      "Team Management",
      "Visual Design & Generative AI",
      "Branding Experiences",
    ],
    playground: {
      label: "Playground",
      p1: "A space for visual experimentation, graphic design, hand-craft, calligraphy, typography, generative graphics, illustration, AI images and creative research. These are initiatives that happen in my creative adventures, driven purely by curiosity and the desire to push visual boundaries.",
    },
    contact: {
      label: "Contact",
      subtitle: "The best way to reach me is right here below.\nI personally read everything that lands in my inbox.",
    },
    about: {
      intro1:
        "With 18+ years of professional experience, Pedro is a Brazilian/Swiss designer and creative director working at the intersection of digital products and branding experience — from understanding business strategy to delivering final prototypes.",
      intro2a: "Fueled by curiosity, founder of",
      intro2b:
        ", a studio crafting new motion and visual solutions using GenAI for the creative industry.",
      quote:
        "I do believe in the power of craft leading by business needs, always collaborating with teams to achieve better results — whether it's concept design, a user-centered approach or leading creative teams.",
      experienceLabel: "Experience",
      recognitionLabel: "Recognition",
      skills: [
        "Team Management",
        "User Experience Design",
        "Branding",
        "Visual Design",
        "Product Envisioning",
        "Design Process Consulting",
        "Team Growth & Leadership",
        "Strong Sales Experience",
        "Entrepreneurial Background",
      ],
      descriptions: {
        mercadoPago:
          "Responsible for elevating design quality standards and driving creative excellence across teams. Acts as both leader and team player, fostering collaboration between design, product, and business areas. With a strong focus on visual craft and creativity, guiding the team to deliver cohesive, innovative, and impactful experiences that strengthen Mercado Livre's and Mercado Pago's brand and digital product presence.",
        rise:
          "Shaped the agency's creative vision and brought innovative concepts to life. Oversaw the strategic direction of projects, ensuring alignment with client objectives while pushing boundaries to deliver cutting-edge solutions. Led and inspired a multidisciplinary team, fostering collaboration and maintaining high creative standards.",
        meiuca:
          "Pushed the boundaries of digital design and product vision, creating visually stunning and functional products that resonate with users. Led the team in delivering exceptional digital experiences through a strategic mindset and collaborative creative environment.",
        descomplica:
          "Conducted thorough industry research to determine the direction of branding experiences and digital products. Created and led the first branding refresh, setting new positioning and values. Designed and built design systems, modular and scalable design patterns — hired and built design teams, setting process and culture.",
        ddb:
          "Led the design team to push conventional boundaries with unique concepts and identities. Responsible for the digital global soccer account of Adidas, creating part of the design modular system. Developed the global design system for Royal Canin, including photography, iconography, and digital assets.",
        workCo:
          "Led digital product design projects for clients including Facebook and Santander. Responsible for ensuring the team's work communicates effectively with the highest quality, solving business challenges and meeting user needs across all stages of design development.",
        google:
          "Created interactive digital projects for Google's Cultural Institute, including Performing Arts With Google — a fully immersive 360° experience allowing anyone to step on stage with world-renowned actors, singers, and dancers.",
      },
    },
    common: {
      backToWorks:    "← Works",
      backToMP:       "← Mercado Pago",
      backToWorksBtn: "Back to Works",
      worksSection:   "Works",
      year:           "Year",
      role:           "Role",
      category:       "Category",
      foundations:    "Foundations",
      projects:       "Projects",
      liveProject:    "Live project",
    },
    pages: {
      mercadoPago: {
        desc1: "Leading design for Mercado Pago, Latin America's largest fintech, with over 60 million active users across 7 countries. Responsible for design craft and strategic direction across product design, design systems, and motion, working at the intersection of scale, speed, and quality.",
        desc2: "UX as a business lever: design decisions at this scale touch millions of real financial interactions daily. My role is to keep quality high and intentional, directing a team of designers while staying close to the craft through prototyping, tooling, and hands-on UX and creative direction.",
      },
      motionPrinciples: {
        intro1: "How Mercado Pago moves. A shared language of motion built for a product operating across 11 verticals and 7 countries, so that every transition, micro-interaction, and expressive moment feels like it comes from the same place.",
        intro2: "Motion should feel agile and reliable, starting with speed, ending with serenity. Three typologies translate design principles into behavior. The typology is chosen by the intention of the screen, not by style or technique.",
        foundations: [
          {
            label: "Gestures",
            body: "Motion responds to user gestures, confirming punctual actions and accompanying continuous interactions. Tap, long press, swipe, scroll: each gesture type has its own motion response.",
          },
          {
            label: "Stagger",
            body: "Components move in sequence to create rhythm, hierarchy, and focus. Stagger adds small delays between elements, 50ms steps for simple components, 2–3 steps for complex experiences.",
          },
          {
            label: "Skeleton",
            body: "Skeletons maintain structure and hierarchy during content loading. They appear only for dynamic content; static content loads directly on screen.",
          },
        ],
        principles: [
          {
            label: "Immediacy",
            tagline: "Functional experiences.",
            description: "Adds clarity and efficiency to the task, acting as a silent guide with immediate feedback. Motion gets out of the way and lets the product breathe.",
            examples: [
              { label: "Screen Transition", context: "Payments hub, the transition feels agile and reacts in real time." },
              { label: "Shared Element",    context: "Payment list detail, the avatar travels seamlessly between screens." },
              { label: "In-App Flow",       context: "Quick transfer, agile action with immediate confirmation." },
            ],
          },
          {
            label: "Focus",
            tagline: "Balanced experiences.",
            description: "Organizes motion around the protagonist element to create hierarchy and guide attention. When something matters, the animation makes sure the eye knows where to go. The shared element is reserved for transitions where it reinforces a real relationship between screens.",
            examples: [
              { label: "Screen Transition", context: "Cards, carousel with 180° card rotation." },
              { label: "Shared Element",    context: "Banking tab, the piggy bank guides the transition between screens." },
              { label: "Micro-interaction", context: "Activity detail, expansion with chevron feedback." },
              { label: "In-App Flow",       context: "Card request, immersive full-screen experience up to final confirmation." },
            ],
          },
          {
            label: "Immersion",
            tagline: "Expressive experiences.",
            description: "Becomes the story, using cinematic resources to generate presence and depth. For high-value emotional moments: onboarding, celebrations, premium product reveals. Expressive illustration can take center stage and fill the entire screen in celebrations, special states, or high emotional-value moments.",
            examples: [
              { label: "Screen Transition", context: "Scoring, the transition highlights and celebrates the user's milestone." },
              { label: "Shared Element",    context: "Credit card onboarding, the card expands creating an atmosphere of prestige." },
              { label: "In-App Flow",       context: "Bill payment, accompanying the user through to final confirmation." },
            ],
          },
        ],
      },
      artDirection: {
        intro1: "A unified visual identity for Mercado Pago, built simultaneously across photography, iconography, and 3D. The work consolidates and evolves the brand's creative language across formats and markets — ensuring every touchpoint feels coherent, intentional, and unmistakably on-brand at the scale of Latin America's largest fintech.",
        intro2: "Art direction operating across live campaign photography, AI-assisted 3D assets, and iconographic systems. Spanning 11 verticals and 7 countries, the project defines how the brand looks and feels wherever it appears — from product screens to campaign visuals.",
      },
      sute: {
        desc1: "Sute is a digital product built to bring order to complex information landscapes, taking what is normally dense, fragmented data and making it feel calm, navigable, and human.",
        desc2: "I led the design end-to-end alongside a small, focused team. The work spanned foundational research and product strategy, information architecture, the full UI system, motion principles, and the editorial tone that runs through every screen.",
        desc3: "Restrained type, deliberate negative space, and a quiet palette anchor the product. The visual language stays intentionally subdued so that the data, decisions, and the people using it remain the loudest voices in the room.",
      },
      artas: {
        desc1: "Artas is a social art platform that reimagines how visual art is discovered and shared online. Instead of a flat grid gallery, it opens with an immersive 3D spatial navigation experience: a starfield universe where artworks float as explorable nodes.",
        desc2: "Built with Three.js and Unreal Bloom post-processing, full WebGL pipeline with a 10,000-particle starfield. 6,100+ lines of handcrafted vanilla JS, modular ES6 architecture, Firebase backend. Zero frameworks, zero bundlers.",
        desc3a: "The entire project was designed and built using ",
        desc3b: "AI and Claude Code",
        desc3c: " as the primary development tool, an experiment in human + AI co-creation at every stage, from concept to shipped product.",
      },
      combustion: {
        desc:       "Rebranding of a São Paulo-based sound design studio with a strong international presence. A new visual identity built to match the weight and reach of their work, bold, precise and unmistakably sonic.",
        descMobile: "Rebranding of a São Paulo-based sound design studio, bold, precise and unmistakably sonic.",
      },
      foracle: {
        desc: "Foracle is a free font recommendation platform built on human and AI curation. Designed to give back to the design community, type designers, typographers, and font enthusiasts, by surfacing and amplifying the best free typefaces from around the world.",
      },
      mude: {
        desc1:      "Mude is a wellness app designed to help people build sustainable mindfulness habits. Motivating and calm, encouraging consistency without adding pressure.",
        desc2:      "Organizes daily wellness practices into digestible routines using gentle prompts and clear visual feedback. Every interaction reduces friction so healthy habits feel effortless to start and maintain.",
        desc3:      "Clean space, deliberate typography, and a soft color system that signals calm without being passive. Built for real life.",
        descMobile: "A wellness app designed to help people build sustainable mindfulness habits.",
      },
      myPhone: {
        desc1: "My Phone is a branding project exploring the visual identity of a personal device brand, built around the idea that technology should feel human, tactile, and distinctly yours.",
        desc2: "The work covers brand identity, visual language, typography, and art direction, designed to feel bold and minimal at the same time.",
      },
    },
    copyright: "© Pedro Julien 2026",
  },
  pt: {
    nav: { bio: "Works", playground: "Playground", contact: "About & Contact" },
    bio: {
      label: "Bio",
      p1: "Designer com mais de 20 anos moldando produtos digitais e experiências de branding. Da ideação inicial ao craft visual refinado até produtos e soluções entregues, usando IA como força criativa. Hands-on por natureza, lidero fazendo, mantendo proximidade com o craft em estratégia, design e execução.",
      p4a: "Fundador da",
      p4b: ".",
      cta: "Entre em contato",
    },
    projects: { type: "Tipo", year: "Ano", role: "Cargo", name: "Nome do Projeto" },
    works: { craft: "Craft", build: "Artefatos Digitais" },
    categories: {
      "Design System":   "Sistema de Design",
      "Brand Identity":  "Identidade de Marca",
      "Digital Product": "Produto Digital",
      "Interactive":     "Interativo",
      "Product Design":  "Product Design",
      "Branding":        "Branding",
      "Creative":        "Sistema Criativo",
    },
    experience: { current: "Atual", past: "Experiência Profissional" },
    roles: {
      "Design Manager":    "Gerente de Design",
      "Creative Director": "Diretor Criativo",
      "Head of Design":    "Head de Design",
      "Design Director":   "Diretor de Design",
      "Senior Designer":   "Designer Sênior",
      "Founder":           "Fundador",
      "Designer":          "Designer",
      "Creative Direction":"Direção Criativa",
      "Product Design":    "Product Design",
    },
    footer: {
      skills:      "Habilidades",
      clients:     "Clientes",
      contact:     "Contato",
      recognition: "Reconhecimento",
    },
    skills: [
      "Direção Criativa",
      "Visão de Produto",
      "Gestão de Times",
      "Design Visual & IA Generativa",
      "Experiências de Branding",
    ],
    playground: {
      label: "Playground",
      p1: "Um espaço de experimentação visual, design gráfico, hand-craft, caligrafia, tipografia, gráficos generativos, ilustração, imagens com IA e pesquisa criativa. São iniciativas que acontecem nas minhas aventuras criativas, movidas pela curiosidade e pelo desejo de expandir os limites visuais.",
    },
    contact: {
      label: "Contato",
      subtitle: "A melhor forma de falar comigo está aqui embaixo.\nLeio pessoalmente tudo que chega na minha caixa de entrada.",
    },
    about: {
      intro1:
        "Com mais de 18 anos de experiência profissional, Pedro é um designer e diretor criativo brasileiro/suíço que atua na interseção de produtos digitais e experiências de branding — desde a compreensão da estratégia de negócio até a entrega de protótipos finais.",
      intro2a: "Movido pela curiosidade, fundador da",
      intro2b:
        ", um estúdio que cria novas soluções de motion e visual usando GenAI para a indústria criativa.",
      quote:
        "Acredito no poder do craft guiado pelas necessidades do negócio, sempre colaborando com os times para alcançar melhores resultados — seja no design conceitual, em uma abordagem centrada no usuário ou na liderança de times criativos.",
      experienceLabel: "Experiência",
      recognitionLabel: "Reconhecimento",
      skills: [
        "Gestão de Times",
        "Design de Experiência do Usuário",
        "Branding",
        "Design Visual",
        "Visão de Produto",
        "Consultoria em Processo de Design",
        "Crescimento e Liderança de Times",
        "Forte Experiência em Vendas",
        "Background Empreendedor",
      ],
      descriptions: {
        mercadoPago:
          "Responsável por elevar os padrões de qualidade de design e impulsionar a excelência criativa em toda a organização. Atua como líder e membro do time, promovendo a colaboração entre design, produto e áreas de negócio. Com forte foco em craft visual e criatividade, guia o time para entregar experiências coesas, inovadoras e impactantes que fortalecem a presença de marca e produto digital do Mercado Livre e Mercado Pago.",
        rise:
          "Moldou a visão criativa da agência e trouxe conceitos inovadores à vida. Supervisionou a direção estratégica dos projetos, garantindo alinhamento com os objetivos dos clientes e ultrapassando limites para entregar soluções de ponta. Liderou e inspirou um time multidisciplinar, promovendo colaboração e mantendo altos padrões criativos.",
        meiuca:
          "Empurrou os limites do design digital e da visão de produto, criando produtos visualmente impressionantes e funcionais que ressoam com os usuários. Liderou o time na entrega de experiências digitais excepcionais através de uma mentalidade estratégica e ambiente criativo colaborativo.",
        descomplica:
          "Conduziu pesquisas aprofundadas do setor para determinar a direção das experiências de branding e produtos digitais. Criou e liderou o primeiro rebranding da empresa, estabelecendo novo posicionamento e valores. Projetou e construiu design systems, padrões modulares e escaláveis — contratou e construiu times de design, estabelecendo processos e cultura.",
        ddb:
          "Liderou o time de design para ultrapassar limites convencionais com conceitos e identidades únicos. Responsável pela conta global de futebol digital da Adidas, criando parte da estrutura do sistema de design modular. Desenvolveu o design system global para a Royal Canin, incluindo fotografia, iconografia e assets digitais.",
        workCo:
          "Liderou projetos de design de produto digital para clientes como Facebook e Santander. Responsável por garantir que o trabalho do time comunicasse com efetividade e alta qualidade, solucionando desafios de negócio e atendendo às necessidades dos usuários em todas as etapas do desenvolvimento.",
        google:
          "Criou projetos digitais interativos para o Instituto Cultural do Google, incluindo o Performing Arts With Google — uma experiência imersiva em 360° que permite a qualquer pessoa subir ao palco com atores, cantores e dançarinos de renome mundial.",
      },
    },
    common: {
      backToWorks:    "← Works",
      backToMP:       "← Mercado Pago",
      backToWorksBtn: "Voltar",
      worksSection:   "Works",
      year:           "Ano",
      role:           "Cargo",
      category:       "Categoria",
      foundations:    "Fundamentos",
      projects:       "Projetos",
      liveProject:    "Ver projeto",
    },
    pages: {
      mercadoPago: {
        desc1: "Liderando design no Mercado Pago, a maior fintech da América Latina, com mais de 60 milhões de usuários ativos em 7 países. Responsável pelo craft de design e direção estratégica em product design, design systems e motion, trabalhando na interseção de escala, velocidade e qualidade.",
        desc2: "UX como alavanca de negócio: decisões de design nessa escala impactam milhões de interações financeiras reais diariamente. Meu papel é manter a qualidade alta e intencional, dirigindo um time de designers enquanto permaneço próximo ao craft por meio de prototipagem, tooling e direção criativa hands-on.",
      },
      motionPrinciples: {
        intro1: "Como o Mercado Pago se move. Uma linguagem compartilhada de motion construída para um produto que opera em 11 verticais e 7 países, para que cada transição, micro-interação e momento expressivo pareça vir do mesmo lugar.",
        intro2: "O motion deve parecer ágil e confiável, começando com velocidade e terminando com serenidade. Três tipologias traduzem princípios de design em comportamento. A tipologia é escolhida pela intenção da tela, não por estilo ou técnica.",
        foundations: [
          {
            label: "Gestos",
            body: "O motion responde aos gestos do usuário, confirmando ações pontuais e acompanhando interações contínuas. Tap, long press, swipe, scroll: cada tipo de gesto tem sua própria resposta de motion.",
          },
          {
            label: "Stagger",
            body: "Componentes se movem em sequência para criar ritmo, hierarquia e foco. O stagger adiciona pequenos atrasos entre elementos: passos de 50ms para componentes simples, 2 a 3 passos para experiências complexas.",
          },
          {
            label: "Skeleton",
            body: "Skeletons mantêm estrutura e hierarquia durante o carregamento de conteúdo. Aparecem apenas para conteúdo dinâmico; conteúdo estático carrega diretamente na tela.",
          },
        ],
        principles: [
          {
            label: "Imediatividade",
            tagline: "Experiências funcionais.",
            description: "Adiciona clareza e eficiência à tarefa, agindo como guia silencioso com feedback imediato. O motion sai do caminho e deixa o produto respirar.",
            examples: [
              { label: "Transição de Tela",       context: "Payments hub, a transição parece ágil e reage em tempo real." },
              { label: "Elemento Compartilhado",   context: "Payment list detail, o avatar viaja suavemente entre as telas." },
              { label: "Fluxo In-App",             context: "Quick transfer, ação ágil com confirmação imediata." },
            ],
          },
          {
            label: "Foco",
            tagline: "Experiências equilibradas.",
            description: "Organiza o motion em torno do elemento protagonista para criar hierarquia e guiar a atenção. Quando algo importa, a animação garante que o olho saiba para onde ir. O shared element é reservado para transições onde reforça uma relação real entre telas.",
            examples: [
              { label: "Transição de Tela",       context: "Cards, carrossel com rotação de 180° do cartão." },
              { label: "Elemento Compartilhado",   context: "Banking tab, o porquinho-cofrinho guia a transição entre telas." },
              { label: "Micro-interação",          context: "Activity detail, expansão com feedback de chevron." },
              { label: "Fluxo In-App",             context: "Card request, experiência full-screen imersiva até a confirmação final." },
            ],
          },
          {
            label: "Imersão",
            tagline: "Experiências expressivas.",
            description: "Torna-se a história, usando recursos cinematográficos para gerar presença e profundidade. Para momentos emocionais de alto valor: onboarding, celebrações, reveals de produtos premium. A ilustração expressiva pode ocupar o centro e preencher toda a tela em celebrações, estados especiais ou momentos de alto valor emocional.",
            examples: [
              { label: "Transição de Tela",       context: "Scoring, a transição destaca e celebra o marco do usuário." },
              { label: "Elemento Compartilhado",   context: "Credit card onboarding, o cartão se expande criando uma atmosfera de prestígio." },
              { label: "Fluxo In-App",             context: "Bill payment, acompanhando o usuário até a confirmação final." },
            ],
          },
        ],
      },
      artDirection: {
        intro1: "Uma identidade visual unificada para o Mercado Pago, construída simultaneamente em fotografia, iconografia e 3D. O trabalho consolida e evolui a linguagem criativa da marca em formatos e mercados — garantindo que cada ponto de contato seja coerente, intencional e inegavelmente alinhado à marca na escala da maior fintech da América Latina.",
        intro2: "Direção de arte atuando em fotografia de campanha ao vivo, assets 3D assistidos por IA e sistemas iconográficos. Abrangendo 11 verticais e 7 países, o projeto define como a marca se apresenta onde quer que apareça — das telas do produto aos visuais de campanha.",
      },
      sute: {
        desc1: "Sute é um produto digital criado para trazer ordem a paisagens de informação complexas, transformando dados normalmente densos e fragmentados em algo calmo, navegável e humano.",
        desc2: "Liderei o design de ponta a ponta ao lado de um time pequeno e focado. O trabalho abrangeu pesquisa fundacional e estratégia de produto, arquitetura de informação, o sistema de UI completo, princípios de motion e o tom editorial que percorre cada tela.",
        desc3: "Tipografia contida, espaço negativo deliberado e uma paleta silenciosa ancoram o produto. A linguagem visual permanece intencionalmente discreta para que os dados, as decisões e as pessoas que os utilizam sejam as vozes mais altas da sala.",
      },
      artas: {
        desc1: "Artas é uma plataforma social de arte que reimagina como a arte visual é descoberta e compartilhada online. Em vez de uma galeria em grade plana, abre com uma experiência de navegação espacial 3D imersiva: um universo de estrelas onde obras flutuam como nós exploráveis.",
        desc2: "Construído com Three.js e pós-processamento Unreal Bloom, pipeline WebGL completo com um starfield de 10.000 partículas. Mais de 6.100 linhas de JS vanilla artesanal, arquitetura ES6 modular, backend Firebase. Zero frameworks, zero bundlers.",
        desc3a: "Todo o projeto foi projetado e construído usando ",
        desc3b: "IA e Claude Code",
        desc3c: " como ferramenta principal de desenvolvimento, um experimento de co-criação humano + IA em cada etapa, do conceito ao produto entregue.",
      },
      combustion: {
        desc:       "Rebranding de um estúdio de sound design de São Paulo com forte presença internacional. Uma nova identidade visual construída para corresponder ao peso e alcance de seu trabalho: precisa, ousada e inconfundivelmente sônica.",
        descMobile: "Rebranding de um estúdio de sound design de São Paulo, preciso, ousado e inconfundivelmente sônico.",
      },
      foracle: {
        desc: "Foracle é uma plataforma gratuita de recomendação de fontes construída sobre curadoria humana e de IA. Criada para retribuir à comunidade de design, tipógrafos, designers de tipos e entusiastas de fontes, divulgando e amplificando as melhores typefaces gratuitas do mundo.",
      },
      mude: {
        desc1:      "Mude é um app de bem-estar projetado para ajudar pessoas a construir hábitos sustentáveis de mindfulness. Motivador e calmo, encorajando consistência sem adicionar pressão.",
        desc2:      "Organiza práticas diárias de bem-estar em rotinas digeríveis usando prompts gentis e feedback visual claro. Cada interação reduz o atrito para que hábitos saudáveis pareçam fáceis de iniciar e manter.",
        desc3:      "Espaço limpo, tipografia deliberada e um sistema de cores suave que sinaliza calma sem ser passivo. Construído para a vida real.",
        descMobile: "Um app de bem-estar projetado para ajudar pessoas a construir hábitos sustentáveis de mindfulness.",
      },
      myPhone: {
        desc1: "My Phone é um projeto de branding que explora a identidade visual de uma marca de dispositivo pessoal, construído em torno da ideia de que a tecnologia deve parecer humana, tátil e inconfundivelmente sua.",
        desc2: "O trabalho abrange identidade de marca, linguagem visual, tipografia e direção de arte, projetado para parecer ao mesmo tempo ousado e mínimo.",
      },
    },
    copyright: "© Pedro Julien 2026",
  },
} as const;
