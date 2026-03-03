import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const day = date.getDate();
  const isEvenDate = day % 2 === 0;
  const isSunday = date.getDay() === 0;

  // Available only if EVEN date and NOT Sunday
  const isAvailable = isEvenDate && !isSunday;

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT - Calendar */}
        <div className="lg:w-1/2 w-full">
          <Calendar
            onChange={(d) => {
              setDate(d);
              setSelectedSlot(null);
            }}
            value={date}
            minDate={new Date()}
            tileDisabled={({ date }) => date.getDay() === 0}
            tileClassName={({ date }) =>
              date.getDay() === 0 ? "text-red-400 font-semibold" : null
            }
            className="w-full rounded-2xl border-0 shadow-lg p-6 text-lg"
          />
        </div>

        {/* RIGHT - Slots */}
        <div className="lg:w-1/2 w-full flex flex-col">

          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Available Slots
          </h3>

          {isAvailable ? (
            <>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-4 rounded-2xl text-base font-medium border transition-all duration-300 shadow-sm
                      ${
                        selectedSlot === slot
                          ? "bg-blue-600 text-white border-blue-600 scale-105 shadow-lg"
                          : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white"
                      }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <Link to="/appointment"
                disabled={!selectedSlot}
                className={`mt-8 px-2 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
                  ${
                    selectedSlot
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl hover:scale-105"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Confirm Appointment
              </Link>

              {selectedSlot && (
                <p className="mt-4 text-sm text-green-600 font-medium">
                  ✔ Selected: {selectedSlot}
                </p>
              )}
            </>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-red-500 font-medium text-lg">
              {isSunday
                ? "Doctor is not available on Sundays"
                : "No slots available for the selected date"}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default MyCalendar;