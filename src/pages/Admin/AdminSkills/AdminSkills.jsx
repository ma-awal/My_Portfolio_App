import React, { useState } from 'react';
import { skillData } from '../../../data/data';
import './AdminSkills.css';

const AdminSkills = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const openUpdateModal = (skill) => {
    setSelectedSkill(skill);
    setIsUpdateMode(true);
    setShowModal(true);
  };

  return (
    <div className="admin_skill container">
      <button
        className="btn  create_btn mb-3 rounded-0 "
        onClick={() => setShowModal(true)}
      >
        <h3 className="text-capitalize"> Add Skill</h3>
      </button>

      <div className="row items_wrapper g-3 g-lg-4  ">
        {skillData.map((skill) => {
          return (
            <div className="col-6 col-md-4 col-lg-3">
              <div className="single_items  text-center rounded  ">
                <img
                  src={skill.image}
                  className="img-fluid  shadow-lg   mb-1  "
                  alt=""
                />

                <p className="text-center   text-uppercase fw-semibold px-2 ">
                  {skill.skillTitle}
                </p>
                <div className="  d-flex justify-content-center rounded-0  gap-2 ">
                  <button
                    className="btn btn-sm btn-warning rounded-0"
                    onClick={() => openUpdateModal(skill)}
                  >
                    Update
                  </button>
                  <button className="btn btn-sm btn-danger rounded-0">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <div className="project_modal ">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-6  ">
                <div className="modal_content">
                  <h2> Add Skill </h2>
                  <form className="admin_form">
                    <div className="form-group mb-3">
                      <label htmlFor="skillImg">Image Url</label>
                      <input
                        type="text"
                        name="image"
                        placeholder="image url"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="skillTitle">Skill Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="skillTitle"
                        placeholder="Skill Title"
                      />
                    </div>

                    <div className="modal_btn d-flex gap-2">
                      <button className="btn btn-sm  rounded-0" type="submit">
                        {isUpdateMode ? 'Update skill' : 'Add skill'}
                      </button>
                      <button
                        className="btn btn-sm  rounded-0 "
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSkills;
