// import React, { useEffect, useState } from "react";

// const SiteList = () => {
//   const [sites, setSites] = useState([]);

//   useEffect(() => {
//     fetch("/CORS_Site_JSON_1.json")
//       .then(response => response.json())
//       .then(data => setSites(data.features));
//   }, []);

//   return (
//     <div className="site-list">
//       <h2>Site List</h2>
//       <ul>
//         {sites.map((site, index) => (
//           <li key={index}>
//             <strong>{site.properties.SITEID}</strong><br/>
//             Agency: {site.properties.AGENCY}<br/>
//             Status: {site.properties.STATUS}<br/>
//             GNSS: {site.properties.GNSS}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SiteList;
