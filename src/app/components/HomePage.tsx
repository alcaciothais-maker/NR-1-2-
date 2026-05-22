import { motion } from 'motion/react';
import { Shield, Users, FileText, Award, TrendingUp, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const features = [
  {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Conformidade total com as diretrizes da NR-1 para ambiente de trabalho seguro',
    color: 'bg-blue-500',
    page: 'about' as const,
    image: 'https://images.unsplash.com/photo-1581091215367-59ab6b56f524?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Users,
    title: 'Treinamento Contínuo',
    description: 'Programas de capacitação e desenvolvimento de equipes',
    color: 'bg-green-500',
    page: 'training' as const,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: FileText,
    title: 'Gestão Documental',
    description: 'Organização e controle de toda documentação de segurança',
    color: 'bg-purple-500',
    page: 'checklist' as const,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Award,
    title: 'Certificações',
    description: 'Reconhecimento e certificações em segurança do trabalho',
    color: 'bg-orange-500',
    page: 'training' as const,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Análise de Riscos',
    description: 'Identificação e gestão proativa de riscos ocupacionais',
    color: 'bg-red-500',
    page: 'risks' as const,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: BookOpen,
    title: 'Base de Conhecimento',
    description: 'Acesso a conteúdos e materiais educativos especializados',
    color: 'bg-indigo-500',
    page: 'blog' as const,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
];

const stats = [
  { value: '100%', label: 'Conformidade Legal' },
  { value: '500+', label: 'Empresas Atendidas' },
  { value: '50k+', label: 'Profissionais Treinados' },
  { value: '24/7', label: 'Suporte Técnico' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden py-20"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80"
          alt="Equipe com equipamentos de seguranca em ambiente industrial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            NR-1: Disposições Gerais e Gerenciamento de Riscos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Sua plataforma completa para gestão de segurança e saúde no trabalho,
            seguindo as diretrizes da Norma Regulamentadora nº 1
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => onNavigate('training')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Começar Agora
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Saiba Mais
            </button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
            alt="Profissionais analisando dados de seguranca no trabalho"
            className="h-80 w-full object-cover rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Gestao de SST com visao pratica
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Centralize treinamentos, riscos, documentos e acompanhamento de conformidade em uma experiencia pensada para rotinas de seguranca do trabalho.
            </p>
            <button
              onClick={() => onNavigate('risks')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Ver Gestao de Riscos
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ferramentas completas para garantir a segurança e conformidade da sua empresa
            </p>
          </motion.div>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80"
            alt="Equipe avaliando solucoes de seguranca ocupacional"
            className="h-72 w-full object-cover rounded-xl shadow-xl mb-10"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => onNavigate(feature.page)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple-950/45"></div>
                    <div className={`${feature.color} absolute bottom-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Transforme a gestão de segurança da sua empresa com nossas ferramentas especializadas
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Agende uma Demonstração
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
