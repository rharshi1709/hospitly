import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const day = date.getDate();
  const isEvenDate = day % 2 === 0;

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
  ];

  return (
    <div className="w-full rounded-lg border-0">
      <Calendar
        onChange={(d) => {
          setDate(d);
          setSelectedSlot(null);
        }}
        value={date}
        minDate={new Date()}
      />

      {/* EVEN DATE → SHOW SLOTS */}
      {isEvenDate ? (
        <div className="mt-3">
          <h3 className="text-sm font-semibold mb-2 text-gray-800">
            Available Slots
          </h3>

          <div className="flex flex-wrap gap-1.5">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`px-2 py-1 rounded text-xs font-medium border transition
                  ${
                    selectedSlot === slot
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <div className="flex items-center justify-center mt-3">
            <a href="/appointment"
            disabled={!selectedSlot}
            className={`mt-3 w-full text-center px-2 text-xs font-semibold py-1.5 rounded border transition
              ${
                selectedSlot
                  ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                  : "bg-gray-200 text-gray-500 border-gray-200 cursor-not-allowed"
              }`}
          >
            Book an Appointment
          </a>
          </div>

          {selectedSlot && (
            <p className="mt-2 text-xs text-green-700">
              Selected: {selectedSlot}
            </p>
          )}
        </div>
      ) : (
        <p className="mt-3 text-xs text-red-500 font-semibold">
          ❌ No slots available for the selected date
        </p>
      )}
    </div>
  );
}

export default MyCalendar;
