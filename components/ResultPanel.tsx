import './ResultPanel.css';

const ResultPanel = () => {
  return (
    <div className="result-panel">
      <h3 className="panel-title" style={{ color: 'white' }}>Your Result</h3>
      
      <div className="score-circle">
        <span className="big-score">76</span>
        <span className="of-max">of 100</span>
      </div>

      <h2 className="grade">Great</h2>
      <p className="description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultPanel;