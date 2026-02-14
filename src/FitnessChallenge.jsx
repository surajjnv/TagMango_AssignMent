import React, { useState } from 'react';

export default function FitnessChallengeComponent() {
  const [selectedDay, setSelectedDay] = useState(1);

  const days = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 p-6 hidden md:block">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <div className="text-orange-500 text-2xl">📻</div>
          <span className="text-xl font-bold text-gray-900">BackstagePass</span>
        </div>

        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-700 mb-6 md:mb-8 hover:text-gray-900">
          <span>&larr;</span>
          <span>Back</span>
        </button>

        {/* Day List */}
        <div className="space-y-2 md:space-y-3">
          {days.map((day) => (
            <div
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                day === 1
                  ? 'bg-white hover:bg-gray-50'
                  : 'bg-gray-200 hover:bg-gray-300 cursor-not-allowed'
              }`}
            >
              <span className={`font-medium ${day === 1 ? 'text-gray-700' : 'text-gray-600'}`}>
                Day - {day}
              </span>
              <div
                className={`ml-auto w-5 h-5 rounded-full flex items-center justify-center ${
                  day === 1 ? 'bg-green-500' : 'bg-gray-400'
                }`}
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  {day === 1 ? (
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between sticky top-0 z-10 gap-2 md:gap-0">
          <div className="text-gray-600 text-sm">Day {selectedDay} of 9</div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium">
              <span>9-Day Fitness Challenge</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-2xl">🔥</span>
              <span className="font-bold text-gray-900">30</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <img
              src="/assets/images/user_icon.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-8">
          {/* Submission Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-2 max-w-3xl mx-auto">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 h-10 flex items-center justify-between px-4">
              <div className="text-sm font-semibold text-green-700">Your Submission</div>
              <div className="flex items-center gap-2 text-lg">
                <span>🎵</span>
                <span>✓</span>
                <span>🎶</span>
              </div>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/assets/images/user_icon.png"
                  alt="Ashraf Idrishi"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">Ashraf Idrishi</div>
                  <div className="text-sm text-gray-600">
                    Today's challenge workout completed - feeling stronger already
                  </div>
                </div>
                <button className="ml-auto p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Exercise Image */}
            <div className="relative px-4 py-3">
              <img
                src="/assets/images/workout.jpg"
                alt="Workout"
                className="w-full h-72 object-cover bg-white rounded-lg"
              />
              <div className="absolute top-6 right-6">
                <img
                  src="/assets/images/user_icon.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Interaction Bar */}
            <div className="px-4 py-3 flex items-center gap-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">&#128591;</span>
                <span className="text-2xl">&#128525;</span>
                <span className="text-sm font-medium text-gray-700">18</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
              <div className="ml-auto text-sm text-gray-600">10 Comments</div>
            </div>
          </div>

          {/* Shared Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-2 max-w-3xl mx-auto">
            <div className="text-center mb-2">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                See what others{' '}
                <span className="inline-flex gap-2">
                  <img
                    src="/assets/images/user_icon2.png"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <img
                    src="/assets/images/user_icon3.png"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                    <img
                    src="/assets/images/user_icon4.png"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                </span>{' '}
                shared
              </h3>
              <p className="text-sm text-gray-600">85+ participants already completed</p>
            </div>
          </div>

          {/* Pinned Post */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-2 max-w-3xl mx-auto">
            {/* Pinned Badge */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
              </svg>
              <span className="text-xs font-medium text-gray-700">This is a pinned post</span>
            </div>

            {/* Author Info */}
            <div className="flex items-start gap-3 mb-3">
              <img
                src="/assets/images/user_icon.png"
                alt="Russell Brunson"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">Russell Brunson</div>
                    <div className="text-xs text-gray-600">3 hrs ago</div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel
              stronger – one day at a time. Each day comes with a simple, achievable fitness task that fits easily
              into your routine, no matter your current fitness level.
            </p>

            {/* Challenge Details */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                  📋
                </div>
                <span className="text-sm text-gray-700">Minimum 20 minutes of sit-up</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                  ⚡
                </div>
                <span className="text-sm text-gray-700">Mention Intensity</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                  📱
                </div>
                <span className="text-sm text-gray-700">Upload Media (Optional)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}