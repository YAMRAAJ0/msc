import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-64">
      <h2 className="text-xl font-bold mb-4">Refine By</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Select your stream</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="stream" className="form-radio" />
            <span className="ml-2">Medical</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="stream" className="form-radio" />
            <span className="ml-2">Engineering</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="stream" className="form-radio" defaultChecked />
            <span className="ml-2">Foundations</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="class">
          Your Class
        </label>
        <select id="class" className="form-select w-full">
        <option>12-Plus</option>
          <option>11-Plus</option>
          <option>10-Plus</option>
          <option>9-Plus</option>
          <option>8-Plus</option>
          <option>7-Plus</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="state">
          State
        </label>
        <select id="state" className="form-select w-full">
          <option>Maharashtra</option>
          <option>Gujarat</option>
          <option>Karnataka</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="center">
          Center
        </label>
        <select id="center" className="form-select w-full">
          <option>-Select Center-</option>
          <option>Center 1</option>
          <option>Center 2</option>
          <option>Center 3</option>
        </select>
      </div>

      <button className="bg-blue-500 text-white w-full py-2 rounded">APPLY</button>
    </div>
  );
};

export default FilterSidebar;
