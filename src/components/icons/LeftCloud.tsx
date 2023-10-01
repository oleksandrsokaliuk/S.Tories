import { FC } from "react";
import {
  LeftCloudContainer,
  LeftCloudHeader,
  LeftCloudSVG,
} from "../home/styles/HomePage.styles";
import { useNavigate } from "react-router-dom";
import { locations } from "../../routing/Routing";
import { useTheme } from "styled-components";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ThemeType } from "../../redux/slices/themeSlice";

const LeftCloud: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { currentTheme } = useSelector((state: RootState) => state.themeSlice);
  return (
    <LeftCloudContainer onClick={() => navigate(locations.shareStory)}>
      <LeftCloudHeader>Dream Share</LeftCloudHeader>
      <LeftCloudSVG
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 3370.82 2384.24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <g>
          <path
            d="M514.874 1400.75C514.874 1293.09 633.561 1205.82 779.969 1205.82C926.377 1205.82 1045.06 1293.09 1045.06 1400.75C1045.06 1508.41 926.377 1595.69 779.969 1595.69C633.561 1595.69 514.874 1508.41 514.874 1400.75Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.bottomColor
                : theme.dark.mainPage.clouds.bottomColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M893.84 1409.63C893.84 1301.97 1012.53 1214.69 1158.94 1214.69C1305.34 1214.69 1424.03 1301.97 1424.03 1409.63C1424.03 1517.29 1305.34 1604.56 1158.94 1604.56C1012.53 1604.56 893.84 1517.29 893.84 1409.63Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.bottomColor
                : theme.dark.mainPage.clouds.bottomColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1277.31 1414.21C1277.31 1306.55 1396 1219.28 1542.41 1219.28C1688.81 1219.28 1807.5 1306.55 1807.5 1414.21C1807.5 1521.87 1688.81 1609.14 1542.41 1609.14C1396 1609.14 1277.31 1521.87 1277.31 1414.21Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.bottomColor
                : theme.dark.mainPage.clouds.bottomColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1656.42 1409.63C1656.42 1301.97 1775.11 1214.69 1921.52 1214.69C2067.93 1214.69 2186.61 1301.97 2186.61 1409.63C2186.61 1517.29 2067.93 1604.56 1921.52 1604.56C1775.11 1604.56 1656.42 1517.29 1656.42 1409.63Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.bottomColor
                : theme.dark.mainPage.clouds.bottomColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M2039.76 1414.21C2039.76 1306.55 2158.45 1219.28 2304.86 1219.28C2451.27 1219.28 2569.95 1306.55 2569.95 1414.21C2569.95 1521.87 2451.27 1609.14 2304.86 1609.14C2158.45 1609.14 2039.76 1521.87 2039.76 1414.21Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.bottomColor
                : theme.dark.mainPage.clouds.bottomColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M862.263 1162.99C862.263 1007.86 988.019 882.104 1143.15 882.104C1298.27 882.104 1424.03 1007.86 1424.03 1162.99C1424.03 1318.12 1298.27 1443.87 1143.15 1443.87C988.019 1443.87 862.263 1318.12 862.263 1162.99Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M403.32 1219.28C403.32 1064.15 529.076 938.392 684.204 938.392C839.332 938.392 965.088 1064.15 965.088 1219.28C965.088 1374.4 839.332 1500.16 684.204 1500.16C529.076 1500.16 403.32 1374.4 403.32 1219.28Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M167.484 1312.13C167.484 1157 293.24 1031.25 448.368 1031.25C603.496 1031.25 729.252 1157 729.252 1312.13C729.252 1467.26 603.496 1593.01 448.368 1593.01C293.24 1593.01 167.484 1467.26 167.484 1312.13Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M2473.13 1303.43C2473.13 1183.66 2598.89 1086.56 2754.02 1086.56C2909.14 1086.56 3034.9 1183.66 3034.9 1303.43C3034.9 1423.2 2909.14 1520.3 2754.02 1520.3C2598.89 1520.3 2473.13 1423.2 2473.13 1303.43Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M2174.85 1303.43C2174.85 1183.66 2300.6 1086.56 2455.73 1086.56C2610.86 1086.56 2736.61 1183.66 2736.61 1303.43C2736.61 1423.2 2610.86 1520.3 2455.73 1520.3C2300.6 1520.3 2174.85 1423.2 2174.85 1303.43Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1558.19 1238.22C1558.19 1118.45 1683.95 1021.35 1839.08 1021.35C1994.21 1021.35 2119.96 1118.45 2119.96 1238.22C2119.96 1357.99 1994.21 1455.09 1839.08 1455.09C1683.95 1455.09 1558.19 1357.99 1558.19 1238.22Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1277.31 1128.74C1277.31 973.615 1403.07 847.859 1558.19 847.859C1713.32 847.859 1839.08 973.615 1839.08 1128.74C1839.08 1283.87 1713.32 1409.63 1558.19 1409.63C1403.07 1409.63 1277.31 1283.87 1277.31 1128.74Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1222.42 1128.74C1222.42 943.303 1372.75 792.974 1558.19 792.974C1743.63 792.974 1893.96 943.303 1893.96 1128.74C1893.96 1314.18 1743.63 1464.51 1558.19 1464.51C1372.75 1464.51 1222.42 1314.18 1222.42 1128.74Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1839.08 1133.47C1839.08 948.034 1989.41 797.705 2174.85 797.705C2360.29 797.705 2510.62 948.034 2510.62 1133.47C2510.62 1318.91 2360.29 1469.24 2174.85 1469.24C1989.41 1469.24 1839.08 1318.91 1839.08 1133.47Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.middleColor
                : theme.dark.mainPage.clouds.middleColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M994.352 752.891C994.352 510.313 1201.91 313.665 1457.93 313.665C1713.96 313.665 1921.52 510.313 1921.52 752.891C1921.52 995.469 1713.96 1192.12 1457.93 1192.12C1201.91 1192.12 994.352 995.469 994.352 752.891Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1632.97 902.327C1632.97 716.819 1792.06 566.434 1988.32 566.434C2184.58 566.434 2343.68 716.819 2343.68 902.327C2343.68 1087.84 2184.58 1238.22 1988.32 1238.22C1792.06 1238.22 1632.97 1087.84 1632.97 902.327Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M2086.26 1018.81C2086.26 833.302 2245.35 682.917 2441.61 682.917C2637.87 682.917 2796.96 833.302 2796.96 1018.81C2796.96 1204.32 2637.87 1354.7 2441.61 1354.7C2245.35 1354.7 2086.26 1204.32 2086.26 1018.81Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M582.531 882.104C582.531 715.577 738.063 580.581 929.921 580.581C1121.78 580.581 1277.31 715.577 1277.31 882.104C1277.31 1048.63 1121.78 1183.63 929.921 1183.63C738.063 1183.63 582.531 1048.63 582.531 882.104Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M965.088 1080.39C965.088 982.047 1087.98 902.327 1239.59 902.327C1391.19 902.327 1514.08 982.047 1514.08 1080.39C1514.08 1178.72 1391.19 1258.44 1239.59 1258.44C1087.98 1258.44 965.088 1178.72 965.088 1080.39Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1892.61 1134.07C1892.61 1035.73 2015.51 956.014 2167.11 956.014C2318.71 956.014 2441.61 1035.73 2441.61 1134.07C2441.61 1232.41 2318.71 1312.13 2167.11 1312.13C2015.51 1312.13 1892.61 1232.41 1892.61 1134.07Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M167.484 1099.23C167.484 932.702 323.016 797.705 514.874 797.705C706.731 797.705 862.263 932.702 862.263 1099.23C862.263 1265.76 706.731 1400.75 514.874 1400.75C323.016 1400.75 167.484 1265.76 167.484 1099.23Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M55.9307 1341.64C55.9307 1242.98 152.047 1162.99 270.613 1162.99C389.179 1162.99 485.296 1242.98 485.296 1341.64C485.296 1440.31 389.179 1520.3 270.613 1520.3C152.047 1520.3 55.9307 1440.31 55.9307 1341.64Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M2642.18 1133.47C2642.18 1034.81 2738.3 954.818 2856.87 954.818C2975.43 954.818 3071.55 1034.81 3071.55 1133.47C3071.55 1232.14 2975.43 1312.13 2856.87 1312.13C2738.3 1312.13 2642.18 1232.14 2642.18 1133.47Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M2408.54 1265.22C2408.54 1166.55 2504.66 1086.56 2623.22 1086.56C2741.79 1086.56 2837.91 1166.55 2837.91 1265.22C2837.91 1363.89 2741.79 1443.87 2623.22 1443.87C2504.66 1443.87 2408.54 1363.89 2408.54 1265.22Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.clouds.topColor
                : theme.dark.mainPage.clouds.topColor
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1558.19 428.012C1558.19 408.695 1574.93 393.035 1595.58 393.035C1616.23 393.035 1632.97 408.695 1632.97 428.012C1632.97 447.329 1616.23 462.988 1595.58 462.988C1574.93 462.988 1558.19 447.329 1558.19 428.012Z"
            fill="#e8ecf1"
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
        </g>
      </LeftCloudSVG>
    </LeftCloudContainer>
  );
};

export default LeftCloud;
