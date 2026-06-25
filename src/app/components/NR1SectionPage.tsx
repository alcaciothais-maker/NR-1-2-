import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, FileText, Shield, Users, GraduationCap, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NR1SectionPageProps {
  sectionId: string;
  onNavigate: (page: string) => void;
}

const sections: Record<string, {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  icon: typeof Shield;
  summary: string;
  topics: string[];
  actions: string[];
}> = {
  'nr1-1-1': {
    number: '1.1',
    title: 'Objeto e Campo de Aplicação',
    subtitle: 'Entenda onde a NR-1 se aplica e por que ela orienta todas as demais Normas Regulamentadoras.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    icon: Shield,
    summary: 'Esta parte apresenta o alcance geral da NR-1, sua função dentro da gestão de Segurança e Saúde no Trabalho e a base para aplicação das demais NRs nas empresas.',
    topics: ['Campo de aplicação das Normas Regulamentadoras', 'Relação entre empregadores, trabalhadores e ambientes de trabalho', 'Diretrizes gerais para SST'],
    actions: ['Mapear unidades e atividades abrangidas', 'Identificar quais NRs complementares se aplicam', 'Registrar responsabilidades iniciais de SST'],
  },
  'nr1-1-2': {
    number: '1.2',
    title: 'Termos e Definições',
    subtitle: 'Conceitos essenciais para evitar interpretações divergentes na gestão de SST.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    icon: FileText,
    summary: 'Reúne as definições usadas na NR-1 e em processos de gestão ocupacional, ajudando equipes técnicas e lideranças a falarem a mesma linguagem.',
    topics: ['Definições comuns as NRs', 'Conceitos de perigo, risco e medidas de prevenção', 'Padronização documental'],
    actions: ['Criar glossário interno de SST', 'Usar termos padronizados em relatórios', 'Treinar lideranças sobre conceitos-chave'],
  },
  'nr1-1-3': {
    number: '1.3',
    title: 'Direitos e Deveres',
    subtitle: 'Responsabilidades de empregadores e trabalhadores na prevenção de acidentes e doenças ocupacionais.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    icon: Users,
    summary: 'Define papéis esperados na rotina de SST, incluindo cumprimento de procedimentos, comunicação de riscos, fornecimento de condições seguras e participação dos trabalhadores.',
    topics: ['Deveres do empregador', 'Deveres dos trabalhadores', 'Participação e comunicação de riscos'],
    actions: ['Formalizar responsabilidades por área', 'Criar canal para reporte de riscos', 'Acompanhar adesão aos procedimentos'],
  },
  'nr1-1-4': {
    number: '1.4',
    title: 'Capacitação em SST',
    subtitle: 'Requisitos para treinamentos, orientações e desenvolvimento de competências em segurança.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    icon: GraduationCap,
    summary: 'Trata da capacitação dos trabalhadores, critérios de treinamento, reciclagens e registros necessários para comprovar a preparação das equipes.',
    topics: ['Treinamento admissional e periódico', 'Conteúdo compatível com os riscos da atividade', 'Registro e rastreabilidade das capacitações'],
    actions: ['Montar matriz de treinamentos', 'Definir prazos de reciclagem', 'Guardar evidências e certificados'],
  },
  'nr1-1-5': {
    number: '1.5',
    title: 'Gerenciamento de Riscos Ocupacionais',
    subtitle: 'Base do GRO e do PGR para identificar perigos, avaliar riscos e controlar exposições.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80',
    icon: AlertTriangle,
    summary: 'Detalha a lógica de gerenciamento de riscos ocupacionais, conectando inventário de riscos, plano de ação, medidas de controle e melhoria contínua.',
    topics: ['Inventário de riscos ocupacionais', 'Plano de ação do PGR', 'Hierarquia de medidas de prevenção'],
    actions: ['Atualizar inventário de riscos', 'Priorizar controles por severidade', 'Monitorar eficácia das medidas implantadas'],
  },
  'nr1-1-6': {
    number: '1.6',
    title: 'Disposições Finais',
    subtitle: 'Orientações finais para documentação, aplicação e manutenção das exigências da NR-1.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80',
    icon: CheckCircle,
    summary: 'Consolida pontos de aplicação, registros e organização final para que a empresa mantenha conformidade de forma contínua.',
    topics: ['Organização de evidências', 'Manutenção de registros', 'Revisão periódica de conformidade'],
    actions: ['Revisar documentos obrigatórios', 'Conferir pendências no checklist', 'Definir rotina de auditoria interna'],
  },
};

export default function NR1SectionPage({ sectionId, onNavigate }: NR1SectionPageProps) {
  const section = sections[sectionId] ?? sections['nr1-1-1'];
  const Icon = section.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('about')}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 text-purple-800 hover:bg-yellow-100 hover:text-purple-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Estrutura
        </button>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl"
        >
          <div className="relative h-80">
            <ImageWithFallback src={section.image} alt={section.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-purple-950/70"></div>
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-4 py-2 text-purple-950 font-bold">
                  <Icon className="w-5 h-5" />
                  NR-1 {section.number}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{section.title}</h1>
                <p className="text-lg text-purple-100 max-w-3xl">{section.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Resumo</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">{section.summary}</p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pontos principais</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {section.topics.map((topic) => (
                  <div key={topic} className="rounded-lg bg-purple-50 dark:bg-purple-950/30 p-4 border border-purple-100 dark:border-purple-800">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mb-3" />
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{topic}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-xl bg-purple-700 p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ações recomendadas</h3>
              <div className="space-y-3">
                {section.actions.map((action) => (
                  <div key={action} className="rounded-lg bg-white/10 p-3 text-purple-50">
                    {action}
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate(sectionId === 'nr1-1-5' ? 'risks' : sectionId === 'nr1-1-4' ? 'training' : 'checklist')}
                className="mt-6 w-full rounded-lg bg-yellow-400 px-4 py-3 font-bold text-purple-950 hover:bg-yellow-300 transition-colors"
              >
                Aplicar no portal
              </button>
            </aside>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
