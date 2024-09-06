import React, { useEffect, useState } from 'react';

export default function ProgressBar({ title, progress }){
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(progress);
  }, [progress]);

  return (
    <div className="static-progress-wrapper hover:scale-105 duration-500">
      <div className="static-progress-title text-white">{title}</div>
      <div className="static-progress-container ">
        <div className="static-progress-bar" style={{ width: `${animatedProgress}%` }}>
          <div className="static-progress-label">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

