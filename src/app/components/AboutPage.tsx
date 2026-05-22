import { motion } from 'motion/react';
import { Shield, Target, Users, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: 'Objetivo Principal',
    description: 'Estabelecer diretrizes gerais sobre Segurança e Saúde no Trabalho (SST) aplicáveis a todos os empregadores e trabalhadores.',
  },
  {
    icon: Users,
    title: 'Responsabilidades',
    description: 'Definir responsabilidades de empregadores, trabalhadores e demais envolvidos na cadeia produtiva.',
  },
  {
    icon: FileCheck,
    title: 'Gestão de Riscos',
    description: 'Implementar o Gerenciamento de Riscos Ocupacionais (GRO) para identificar perigos e avaliar riscos.',
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

export default function AboutPage() {
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {obj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {obj.description}
                </p>
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
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all"
                >
                  <Icon className="w-10 h-10 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold">{principle.title}</h3>
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
            {[
              { number: '1.1', title: 'Objeto e Campo de Aplicação' },
              { number: '1.2', title: 'Termos e Definições' },
              { number: '1.3', title: 'Direitos e Deveres' },
              { number: '1.4', title: 'Capacitação em SST' },
              { number: '1.5', title: 'Gerenciamento de Riscos Ocupacionais (GRO)' },
              { number: '1.6', title: 'Disposições Finais' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                <div className="bg-blue-600 dark:bg-blue-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold">
                  {item.number}
                </div>
                <span className="text-gray-900 dark:text-white font-medium">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
