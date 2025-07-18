import React, { useState } from "react";

const HospitalForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call or backend integration
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Section B: Hospital Services Questionnaire</h1>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Hospital Name */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Hospital Name</label>
          <input
            type="text"
            name="hospital_name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Page 1: Blood Bank Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Page 1: Blood Bank Services (Score: 1-Full Compliance, 2-Partial, 3-None)</h2>
          {[
            "Does the facility have a licensed in-house blood bank?",
            "If yes, is the blood bank available 24x7?",
            "If no, is there any tie-up with external blood bank facility?",
            "Does the emergency have separate component facility: Packed cell (RBC), FFP, Platelet, Cryoprecipitate?",
            "Does the facility have O-negative blood availability?",
            "ED Blood storage facility available in ED?",
            "ED Blood transfusion protocol (Written)?",
            "Massive Blood transfusion protocol (Written)?"
          ].map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block font-medium mb-1">{question}</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name={`blood_bank_${index}`}
                    value="1"
                    onChange={handleChange}
                    required
                  /> Full
                </label>
                <label>
                  <input
                    type="radio"
                    name={`blood_bank_${index}`}
                    value="2"
                    onChange={handleChange}
                  /> Partial
                </label>
                <label>
                  <input
                    type="radio"
                    name={`blood_bank_${index}`}
                    value="3"
                    onChange={handleChange}
                  /> None
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Page 2: Definitive Care Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Page 2: Definitive Care Services (Score: 1-No, 2-Partial, 3-Yes)</h2>
          {[
            "Emergency operative services for Trauma patients",
            "Emergency operative services for Non-Trauma (Surgical, Orthopedics etc.) patients",
            "Emergency operative services for Obstetrics patients",
            "Elective operative services for Orthopedic patients",
            "Elective operative services for neurosurgical patients",
            "Common Intensive care services (ICU)",
            "Common High dependency Unit (HDU)",
            "Pediatric ICU",
            "Neonatal ICU",
            "Neurosurgery ICU",
            "Cardiac Intensive care Unit",
            "Cardiac Cath lab",
            "Intervention Radiology",
            "Intervention Neuroradiology service with DSA",
            "Facility for Emergency CABG services",
            "Facility for Radiofrequency ablation services"
          ].map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block font-medium mb-1">{question}</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name={`definitive_care_${index}`}
                    value="1"
                    onChange={handleChange}
                    required
                  /> No
                </label>
                <label>
                  <input
                    type="radio"
                    name={`definitive_care_${index}`}
                    value="2"
                    onChange={handleChange}
                  /> Partial
                </label>
                <label>
                  <input
                    type="radio"
                    name={`definitive_care_${index}`}
                    value="3"
                    onChange={handleChange}
                  /> Yes
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Page 3: Hospital Ambulance Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Page 3: Hospital Ambulance Services (Score: 1-No, 2-Partial, 3-Yes)</h2>

          {/* Score-based questions */}
          {[
            "Do you have ambulances in your hospital?",
            "Do you get Pre-Hospital Notification?",
            "Are ambulances manned with appropriately trained paramedics as per the level of ambulance services?",
            "Do you have mobile stroke unit?"
          ].map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block font-medium mb-1">{question}</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name={`ambulance_score_${index}`}
                    value="1"
                    onChange={handleChange}
                    required
                  /> No
                </label>
                <label>
                  <input
                    type="radio"
                    name={`ambulance_score_${index}`}
                    value="2"
                    onChange={handleChange}
                  /> Partial
                </label>
                <label>
                  <input
                    type="radio"
                    name={`ambulance_score_${index}`}
                    value="3"
                    onChange={handleChange}
                  /> Yes
                </label>
              </div>
            </div>
          ))}

          {/* Non-score questions */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Total number of ambulances</label>
            <input
              type="number"
              name="total_ambulances"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Total number of Functional / Non-Functional ambulances</label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="functional_ambulances"
                placeholder="Functional"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
              <input
                type="number"
                name="non_functional_ambulances"
                placeholder="Non-Functional"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Number of BLS/ALS ambulances</label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="bls_ambulances"
                placeholder="BLS"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
              <input
                type="number"
                name="als_ambulances"
                placeholder="ALS"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Purpose of ambulance use</label>
            <select
              name="ambulance_use"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select purpose</option>
              <option value="Pickup patient">Pickup patient</option>
              <option value="Drop patient">Drop patient</option>
              <option value="Intra-transfer">Intra-transfer</option>
              <option value="Inter-hospital transfer">Inter-hospital transfer</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">If no ambulance, how do you transfer patients?</label>
            <textarea
              name="alternate_transfer_method"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Telemedicine facility usage</label>
            <textarea
              name="telemedicine_usage"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              rows="3"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HospitalForm;
