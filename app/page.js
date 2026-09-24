"use client";

import { useState } from "react";

const students = [
  {
    name: "Amara Okonkwo",
    admission: "GLMS/2024/0147",
    className: "JSS 2A",
    average: 82,
    attendance: 94,
    position: 6
  }
];

export default function Home() {
  const [role, setRole] = useState("Management");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    "Dashboard",
    "Students",
    "Teachers",
    "Parents",
    "Classes",
    "Subjects",
    "Results",
    "Attendance",
    "Assignments",
    "Fees",
    "Announcements",
    "Timetable",
    "Report Cards"
  ];

  return (
    <main className="portal">

      <header className="topbar">
        <div>
          <h1>Great Light Model School</h1>
          <p>School Management Portal</p>
        </div>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      <div className="layout">

        <aside className={menuOpen ? "sidebar open" : "sidebar"}>
          <div className="schoolLogo">GL</div>

          <h2>Management</h2>

          <nav>
            {navigation.map((item) => (
              <button
                key={item}
                className={item === "Dashboard" ? "active" : ""}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <section className="content">

          <div className="welcome">
            <div>
              <span>WELCOME BACK</span>
              <h2>School Administrator 👋</h2>
              <p>
                Manage students, teachers, parents, results,
                attendance and school operations from one place.
              </p>
            </div>

            <div className="term">
              <strong>2025/2026</strong>
              <span>First Term</span>
            </div>
          </div>

          <div className="roleTabs">
            {["Management", "Teacher", "Student", "Parent"].map((item) => (
              <button
                key={item}
                className={role === item ? "selected" : ""}
                onClick={() => setRole(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="stats">

            <div className="statCard">
              <span>Students</span>
              <strong>1</strong>
              <small>Registered students</small>
            </div>

            <div className="statCard">
              <span>Teachers</span>
              <strong>1</strong>
              <small>Teaching staff</small>
            </div>

            <div className="statCard">
              <span>Classes</span>
              <strong>6</strong>
              <small>Active classes</small>
            </div>

            <div className="statCard">
              <span>Attendance</span>
              <strong>94%</strong>
              <small>Today's attendance</small>
            </div>

          </div>

          <div className="sectionHeader">
            <div>
              <span>STUDENT MANAGEMENT</span>
              <h2>Students</h2>
            </div>

            <button className="primaryButton">
              + Add Student
            </button>
          </div>

          <div className="tableCard">

            <table>

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Admission No.</th>
                  <th>Class</th>
                  <th>Average</th>
                  <th>Attendance</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.admission}>

                    <td>
                      <strong>{student.name}</strong>
                    </td>

                    <td>{student.admission}</td>

                    <td>{student.className}</td>

                    <td>
                      <strong>{student.average}%</strong>
                    </td>

                    <td>{student.attendance}%</td>

                    <td>
                      <span className="status">
                        Active
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <div className="quickGrid">

            <div className="panel">
              <span>QUICK ACTION</span>
              <h3>Add a new student</h3>
              <p>
                Register students and assign them to a class.
              </p>
              <button className="primaryButton">
                Add Student
              </button>
            </div>

            <div className="panel">
              <span>RESULTS</span>
              <h3>Enter student results</h3>
              <p>
                Record subject scores and generate report cards.
              </p>
              <button className="secondaryButton">
                Manage Results
              </button>
            </div>

            <div className="panel">
              <span>ATTENDANCE</span>
              <h3>Today's attendance</h3>
              <p>
                Record present, absent and late students.
              </p>
              <button className="secondaryButton">
                Record Attendance
              </button>
            </div>

          </div>

        </section>

      </div>

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f7f5;
          color: #183b2a;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        .portal {
          min-height: 100vh;
        }

        .topbar {
          height: 78px;
          background: #1a6b3c;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
        }

        .topbar h1 {
          margin: 0;
          font-size: 22px;
        }

        .topbar p {
          margin: 4px 0 0;
          opacity: .8;
        }

        .menuButton {
          display: none;
          background: #f5c518;
          border: 0;
          border-radius: 8px;
          padding: 10px 13px;
          font-size: 20px;
        }

        .layout {
          display: flex;
          min-height: calc(100vh - 78px);
        }

        .sidebar {
          width: 250px;
          background: #123e26;
          color: white;
          padding: 25px 18px;
        }

        .schoolLogo {
          width: 55px;
          height: 55px;
          background: #f5c518;
          color: #123e26;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 15px;
        }

        .sidebar h2 {
          font-size: 15px;
          margin-bottom: 20px;
        }

        .sidebar nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar nav button {
          border: 0;
          background: transparent;
          color: #d9eadf;
          padding: 11px 13px;
          text-align: left;
          border-radius: 8px;
        }

        .sidebar nav button:hover,
        .sidebar nav button.active {
          background: #1a6b3c;
          color: white;
        }

        .content {
          flex: 1;
          padding: 30px;
          max-width: 1500px;
        }

        .welcome {
          background: linear-gradient(135deg, #1a6b3c, #27834d);
          color: white;
          border-radius: 18px;
          padding: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .welcome span,
        .sectionHeader span,
        .panel span {
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 1px;
          opacity: .75;
        }

        .welcome h2 {
          margin: 7px 0;
          font-size: 28px;
        }

        .welcome p {
          max-width: 650px;
          opacity: .9;
        }

        .term {
          background: rgba(255,255,255,.12);
          padding: 18px;
          border-radius: 12px;
          min-width: 130px;
          text-align: center;
        }

        .term strong,
        .term span {
          display: block;
        }

        .term span {
          margin-top: 5px;
        }

        .roleTabs {
          display: flex;
          gap: 8px;
          margin: 22px 0;
          flex-wrap: wrap;
        }

        .roleTabs button {
          border: 1px solid #d7e1da;
          background: white;
          padding: 10px 20px;
          border-radius: 25px;
          color: #1a6b3c;
        }

        .roleTabs button.selected {
          background: #f5c518;
          border-color: #f5c518;
          color: #173b27;
          font-weight: bold;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .statCard,
        .panel,
        .tableCard {
          background: white;
          border-radius: 15px;
          box-shadow: 0 3px 15px rgba(0,0,0,.05);
        }

        .statCard {
          padding: 22px;
        }

        .statCard span {
          color: #6d7b73;
          font-size: 13px;
        }

        .statCard strong {
          display: block;
          font-size: 30px;
          margin: 7px 0;
          color: #1a6b3c;
        }

        .statCard small {
          color: #89958e;
        }

        .sectionHeader {
          margin: 35px 0 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sectionHeader h2 {
          margin: 5px 0;
        }

        .primaryButton,
        .secondaryButton {
          border: 0;
          border-radius: 8px;
          padding: 11px 17px;
          font-weight: bold;
        }

        .primaryButton {
          background: #f5c518;
          color: #183b2a;
        }

        .secondaryButton {
          background: #e8f2eb;
          color: #1a6b3c;
        }

        .tableCard {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }

        th,
        td {
          padding: 16px;
          text-align: left;
          border-bottom: 1px solid #edf1ee;
        }

        th {
          background: #f8faf8;
          font-size: 12px;
          color: #68776e;
          text-transform: uppercase;
        }

        td {
          font-size: 14px;
        }

        .status {
          background: #e2f4e8;
          color: #18713d;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }

        .quickGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 20px;
        }

        .panel {
          padding: 22px;
        }

        .panel h3 {
          margin: 9px 0;
        }

        .panel p {
          color: #718078;
          line-height: 1.5;
        }

        @media (max-width: 900px) {

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .quickGrid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 700px) {

          .topbar {
            padding: 0 18px;
          }

          .menuButton {
            display: block;
          }

          .layout {
            position: relative;
          }

          .sidebar {
            position: fixed;
            left: -270px;
            top: 78px;
            bottom: 0;
            z-index: 20;
            transition: left .25s ease;
          }

          .sidebar.open {
            left: 0;
          }

          .content {
            padding: 18px;
          }

          .welcome {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .sectionHeader {
            align-items: flex-start;
            gap: 15px;
          }

        }

      `}</style>

    </main>
  );
}
