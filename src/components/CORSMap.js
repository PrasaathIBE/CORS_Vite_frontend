// import React, { useEffect } from 'react';
// import '@arcgis/core/assets/esri/themes/light/main.css';
// import Map from '@arcgis/core/Map';
// import MapView from '@arcgis/core/views/MapView';
// import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
// import Legend from '@arcgis/core/widgets/Legend';
// import Expand from '@arcgis/core/widgets/Expand';

// const CORSMap = () => {
//   useEffect(() => {
//     const url = "/CORS_Site_JSON_1.json";  // Replace with the correct path to your GeoJSON file

//     const template = {
//       title: "Site Info",
//       content: `
//         <b>Site ID:</b> {SITEID}<br>
//         <b>Agency:</b> {AGENCY}<br>
//         <b>Status:</b> {STATUS}<br>
//         <b>GNSS:</b> {GNSS}<br>
//         <b>Sampling Rate:</b> {SAMPLING}<br>
//         <b>Availability:</b> {AVAIL}
//       `
//     };

//     const renderer = {
//       type: "unique-value",
//       field: "STATUS",
//       uniqueValueInfos: [
//         {
//           value: "Operational",
//           symbol: {
//             type: "simple-marker",
//             color: "blue",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//         {
//           value: "Decommissioned",
//           symbol: {
//             type: "simple-marker",
//             color: "red",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//         {
//           value: "Non-Operational",
//           symbol: {
//             type: "simple-marker",
//             color: "yellow",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//         {
//           value: "Suspended",
//           symbol: {
//             type: "simple-marker",
//             color: "orange",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//       ],
//     };

//     const geojsonLayer = new GeoJSONLayer({
//       url: url,
//       popupTemplate: template,
//       renderer: renderer,
//       orderBy: {
//         field: "STATUS"
//       }
//     });

//     const map = new Map({
//       basemap: "gray-vector",
//       layers: [geojsonLayer]
//     });

//     const view = new MapView({
//       container: "viewDiv",
//       center: [-95.7129, 37.0902], // Longitude, latitude of the USA
//       zoom: 4,
//       map: map
//     });

//     view.when(() => {
//       const legend = new Expand({
//         content: new Legend({
//           view: view,
//           style: "card" // other styles include 'classic'
//         }),
//         view: view,
//         expanded: true
//       });

//       view.ui.add(legend, "bottom-left");
//     });

//     return () => {
//       if (view) {
//         view.container = null;
//       }
//     };
//   }, []);

//   return (
//     <div id="viewDiv" style={{ height: '88vh', width: '100%' }}></div>
//   );
// };

// export default CORSMap;


// import React, { useEffect } from 'react';
// import '@arcgis/core/assets/esri/themes/light/main.css';
// import Map from '@arcgis/core/Map';
// import MapView from '@arcgis/core/views/MapView';
// import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
// import Legend from '@arcgis/core/widgets/Legend';
// import Expand from '@arcgis/core/widgets/Expand';
// import Search from '@arcgis/core/widgets/Search';
// import Graphic from '@arcgis/core/Graphic';
// import Point from '@arcgis/core/geometry/Point';
// import esriRequest from '@arcgis/core/request';
// import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';

// const CORSMap = () => {
//   useEffect(() => {
//     const url = "/CORS_Site_JSON_1.json";  // Replace with the correct path to your GeoJSON file

//     const template = {
//       title: "Site Info",
//       content: `
//         <b>Site ID:</b> {SITEID}<br>
//         <b>Agency:</b> {AGENCY}<br>
//         <b>Status:</b> {STATUS}<br>
//         <b>GNSS:</b> {GNSS}<br>
//         <b>Sampling Rate:</b> {SAMPLING}<br>
//         <b>Availability:</b> {AVAIL}
//       `
//     };

//     const renderer = {
//       type: "unique-value",
//       field: "STATUS",
//       uniqueValueInfos: [
//         {
//           value: "Operational",
//           symbol: {
//             type: "simple-marker",
//             color: "blue",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//         {
//           value: "Decommissioned",
//           symbol: {
//             type: "simple-marker",
//             color: "red",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//         {
//           value: "Non-Operational",
//           symbol: {
//             type: "simple-marker",
//             color: "yellow",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//         {
//           value: "Suspended",
//           symbol: {
//             type: "simple-marker",
//             color: "orange",
//             size: "8px",
//             outline: {
//               color: "white",
//               width: 1,
//             },
//           },
//         },
//       ],
//     };

//     const geojsonLayer = new GeoJSONLayer({
//       url: url,
//       popupTemplate: template,
//       renderer: renderer,
//       orderBy: {
//         field: "STATUS"
//       }
//     });

//     const map = new Map({
//       basemap: "gray-vector",
//       layers: [geojsonLayer]
//     });

//     const view = new MapView({
//       container: "viewDiv",
//       center: [-95.7129, 37.0902], // Longitude, latitude of the USA
//       zoom: 4,
//       map: map
//     });

//     view.when(() => {
//       const legend = new Expand({
//         content: new Legend({
//           view: view,
//           style: "card" // other styles include 'classic'
//         }),
//         view: view,
//         expanded: true
//       });

//       view.ui.add(legend, "bottom-left");

//       // Custom Search
//       const customSearchSource = {
//         placeholder: "Search by SITEID",
//         getSuggestions: (params) => {
//           return esriRequest(url, {
//             responseType: "json"
//           }).then((results) => {
//             return results.data.features
//               .filter((feature) => feature.properties.SITEID.includes(params.suggestTerm))
//               .map((feature) => ({
//                 key: feature.properties.SITEID,  // Use the correct attribute name
//                 text: feature.properties.SITEID, // Use the correct attribute name
//                 sourceIndex: params.sourceIndex
//               }));
//           });
//         },
//         getResults: (params) => {
//           return esriRequest(url, {
//             responseType: "json"
//           }).then((results) => {
//             const filteredFeatures = results.data.features.filter((feature) =>
//               feature.properties.SITEID === params.suggestResult.text.trim()
//             );

//             const searchResults = filteredFeatures.map((feature, index) => {
//               const graphic = new Graphic({
//                 geometry: new Point({
//                   x: feature.geometry.coordinates[0],
//                   y: feature.geometry.coordinates[1]
//                 }),
//                 attributes: feature.properties
//               });

//               const buffer = geometryEngine.geodesicBuffer(graphic.geometry, 100, "meters");

//               return {
//                 extent: buffer.extent,
//                 feature: graphic,
//                 name: feature.properties.SITEID
//               };
//             });

//             return searchResults;
//           });
//         }
//       };

//       const searchWidget = new Search({
//         view: view,
//         sources: [customSearchSource]
//       });

//       view.ui.add(searchWidget, "top-right");
//     });

//     return () => {
//       if (view) {
//         view.container = null;
//       }
//     };
//   }, []);

//   return (
//     <div id="viewDiv" style={{ height: '88vh', width: '100%' }}></div>
//   );
// };

// export default CORSMap;


import React, { useEffect } from 'react';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import Legend from '@arcgis/core/widgets/Legend';
import Expand from '@arcgis/core/widgets/Expand';
import Search from '@arcgis/core/widgets/Search';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import esriRequest from '@arcgis/core/request';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Measurement from '@arcgis/core/widgets/Measurement';

const CORSMap = () => {
  useEffect(() => {
    const url = "/CORS_Site_JSON_1.json";  // Replace with the correct path to your GeoJSON file

    const template = {
      title: "Site Info",
      content: `
        <b>Site ID:</b> {SITEID}<br>
        <b>Agency:</b> {AGENCY}<br>
        <b>Status:</b> {STATUS}<br>
        <b>GNSS:</b> {GNSS}<br>
        <b>Sampling Rate:</b> {SAMPLING}<br>
        <b>Availability:</b> {AVAIL}
      `
    };

    const renderer = {
      type: "unique-value",
      field: "STATUS",
      uniqueValueInfos: [
        {
          value: "Operational",
          symbol: {
            type: "simple-marker",
            color: "blue",
            size: "8px",
            outline: {
              color: "white",
              width: 1,
            },
          },
        },
        {
          value: "Decommissioned",
          symbol: {
            type: "simple-marker",
            color: "red",
            size: "8px",
            outline: {
              color: "white",
              width: 1,
            },
          },
        },
        {
          value: "Non-Operational",
          symbol: {
            type: "simple-marker",
            color: "yellow",
            size: "8px",
            outline: {
              color: "white",
              width: 1,
            },
          },
        },
        {
          value: "Suspended",
          symbol: {
            type: "simple-marker",
            color: "orange",
            size: "8px",
            outline: {
              color: "white",
              width: 1,
            },
          },
        },
      ],
    };

    const geojsonLayer = new GeoJSONLayer({
      url: url,
      popupTemplate: template,
      renderer: renderer,
      orderBy: {
        field: "STATUS"
      }
    });

    const map = new Map({
      basemap: "gray-vector",
      layers: [geojsonLayer]
    });

    const view = new MapView({
      container: "viewDiv",
      center: [-95.7129, 37.0902], // Longitude, latitude of the USA
      zoom: 4,
      map: map
    });

    view.when(() => {
      const legend = new Expand({
        content: new Legend({
          view: view,
          style: "card" // other styles include 'classic'
        }),
        view: view,
        expanded: true
      });

      view.ui.add(legend, "bottom-left");

      // Custom Search
      const customSearchSource = {
        placeholder: "Search by SITEID",
        getSuggestions: (params) => {
          return esriRequest(url, {
            responseType: "json"
          }).then((results) => {
            return results.data.features
              .filter((feature) => feature.properties.SITEID.includes(params.suggestTerm))
              .map((feature) => ({
                key: feature.properties.SITEID,  // Use the correct attribute name
                text: feature.properties.SITEID, // Use the correct attribute name
                sourceIndex: params.sourceIndex
              }));
          });
        },
        getResults: (params) => {
          return esriRequest(url, {
            responseType: "json"
          }).then((results) => {
            const filteredFeatures = results.data.features.filter((feature) =>
              feature.properties.SITEID === params.suggestResult.text.trim()
            );

            const searchResults = filteredFeatures.map((feature, index) => {
              const graphic = new Graphic({
                geometry: new Point({
                  x: feature.geometry.coordinates[0],
                  y: feature.geometry.coordinates[1]
                }),
                attributes: feature.properties
              });

              const buffer = geometryEngine.geodesicBuffer(graphic.geometry, 100, "meters");
              const propertiesString = Object.entries(feature.properties)
              .slice(0, -1) // Remove the last array item
              .map(([key, value]) => `${key}: ${value}`)
              .join(", "); // Join the remaining items with a comma and space
              return {
                extent: buffer.extent,
                feature: graphic,
                name: propertiesString,
              };
            });

            return searchResults;
          });
        }
      };

      const searchWidget = new Search({
        view: view,
        sources: [customSearchSource]
      });

      view.ui.add(searchWidget, "top-right");

      // Measurement widget
      const measurement = new Measurement({
        view: view
      });
      view.ui.add(measurement, "bottom-right");

      // Toolbar functionality
      document.getElementById('distance').onclick = function() {
        measurement.activeTool = "distance";
      };

      document.getElementById('area').onclick = function() {
        measurement.activeTool = "area";
      };

      document.getElementById('clear').onclick = function() {
        measurement.clear();
      };

      // Add the toolbar to the map's UI
      view.ui.add("toolbarDiv", "top-left");
    });

    return () => {
      if (view) {
        view.container = null;
      }
    };
  }, []);

  return (
    <div>
      <div id="toolbarDiv" className="esri-component esri-widget" style={{ position: 'absolute', top: '80px', left: '1px', zIndex: 10 }}>
        <button id="distance" className="esri-widget--button esri-interactive esri-icon-measure-line" title="Distance Measurement Tool"></button>
        <button id="area" className="esri-widget--button esri-interactive esri-icon-measure-area" title="Area Measurement Tool"></button>
        <button id="clear" className="esri-widget--button esri-interactive esri-icon-trash" title="Clear Measurements"></button>
      </div>
      <div id="viewDiv" style={{ height: '88vh', width: '100%' }}></div>
    </div>
  ); 
};

export default CORSMap; 