import { useState, useEffect } from "react";
import { 
  Activity, Heart, Brain, TrendingUp, Pill, Apple,
  Footprints, Moon, Droplets, ArrowLeft
} from "lucide-react";

function App() {
  const [healthScore] = useState(78);
  const [vitalSigns, setVitalSigns] = useState({
    heartRate: 72,
    bloodOxygen: 98,
    sleepHours: 7.5,
    steps: 8500
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVitalSigns(prev => ({
        heartRate: Math.floor(70 + Math.random() * 10),
        bloodOxygen: Math.floor(96 + Math.random() * 3),
        sleepHours: prev.sleepHours,
        steps: prev.steps + Math.floor(Math.random() * 50)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const predictiveHealth = [
    { category: "Cardiovascular", risk: "Low", score: 85, color: "green" },
    { category: "Metabolic", risk: "Medium", score: 68, color: "yellow" },
    { category: "Sleep Quality", risk: "Low", score: 80, color: "green" }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '0'
    }}>
      {/* Glass Nav Bar */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>M</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'white' }}>MediLingo</span>
          </div>
          <a 
            href="https://medi-lingoooooo.vercel.app" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.875rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <ArrowLeft size={16} />
            Back to MediLingo
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        paddingTop: '5rem',
        padding: '5rem 2rem 2rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Your Digital Health Twin
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            AI-powered insights from your health data, medications, nutrition, and lifestyle
          </p>
        </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Health Score Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem',
              color: '#16a34a'
            }}>
              <Activity size={24} color="#16a34a" />
              Overall Health Score
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Your comprehensive health status
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#16a34a' }}>
              {healthScore}
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#16a34a',
                marginBottom: '0.25rem'
              }}>
                <TrendingUp size={20} />
                <span style={{ fontWeight: '600' }}>+5 from last week</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Keep up the great work!
              </p>
            </div>
          </div>

          <div style={{
            width: '100%',
            height: '0.75rem',
            background: '#e5e7eb',
            borderRadius: '9999px',
            marginBottom: '1.5rem',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${healthScore}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #16a34a, #22c55e)',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {[
              { icon: Pill, score: 85, label: 'Medication', bg: '#dcfce7', color: '#16a34a' },
              { icon: Apple, score: 72, label: 'Nutrition', bg: '#fef3c7', color: '#f59e0b' },
              { icon: Footprints, score: 65, label: 'Activity', bg: '#dbeafe', color: '#3b82f6' },
              { icon: Moon, score: 80, label: 'Sleep', bg: '#e0e7ff', color: '#6366f1' },
              { icon: Brain, score: 75, label: 'Mental', bg: '#fce7f3', color: '#ec4899' }
            ].map((item, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '1rem',
                background: item.bg,
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.5)'
              }}>
                <item.icon size={32} color={item.color} style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.score}%</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Vital Signs */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem',
              color: '#16a34a'
            }}>
              <Activity size={24} color="#16a34a" />
              Live Vital Signs
              <span style={{
                marginLeft: '0.5rem',
                fontSize: '0.75rem',
                border: '1px solid #16a34a',
                color: '#16a34a',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                background: '#dcfce7'
              }}>
                Real-time
              </span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Simulated wearable data integration (HealthKit/Fitbit compatible)
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}>
              <Heart size={24} color="#ef4444" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.heartRate} bpm
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>Heart Rate</div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                background: '#dcfce7',
                color: '#16a34a',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                border: '1px solid #16a34a'
              }}>
                Normal
              </span>
            </div>

            <div style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}>
              <Droplets size={24} color="#3b82f6" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.bloodOxygen}%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>Blood Oxygen</div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                background: '#dcfce7',
                color: '#16a34a',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                border: '1px solid #16a34a'
              }}>
                Optimal
              </span>
            </div>

            <div style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}>
              <Moon size={24} color="#8b5cf6" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.sleepHours} hrs
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>Sleep Duration</div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                background: '#dcfce7',
                color: '#16a34a',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                border: '1px solid #16a34a'
              }}>
                Good
              </span>
            </div>

            <div style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}>
              <Footprints size={24} color="#16a34a" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.steps.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>Steps Today</div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                background: '#dcfce7',
                color: '#16a34a',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                border: '1px solid #16a34a'
              }}>
                On Track
              </span>
            </div>
          </div>
        </div>

        {/* Predictive Health Analysis */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem',
              color: '#16a34a'
            }}>
              <Brain size={24} color="#16a34a" />
              AI-Powered Predictive Health Analysis
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Based on your medications, vitals, and lifestyle patterns
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            {predictiveHealth.map((item, idx) => (
              <div key={idx} style={{
                padding: '1rem',
                border: `2px solid ${item.color === 'green' ? '#16a34a' : '#f59e0b'}`,
                background: item.color === 'green' ? '#dcfce7' : '#fef3c7',
                borderRadius: '12px'
              }}>
                <div style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {item.category}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {item.score}%
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: item.color === 'green' ? '#15803d' : '#d97706'
                }}>
                  Risk: {item.risk}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Intelligence */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem',
              color: '#16a34a'
            }}>
              <Apple size={24} color="#16a34a" />
              Nutrition Intelligence
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Food-drug interactions and dietary recommendations
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              padding: '1rem',
              background: '#fef2f2',
              border: '2px solid #fca5a5',
              borderRadius: '12px'
            }}>
              <h3 style={{
                fontWeight: '600',
                color: '#dc2626',
                marginBottom: '0.5rem'
              }}>
                ⚠️ Foods to Avoid
              </h3>
              <ul style={{ fontSize: '0.875rem', lineHeight: '1.75', paddingLeft: '1rem' }}>
                <li>Grapefruit (interacts with statins)</li>
                <li>Alcohol (with pain medications)</li>
                <li>High-sodium foods</li>
              </ul>
            </div>

            <div style={{
              padding: '1rem',
              background: '#dcfce7',
              border: '2px solid #16a34a',
              borderRadius: '12px'
            }}>
              <h3 style={{
                fontWeight: '600',
                color: '#15803d',
                marginBottom: '0.5rem'
              }}>
                ✓ Recommended Nutrients
              </h3>
              <ul style={{ fontSize: '0.875rem', lineHeight: '1.75', paddingLeft: '1rem' }}>
                <li>Omega-3 fatty acids</li>
                <li>Vitamin D supplements</li>
                <li>High-fiber foods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
