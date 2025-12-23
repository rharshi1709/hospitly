import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

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
    <div className="w-full  rounded-lg  border-0">
      
      <Calendar
        onChange={setDate}
        value={date}
        minDate={new Date()}
      />

      {/* EVEN DATE → SHOW SLOTS */}
      {isEvenDate ? (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Available Slots
          </h3>

          <div className="flex flex-wrap gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className="px-4 py-2 rounded-md border border-green-600 
                           bg-green-600 text-white font-medium 
                           hover:bg-green-700 transition"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* ODD DATE → NO SLOTS */
        <p className="mt-4 text-red-500 font-semibold">
          ❌ No slots available for the selected date
        </p>
      )}
    </div>
  );
}

export default MyCalendar;
