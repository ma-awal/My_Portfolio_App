import React from 'react';
import './Services.css';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { serviceData } from '../../../data/data.js';
const Services = () => {
  return (
    <section className="section_service custom_height  " id="services">
      <div className="container  ">
        <PageTitle
          title={'  Services'}
          text={
            ' I offer multiple service in the frontend webdevelopment field'
          }
        />

        <div className="row align-items-center justify-content-between g-3 g-md-4  g-lg-5  ">
          {serviceData.map((service, index) => {
            return (
              <div className="col-12 col-md-6 " key={index}>
                <div className="single_service   text-center p-lg-5  p-md-4 p-3  ">
                  <span className="mb-3">
                    <AiOutlineAntDesign className="icon" />
                  </span>
                  <h4 className=" custom_heading">{service.heading}</h4>
                  <p className="text-center pb-3  custom_text">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
