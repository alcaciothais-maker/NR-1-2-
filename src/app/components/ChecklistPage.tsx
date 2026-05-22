import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckSquare, Square, Download, Share2, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChecklistPageProps {
  onNavigate: (page: string) => void;
}

interface ChecklistItem {
  id: number;
  category: string;
  items: {
    id: number;
    text: string;
    checked: boolean;
  }[];
}

const initialChecklist: ChecklistItem[] = [
  {
    id: 1,
    category: 'Documentação Obrigatória',
    items: [
      { id: 1, text: 'PGR - Programa de Gerenciamento de Riscos atualizado', checked: false },
      { id: 2, text: 'PCMSO - Programa de Controle Médico de Saúde Ocupacional', checked: false },
      { id: 3, text: 'LTCAT - Laudo Técnico das Condições Ambientais de Trabalho', checked: false },
      { id: 4, text: 'Registros de treinamentos obrigatórios', checked: false },
      { id: 5, text: 'Documentação de EPIs fornecidos', checked: false },
    ],
  },
  {
    id: 2,
    category: 'Gestão de Riscos',
    items: [
      { id: 6, text: 'Inventário de riscos ocupacionais completo', checked: false },
      { id: 7, text: 'Análise preliminar de riscos (APR) realizada', checked: false },
      { id: 8, text: 'Medidas de controle implementadas', checked: false },
      { id: 9, text: 'Monitoramento contínuo de riscos', checked: false },
      { id: 10, text: 'Plano de ação para riscos críticos', checked: false },
    ],
  },
  {
    id: 3,
    category: 'Treinamentos e Capacitação',
    items: [
      { id: 11, text: 'Treinamento admissional de segurança', checked: false },
      { id: 12, text: 'Capacitação sobre uso de EPIs', checked: false },
      { id: 13, text: 'Treinamento de primeiros socorros', checked: false },
      { id: 14, text: 'Simulados de emergência realizados', checked: false },
      { id: 15, text: 'Reciclagem periódica de treinamentos', checked: false },
    ],
  },
  {
    id: 4,
    category: 'Inspeções e Auditorias',
    items: [
      { id: 16, text: 'Inspeções de segurança mensais', checked: false },
      { id: 17, text: 'Verificação de equipamentos de proteção', checked: false },
      { id: 18, text: 'Auditoria interna de conformidade', checked: false },
      { id: 19, text: 'Relatórios de não conformidades', checked: false },
      { id: 20, text: 'Plano de melhorias implementado', checked: false },
    ],
  },
];

const categoryImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80',
  2: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
  3: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
  4: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
};

export default function ChecklistPage({ onNavigate }: ChecklistPageProps) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);

  const toggleItem = (categoryId: number, itemId: number) => {
    setChecklist(
      checklist.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
              ),
            }
          : category
      )
    );
  };

  const resetChecklist = () => {
    setChecklist(
      checklist.map((category) => ({
        ...category,
        items: category.items.map((item) => ({ ...item, checked: false })),
      }))
    );
  };

  const totalItems = checklist.reduce((sum, category) => sum + category.items.length, 0);
  const checkedItems = checklist.reduce(
    (sum, category) => sum + category.items.filter((item) => item.checked).length,
    0
  );
  const progress = Math.round((checkedItems / totalItems) * 100);

  const exportChecklist = () => {
    const content = checklist
      .map((category) => {
        const items = category.items
          .map((item) => `${item.checked ? '[x]' : '[ ]'} ${item.text}`)
          .join('\n');
        return `${category.category}\n${items}`;
      })
      .join('\n\n');
    const blob = new Blob([`Checklist NR-1\nProgresso: ${progress}%\n\n${content}`], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'checklist-nr1.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const shareChecklist = async () => {
    const text = `Checklist NR-1: ${checkedItems} de ${totalItems} itens concluidos (${progress}%).`;

    if (navigator.share) {
      await navigator.share({ title: 'Checklist NR-1', text, url: window.location.href });
      return;
    }

    await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    onNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Checklist de Conformidade NR-1
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Verifique o cumprimento dos requisitos essenciais
          </p>
        </motion.div>

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
          alt="Documentos de conformidade e planejamento"
          className="h-64 w-full object-cover rounded-xl shadow-xl mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Progresso Geral
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {checkedItems} de {totalItems} itens concluídos
              </p>
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {progress}%
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
              className={`h-4 rounded-full ${
                progress === 100
                  ? 'bg-green-500'
                  : progress >= 50
                  ? 'bg-blue-500'
                  : 'bg-orange-500'
              }`}
            ></motion.div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={exportChecklist}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Exportar Relatorio
            </button>
            <button
              onClick={shareChecklist}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
            <button
              onClick={resetChecklist}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Resetar
            </button>
          </div>
        </motion.div>

        <div className="space-y-6">
          {checklist.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-44">
                <ImageWithFallback
                  src={categoryImages[category.id]}
                  alt={category.category}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-950/65"></div>
                <div className="absolute inset-0 px-6 py-5 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <p className="text-purple-100 text-sm">
                    {category.items.filter((item) => item.checked).length} de {category.items.length}{' '}
                    completos
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + catIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                      item.checked
                        ? 'bg-green-50 dark:bg-green-900/20'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => toggleItem(category.id, item.id)}
                  >
                    <button
                      className={`flex-shrink-0 w-6 h-6 rounded transition-colors ${
                        item.checked
                          ? 'bg-green-500 text-white'
                          : 'bg-white dark:bg-gray-600 border-2 border-gray-300 dark:border-gray-500'
                      }`}
                      aria-label={item.checked ? 'Marcar como não concluído' : 'Marcar como concluído'}
                    >
                      {item.checked ? (
                        <CheckSquare className="w-6 h-6" />
                      ) : (
                        <Square className="w-6 h-6" />
                      )}
                    </button>
                    <span
                      className={`flex-1 ${
                        item.checked
                          ? 'text-gray-500 dark:text-gray-400 line-through'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
