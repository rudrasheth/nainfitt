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
      background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #faf5ff)',
      padding: '2rem'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '2rem'
      }}>
        <a 
          href="https://medi-lingoooooo.vercel.app" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#2563eb',
            textDecoration: 'none',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}
        >
          <ArrowLeft size={16} />
          Back to MediLingo
        </a>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #2563eb, #9333ea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          Your Digital Health Twin
        </h1>
        <p style={{ color: '#6b7280' }}>
          AI-powered insights from your health data, medications, nutrition, and lifestyle
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Health Score Card */}
        <div style={{
          background: 'white',
          border: '2px solid #dbeafe',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem'
            }}>
              <Activity size={24} color="#2563eb" />
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
            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#2563eb' }}>
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
              background: '#2563eb',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {[
              { icon: Pill, score: 85, label: 'Medication', bg: '#eff6ff', color: '#2563eb' },
              { icon: Apple, score: 72, label: 'Nutrition', bg: '#f0fdf4', color: '#16a34a' },
              { icon: Footprints, score: 65, label: 'Activity', bg: '#fff7ed', color: '#ea580c' },
              { icon: Moon, score: 80, label: 'Sleep', bg: '#faf5ff', color: '#9333ea' },
              { icon: Brain, score: 75, label: 'Mental', bg: '#fdf2f8', color: '#ec4899' }
            ].map((item, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '1rem',
                background: item.bg,
                borderRadius: '0.5rem'
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
          background: 'white',
          border: '2px solid #f3e8ff',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem'
            }}>
              <Activity size={24} color="#9333ea" />
              Live Vital Signs
              <span style={{
                marginLeft: '0.5rem',
                fontSize: '0.75rem',
                border: '1px solid #d1d5db',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
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
              background: 'linear-gradient(to bottom right, #fef2f2, #fce7f3)',
              borderRadius: '0.5rem'
            }}>
              <Heart size={24} color="#ef4444" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.heartRate} bpm
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Heart Rate</div>
              <span style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                fontSize: '0.75rem',
                border: '1px solid #d1d5db',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
              }}>
                Normal
              </span>
            </div>

            <div style={{
              padding: '1rem',
              background: 'linear-gradient(to bottom right, #eff6ff, #ecfeff)',
              borderRadius: '0.5rem'
            }}>
              <Droplets size={24} color="#3b82f6" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.bloodOxygen}%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Blood Oxygen</div>
              <span style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                fontSize: '0.75rem',
                border: '1px solid #d1d5db',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
              }}>
                Optimal
              </span>
            </div>

            <div style={{
              padding: '1rem',
              background: 'linear-gradient(to bottom right, #faf5ff, #ede9fe)',
              borderRadius: '0.5rem'
            }}>
              <Moon size={24} color="#9333ea" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.sleepHours} hrs
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Sleep Duration</div>
              <span style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                fontSize: '0.75rem',
                border: '1px solid #d1d5db',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
              }}>
                Good
              </span>
            </div>

            <div style={{
              padding: '1rem',
              background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)',
              borderRadius: '0.5rem'
            }}>
              <Footprints size={24} color="#16a34a" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {vitalSigns.steps.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Steps Today</div>
              <span style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                fontSize: '0.75rem',
                border: '1px solid #d1d5db',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
              }}>
                On Track
              </span>
            </div>
          </div>
        </div>

        {/* Predictive Health Analysis */}
        <div style={{
          background: 'white',
          border: '2px solid #d1fae5',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem'
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
                border: `2px solid ${item.color === 'green' ? '#86efac' : '#fde047'}`,
                background: item.color === 'green' ? '#f0fdf4' : '#fefce8',
                borderRadius: '0.5rem'
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
                  color: item.color === 'green' ? '#15803d' : '#a16207'
                }}>
                  Risk: {item.risk}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Intelligence */}
        <div style={{
          background: 'white',
          border: '2px solid #fed7aa',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem'
            }}>
              <Apple size={24} color="#ea580c" />
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
              border: '1px solid #fecaca',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                fontWeight: '600',
                color: '#b91c1c',
                marginBottom: '0.5rem'
              }}>
                ⚠️ Foods to Avoid
              </h3>
              <ul style={{ fontSize: '0.875rem', lineHeight: '1.75' }}>
                <li>• Grapefruit (interacts with statins)</li>
                <li>• Alcohol (with pain medications)</li>
                <li>• High-sodium foods</li>
              </ul>
            </div>

            <div style={{
              padding: '1rem',
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                fontWeight: '600',
                color: '#15803d',
                marginBottom: '0.5rem'
              }}>
                ✓ Recommended Nutrients
              </h3>
              <ul style={{ fontSize: '0.875rem', lineHeight: '1.75' }}>
                <li>• Omega-3 fatty acids</li>
                <li>• Vitamin D supplements</li>
                <li>• High-fiber foods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
