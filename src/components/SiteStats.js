// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const SiteStats = () => {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     fetch("/CORS_Site_JSON_1.json")
//       .then(response => response.json())
//       .then(data => {
//         const statusCounts = data.features.reduce((acc, feature) => {
//           const status = feature.properties.STATUS;
//           acc[status] = (acc[status] || 0) + 1;
//           return acc;
//         }, {});
//         setStats(statusCounts);
//       });
//   }, []);

//   const data = {
//     labels: Object.keys(stats),
//     datasets: [
//       {
//         label: "Site Status",
//         data: Object.values(stats),
//         backgroundColor: ["blue", "red", "yellow", "orange"],
//       },
//     ],
//   };

//   return (
//     <div className="site-stats">
//       <h2>Site Statistics</h2>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default SiteStats;


import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Modal from 'react-modal';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SiteStats = () => {
  const [stats, setStats] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch("/CORS_Site_JSON_1.json")
      .then(response => response.json())
      .then(data => {
        const statusCounts = data.features.reduce((acc, feature) => {
          const status = feature.properties.STATUS;
          acc[status] = (acc[status] || 0) + 1;
          return acc;
        }, {});
        setStats(statusCounts);
      });
  }, []);

  const data = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: "Site Status",
        data: Object.values(stats),
        backgroundColor: ["blue", "red", "yellow", "orange"],
      },
    ],
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Custom styles for the modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%', // Set the width to 60% of the viewport
      maxWidth: '800px', // Set a maximum width
      padding: '20px', // Add padding
      position: 'relative', // Ensure the close button is positioned relative to the modal
    },
  };

  // Custom styles for the buttons
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  const openButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'blue',
    color: 'white',
  };

  const closeButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    color: 'white',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  return (
    <div className="site-stats">
      <h2>Site Statistics</h2>
      <button onClick={openModal} style={openButtonStyle}>Show Graph</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Site Statistics"
      >
        <button onClick={closeModal} style={closeButtonStyle}>X</button>
        <h2>Site Statistics</h2>
        <Bar data={data} />
      </Modal>
    </div>
  );
};

export default SiteStats;



