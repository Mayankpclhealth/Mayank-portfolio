import type { ReactNode } from 'react';
import type { ProjectId } from '@/data/portfolio';

/* Illustrated previews of each site. Sizes use container units (cqw), so they scale with the frame. */

function EpicScreen() {
  const stats = [
    ['500+', 'Global Clients'],
    ['15+', 'Years'],
    ['98%', 'Satisfaction'],
    ['50+', 'Countries'],
  ];
  return (
    <div className="screen s-epic">
      <div className="mk-nav">
        <b>Epic Global</b>
        <u />
        <u />
        <u />
        <em>Contact Us</em>
      </div>
      <div className="mk-body">
        <h4>Accelerate Your Digital Future</h4>
        <p>Enterprise-grade technology solutions that transform businesses and drive innovation.</p>
        <div className="mk-btns">
          <em>Get Started</em>
          <em className="ghost">Learn More</em>
        </div>
      </div>
      <div className="mk-stats">
        {stats.map(([value, label]) => (
          <div key={label}>
            <b>{value}</b>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function TbfScreen() {
  const swatches = ['#fff', '#f7b6c5', '#ff7aa2', '#ffc59e', '#f7d94c', '#b9a3e6', '#8c1f3b', '#6aa579'];
  const products = [
    ['#ffe9ee', 'White spray roses', '$39.99'],
    ['#e3f1e6', "Baby's breath", '$15.99'],
    ['#ffd9df', 'Bulk red roses', '$69.99'],
    ['#f0e8fb', 'Rose shimmer', '$119.99'],
  ];
  return (
    <div className="screen s-tbf">
      <div className="mk-nav">
        <b>Toronto Bulk Flowers</b>
        <u />
        <u />
        <u />
        <em>Cart</em>
      </div>
      <div className="mk-body">
        <h4>Unbeatable Value, Unforgettable Blooms</h4>
        <div className="mk-btns" style={{ marginTop: '2.4cqw' }}>
          <em>Shop Flowers</em>
          <em className="pink">Shop Greenery</em>
        </div>
      </div>
      <div className="mk-sw">
        {swatches.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </div>
      <div className="mk-prod">
        {products.map(([bg, name, price]) => (
          <div key={name}>
            <i style={{ background: bg }} />
            {name} <b>{price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function VeyasScreen() {
  return (
    <div className="screen s-veyas">
      <div className="mk-ring" />
      <div className="mk-nav">
        <b>Veyas AI</b>
        <u />
        <u />
        <u />
      </div>
      <div className="mk-body">
        <h4>Clinical OS</h4>
        <p>Automate healthcare workflows and streamline hospital operations with AI.</p>
        <div className="mk-btns">
          <em>Get started</em>
        </div>
      </div>
      <div className="mk-mod">
        <span>Workflows</span>
        <span>Patient outcomes</span>
        <span>Operations</span>
      </div>
    </div>
  );
}

function DashScreen() {
  const bar = (width: string, bg: string, mb?: string) => ({
    height: '1.6cqw',
    width,
    borderRadius: '1cqw',
    background: bg,
    marginBottom: mb,
  });
  return (
    <div className="screen s-dash">
      <div style={{ background: '#0f1a3a', padding: '2.6cqw 2cqw' }}>
        <div style={{ ...bar('10cqw', '#6c8cff', '3.4cqw'), height: '2.4cqw' }} />
        <div style={bar('12cqw', '#2a3a6e', '2cqw')} />
        <div style={bar('9cqw', '#2a3a6e', '2cqw')} />
        <div style={bar('11cqw', '#2a3a6e')} />
      </div>
      <svg viewBox="0 0 340 214" role="img" aria-label="Illustration of a patient monitoring dashboard">
        <rect width="340" height="214" fill="#f4f6fb" />
        <g fill="#fff" stroke="#dde3f2">
          <rect x="10" y="10" width="100" height="40" rx="8" />
          <rect x="120" y="10" width="100" height="40" rx="8" />
          <rect x="230" y="10" width="100" height="40" rx="8" />
          <rect x="10" y="60" width="210" height="80" rx="8" />
          <rect x="230" y="60" width="100" height="80" rx="8" />
          <rect x="10" y="150" width="320" height="54" rx="8" />
        </g>
        <g fill="#0b1020" fontFamily="sans-serif" fontWeight={700} fontSize={14}>
          <text x="20" y="36">128</text>
          <text x="130" y="36">94%</text>
          <text x="240" y="36">12</text>
        </g>
        <polyline
          points="20,128 50,108 80,116 110,92 140,100 170,78 200,86"
          fill="none"
          stroke="#3558ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#3558ff">
          <rect x="244" y="112" width="12" height="18" rx="2" />
          <rect x="262" y="96" width="12" height="34" rx="2" />
          <rect x="280" y="104" width="12" height="26" rx="2" />
          <rect x="298" y="80" width="12" height="50" rx="2" />
        </g>
        <polyline
          points="20,178 70,178 78,178 84,168 90,178 120,178 126,160 132,194 138,178 190,178 198,168 206,178 260,178 266,160 272,194 278,178 322,178"
          fill="none"
          stroke="#e8334f"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export const screens: Record<ProjectId, () => ReactNode> = {
  epic: () => <EpicScreen />,
  tbf: () => <TbfScreen />,
  veyas: () => <VeyasScreen />,
  dash: () => <DashScreen />,
};
