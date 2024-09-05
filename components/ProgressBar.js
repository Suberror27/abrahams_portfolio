import React, { useEffect, useState } from 'react';

export default function ProgressBar({ title, progress, label }){
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(progress);
  }, [progress]);

  return (
    <div className="static-progress-wrapper">
      <div className="static-progress-title">{title}</div>
      <div className="static-progress-container">
        <div className="static-progress-bar" style={{ width: `${animatedProgress}%` }}>
          <div className="static-progress-label">{label}</div>
        </div>
      </div>
    </div>
  );
};
