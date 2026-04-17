import './SummaryItem.css';

interface SummaryItemProps {
  title: string;
  score: number;
  iconPath: string;
  colorVar: string;
  bgVar: string;
}

const SummaryItem = ({ title, score, iconPath, colorVar, bgVar }: SummaryItemProps) => {
  return (
    <div 
      className="summary-item"
      style={{ '--item-color': `var(${colorVar})`, '--item-bg': `var(${bgVar})` } as React.CSSProperties}
    >
      <div className="left-side">
        <img src={iconPath} alt={`${title} icon`} className="icon" />
        <span className="title">{title}</span>
      </div>
      <div className="right-side">
        {score} <span className="max-score">/ 100</span>
      </div>
    </div>
  );
}

export default SummaryItem;