import React, { useState } from "react";

const BackgroundInfoForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formBody = new URLSearchParams(formData).toString();
    try {
      const response = await fetch('http://localhost:5000/submit-section-a', {
        method: 'POST',
        body: formBody,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      const result = await response.json();
      if (result.result === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      alert('Error submitting form.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Section A: Background Information of Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. Name of the hospital */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Hospital Name</label>
          <input
            type="text"
            name="hospital_name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* 2. Address */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* 3. Type of Health Care Facility */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Type of Facility</label>
          <input
            type="text"
            name="facility_type"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* 4. Beds */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Inpatient Beds</label>
            <input
              type="number"
              name="inpatient_beds"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
<div>
            <label className="block font-medium mb-1">Emergency Beds</label>
      <input
              type="number"
              name="emergency_beds"
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2"
        required
      />
    </div>
        </div>
        {/* 5. ESI Triage */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            ESI Triage
            <span className="ml-2 text-gray-500 text-sm">(Red: 1-2, Yellow: 3-4, Green: 5)</span>
          </label>
          <select
            name="esi_triage"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select</option>
            <option value="Red">Red (1-2)</option>
            <option value="Yellow">Yellow (3-4)</option>
            <option value="Green">Green (5)</option>
          </select>
        </div>
        {/* Yearly note */}
        <div className="mb-6">
          <span className="block text-sm text-gray-500 italic">All numbers below are yearly totals (for the last calendar year).</span>
        </div>
        {/* 6. OPD Attendance */}
        <div className="mb-4">
          <label className="block font-medium mb-1">OPD Attendance</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="opd_adult"
              placeholder="Adult"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="opd_paediatric"
              placeholder="Pediatric"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {/* 7. Emergency Attendance */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Emergency Attendance</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="emergency_adult"
              placeholder="Adult"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="emergency_paediatric"
              placeholder="Pediatric"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {/* 8. Trauma Deaths in Emergency */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Trauma Deaths (ED)</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="trauma_death_adult"
              placeholder="Adult"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="trauma_death_paediatric"
              placeholder="Pediatric"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {/* 9. RTI Deaths in Emergency */}
        <div className="mb-4">
          <label className="block font-medium mb-1">RTI Deaths (ED)</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="rti_death_adult"
              placeholder="Adult"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="rti_death_paediatric"
              placeholder="Pediatric"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {/* 10. Brought Dead Cases */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Brought Dead Cases</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="brought_dead_adult"
              placeholder="Adult"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="brought_dead_paediatric"
              placeholder="Pediatric"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {/* 11. Medico-legal Cases */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Medico-legal Cases</label>
          <input
            type="number"
            name="mlc_cases"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* 12. Emergency Admissions */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Emergency Admissions</label>
          <input
            type="number"
            name="emergency_admissions"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* 13. Inspection Team Members */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Inspection Team Members</label>
          <div className="space-y-2">
            <input
              type="text"
              name="team_member_1"
              placeholder="Member 1"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              name="team_member_2"
              placeholder="Member 2"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              name="team_member_3"
              placeholder="Member 3"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
</div>
  );
};

export default BackgroundInfoForm;
