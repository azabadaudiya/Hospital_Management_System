import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "https://hospital-management-system-backend-wdg0.onrender.com/api/v1/appointment/getAll",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>{admin && `${admin.firstName} ${admin.lastName}`} </h5>
              </div>
              <p>
                AzzCare Medical Institute is a state-of-the-art facility
                dedicated to providing comprehensive healthcare services with
                compassion and expertise.At AzzCare, we prioritize your
                well-being, ensuring a harmonious journey towards optimal health
                and wellness.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>1500</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td>
                      {appointment.status === "Accepted" ? (
                        <p style={{ color: "green" }}>Accepted</p>
                      ) : appointment.status === "Rejected" ? (
                        <p style={{ color: "red" }}>Rejected</p>
                      ) : (
                        <p style={{ color: "gray" }}>Pending</p>
                      )}
                    </td>
                    <td>
                      {appointment.hasVisited === true ? (
                        <GoCheckCircleFill className="green" />
                      ) : (
                        <AiFillCloseCircle className="red" />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Appointments Found!</td>
                </tr>
              )}
            </tbody>
          </table>

          {}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
