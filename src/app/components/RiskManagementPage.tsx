import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown, AlertTriangle, CheckCircle, XCircle, X, FileText } from 'lucide-react';

const riskData = [
  { month: 'Jan', alto: 12, medio: 24, baixo: 45 },
  { month: 'Fev', alto: 10, medio: 22, baixo: 48 },
  { month: 'Mar', alto: 8, medio: 20, baixo: 52 },
  { month: 'Abr', alto: 6, medio: 18, baixo: 55 },
  { month: 'Mai', alto: 5, medio: 15, baixo: 58 },
];

const incidentData = [
  { name: 'Resolvidos', value: 145, color: '#10b981' },
  { name: 'Em Andamento', value: 32, color: '#f59e0b' },
  { name: 'Pendentes', value: 8, color: '#ef4444' },
];

const complianceData = [
  { category: 'EPIs', compliance: 95 },
  { category: 'Treinamentos', compliance: 88 },
  { category: 'Documentação', compliance: 92 },
  { category: 'Inspeções', compliance: 85 },
  { category: 'Auditorias', compliance: 90 },
];

const riskCategories = [
  { title: 'Riscos Críticos', count: 5, trend: -2, color: 'bg-red-500', icon: XCircle, id: 'critical' },
  { title: 'Riscos Altos', count: 15, trend: -3, color: 'bg-orange-500', icon: AlertTriangle, id: 'high' },
  { title: 'Riscos Médios', count: 32, trend: -5, color: 'bg-yellow-500', icon: AlertTriangle, id: 'medium' },
  { title: 'Riscos Baixos', count: 58, trend: 8, color: 'bg-green-500', icon: CheckCircle, id: 'low' },
];

export default function RiskManagementPage() {
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  const riskDetails: Record<string, { title: string; description: string; actions: string[] }> = {
    critical: {
      title: 'Riscos Críticos',
      description: 'Riscos que podem causar fatalidades ou lesões graves irreversíveis. Requerem ação imediata.',
      actions: [
        'Paralisação imediata das atividades',
        'Implementação de controles de emergência',
        'Investigação detalhada das causas',
        'Revisão completa dos procedimentos',
      ],
    },
    high: {
      title: 'Riscos Altos',
      description: 'Riscos significativos que podem resultar em lesões graves ou danos materiais importantes.',
      actions: [
        'Avaliação prioritária',
        'Implementação de medidas de controle',
        'Treinamento específico da equipe',
        'Monitoramento contínuo',
      ],
    },
    medium: {
      title: 'Riscos Médios',
      description: 'Riscos moderados que requerem atenção e controle adequado.',
      actions: [
        'Análise de controles existentes',
        'Melhoria de procedimentos',
        'Conscientização da equipe',
        'Revisão periódica',
      ],
    },
    low: {
      title: 'Riscos Baixos',
      description: 'Riscos com baixa probabilidade e impacto limitado.',
      actions: [
        'Manutenção dos controles atuais',
        'Monitoramento de rotina',
        'Documentação adequada',
        'Revisão anual',
      ],
    },
  };
  return (
    <>
      <AnimatePresence>
        {selectedRisk && riskDetails[selectedRisk] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRisk(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {riskDetails[selectedRisk].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {riskDetails[selectedRisk].description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRisk(null)}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Ações Recomendadas
                </h3>
                <ul className="space-y-3">
                  {riskDetails[selectedRisk].actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedRisk(null)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gerenciamento de Riscos Ocupacionais
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Dashboard completo para análise e controle de riscos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {riskCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedRisk(category.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 ${category.trend < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingDown className={`w-4 h-4 ${category.trend > 0 ? 'rotate-180' : ''}`} />
                    <span className="text-sm font-semibold">{Math.abs(category.trend)}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {category.count}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{category.title}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Evolução de Riscos (6 meses)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="alto" stroke="#ef4444" strokeWidth={2} name="Alto Risco" />
                <Line type="monotone" dataKey="medio" stroke="#f59e0b" strokeWidth={2} name="Médio Risco" />
                <Line type="monotone" dataKey="baixo" stroke="#10b981" strokeWidth={2} name="Baixo Risco" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Status de Incidentes
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incidentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {incidentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conformidade por Categoria
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="category" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="compliance" fill="#3b82f6" radius={[8, 8, 0, 0]} name="% Conformidade" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
    </>
  );
}
