import { useState } from 'react'
import './App.css'

function App() {
  const [noPosition, setNoPosition] = useState(null)
  const [isAccepted, setIsAccepted] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const currentDate = new Date()
  const [currentViewDate, setCurrentViewDate] = useState(new Date())

  const viewYear = currentViewDate.getFullYear()
  const viewMonth = currentViewDate.getMonth()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const currentMonthName = monthNames[viewMonth]

  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay()
  const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate()

  const daysArray = []
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null)
  }
  for (let d = 1; d <= totalDays; d++) {
    daysArray.push(d)
  }

  const handlePrevMonth = () => {
    setCurrentViewDate(new Date(viewYear, viewMonth - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentViewDate(new Date(viewYear, viewMonth + 1, 1))
  }

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(new Date(viewYear, viewMonth, day))
    }
  }

  const handleConfirm = () => {
    setIsConfirmed(true)
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
      
      fetch("https://formsubmit.co/ajax/dangnguyen12092005@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "Coffee Date Confirmed!",
          "Selected Date": formattedDate,
          "Message": `Great news! She confirmed ${formattedDate} for your coffee date.`
        })
      })
      .then(response => response.json())
      .catch(error => console.error("Error sending email:", error));
    }
  }

  const handleNoMouseEnter = (event) => {
    const minDistance = 280
    const width = window.innerWidth
    const height = window.innerHeight

    let left
    let top
    let attempts = 0

    do {
      left = Math.random() * (width - 140)
      top = Math.random() * (height - 70)
      const dx = left - event.clientX
      const dy = top - event.clientY
      const distance = Math.hypot(dx, dy)
      if (distance >= minDistance) break
      attempts += 1
    } while (attempts < 20)

    setNoPosition({ left, top })
  }

  const noStyle = noPosition
    ? {
        position: 'fixed',
        left: noPosition.left,
        top: noPosition.top,
      }
    : undefined

  return (
    <div className="page">
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="heartGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff758c" />
            <stop offset="100%" stopColor="#ff7eb3" />
          </linearGradient>
          <linearGradient id="heartGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffa0c5" />
            <stop offset="100%" stopColor="#ffccd5" />
          </linearGradient>
          <linearGradient id="heartGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff85a1" />
            <stop offset="100%" stopColor="#fca3b7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="hearts">
        <svg className="heart-svg heart1" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="heart-svg heart2" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="heart-svg heart3" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="heart-svg heart4" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="heart-svg heart5" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg className="heart-svg heart6" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div className="content">
        {isAccepted ? (
          isConfirmed ? (
            <>
              <img
                src="/gif/emoji-meme-002.webp"
                alt="Final Confirmation GIF"
                className="center-gif success-gif final-gif"
              />
              <div className="final-confirmation">
                <div className="success-message congrats">Yay! It's a date.</div>
                <div className="confirmed-details">
                  <p className="details-prompt">Can't wait to see you on:</p>
                  <div className="date-badge">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <p className="sweet-note">See you very soon.</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src="/gif/tumblr_fbf092e04ccb71c0f948c2dd7979887b_9047c061_1280.webp"
                alt="Success GIF"
                className="center-gif success-gif"
              />
              <div className="success-message">
                Which day will you be free?
              </div>
              
              <div className="calendar-section">
                <div className="calendar-container">
                  <div className="calendar-header">
                    <button className="nav-btn" onClick={handlePrevMonth}>&lt;</button>
                    <h3>{currentMonthName} {viewYear}</h3>
                    <button className="nav-btn" onClick={handleNextMonth}>&gt;</button>
                  </div>
                  <div className="calendar-grid">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                      <div key={d} className="calendar-day-header">{d}</div>
                    ))}
                    {daysArray.map((day, idx) => {
                      const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === viewMonth && selectedDate.getFullYear() === viewYear;
                      const isToday = day === currentDate.getDate() && viewMonth === currentDate.getMonth() && viewYear === currentDate.getFullYear();
                      
                      return (
                        <button
                          key={idx}
                          className={`calendar-day-btn ${day ? 'active-day' : 'empty-day'} ${isSelected ? 'selected-day' : ''} ${isToday ? 'today' : ''}`}
                          disabled={!day}
                          onClick={() => handleDateClick(day)}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="calendar-side-panel">
                  {selectedDate ? (
                    <div className="side-confirmation-box animate-pop">
                      <div className="confirmation-title">Date Selected:</div>
                      <div className="side-date-display">
                        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                      </div>
                      <button 
                        className="action-button yes confirm-btn"
                        onClick={handleConfirm}
                      >
                        confirm
                      </button>
                    </div>
                  ) : (
                    <div className="side-placeholder-box">
                      <div className="heart-icon-placeholder">📅</div>
                      <p>Pick a date from the calendar to lock it in!</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <img
              src="/gif/sanrio%20GIF.gif"
              alt="Centered GIF"
              className="center-gif"
            />
            <div className="question">
              will you go out with me for a coffee date?
            </div>
            <div className="actions">
              <button 
                className="action-button yes"
                onClick={() => setIsAccepted(true)}
              >
                yes
              </button>
              <button
                className="action-button no"
                onMouseEnter={handleNoMouseEnter}
                style={noStyle}
              >
                no
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
