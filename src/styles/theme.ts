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
          building: "#1b598f",
          light: "#776732",
          dark: "#635216",
        },
        darkBlue: {
          building: "#273566",
          light: "rgba(229, 126, 18, 0.52)",
          dark: "#75420c",
        },
        brown: {
          building: "#946d7b",
          light: "#ff8c35",
          dark: "#70370c",
        },
      },
      trees: "#264c16",
      helicopter: {
        body: "#1b598f",
        valve: "#ff8c35",
        window: "#ffd335",
        tires: "#000002",
      },
      sky: {
        top: "rgba(173, 216, 230, 1)",
        middle: "rgba(0, 191, 255, 1)",
        bottom: "rgba(173, 216, 230, 0.6)",
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
    },
  },
};

export default theme;
