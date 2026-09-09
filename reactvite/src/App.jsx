/* eslint-disable no-unused-vars */
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ICard from './components/ICard'
import './App.css'
function App() {
  return (
    // <div
    //   style={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "#eef2f7",
    //     fontFamily: "Arial, sans-serif",
    //   }}
    // >
    //   {/* ID CARD */}
    //   <div
    //     style={{
    //       width: "430px",
    //       minHeight: "600px",
    //       backgroundColor: "white",
    //       borderRadius: "20px",
    //       overflow: "hidden",
    //       boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    //       border: "1px solid #ddd",
    //     }}
    //   >

    //     {/* HEADER */}
    //     <div
    //       style={{
    //         height: "120px",
    //         background: "linear-gradient(135deg, #991b1b, #ef4444)",
    //         color: "white",
    //         display: "flex",
    //         alignItems: "center",
    //         padding: "20px 25px",
    //         gap: "18px",
    //       }}
    //     >
    //       {/* LOGO */}
    //       <div
    //         style={{
    //           width: "65px",
    //           height: "65px",
    //           borderRadius: "50%",
    //           backgroundColor: "white",
    //           color: "#dc2626",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           fontSize: "35px",
    //           fontWeight: "bold",
    //         }}
    //       >
    //         A
    //       </div>

    //       {/* COLLEGE NAME */}
    //       <div>
    //         <h2
    //           style={{
    //             margin: "0",
    //             fontSize: "25px",
    //             letterSpacing: "2px",
    //           }}
    //         >
    //           ABES
    //         </h2>

    //         <h3
    //           style={{
    //             margin: "3px 0",
    //             fontSize: "14px",
    //             letterSpacing: "1px",
    //           }}
    //         >
    //           ENGINEERING COLLEGE
    //         </h3>

    //         <p
    //           style={{
    //             margin: "6px 0 0",
    //             fontSize: "11px",
    //           }}
    //         >
    //           Ghaziabad, Uttar Pradesh
    //         </p>
    //       </div>
    //     </div>

    //     {/* TITLE */}
    //     <div
    //       style={{
    //         textAlign: "center",
    //         padding: "15px",
    //         borderBottom: "1px solid #e5e7eb",
    //       }}
    //     >
    //       <span
    //         style={{
    //           fontSize: "12px",
    //           fontWeight: "bold",
    //           color: "#b91c1c",
    //           letterSpacing: "2px",
    //         }}
    //       >
    //         STUDENT IDENTITY CARD
    //       </span>
    //     </div>

    //     {/* STUDENT DETAILS */}
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         gap: "20px",
    //         padding: "25px",
    //       }}
    //     >

    //       {/* PHOTO */}
    //       <div
    //         style={{
    //           width: "120px",
    //           height: "145px",
    //           flexShrink: "0",
    //           borderRadius: "12px",
    //           backgroundColor: "#fee2e2",
    //           border: "4px solid #ef4444",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           color: "#b91c1c",
    //           fontSize: "36px",
    //           fontWeight: "bold",
    //         }}
    //       >rk
    //       </div>

    //       {/* DETAILS */}
    //       <div>
    //         <h2
    //           style={{
    //             fontSize: "21px",
    //             color: "#111827",
    //             margin: "0 0 15px",
    //           }}
    //         >
    //           Rishabh Kumar
    //         </h2>

    //         <p style={{ margin: "8px 0", fontSize: "13px" }}>
    //           <span style={{ color: "#6b7280" }}>ROLL NO.</span>
    //           <br />
    //           <b>2400320100902</b>
    //         </p>

    //         <p style={{ margin: "8px 0", fontSize: "13px" }}>
    //           <span style={{ color: "#6b7280" }}>BRANCH</span>
    //           <br />
    //           <b>CSE</b>
    //         </p>

    //         <p style={{ margin: "8px 0", fontSize: "13px" }}>
    //           <span style={{ color: "#6b7280" }}>SECTION</span>
    //           <br />
    //           <b>24</b>
    //         </p>
    //       </div>
    //     </div>

    //     {/* SKILLS */}
    //     <div
    //       style={{
    //         margin: "0 25px",
    //         padding: "18px",
    //         backgroundColor: "#f8fafc",
    //         borderRadius: "12px",
    //         border: "1px solid #e5e7eb",
    //       }}
    //     >
    //       <h4
    //         style={{
    //           margin: "0 0 12px",
    //           fontSize: "12px",
    //           color: "#6b7280",
    //           letterSpacing: "1.5px",
    //         }}
    //       >
    //         SKILLS
    //       </h4>

    //       <div
    //         style={{
    //           display: "flex",
    //           flexWrap: "wrap",
    //           gap: "8px",
    //         }}
    //       >
    //         {["C++", "Python", "JavaScript", "React", "Machine Learning"].map(
    //           (skill) => (
    //             <span
    //               key={skill}
    //               style={{
    //                 backgroundColor: "#fee2e2",
    //                 color: "#b91c1c",
    //                 padding: "6px 10px",
    //                 borderRadius: "20px",
    //                 fontSize: "11px",
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {skill}
    //             </span>
    //           )
    //         )}
    //       </div>
    //     </div>

    //     {/* FOOTER */}
    //     <div
    //       style={{
    //         margin: "25px",
    //         paddingTop: "20px",
    //         borderTop: "1px solid #e5e7eb",
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "flex-end",
    //       }}
    //     >
    //       <div>
    //         <p
    //           style={{
    //             margin: "0 0 5px",
    //             fontSize: "9px",
    //             color: "#9ca3af",
    //             letterSpacing: "1px",
    //           }}
    //         >
    //           SESSION
    //         </p>

    //         <strong style={{ fontSize: "13px" }}>
    //           2024 - 2028
    //         </strong>
    //       </div>

    //       <div style={{ textAlign: "center" }}>
    //         <div
    //           style={{
    //             width: "100px",
    //             borderTop: "1px solid #374151",
    //             marginBottom: "5px",
    //           }}
    //         ></div>

    //         <p
    //           style={{
    //             margin: "0",
    //             fontSize: "9px",
    //             color: "#9ca3af",
    //           }}
    //         >
    //           Authorized Signature
    //         </p>
    //       </div>
    //     </div>

    //   </div>
    // </div>

    < style={{border: "1px solid red", width: "100%", height: "100vh"}}>
      <ICard />
    </div>
  );
}

export default App
