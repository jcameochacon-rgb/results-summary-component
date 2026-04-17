import ResultPanel from '../components/ResultPanel';
import SummaryPanel from '../components/SummaryPanel';

export default function Home() {
  return (
    <main className="main-content">
      <div className="card-container">
        <ResultPanel />
        <SummaryPanel />
      </div>
    </main>
  );
}