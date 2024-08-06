// src/components/AddEditForm.js
import React, { useState, useEffect } from 'react';

function AddEditForm({ onAddEdit, editData }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    value: '',
    phoneNumber: '',
    department: '',
    building: ''
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        id: '',
        name: '',
        value: '',
        phoneNumber: '',
        department: '',
        building: ''
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEdit(formData);
    setFormData({
      id: '',
      name: '',
      value: '',
      phoneNumber: '',
      department: '',
      building: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="value">Value</label>
        <input
          type="text"
          className="form-control"
          id="value"
          name="value"
          value={formData.value}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <input
          type="text"
          className="form-control"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="building">Building</label>
        <input
          type="text"
          className="form-control"
          id="building"
          name="building"
          value={formData.building}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {editData ? 'Update' : 'Add'} Item
      </button>
    </form>
  );
}

export default AddEditForm;
