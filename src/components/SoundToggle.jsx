import React, { useState } from 'react';
import { sound } from '../utils/audio.js';

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    const isNowOn = sound.toggle();
    setEnabled(isNowOn);
  };

  return (
    <button
      type="button"
      className={`sound-toggle-btn ${enabled ? 'active' : ''}`}
      onClick={handleToggle}
      aria-label={enabled ? 'Mute audio feedback' : 'Enable audio feedback'}
      title={enabled ? 'Sound FX: ON (Click to mute)' : 'Sound FX: OFF (Click to enable)'}
    >
      <div className="sound-bars">
        <span className="bar bar-1" />
        <span className="bar bar-2" />
        <span className="bar bar-3" />
        <span className="bar bar-4" />
      </div>
      <span className="sound-label">{enabled ? 'SOUND: ON' : 'SOUND: OFF'}</span>
    </button>
  );
}
