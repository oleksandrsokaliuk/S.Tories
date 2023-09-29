// interface BuildingsI {
//   building: string;
//   light: string;
//   dark: string;
// }

// interface HelicopterI {
//   body: string;
//   valve: string;
//   window: string;
//   tires: string;
// }

// interface SkyGradientI {
//   top: string;
//   middle: string;
//   bottom: string;
// }

// export interface ThemeItemI {
//   mainPage: {
//     buildings: {
//       lightBlue: BuildingsI;
//       darkBlue: BuildingsI;
//       brown: BuildingsI;
//     };
//     trees: string;
//     helicopter: HelicopterI;
//     sky: SkyGradientI;
//   };
// }

// export interface ThemeI {
//   light: ThemeItemI;
//   dark: ThemeItemI;
// }

// const theme: ThemeI = {
//   light: {
//     mainPage: {
//       buildings: {
//         lightBlue: {
//           building: "#1b598f",
//           light: "#776732",
//           dark: "#635216",
//         },
//         darkBlue: {
//           building: "#273566",
//           light: "rgba(229, 126, 18, 0.52)",
//           dark: "#75420c",
//         },
//         brown: {
//           building: "#946d7b",
//           light: "#ff8c35",
//           dark: "#70370c",
//         },
//       },
//       trees: "#264c16",
//       helicopter: {
//         body: "#1b598f",
//         valve: "#ff8c35",
//         window: "#ffd335",
//         tires: "#000002",
//       },
//       sky: {
//         top: "rgba(173, 216, 230, 1)",
//         middle: "rgba(0, 191, 255, 1)",
//         bottom: "rgba(173, 216, 230, 0.6)",
//       },
//     },
//   },
//   dark: {
//     mainPage: {
//       buildings: {
//         lightBlue: {
//           building: "#000002",
//           light: "#000002",
//           dark: "#ffd335",
//         },
//         darkBlue: {
//           building: "#000002",
//           light: "#000002",
//           dark: "#c69b23",
//         },
//         brown: {
//           building: "#000002",
//           light: "#000002",
//           dark: "#ffba89",
//         },
//       },
//       trees: "#000002",
//       helicopter: {
//         body: "#000002",
//         valve: "#000002",
//         window: "#000002",
//         tires: "#000002",
//       },
//       sky: {
//         top: "rgba(255, 51, 51, 1)",
//         middle: "rgba(0, 0, 102, 1)",
//         bottom: "rgba(0, 0, 51, 1)",
//       },
//     },
//   },
// };

// export default theme;

interface BuildingsI {
  building: string;
  light: string;
  dark: string;
}

interface HelicopterI {
  body: string;
  valve: string;
  window: string;
  tires: string;
}

interface SkyGradientI {
  top: string;
  middle: string;
  bottom: string;
}

interface CloudI {
  topColor: string;
  middleColor: string;
  bottomColor: string;
}

export interface ThemeItemI {
  mainPage: {
    buildings: {
      lightBlue: BuildingsI;
      darkBlue: BuildingsI;
      brown: BuildingsI;
    };
    trees: string;
    helicopter: HelicopterI;
    sky: SkyGradientI;
    clouds: CloudI;
  };
}

export interface ThemeI {
  light: ThemeItemI;
  dark: ThemeItemI;
}

const theme: ThemeI = {
  light: {
    mainPage: {
      buildings: {
        lightBlue: {
          building: "#d3a6d4",
          light: "rgba(166, 200, 227, 0.8)",
          dark: "rgba(166, 200, 227, 0.4)",
        },
        darkBlue: {
          building: "#fac6a0",
          light: "rgba(166, 214, 204, 0.8)",
          dark: "rgba(166, 214, 204, 0.3)",
        },
        brown: {
          building: "#f7b9d3",
          light: "rgba(252, 227, 138, 0.8)",
          dark: "rgba(252, 227, 138, 0.3)",
        },
      },
      trees: "url(#LinearGradient)",
      helicopter: {
        body: "#1b598f",
        valve: "#ff8c35",
        window: "#ffd335",
        tires: "#000002",
      },
      sky: {
        top: "rgba(166, 200, 227, 1)",
        middle: "rgba(211, 166, 212, 1)",
        bottom: "rgba(252, 227, 138, 1)",
      },
      clouds: {
        topColor: "rgb(255, 192, 203)",
        middleColor: "rgb(173, 216, 230)",
        bottomColor: "rgb(138, 43, 226)",
      },
    },
  },
  dark: {
    mainPage: {
      buildings: {
        lightBlue: {
          building: "#000002",
          light: "#000002",
          dark: "#ffd335",
        },
        darkBlue: {
          building: "#000002",
          light: "#000002",
          dark: "#c69b23",
        },
        brown: {
          building: "#000002",
          light: "#000002",
          dark: "#ffba89",
        },
      },
      trees: "#000002",
      helicopter: {
        body: "#000002",
        valve: "#000002",
        window: "#000002",
        tires: "#000002",
      },
      sky: {
        top: "rgba(255, 51, 51, 1)",
        middle: "rgba(0, 0, 102, 1)",
        bottom: "rgba(0, 0, 51, 1)",
      },
      clouds: {
        topColor: "rgb(183, 132, 167)",
        middleColor: "rgb(128, 178, 213)",
        bottomColor: "rgb(161, 209, 173)",
      },
    },
  },
};

export default theme;
