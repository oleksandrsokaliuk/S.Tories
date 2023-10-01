import { FC } from "react";
import {
  LeftCloudContainer,
  LeftCloudHeader,
  LeftCloudSVG,
  SleepingBedHover,
  SleepingBedHoverIdea,
  SleepingBedUnhover,
} from "../home/styles/HomePage.styles";
import { useNavigate } from "react-router-dom";
import { locations } from "../../routing/Routing";
import { useTheme } from "styled-components";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ThemeType } from "../../redux/slices/themeSlice";

const SleepingBed: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { currentTheme } = useSelector((state: RootState) => state.themeSlice);
  return (
    <LeftCloudContainer onClick={() => navigate(locations.shareStory)}>
      <LeftCloudHeader>Dreams Share</LeftCloudHeader>
      <LeftCloudSVG
        height="100%"
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 2270.82 1884.24"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_19"
            x1="1259.37"
            x2="1317.33"
            y1="1142.89"
            y2="1142.89"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_20"
            x1="1279.7"
            x2="1295.83"
            y1="1156.25"
            y2="1156.25"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_21"
            x1="1268.72"
            x2="1277.27"
            y1="1125.58"
            y2="1125.58"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_22"
            x1="1287.77"
            x2="1287.77"
            y1="1122.96"
            y2="1122.96"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_23"
            x1="1299.02"
            x2="1308.48"
            y1="1125.58"
            y2="1125.58"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_24"
            x1="1278.54"
            x2="1297.36"
            y1="1167.39"
            y2="1167.39"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_25"
            x1="1289.77"
            x2="1295.54"
            y1="1167.39"
            y2="1167.39"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_26"
            x1="1278.36"
            x2="1297.17"
            y1="1172.1"
            y2="1172.1"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_27"
            x1="1289.59"
            x2="1295.35"
            y1="1172.1"
            y2="1172.1"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_28"
            x1="1281.89"
            x2="1293.54"
            y1="1176.84"
            y2="1176.84"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1 0 0)"
            gradientUnits="userSpaceOnUse"
            id="LinearGradient_29"
            x1="1289.11"
            x2="1292.09"
            y1="1176.84"
            y2="1176.84"
          >
            <stop offset="0" stopColor="#ffe000" />
            <stop offset="0.522917" stopColor="#e4d880" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
        </defs>
        <clipPath id="ArtboardFrame">
          <rect height="2384.24" width="3370.82" x="0" y="0" />
        </clipPath>
        <g clipPath="url(#ArtboardFrame)" id="Слой-1">
          <g opacity="1">
            <g opacity="1">
              <path
                d="M1150.9 415.783L1190.5 1379.78"
                fill="#ffc0cb"
                fillRule="nonzero"
                opacity="1"
                stroke="#000002"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth="0.420529"
              />
            </g>
            <path
              d="M1049.78 6.53363C944.904 35.1922 884.878 149.946 915.727 262.84C944.72 368.943 1043.67 435.622 1142.53 419.47L1134.92 452.78L1183.65 441.053L1162.01 415.218C1266.57 386.325 1326.32 271.769 1295.52 159.06C1264.67 46.1667 1154.66-22.1249 1049.78 6.53363Z"
              fill="#ffc0cb"
              fillRule="nonzero"
              opacity="1"
              stroke="#0ffccb"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
          </g>
          <g opacity="1">
            <path
              d="M952.883 896.375L1190.48 1379.55"
              fill="#fac6a0"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.420529"
            />
            <path
              d="M851.776 487.346C746.896 516.005 686.871 630.759 717.719 743.652C746.712 849.755 845.659 916.435 944.526 900.283L936.912 933.593L985.638 921.866L964 896.031C1068.56 867.138 1128.31 752.581 1097.51 639.873C1066.67 526.979 956.655 458.688 851.776 487.346Z"
              fill="#fac6a0"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
          </g>
          <g opacity="1">
            <path
              d="M998.162 608.513L1190.5 1379.55"
              fill="#a6c8e3"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.420529"
            />
            <path
              d="M897.055 199.484C792.175 228.143 732.15 342.897 762.998 455.79C791.991 561.894 890.939 628.573 989.805 612.421L982.191 645.731L1030.92 634.004L1009.28 608.169C1113.84 579.276 1173.59 464.719 1142.79 352.011C1111.94 239.117 1001.93 170.826 897.055 199.484Z"
              fill="#a6c8e3"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
          </g>
          <g opacity="1">
            <path
              d="M1191.33 861.526L1189.65 1379.55"
              fill="#add8e6"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.420529"
            />
            <path
              d="M1208.13 441.715C1099.41 440.74 1010.41 534.82 1009.36 651.848C1008.37 761.836 1085.43 852.933 1184.96 864.306L1168.57 894.285L1218.65 896.265L1204.86 865.515C1313.34 866.178 1402.02 772.214 1403.06 655.378C1404.11 538.35 1316.85 442.69 1208.13 441.715Z"
              fill="#add8e6"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
          </g>
          <g opacity="1">
            <path
              d="M1283.71 639.321L1190.5 1379.55"
              fill="#d3a6d4"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.420529"
            />
            <path
              d="M1312.89 218.992C1204.27 214.112 1111.95 304.934 1106.7 421.848C1101.76 531.73 1175.5 625.537 1274.55 640.478L1257.09 669.848L1307.07 673.627L1294.39 642.401C1402.78 646.961 1494.78 556.243 1500.02 439.52C1505.27 322.606 1421.5 223.872 1312.89 218.992Z"
              fill="#d3a6d4"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
          </g>
          <g opacity="1">
            <path
              d="M1403.07 875.502L1190.5 1379.55"
              fill="#a6c8e3"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.420529"
            />
            <path
              d="M1551.7 477.792C1448.97 442.183 1334.61 502.954 1296.28 613.531C1260.26 717.458 1304.23 828.379 1394.93 870.91L1369.83 894.092L1416.66 911.945L1413.4 878.404C1516 913.639 1630.02 852.876 1668.29 742.48C1706.62 631.902 1654.43 513.4 1551.7 477.792Z"
              fill="#a6c8e3"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
          </g>
          <SleepingBedHover
            d="M1060.68 1353.02C1060.68 1321.64 1032.45 1322.42 1055.78 1322.42L1171 1333.85L1263.02 1333.2L1351.99 1332.46L1390.22 1334.87C1400.03 1334.87 1403.03 1335.56 1406.18 1335.18C1408.64 1334.89 1411 1339.2 1412.11 1342.54C1412.95 1345.08 1412.85 1345.18 1412.85 1353.02L1412.85 1353.02C1412.85 1362.43 1415.86 1376.47 1412.85 1384.29C1405.82 1402.53 1386.94 1409.84 1370.61 1409.84L1102.92 1409.84C1079.59 1409.84 1060.68 1384.4 1060.68 1353.02L1060.68 1353.02Z"
            fill="#d998ca"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <SleepingBedHover
            d="M967.057 1350.32C967.187 1340.26 974.801 1335.78 987.429 1328.63C1001.73 1320.54 1020.78 1322.58 1040.37 1322.84C1062.98 1323.13 1086.88 1334.58 1099.27 1341.19C1107.1 1345.37 1108.27 1342.08 1108.16 1350.39C1107.89 1371.85 1077.75 1388.87 1040.86 1388.39C1003.96 1387.92 966.781 1371.78 967.057 1350.32Z"
            fill="#f3c82c"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <g opacity="1">
            <path
              d="M968.654 1350.33C968.784 1340.27 976.398 1335.79 989.026 1328.64C1003.33 1320.55 1022.38 1322.59 1041.97 1322.84C1064.58 1323.14 1088.48 1334.59 1100.87 1341.2C1108.7 1345.38 1109.87 1342.09 1109.76 1350.4C1109.48 1371.86 1079.35 1388.87 1042.45 1388.4C1005.56 1387.93 968.378 1371.79 968.654 1350.33Z"
              fill="#d998ca"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <path
              d="M950.054 1239.26L964.616 1239.26L964.616 1472.26L950.054 1472.26L950.054 1239.26Z"
              fill="#f17e61"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <SleepingBedUnhover
              d="M1072.38 1306.98C1072 1313.6 1074.62 1319.54 1078.21 1320.3L1087.47 1322.29C1088 1322.4 1088.5 1322.16 1089 1322.04C1090.27 1341.02 1093.62 1354.76 1097.65 1354.89L1111.09 1355.3C1116.29 1355.47 1120.6 1333.21 1120.71 1305.55C1120.83 1277.9 1116.69 1255.33 1111.49 1255.16L1104.71 1257.85C1099.93 1257.69 1089.39 1273.71 1088.68 1298.25L1079.54 1296.37C1075.95 1295.62 1072.76 1300.37 1072.38 1306.98Z"
              fill="#f3c82c"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <SleepingBedUnhover
              d="M1104.49 1332.29C1104.49 1289.46 1093.81 1254.75 1114.47 1254.75L1208.21 1261.98L1286.12 1279.4L1362.47 1304.23L1423.56 1341.2C1444.22 1341.2 1416.36 1289.46 1416.36 1332.29L1416.36 1332.29C1416.36 1345.14 1419.03 1364.3 1416.36 1374.97C1410.14 1399.88 1393.42 1409.85 1378.96 1409.85L1141.89 1409.85C1121.23 1409.85 1104.49 1375.13 1104.49 1332.29L1104.49 1332.29Z"
              fill="#d998ca"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <path
              d="M964.616 1355.76L1416.2 1355.76L1416.2 1438.28L964.616 1438.28L964.616 1355.76Z"
              fill="#f17e61"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <path
              d="M1416.2 1239.26L1430.76 1239.26L1430.76 1472.26L1416.2 1472.26L1416.2 1239.26Z"
              fill="#f17e61"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <SleepingBedUnhover
              d="M1028.86 1355.42C1008.04 1355.59 995.312 1327.97 995.137 1306.56C994.962 1285.15 1011.7 1267.66 1032.52 1267.49C1035.64 1267.46 1047.71 1267.52 1054.48 1272.81C1076.6 1290.08 1099.56 1321.26 1104.77 1329.43C1108.6 1335.44 1120.74 1344.4 1120.8 1352.12C1120.86 1358.65 1106.54 1356.84 1094.29 1355.76C1090.42 1355.42 1088.13 1355.61 1085.26 1355.76C1083.91 1355.83 1085.96 1355.07 1085.39 1355.76C1083.81 1357.71 1068.6 1356.16 1060.72 1355.76C1058.89 1355.67 1056.82 1355.6 1056.17 1355.76C1047.6 1357.91 1037.09 1355.35 1028.86 1355.42Z"
              fill="#62370d"
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.127727"
            />
            <g opacity="1">
              <SleepingBedUnhover
                d="M1245.88 1120.63C1243.88 1120.63 1242.29 1122.13 1242.29 1123.94C1242.29 1125.76 1243.88 1127.26 1245.88 1127.26L1287.72 1127.26L1239.88 1152.69C1239.8 1152.73 1239.8 1152.81 1239.72 1152.85C1238.67 1153.21 1237.96 1153.81 1237.6 1154.72C1237.57 1154.77 1237.59 1154.81 1237.57 1154.85C1237.47 1155.14 1237.16 1155.31 1237.16 1155.63C1237.16 1155.85 1237.39 1155.99 1237.44 1156.19C1237.46 1156.43 1237.23 1156.71 1237.35 1156.91C1237.45 1157.09 1237.78 1157.06 1237.94 1157.19C1238.62 1158.17 1239.62 1158.94 1241.07 1158.94L1300.38 1158.94C1302.55 1158.94 1304.32 1157.45 1304.32 1155.63C1304.32 1153.81 1302.55 1152.38 1300.38 1152.38L1251.29 1152.38L1298.57 1127.26L1300.69 1127.26C1302.69 1127.26 1304.32 1125.76 1304.32 1123.94C1304.32 1122.13 1302.69 1120.63 1300.69 1120.63L1245.88 1120.63ZM1184.72 1158.94C1183.48 1158.94 1182.5 1159.95 1182.5 1161.19C1182.5 1162.44 1183.48 1163.47 1184.72 1163.47L1210.69 1163.47L1181 1180.88C1180.96 1180.91 1180.96 1180.98 1180.91 1181.01C1180.26 1181.25 1179.82 1181.66 1179.6 1182.29C1179.58 1182.32 1179.58 1182.35 1179.57 1182.38C1179.51 1182.58 1179.32 1182.7 1179.32 1182.91C1179.32 1183.06 1179.47 1183.15 1179.5 1183.29C1179.51 1183.45 1179.37 1183.65 1179.44 1183.79C1179.5 1183.91 1179.69 1183.89 1179.79 1183.97C1180.21 1184.64 1180.86 1185.16 1181.75 1185.16L1218.54 1185.16C1219.88 1185.16 1221 1184.16 1221 1182.91C1221 1181.67 1219.88 1180.66 1218.54 1180.66L1188.07 1180.66L1217.44 1163.47L1218.75 1163.47C1220 1163.47 1221 1162.44 1221 1161.19C1221 1159.95 1220 1158.94 1218.75 1158.94L1184.72 1158.94ZM1147.72 1190.91C1147.16 1190.83 1146.65 1191.25 1146.57 1191.85C1146.48 1192.45 1146.88 1192.99 1147.44 1193.07L1159.19 1194.72L1144.57 1201.19C1144.54 1201.2 1144.53 1201.24 1144.5 1201.26C1144.19 1201.33 1143.96 1201.5 1143.82 1201.79C1143.81 1201.8 1143.83 1201.8 1143.82 1201.82C1143.78 1201.91 1143.68 1201.96 1143.66 1202.07C1143.65 1202.14 1143.69 1202.19 1143.69 1202.26C1143.69 1202.33 1143.64 1202.43 1143.66 1202.51C1143.68 1202.57 1143.75 1202.55 1143.79 1202.6C1143.93 1202.95 1144.19 1203.26 1144.6 1203.32L1161.29 1205.66C1161.9 1205.75 1162.45 1205.35 1162.54 1204.76C1162.62 1204.16 1162.21 1203.59 1161.6 1203.51L1147.79 1201.57L1162.25 1195.16L1162.85 1195.26C1163.41 1195.34 1163.95 1194.92 1164.04 1194.32C1164.12 1193.72 1163.72 1193.15 1163.16 1193.07L1147.72 1190.91ZM1121.32 1205.69C1114.93 1205.69 1109.75 1210.87 1109.75 1217.26C1109.75 1223.64 1114.93 1228.82 1121.32 1228.82C1127.7 1228.82 1132.88 1223.64 1132.88 1217.26C1132.88 1210.87 1127.7 1205.69 1121.32 1205.69ZM1095.82 1227.1C1092.46 1227.1 1089.72 1229.83 1089.72 1233.19C1089.72 1236.55 1092.46 1239.26 1095.82 1239.26C1099.18 1239.26 1101.88 1236.55 1101.88 1233.19C1101.88 1229.83 1099.18 1227.1 1095.82 1227.1ZM1075.75 1241.47C1073.87 1241.47 1072.35 1243 1072.35 1244.88C1072.35 1246.76 1073.87 1248.29 1075.75 1248.29C1077.64 1248.29 1079.16 1246.76 1079.16 1244.88C1079.16 1243 1077.64 1241.47 1075.75 1241.47Z"
                fill="#000002"
                fillRule="nonzero"
                opacity="1"
                stroke="#000002"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth="0.124943"
              />
            </g>
            <path
              d="M972.845 1355.76L972.845 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1044.99 1355.99L1044.99 1438.51"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1117.99 1355.76L1117.99 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1190.37 1356.17L1190.37 1438.68"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1263.81 1356.28L1263.81 1438.79"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1008.85 1355.64L1008.85 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1080.99 1355.87L1080.99 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1153.99 1355.64L1153.99 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1226.37 1356.05L1226.37 1438.56"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1299.71 1355.75L1299.71 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1343.92 1355.75L1343.92 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1388.99 1355.75L1388.99 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M985.569 1355.42L985.569 1437.94"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1057.71 1355.65L1057.71 1438.17"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1130.71 1355.42L1130.71 1437.94"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1203.09 1355.83L1203.09 1438.34"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1276.53 1355.94L1276.53 1438.45"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1021.57 1355.3L1021.57 1437.82"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1093.72 1355.53L1093.72 1438.05"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1166.71 1355.3L1166.71 1437.82"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1239.1 1355.71L1239.1 1438.22"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1312.43 1355.41L1312.43 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1356.64 1355.41L1356.64 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1401.71 1355.41L1401.71 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M997.486 1355.76L997.486 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1069.63 1355.99L1069.63 1438.51"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1142.63 1355.76L1142.63 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1215.01 1356.17L1215.01 1438.68"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1288.35 1355.87L1288.35 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1332.55 1355.87L1332.55 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1377.63 1355.87L1377.63 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1033.49 1355.64L1033.49 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1105.64 1355.87L1105.64 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1178.63 1355.64L1178.63 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1251.01 1356.05L1251.01 1438.56"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1324.35 1355.75L1324.35 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1368.56 1355.75L1368.56 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1413.63 1355.75L1413.63 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M976.977 1355.76L976.977 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1049.12 1355.99L1049.12 1438.51"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1122.12 1355.76L1122.12 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1194.5 1356.17L1194.5 1438.68"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1267.94 1356.28L1267.94 1438.79"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1012.98 1355.64L1012.98 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1085.13 1355.87L1085.13 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1158.12 1355.64L1158.12 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1230.5 1356.05L1230.5 1438.56"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1303.84 1355.75L1303.84 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1348.05 1355.75L1348.05 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1393.12 1355.75L1393.12 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M989.7 1355.42L989.7 1437.94"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1061.85 1355.65L1061.85 1438.17"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1134.84 1355.42L1134.84 1437.94"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1207.22 1355.83L1207.22 1438.34"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1280.67 1355.94L1280.67 1438.45"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1025.7 1355.3L1025.7 1437.82"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1097.85 1355.53L1097.85 1438.05"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1170.85 1355.3L1170.85 1437.82"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1243.23 1355.71L1243.23 1438.22"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1316.57 1355.41L1316.57 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1360.77 1355.41L1360.77 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1405.84 1355.41L1405.84 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1001.62 1355.76L1001.62 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1073.76 1355.99L1073.76 1438.51"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1146.76 1355.76L1146.76 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1219.14 1356.17L1219.14 1438.68"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1292.48 1355.87L1292.48 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1336.69 1355.87L1336.69 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1381.76 1355.87L1381.76 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1037.62 1355.64L1037.62 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1109.77 1355.87L1109.77 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1182.76 1355.64L1182.76 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1255.15 1356.05L1255.15 1438.56"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1328.48 1355.75L1328.48 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1372.69 1355.75L1372.69 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M968.653 1355.76L968.653 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1040.8 1355.99L1040.8 1438.51"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1113.79 1355.76L1113.79 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1186.18 1356.17L1186.18 1438.68"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1259.62 1356.28L1259.62 1438.79"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1004.66 1355.64L1004.66 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1076.8 1355.87L1076.8 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1149.8 1355.64L1149.8 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1222.18 1356.05L1222.18 1438.56"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1295.52 1355.75L1295.52 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1339.73 1355.75L1339.73 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1384.8 1355.75L1384.8 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M981.376 1355.42L981.376 1437.94"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1053.52 1355.65L1053.52 1438.17"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1126.52 1355.42L1126.52 1437.94"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1198.9 1355.83L1198.9 1438.34"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1272.34 1355.94L1272.34 1438.45"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1017.38 1355.3L1017.38 1437.82"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1089.53 1355.53L1089.53 1438.05"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1162.52 1355.3L1162.52 1437.82"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1234.9 1355.71L1234.9 1438.22"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1308.24 1355.41L1308.24 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1352.45 1355.41L1352.45 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1397.52 1355.41L1397.52 1437.93"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M993.293 1355.76L993.293 1407.64L993.293 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1065.44 1355.99L1065.44 1407.87L1065.44 1438.51"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1138.43 1355.76L1138.43 1407.64L1138.43 1438.28"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1210.82 1356.17L1210.82 1408.05L1210.82 1438.68"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1284.26 1356.28L1284.26 1408.16L1284.26 1438.79"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1029.3 1355.64L1029.3 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1101.44 1355.87L1101.44 1438.39"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1174.44 1355.64L1174.44 1438.16"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1246.82 1356.05L1246.82 1438.56"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1320.16 1355.75L1320.16 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1364.37 1355.75L1364.37 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1409.44 1355.75L1409.44 1438.27"
              fill="#ffffff"
              fillRule="nonzero"
              opacity="1"
              stroke="#d3a6d4"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
          </g>
          <SleepingBedHover
            d="M1177.17 1168.85C1176.71 1148.83 1148.34 1137.45 1126.65 1137.95C1104.95 1138.44 1087.73 1155.06 1088.18 1175.08C1088.25 1178.08 1085.15 1198.88 1090.71 1205.23C1097.87 1213.41 1086.68 1253.17 1095.91 1260.43C1110.08 1271.59 1148.11 1253.06 1153.21 1255.94C1159.42 1259.43 1168.76 1257.5 1176.58 1257.32C1183.2 1257.17 1180.94 1243.47 1179.48 1231.73C1179.02 1228.01 1179.14 1225.81 1179.21 1223.05C1179.24 1221.75 1178.53 1223.74 1179.21 1223.18C1181.14 1221.6 1179.11 1207.02 1178.47 1199.47C1178.32 1197.7 1178.19 1195.72 1178.33 1195.09C1180.25 1186.79 1177.35 1176.76 1177.17 1168.85Z"
            fill="#62370d"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <SleepingBedHover
            d="M1131.99 1198.57C1125.16 1198.57 1119.64 1204.25 1119.64 1211.29L1119.64 1214.91C1119.64 1215.64 1119.75 1216.34 1119.86 1217.04C1105.97 1217.32 1090.39 1218.89 1082.42 1227.66C1072.56 1238.52 1074.89 1260.69 1074.89 1277.13L1074.89 1295.57C1074.89 1308.42 1078.65 1320.32 1084.99 1330.1C1083.2 1333.52 1082.08 1337.83 1082.08 1342.57C1082.08 1353.57 1087.86 1362.47 1094.99 1362.47L1153.05 1362.47L1152.33 1452.07C1152.24 1463.07 1157.95 1472.12 1165.08 1472.25C1172.21 1472.39 1170.96 1467.11 1171.05 1456.11L1178.92 1353.44L1181.58 1353.44L1181.07 1451.49C1180.98 1462.49 1186.45 1463.05 1193.58 1463.19C1200.71 1463.33 1200.55 1459.17 1200.64 1448.17L1207.52 1333.82L1207.52 1333.75C1207.52 1333.67 1207.55 1333.59 1207.55 1333.5C1207.55 1332.34 1207.45 1331.2 1207.33 1330.1C1207.32 1329.98 1207.31 1329.85 1207.3 1329.72C1207.3 1329.71 1207.3 1329.7 1207.3 1329.69C1207.19 1328.85 1207 1328.09 1206.83 1327.29C1206.73 1326.82 1206.67 1326.3 1206.55 1325.85C1206.54 1325.82 1206.53 1325.79 1206.52 1325.75C1206.21 1324.64 1205.85 1323.57 1205.42 1322.57C1205.42 1322.55 1205.4 1322.55 1205.39 1322.54C1205.1 1321.85 1204.74 1321.26 1204.39 1320.63C1204.19 1320.27 1204.02 1319.88 1203.8 1319.54C1203.78 1319.5 1203.76 1319.47 1203.74 1319.44C1203.47 1319.03 1203.18 1318.69 1202.89 1318.32C1202.56 1317.89 1202.25 1317.44 1201.89 1317.07C1201.88 1317.05 1201.88 1317.02 1201.86 1317C1201.22 1316.34 1200.51 1315.74 1199.8 1315.25C1199.36 1314.96 1198.88 1314.79 1198.42 1314.57C1198.03 1314.38 1197.68 1314.14 1197.27 1314C1197.26 1314 1197.24 1314.01 1197.24 1314C1197.14 1313.97 1197.02 1313.97 1196.92 1313.94C1196.23 1313.75 1195.53 1313.61 1194.8 1313.6C1194.77 1313.6 1194.76 1313.6 1194.74 1313.6C1194.71 1313.6 1194.67 1313.6 1194.64 1313.6L1192.7 1313.6C1193.75 1313.31 1194.71 1312.86 1195.52 1312.19C1196.74 1312.16 1197.93 1311.9 1198.92 1311.16L1230.37 1281.53C1233.39 1279.27 1233.13 1274.15 1230.37 1270.44C1227.6 1266.74 1226.05 1269.57 1223.02 1271.83L1195.99 1292.04L1186.27 1250.32C1185.92 1244.8 1184.9 1239.69 1182.77 1235.22L1182.58 1234.47C1181.88 1231.49 1179.96 1229.26 1177.64 1228C1177.53 1227.9 1177.47 1227.76 1177.36 1227.66C1170.5 1221.46 1156.48 1218.73 1144.08 1217.63C1144.27 1216.75 1144.36 1215.85 1144.36 1214.91L1144.36 1211.29C1144.36 1204.25 1138.81 1198.57 1131.99 1198.57ZM1184.2 1310.41C1185.49 1312.03 1187.2 1313.13 1189.05 1313.6L1183.2 1313.6C1183.52 1312.53 1183.95 1311.51 1184.2 1310.41Z"
            fill="#f3c82c"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <SleepingBedHover
            d="M1103.88 1178.03C1103.88 1158.66 1116.24 1142.96 1131.47 1142.96C1146.71 1142.96 1159.07 1158.66 1159.07 1178.03C1159.07 1197.4 1146.71 1213.1 1131.47 1213.1C1116.24 1213.1 1103.88 1197.4 1103.88 1178.03Z"
            fill="#f3c82c"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <SleepingBedHover
            d="M1156.96 1146.74C1156.84 1141.39 1139.03 1138.57 1125.33 1138.88C1111.63 1139.19 1103.04 1144.04 1103.16 1149.4C1103.18 1150.2 1103.2 1159.75 1103.22 1164.24C1103.25 1172.46 1103.56 1168.73 1103.24 1169.61C1102.54 1171.51 1100.98 1170.66 1104.92 1171.93C1113.78 1174.81 1137.93 1169.53 1141.13 1170.26C1145.02 1171.14 1150.93 1170.55 1155.87 1170.44C1160.05 1170.34 1158.73 1166.69 1157.91 1163.56C1157.64 1162.57 1157.74 1161.98 1157.81 1161.24C1157.84 1160.89 1157.37 1161.43 1157.81 1161.27C1159.03 1160.83 1157.88 1156.95 1157.53 1154.93C1157.45 1154.46 1157.39 1153.93 1157.48 1153.76C1158.76 1151.52 1157.01 1148.86 1156.96 1146.74Z"
            fill="#62370d"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <SleepingBedHoverIdea
            d="M1181.07 1142.96C1181.07 1112.55 1205.72 1087.91 1236.12 1087.91L1342.64 1087.91C1373.04 1087.91 1397.69 1112.55 1397.69 1142.96L1397.69 1142.96C1397.69 1173.37 1373.04 1198.01 1342.64 1198.01L1236.12 1198.01C1218.07 1198.01 1188.81 1198.57 1164.39 1200.99C1152.98 1202.12 1181.07 1155.31 1181.07 1142.96L1181.07 1142.96Z"
            fill="#ffffff"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="2.57606"
          />
          <g opacity="1">
            <SleepingBedHoverIdea
              d="M1288.35 1106.55C1272.34 1106.55 1259.37 1118.65 1259.37 1133.57C1259.37 1143.5 1266.96 1150.03 1273.76 1156.78L1279.7 1166.08L1283 1179.23L1292.69 1179.06L1295.83 1165.18L1302.74 1156.87C1308.35 1151.36 1317.33 1143.58 1317.33 1133.57C1317.33 1118.65 1304.35 1106.55 1288.35 1106.55Z"
              fill="#f3c82c"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <SleepingBedHoverIdea
              d="M1281.61 1142.51C1281.61 1141.32 1281.19 1140.86 1280.45 1137.3C1280.03 1135.29 1279.37 1132.66 1279.9 1133.52C1280.42 1134.36 1282.89 1134.99 1284.19 1135.38C1286.48 1136.07 1286.9 1133.27 1287.97 1133.27L1290.35 1135.1C1292.42 1135.1 1296.89 1132.45 1295.6 1133.86C1292.39 1137.41 1292.5 1140.7 1292.5 1142.77L1292.74 1172.81C1292.74 1176.93 1292.24 1179.23 1288.1 1179.23L1288.1 1179.23C1283.95 1179.23 1282.4 1176.64 1282.4 1172.51L1281.61 1142.51Z"
              fill="#f3c82c"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <SleepingBedHoverIdea
              d="M1268.72 1121.27L1277.27 1129.89"
              fill="#928f7b"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <SleepingBedHoverIdea
              d="M1287.77 1117.84L1287.77 1128.07"
              fill="#928f7b"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <SleepingBedHoverIdea
              d="M1308.48 1121.27L1299.02 1129.89"
              fill="#928f7b"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <g opacity="1">
              <SleepingBedHoverIdea
                d="M1278.54 1167.39C1278.54 1166.06 1279.89 1164.98 1281.56 1164.98L1294.35 1164.98C1296.01 1164.98 1297.36 1166.06 1297.36 1167.39L1297.36 1167.39C1297.36 1168.72 1296.01 1169.79 1294.35 1169.79L1281.56 1169.79C1279.89 1169.79 1278.54 1168.72 1278.54 1167.39L1278.54 1167.39Z"
                fill="url(#LinearGradient_6)"
                fillRule="nonzero"
                opacity="1"
                stroke="#020200"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth="0.636803"
              />
              <path
                d="M1289.77 1167.39L1295.54 1167.39"
                fill="url(#LinearGradient_7)"
                fillRule="nonzero"
                opacity="1"
                stroke="#020200"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth="0.636803"
              />
            </g>
            <g opacity="1">
              <path
                d="M1278.36 1172.1C1278.36 1170.77 1279.71 1169.7 1281.37 1169.7L1294.16 1169.7C1295.83 1169.7 1297.17 1170.77 1297.17 1172.1L1297.17 1172.1C1297.17 1173.43 1295.83 1174.51 1294.16 1174.51L1281.37 1174.51C1279.71 1174.51 1278.36 1173.43 1278.36 1172.1L1278.36 1172.1Z"
                fill="url(#LinearGradient_8)"
                fillRule="nonzero"
                opacity="1"
                stroke="#020200"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth="0.636803"
              />
              <path
                d="M1289.59 1172.1L1295.35 1172.1"
                fill="url(#LinearGradient_9)"
                fillRule="nonzero"
                opacity="1"
                stroke="#020200"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth="0.636803"
              />
            </g>
            <path
              d="M1282.51 1176.83C1282.51 1176.62 1282.33 1176.42 1282.28 1176.25C1282.14 1175.76 1281.99 1175.39 1281.89 1174.51C1281.85 1174.14 1283.87 1174.42 1284.22 1174.42L1291.45 1174.42C1291.92 1174.42 1293.65 1174.36 1293.53 1174.84C1293.41 1175.36 1293.15 1176.16 1293.15 1176.83L1293.15 1176.83C1293.15 1177.72 1293.06 1178.63 1292.65 1179.04C1292.45 1179.25 1292.06 1179.23 1291.77 1179.23L1284.22 1179.23C1283.91 1179.23 1283.05 1179.54 1282.99 1179.23C1282.86 1178.54 1282.51 1177.73 1282.51 1176.83L1282.51 1176.83Z"
              fill="url(#LinearGradient_10)"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
            <path
              d="M1289.11 1177.98L1291.9 1177.98L1292.09 1175.71"
              fill="url(#LinearGradient_11)"
              fillRule="nonzero"
              opacity="1"
              stroke="#020200"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.636803"
            />
          </g>
        </g>
      </LeftCloudSVG>
    </LeftCloudContainer>
  );
};

export default SleepingBed;
