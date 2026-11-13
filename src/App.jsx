import React, { useState, useEffect } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    servico: 'Desenvolvimento Web',
    mensagem: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projetos = [
    {
      id: 1,
      imagem: "",
      categoria: "DESENVOLVIMENTO WEB",
      titulo: "Plataforma Gamer & Loja Virtual",
      descricao: "Aplicação web moderna para venda de periféricos com carrinho em tempo real, painel administrativo e integração de pagamento.",
      tags: ["#React", "#JavaScript", "#Node.js", "#Figma"],
      linkRepo: "https://github.com",
      linkDemo: "https://github.com"
    },
    {
      id: 2,
      imagem: "",
      categoria: "DESENVOLVIMENTO WEB",
      titulo: "Painel Financeiro & Fluxo de Caixa",
      descricao: "Dashboard interativo desenvolvido para controle de entradas, saídas, gráficos estatísticos e previsão orçamentária empresarial.",
      tags: ["#Java", "#Node.js", "#SQL Server", "#React"],
      linkRepo: "https://github.com",
      linkDemo: "https://github.com"
    },
    {
      id: 3,
      imagem: "",
      categoria: "DESENVOLVIMENTO WEB",
      titulo: "Portal Institucional de Alta Conversão",
      descricao: "Site institucional altamente otimizado para motores de busca (SEO), carregamento ultrarrápido e design responsivo profissional.",
      tags: ["#React", "#JavaScript", "#Figma", "#Tailwind"],
      linkRepo: "https://github.com",
      linkDemo: "https://github.com"
    },
    {
      id: 4,
      imagem: "",
      categoria: "DESENVOLVIMENTO WEB",
      titulo: "Sistema de Gestão de Biblioteca (C#)",
      descricao: "Desenvolvido com ASP.NET Core MVC e Entity Framework Core, estruturado com modelagem relacional robusta e Clean Code.",
      tags: ["#C#", "#.NET", "#SQL Server", "#Entity"],
      linkRepo: "https://github.com",
      linkDemo: "https://github.com"
    },
    {
      id: 5,
      imagem: "",
      categoria: "DESENVOLVIMENTO WEB",
      titulo: "BusSense - Pulseira Assistiva",
      descricao: "Protótipo em RF criado no Senac Lapa Tito para alertar passageiros com deficiência visual sobre a aproximação de ônibus.",
      tags: ["#IoT", "#Hardware", "#Inovação", "#C#"],
      linkRepo: "https://github.com",
      linkDemo: "https://github.com"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projetos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, projetos.length]);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projetos.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projetos.length) % projetos.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    const textoWp = `Olá Lucas! Meu nome é *${formData.nome}* (${formData.email}). Tenho interesse em: *${formData.servico}*.\n\nMensagem: ${formData.mensagem}`;
    const urlWp = `https://wa.me/5511999999999?text=${encodeURIComponent(textoWp)}`;
    
    setTimeout(() => {
      window.open(urlWp, '_blank');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* Estilos CSS embutidos para animações de flutuação */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        .animate-float-card {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .animate-float-badge {
          animation: floatFast 3s ease-in-out infinite;
        }
      `}</style>

      {/* BARRA SUPERIOR DECORATIVA */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-yellow-400 h-1.5 w-full"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#050811]/90 backdrop-blur-md border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-blue-950 border border-yellow-400/60 flex items-center justify-center text-yellow-400 shadow-lg shadow-yellow-400/10 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M21 6H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white block">
                  LUCAS <span className="text-yellow-400">MOREIRA</span>
                </span>
                <span className="text-[10px] text-blue-400 tracking-widest uppercase block -mt-1">
                  DESENVOLVEDOR FULLSTACK
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-yellow-400 transition-colors">Home</a>
              <a href="#sobre" className="text-sm font-medium hover:text-yellow-400 transition-colors">Sobre Mim</a>
              <a href="#projetos" className="text-sm font-medium hover:text-yellow-400 transition-colors">Projetos</a>
              <a href="#habilidades" className="text-sm font-medium hover:text-yellow-400 transition-colors">Habilidades</a>
              <a href="#contatos" className="text-sm font-medium hover:text-yellow-400 transition-colors">Contatos</a>
            </nav>

            <div className="hidden md:block">
              <a 
                href="#contatos" 
                className="px-5 py-2.5 rounded-lg bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20"
              >
                Fale Comigo
              </a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-blue-950/60 border border-blue-900 text-yellow-400 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
                ) : (
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090e1a] border-b border-blue-900 px-4 pt-2 pb-6 space-y-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/40 hover:text-yellow-400">Home</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/40 hover:text-yellow-400">Sobre Mim</a>
            <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/40 hover:text-yellow-400">Projetos</a>
            <a href="#habilidades" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/40 hover:text-yellow-400">Habilidades</a>
            <a href="#contatos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/40 hover:text-yellow-400">Contatos</a>
          </div>
        )}
      </header>

      {/* TELA DE INÍCIO */}
      <section id="home" className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-700/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                Desenvolvedor de Software. <br />
                Eu ajudo empresas a <span className="text-yellow-400 underline decoration-yellow-400/50 underline-offset-8">construir</span> e <span className="text-yellow-400 underline decoration-yellow-400/50 underline-offset-8">escalar</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-yellow-400">produtos digitais</span>.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Desenvolvo aplicações corporativas robustas, APIs integradas e interfaces modernas. Meu compromisso é entregar código limpo, sistemas seguros e soluções que geram impacto real no seu negócio.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#projetos" 
                  className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-extrabold text-sm hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>🎮</span> EXPLORAR PROJETOS
                </a>
                <a 
                  href="#contatos" 
                  className="px-8 py-4 rounded-xl bg-[#090e1a] border border-blue-800 text-slate-200 font-extrabold text-sm hover:bg-blue-950/60 hover:text-yellow-400 transition-all shadow-lg"
                >
                  💬 SOLICITAR ORÇAMENTO
                </a>
              </div>
            </div>

            {/* ILUSTRAÇÃO COM EFEITO DE FLUTUAÇÃO */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                
                <div className="relative bg-[#090e1a]/90 border border-blue-900/60 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                  
                  <div className="relative overflow-hidden rounded-xl bg-transparent aspect-square flex items-center justify-center">
                    <img 
                      src="/ilustracao.png" 
                      alt="Ilustração Desenvolvedor" 
                      className="w-full h-full object-contain animate-float-card"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60";
                      }}
                    />

                    <div className="absolute top-6 right-6 bg-yellow-400 text-black px-3.5 py-1.5 rounded-lg font-mono font-black text-sm shadow-lg animate-float-badge border border-yellow-200">
                      &lt;/&gt;
                    </div>
                  </div>

                  <div className="mt-3 flex justify-center">
                    <span className="text-xs font-mono text-yellow-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
                      Lucas Moreira de Medeiros
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-20 bg-[#070b16] border-t border-blue-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 text-sm font-mono tracking-widest uppercase block mb-2">// QUEM SOU EU</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Sobre <span className="text-yellow-400">Mim</span></h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-blue-900/60 bg-blue-950/30 p-2 shadow-2xl">
                <div className="rounded-xl overflow-hidden aspect-[4/5] relative">
                  <img 
                    src="/perfil.jpeg" 
                    alt="Lucas Moreira" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "./";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1 rounded bg-yellow-400 text-black font-bold text-xs mb-2">STATUS: ONLINE</div>
                    <p className="text-white font-bold text-lg">Lucas Moreira de Medeiros</p>
                    <p className="text-slate-300 text-xs">Desenvolvedor FullStack</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 sm:p-8 shadow-xl relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs rounded-full font-mono">LVL 20</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Construindo soluções e sistemas de alto nível</h3>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  Meu nome é Lucas Moreira, tenho 20 anos e estou concluindo a faculdade Análise e Desenvolvimento de Sistemas. São 2 anos aprendendo e buscando conhecimento para melhorar cada dia mais o seu sistema e construir sites para o seu negócio e empresa.
                </p>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg pt-3">
                  Minha jornada na tecnologia é movida pela paixão por resolver desafios e entregar aplicações limpas, eficientes e de excelente usabilidade.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-yellow-400 text-sm font-mono tracking-widest uppercase block mb-2">// PORTFÓLIO DE DESTAQUE</span>
              <h4 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Conheça meu trabalho</h4>
              <div className="w-20 h-1 bg-yellow-400 mt-4 rounded-full"></div>
            </div>

            <div className="flex items-center gap-3 mt-6 md:mt-0">
              <button onClick={prevProject} className="p-3 rounded-xl bg-blue-950/80 border border-blue-900 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={nextProject} className="p-3 rounded-xl bg-blue-950/80 border border-blue-900 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div 
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{ transform: `translateX(-${currentProjectIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)` }}
            >
              {projetos.map((proj) => (
                <div key={proj.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0">
                  <div className="bg-[#090e1a] border border-blue-900/70 rounded-2xl overflow-hidden h-full flex flex-col justify-between hover:border-yellow-400/60 transition-all duration-300 shadow-xl group">
                    
                    <div className="relative aspect-video overflow-hidden bg-blue-950">
                      <img 
                        src={proj.imagem} 
                        alt={proj.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-80"></div>
                      <span className="absolute top-3 right-3 px-3 py-1 rounded bg-[#050811]/90 border border-yellow-400/40 text-yellow-400 text-[10px] font-bold font-mono tracking-wider shadow-md">
                        {proj.categoria}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {proj.titulo}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                          {proj.descricao}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {proj.tags.map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded bg-blue-950 text-blue-300 text-[11px] font-mono border border-blue-900/80">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-blue-950 text-xs font-bold">
                          <a href={proj.linkRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-yellow-400 transition-colors">
                            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                            <span>Código Fonte</span>
                          </a>
                          <a href={proj.linkDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors">
                            <span>Ver Projeto</span>
                            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="py-20 bg-[#070b16] border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 text-sm font-mono tracking-widest uppercase block mb-2">// TECH STACK & FERRAMENTAS</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Minhas <span className="text-yellow-400">Habilidades</span></h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 hover:border-yellow-400/60 transition-all shadow-xl group">
              <h3 className="text-lg font-bold text-white mb-2">React</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Interfaces modernas, componentes reutilizáveis e aplicações SPA.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[90%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 hover:border-yellow-400/60 transition-all shadow-xl group">
              <h3 className="text-lg font-bold text-white mb-2">JavaScript</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Dinamismo web, manipulação de DOM e lógica avançada.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[85%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 hover:border-yellow-400/60 transition-all shadow-xl group">
              <h3 className="text-lg font-bold text-white mb-2">C#</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Orientação a objetos, sistemas corporativos e backend seguro.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[90%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 hover:border-yellow-400/60 transition-all shadow-xl group">
              <h3 className="text-lg font-bold text-white mb-2">.NET</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Web APIs robustas, ASP.NET Core e Entity Framework Core.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[88%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 hover:border-yellow-400/60 transition-all shadow-xl group">
              <h3 className="text-lg font-bold text-white mb-2">Java</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Desenvolvimento backend orientado a objetos e regras de negócio.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[80%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 hover:border-yellow-400/60 transition-all shadow-xl group">
              <h3 className="text-lg font-bold text-white mb-2">Node.js</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Criação de servidores, APIs REST e automação de tarefas.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[82%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-yellow-400/40 rounded-2xl p-6 hover:border-yellow-400 transition-all shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[9px] font-bold px-2.5 py-0.5 rounded-bl font-mono">DESIGN</div>
              <h3 className="text-lg font-bold text-white mb-2">Figma</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Design UI/UX, prototipagem interativa e wireframes responsivos.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[92%]"></div></div>
            </div>

            <div className="bg-[#090e1a] border border-yellow-400/40 rounded-2xl p-6 hover:border-yellow-400 transition-all shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[9px] font-bold px-2.5 py-0.5 rounded-bl font-mono">DATABASE</div>
              <h3 className="text-lg font-bold text-white mb-2">SQL Server</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">Modelagem relacional, consultas avançadas e otimização.</p>
              <div className="w-full bg-blue-950 rounded-full h-1.5 border border-blue-900"><div className="bg-yellow-400 h-1.5 rounded-full w-[87%]"></div></div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTATOS */}
      <section id="contatos" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 text-sm font-mono tracking-widest uppercase block mb-2">// VAMOS TRABALHAR JUNTOS</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Entre em <span className="text-yellow-400">Contato</span></h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-white">Informações de Contato</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Estou sempre aberto a novos projetos, parcerias e oportunidades profissionais. Entre em contato pelos canais abaixo ou utilize o formulário.
                </p>

                <div className="space-y-4 pt-2">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-blue-950/60 border border-blue-900 hover:border-yellow-400 transition-all group">
                    <div>
                      <span className="text-xs text-slate-400 block">WhatsApp</span>
                      <span className="text-sm font-bold text-white group-hover:text-yellow-400">+55 (11) 99999-9999</span>
                    </div>
                  </a>

                  <a href="mailto:lucas.moreira@email.com" className="flex items-center gap-4 p-4 rounded-xl bg-blue-950/60 border border-blue-900 hover:border-yellow-400 transition-all group">
                    <div>
                      <span className="text-xs text-slate-400 block">E-mail</span>
                      <span className="text-sm font-bold text-white group-hover:text-yellow-400">lucas.moreira@email.com</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-blue-950">
                  <span className="text-xs text-slate-400 block mb-3">Redes Sociais</span>
                  <div className="flex items-center gap-3">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-blue-950 border border-blue-900 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center" title="GitHub">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-blue-950 border border-blue-900 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center" title="LinkedIn">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#090e1a] border border-blue-900/60 rounded-2xl p-6 sm:p-8 shadow-xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Mensagem Preparada!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">Redirecionando para o WhatsApp com os dados preenchidos.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-2">Envie uma Mensagem</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-slate-300 block">Seu Nome</label>
                        <input type="text" required placeholder="Ex: João Silva" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-900 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 text-sm" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-slate-300 block">Seu E-mail</label>
                        <input type="email" required placeholder="Ex: joao@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-900 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 text-sm" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-300 block">Tipo de Serviço</label>
                      <select value={formData.servico} onChange={(e) => setFormData({...formData, servico: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-900 text-white focus:outline-none focus:border-yellow-400 text-sm">
                        <option value="Desenvolvimento Web" className="bg-[#090e1a]">Desenvolvimento Web / Site</option>
                        <option value="Sistema Backend / API" className="bg-[#090e1a]">Sistema Backend / API (C# / .NET)</option>
                        <option value="Banco de Dados" className="bg-[#090e1a]">Banco de Dados / SQL Server</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-300 block">Sua Mensagem</label>
                      <textarea rows={4} required placeholder="Descreva o que você precisa..." value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-900 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 text-sm resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full py-3.5 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20">
                      Enviar Mensagem para o WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#03050c] border-t border-blue-950 py-8 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lucas Moreira. Todos os direitos reservados.</p>
          <p>Desenvolvido com React & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}