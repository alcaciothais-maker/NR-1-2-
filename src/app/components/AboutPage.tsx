import { motion } from 'motion/react';
import { Shield, Target, Users, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const objectives = [
  {
    icon: Target,
    title: 'Objetivo Principal',
    description: 'Estabelecer diretrizes gerais sobre Segurança e Saúde no Trabalho (SST) aplicáveis a todos os empregadores e trabalhadores.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Users,
    title: 'Responsabilidades',
    description: 'Definir responsabilidades de empregadores, trabalhadores e demais envolvidos na cadeia produtiva.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: FileCheck,
    title: 'Gestão de Riscos',
    description: 'Implementar o Gerenciamento de Riscos Ocupacionais (GRO) para identificar perigos e avaliar riscos.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  },
];

const principles = [
  { title: 'Prevenção de Acidentes', icon: Shield },
  { title: 'Gestão Participativa', icon: Users },
  { title: 'Conformidade Legal', icon: FileCheck },
  { title: 'Melhoria Contínua', icon: TrendingUp },
  { title: 'Análise de Riscos', icon: AlertTriangle },
  { title: 'Monitoramento Constante', icon: CheckCircle },
];

import { TrendingUp } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const nr1Structure = [
  { number: '1.1', title: 'Objeto e Campo de Aplicação', page: 'nr1-1-1' },
  { number: '1.2', title: 'Termos e Definições', page: 'nr1-1-2' },
  { number: '1.3', title: 'Direitos e Deveres', page: 'nr1-1-3' },
  { number: '1.4', title: 'Capacitação em SST', page: 'nr1-1-4' },
  { number: '1.5', title: 'Gerenciamento de Riscos Ocupacionais (GRO)', page: 'nr1-1-5' },
  { number: '1.6', title: 'Disposições Finais', page: 'nr1-1-6' },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre a NR-1
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Norma Regulamentadora nº 1 - Disposições Gerais e Gerenciamento de Riscos Ocupacionais
          </p>
        </motion.div>

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
          alt="Ambiente corporativo organizado para gestão de segurança"
          className="h-72 w-full object-cover rounded-xl shadow-xl mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            O que é a NR-1?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Norma Regulamentadora nº 1 (NR-1) é a norma fundamental que estabelece as disposições gerais,
              campo de aplicação, termos e definições comuns às Normas Regulamentadoras relativas à
              Segurança e Saúde no Trabalho (SST).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Atualizada em 2020, a NR-1 trouxe importantes mudanças, destacando-se a implementação do
              Gerenciamento de Riscos Ocupacionais (GRO), que estabelece requisitos para a gestão de riscos
              ocupacionais e medidas de prevenção em processos e ambientes de trabalho.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {objectives.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative h-40">
                  <ImageWithFallback src={obj.image} alt={obj.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-purple-950/35"></div>
                  <div className="absolute bottom-4 left-4 bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-purple-950" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {obj.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {obj.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 rounded-xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Princípios Fundamentais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-yellow-100 rounded-lg p-6 text-center hover:bg-yellow-200 transition-all shadow-lg"
                >
                  <Icon className="w-10 h-10 text-purple-950 mx-auto mb-3" />
                  <h3 className="text-purple-950 font-bold">{principle.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Estrutura da NR-1
          </h2>
          <div className="space-y-4">
            {nr1Structure.map((item, index) => (
              <motion.button
                key={index}
                type="button"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => onNavigate(item.page)}
                className="w-full flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="bg-blue-600 dark:bg-blue-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold">
                  {item.number}
                </div>
                <span className="text-gray-900 dark:text-white font-medium">{item.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
