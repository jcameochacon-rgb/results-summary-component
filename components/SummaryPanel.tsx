"use client";

import SummaryItem from './SummaryItem';
import Button from './Button';
import './SummaryPanel.css';

const summaryData = [
  { id: 1, title: 'Reaction', score: 80, iconPath: '/icon-reaction.svg', colorVar: '--light-red', bgVar: '--light-red-bg' },
  { id: 2, title: 'Memory', score: 92, iconPath: '/icon-memory.svg', colorVar: '--orangey-yellow', bgVar: '--orangey-yellow-bg' },
  { id: 3, title: 'Verbal', score: 61, iconPath: '/icon-verbal.svg', colorVar: '--green-teal', bgVar: '--green-teal-bg' },
  { id: 4, title: 'Visual', score: 73, iconPath: '/icon-visual.svg', colorVar: '--cobalt-blue', bgVar: '--cobalt-blue-bg' },
];

const SummaryPanel = () => {
  return (
    <div className="summary-panel">
      {/* Usamos summary-title para evitar colisiones con el ResultPanel */}
      <h3 className="summary-title">Summary</h3>
      
      <div className="items-container">
        {summaryData.map((item) => (
          <SummaryItem 
            key={item.id}
            title={item.title}
            score={item.score}
            iconPath={item.iconPath}
            colorVar={item.colorVar}
            bgVar={item.bgVar}
          />
        ))}
      </div>

      <Button onClick={() => console.log('Pasando las pruebas y commiteando...')}>
        Continue
      </Button>
    </div>
  );
}

export default SummaryPanel;