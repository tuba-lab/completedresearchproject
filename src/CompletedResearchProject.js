import React from "react";

export default function CompletedResearch() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* HEADER */}
      <header
        style={{
          background: "white",
          borderBottom: "5px solid #004d40",
          padding: "20px 40px",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            style={{ height: "50px", marginRight: "15px" }}
          />
          <h1 style={{ color: "#004d40", fontSize: "24px", margin: 0 }}>
            Aligarh Muslim University
          </h1>
        </div>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#004d40",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>Home</span>
          <span>About</span>
          <span>Programs</span>
          <span>Faculty</span>
          <span>Contact</span>
        </nav>
      </header>

      {/* BODY */}
      <main
        style={{
          background: "#f9f9f9",
          padding: "40px 20px",
          minHeight: "70vh",
          margin: "20px",
          borderRadius: "30px",
        }}
      >
        <h2
          style={{
            color: "#004d40",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Completed Research Projects
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto", color: "#333" }}>
          {/* List Projects */}
          <ul
            style={{ lineHeight: "2", fontSize: "16px", paddingLeft: "20px" }}
          ></ul>

          {/* Detailed Projects */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ fontSize: "14px", color: "#666", textAlign: "right" }}>
              Dept. data last updated on: 23/06/2025
            </p>

            {/* Project 1 */}
            <div style={{ marginBottom: "30px" }}>
              <strong>Project Title:</strong> Design and Analysis of
              Energy-aware Robust Scheduling (ERS) models for stochastic jobs
              under DAG constraints in uncertain environment.
              <br />
              <strong>Funding Agency:</strong> University Grant Commission (UGC)
              <br />
              <strong>Funding Amount:</strong> ₹ 10,00,000
              <br />
              <strong>Principal Investigator:</strong> Dr. Mohammad Sajid
              <br />
              <strong>Co-Principal Investigator:</strong> —
              <br />
              <strong>Related Publication:</strong> M. Sajid, Z. Reza,
              "Energy-efficient quantum-inspired stochastic QHyPEI algorithm for
              batch-of-stochastic-tasks on heterogeneous DVFS-enabled
              processors", Concurrency and Computation Practice and Experience
              (Wiley), Vol. 32(10), e5327, 2019. (SCIE IF 1.447)
            </div>

            {/* Project 2 */}
            <hr />
            <div style={{ marginTop: "30px" }}>
              <strong>Project Title:</strong> ERP Mission Project (Educational
              Resources Planning)
              <br />
              <strong>Funding Agency:</strong> NMEICT MHRD, Govt. of India
              <br />
              <strong>Funding Amount:</strong> ₹ 10,00,000
              <br />
              <strong>Principal Investigator:</strong> Dr. Mohammad Ubaidullah
              Bokhari
              <br />
              <strong>Co-Principal Investigator:</strong> Prof. Aasim Zafar
              <br />
              <strong>Related Publication:</strong> —
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: "#f2f2f2",
          borderTop: "4px solid #004d40",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          padding: "15px 10px",
          textAlign: "center",
          color: "#004d40",
          fontSize: "14px",
          marginTop: "30px",
        }}
      >
        © 2025 Aligarh Muslim University, Department of Computer Science.
      </footer>
    </div>
  );
}
