import { FC } from "react";
import {
  RightCloudContainer,
  RightCloudHeader,
  RightCloudSVG,
} from "../home/styles/HomePage.styles";
import { useNavigate } from "react-router-dom";
import { locations } from "../../routing/Routing";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ThemeType } from "../../redux/slices/themeSlice";

const RightCloud: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { currentTheme } = useSelector((state: RootState) => state.themeSlice);
  return (
    <RightCloudContainer onClick={() => navigate(locations.voyage)}>
      <RightCloudHeader>Dream Voyages</RightCloudHeader>
      <RightCloudSVG
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 3370.82 2384.24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <g>
          <path
            d="M946.962 1348.23C946.962 1234.24 1074.63 1141.84 1232.11 1141.84C1389.6 1141.84 1517.27 1234.24 1517.27 1348.23C1517.27 1462.22 1389.6 1554.63 1232.11 1554.63C1074.63 1554.63 946.962 1462.22 946.962 1348.23Z"
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
            d="M1344.11 1350.78C1344.11 1238.2 1471.78 1146.93 1629.26 1146.93C1786.75 1146.93 1914.41 1238.2 1914.41 1350.78C1914.41 1463.36 1786.75 1554.63 1629.26 1554.63C1471.78 1554.63 1344.11 1463.36 1344.11 1350.78Z"
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
            d="M1722.59 1358.36C1722.59 1249.96 1836.06 1162.08 1976.02 1162.08C2115.99 1162.08 2229.45 1249.96 2229.45 1358.36C2229.45 1466.76 2115.99 1554.63 1976.02 1554.63C1836.06 1554.63 1722.59 1466.76 1722.59 1358.36Z"
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
            d="M2188.6 1373.37C2188.6 1273.27 2294.34 1192.12 2424.79 1192.12C2555.24 1192.12 2660.98 1273.27 2660.98 1373.37C2660.98 1473.48 2555.24 1554.63 2424.79 1554.63C2294.34 1554.63 2188.6 1473.48 2188.6 1373.37Z"
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
            d="M1344.11 758.421C1344.11 637.628 1475.55 539.705 1637.68 539.705C1799.81 539.705 1931.25 637.628 1931.25 758.421C1931.25 879.215 1799.81 977.137 1637.68 977.137C1475.55 977.137 1344.11 879.215 1344.11 758.421Z"
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
            d="M1455.86 685.93C1455.86 525.101 1606.6 394.723 1792.55 394.723C1978.5 394.723 2129.25 525.101 2129.25 685.93C2129.25 846.76 1978.5 977.137 1792.55 977.137C1606.6 977.137 1455.86 846.76 1455.86 685.93Z"
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
            d="M889.345 1254.11C889.345 1144.27 1000.81 1055.23 1138.32 1055.23C1275.82 1055.23 1387.29 1144.27 1387.29 1254.11C1387.29 1363.95 1275.82 1453 1138.32 1453C1000.81 1453 889.345 1363.95 889.345 1254.11Z"
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
            d="M1217.43 1146.93C1217.43 1040.63 1329.2 954.453 1467.07 954.453C1604.94 954.453 1716.71 1040.63 1716.71 1146.93C1716.71 1253.23 1604.94 1339.41 1467.07 1339.41C1329.2 1339.41 1217.43 1253.23 1217.43 1146.93Z"
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
            d="M1217.43 1177.16C1217.43 1054.16 1329.2 954.453 1467.07 954.453C1604.94 954.453 1716.71 1054.16 1716.71 1177.16C1716.71 1300.16 1604.94 1399.86 1467.07 1399.86C1329.2 1399.86 1217.43 1300.16 1217.43 1177.16Z"
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
            d="M1972.83 1116.78C1972.83 1019.68 2069.43 940.958 2188.6 940.958C2307.76 940.958 2404.36 1019.68 2404.36 1116.78C2404.36 1213.88 2307.76 1292.6 2188.6 1292.6C2069.43 1292.6 1972.83 1213.88 1972.83 1116.78Z"
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
            d="M1558.71 1175.66C1558.71 1036.84 1674.9 924.302 1818.21 924.302C1961.53 924.302 2077.71 1036.84 2077.71 1175.66C2077.71 1314.47 1961.53 1427.01 1818.21 1427.01C1674.9 1427.01 1558.71 1314.47 1558.71 1175.66Z"
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
            d="M1637.68 1077.91C1637.68 993.076 1712.71 924.302 1805.26 924.302C1897.81 924.302 1972.83 993.076 1972.83 1077.91C1972.83 1162.75 1897.81 1231.52 1805.26 1231.52C1712.71 1231.52 1637.68 1162.75 1637.68 1077.91Z"
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
            d="M1961.67 1020.54C1961.67 967.389 2009.63 924.302 2068.79 924.302C2127.95 924.302 2175.91 967.389 2175.91 1020.54C2175.91 1073.69 2127.95 1116.78 2068.79 1116.78C2009.63 1116.78 1961.67 1073.69 1961.67 1020.54Z"
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
            d="M1961.67 1141.33C1961.67 1021.47 2036.7 924.302 2129.25 924.302C2221.8 924.302 2296.82 1021.47 2296.82 1141.33C2296.82 1261.19 2221.8 1358.36 2129.25 1358.36C2036.7 1358.36 1961.67 1261.19 1961.67 1141.33Z"
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
            d="M2225.04 1116.78C2225.04 1063.63 2273 1020.54 2332.16 1020.54C2391.32 1020.54 2439.27 1063.63 2439.27 1116.78C2439.27 1169.93 2391.32 1213.02 2332.16 1213.02C2273 1213.02 2225.04 1169.93 2225.04 1116.78Z"
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
            d="M2229.45 1200.6C2229.45 1090.55 2326.06 1001.34 2445.22 1001.34C2564.38 1001.34 2660.98 1090.55 2660.98 1200.6C2660.98 1310.65 2564.38 1399.86 2445.22 1399.86C2326.06 1399.86 2229.45 1310.65 2229.45 1200.6Z"
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
            d="M2396.71 1091.55C2396.71 999.183 2471.59 924.302 2563.96 924.302C2656.33 924.302 2731.21 999.183 2731.21 1091.55C2731.21 1183.93 2656.33 1258.81 2563.96 1258.81C2471.59 1258.81 2396.71 1183.93 2396.71 1091.55Z"
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
            d="M1861.79 859.702C1861.79 692.702 1981.53 557.321 2129.25 557.321C2276.96 557.321 2396.71 692.702 2396.71 859.702C2396.71 1026.7 2276.96 1162.08 2129.25 1162.08C1981.53 1162.08 1861.79 1026.7 1861.79 859.702Z"
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
            d="M2229.45 937.943C2229.45 825.336 2323.39 734.05 2439.27 734.05C2555.15 734.05 2649.09 825.336 2649.09 937.943C2649.09 1050.55 2555.15 1141.84 2439.27 1141.84C2323.39 1141.84 2229.45 1050.55 2229.45 937.943Z"
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
            d="M1050.7 998.429C1050.7 835.964 1170.55 704.26 1318.39 704.26C1466.24 704.26 1586.09 835.964 1586.09 998.429C1586.09 1160.89 1466.24 1292.6 1318.39 1292.6C1170.55 1292.6 1050.7 1160.89 1050.7 998.429Z"
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
            d="M1485.53 1000.14C1485.53 887.196 1602.43 795.636 1746.64 795.636C1890.84 795.636 2007.75 887.196 2007.75 1000.14C2007.75 1113.09 1890.84 1204.65 1746.64 1204.65C1602.43 1204.65 1485.53 1113.09 1485.53 1000.14Z"
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
            d="M800.754 1309.26C800.754 1229.87 866.213 1165.51 946.962 1165.51C1027.71 1165.51 1093.17 1229.87 1093.17 1309.26C1093.17 1388.64 1027.71 1453 946.962 1453C866.213 1453 800.754 1388.64 800.754 1309.26Z"
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
            d="M711.545 1162.08C711.545 1030.76 839.636 924.302 997.645 924.302C1155.65 924.302 1283.74 1030.76 1283.74 1162.08C1283.74 1293.41 1155.65 1399.86 997.645 1399.86C839.636 1399.86 711.545 1293.41 711.545 1162.08Z"
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
            d="M645.588 1350.78C645.588 1238.2 745.783 1146.93 869.379 1146.93C992.976 1146.93 1093.17 1238.2 1093.17 1350.78C1093.17 1463.36 992.976 1554.63 869.379 1554.63C745.783 1554.63 645.588 1463.36 645.588 1350.78Z"
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
            d="M2489.54 1231.52C2489.54 1123.56 2585.59 1036.04 2704.08 1036.04C2822.57 1036.04 2918.62 1123.56 2918.62 1231.52C2918.62 1339.49 2822.57 1427.01 2704.08 1427.01C2585.59 1427.01 2489.54 1339.49 2489.54 1231.52Z"
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
            d="M1716.71 975.06C1716.71 848.263 1812.76 745.474 1931.25 745.474C2049.73 745.474 2145.79 848.263 2145.79 975.06C2145.79 1101.86 2049.73 1204.65 1931.25 1204.65C1812.76 1204.65 1716.71 1101.86 1716.71 975.06Z"
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
            d="M1835.4 517.813C1835.4 495.994 1853.09 478.305 1874.9 478.305C1896.72 478.305 1914.41 495.994 1914.41 517.813C1914.41 539.633 1896.72 557.321 1874.9 557.321C1853.09 557.321 1835.4 539.633 1835.4 517.813Z"
            fill="#ffffff"
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
        </g>
      </RightCloudSVG>
    </RightCloudContainer>
  );
};

export default RightCloud;
