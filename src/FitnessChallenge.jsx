import React, { useState, useEffect } from "react";

export default function FitnessChallengeComponent() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const days = Array.from({ length: 9 }, (_, i) => i + 1);

  // Apply dark mode to document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen">
      {/* Header - Fixed Top Bar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 h-[60px] flex items-center justify-between px-6 sticky top-0 z-20">
        {/* BackstagePass Logo */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-amber-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
            <path
              strokeLinecap="round"
              d="M8.5 8.5C7 10 7 12.5 8.5 14M15.5 8.5c1.5 1.5 1.5 4 0 5.5M6 6c-2.7 2.7-2.7 7 0 9.7M18 6c2.7 2.7 2.7 7 0 9.7"
            />
          </svg>
          <span className="text-lg text-gray-900 dark:text-white">
            Backstage<span className="font-bold text-amber-600">Pass</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium">
            <span>9-Day Fitness Challenge</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-2xl">🔥</span>
            <span className="font-bold text-gray-900 dark:text-white">30</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            {darkMode ? (
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <img
            src="/assets/images/user_icon.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Main Container - Sidebar + Content */}
      <div className="flex flex-1 overflow-auto">
        {/* Sidebar */}
        <aside className="w-[258px] border-r border-gray-200 dark:border-gray-700 p-6 hidden md:block relative min-h-full">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/assets/images/checkingday_background.jpg')",
              filter: "blur(40px)",
              transform: "scale(1.1)",
              opacity: 0.4,
            }}
          />
          <div className="absolute inset-0 bg-white/40" />

          {/* Content Layer */}
          <div className="relative z-10">
            {/* Header */}

            {/* Back Button and Day */}
            <div className="mb-6 flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back</span>
              </button>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Day {selectedDay} of 9
              </div>
            </div>

            {/* Day List */}
            <div className="space-y-3">
              {days.map((day) => (
                <div
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex items-center cursor-pointer ${
                    day === 1
                      ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm rounded-l-3xl -mr-6 pr-10"
                      : "cursor-not-allowed"
                  }`}
                  style={
                    day === 1
                      ? { padding: "12px 0 12px 16px" }
                      : { padding: "12px 16px" }
                  }
                >
                  <span
                    className={`font-medium text-base ${day === 1 ? "text-gray-800 dark:text-gray-200" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Day - {day}
                  </span>
                  <div
                    className={`ml-auto rounded-full flex items-center justify-center ${
                      day === 1 ? "" : ""
                    }`}
                    style={
                      day === 1
                        ? {
                            width: "16.25px",
                            height: "16.25px",
                            backgroundColor: "#30A46C",
                            marginRight: "16px",
                          }
                        : {}
                    }
                  >
                    <svg
                      className={day === 1 ? "text-white" : ""}
                      style={
                        day === 1
                          ? { width: "10px", height: "10px" }
                          : { width: "20px", height: "20px", color: "#64748B" }
                      }
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
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
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white dark:bg-gray-800">
          {/* Wrapper - Adds padding around content */}
          <div className="p-6">
            {/* Frame - Centered 640px container for cards */}
            <div className="max-w-[640px] mx-auto space-y-3">
              {/* Checkin Day Panel - User Submission Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Decorative Header */}
                <div className="bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-900 dark:to-yellow-900 h-16 flex items-center justify-center px-4 relative">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300">
                    Your Submission
                  </div>
                </div>

                {/* User Info */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/assets/images/user_icon.jpg"
                      alt="Ashraf Idrishi"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Ashraf Idrishi
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Today's challenge workout completed - feeling stronger
                        already
                      </div>
                    </div>
                    <button className="ml-auto p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                      <svg
                        className="w-5 h-5 text-gray-600 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
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
                    className="w-full h-72 object-cover bg-white dark:bg-gray-800 rounded-lg"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-gray-700 dark:text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <img
                      src="/assets/images/user_icon.jpg"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                {/* Interaction Bar */}
                <div className="px-4 py-3 flex items-center gap-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1.5">
                    <span className="text-xl">&#128591;</span>
                    <span className="text-xl">&#128525;</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      18
                    </span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                    <svg
                      className="w-5 h-5 text-gray-600 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                    <svg
                      className="w-5 h-5 text-gray-600 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                  <div className="ml-auto text-sm text-gray-600 dark:text-gray-400">
                    10 Comments
                  </div>
                </div>
              </div>

              {/* Post List Section */}
              {/* See What Others Shared Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <div className="text-center mb-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                    See what others{" "}
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
                    </span>{" "}
                    shared
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    85+ participants already completed
                  </p>
                </div>
              </div>

              {/* Pinned Post Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                {/* Pinned Badge */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-700">
                  <svg
                    className="w-4 h-4 text-gray-700 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                  </svg>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    This is a pinned post
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="/assets/images/user_icon5.png"
                    alt="Russell Brunson"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Russell Brunson
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          3 hrs ago
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <svg
                          className="w-5 h-5 text-gray-600 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  This 9-day fitness challenge is designed to help you build
                  consistency, boost energy, and feel stronger – one day at a
                  time. Each day comes with a simple, achievable fitness task
                  that fits easily into your routine, no matter your current
                  fitness level.
                </p>

                {/* Challenge Details */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Minimum 20 minutes of sit-up
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Mention Intensity
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                      3
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Upload Media (Optional)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
