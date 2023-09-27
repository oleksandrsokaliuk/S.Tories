import { FC } from "react";
import { SunContainer, SunSVG } from "../home/styles/HomePage.styles";

const Sun: FC = () => {
  return (
    <SunContainer>
      <SunSVG
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 3370.82 2384.24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            cx="1637.79"
            cy="1156.48"
            gradientTransform="matrix(1 0 0 1 2.84217e-14 -2.84217e-14)"
            gradientUnits="userSpaceOnUse"
            id="RadialGradient"
            r="192.773"
          >
            <stop offset="0" stop-color="#f89500" />
            <stop offset="1" stop-color="#f6d32d" />
          </radialGradient>
        </defs>
        <g id="Слой-1">
          <g opacity="1">
            <g opacity="1">
              <path
                d="M1396.85 1629.15L1517.37 1293.05L1170.22 1376.56L1478.58 1196.56L1158.97 1037.39L1510.89 1097.71L1368.37 770.337L1599.18 1042.75L1700.43 700.362L1702.14 1057.41L1999.79 860.206L1771.59 1134.82L2126.36 1175.08L1775.04 1238.75L2020.93 1497.64L1710.87 1320.59L1732.82 1676.97L1609.1 1342.04L1396.85 1629.15Z"
                fill="#e9f800"
                fill-rule="nonzero"
                opacity="0.440301"
                stroke="none"
              />
              <path
                d="M1637.79 1689.55L1585.79 1336.31L1318.9 1573.49L1506.13 1269.46L1149.22 1279.59L1488.07 1167.04L1208.15 945.391L1540.07 1076.98L1468.11 727.255L1637.79 1041.41L1807.47 727.255L1735.52 1076.98L2067.43 945.391L1787.51 1167.04L2126.36 1279.59L1769.46 1269.46L1956.68 1573.49L1689.79 1336.31L1637.79 1689.55Z"
                fill="#e9f800"
                fill-rule="nonzero"
                opacity="0.440301"
                stroke="none"
              />
              <path
                d="M1635.95 1676.97L1618.77 1320.33L1329.95 1530.25L1546.03 1246.01L1189.85 1221.16L1538.08 1142.32L1281.2 894.333L1598.64 1057.77L1561.26 702.684L1699.38 1031.94L1898.99 735.894L1793.16 1076.9L2136.36 978.421L1836.09 1171.62L2162.3 1316.79L1808.1 1271.78L1964.67 1592.66L1722.27 1330.51L1635.95 1676.97Z"
                fill="#e9f800"
                fill-rule="nonzero"
                opacity="0.440301"
                stroke="none"
              />
              <path
                d="M1351.07 1156.48C1351.07 998.126 1479.44 869.757 1637.79 869.757C1796.14 869.757 1924.51 998.126 1924.51 1156.48C1924.51 1314.83 1796.14 1443.2 1637.79 1443.2C1479.44 1443.2 1351.07 1314.83 1351.07 1156.48Z"
                fill="url(#RadialGradient)"
                fill-rule="nonzero"
                opacity="1"
                stroke="none"
              />
            </g>
          </g>
        </g>
      </SunSVG>
    </SunContainer>
  );
};

export default Sun;
