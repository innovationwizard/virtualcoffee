'use client';

import { useState } from 'react';
import { CheckCircle, Play, Lock } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  videoUrl: string; // YouTube Embed URL
  isCompleted: boolean;
  isLocked: boolean;
}

export default function VideoPlayer({ lesson }: { lesson: Lesson }) {
  const [completed, setCompleted] = useState(lesson.isCompleted);

  const toggleComplete = () => {
    // PRINCIPAL NOTE: Here you will POST to Django to update 'UserProgress'
    const newState = !completed;
    setCompleted(newState);
    
    if (newState) {
      // Simple "Poor Man's Confetti" - visual feedback
      alert("🎉 XP Gained: +50 Barista Points!"); 
    }
  };

  if (lesson.isLocked) {
    return (
      <div className="aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
        <Lock className="w-12 h-12 mb-2" />
        <p className="font-bold">This lesson is locked.</p>
        <p className="text-sm">Complete previous modules to unlock.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* The Video Container */}
      <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
        <iframe 
          src={lesson.videoUrl} 
          title={lesson.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* The Action Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-xl font-serif font-bold text-brand-dark">{lesson.title}</h1>
          <p className="text-sm text-gray-500">Module 1: The Basics</p>
        </div>

        <button 
          onClick={toggleComplete}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105
            ${completed 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-brand-primary text-white shadow-md hover:bg-brand-accent'}
          `}
        >
          {completed ? (
            <>
              <CheckCircle className="w-5 h-5" /> Completed
            </>
          ) : (
            <>
              <CheckCircle className="w-5 h-5" /> Mark Complete
            </>
          )}
        </button>
      </div>
    </div>
  );
}