import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppHeader from './components/AppHeader.jsx';
import BottomNav from './components/BottomNav.jsx';
import Overview from './pages/Overview.jsx';
import Components from './pages/Components.jsx';
import ComponentDetail from './pages/ComponentDetail.jsx';
import Matching from './pages/Matching.jsx';

export default function App() {
  const location = useLocation();
  const isDetailPage = /^\/components\/[^/]+$/.test(location.pathname);

  return (
    <div className="app-shell min-h-screen text-ink">
      <div className="mx-auto min-h-screen w-full max-w-[430px] border-x border-[#ded7ca] bg-canvas/95">
        <AppHeader showBack={isDetailPage} />
        <main
          key={location.pathname}
          className={`route-shell ${isDetailPage ? 'pb-8' : 'pb-28'}`}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/:id" element={<ComponentDetail />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="*" element={<Navigate to="/overview" replace />} />
          </Routes>
        </main>
        {!isDetailPage && <BottomNav />}
      </div>
    </div>
  );
}
