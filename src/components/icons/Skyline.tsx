import { FC } from "react";
import { SkylineContainer, SkylineSVG } from "./Skyline.styled";
import { useTheme } from "styled-components";
import { ThemeType } from "../../redux/slices/themeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Skyline: FC = () => {
  const theme = useTheme();
  const currentTheme = useSelector(
    (state: RootState) => state.themeSlice.currentTheme
  );

  console.log({ theme });
  return (
    <SkylineContainer>
      <SkylineSVG
        height="100%"
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 841.995 595.35"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <clipPath id="ArtboardFrame">
          <rect height="595.35" width="841.995" x="0" y="0" />
        </clipPath>
        <linearGradient
          gradientTransform="matrix(1 0 0 1 0 0)"
          gradientUnits="userSpaceOnUse"
          id="LinearGradient"
          x1="1347.66"
          x2="2059.19"
          y1="1067.07"
          y2="1067.07"
        >
          <stop offset="0" stopColor="#2e07ff" />
          <stop offset="0.802083" stopColor="#2db590" />
        </linearGradient>
        <g clipPath="url(#ArtboardFrame)" id="Слой-1">
          <path
            d="M782.472 417.193L807.858 417.193L845.435 417.193L845.435 609.603L782.472 609.603L782.472 417.193Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.building
                : theme.dark.mainPage.buildings.lightBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.289 473.43C799.289 470.948 800.782 468.937 802.624 468.937L807.388 468.937C809.229 468.937 810.722 470.948 810.722 473.43L810.722 473.43C810.722 475.911 809.229 477.923 807.388 477.923L802.624 477.923C800.782 477.923 799.289 475.911 799.289 473.43L799.289 473.43Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.401 499.039C799.401 496.558 800.894 494.546 802.736 494.546L807.499 494.546C809.341 494.546 810.834 496.558 810.834 499.039L810.834 499.039C810.834 501.521 809.341 503.532 807.499 503.532L802.736 503.532C800.894 503.532 799.401 501.521 799.401 499.039L799.401 499.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.121 512.38C799.121 509.898 800.614 507.887 802.456 507.887L807.22 507.887C809.062 507.887 810.555 509.898 810.555 512.38L810.555 512.38C810.555 514.861 809.062 516.873 807.22 516.873L802.456 516.873C800.614 516.873 799.121 514.861 799.121 512.38L799.121 512.38Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.233 564.018C799.233 561.536 800.726 559.524 802.568 559.524L807.332 559.524C809.173 559.524 810.666 561.536 810.666 564.018L810.666 564.018C810.666 566.499 809.173 568.511 807.332 568.511L802.568 568.511C800.726 568.511 799.233 566.499 799.233 564.018L799.233 564.018Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M-17.7664 543.845L28.1966 543.845L28.1966 597.16L-17.7664 597.16L-17.7664 543.845Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M72.1278 560.774L104.894 560.774L104.894 599.837L72.1278 599.837L72.1278 560.774Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M88.1535 413.822L152.026 413.822L152.026 606.496L88.1535 606.496L88.1535 413.822Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.building
                : theme.dark.mainPage.buildings.lightBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.3974 575.06C95.3974 573.639 97.1331 572.487 99.2741 572.487L104.812 572.487C106.953 572.487 108.688 573.639 108.688 575.06L108.688 575.06C108.688 576.482 106.953 577.634 104.812 577.634L99.2741 577.634C97.1331 577.634 95.3974 576.482 95.3974 575.06L95.3974 575.06Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.7223 483.154C95.7223 481.733 97.458 480.58 99.599 480.58L105.137 480.58C107.278 480.58 109.013 481.733 109.013 483.154L109.013 483.154C109.013 484.576 107.278 485.728 105.137 485.728L99.599 485.728C97.458 485.728 95.7223 484.576 95.7223 483.154L95.7223 483.154Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.7873 512.733C95.7873 511.311 97.523 510.159 99.664 510.159L105.202 510.159C107.343 510.159 109.078 511.311 109.078 512.733L109.078 512.733C109.078 514.154 107.343 515.306 105.202 515.306L99.664 515.306C97.523 515.306 95.7873 514.154 95.7873 512.733L95.7873 512.733Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.8523 453.35C95.8523 451.928 97.588 450.776 99.729 450.776L105.267 450.776C107.408 450.776 109.143 451.928 109.143 453.35L109.143 453.35C109.143 454.771 107.408 455.923 105.267 455.923L99.729 455.923C97.588 455.923 95.8523 454.771 95.8523 453.35L95.8523 453.35Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.6574 559.925C95.6574 558.504 97.393 557.352 99.5341 557.352L105.072 557.352C107.213 557.352 108.948 558.504 108.948 559.925L108.948 559.925C108.948 561.347 107.213 562.499 105.072 562.499L99.5341 562.499C97.393 562.499 95.6574 561.347 95.6574 559.925L95.6574 559.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.9823 468.019C95.9823 466.597 97.7179 465.445 99.859 465.445L105.397 465.445C107.538 465.445 109.273 466.597 109.273 468.019L109.273 468.019C109.273 469.44 107.538 470.593 105.397 470.593L99.859 470.593C97.7179 470.593 95.9823 469.44 95.9823 468.019L95.9823 468.019Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.3974 567.567C95.3974 566.146 97.1331 564.993 99.2741 564.993L104.812 564.993C106.953 564.993 108.688 566.146 108.688 567.567L108.688 567.567C108.688 568.988 106.953 570.141 104.812 570.141L99.2741 570.141C97.1331 570.141 95.3974 568.988 95.3974 567.567L95.3974 567.567Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.7873 505.239C95.7873 503.818 97.523 502.666 99.664 502.666L105.202 502.666C107.343 502.666 109.078 503.818 109.078 505.239L109.078 505.239C109.078 506.661 107.343 507.813 105.202 507.813L99.664 507.813C97.523 507.813 95.7873 506.661 95.7873 505.239L95.7873 505.239Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.8523 445.856C95.8523 444.435 97.588 443.282 99.729 443.282L105.267 443.282C107.408 443.282 109.143 444.435 109.143 445.856L109.143 445.856C109.143 447.277 107.408 448.43 105.267 448.43L99.729 448.43C97.588 448.43 95.8523 447.277 95.8523 445.856L95.8523 445.856Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.9173 519.909C95.9173 518.487 97.6529 517.335 99.794 517.335L105.332 517.335C107.473 517.335 109.208 518.487 109.208 519.909L109.208 519.909C109.208 521.33 107.473 522.482 105.332 522.482L99.794 522.482C97.6529 522.482 95.9173 521.33 95.9173 519.909L95.9173 519.909Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M95.6574 552.432C95.6574 551.01 97.393 549.858 99.5341 549.858L105.072 549.858C107.213 549.858 108.948 551.01 108.948 552.432L108.948 552.432C108.948 553.853 107.213 555.006 105.072 555.006L99.5341 555.006C97.393 555.006 95.6574 553.853 95.6574 552.432L95.6574 552.432Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M96.0472 490.104C96.0472 488.683 97.7829 487.53 99.9239 487.53L105.462 487.53C107.603 487.53 109.338 488.683 109.338 490.104L109.338 490.104C109.338 491.525 107.603 492.678 105.462 492.678L99.9239 492.678C97.7829 492.678 96.0472 491.525 96.0472 490.104L96.0472 490.104Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M96.1122 430.721C96.1122 429.299 97.8479 428.147 99.9889 428.147L105.526 428.147C107.668 428.147 109.403 429.299 109.403 430.721L109.403 430.721C109.403 432.142 107.668 433.295 105.526 433.295L99.9889 433.295C97.8479 433.295 96.1122 432.142 96.1122 430.721L96.1122 430.721Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.704 542.537C113.704 541.116 115.44 539.964 117.581 539.964L123.118 539.964C125.26 539.964 126.995 541.116 126.995 542.537L126.995 542.537C126.995 543.959 125.26 545.111 123.118 545.111L117.581 545.111C115.44 545.111 113.704 543.959 113.704 542.537L113.704 542.537Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.444 575.06C113.444 573.639 115.18 572.487 117.321 572.487L122.859 572.487C125 572.487 126.735 573.639 126.735 575.06L126.735 575.06C126.735 576.482 125 577.634 122.859 577.634L117.321 577.634C115.18 577.634 113.444 576.482 113.444 575.06L113.444 575.06Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.769 483.154C113.769 481.733 115.505 480.58 117.646 480.58L123.183 480.58C125.325 480.58 127.06 481.733 127.06 483.154L127.06 483.154C127.06 484.576 125.325 485.728 123.183 485.728L117.646 485.728C115.505 485.728 113.769 484.576 113.769 483.154L113.769 483.154Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.834 512.733C113.834 511.311 115.57 510.159 117.711 510.159L123.248 510.159C125.389 510.159 127.125 511.311 127.125 512.733L127.125 512.733C127.125 514.154 125.389 515.306 123.248 515.306L117.711 515.306C115.57 515.306 113.834 514.154 113.834 512.733L113.834 512.733Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.899 453.35C113.899 451.928 115.635 450.776 117.776 450.776L123.313 450.776C125.454 450.776 127.19 451.928 127.19 453.35L127.19 453.35C127.19 454.771 125.454 455.923 123.313 455.923L117.776 455.923C115.635 455.923 113.899 454.771 113.899 453.35L113.899 453.35Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.964 527.402C113.964 525.981 115.7 524.828 117.841 524.828L123.378 524.828C125.519 524.828 127.255 525.981 127.255 527.402L127.255 527.402C127.255 528.824 125.519 529.976 123.378 529.976L117.841 529.976C115.7 529.976 113.964 528.824 113.964 527.402L113.964 527.402Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M114.029 468.019C114.029 466.597 115.765 465.445 117.906 465.445L123.443 465.445C125.584 465.445 127.32 466.597 127.32 468.019L127.32 468.019C127.32 469.44 125.584 470.593 123.443 470.593L117.906 470.593C115.765 470.593 114.029 469.44 114.029 468.019L114.029 468.019Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.457 537.595C799.457 535.113 800.95 533.102 802.792 533.102L807.555 533.102C809.397 533.102 810.89 535.113 810.89 537.595L810.89 537.595C810.89 540.076 809.397 542.088 807.555 542.088L802.792 542.088C800.95 542.088 799.457 540.076 799.457 537.595L799.457 537.595Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M114.094 497.598C114.094 496.176 115.83 495.024 117.971 495.024L123.508 495.024C125.649 495.024 127.385 496.176 127.385 497.598L127.385 497.598C127.385 499.019 125.649 500.171 123.508 500.171L117.971 500.171C115.83 500.171 114.094 499.019 114.094 497.598L114.094 497.598Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.513 550.677C799.513 548.195 801.006 546.184 802.847 546.184L807.611 546.184C809.453 546.184 810.946 548.195 810.946 550.677L810.946 550.677C810.946 553.158 809.453 555.17 807.611 555.17L802.847 555.17C801.006 555.17 799.513 553.158 799.513 550.677L799.513 550.677Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M114.159 438.214C114.159 436.793 115.895 435.641 118.036 435.641L123.573 435.641C125.714 435.641 127.45 436.793 127.45 438.214L127.45 438.214C127.45 439.636 125.714 440.788 123.573 440.788L118.036 440.788C115.895 440.788 114.159 439.636 114.159 438.214L114.159 438.214Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.704 535.044C113.704 533.622 115.44 532.47 117.581 532.47L123.118 532.47C125.26 532.47 126.995 533.622 126.995 535.044L126.995 535.044C126.995 536.465 125.26 537.618 123.118 537.618L117.581 537.618C115.44 537.618 113.704 536.465 113.704 535.044L113.704 535.044Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.513 433.925C799.513 431.444 801.006 429.432 802.847 429.432L807.611 429.432C809.453 429.432 810.946 431.444 810.946 433.925L810.946 433.925C810.946 436.407 809.453 438.418 807.611 438.418L802.847 438.418C801.006 438.418 799.513 436.407 799.513 433.925L799.513 433.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.444 567.567C113.444 566.146 115.18 564.993 117.321 564.993L122.859 564.993C125 564.993 126.735 566.146 126.735 567.567L126.735 567.567C126.735 568.988 125 570.141 122.859 570.141L117.321 570.141C115.18 570.141 113.444 568.988 113.444 567.567L113.444 567.567Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M113.704 552.432C113.704 551.01 115.44 549.858 117.581 549.858L123.118 549.858C125.26 549.858 126.995 551.01 126.995 552.432L126.995 552.432C126.995 553.853 125.26 555.006 123.118 555.006L117.581 555.006C115.44 555.006 113.704 553.853 113.704 552.432L113.704 552.432Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M114.029 460.525C114.029 459.104 115.765 457.952 117.906 457.952L123.443 457.952C125.584 457.952 127.32 459.104 127.32 460.525L127.32 460.525C127.32 461.947 125.584 463.099 123.443 463.099L117.906 463.099C115.765 463.099 114.029 461.947 114.029 460.525L114.029 460.525Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M114.094 490.104C114.094 488.683 115.83 487.53 117.971 487.53L123.508 487.53C125.649 487.53 127.385 488.683 127.385 490.104L127.385 490.104C127.385 491.525 125.649 492.678 123.508 492.678L117.971 492.678C115.83 492.678 114.094 491.525 114.094 490.104L114.094 490.104Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M114.159 430.721C114.159 429.299 115.895 428.147 118.036 428.147L123.573 428.147C125.714 428.147 127.45 429.299 127.45 430.721L127.45 430.721C127.45 432.142 125.714 433.295 123.573 433.295L118.036 433.295C115.895 433.295 114.159 432.142 114.159 430.721L114.159 430.721Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.751 542.537C131.751 541.116 133.487 539.964 135.628 539.964L141.165 539.964C143.306 539.964 145.042 541.116 145.042 542.537L145.042 542.537C145.042 543.959 143.306 545.111 141.165 545.111L135.628 545.111C133.487 545.111 131.751 543.959 131.751 542.537L131.751 542.537Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.491 575.06C131.491 573.639 133.227 572.487 135.368 572.487L140.905 572.487C143.046 572.487 144.782 573.639 144.782 575.06L144.782 575.06C144.782 576.482 143.046 577.634 140.905 577.634L135.368 577.634C133.227 577.634 131.491 576.482 131.491 575.06L131.491 575.06Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.816 483.154C131.816 481.733 133.552 480.58 135.693 480.58L141.23 480.58C143.371 480.58 145.107 481.733 145.107 483.154L145.107 483.154C145.107 484.576 143.371 485.728 141.23 485.728L135.693 485.728C133.552 485.728 131.816 484.576 131.816 483.154L131.816 483.154Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M814.758 577.1C814.758 574.618 816.251 572.606 818.093 572.606L822.856 572.606C824.698 572.606 826.191 574.618 826.191 577.1L826.191 577.1C826.191 579.581 824.698 581.593 822.856 581.593L818.093 581.593C816.251 581.593 814.758 579.581 814.758 577.1L814.758 577.1Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.881 512.733C131.881 511.311 133.617 510.159 135.758 510.159L141.295 510.159C143.436 510.159 145.172 511.311 145.172 512.733L145.172 512.733C145.172 514.154 143.436 515.306 141.295 515.306L135.758 515.306C133.617 515.306 131.881 514.154 131.881 512.733L131.881 512.733Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M814.814 473.43C814.814 470.948 816.307 468.937 818.148 468.937L822.912 468.937C824.754 468.937 826.247 470.948 826.247 473.43L826.247 473.43C826.247 475.911 824.754 477.923 822.912 477.923L818.148 477.923C816.307 477.923 814.814 475.911 814.814 473.43L814.814 473.43Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.946 453.35C131.946 451.928 133.682 450.776 135.823 450.776L141.36 450.776C143.501 450.776 145.237 451.928 145.237 453.35L145.237 453.35C145.237 454.771 143.501 455.923 141.36 455.923L135.823 455.923C133.682 455.923 131.946 454.771 131.946 453.35L131.946 453.35Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.011 527.402C132.011 525.981 133.747 524.828 135.888 524.828L141.425 524.828C143.566 524.828 145.302 525.981 145.302 527.402L145.302 527.402C145.302 528.824 143.566 529.976 141.425 529.976L135.888 529.976C133.747 529.976 132.011 528.824 132.011 527.402L132.011 527.402Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.751 559.925C131.751 558.504 133.487 557.352 135.628 557.352L141.165 557.352C143.306 557.352 145.042 558.504 145.042 559.925L145.042 559.925C145.042 561.347 143.306 562.499 141.165 562.499L135.628 562.499C133.487 562.499 131.751 561.347 131.751 559.925L131.751 559.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.206 438.214C132.206 436.793 133.942 435.641 136.083 435.641L141.62 435.641C143.761 435.641 145.497 436.793 145.497 438.214L145.497 438.214C145.497 439.636 143.761 440.788 141.62 440.788L136.083 440.788C133.942 440.788 132.206 439.636 132.206 438.214L132.206 438.214Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.338 550.677C830.338 548.195 831.831 546.184 833.673 546.184L838.437 546.184C840.278 546.184 841.771 548.195 841.771 550.677L841.771 550.677C841.771 553.158 840.278 555.17 838.437 555.17L833.673 555.17C831.831 555.17 830.338 553.158 830.338 550.677L830.338 550.677Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M250.688 366.607L250.688 389.264L228.531 389.264L228.531 596.732L288.719 596.732L288.719 389.264L289.281 389.264L289.281 596.732L349.469 596.732L349.469 389.264L326.75 389.264L326.75 366.607L281.344 366.607L250.688 366.607Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.building
                : theme.dark.mainPage.buildings.lightBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.751 535.044C131.751 533.622 133.487 532.47 135.628 532.47L141.165 532.47C143.306 532.47 145.042 533.622 145.042 535.044L145.042 535.044C145.042 536.465 143.306 537.618 141.165 537.618L135.628 537.618C133.487 537.618 131.751 536.465 131.751 535.044L131.751 535.044Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.816 475.661C131.816 474.239 133.552 473.087 135.693 473.087L141.23 473.087C143.371 473.087 145.107 474.239 145.107 475.661L145.107 475.661C145.107 477.082 143.371 478.234 141.23 478.234L135.693 478.234C133.552 478.234 131.816 477.082 131.816 475.661L131.816 475.661Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.881 505.239C131.881 503.818 133.617 502.666 135.758 502.666L141.295 502.666C143.436 502.666 145.172 503.818 145.172 505.239L145.172 505.239C145.172 506.661 143.436 507.813 141.295 507.813L135.758 507.813C133.617 507.813 131.881 506.661 131.881 505.239L131.881 505.239Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M131.946 445.856C131.946 444.435 133.682 443.282 135.823 443.282L141.36 443.282C143.501 443.282 145.237 444.435 145.237 445.856L145.237 445.856C145.237 447.277 143.501 448.43 141.36 448.43L135.823 448.43C133.682 448.43 131.946 447.277 131.946 445.856L131.946 445.856Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.011 519.909C132.011 518.487 133.747 517.335 135.888 517.335L141.425 517.335C143.566 517.335 145.302 518.487 145.302 519.909L145.302 519.909C145.302 521.33 143.566 522.482 141.425 522.482L135.888 522.482C133.747 522.482 132.011 521.33 132.011 519.909L132.011 519.909Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M119.259 546.229L131.39 546.229L149.348 546.229L149.348 599.281L119.259 599.281L119.259 546.229Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.building
                : theme.dark.mainPage.buildings.darkBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.076 460.525C132.076 459.104 133.812 457.952 135.953 457.952L141.49 457.952C143.631 457.952 145.367 459.104 145.367 460.525L145.367 460.525C145.367 461.947 143.631 463.099 141.49 463.099L135.953 463.099C133.812 463.099 132.076 461.947 132.076 460.525L132.076 460.525Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M125.555 553.672C125.555 552.522 126.204 551.59 127.006 551.59L128.672 551.59C129.474 551.59 130.124 552.522 130.124 553.672L130.124 553.672C130.124 554.821 129.474 555.753 128.672 555.753L127.006 555.753C126.204 555.753 125.555 554.821 125.555 553.672L125.555 553.672Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.858 553.773C132.858 552.624 133.508 551.692 134.31 551.692L135.976 551.692C136.778 551.692 137.428 552.624 137.428 553.773L137.428 553.773C137.428 554.923 136.778 555.855 135.976 555.855L134.31 555.855C133.508 555.855 132.858 554.923 132.858 553.773L132.858 553.773Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.141 490.104C132.141 488.683 133.877 487.53 136.018 487.53L141.555 487.53C143.696 487.53 145.432 488.683 145.432 490.104L145.432 490.104C145.432 491.525 143.696 492.678 141.555 492.678L136.018 492.678C133.877 492.678 132.141 491.525 132.141 490.104L132.141 490.104Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.858 564.252C132.858 563.102 133.508 562.17 134.31 562.17L135.976 562.17C136.778 562.17 137.428 563.102 137.428 564.252L137.428 564.252C137.428 565.401 136.778 566.333 135.976 566.333L134.31 566.333C133.508 566.333 132.858 565.401 132.858 564.252L132.858 564.252Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M18.0565 497.098L78.2339 497.098L78.2339 603.2L18.0565 603.2L18.0565 526.025L18.0565 497.098Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.building
                : theme.dark.mainPage.buildings.darkBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M137.533 435.641L161.796 435.641L197.711 435.641L197.711 446.514L197.711 601.374L137.533 601.374L137.533 435.641Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.671 436.611L670.934 436.611L706.849 436.611L706.849 602.344L646.671 602.344L646.671 436.611Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M125.555 582.162C125.555 581.012 126.204 580.08 127.006 580.08L128.672 580.08C129.474 580.08 130.124 581.012 130.124 582.162L130.124 582.162C130.124 583.311 129.474 584.243 128.672 584.243L127.006 584.243C126.204 584.243 125.555 583.311 125.555 582.162L125.555 582.162Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M411.322 370.935L428.926 370.935L454.985 370.935L454.985 609.603L434.564 609.603L411.322 609.603L411.322 370.935Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.858 582.264C132.858 581.114 133.508 580.182 134.31 580.182L135.976 580.182C136.778 580.182 137.428 581.114 137.428 582.264L137.428 582.264C137.428 583.413 136.778 584.345 135.976 584.345L134.31 584.345C133.508 584.345 132.858 583.413 132.858 582.264L132.858 582.264Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M149.878 447.546L157.87 447.546L157.87 457.885L149.878 457.885L149.878 447.546Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M80.19 570.697L85.5785 570.697L85.5785 575.051L80.19 575.051L80.19 570.697Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M80.19 583.448L85.5785 583.448L85.5785 587.802L80.19 587.802L80.19 583.448Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M418.825 400.271L424.533 400.271L424.533 414.502L418.825 414.502L418.825 400.271Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M441.773 380.522L447.481 380.522L447.481 394.753L441.773 394.753L441.773 380.522Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M370.317 417.193L392.323 417.193L424.896 417.193L424.896 609.603L399.37 609.603L370.317 609.603L370.317 417.193Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M161.669 447.546L178.956 447.546L178.956 457.885L161.669 457.885L161.669 447.546Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M125.555 574.721C125.555 573.571 126.204 572.64 127.006 572.64L128.672 572.64C129.474 572.64 130.124 573.571 130.124 574.721L130.124 574.721C130.124 575.871 129.474 576.802 128.672 576.802L127.006 576.802C126.204 576.802 125.555 575.871 125.555 574.721L125.555 574.721Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M132.858 574.823C132.858 573.673 133.508 572.741 134.31 572.741L135.976 572.741C136.778 572.741 137.428 573.673 137.428 574.823L137.428 574.823C137.428 575.972 136.778 576.904 135.976 576.904L134.31 576.904C133.508 576.904 132.858 575.972 132.858 574.823L132.858 574.823Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M665.93 451.5L686.041 451.5L686.041 461.839L665.93 461.839L665.93 451.5Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M125.555 592.733C125.555 591.583 126.204 590.651 127.006 590.651L128.672 590.651C129.474 590.651 130.124 591.583 130.124 592.733L130.124 592.733C130.124 593.882 129.474 594.814 128.672 594.814L127.006 594.814C126.204 594.814 125.555 593.882 125.555 592.733L125.555 592.733Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M427.246 400.271L439.591 400.271L439.591 414.502L427.246 414.502L427.246 400.271Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M427.246 421.226L439.591 421.226L439.591 435.457L427.246 435.457L427.246 421.226Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M149.878 463.436L157.87 463.436L157.87 473.774L149.878 473.774L149.878 463.436Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M418.825 380.465L424.533 380.465L424.533 394.697L418.825 394.697L418.825 380.465Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M80.3012 564.912L85.6896 564.912L85.6896 569.266L80.3012 569.266L80.3012 564.912Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M441.773 421.226L447.481 421.226L447.481 435.457L441.773 435.457L441.773 421.226Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 463.436L189.839 463.436L189.839 473.774L181.847 473.774L181.847 463.436Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M689.403 467.389L698.701 467.389L698.701 477.728L689.403 477.728L689.403 467.389Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M5.39333 552.067L14.0343 552.067L14.0343 558.127L5.39333 558.127L5.39333 552.067Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M689.595 451.5L698.893 451.5L698.893 461.839L689.595 461.839L689.595 451.5Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M5.21513 587.179L13.8561 587.179L13.8561 593.24L5.21513 593.24L5.21513 587.179Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M5.39333 569.814L14.0343 569.814L14.0343 575.874L5.39333 575.874L5.39333 569.814Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M441.773 400.271L447.481 400.271L447.481 414.502L441.773 414.502L441.773 400.271Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M5.21513 579.128L13.8561 579.128L13.8561 585.188L5.21513 585.188L5.21513 579.128Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 463.436L178.956 463.436L178.956 473.774L161.669 473.774L161.669 463.436Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M427.246 380.465L439.591 380.465L439.591 394.697L427.246 394.697L427.246 380.465Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M814.981 537.595C814.981 535.113 816.474 533.102 818.316 533.102L823.08 533.102C824.922 533.102 826.415 535.113 826.415 537.595L826.415 537.595C826.415 540.076 824.922 542.088 823.08 542.088L818.316 542.088C816.474 542.088 814.981 540.076 814.981 537.595L814.981 537.595Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.562 433.925C830.562 431.444 832.055 429.432 833.897 429.432L838.66 429.432C840.502 429.432 841.995 431.444 841.995 433.925L841.995 433.925C841.995 436.407 840.502 438.418 838.66 438.418L833.897 438.418C832.055 438.418 830.562 436.407 830.562 433.925L830.562 433.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M799.513 589.627C799.513 587.146 801.006 585.134 802.847 585.134L807.611 585.134C809.453 585.134 810.946 587.146 810.946 589.627L810.946 589.627C810.946 592.109 809.453 594.12 807.611 594.12L802.847 594.12C801.006 594.12 799.513 592.109 799.513 589.627L799.513 589.627Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M149.878 480.547L157.87 480.547L157.87 490.886L149.878 490.886L149.878 480.547Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 480.547L189.839 480.547L189.839 490.886L181.847 490.886L181.847 480.547Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M238.294 498.478C238.294 495.898 239.787 493.807 241.629 493.807L246.392 493.807C248.234 493.807 249.727 495.898 249.727 498.478L249.727 498.478C249.727 501.057 248.234 503.149 246.392 503.149L241.629 503.149C239.787 503.149 238.294 501.057 238.294 498.478L238.294 498.478Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M296.944 498.478C296.944 495.898 298.437 493.807 300.279 493.807L305.043 493.807C306.885 493.807 308.378 495.898 308.378 498.478L308.378 498.478C308.378 501.057 306.885 503.149 305.043 503.149L300.279 503.149C298.437 503.149 296.944 501.057 296.944 498.478L296.944 498.478Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.506 499.039C830.506 496.558 831.999 494.546 833.841 494.546L838.604 494.546C840.446 494.546 841.939 496.558 841.939 499.039L841.939 499.039C841.939 501.521 840.446 503.532 838.604 503.532L833.841 503.532C831.999 503.532 830.506 501.521 830.506 499.039L830.506 499.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.35 552.16C238.35 549.58 239.843 547.489 241.685 547.489L246.448 547.489C248.29 547.489 249.783 549.58 249.783 552.16L249.783 552.16C249.783 554.739 248.29 556.831 246.448 556.831L241.685 556.831C239.843 556.831 238.35 554.739 238.35 552.16L238.35 552.16Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297 552.16C297 549.58 298.493 547.489 300.335 547.489L305.099 547.489C306.94 547.489 308.433 549.58 308.433 552.16L308.433 552.16C308.433 554.739 306.94 556.831 305.099 556.831L300.335 556.831C298.493 556.831 297 554.739 297 552.16L297 552.16Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M289 384.695C289 382.359 290.225 380.465 291.735 380.465L295.643 380.465C297.154 380.465 298.378 382.359 298.378 384.695L298.378 384.695C298.378 387.03 297.154 388.924 295.643 388.924L291.735 388.924C290.225 388.924 289 387.03 289 384.695L289 384.695Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M815.037 433.925C815.037 431.444 816.53 429.432 818.372 429.432L823.136 429.432C824.977 429.432 826.47 431.444 826.47 433.925L826.47 433.925C826.47 436.407 824.977 438.418 823.136 438.418L818.372 438.418C816.53 438.418 815.037 436.407 815.037 433.925L815.037 433.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.406 444.386C238.406 441.806 239.899 439.715 241.741 439.715L246.504 439.715C248.346 439.715 249.839 441.806 249.839 444.386L249.839 444.386C249.839 446.965 248.346 449.057 246.504 449.057L241.741 449.057C239.899 449.057 238.406 446.965 238.406 444.386L238.406 444.386Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297.056 444.386C297.056 441.806 298.549 439.715 300.391 439.715L305.155 439.715C306.996 439.715 308.489 441.806 308.489 444.386L308.489 444.386C308.489 446.965 306.996 449.057 305.155 449.057L300.391 449.057C298.549 449.057 297.056 446.965 297.056 444.386L297.056 444.386Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.517 471.009C238.517 468.429 240.011 466.338 241.852 466.338L246.616 466.338C248.458 466.338 249.951 468.429 249.951 471.009L249.951 471.009C249.951 473.589 248.458 475.68 246.616 475.68L241.852 475.68C240.011 475.68 238.517 473.589 238.517 471.009L238.517 471.009Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297.168 471.009C297.168 468.429 298.661 466.338 300.503 466.338L305.266 466.338C307.108 466.338 308.601 468.429 308.601 471.009L308.601 471.009C308.601 473.589 307.108 475.68 305.266 475.68L300.503 475.68C298.661 475.68 297.168 473.589 297.168 471.009L297.168 471.009Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.35 538.56C238.35 535.98 239.843 533.889 241.685 533.889L246.448 533.889C248.29 533.889 249.783 535.98 249.783 538.56L249.783 538.56C249.783 541.139 248.29 543.231 246.448 543.231L241.685 543.231C239.843 543.231 238.35 541.139 238.35 538.56L238.35 538.56Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297 538.56C297 535.98 298.493 533.889 300.335 533.889L305.099 533.889C306.94 533.889 308.433 535.98 308.433 538.56L308.433 538.56C308.433 541.139 306.94 543.231 305.099 543.231L300.335 543.231C298.493 543.231 297 541.139 297 538.56L297 538.56Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.406 430.786C238.406 428.206 239.899 426.115 241.741 426.115L246.504 426.115C248.346 426.115 249.839 428.206 249.839 430.786L249.839 430.786C249.839 433.365 248.346 435.457 246.504 435.457L241.741 435.457C239.899 435.457 238.406 433.365 238.406 430.786L238.406 430.786Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.287 403.317C269.287 400.737 270.78 398.646 272.622 398.646L277.386 398.646C279.227 398.646 280.72 400.737 280.72 403.317L280.72 403.317C280.72 405.897 279.227 407.988 277.386 407.988L272.622 407.988C270.78 407.988 269.287 405.897 269.287 403.317L269.287 403.317Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297.056 430.786C297.056 428.206 298.549 426.115 300.391 426.115L305.155 426.115C306.996 426.115 308.489 428.206 308.489 430.786L308.489 430.786C308.489 433.365 306.996 435.457 305.155 435.457L300.391 435.457C298.549 435.457 297.056 433.365 297.056 430.786L297.056 430.786Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.462 565.183C238.462 562.603 239.955 560.512 241.796 560.512L246.56 560.512C248.402 560.512 249.895 562.603 249.895 565.183L249.895 565.183C249.895 567.763 248.402 569.854 246.56 569.854L241.796 569.854C239.955 569.854 238.462 567.763 238.462 565.183L238.462 565.183Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M296.888 578.783C296.888 576.203 298.381 574.112 300.223 574.112L304.987 574.112C306.829 574.112 308.322 576.203 308.322 578.783L308.322 578.783C308.322 581.363 306.829 583.454 304.987 583.454L300.223 583.454C298.381 583.454 296.888 581.363 296.888 578.783L296.888 578.783Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.238 624.209C238.238 621.629 239.731 619.538 241.573 619.538L246.336 619.538C248.178 619.538 249.671 621.629 249.671 624.209L249.671 624.209C249.671 626.789 248.178 628.88 246.336 628.88L241.573 628.88C239.731 628.88 238.238 626.789 238.238 624.209L238.238 624.209Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M276.423 372.381C276.423 370.045 277.647 368.152 279.158 368.152L283.065 368.152C284.576 368.152 285.801 370.045 285.801 372.381L285.801 372.381C285.801 374.717 284.576 376.61 283.065 376.61L279.158 376.61C277.647 376.61 276.423 374.717 276.423 372.381L276.423 372.381Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M267.044 384.695C267.044 382.359 268.269 380.465 269.78 380.465L273.687 380.465C275.198 380.465 276.423 382.359 276.423 384.695L276.423 384.695C276.423 387.03 275.198 388.924 273.687 388.924L269.78 388.924C268.269 388.924 267.044 387.03 267.044 384.695L267.044 384.695Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M253.763 384.695C253.763 382.359 254.987 380.465 256.498 380.465L260.405 380.465C261.916 380.465 263.141 382.359 263.141 384.695L263.141 384.695C263.141 387.03 261.916 388.924 260.405 388.924L256.498 388.924C254.987 388.924 253.763 387.03 253.763 384.695L253.763 384.695Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M296.888 624.209C296.888 621.629 298.381 619.538 300.223 619.538L304.987 619.538C306.829 619.538 308.322 621.629 308.322 624.209L308.322 624.209C308.322 626.789 306.829 628.88 304.987 628.88L300.223 628.88C298.381 628.88 296.888 626.789 296.888 624.209L296.888 624.209Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.573 511.091C238.573 508.511 240.066 506.42 241.908 506.42L246.672 506.42C248.514 506.42 250.007 508.511 250.007 511.091L250.007 511.091C250.007 513.671 248.514 515.762 246.672 515.762L241.908 515.762C240.066 515.762 238.573 513.671 238.573 511.091L238.573 511.091Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297.224 511.091C297.224 508.511 298.717 506.42 300.559 506.42L305.322 506.42C307.164 506.42 308.657 508.511 308.657 511.091L308.657 511.091C308.657 513.671 307.164 515.762 305.322 515.762L300.559 515.762C298.717 515.762 297.224 513.671 297.224 511.091L297.224 511.091Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.678 524.691C269.678 522.111 271.171 520.02 273.013 520.02L277.777 520.02C279.619 520.02 281.112 522.111 281.112 524.691L281.112 524.691C281.112 527.271 279.619 529.362 277.777 529.362L273.013 529.362C271.171 529.362 269.678 527.271 269.678 524.691L269.678 524.691Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.629 403.317C238.629 400.737 240.122 398.646 241.964 398.646L246.728 398.646C248.57 398.646 250.063 400.737 250.063 403.317L250.063 403.317C250.063 405.897 248.57 407.988 246.728 407.988L241.964 407.988C240.122 407.988 238.629 405.897 238.629 403.317L238.629 403.317Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.282 577.1C830.282 574.618 831.775 572.606 833.617 572.606L838.381 572.606C840.222 572.606 841.716 574.618 841.716 577.1L841.716 577.1C841.716 579.581 840.222 581.593 838.381 581.593L833.617 581.593C831.775 581.593 830.282 579.581 830.282 577.1L830.282 577.1Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M297.28 403.317C297.28 400.737 298.773 398.646 300.614 398.646L305.378 398.646C307.22 398.646 308.713 400.737 308.713 403.317L308.713 403.317C308.713 405.897 307.22 407.988 305.378 407.988L300.614 407.988C298.773 407.988 297.28 405.897 297.28 403.317L297.28 403.317Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M253.763 606.252C253.763 603.672 255.256 601.581 257.097 601.581L261.861 601.581C263.703 601.581 265.196 603.672 265.196 606.252L265.196 606.252C265.196 608.831 263.703 610.923 261.861 610.923L257.097 610.923C255.256 610.923 253.763 608.831 253.763 606.252L253.763 606.252Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M312.413 606.252C312.413 603.672 313.906 601.581 315.748 601.581L320.511 601.581C322.353 601.581 323.846 603.672 323.846 606.252L323.846 606.252C323.846 608.831 322.353 610.923 320.511 610.923L315.748 610.923C313.906 610.923 312.413 608.831 312.413 606.252L312.413 606.252Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M253.818 498.478C253.818 495.898 255.311 493.807 257.153 493.807L261.917 493.807C263.759 493.807 265.252 495.898 265.252 498.478L265.252 498.478C265.252 501.057 263.759 503.149 261.917 503.149L257.153 503.149C255.311 503.149 253.818 501.057 253.818 498.478L253.818 498.478Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.287 471.009C269.287 468.429 270.78 466.338 272.622 466.338L277.386 466.338C279.227 466.338 280.72 468.429 280.72 471.009L280.72 471.009C280.72 473.589 279.227 475.68 277.386 475.68L272.622 475.68C270.78 475.68 269.287 473.589 269.287 471.009L269.287 471.009Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M312.469 498.478C312.469 495.898 313.962 493.807 315.804 493.807L320.567 493.807C322.409 493.807 323.902 495.898 323.902 498.478L323.902 498.478C323.902 501.057 322.409 503.149 320.567 503.149L315.804 503.149C313.962 503.149 312.469 501.057 312.469 498.478L312.469 498.478Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M378.541 424.608L385.911 424.608L385.911 439.773L378.541 439.773L378.541 424.608Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M253.874 552.16C253.874 549.58 255.367 547.489 257.209 547.489L261.973 547.489C263.815 547.489 265.308 549.58 265.308 552.16L265.308 552.16C265.308 554.739 263.815 556.831 261.973 556.831L257.209 556.831C255.367 556.831 253.874 554.739 253.874 552.16L253.874 552.16Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M312.525 552.16C312.525 549.58 314.018 547.489 315.86 547.489L320.623 547.489C322.465 547.489 323.958 549.58 323.958 552.16L323.958 552.16C323.958 554.739 322.465 556.831 320.623 556.831L315.86 556.831C314.018 556.831 312.525 554.739 312.525 552.16L312.525 552.16Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M253.93 444.386C253.93 441.806 255.423 439.715 257.265 439.715L262.029 439.715C263.87 439.715 265.364 441.806 265.364 444.386L265.364 444.386C265.364 446.965 263.87 449.057 262.029 449.057L257.265 449.057C255.423 449.057 253.93 446.965 253.93 444.386L253.93 444.386Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M378.389 512.471L385.759 512.471L385.759 527.635L378.389 527.635L378.389 512.471Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M312.581 444.386C312.581 441.806 314.074 439.715 315.915 439.715L320.679 439.715C322.521 439.715 324.014 441.806 324.014 444.386L324.014 444.386C324.014 446.965 322.521 449.057 320.679 449.057L315.915 449.057C314.074 449.057 312.581 446.965 312.581 444.386L312.581 444.386Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M312.636 578.783C312.636 576.203 314.13 574.112 315.971 574.112L320.735 574.112C322.577 574.112 324.07 576.203 324.07 578.783L324.07 578.783C324.07 581.363 322.577 583.454 320.735 583.454L315.971 583.454C314.13 583.454 312.636 581.363 312.636 578.783L312.636 578.783Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M254.042 471.009C254.042 468.429 255.535 466.338 257.377 466.338L262.14 466.338C263.982 466.338 265.475 468.429 265.475 471.009L265.475 471.009C265.475 473.589 263.982 475.68 262.14 475.68L257.377 475.68C255.535 475.68 254.042 473.589 254.042 471.009L254.042 471.009Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M254.098 524.691C254.098 522.111 255.591 520.02 257.433 520.02L262.196 520.02C264.038 520.02 265.531 522.111 265.531 524.691L265.531 524.691C265.531 527.271 264.038 529.362 262.196 529.362L257.433 529.362C255.591 529.362 254.098 527.271 254.098 524.691L254.098 524.691Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M238.238 606.252C238.238 603.672 239.731 601.581 241.573 601.581L246.336 601.581C248.178 601.581 249.671 603.672 249.671 606.252L249.671 606.252C249.671 608.831 248.178 610.923 246.336 610.923L241.573 610.923C239.731 610.923 238.238 608.831 238.238 606.252L238.238 606.252Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M378.389 556.88L385.759 556.88L385.759 572.045L378.389 572.045L378.389 556.88Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M312.748 524.691C312.748 522.111 314.241 520.02 316.083 520.02L320.847 520.02C322.689 520.02 324.182 522.111 324.182 524.691L324.182 524.691C324.182 527.271 322.689 529.362 320.847 529.362L316.083 529.362C314.241 529.362 312.748 527.271 312.748 524.691L312.748 524.691Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M305.09 384.695C305.09 382.359 306.097 380.465 307.34 380.465L310.554 380.465C311.797 380.465 312.804 382.359 312.804 384.695L312.804 384.695C312.804 387.03 311.797 388.924 310.554 388.924L307.34 388.924C306.097 388.924 305.09 387.03 305.09 384.695L305.09 384.695Z"
            fill="#42554d"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M314.272 372.381C314.272 370.045 315.28 368.152 316.522 368.152L319.737 368.152C320.979 368.152 321.987 370.045 321.987 372.381L321.987 372.381C321.987 374.717 320.979 376.61 319.737 376.61L316.522 376.61C315.28 376.61 314.272 374.717 314.272 372.381L314.272 372.381Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.562 447.007C830.562 444.526 832.055 442.514 833.897 442.514L838.66 442.514C840.502 442.514 841.995 444.526 841.995 447.007L841.995 447.007C841.995 449.489 840.502 451.5 838.66 451.5L833.897 451.5C832.055 451.5 830.562 449.489 830.562 447.007L830.562 447.007Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M389.415 424.608L405.357 424.608L405.357 439.773L389.415 439.773L389.415 424.608Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M328.105 524.691C328.105 522.111 329.598 520.02 331.44 520.02L336.204 520.02C338.045 520.02 339.538 522.111 339.538 524.691L339.538 524.691C339.538 527.271 338.045 529.362 336.204 529.362L331.44 529.362C329.598 529.362 328.105 527.271 328.105 524.691L328.105 524.691Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M254.154 416.917C254.154 414.337 255.647 412.246 257.489 412.246L262.252 412.246C264.094 412.246 265.587 414.337 265.587 416.917L265.587 416.917C265.587 419.497 264.094 421.588 262.252 421.588L257.489 421.588C255.647 421.588 254.154 419.497 254.154 416.917L254.154 416.917Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M312.804 416.917C312.804 414.337 314.297 412.246 316.139 412.246L320.903 412.246C322.744 412.246 324.237 414.337 324.237 416.917L324.237 416.917C324.237 419.497 322.744 421.588 320.903 421.588L316.139 421.588C314.297 421.588 312.804 419.497 312.804 416.917L312.804 416.917Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M253.763 588.745C253.763 586.165 255.256 584.074 257.097 584.074L261.861 584.074C263.703 584.074 265.196 586.165 265.196 588.745L265.196 588.745C265.196 591.324 263.703 593.416 261.861 593.416L257.097 593.416C255.256 593.416 253.763 591.324 253.763 588.745L253.763 588.745Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M389.263 512.471L405.205 512.471L405.205 527.635L389.263 527.635L389.263 512.471Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M830.226 512.38C830.226 509.898 831.719 507.887 833.561 507.887L838.325 507.887C840.167 507.887 841.66 509.898 841.66 512.38L841.66 512.38C841.66 514.861 840.167 516.873 838.325 516.873L833.561 516.873C831.719 516.873 830.226 514.861 830.226 512.38L830.226 512.38Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M253.763 624.209C253.763 621.629 255.256 619.538 257.097 619.538L261.861 619.538C263.703 619.538 265.196 621.629 265.196 624.209L265.196 624.209C265.196 626.789 263.703 628.88 261.861 628.88L257.097 628.88C255.256 628.88 253.763 626.789 253.763 624.209L253.763 624.209Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M254.042 457.409C254.042 454.829 255.535 452.738 257.377 452.738L262.14 452.738C263.982 452.738 265.475 454.829 265.475 457.409L265.475 457.409C265.475 459.989 263.982 462.08 262.14 462.08L257.377 462.08C255.535 462.08 254.042 459.989 254.042 457.409L254.042 457.409Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M389.415 469.018L405.357 469.018L405.357 484.182L389.415 484.182L389.415 469.018Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M312.692 457.409C312.692 454.829 314.185 452.738 316.027 452.738L320.791 452.738C322.633 452.738 324.126 454.829 324.126 457.409L324.126 457.409C324.126 459.989 322.633 462.08 320.791 462.08L316.027 462.08C314.185 462.08 312.692 459.989 312.692 457.409L312.692 457.409Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M254.098 511.091C254.098 508.511 255.591 506.42 257.433 506.42L262.196 506.42C264.038 506.42 265.531 508.511 265.531 511.091L265.531 511.091C265.531 513.671 264.038 515.762 262.196 515.762L257.433 515.762C255.591 515.762 254.098 513.671 254.098 511.091L254.098 511.091Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.282 564.018C830.282 561.536 831.775 559.524 833.617 559.524L838.381 559.524C840.222 559.524 841.716 561.536 841.716 564.018L841.716 564.018C841.716 566.499 840.222 568.511 838.381 568.511L833.617 568.511C831.775 568.511 830.282 566.499 830.282 564.018L830.282 564.018Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M389.263 556.88L405.205 556.88L405.205 572.045L389.263 572.045L389.263 556.88Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M815.037 563.562C815.037 561.08 816.53 559.068 818.372 559.068L823.136 559.068C824.977 559.068 826.47 561.08 826.47 563.562L826.47 563.562C826.47 566.043 824.977 568.055 823.136 568.055L818.372 568.055C816.53 568.055 815.037 566.043 815.037 563.562L815.037 563.562Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M328.273 471.009C328.273 468.429 329.766 466.338 331.608 466.338L336.371 466.338C338.213 466.338 339.706 468.429 339.706 471.009L339.706 471.009C339.706 473.589 338.213 475.68 336.371 475.68L331.608 475.68C329.766 475.68 328.273 473.589 328.273 471.009L328.273 471.009Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M254.154 403.317C254.154 400.737 255.647 398.646 257.489 398.646L262.252 398.646C264.094 398.646 265.587 400.737 265.587 403.317L265.587 403.317C265.587 405.897 264.094 407.988 262.252 407.988L257.489 407.988C255.647 407.988 254.154 405.897 254.154 403.317L254.154 403.317Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.287 606.252C269.287 603.672 270.78 601.581 272.622 601.581L277.386 601.581C279.227 601.581 280.72 603.672 280.72 606.252L280.72 606.252C280.72 608.831 279.227 610.923 277.386 610.923L272.622 610.923C270.78 610.923 269.287 608.831 269.287 606.252L269.287 606.252Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M327.937 606.252C327.937 603.672 329.43 601.581 331.272 601.581L336.036 601.581C337.878 601.581 339.371 603.672 339.371 606.252L339.371 606.252C339.371 608.831 337.878 610.923 336.036 610.923L331.272 610.923C329.43 610.923 327.937 608.831 327.937 606.252L327.937 606.252Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.343 498.478C269.343 495.898 270.836 493.807 272.678 493.807L277.441 493.807C279.283 493.807 280.776 495.898 280.776 498.478L280.776 498.478C280.776 501.057 279.283 503.149 277.441 503.149L272.678 503.149C270.836 503.149 269.343 501.057 269.343 498.478L269.343 498.478Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M378.389 535.776L385.759 535.776L385.759 550.941L378.389 550.941L378.389 535.776Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M327.993 498.478C327.993 495.898 329.486 493.807 331.328 493.807L336.092 493.807C337.934 493.807 339.427 495.898 339.427 498.478L339.427 498.478C339.427 501.057 337.934 503.149 336.092 503.149L331.328 503.149C329.486 503.149 327.993 501.057 327.993 498.478L327.993 498.478Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M328.049 552.16C328.049 549.58 329.542 547.489 331.384 547.489L336.148 547.489C337.989 547.489 339.483 549.58 339.483 552.16L339.483 552.16C339.483 554.739 337.989 556.831 336.148 556.831L331.384 556.831C329.542 556.831 328.049 554.739 328.049 552.16L328.049 552.16Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.455 444.386C269.455 441.806 270.948 439.715 272.79 439.715L277.553 439.715C279.395 439.715 280.888 441.806 280.888 444.386L280.888 444.386C280.888 446.965 279.395 449.057 277.553 449.057L272.79 449.057C270.948 449.057 269.455 446.965 269.455 444.386L269.455 444.386Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M378.541 492.323L385.911 492.323L385.911 507.487L378.541 507.487L378.541 492.323Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M328.105 444.386C328.105 441.806 329.598 439.715 331.44 439.715L336.204 439.715C338.045 439.715 339.538 441.806 339.538 444.386L339.538 444.386C339.538 446.965 338.045 449.057 336.204 449.057L331.44 449.057C329.598 449.057 328.105 446.965 328.105 444.386L328.105 444.386Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.678 416.917C269.678 414.337 271.171 412.246 273.013 412.246L277.777 412.246C279.619 412.246 281.112 414.337 281.112 416.917L281.112 416.917C281.112 419.497 279.619 421.588 277.777 421.588L273.013 421.588C271.171 421.588 269.678 419.497 269.678 416.917L269.678 416.917Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M814.869 460.348C814.869 457.866 816.363 455.855 818.204 455.855L822.968 455.855C824.81 455.855 826.303 457.866 826.303 460.348L826.303 460.348C826.303 462.829 824.81 464.841 822.968 464.841L818.204 464.841C816.363 464.841 814.869 462.829 814.869 460.348L814.869 460.348Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M378.389 580.186L385.759 580.186L385.759 595.35L378.389 595.35L378.389 580.186Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M328.329 416.917C328.329 414.337 329.822 412.246 331.664 412.246L336.427 412.246C338.269 412.246 339.762 414.337 339.762 416.917L339.762 416.917C339.762 419.497 338.269 421.588 336.427 421.588L331.664 421.588C329.822 421.588 328.329 419.497 328.329 416.917L328.329 416.917Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M327.937 588.998C327.937 586.419 329.43 584.327 331.272 584.327L336.036 584.327C337.878 584.327 339.371 586.419 339.371 588.998L339.371 588.998C339.371 591.578 337.878 593.669 336.036 593.669L331.272 593.669C329.43 593.669 327.937 591.578 327.937 588.998L327.937 588.998Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.343 484.878C269.343 482.298 270.836 480.207 272.678 480.207L277.441 480.207C279.283 480.207 280.776 482.298 280.776 484.878L280.776 484.878C280.776 487.458 279.283 489.549 277.441 489.549L272.678 489.549C270.836 489.549 269.343 487.458 269.343 484.878L269.343 484.878Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.394 589.627C830.394 587.146 831.887 585.134 833.729 585.134L838.492 585.134C840.334 585.134 841.827 587.146 841.827 589.627L841.827 589.627C841.827 592.109 840.334 594.12 838.492 594.12L833.729 594.12C831.887 594.12 830.394 592.109 830.394 589.627L830.394 589.627Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M408.023 447.914L415.393 447.914L415.393 463.078L408.023 463.078L408.023 447.914Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M327.993 484.878C327.993 482.298 329.486 480.207 331.328 480.207L336.092 480.207C337.934 480.207 339.427 482.298 339.427 484.878L339.427 484.878C339.427 487.458 337.934 489.549 336.092 489.549L331.328 489.549C329.486 489.549 327.993 487.458 327.993 484.878L327.993 484.878Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.399 538.56C269.399 535.98 270.892 533.889 272.734 533.889L277.497 533.889C279.339 533.889 280.832 535.98 280.832 538.56L280.832 538.56C280.832 541.139 279.339 543.231 277.497 543.231L272.734 543.231C270.892 543.231 269.399 541.139 269.399 538.56L269.399 538.56Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M328.049 538.56C328.049 535.98 329.542 533.889 331.384 533.889L336.148 533.889C337.989 533.889 339.483 535.98 339.483 538.56L339.483 538.56C339.483 541.139 337.989 543.231 336.148 543.231L331.384 543.231C329.542 543.231 328.049 541.139 328.049 538.56L328.049 538.56Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.455 430.786C269.455 428.206 270.948 426.115 272.79 426.115L277.553 426.115C279.395 426.115 280.888 428.206 280.888 430.786L280.888 430.786C280.888 433.365 279.395 435.457 277.553 435.457L272.79 435.457C270.948 435.457 269.455 433.365 269.455 430.786L269.455 430.786Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.45 485.957C830.45 483.476 831.943 481.464 833.785 481.464L838.548 481.464C840.39 481.464 841.883 483.476 841.883 485.957L841.883 485.957C841.883 488.439 840.39 490.45 838.548 490.45L833.785 490.45C831.943 490.45 830.45 488.439 830.45 485.957L830.45 485.957Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M328.105 430.786C328.105 428.206 329.598 426.115 331.44 426.115L336.204 426.115C338.045 426.115 339.538 428.206 339.538 430.786L339.538 430.786C339.538 433.365 338.045 435.457 336.204 435.457L331.44 435.457C329.598 435.457 328.105 433.365 328.105 430.786L328.105 430.786Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.511 565.183C269.511 562.603 271.004 560.512 272.845 560.512L277.609 560.512C279.451 560.512 280.944 562.603 280.944 565.183L280.944 565.183C280.944 567.763 279.451 569.854 277.609 569.854L272.845 569.854C271.004 569.854 269.511 567.763 269.511 565.183L269.511 565.183Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M328.161 565.183C328.161 562.603 329.654 560.512 331.496 560.512L336.259 560.512C338.101 560.512 339.594 562.603 339.594 565.183L339.594 565.183C339.594 567.763 338.101 569.854 336.259 569.854L331.496 569.854C329.654 569.854 328.161 567.763 328.161 565.183L328.161 565.183Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M830.506 537.595C830.506 535.113 831.999 533.102 833.841 533.102L838.604 533.102C840.446 533.102 841.939 535.113 841.939 537.595L841.939 537.595C841.939 540.076 840.446 542.088 838.604 542.088L833.841 542.088C831.999 542.088 830.506 540.076 830.506 537.595L830.506 537.595Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M269.622 511.091C269.622 508.511 271.115 506.42 272.957 506.42L277.721 506.42C279.563 506.42 281.056 508.511 281.056 511.091L281.056 511.091C281.056 513.671 279.563 515.762 277.721 515.762L272.957 515.762C271.115 515.762 269.622 513.671 269.622 511.091L269.622 511.091Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M328.273 511.091C328.273 508.511 329.766 506.42 331.608 506.42L336.371 506.42C338.213 506.42 339.706 508.511 339.706 511.091L339.706 511.091C339.706 513.671 338.213 515.762 336.371 515.762L331.608 515.762C329.766 515.762 328.273 513.671 328.273 511.091L328.273 511.091Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M181.847 496.84L189.839 496.84L189.839 507.179L181.847 507.179L181.847 496.84Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M149.878 512.464L157.87 512.464L157.87 522.803L149.878 522.803L149.878 512.464Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M408.023 556.88L415.393 556.88L415.393 572.045L408.023 572.045L408.023 556.88Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 512.464L178.956 512.464L178.956 522.803L161.669 522.803L161.669 512.464Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 528.925L189.839 528.925L189.839 539.264L181.847 539.264L181.847 528.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 528.925L178.956 528.925L178.956 539.264L161.669 539.264L161.669 528.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M408.023 492.323L415.393 492.323L415.393 507.487L408.023 507.487L408.023 492.323Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M149.878 544.308L157.87 544.308L157.87 554.647L149.878 554.647L149.878 544.308Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 544.308L189.839 544.308L189.839 554.647L181.847 554.647L181.847 544.308Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 544.308L178.956 544.308L178.956 554.647L161.669 554.647L161.669 544.308Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 560.163L189.839 560.163L189.839 570.502L181.847 570.502L181.847 560.163Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 560.163L178.956 560.163L178.956 570.502L161.669 570.502L161.669 560.163Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M149.878 575.704L157.87 575.704L157.87 586.043L149.878 586.043L149.878 575.704Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 575.704L189.839 575.704L189.839 586.043L181.847 586.043L181.847 575.704Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 575.704L178.956 575.704L178.956 586.043L161.669 586.043L161.669 575.704Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M389.263 535.776L405.205 535.776L405.205 550.941L389.263 550.941L389.263 535.776Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M149.878 592.392L157.87 592.392L157.87 602.731L149.878 602.731L149.878 592.392Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M181.847 592.392L189.839 592.392L189.839 602.731L181.847 602.731L181.847 592.392Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M161.669 592.392L178.956 592.392L178.956 602.731L161.669 602.731L161.669 592.392Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M389.415 492.323L405.357 492.323L405.357 507.487L389.415 507.487L389.415 492.323Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M386.859 436.611L417.531 436.611L462.933 436.611L462.933 602.344L386.859 602.344L386.859 436.611Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.building
                : theme.dark.mainPage.buildings.darkBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M152.151 548.437L195.377 526.003L240.71 548.437L240.71 601.488L152.151 601.488L152.151 548.437Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.building
                : theme.dark.mainPage.buildings.darkBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M491.585 305.259L523.112 305.259L569.779 305.259L569.779 602.344L491.585 602.344L491.585 305.259Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.building
                : theme.dark.mainPage.buildings.lightBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M590.636 305.259L622.163 305.259L668.83 305.259L668.83 602.344L590.636 602.344L590.636 305.259Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.building
                : theme.dark.mainPage.buildings.lightBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M732.171 539.985L782.472 503.236L832.773 539.985L832.773 609.339L732.171 609.339L732.171 539.985Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.building
                : theme.dark.mainPage.buildings.darkBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <g opacity="1" />
          <path
            d="M28.1966 516.824C28.1966 515.146 28.8466 513.785 29.6483 513.785L31.3145 513.785C32.1163 513.785 32.7662 515.146 32.7662 516.824L32.7662 516.824C32.7662 518.503 32.1163 519.864 31.3145 519.864L29.6483 519.864C28.8466 519.864 28.1966 518.503 28.1966 516.824L28.1966 516.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M394.606 453.103C394.606 450.889 395.256 449.094 396.058 449.094L397.724 449.094C398.526 449.094 399.176 450.889 399.176 453.103L399.176 453.103C399.176 455.317 398.526 457.112 397.724 457.112L396.058 457.112C395.256 457.112 394.606 455.317 394.606 453.103L394.606 453.103Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M62.8549 517.193C62.8549 515.514 63.5049 514.153 64.3066 514.153L65.9728 514.153C66.7745 514.153 67.4245 515.514 67.4245 517.193L67.4245 517.193C67.4245 518.872 66.7745 520.233 65.9728 520.233L64.3066 520.233C63.5049 520.233 62.8549 518.872 62.8549 517.193L62.8549 517.193Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M782.122 544.514C782.122 542.125 783.018 540.188 784.122 540.188L786.418 540.188C787.522 540.188 788.418 542.125 788.418 544.514L788.418 544.514C788.418 546.903 787.522 548.84 786.418 548.84L784.122 548.84C783.018 548.84 782.122 546.903 782.122 544.514L782.122 544.514Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M782.122 558.347C782.122 555.958 783.018 554.021 784.122 554.021L786.418 554.021C787.522 554.021 788.418 555.958 788.418 558.347L788.418 558.347C788.418 560.736 787.522 562.673 786.418 562.673L784.122 562.673C783.018 562.673 782.122 560.736 782.122 558.347L782.122 558.347Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 450.999C450.415 448.785 451.065 446.99 451.867 446.99L453.533 446.99C454.335 446.99 454.985 448.785 454.985 450.999L454.985 450.999C454.985 453.213 454.335 455.007 453.533 455.007L451.867 455.007C451.065 455.007 450.415 453.213 450.415 450.999L450.415 450.999Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M191.861 558.635C191.861 556.957 192.511 555.596 193.313 555.596L194.979 555.596C195.781 555.596 196.431 556.957 196.431 558.635L196.431 558.635C196.431 560.314 195.781 561.675 194.979 561.675L193.313 561.675C192.511 561.675 191.861 560.314 191.861 558.635L191.861 558.635Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M223.962 558.635C223.962 556.957 224.612 555.596 225.413 555.596L227.08 555.596C227.881 555.596 228.531 556.957 228.531 558.635L228.531 558.635C228.531 560.314 227.881 561.675 227.08 561.675L225.413 561.675C224.612 561.675 223.962 560.314 223.962 558.635L223.962 558.635Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 592.679C38.6158 591.676 39.794 590.863 41.2474 590.863L44.2679 590.863C45.7213 590.863 46.8995 591.676 46.8995 592.679L46.8995 592.679C46.8995 593.681 45.7213 594.494 44.2679 594.494L41.2474 594.494C39.794 594.494 38.6158 593.681 38.6158 592.679L38.6158 592.679Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 553.131C405.025 551.809 406.204 550.737 407.657 550.737L410.677 550.737C412.131 550.737 413.309 551.809 413.309 553.131L413.309 553.131C413.309 554.454 412.131 555.525 410.677 555.525L407.657 555.525C406.204 555.525 405.025 554.454 405.025 553.131L405.025 553.131Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 587.821C405.025 586.498 406.204 585.427 407.657 585.427L410.677 585.427C412.131 585.427 413.309 586.498 413.309 587.821L413.309 587.821C413.309 589.143 412.131 590.215 410.677 590.215L407.657 590.215C406.204 590.215 405.025 589.143 405.025 587.821L405.025 587.821Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 592.679C49.7748 591.676 50.9531 590.863 52.4065 590.863L55.4269 590.863C56.8803 590.863 58.0586 591.676 58.0586 592.679L58.0586 592.679C58.0586 593.681 56.8803 594.494 55.4269 594.494L52.4065 594.494C50.9531 594.494 49.7748 593.681 49.7748 592.679L49.7748 592.679Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 553.131C426.752 551.809 427.93 550.737 429.384 550.737L432.404 550.737C433.858 550.737 435.036 551.809 435.036 553.131L435.036 553.131C435.036 554.454 433.858 555.525 432.404 555.525L429.384 555.525C427.93 555.525 426.752 554.454 426.752 553.131L426.752 553.131Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 553.131C437.321 551.809 438.499 550.737 439.952 550.737L442.973 550.737C444.426 550.737 445.604 551.809 445.604 553.131L445.604 553.131C445.604 554.454 444.426 555.525 442.973 555.525L439.952 555.525C438.499 555.525 437.321 554.454 437.321 553.131L437.321 553.131Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 587.821C416.184 586.498 417.363 585.427 418.816 585.427L421.836 585.427C423.29 585.427 424.468 586.498 424.468 587.821L424.468 587.821C424.468 589.143 423.29 590.215 421.836 590.215L418.816 590.215C417.363 590.215 416.184 589.143 416.184 587.821L416.184 587.821Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 587.821C426.752 586.498 427.93 585.427 429.384 585.427L432.404 585.427C433.858 585.427 435.036 586.498 435.036 587.821L435.036 587.821C435.036 589.143 433.858 590.215 432.404 590.215L429.384 590.215C427.93 590.215 426.752 589.143 426.752 587.821L426.752 587.821Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 587.821C437.321 586.498 438.499 585.427 439.952 585.427L442.973 585.427C444.426 585.427 445.604 586.498 445.604 587.821L445.604 587.821C445.604 589.143 444.426 590.215 442.973 590.215L439.952 590.215C438.499 590.215 437.321 589.143 437.321 587.821L437.321 587.821Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 577.634C38.6158 576.632 39.794 575.819 41.2474 575.819L44.2679 575.819C45.7213 575.819 46.8995 576.632 46.8995 577.634L46.8995 577.634C46.8995 578.637 45.7213 579.45 44.2679 579.45L41.2474 579.45C39.794 579.45 38.6158 578.637 38.6158 577.634L38.6158 577.634Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 533.292C405.025 531.97 406.204 530.898 407.657 530.898L410.677 530.898C412.131 530.898 413.309 531.97 413.309 533.292L413.309 533.292C413.309 534.615 412.131 535.687 410.677 535.687L407.657 535.687C406.204 535.687 405.025 534.615 405.025 533.292L405.025 533.292Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 577.634C49.7748 576.632 50.9531 575.819 52.4065 575.819L55.4269 575.819C56.8803 575.819 58.0586 576.632 58.0586 577.634L58.0586 577.634C58.0586 578.637 56.8803 579.45 55.4269 579.45L52.4065 579.45C50.9531 579.45 49.7748 578.637 49.7748 577.634L49.7748 577.634Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 533.292C416.184 531.97 417.363 530.898 418.816 530.898L421.836 530.898C423.29 530.898 424.468 531.97 424.468 533.292L424.468 533.292C424.468 534.615 423.29 535.687 421.836 535.687L418.816 535.687C417.363 535.687 416.184 534.615 416.184 533.292L416.184 533.292Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 533.292C437.321 531.97 438.499 530.898 439.952 530.898L442.973 530.898C444.426 530.898 445.604 531.97 445.604 533.292L445.604 533.292C445.604 534.615 444.426 535.687 442.973 535.687L439.952 535.687C438.499 535.687 437.321 534.615 437.321 533.292L437.321 533.292Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 567.982C416.184 566.659 417.363 565.588 418.816 565.588L421.836 565.588C423.29 565.588 424.468 566.659 424.468 567.982L424.468 567.982C424.468 569.304 423.29 570.376 421.836 570.376L418.816 570.376C417.363 570.376 416.184 569.304 416.184 567.982L416.184 567.982Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 567.982C426.752 566.659 427.93 565.588 429.384 565.588L432.404 565.588C433.858 565.588 435.036 566.659 435.036 567.982L435.036 567.982C435.036 569.304 433.858 570.376 432.404 570.376L429.384 570.376C427.93 570.376 426.752 569.304 426.752 567.982L426.752 567.982Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 567.982C437.321 566.659 438.499 565.588 439.952 565.588L442.973 565.588C444.426 565.588 445.604 566.659 445.604 567.982L445.604 567.982C445.604 569.304 444.426 570.376 442.973 570.376L439.952 570.376C438.499 570.376 437.321 569.304 437.321 567.982L437.321 567.982Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 561.93C38.6158 560.927 39.794 560.115 41.2474 560.115L44.2679 560.115C45.7213 560.115 46.8995 560.927 46.8995 561.93L46.8995 561.93C46.8995 562.933 45.7213 563.746 44.2679 563.746L41.2474 563.746C39.794 563.746 38.6158 562.933 38.6158 561.93L38.6158 561.93Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 512.583C405.025 511.261 406.204 510.189 407.657 510.189L410.677 510.189C412.131 510.189 413.309 511.261 413.309 512.583L413.309 512.583C413.309 513.906 412.131 514.978 410.677 514.978L407.657 514.978C406.204 514.978 405.025 513.906 405.025 512.583L405.025 512.583Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 561.93C49.7748 560.927 50.9531 560.115 52.4065 560.115L55.4269 560.115C56.8803 560.115 58.0586 560.927 58.0586 561.93L58.0586 561.93C58.0586 562.933 56.8803 563.746 55.4269 563.746L52.4065 563.746C50.9531 563.746 49.7748 562.933 49.7748 561.93L49.7748 561.93Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 512.583C416.184 511.261 417.363 510.189 418.816 510.189L421.836 510.189C423.29 510.189 424.468 511.261 424.468 512.583L424.468 512.583C424.468 513.906 423.29 514.978 421.836 514.978L418.816 514.978C417.363 514.978 416.184 513.906 416.184 512.583L416.184 512.583Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 512.583C426.752 511.261 427.93 510.189 429.384 510.189L432.404 510.189C433.858 510.189 435.036 511.261 435.036 512.583L435.036 512.583C435.036 513.906 433.858 514.978 432.404 514.978L429.384 514.978C427.93 514.978 426.752 513.906 426.752 512.583L426.752 512.583Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 512.583C437.321 511.261 438.499 510.189 439.952 510.189L442.973 510.189C444.426 510.189 445.604 511.261 445.604 512.583L445.604 512.583C445.604 513.906 444.426 514.978 442.973 514.978L439.952 514.978C438.499 514.978 437.321 513.906 437.321 512.583L437.321 512.583Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 546.622C38.6158 545.619 39.794 544.806 41.2474 544.806L44.2679 544.806C45.7213 544.806 46.8995 545.619 46.8995 546.622L46.8995 546.622C46.8995 547.624 45.7213 548.437 44.2679 548.437L41.2474 548.437C39.794 548.437 38.6158 547.624 38.6158 546.622L38.6158 546.622Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 492.397C405.025 491.074 406.204 490.002 407.657 490.002L410.677 490.002C412.131 490.002 413.309 491.074 413.309 492.397L413.309 492.397C413.309 493.719 412.131 494.791 410.677 494.791L407.657 494.791C406.204 494.791 405.025 493.719 405.025 492.397L405.025 492.397Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M167.622 588.064C167.622 587.062 168.8 586.249 170.254 586.249L173.274 586.249C174.727 586.249 175.906 587.062 175.906 588.064L175.906 588.064C175.906 589.067 174.727 589.88 173.274 589.88L170.254 589.88C168.8 589.88 167.622 589.067 167.622 588.064L167.622 588.064Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M199.723 588.064C199.723 587.062 200.901 586.249 202.354 586.249L205.375 586.249C206.828 586.249 208.006 587.062 208.006 588.064L208.006 588.064C208.006 589.067 206.828 589.88 205.375 589.88L202.354 589.88C200.901 589.88 199.723 589.067 199.723 588.064L199.723 588.064Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M199.813 571.825C199.813 570.822 200.991 570.009 202.444 570.009L205.465 570.009C206.918 570.009 208.097 570.822 208.097 571.825L208.097 571.825C208.097 572.827 206.918 573.64 205.465 573.64L202.444 573.64C200.991 573.64 199.813 572.827 199.813 571.825L199.813 571.825Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 546.622C49.7748 545.619 50.9531 544.806 52.4065 544.806L55.4269 544.806C56.8803 544.806 58.0586 545.619 58.0586 546.622L58.0586 546.622C58.0586 547.624 56.8803 548.437 55.4269 548.437L52.4065 548.437C50.9531 548.437 49.7748 547.624 49.7748 546.622L49.7748 546.622Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 492.397C416.184 491.074 417.363 490.002 418.816 490.002L421.836 490.002C423.29 490.002 424.468 491.074 424.468 492.397L424.468 492.397C424.468 493.719 423.29 494.791 421.836 494.791L418.816 494.791C417.363 494.791 416.184 493.719 416.184 492.397L416.184 492.397Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 492.397C426.752 491.074 427.93 490.002 429.384 490.002L432.404 490.002C433.858 490.002 435.036 491.074 435.036 492.397L435.036 492.397C435.036 493.719 433.858 494.791 432.404 494.791L429.384 494.791C427.93 494.791 426.752 493.719 426.752 492.397L426.752 492.397Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M764.083 589.188C764.083 587.761 765.706 586.605 767.708 586.605L771.869 586.605C773.872 586.605 775.495 587.761 775.495 589.188L775.495 589.188C775.495 590.615 773.872 591.772 771.869 591.772L767.708 591.772C765.706 591.772 764.083 590.615 764.083 589.188L764.083 589.188Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M803.625 589.188C803.625 587.761 805.248 586.605 807.25 586.605L811.412 586.605C813.414 586.605 815.037 587.761 815.037 589.188L815.037 589.188C815.037 590.615 813.414 591.772 811.412 591.772L807.25 591.772C805.248 591.772 803.625 590.615 803.625 589.188L803.625 589.188Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 492.397C437.321 491.074 438.499 490.002 439.952 490.002L442.973 490.002C444.426 490.002 445.604 491.074 445.604 492.397L445.604 492.397C445.604 493.719 444.426 494.791 442.973 494.791L439.952 494.791C438.499 494.791 437.321 493.719 437.321 492.397L437.321 492.397Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M178.781 588.064C178.781 587.062 179.959 586.249 181.413 586.249L184.433 586.249C185.886 586.249 187.065 587.062 187.065 588.064L187.065 588.064C187.065 589.067 185.886 589.88 184.433 589.88L181.413 589.88C179.959 589.88 178.781 589.067 178.781 588.064L178.781 588.064Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M210.882 588.064C210.882 587.062 212.06 586.249 213.513 586.249L216.534 586.249C217.987 586.249 219.165 587.062 219.165 588.064L219.165 588.064C219.165 589.067 217.987 589.88 216.534 589.88L213.513 589.88C212.06 589.88 210.882 589.067 210.882 588.064L210.882 588.064Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 530.382C49.7748 529.379 50.9531 528.567 52.4065 528.567L55.4269 528.567C56.8803 528.567 58.0586 529.379 58.0586 530.382L58.0586 530.382C58.0586 531.385 56.8803 532.198 55.4269 532.198L52.4065 532.198C50.9531 532.198 49.7748 531.385 49.7748 530.382L49.7748 530.382Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 470.981C416.184 469.659 417.363 468.587 418.816 468.587L421.836 468.587C423.29 468.587 424.468 469.659 424.468 470.981L424.468 470.981C424.468 472.304 423.29 473.375 421.836 473.375L418.816 473.375C417.363 473.375 416.184 472.304 416.184 470.981L416.184 470.981Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M178.781 571.825C178.781 570.822 179.959 570.009 181.413 570.009L184.433 570.009C185.886 570.009 187.065 570.822 187.065 571.825L187.065 571.825C187.065 572.827 185.886 573.64 184.433 573.64L181.413 573.64C179.959 573.64 178.781 572.827 178.781 571.825L178.781 571.825Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 514.153C38.6158 513.15 39.794 512.338 41.2474 512.338L44.2679 512.338C45.7213 512.338 46.8995 513.15 46.8995 514.153L46.8995 514.153C46.8995 515.156 45.7213 515.969 44.2679 515.969L41.2474 515.969C39.794 515.969 38.6158 515.156 38.6158 514.153L38.6158 514.153Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 449.58C405.025 448.258 406.204 447.186 407.657 447.186L410.677 447.186C412.131 447.186 413.309 448.258 413.309 449.58L413.309 449.58C413.309 450.902 412.131 451.974 410.677 451.974L407.657 451.974C406.204 451.974 405.025 450.902 405.025 449.58L405.025 449.58Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M167.622 555.596C167.622 554.593 168.8 553.78 170.254 553.78L173.274 553.78C174.727 553.78 175.906 554.593 175.906 555.596L175.906 555.596C175.906 556.598 174.727 557.411 173.274 557.411L170.254 557.411C168.8 557.411 167.622 556.598 167.622 555.596L167.622 555.596Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 514.153C49.7748 513.15 50.9531 512.338 52.4065 512.338L55.4269 512.338C56.8803 512.338 58.0586 513.15 58.0586 514.153L58.0586 514.153C58.0586 515.156 56.8803 515.969 55.4269 515.969L52.4065 515.969C50.9531 515.969 49.7748 515.156 49.7748 514.153L49.7748 514.153Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 449.58C416.184 448.258 417.363 447.186 418.816 447.186L421.836 447.186C423.29 447.186 424.468 448.258 424.468 449.58L424.468 449.58C424.468 450.902 423.29 451.974 421.836 451.974L418.816 451.974C417.363 451.974 416.184 450.902 416.184 449.58L416.184 449.58Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 449.58C426.752 448.258 427.93 447.186 429.384 447.186L432.404 447.186C433.858 447.186 435.036 448.258 435.036 449.58L435.036 449.58C435.036 450.902 433.858 451.974 432.404 451.974L429.384 451.974C427.93 451.974 426.752 450.902 426.752 449.58L426.752 449.58Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M764.083 542.983C764.083 541.556 765.706 540.4 767.708 540.4L771.869 540.4C773.872 540.4 775.495 541.556 775.495 542.983L775.495 542.983C775.495 544.41 773.872 545.567 771.869 545.567L767.708 545.567C765.706 545.567 764.083 544.41 764.083 542.983L764.083 542.983Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M803.625 542.983C803.625 541.556 805.248 540.4 807.25 540.4L811.412 540.4C813.414 540.4 815.037 541.556 815.037 542.983L815.037 542.983C815.037 544.41 813.414 545.567 811.412 545.567L807.25 545.567C805.248 545.567 803.625 544.41 803.625 542.983L803.625 542.983Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 449.58C437.321 448.258 438.499 447.186 439.952 447.186L442.973 447.186C444.426 447.186 445.604 448.258 445.604 449.58L445.604 449.58C445.604 450.902 444.426 451.974 442.973 451.974L439.952 451.974C438.499 451.974 437.321 450.902 437.321 449.58L437.321 449.58Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M178.781 555.596C178.781 554.593 179.959 553.78 181.413 553.78L184.433 553.78C185.886 553.78 187.065 554.593 187.065 555.596L187.065 555.596C187.065 556.598 185.886 557.411 184.433 557.411L181.413 557.411C179.959 557.411 178.781 556.598 178.781 555.596L178.781 555.596Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 598.021C38.6158 597.019 39.794 596.206 41.2474 596.206L44.2679 596.206C45.7213 596.206 46.8995 597.019 46.8995 598.021L46.8995 598.021C46.8995 599.024 45.7213 599.837 44.2679 599.837L41.2474 599.837C39.794 599.837 38.6158 599.024 38.6158 598.021L38.6158 598.021Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 582.977C38.6158 581.974 39.794 581.162 41.2474 581.162L44.2679 581.162C45.7213 581.162 46.8995 581.974 46.8995 582.977L46.8995 582.977C46.8995 583.98 45.7213 584.792 44.2679 584.792L41.2474 584.792C39.794 584.792 38.6158 583.98 38.6158 582.977L38.6158 582.977Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 540.338C405.025 539.016 406.204 537.944 407.657 537.944L410.677 537.944C412.131 537.944 413.309 539.016 413.309 540.338L413.309 540.338C413.309 541.66 412.131 542.732 410.677 542.732L407.657 542.732C406.204 542.732 405.025 541.66 405.025 540.338L405.025 540.338Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 575.027C405.025 573.705 406.204 572.633 407.657 572.633L410.677 572.633C412.131 572.633 413.309 573.705 413.309 575.027L413.309 575.027C413.309 576.349 412.131 577.421 410.677 577.421L407.657 577.421C406.204 577.421 405.025 576.349 405.025 575.027L405.025 575.027Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 567.273C49.7748 566.27 50.9531 565.457 52.4065 565.457L55.4269 565.457C56.8803 565.457 58.0586 566.27 58.0586 567.273L58.0586 567.273C58.0586 568.276 56.8803 569.088 55.4269 569.088L52.4065 569.088C50.9531 569.088 49.7748 568.276 49.7748 567.273L49.7748 567.273Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 519.629C416.184 518.307 417.363 517.235 418.816 517.235L421.836 517.235C423.29 517.235 424.468 518.307 424.468 519.629L424.468 519.629C424.468 520.951 423.29 522.023 421.836 522.023L418.816 522.023C417.363 522.023 416.184 520.951 416.184 519.629L416.184 519.629Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 519.629C437.321 518.307 438.499 517.235 439.952 517.235L442.973 517.235C444.426 517.235 445.604 518.307 445.604 519.629L445.604 519.629C445.604 520.951 444.426 522.023 442.973 522.023L439.952 522.023C438.499 522.023 437.321 520.951 437.321 519.629L437.321 519.629Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M38.6158 551.965C38.6158 550.962 39.794 550.149 41.2474 550.149L44.2679 550.149C45.7213 550.149 46.8995 550.962 46.8995 551.965L46.8995 551.965C46.8995 552.967 45.7213 553.78 44.2679 553.78L41.2474 553.78C39.794 553.78 38.6158 552.967 38.6158 551.965L38.6158 551.965Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M405.025 499.442C405.025 498.12 406.204 497.048 407.657 497.048L410.677 497.048C412.131 497.048 413.309 498.12 413.309 499.442L413.309 499.442C413.309 500.764 412.131 501.836 410.677 501.836L407.657 501.836C406.204 501.836 405.025 500.764 405.025 499.442L405.025 499.442Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M167.622 593.407C167.622 592.404 168.8 591.592 170.254 591.592L173.274 591.592C174.727 591.592 175.906 592.404 175.906 593.407L175.906 593.407C175.906 594.41 174.727 595.223 173.274 595.223L170.254 595.223C168.8 595.223 167.622 594.41 167.622 593.407L167.622 593.407Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M199.723 593.407C199.723 592.404 200.901 591.592 202.354 591.592L205.375 591.592C206.828 591.592 208.006 592.404 208.006 593.407L208.006 593.407C208.006 594.41 206.828 595.223 205.375 595.223L202.354 595.223C200.901 595.223 199.723 594.41 199.723 593.407L199.723 593.407Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 535.725C49.7748 534.722 50.9531 533.909 52.4065 533.909L55.4269 533.909C56.8803 533.909 58.0586 534.722 58.0586 535.725L58.0586 535.725C58.0586 536.727 56.8803 537.54 55.4269 537.54L52.4065 537.54C50.9531 537.54 49.7748 536.727 49.7748 535.725L49.7748 535.725Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 478.027C416.184 476.705 417.363 475.633 418.816 475.633L421.836 475.633C423.29 475.633 424.468 476.705 424.468 478.027L424.468 478.027C424.468 479.349 423.29 480.421 421.836 480.421L418.816 480.421C417.363 480.421 416.184 479.349 416.184 478.027L416.184 478.027Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 478.027C426.752 476.705 427.93 475.633 429.384 475.633L432.404 475.633C433.858 475.633 435.036 476.705 435.036 478.027L435.036 478.027C435.036 479.349 433.858 480.421 432.404 480.421L429.384 480.421C427.93 480.421 426.752 479.349 426.752 478.027L426.752 478.027Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M764.083 573.681C764.083 572.254 765.706 571.098 767.708 571.098L771.869 571.098C773.872 571.098 775.495 572.254 775.495 573.681L775.495 573.681C775.495 575.108 773.872 576.265 771.869 576.265L767.708 576.265C765.706 576.265 764.083 575.108 764.083 573.681L764.083 573.681Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M803.506 560.089C803.506 558.662 805.129 557.506 807.132 557.506L811.293 557.506C813.295 557.506 814.919 558.662 814.919 560.089L814.919 560.089C814.919 561.516 813.295 562.673 811.293 562.673L807.132 562.673C805.129 562.673 803.506 561.516 803.506 560.089L803.506 560.089Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M803.625 573.681C803.625 572.254 805.248 571.098 807.25 571.098L811.412 571.098C813.414 571.098 815.037 572.254 815.037 573.681L815.037 573.681C815.037 575.108 813.414 576.265 811.412 576.265L807.25 576.265C805.248 576.265 803.625 575.108 803.625 573.681L803.625 573.681Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 478.027C437.321 476.705 438.499 475.633 439.952 475.633L442.973 475.633C444.426 475.633 445.604 476.705 445.604 478.027L445.604 478.027C445.604 479.349 444.426 480.421 442.973 480.421L439.952 480.421C438.499 480.421 437.321 479.349 437.321 478.027L437.321 478.027Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M210.882 577.167C210.882 576.165 212.06 575.352 213.513 575.352L216.534 575.352C217.987 575.352 219.165 576.165 219.165 577.167L219.165 577.167C219.165 578.17 217.987 578.983 216.534 578.983L213.513 578.983C212.06 578.983 210.882 578.17 210.882 577.167L210.882 577.167Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M49.7748 519.496C49.7748 518.493 50.9531 517.68 52.4065 517.68L55.4269 517.68C56.8803 517.68 58.0586 518.493 58.0586 519.496L58.0586 519.496C58.0586 520.498 56.8803 521.311 55.4269 521.311L52.4065 521.311C50.9531 521.311 49.7748 520.498 49.7748 519.496L49.7748 519.496Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M416.184 456.626C416.184 455.303 417.363 454.232 418.816 454.232L421.836 454.232C423.29 454.232 424.468 455.303 424.468 456.626L424.468 456.626C424.468 457.948 423.29 459.02 421.836 459.02L418.816 459.02C417.363 459.02 416.184 457.948 416.184 456.626L416.184 456.626Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M426.752 456.626C426.752 455.303 427.93 454.232 429.384 454.232L432.404 454.232C433.858 454.232 435.036 455.303 435.036 456.626L435.036 456.626C435.036 457.948 433.858 459.02 432.404 459.02L429.384 459.02C427.93 459.02 426.752 457.948 426.752 456.626L426.752 456.626Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M764.083 550.586C764.083 549.159 765.706 548.003 767.708 548.003L771.869 548.003C773.872 548.003 775.495 549.159 775.495 550.586L775.495 550.586C775.495 552.013 773.872 553.17 771.869 553.17L767.708 553.17C765.706 553.17 764.083 552.013 764.083 550.586L764.083 550.586Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M803.625 550.586C803.625 549.159 805.248 548.003 807.25 548.003L811.412 548.003C813.414 548.003 815.037 549.159 815.037 550.586L815.037 550.586C815.037 552.013 813.414 553.17 811.412 553.17L807.25 553.17C805.248 553.17 803.625 552.013 803.625 550.586L803.625 550.586Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M437.321 456.626C437.321 455.303 438.499 454.232 439.952 454.232L442.973 454.232C444.426 454.232 445.604 455.303 445.604 456.626L445.604 456.626C445.604 457.948 444.426 459.02 442.973 459.02L439.952 459.02C438.499 459.02 437.321 457.948 437.321 456.626L437.321 456.626Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M210.882 560.938C210.882 559.936 212.06 559.123 213.513 559.123L216.534 559.123C217.987 559.123 219.165 559.936 219.165 560.938L219.165 560.938C219.165 561.941 217.987 562.754 216.534 562.754L213.513 562.754C212.06 562.754 210.882 561.941 210.882 560.938L210.882 560.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M28.1966 533.053C28.1966 531.375 28.8466 530.014 29.6483 530.014L31.3145 530.014C32.1163 530.014 32.7662 531.375 32.7662 533.053L32.7662 533.053C32.7662 534.732 32.1163 536.093 31.3145 536.093L29.6483 536.093C28.8466 536.093 28.1966 534.732 28.1966 533.053L28.1966 533.053Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M394.606 474.504C394.606 472.29 395.256 470.495 396.058 470.495L397.724 470.495C398.526 470.495 399.176 472.29 399.176 474.504L399.176 474.504C399.176 476.718 398.526 478.513 397.724 478.513L396.058 478.513C395.256 478.513 394.606 476.718 394.606 474.504L394.606 474.504Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M62.8549 533.422C62.8549 531.743 63.5049 530.382 64.3066 530.382L65.9728 530.382C66.7745 530.382 67.4245 531.743 67.4245 533.422L67.4245 533.422C67.4245 535.101 66.7745 536.462 65.9728 536.462L64.3066 536.462C63.5049 536.462 62.8549 535.101 62.8549 533.422L62.8549 533.422Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M792.185 567.82C792.185 565.431 793.08 563.494 794.185 563.494L796.48 563.494C797.585 563.494 798.48 565.431 798.48 567.82L798.48 567.82C798.48 570.209 797.585 572.146 796.48 572.146L794.185 572.146C793.08 572.146 792.185 570.209 792.185 567.82L792.185 567.82Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M792.185 580.591C792.185 578.201 793.08 576.265 794.185 576.265L796.48 576.265C797.585 576.265 798.48 578.201 798.48 580.591L798.48 580.591C798.48 582.98 797.585 584.916 796.48 584.916L794.185 584.916C793.08 584.916 792.185 582.98 792.185 580.591L792.185 580.591Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 472.4C450.415 470.186 451.065 468.391 451.867 468.391L453.533 468.391C454.335 468.391 454.985 470.186 454.985 472.4L454.985 472.4C454.985 474.614 454.335 476.409 453.533 476.409L451.867 476.409C451.065 476.409 450.415 474.614 450.415 472.4L450.415 472.4Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M191.861 574.864C191.861 573.186 192.511 571.825 193.313 571.825L194.979 571.825C195.781 571.825 196.431 573.186 196.431 574.864L196.431 574.864C196.431 576.543 195.781 577.904 194.979 577.904L193.313 577.904C192.511 577.904 191.861 576.543 191.861 574.864L191.861 574.864Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M223.962 574.864C223.962 573.186 224.612 571.825 225.413 571.825L227.08 571.825C227.881 571.825 228.531 573.186 228.531 574.864L228.531 574.864C228.531 576.543 227.881 577.904 227.08 577.904L225.413 577.904C224.612 577.904 223.962 576.543 223.962 574.864L223.962 574.864Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M28.1966 549.269C28.1966 547.59 28.8466 546.229 29.6483 546.229L31.3145 546.229C32.1163 546.229 32.7662 547.59 32.7662 549.269L32.7662 549.269C32.7662 550.948 32.1163 552.309 31.3145 552.309L29.6483 552.309C28.8466 552.309 28.1966 550.948 28.1966 549.269L28.1966 549.269Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M394.606 495.888C394.606 493.674 395.256 491.879 396.058 491.879L397.724 491.879C398.526 491.879 399.176 493.674 399.176 495.888L399.176 495.888C399.176 498.102 398.526 499.897 397.724 499.897L396.058 499.897C395.256 499.897 394.606 498.102 394.606 495.888L394.606 495.888Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.983 402.039C646.983 399.833 648.476 398.045 650.318 398.045L655.081 398.045C656.923 398.045 658.416 399.833 658.416 402.039L658.416 402.039C658.416 404.245 656.923 406.033 655.081 406.033L650.318 406.033C648.476 406.033 646.983 404.245 646.983 402.039L646.983 402.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M62.8549 549.638C62.8549 547.959 63.5049 546.598 64.3066 546.598L65.9728 546.598C66.7745 546.598 67.4245 547.959 67.4245 549.638L67.4245 549.638C67.4245 551.317 66.7745 552.678 65.9728 552.678L64.3066 552.678C63.5049 552.678 62.8549 551.317 62.8549 549.638L62.8549 549.638Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M782.122 590.685C782.122 588.296 783.018 586.359 784.122 586.359L786.418 586.359C787.522 586.359 788.418 588.296 788.418 590.685L788.418 590.685C788.418 593.074 787.522 595.011 786.418 595.011L784.122 595.011C783.018 595.011 782.122 593.074 782.122 590.685L782.122 590.685Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M792.185 590.897C792.185 588.507 793.08 586.571 794.185 586.571L796.48 586.571C797.585 586.571 798.48 588.507 798.48 590.897L798.48 590.897C798.48 593.286 797.585 595.223 796.48 595.223L794.185 595.223C793.08 595.223 792.185 593.286 792.185 590.897L792.185 590.897Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 493.784C450.415 491.57 451.065 489.775 451.867 489.775L453.533 489.775C454.335 489.775 454.985 491.57 454.985 493.784L454.985 493.784C454.985 495.998 454.335 497.792 453.533 497.792L451.867 497.792C451.065 497.792 450.415 495.998 450.415 493.784L450.415 493.784Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M191.861 591.08C191.861 589.401 192.511 588.04 193.313 588.04L194.979 588.04C195.781 588.04 196.431 589.401 196.431 591.08L196.431 591.08C196.431 592.759 195.781 594.12 194.979 594.12L193.313 594.12C192.511 594.12 191.861 592.759 191.861 591.08L191.861 591.08Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M223.962 591.08C223.962 589.401 224.612 588.04 225.413 588.04L227.08 588.04C227.881 588.04 228.531 589.401 228.531 591.08L228.531 591.08C228.531 592.759 227.881 594.12 227.08 594.12L225.413 594.12C224.612 594.12 223.962 592.759 223.962 591.08L223.962 591.08Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.039 447.938C647.039 445.733 648.532 443.945 650.374 443.945L655.137 443.945C656.979 443.945 658.472 445.733 658.472 447.938L658.472 447.938C658.472 450.144 656.979 451.932 655.137 451.932L650.374 451.932C648.532 451.932 647.039 450.144 647.039 447.938L647.039 447.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M28.1966 564.601C28.1966 562.923 28.8466 561.562 29.6483 561.562L31.3145 561.562C32.1163 561.562 32.7662 562.923 32.7662 564.601L32.7662 564.601C32.7662 566.28 32.1163 567.641 31.3145 567.641L29.6483 567.641C28.8466 567.641 28.1966 566.28 28.1966 564.601L28.1966 564.601Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M394.606 516.106C394.606 513.892 395.256 512.098 396.058 512.098L397.724 512.098C398.526 512.098 399.176 513.892 399.176 516.106L399.176 516.106C399.176 518.32 398.526 520.115 397.724 520.115L396.058 520.115C395.256 520.115 394.606 518.32 394.606 516.106L394.606 516.106Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M62.8549 564.97C62.8549 563.291 63.5049 561.93 64.3066 561.93L65.9728 561.93C66.7745 561.93 67.4245 563.291 67.4245 564.97L67.4245 564.97C67.4245 566.649 66.7745 568.01 65.9728 568.01L64.3066 568.01C63.5049 568.01 62.8549 566.649 62.8549 564.97L62.8549 564.97Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 514.002C450.415 511.788 451.065 509.993 451.867 509.993L453.533 509.993C454.335 509.993 454.985 511.788 454.985 514.002L454.985 514.002C454.985 516.216 454.335 518.011 453.533 518.011L451.867 518.011C451.065 518.011 450.415 516.216 450.415 514.002L450.415 514.002Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M62.8549 580.274C62.8549 578.595 63.5049 577.234 64.3066 577.234L65.9728 577.234C66.7745 577.234 67.4245 578.595 67.4245 580.274L67.4245 580.274C67.4245 581.952 66.7745 583.313 65.9728 583.313L64.3066 583.313C63.5049 583.313 62.8549 581.952 62.8549 580.274L62.8549 580.274Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 534.183C450.415 531.969 451.065 530.174 451.867 530.174L453.533 530.174C454.335 530.174 454.985 531.969 454.985 534.183L454.985 534.183C454.985 536.397 454.335 538.192 453.533 538.192L451.867 538.192C451.065 538.192 450.415 536.397 450.415 534.183L450.415 534.183Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 568.872C450.415 566.658 451.065 564.863 451.867 564.863L453.533 564.863C454.335 564.863 454.985 566.658 454.985 568.872L454.985 568.872C454.985 571.086 454.335 572.881 453.533 572.881L451.867 572.881C451.065 572.881 450.415 571.086 450.415 568.872L450.415 568.872Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.719 402.039C501.719 399.833 503.212 398.045 505.054 398.045L509.818 398.045C511.659 398.045 513.152 399.833 513.152 402.039L513.152 402.039C513.152 404.245 511.659 406.033 509.818 406.033L505.054 406.033C503.212 406.033 501.719 404.245 501.719 402.039L501.719 402.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.882 355.789C600.882 353.584 602.375 351.795 604.217 351.795L608.981 351.795C610.823 351.795 612.316 353.584 612.316 355.789L612.316 355.789C612.316 357.995 610.823 359.783 608.981 359.783L604.217 359.783C602.375 359.783 600.882 357.995 600.882 355.789L600.882 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M547.932 402.039C547.932 399.833 549.425 398.045 551.266 398.045L556.03 398.045C557.872 398.045 559.365 399.833 559.365 402.039L559.365 402.039C559.365 404.245 557.872 406.033 556.03 406.033L551.266 406.033C549.425 406.033 547.932 404.245 547.932 402.039L547.932 402.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.095 355.789C647.095 353.584 648.588 351.795 650.43 351.795L655.193 351.795C657.035 351.795 658.528 353.584 658.528 355.789L658.528 355.789C658.528 357.995 657.035 359.783 655.193 359.783L650.43 359.783C648.588 359.783 647.095 357.995 647.095 355.789L647.095 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M28.1966 595.344C28.1966 593.665 28.8466 592.304 29.6483 592.304L31.3145 592.304C32.1163 592.304 32.7662 593.665 32.7662 595.344L32.7662 595.344C32.7662 597.023 32.1163 598.384 31.3145 598.384L29.6483 598.384C28.8466 598.384 28.1966 597.023 28.1966 595.344L28.1966 595.344Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M394.606 556.646C394.606 554.432 395.256 552.637 396.058 552.637L397.724 552.637C398.526 552.637 399.176 554.432 399.176 556.646L399.176 556.646C399.176 558.86 398.526 560.655 397.724 560.655L396.058 560.655C395.256 560.655 394.606 558.86 394.606 556.646L394.606 556.646Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M394.606 591.335C394.606 589.121 395.256 587.326 396.058 587.326L397.724 587.326C398.526 587.326 399.176 589.121 399.176 591.335L399.176 591.335C399.176 593.549 398.526 595.344 397.724 595.344L396.058 595.344C395.256 595.344 394.606 593.549 394.606 591.335L394.606 591.335Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M62.8549 595.712C62.8549 594.033 63.5049 592.672 64.3066 592.672L65.9728 592.672C66.7745 592.672 67.4245 594.033 67.4245 595.712L67.4245 595.712C67.4245 597.391 66.7745 598.752 65.9728 598.752L64.3066 598.752C63.5049 598.752 62.8549 597.391 62.8549 595.712L62.8549 595.712Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 554.542C450.415 552.328 451.065 550.533 451.867 550.533L453.533 550.533C454.335 550.533 454.985 552.328 454.985 554.542L454.985 554.542C454.985 556.756 454.335 558.55 453.533 558.55L451.867 558.55C451.065 558.55 450.415 556.756 450.415 554.542L450.415 554.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M450.415 589.231C450.415 587.017 451.065 585.222 451.867 585.222L453.533 585.222C454.335 585.222 454.985 587.017 454.985 589.231L454.985 589.231C454.985 591.445 454.335 593.24 453.533 593.24L451.867 593.24C451.065 593.24 450.415 591.445 450.415 589.231L450.415 589.231Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M547.987 447.938C547.987 445.733 549.48 443.945 551.322 443.945L556.086 443.945C557.928 443.945 559.421 445.733 559.421 447.938L559.421 447.938C559.421 450.144 557.928 451.932 556.086 451.932L551.322 451.932C549.48 451.932 547.987 450.144 547.987 447.938L547.987 447.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.994 378.553C600.994 376.347 602.487 374.559 604.329 374.559L609.093 374.559C610.934 374.559 612.427 376.347 612.427 378.553L612.427 378.553C612.427 380.759 610.934 382.547 609.093 382.547L604.329 382.547C602.487 382.547 600.994 380.759 600.994 378.553L600.994 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.207 378.553C647.207 376.347 648.7 374.559 650.541 374.559L655.305 374.559C657.147 374.559 658.64 376.347 658.64 378.553L658.64 378.553C658.64 380.759 657.147 382.547 655.305 382.547L650.541 382.547C648.7 382.547 647.207 380.759 647.207 378.553L647.207 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.715 390.411C600.715 388.205 602.208 386.417 604.05 386.417L608.813 386.417C610.655 386.417 612.148 388.205 612.148 390.411L612.148 390.411C612.148 392.617 610.655 394.405 608.813 394.405L604.05 394.405C602.208 394.405 600.715 392.617 600.715 390.411L600.715 390.411Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.831 355.789C501.831 353.584 503.324 351.795 505.166 351.795L509.929 351.795C511.771 351.795 513.264 353.584 513.264 355.789L513.264 355.789C513.264 357.995 511.771 359.783 509.929 359.783L505.166 359.783C503.324 359.783 501.831 357.995 501.831 355.789L501.831 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.826 436.31C600.826 434.105 602.32 432.316 604.161 432.316L608.925 432.316C610.767 432.316 612.26 434.105 612.26 436.31L612.26 436.31C612.26 438.516 610.767 440.304 608.925 440.304L604.161 440.304C602.32 440.304 600.826 438.516 600.826 436.31L600.826 436.31Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.043 355.789C548.043 353.584 549.536 351.795 551.378 351.795L556.142 351.795C557.984 351.795 559.477 353.584 559.477 355.789L559.477 355.789C559.477 357.995 557.984 359.783 556.142 359.783L551.378 359.783C549.536 359.783 548.043 357.995 548.043 355.789L548.043 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.882 344.161C600.882 341.955 602.375 340.167 604.217 340.167L608.981 340.167C610.823 340.167 612.316 341.955 612.316 344.161L612.316 344.161C612.316 346.367 610.823 348.155 608.981 348.155L604.217 348.155C602.375 348.155 600.882 346.367 600.882 344.161L600.882 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.095 344.161C647.095 341.955 648.588 340.167 650.43 340.167L655.193 340.167C657.035 340.167 658.528 341.955 658.528 344.161L658.528 344.161C658.528 346.367 657.035 348.155 655.193 348.155L650.43 348.155C648.588 348.155 647.095 346.367 647.095 344.161L647.095 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.943 378.553C501.943 376.347 503.436 374.559 505.278 374.559L510.041 374.559C511.883 374.559 513.376 376.347 513.376 378.553L513.376 378.553C513.376 380.759 511.883 382.547 510.041 382.547L505.278 382.547C503.436 382.547 501.943 380.759 501.943 378.553L501.943 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.155 378.553C548.155 376.347 549.648 374.559 551.49 374.559L556.254 374.559C558.095 374.559 559.588 376.347 559.588 378.553L559.588 378.553C559.588 380.759 558.095 382.547 556.254 382.547L551.49 382.547C549.648 382.547 548.155 380.759 548.155 378.553L548.155 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.151 459.074C647.151 456.868 648.644 455.08 650.486 455.08L655.249 455.08C657.091 455.08 658.584 456.868 658.584 459.074L658.584 459.074C658.584 461.28 657.091 463.068 655.249 463.068L650.486 463.068C648.644 463.068 647.151 461.28 647.151 459.074L647.151 459.074Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.775 436.31C501.775 434.105 503.268 432.316 505.11 432.316L509.873 432.316C511.715 432.316 513.208 434.105 513.208 436.31L513.208 436.31C513.208 438.516 511.715 440.304 509.873 440.304L505.11 440.304C503.268 440.304 501.775 438.516 501.775 436.31L501.775 436.31Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.715 604.72C600.715 602.514 602.208 600.726 604.05 600.726L608.813 600.726C610.655 600.726 612.148 602.514 612.148 604.72L612.148 604.72C612.148 606.926 610.655 608.714 608.813 608.714L604.05 608.714C602.208 608.714 600.715 606.926 600.715 604.72L600.715 604.72Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.715 524.586C600.715 522.381 602.208 520.592 604.05 520.592L608.813 520.592C610.655 520.592 612.148 522.381 612.148 524.586L612.148 524.586C612.148 526.792 610.655 528.58 608.813 528.58L604.05 528.58C602.208 528.58 600.715 526.792 600.715 524.586L600.715 524.586Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M547.987 436.31C547.987 434.105 549.48 432.316 551.322 432.316L556.086 432.316C557.928 432.316 559.421 434.105 559.421 436.31L559.421 436.31C559.421 438.516 557.928 440.304 556.086 440.304L551.322 440.304C549.48 440.304 547.987 438.516 547.987 436.31L547.987 436.31Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.715 470.702C600.715 468.496 602.208 466.708 604.05 466.708L608.813 466.708C610.655 466.708 612.148 468.496 612.148 470.702L612.148 470.702C612.148 472.908 610.655 474.696 608.813 474.696L604.05 474.696C602.208 474.696 600.715 472.908 600.715 470.702L600.715 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.831 344.161C501.831 341.955 503.324 340.167 505.166 340.167L509.929 340.167C511.771 340.167 513.264 341.955 513.264 344.161L513.264 344.161C513.264 346.367 511.771 348.155 509.929 348.155L505.166 348.155C503.324 348.155 501.831 346.367 501.831 344.161L501.831 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.043 344.161C548.043 341.955 549.536 340.167 551.378 340.167L556.142 340.167C557.984 340.167 559.477 341.955 559.477 344.161L559.477 344.161C559.477 346.367 557.984 348.155 556.142 348.155L551.378 348.155C549.536 348.155 548.043 346.367 548.043 344.161L548.043 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.927 604.72C646.927 602.514 648.42 600.726 650.262 600.726L655.026 600.726C656.867 600.726 658.36 602.514 658.36 604.72L658.36 604.72C658.36 606.926 656.867 608.714 655.026 608.714L650.262 608.714C648.42 608.714 646.927 606.926 646.927 604.72L646.927 604.72Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.927 524.586C646.927 522.381 648.42 520.592 650.262 520.592L655.026 520.592C656.867 520.592 658.36 522.381 658.36 524.586L658.36 524.586C658.36 526.792 656.867 528.58 655.026 528.58L650.262 528.58C648.42 528.58 646.927 526.792 646.927 524.586L646.927 524.586Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.887 459.074C501.887 456.868 503.38 455.08 505.222 455.08L509.985 455.08C511.827 455.08 513.32 456.868 513.32 459.074L513.32 459.074C513.32 461.28 511.827 463.068 509.985 463.068L505.222 463.068C503.38 463.068 501.887 461.28 501.887 459.074L501.887 459.074Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.927 470.702C646.927 468.496 648.42 466.708 650.262 466.708L655.026 466.708C656.867 466.708 658.36 468.496 658.36 470.702L658.36 470.702C658.36 472.908 656.867 474.696 655.026 474.696L650.262 474.696C648.42 474.696 646.927 472.908 646.927 470.702L646.927 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.099 459.074C548.099 456.868 549.592 455.08 551.434 455.08L556.198 455.08C558.039 455.08 559.533 456.868 559.533 459.074L559.533 459.074C559.533 461.28 558.039 463.068 556.198 463.068L551.434 463.068C549.592 463.068 548.099 461.28 548.099 459.074L548.099 459.074Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.663 470.702C501.663 468.496 503.156 466.708 504.998 466.708L509.762 466.708C511.603 466.708 513.096 468.496 513.096 470.702L513.096 470.702C513.096 472.908 511.603 474.696 509.762 474.696L504.998 474.696C503.156 474.696 501.663 472.908 501.663 470.702L501.663 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.719 521.524C501.719 519.318 503.212 517.53 505.054 517.53L509.818 517.53C511.659 517.53 513.152 519.318 513.152 521.524L513.152 521.524C513.152 523.73 511.659 525.518 509.818 525.518L505.054 525.518C503.212 525.518 501.719 523.73 501.719 521.524L501.719 521.524Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.715 563.427C600.715 561.221 602.208 559.433 604.05 559.433L608.813 559.433C610.655 559.433 612.148 561.221 612.148 563.427L612.148 563.427C612.148 565.632 610.655 567.42 608.813 567.42L604.05 567.42C602.208 567.42 600.715 565.632 600.715 563.427L600.715 563.427Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M547.876 470.702C547.876 468.496 549.369 466.708 551.21 466.708L555.974 466.708C557.816 466.708 559.309 468.496 559.309 470.702L559.309 470.702C559.309 472.908 557.816 474.696 555.974 474.696L551.21 474.696C549.369 474.696 547.876 472.908 547.876 470.702L547.876 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M600.715 509.542C600.715 507.337 602.208 505.548 604.05 505.548L608.813 505.548C610.655 505.548 612.148 507.337 612.148 509.542L612.148 509.542C612.148 511.748 610.655 513.536 608.813 513.536L604.05 513.536C602.208 513.536 600.715 511.748 600.715 509.542L600.715 509.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M547.932 521.524C547.932 519.318 549.425 517.53 551.266 517.53L556.03 517.53C557.872 517.53 559.365 519.318 559.365 521.524L559.365 521.524C559.365 523.73 557.872 525.518 556.03 525.518L551.266 525.518C549.425 525.518 547.932 523.73 547.932 521.524L547.932 521.524Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.871 592.739C646.871 590.533 648.364 588.745 650.206 588.745L654.97 588.745C656.811 588.745 658.305 590.533 658.305 592.739L658.305 592.739C658.305 594.944 656.811 596.732 654.97 596.732L650.206 596.732C648.364 596.732 646.871 594.944 646.871 592.739L646.871 592.739Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.663 509.542C501.663 507.337 503.156 505.548 504.998 505.548L509.762 505.548C511.603 505.548 513.096 507.337 513.096 509.542L513.096 509.542C513.096 511.748 511.603 513.536 509.762 513.536L504.998 513.536C503.156 513.536 501.663 511.748 501.663 509.542L501.663 509.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.927 563.427C646.927 561.221 648.42 559.433 650.262 559.433L655.026 559.433C656.867 559.433 658.36 561.221 658.36 563.427L658.36 563.427C658.36 565.632 656.867 567.42 655.026 567.42L650.262 567.42C648.42 567.42 646.927 565.632 646.927 563.427L646.927 563.427Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M502.054 560.364C502.054 558.158 503.547 556.37 505.389 556.37L510.153 556.37C511.995 556.37 513.488 558.158 513.488 560.364L513.488 560.364C513.488 562.57 511.995 564.358 510.153 564.358L505.389 564.358C503.547 564.358 502.054 562.57 502.054 560.364L502.054 560.364Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.927 509.542C646.927 507.337 648.42 505.548 650.262 505.548L655.026 505.548C656.867 505.548 658.36 507.337 658.36 509.542L658.36 509.542C658.36 511.748 656.867 513.536 655.026 513.536L650.262 513.536C648.42 513.536 646.927 511.748 646.927 509.542L646.927 509.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M502.054 545.01C502.054 542.804 503.547 541.016 505.389 541.016L510.153 541.016C511.995 541.016 513.488 542.804 513.488 545.01L513.488 545.01C513.488 547.216 511.995 549.004 510.153 549.004L505.389 549.004C503.547 549.004 502.054 547.216 502.054 545.01L502.054 545.01Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M502.054 583.974C502.054 581.768 503.547 579.98 505.389 579.98L510.153 579.98C511.995 579.98 513.488 581.768 513.488 583.974L513.488 583.974C513.488 586.18 511.995 587.968 510.153 587.968L505.389 587.968C503.547 587.968 502.054 586.18 502.054 583.974L502.054 583.974Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M601.05 412.824C601.05 410.618 602.543 408.83 604.385 408.83L609.149 408.83C610.99 408.83 612.483 410.618 612.483 412.824L612.483 412.824C612.483 415.03 610.99 416.818 609.149 416.818L604.385 416.818C602.543 416.818 601.05 415.03 601.05 412.824L601.05 412.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.267 545.364C548.267 543.158 549.76 541.37 551.602 541.37L556.365 541.37C558.207 541.37 559.7 543.158 559.7 545.364L559.7 545.364C559.7 547.569 558.207 549.357 556.365 549.357L551.602 549.357C549.76 549.357 548.267 547.569 548.267 545.364L548.267 545.364Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.267 584.327C548.267 582.121 549.76 580.333 551.602 580.333L556.365 580.333C558.207 580.333 559.7 582.121 559.7 584.327L559.7 584.327C559.7 586.533 558.207 588.321 556.365 588.321L551.602 588.321C549.76 588.321 548.267 586.533 548.267 584.327L548.267 584.327Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M601.106 424.452C601.106 422.246 602.599 420.458 604.441 420.458L609.204 420.458C611.046 420.458 612.539 422.246 612.539 424.452L612.539 424.452C612.539 426.658 611.046 428.446 609.204 428.446L604.441 428.446C602.599 428.446 601.106 426.658 601.106 424.452L601.106 424.452Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.318 424.452C647.318 422.246 648.811 420.458 650.653 420.458L655.417 420.458C657.259 420.458 658.752 422.246 658.752 424.452L658.752 424.452C658.752 426.658 657.259 428.446 655.417 428.446L650.653 428.446C648.811 428.446 647.318 426.658 647.318 424.452L647.318 424.452Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M547.876 509.542C547.876 507.337 549.369 505.548 551.21 505.548L555.974 505.548C557.816 505.548 559.309 507.337 559.309 509.542L559.309 509.542C559.309 511.748 557.816 513.536 555.974 513.536L551.21 513.536C549.369 513.536 547.876 511.748 547.876 509.542L547.876 509.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M601.106 320.675C601.106 318.469 602.599 316.681 604.441 316.681L609.204 316.681C611.046 316.681 612.539 318.469 612.539 320.675L612.539 320.675C612.539 322.88 611.046 324.669 609.204 324.669L604.441 324.669C602.599 324.669 601.106 322.88 601.106 320.675L601.106 320.675Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.267 560.364C548.267 558.158 549.76 556.37 551.602 556.37L556.365 556.37C558.207 556.37 559.7 558.158 559.7 560.364L559.7 560.364C559.7 562.57 558.207 564.358 556.365 564.358L551.602 564.358C549.76 564.358 548.267 562.57 548.267 560.364L548.267 560.364Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.267 599.328C548.267 597.122 549.76 595.334 551.602 595.334L556.365 595.334C558.207 595.334 559.7 597.122 559.7 599.328L559.7 599.328C559.7 601.534 558.207 603.322 556.365 603.322L551.602 603.322C549.76 603.322 548.267 601.534 548.267 599.328L548.267 599.328Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M647.318 320.675C647.318 318.469 648.811 316.681 650.653 316.681L655.417 316.681C657.259 316.681 658.752 318.469 658.752 320.675L658.752 320.675C658.752 322.88 657.259 324.669 655.417 324.669L650.653 324.669C648.811 324.669 647.318 322.88 647.318 320.675L647.318 320.675Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.183 577.385C616.183 575.179 617.676 573.391 619.518 573.391L624.282 573.391C626.124 573.391 627.617 575.179 627.617 577.385L627.617 577.385C627.617 579.59 626.124 581.378 624.282 581.378L619.518 581.378C617.676 581.378 616.183 579.59 616.183 577.385L616.183 577.385Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M501.999 412.824C501.999 410.618 503.492 408.83 505.333 408.83L510.097 408.83C511.939 408.83 513.432 410.618 513.432 412.824L513.432 412.824C513.432 415.03 511.939 416.818 510.097 416.818L505.333 416.818C503.492 416.818 501.999 415.03 501.999 412.824L501.999 412.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.239 548.073C616.239 545.867 617.732 544.079 619.574 544.079L624.338 544.079C626.179 544.079 627.673 545.867 627.673 548.073L627.673 548.073C627.673 550.278 626.179 552.067 624.338 552.067L619.574 552.067C617.732 552.067 616.239 550.278 616.239 548.073L616.239 548.073Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.211 412.824C548.211 410.618 549.704 408.83 551.546 408.83L556.309 408.83C558.151 408.83 559.644 410.618 559.644 412.824L559.644 412.824C559.644 415.03 558.151 416.818 556.309 416.818L551.546 416.818C549.704 416.818 548.211 415.03 548.211 412.824L548.211 412.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.239 494.188C616.239 491.983 617.732 490.195 619.574 490.195L624.338 490.195C626.179 490.195 627.673 491.983 627.673 494.188L627.673 494.188C627.673 496.394 626.179 498.182 624.338 498.182L619.574 498.182C617.732 498.182 616.239 496.394 616.239 494.188L616.239 494.188Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M502.054 424.452C502.054 422.246 503.547 420.458 505.389 420.458L510.153 420.458C511.995 420.458 513.488 422.246 513.488 424.452L513.488 424.452C513.488 426.658 511.995 428.446 510.153 428.446L505.389 428.446C503.547 428.446 502.054 426.658 502.054 424.452L502.054 424.452Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.351 447.938C616.351 445.733 617.844 443.945 619.686 443.945L624.449 443.945C626.291 443.945 627.784 445.733 627.784 447.938L627.784 447.938C627.784 450.144 626.291 451.932 624.449 451.932L619.686 451.932C617.844 451.932 616.351 450.144 616.351 447.938L616.351 447.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M502.054 320.675C502.054 318.469 503.547 316.681 505.389 316.681L510.153 316.681C511.995 316.681 513.488 318.469 513.488 320.675L513.488 320.675C513.488 322.88 511.995 324.669 510.153 324.669L505.389 324.669C503.547 324.669 502.054 322.88 502.054 320.675L502.054 320.675Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.407 355.789C616.407 353.584 617.9 351.795 619.742 351.795L624.505 351.795C626.347 351.795 627.84 353.584 627.84 355.789L627.84 355.789C627.84 357.995 626.347 359.783 624.505 359.783L619.742 359.783C617.9 359.783 616.407 357.995 616.407 355.789L616.407 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.921 513.266L578.586 491.981L601.276 513.266L601.276 612.638L548.921 612.638L548.921 513.266Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.building
                : theme.dark.mainPage.buildings.darkBlue.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.463 470.702C616.463 468.496 617.956 466.708 619.798 466.708L624.561 466.708C626.403 466.708 627.896 468.496 627.896 470.702L627.896 470.702C627.896 472.908 626.403 474.696 624.561 474.696L619.798 474.696C617.956 474.696 616.463 472.908 616.463 470.702L616.463 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M548.267 320.675C548.267 318.469 549.76 316.681 551.602 316.681L556.365 316.681C558.207 316.681 559.7 318.469 559.7 320.675L559.7 320.675C559.7 322.88 558.207 324.669 556.365 324.669L551.602 324.669C549.76 324.669 548.267 322.88 548.267 320.675L548.267 320.675Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.519 378.553C616.519 376.347 618.012 374.559 619.854 374.559L624.617 374.559C626.459 374.559 627.952 376.347 627.952 378.553L627.952 378.553C627.952 380.759 626.459 382.547 624.617 382.547L619.854 382.547C618.012 382.547 616.519 380.759 616.519 378.553L616.519 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.188 494.188C517.188 491.983 518.681 490.195 520.523 490.195L525.286 490.195C527.128 490.195 528.621 491.983 528.621 494.188L528.621 494.188C528.621 496.394 527.128 498.182 525.286 498.182L520.523 498.182C518.681 498.182 517.188 496.394 517.188 494.188L517.188 494.188Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.931 424.452C631.931 422.246 633.424 420.458 635.266 420.458L640.03 420.458C641.872 420.458 643.365 422.246 643.365 424.452L643.365 424.452C643.365 426.658 641.872 428.446 640.03 428.446L635.266 428.446C633.424 428.446 631.931 426.658 631.931 424.452L631.931 424.452Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 545.01C517.579 542.804 519.072 541.016 520.914 541.016L525.677 541.016C527.519 541.016 529.012 542.804 529.012 545.01L529.012 545.01C529.012 547.216 527.519 549.004 525.677 549.004L520.914 549.004C519.072 549.004 517.579 547.216 517.579 545.01L517.579 545.01Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.299 447.938C517.299 445.733 518.793 443.945 520.634 443.945L525.398 443.945C527.24 443.945 528.733 445.733 528.733 447.938L528.733 447.938C528.733 450.144 527.24 451.932 525.398 451.932L520.634 451.932C518.793 451.932 517.299 450.144 517.299 447.938L517.299 447.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.355 355.789C517.355 353.584 518.848 351.795 520.69 351.795L525.454 351.795C527.296 351.795 528.789 353.584 528.789 355.789L528.789 355.789C528.789 357.995 527.296 359.783 525.454 359.783L520.69 359.783C518.848 359.783 517.355 357.995 517.355 355.789L517.355 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.575 604.72C616.575 602.514 618.068 600.726 619.909 600.726L624.673 600.726C626.515 600.726 628.008 602.514 628.008 604.72L628.008 604.72C628.008 606.926 626.515 608.714 624.673 608.714L619.909 608.714C618.068 608.714 616.575 606.926 616.575 604.72L616.575 604.72Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.239 536.444C616.239 534.239 617.732 532.451 619.574 532.451L624.338 532.451C626.179 532.451 627.673 534.239 627.673 536.444L627.673 536.444C627.673 538.65 626.179 540.438 624.338 540.438L619.574 540.438C617.732 540.438 616.239 538.65 616.239 536.444L616.239 536.444Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.239 482.56C616.239 480.354 617.732 478.566 619.574 478.566L624.338 478.566C626.179 478.566 627.673 480.354 627.673 482.56L627.673 482.56C627.673 484.766 626.179 486.554 624.338 486.554L619.574 486.554C617.732 486.554 616.239 484.766 616.239 482.56L616.239 482.56Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M570.091 518.275C570.091 517.077 570.741 516.106 571.543 516.106L573.209 516.106C574.011 516.106 574.661 517.077 574.661 518.275L574.661 518.275C574.661 519.472 574.011 520.443 573.209 520.443L571.543 520.443C570.741 520.443 570.091 519.472 570.091 518.275L570.091 518.275Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.467 378.553C517.467 376.347 518.96 374.559 520.802 374.559L525.566 374.559C527.407 374.559 528.901 376.347 528.901 378.553L528.901 378.553C528.901 380.759 527.407 382.547 525.566 382.547L520.802 382.547C518.96 382.547 517.467 380.759 517.467 378.553L517.467 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.183 592.739C616.183 590.533 617.676 588.745 619.518 588.745L624.282 588.745C626.124 588.745 627.617 590.533 627.617 592.739L627.617 592.739C627.617 594.944 626.124 596.732 624.282 596.732L619.518 596.732C617.676 596.732 616.183 594.944 616.183 592.739L616.183 592.739Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.88 424.452C532.88 422.246 534.373 420.458 536.215 420.458L540.978 420.458C542.82 420.458 544.313 422.246 544.313 424.452L544.313 424.452C544.313 426.658 542.82 428.446 540.978 428.446L536.215 428.446C534.373 428.446 532.88 426.658 532.88 424.452L532.88 424.452Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 332.303C517.579 330.097 519.072 328.309 520.914 328.309L525.677 328.309C527.519 328.309 529.012 330.097 529.012 332.303L529.012 332.303C529.012 334.509 527.519 336.297 525.677 336.297L520.914 336.297C519.072 336.297 517.579 334.509 517.579 332.303L517.579 332.303Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.239 563.427C616.239 561.221 617.732 559.433 619.574 559.433L624.338 559.433C626.179 559.433 627.673 561.221 627.673 563.427L627.673 563.427C627.673 565.632 626.179 567.42 624.338 567.42L619.574 567.42C617.732 567.42 616.239 565.632 616.239 563.427L616.239 563.427Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.188 482.56C517.188 480.354 518.681 478.566 520.523 478.566L525.286 478.566C527.128 478.566 528.621 480.354 528.621 482.56L528.621 482.56C528.621 484.766 527.128 486.554 525.286 486.554L520.523 486.554C518.681 486.554 517.188 484.766 517.188 482.56L517.188 482.56Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.239 509.542C616.239 507.337 617.732 505.548 619.574 505.548L624.338 505.548C626.179 505.548 627.673 507.337 627.673 509.542L627.673 509.542C627.673 511.748 626.179 513.536 624.338 513.536L619.574 513.536C617.732 513.536 616.239 511.748 616.239 509.542L616.239 509.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M556.997 573.525C556.997 572.81 558.175 572.23 559.629 572.23L562.649 572.23C564.102 572.23 565.281 572.81 565.281 573.525L565.281 573.525C565.281 574.241 564.102 574.82 562.649 574.82L559.629 574.82C558.175 574.82 556.997 574.241 556.997 573.525L556.997 573.525Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 533.382C517.579 531.176 519.072 529.388 520.914 529.388L525.677 529.388C527.519 529.388 529.012 531.176 529.012 533.382L529.012 533.382C529.012 535.588 527.519 537.376 525.677 537.376L520.914 537.376C519.072 537.376 517.579 535.588 517.579 533.382L517.579 533.382Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M585.699 573.525C585.699 572.81 586.877 572.23 588.33 572.23L591.351 572.23C592.804 572.23 593.982 572.81 593.982 573.525L593.982 573.525C593.982 574.241 592.804 574.82 591.351 574.82L588.33 574.82C586.877 574.82 585.699 574.241 585.699 573.525L585.699 573.525Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 572.346C517.579 570.14 519.072 568.352 520.914 568.352L525.677 568.352C527.519 568.352 529.012 570.14 529.012 572.346L529.012 572.346C529.012 574.551 527.519 576.34 525.677 576.34L520.914 576.34C519.072 576.34 517.579 574.551 517.579 572.346L517.579 572.346Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.575 412.824C616.575 410.618 618.068 408.83 619.909 408.83L624.673 408.83C626.515 408.83 628.008 410.618 628.008 412.824L628.008 412.824C628.008 415.03 626.515 416.818 624.673 416.818L619.909 416.818C618.068 416.818 616.575 415.03 616.575 412.824L616.575 412.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 521.524C517.579 519.318 519.072 517.53 520.914 517.53L525.677 517.53C527.519 517.53 529.012 519.318 529.012 521.524L529.012 521.524C529.012 523.73 527.519 525.518 525.677 525.518L520.914 525.518C519.072 525.518 517.579 523.73 517.579 521.524L517.579 521.524Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M556.997 592.291C556.997 591.576 558.175 590.996 559.629 590.996L562.649 590.996C564.102 590.996 565.281 591.576 565.281 592.291L565.281 592.291C565.281 593.006 564.102 593.586 562.649 593.586L559.629 593.586C558.175 593.586 556.997 593.006 556.997 592.291L556.997 592.291Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M632.099 378.553C632.099 376.347 633.592 374.559 635.434 374.559L640.198 374.559C642.039 374.559 643.532 376.347 643.532 378.553L643.532 378.553C643.532 380.759 642.039 382.547 640.198 382.547L635.434 382.547C633.592 382.547 632.099 380.759 632.099 378.553L632.099 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M585.699 592.291C585.699 591.576 586.877 590.996 588.33 590.996L591.351 590.996C592.804 590.996 593.982 591.576 593.982 592.291L593.982 592.291C593.982 593.006 592.804 593.586 591.351 593.586L588.33 593.586C586.877 593.586 585.699 593.006 585.699 592.291L585.699 592.291Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.63 320.675C616.63 318.469 618.124 316.681 619.965 316.681L624.729 316.681C626.571 316.681 628.064 318.469 628.064 320.675L628.064 320.675C628.064 322.88 626.571 324.669 624.729 324.669L619.965 324.669C618.124 324.669 616.63 322.88 616.63 320.675L616.63 320.675Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.188 509.542C517.188 507.337 518.681 505.548 520.523 505.548L525.286 505.548C527.128 505.548 528.621 507.337 528.621 509.542L528.621 509.542C528.621 511.748 527.128 513.536 525.286 513.536L520.523 513.536C518.681 513.536 517.188 511.748 517.188 509.542L517.188 509.542Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.708 577.385C631.708 575.179 633.201 573.391 635.043 573.391L639.806 573.391C641.648 573.391 643.141 575.179 643.141 577.385L643.141 577.385C643.141 579.59 641.648 581.378 639.806 581.378L635.043 581.378C633.201 581.378 631.708 579.59 631.708 577.385L631.708 577.385Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 560.364C517.579 558.158 519.072 556.37 520.914 556.37L525.677 556.37C527.519 556.37 529.012 558.158 529.012 560.364L529.012 560.364C529.012 562.57 527.519 564.358 525.677 564.358L520.914 564.358C519.072 564.358 517.579 562.57 517.579 560.364L517.579 560.364Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M556.997 562.793C556.997 562.078 558.175 561.498 559.629 561.498L562.649 561.498C564.102 561.498 565.281 562.078 565.281 562.793L565.281 562.793C565.281 563.508 564.102 564.088 562.649 564.088L559.629 564.088C558.175 564.088 556.997 563.508 556.997 562.793L556.997 562.793Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 599.328C517.579 597.122 519.072 595.334 520.914 595.334L525.677 595.334C527.519 595.334 529.012 597.122 529.012 599.328L529.012 599.328C529.012 601.534 527.519 603.322 525.677 603.322L520.914 603.322C519.072 603.322 517.579 601.534 517.579 599.328L517.579 599.328Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M585.699 562.793C585.699 562.078 586.877 561.498 588.33 561.498L591.351 561.498C592.804 561.498 593.982 562.078 593.982 562.793L593.982 562.793C593.982 563.508 592.804 564.088 591.351 564.088L588.33 564.088C586.877 564.088 585.699 563.508 585.699 562.793L585.699 562.793Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.764 548.073C631.764 545.867 633.257 544.079 635.099 544.079L639.862 544.079C641.704 544.079 643.197 545.867 643.197 548.073L643.197 548.073C643.197 550.278 641.704 552.067 639.862 552.067L635.099 552.067C633.257 552.067 631.764 550.278 631.764 548.073L631.764 548.073Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M646.927 494.188C646.927 491.983 648.42 490.195 650.262 490.195L655.026 490.195C656.867 490.195 658.36 491.983 658.36 494.188L658.36 494.188C658.36 496.394 656.867 498.182 655.026 498.182L650.262 498.182C648.42 498.182 646.927 496.394 646.927 494.188L646.927 494.188Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.523 412.824C517.523 410.618 519.016 408.83 520.858 408.83L525.622 408.83C527.463 408.83 528.956 410.618 528.956 412.824L528.956 412.824C528.956 415.03 527.463 416.818 525.622 416.818L520.858 416.818C519.016 416.818 517.523 415.03 517.523 412.824L517.523 412.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M556.997 581.559C556.997 580.843 558.175 580.264 559.629 580.264L562.649 580.264C564.102 580.264 565.281 580.843 565.281 581.559L565.281 581.559C565.281 582.274 564.102 582.854 562.649 582.854L559.629 582.854C558.175 582.854 556.997 582.274 556.997 581.559L556.997 581.559Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M585.699 581.559C585.699 580.843 586.877 580.264 588.33 580.264L591.351 580.264C592.804 580.264 593.982 580.843 593.982 581.559L593.982 581.559C593.982 582.274 592.804 582.854 591.351 582.854L588.33 582.854C586.877 582.854 585.699 582.274 585.699 581.559L585.699 581.559Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.82 402.039C631.82 399.833 633.313 398.045 635.154 398.045L639.918 398.045C641.76 398.045 643.253 399.833 643.253 402.039L643.253 402.039C643.253 404.245 641.76 406.033 639.918 406.033L635.154 406.033C633.313 406.033 631.82 404.245 631.82 402.039L631.82 402.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M533.048 378.553C533.048 376.347 534.541 374.559 536.382 374.559L541.146 374.559C542.988 374.559 544.481 376.347 544.481 378.553L544.481 378.553C544.481 380.759 542.988 382.547 541.146 382.547L536.382 382.547C534.541 382.547 533.048 380.759 533.048 378.553L533.048 378.553Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.542442"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.875 447.938C631.875 445.733 633.369 443.945 635.21 443.945L639.974 443.945C641.816 443.945 643.309 445.733 643.309 447.938L643.309 447.938C643.309 450.144 641.816 451.932 639.974 451.932L635.21 451.932C633.369 451.932 631.875 450.144 631.875 447.938L631.875 447.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M517.579 320.675C517.579 318.469 519.072 316.681 520.914 316.681L525.677 316.681C527.519 316.681 529.012 318.469 529.012 320.675L529.012 320.675C529.012 322.88 527.519 324.669 525.677 324.669L520.914 324.669C519.072 324.669 517.579 322.88 517.579 320.675L517.579 320.675Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.712 494.188C532.712 491.983 534.205 490.195 536.047 490.195L540.811 490.195C542.652 490.195 544.146 491.983 544.146 494.188L544.146 494.188C544.146 496.394 542.652 498.182 540.811 498.182L536.047 498.182C534.205 498.182 532.712 496.394 532.712 494.188L532.712 494.188Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M585.699 551.59C585.699 550.875 586.877 550.295 588.33 550.295L591.351 550.295C592.804 550.295 593.982 550.875 593.982 551.59L593.982 551.59C593.982 552.305 592.804 552.885 591.351 552.885L588.33 552.885C586.877 552.885 585.699 552.305 585.699 551.59L585.699 551.59Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.987 604.72C631.987 602.514 633.48 600.726 635.322 600.726L640.086 600.726C641.928 600.726 643.421 602.514 643.421 604.72L643.421 604.72C643.421 606.926 641.928 608.714 640.086 608.714L635.322 608.714C633.48 608.714 631.987 606.926 631.987 604.72L631.987 604.72Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M533.103 545.01C533.103 542.804 534.597 541.016 536.438 541.016L541.202 541.016C543.044 541.016 544.537 542.804 544.537 545.01L544.537 545.01C544.537 547.216 543.044 549.004 541.202 549.004L536.438 549.004C534.597 549.004 533.103 547.216 533.103 545.01L533.103 545.01Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.987 524.586C631.987 522.381 633.48 520.592 635.322 520.592L640.086 520.592C641.928 520.592 643.421 522.381 643.421 524.586L643.421 524.586C643.421 526.792 641.928 528.58 640.086 528.58L635.322 528.58C633.48 528.58 631.987 526.792 631.987 524.586L631.987 524.586Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M533.103 583.974C533.103 581.768 534.597 579.98 536.438 579.98L541.202 579.98C543.044 579.98 544.537 581.768 544.537 583.974L544.537 583.974C544.537 586.18 543.044 587.968 541.202 587.968L536.438 587.968C534.597 587.968 533.103 586.18 533.103 583.974L533.103 583.974Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.987 470.702C631.987 468.496 633.48 466.708 635.322 466.708L640.086 466.708C641.928 466.708 643.421 468.496 643.421 470.702L643.421 470.702C643.421 472.908 641.928 474.696 640.086 474.696L635.322 474.696C633.48 474.696 631.987 472.908 631.987 470.702L631.987 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M643.886 484.621L694.658 484.621L769.811 484.621L769.811 609.603L643.886 609.603L643.886 484.621Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M632.155 332.303C632.155 330.097 633.648 328.309 635.49 328.309L640.253 328.309C642.095 328.309 643.588 330.097 643.588 332.303L643.588 332.303C643.588 334.509 642.095 336.297 640.253 336.297L635.49 336.297C633.648 336.297 632.155 334.509 632.155 332.303L632.155 332.303Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.768 402.039C532.768 399.833 534.261 398.045 536.103 398.045L540.867 398.045C542.708 398.045 544.201 399.833 544.201 402.039L544.201 402.039C544.201 404.245 542.708 406.033 540.867 406.033L536.103 406.033C534.261 406.033 532.768 404.245 532.768 402.039L532.768 402.039Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M556.997 540.67C556.997 539.954 558.175 539.375 559.629 539.375L562.649 539.375C564.102 539.375 565.281 539.954 565.281 540.67L565.281 540.67C565.281 541.385 564.102 541.965 562.649 541.965L559.629 541.965C558.175 541.965 556.997 541.385 556.997 540.67L556.997 540.67Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.82 390.411C631.82 388.205 633.313 386.417 635.154 386.417L639.918 386.417C641.76 386.417 643.253 388.205 643.253 390.411L643.253 390.411C643.253 392.617 641.76 394.405 639.918 394.405L635.154 394.405C633.313 394.405 631.82 392.617 631.82 390.411L631.82 390.411Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M585.699 540.67C585.699 539.954 586.877 539.375 588.33 539.375L591.351 539.375C592.804 539.375 593.982 539.954 593.982 540.67L593.982 540.67C593.982 541.385 592.804 541.965 591.351 541.965L588.33 541.965C586.877 541.965 585.699 541.385 585.699 540.67L585.699 540.67Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.824 447.938C532.824 445.733 534.317 443.945 536.159 443.945L540.922 443.945C542.764 443.945 544.257 445.733 544.257 447.938L544.257 447.938C544.257 450.144 542.764 451.932 540.922 451.932L536.159 451.932C534.317 451.932 532.824 450.144 532.824 447.938L532.824 447.938Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M631.875 436.31C631.875 434.105 633.369 432.316 635.21 432.316L639.974 432.316C641.816 432.316 643.309 434.105 643.309 436.31L643.309 436.31C643.309 438.516 641.816 440.304 639.974 440.304L635.21 440.304C633.369 440.304 631.875 438.516 631.875 436.31L631.875 436.31Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.88 355.789C532.88 353.584 534.373 351.795 536.215 351.795L540.978 351.795C542.82 351.795 544.313 353.584 544.313 355.789L544.313 355.789C544.313 357.995 542.82 359.783 540.978 359.783L536.215 359.783C534.373 359.783 532.88 357.995 532.88 355.789L532.88 355.789Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.936 470.702C532.936 468.496 534.429 466.708 536.271 466.708L541.034 466.708C542.876 466.708 544.369 468.496 544.369 470.702L544.369 470.702C544.369 472.908 542.876 474.696 541.034 474.696L536.271 474.696C534.429 474.696 532.936 472.908 532.936 470.702L532.936 470.702Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M656.632 493.195L665.93 493.195L665.93 503.533L656.632 503.533L656.632 493.195Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M710.577 493.195L719.874 493.195L719.874 503.533L710.577 503.533L710.577 493.195Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M631.931 344.161C631.931 341.955 633.424 340.167 635.266 340.167L640.03 340.167C641.872 340.167 643.365 341.955 643.365 344.161L643.365 344.161C643.365 346.367 641.872 348.155 640.03 348.155L635.266 348.155C633.424 348.155 631.931 346.367 631.931 344.161L631.931 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.992 521.524C532.992 519.318 534.485 517.53 536.327 517.53L541.09 517.53C542.932 517.53 544.425 519.318 544.425 521.524L544.425 521.524C544.425 523.73 542.932 525.518 541.09 525.518L536.327 525.518C534.485 525.518 532.992 523.73 532.992 521.524L532.992 521.524Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M710.385 553.097L719.682 553.097L719.682 563.436L710.385 563.436L710.385 553.097Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M656.632 523.472L665.93 523.472L665.93 533.811L656.632 533.811L656.632 523.472Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M646.927 332.303C646.927 330.097 648.42 328.309 650.262 328.309L655.026 328.309C656.867 328.309 658.36 330.097 658.36 332.303L658.36 332.303C658.36 334.509 656.867 336.297 655.026 336.297L650.262 336.297C648.42 336.297 646.927 334.509 646.927 332.303L646.927 332.303Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M710.577 523.472L719.874 523.472L719.874 533.811L710.577 533.811L710.577 523.472Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M556.997 517.507C556.997 516.792 558.175 516.212 559.629 516.212L562.649 516.212C564.102 516.212 565.281 516.792 565.281 517.507L565.281 517.507C565.281 518.223 564.102 518.802 562.649 518.802L559.629 518.802C558.175 518.802 556.997 518.223 556.997 517.507L556.997 517.507Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M656.44 583.375L665.738 583.375L665.738 593.713L656.44 593.713L656.44 583.375Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M585.699 517.507C585.699 516.792 586.877 516.212 588.33 516.212L591.351 516.212C592.804 516.212 593.982 516.792 593.982 517.507L593.982 517.507C593.982 518.223 592.804 518.802 591.351 518.802L588.33 518.802C586.877 518.802 585.699 518.223 585.699 517.507L585.699 517.507Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M616.463 344.161C616.463 341.955 617.956 340.167 619.798 340.167L624.561 340.167C626.403 340.167 627.896 341.955 627.896 344.161L627.896 344.161C627.896 346.367 626.403 348.155 624.561 348.155L619.798 348.155C617.956 348.155 616.463 346.367 616.463 344.161L616.463 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M710.385 583.375L719.682 583.375L719.682 593.713L710.385 593.713L710.385 583.375Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M631.987 459.074C631.987 456.868 633.48 455.08 635.322 455.08L640.086 455.08C641.928 455.08 643.421 456.868 643.421 459.074L643.421 459.074C643.421 461.28 641.928 463.068 640.086 463.068L635.322 463.068C633.48 463.068 631.987 461.28 631.987 459.074L631.987 459.074Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M724.294 493.195L744.405 493.195L744.405 503.533L724.294 503.533L724.294 493.195Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M533.103 332.303C533.103 330.097 534.597 328.309 536.438 328.309L541.202 328.309C543.044 328.309 544.537 330.097 544.537 332.303L544.537 332.303C544.537 334.509 543.044 336.297 541.202 336.297L536.438 336.297C534.597 336.297 533.103 334.509 533.103 332.303L533.103 332.303Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M670.158 553.097L690.269 553.097L690.269 563.436L670.158 563.436L670.158 553.097Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M724.102 553.097L744.213 553.097L744.213 563.436L724.102 563.436L724.102 553.097Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M670.349 523.472L690.46 523.472L690.46 533.811L670.349 533.811L670.349 523.472Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M632.043 366.925C632.043 364.719 633.536 362.931 635.378 362.931L640.142 362.931C641.983 362.931 643.477 364.719 643.477 366.925L643.477 366.925C643.477 369.13 641.983 370.918 640.142 370.918L635.378 370.918C633.536 370.918 632.043 369.13 632.043 366.925L632.043 366.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M556.997 555.402C556.997 554.686 558.175 554.106 559.629 554.106L562.649 554.106C564.102 554.106 565.281 554.686 565.281 555.402L565.281 555.402C565.281 556.117 564.102 556.697 562.649 556.697L559.629 556.697C558.175 556.697 556.997 556.117 556.997 555.402L556.997 555.402Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M724.294 523.472L744.405 523.472L744.405 533.811L724.294 533.811L724.294 523.472Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M532.768 390.411C532.768 388.205 534.261 386.417 536.103 386.417L540.867 386.417C542.708 386.417 544.201 388.205 544.201 390.411L544.201 390.411C544.201 392.617 542.708 394.405 540.867 394.405L536.103 394.405C534.261 394.405 532.768 392.617 532.768 390.411L532.768 390.411Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M670.158 583.375L690.269 583.375L690.269 593.713L670.158 593.713L670.158 583.375Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M724.102 583.375L744.213 583.375L744.213 593.713L724.102 593.713L724.102 583.375Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M632.099 412.824C632.099 410.618 633.592 408.83 635.434 408.83L640.198 408.83C642.039 408.83 643.532 410.618 643.532 412.824L643.532 412.824C643.532 415.03 642.039 416.818 640.198 416.818L635.434 416.818C633.592 416.818 632.099 415.03 632.099 412.824L632.099 412.824Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.824 436.31C532.824 434.105 534.317 432.316 536.159 432.316L540.922 432.316C542.764 432.316 544.257 434.105 544.257 436.31L544.257 436.31C544.257 438.516 542.764 440.304 540.922 440.304L536.159 440.304C534.317 440.304 532.824 438.516 532.824 436.31L532.824 436.31Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M656.632 509.084L665.93 509.084L665.93 519.423L656.632 519.423L656.632 509.084Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M532.88 344.161C532.88 341.955 534.373 340.167 536.215 340.167L540.978 340.167C542.82 340.167 544.313 341.955 544.313 344.161L544.313 344.161C544.313 346.367 542.82 348.155 540.978 348.155L536.215 348.155C534.373 348.155 532.88 346.367 532.88 344.161L532.88 344.161Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.dark
                : theme.dark.mainPage.buildings.lightBlue.dark
            }
            fillOpacity="0.54"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M532.936 459.074C532.936 456.868 534.429 455.08 536.271 455.08L541.034 455.08C542.876 455.08 544.369 456.868 544.369 459.074L544.369 459.074C544.369 461.28 542.876 463.068 541.034 463.068L536.271 463.068C534.429 463.068 532.936 461.28 532.936 459.074L532.936 459.074Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M656.44 568.987L665.738 568.987L665.738 579.325L656.44 579.325L656.44 568.987Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M532.992 366.925C532.992 364.719 534.485 362.931 536.327 362.931L541.09 362.931C542.932 362.931 544.425 364.719 544.425 366.925L544.425 366.925C544.425 369.13 542.932 370.918 541.09 370.918L536.327 370.918C534.485 370.918 532.992 369.13 532.992 366.925L532.992 366.925Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.lightBlue.light
                : theme.dark.mainPage.buildings.lightBlue.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M710.385 568.987L719.682 568.987L719.682 579.325L710.385 579.325L710.385 568.987Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M556.997 532.896C556.997 532.181 558.175 531.601 559.629 531.601L562.649 531.601C564.102 531.601 565.281 532.181 565.281 532.896L565.281 532.896C565.281 533.611 564.102 534.191 562.649 534.191L559.629 534.191C558.175 534.191 556.997 533.611 556.997 532.896L556.997 532.896Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M693.823 509.084L703.121 509.084L703.121 519.423L693.823 519.423L693.823 509.084Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M585.699 532.896C585.699 532.181 586.877 531.601 588.33 531.601L591.351 531.601C592.804 531.601 593.982 532.181 593.982 532.896L593.982 532.896C593.982 533.611 592.804 534.191 591.351 534.191L588.33 534.191C586.877 534.191 585.699 533.611 585.699 532.896L585.699 532.896Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M747.768 509.084L757.065 509.084L757.065 519.423L747.768 519.423L747.768 509.084Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M747.576 568.987L756.873 568.987L756.873 579.325L747.576 579.325L747.576 568.987Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M747.959 493.195L757.257 493.195L757.257 503.533L747.959 503.533L747.959 493.195Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M747.768 553.097L757.065 553.097L757.065 563.436L747.768 563.436L747.768 553.097Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M694.015 523.472L703.312 523.472L703.312 533.811L694.015 533.811L694.015 523.472Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M747.959 523.472L757.257 523.472L757.257 533.811L747.959 533.811L747.959 523.472Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M693.823 583.375L703.121 583.375L703.121 593.713L693.823 593.713L693.823 583.375Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M693.823 539.361L703.121 539.361L703.121 549.7L693.823 549.7L693.823 539.361Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M693.631 599.264L702.929 599.264L702.929 609.603L693.631 609.603L693.631 599.264Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M556.997 521.319C556.997 520.603 558.175 520.024 559.629 520.024L562.649 520.024C564.102 520.024 565.281 520.603 565.281 521.319L565.281 521.319C565.281 522.034 564.102 522.614 562.649 522.614L559.629 522.614C558.175 522.614 556.997 522.034 556.997 521.319L556.997 521.319Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M747.576 599.264L756.873 599.264L756.873 609.603L747.576 609.603L747.576 599.264Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M724.294 509.084L744.405 509.084L744.405 519.423L724.294 519.423L724.294 509.084Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M670.158 568.987L690.269 568.987L690.269 579.325L670.158 579.325L670.158 568.987Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.dark
                : theme.dark.mainPage.buildings.brown.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M724.102 568.987L744.213 568.987L744.213 579.325L724.102 579.325L724.102 568.987Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M670.349 539.361L690.46 539.361L690.46 549.7L670.349 549.7L670.349 539.361Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M724.294 539.361L744.405 539.361L744.405 549.7L724.294 549.7L724.294 539.361Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M724.102 599.264L744.213 599.264L744.213 609.603L724.102 609.603L724.102 599.264Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.light
                : theme.dark.mainPage.buildings.brown.light
            }
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M577.395 529.958C577.395 528.76 578.045 527.79 578.847 527.79L580.513 527.79C581.314 527.79 581.964 528.76 581.964 529.958L581.964 529.958C581.964 531.156 581.314 532.127 580.513 532.127L578.847 532.127C578.045 532.127 577.395 531.156 577.395 529.958L577.395 529.958Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M570.091 541.42C570.091 540.222 570.741 539.251 571.543 539.251L573.209 539.251C574.011 539.251 574.661 540.222 574.661 541.42L574.661 541.42C574.661 542.618 574.011 543.589 573.209 543.589L571.543 543.589C570.741 543.589 570.091 542.618 570.091 541.42L570.091 541.42Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M577.395 541.526C577.395 540.328 578.045 539.358 578.847 539.358L580.513 539.358C581.314 539.358 581.964 540.328 581.964 541.526L581.964 541.526C581.964 542.724 581.314 543.695 580.513 543.695L578.847 543.695C578.045 543.695 577.395 542.724 577.395 541.526L577.395 541.526Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M570.091 552.358C570.091 551.16 570.741 550.189 571.543 550.189L573.209 550.189C574.011 550.189 574.661 551.16 574.661 552.358L574.661 552.358C574.661 553.555 574.011 554.526 573.209 554.526L571.543 554.526C570.741 554.526 570.091 553.555 570.091 552.358L570.091 552.358Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M577.395 552.464C577.395 551.266 578.045 550.295 578.847 550.295L580.513 550.295C581.314 550.295 581.964 551.266 581.964 552.464L581.964 552.464C581.964 553.661 581.314 554.632 580.513 554.632L578.847 554.632C578.045 554.632 577.395 553.661 577.395 552.464L577.395 552.464Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M577.395 563.381C577.395 562.183 578.045 561.212 578.847 561.212L580.513 561.212C581.314 561.212 581.964 562.183 581.964 563.381L581.964 563.381C581.964 564.578 581.314 565.549 580.513 565.549L578.847 565.549C578.045 565.549 577.395 564.578 577.395 563.381L577.395 563.381Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M570.091 582.04C570.091 580.843 570.741 579.872 571.543 579.872L573.209 579.872C574.011 579.872 574.661 580.843 574.661 582.04L574.661 582.04C574.661 583.238 574.011 584.209 573.209 584.209L571.543 584.209C570.741 584.209 570.091 583.238 570.091 582.04L570.091 582.04Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M577.395 582.147C577.395 580.949 578.045 579.978 578.847 579.978L580.513 579.978C581.314 579.978 581.964 580.949 581.964 582.147L581.964 582.147C581.964 583.344 581.314 584.315 580.513 584.315L578.847 584.315C578.045 584.315 577.395 583.344 577.395 582.147L577.395 582.147Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.darkBlue.dark
                : theme.dark.mainPage.buildings.darkBlue.dark
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M570.091 574.288C570.091 573.091 570.741 572.12 571.543 572.12L573.209 572.12C574.011 572.12 574.661 573.091 574.661 574.288L574.661 574.288C574.661 575.486 574.011 576.457 573.209 576.457L571.543 576.457C570.741 576.457 570.091 575.486 570.091 574.288L570.091 574.288Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M577.395 574.394C577.395 573.197 578.045 572.226 578.847 572.226L580.513 572.226C581.314 572.226 581.964 573.197 581.964 574.394L581.964 574.394C581.964 575.592 581.314 576.563 580.513 576.563L578.847 576.563C578.045 576.563 577.395 575.592 577.395 574.394L577.395 574.394Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M570.091 593.054C570.091 591.856 570.741 590.885 571.543 590.885L573.209 590.885C574.011 590.885 574.661 591.856 574.661 593.054L574.661 593.054C574.661 594.252 574.011 595.223 573.209 595.223L571.543 595.223C570.741 595.223 570.091 594.252 570.091 593.054L570.091 593.054Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.buildings.brown.building
                : theme.dark.mainPage.buildings.brown.building
            }
            fillOpacity="0.522792"
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.127727"
          />
          <path
            d="M432.169 363.116L426.737 363.169"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M437.321 366.542L431.889 366.596"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M431.889 370.935L431.937 361.605"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M429.453 361.481L429.453 364.88"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M434.605 364.908L434.605 368.307"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M433.171 365.746L433.171 367.445"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M435.985 365.62L435.985 367.372"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <path
            d="M430.878 362.231L430.894 364.13"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="0.459348"
          />
          <g opacity="1">
            <path
              d="M740.215 475.469L734.783 475.522"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M734.831 478.191L729.399 478.245"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M734.783 484.621L734.831 475.29"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M737.499 473.835L737.499 477.233"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M732.115 476.557L732.115 479.956"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M738.879 474.547L738.879 476.298"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M733.495 477.269L733.495 479.021"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M735.799 474.695L735.815 476.595"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
            <path
              d="M730.415 477.418L730.43 479.317"
              fill="none"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="0.459348"
            />
          </g>
          <path
            d="M356.527 520.02L328.808 527.591L307.433 548.648L297.308 578.349L300.527 607.866C302.754 607.782 304.404 607.762 308.402 607.498C309.141 607.449 309.486 607.433 309.902 607.406C316.552 606.973 320.49 606.826 324.777 606.946C331.081 607.123 350.89 607.8 356.09 607.988C373.009 608.6 380.588 608.842 390.027 609.092C395.272 609.231 399.218 609.122 402.933 608.601C403.737 608.489 404.37 608.348 406.152 607.988C407.6 607.696 408.357 607.552 409.277 607.406C410.464 607.218 411.549 607.145 412.621 607.1L415.746 578.349L405.621 548.648L384.246 527.591L356.527 520.02Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.trees
                : theme.dark.mainPage.trees
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <path
            d="M116.688 560.089L95.2702 563.921L78.7545 574.579L70.9313 589.611L73.4183 604.551C75.1393 604.509 76.414 604.498 79.503 604.365C80.0742 604.34 80.3403 604.332 80.662 604.318C85.7997 604.099 88.8427 604.025 92.1554 604.086C97.0258 604.175 112.332 604.518 116.349 604.613C129.422 604.923 135.278 605.045 142.572 605.172C146.624 605.242 149.673 605.187 152.544 604.923C153.165 604.866 153.654 604.795 155.031 604.613C156.149 604.465 156.735 604.392 157.446 604.318C158.363 604.223 159.201 604.186 160.029 604.163L162.444 589.611L154.62 574.579L138.105 563.921L116.688 560.089Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.trees
                : theme.dark.mainPage.trees
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <path
            d="M798.48 564.771L777.063 568.603L760.547 579.261L752.724 594.294L755.211 609.233C756.932 609.191 758.207 609.18 761.296 609.047C761.867 609.022 762.133 609.014 762.455 609C767.592 608.781 770.635 608.707 773.948 608.768C778.818 608.857 794.124 609.2 798.142 609.295C811.215 609.605 817.071 609.727 824.364 609.854C828.416 609.924 831.466 609.869 834.336 609.605C834.957 609.548 835.447 609.477 836.824 609.295C837.942 609.147 838.527 609.074 839.238 609C840.155 608.905 840.994 608.868 841.822 608.845L844.236 594.294L836.413 579.261L819.897 568.603L798.48 564.771Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.trees
                : theme.dark.mainPage.trees
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <path
            d="M798.48 537.54L777.063 543.685L760.547 560.777L752.724 584.884L755.211 608.842C756.932 608.774 758.207 608.757 761.296 608.543C761.867 608.504 762.133 608.49 762.455 608.468C767.592 608.117 770.635 607.998 773.948 608.095C778.818 608.239 794.124 608.789 798.142 608.941C811.215 609.437 817.071 609.634 824.364 609.837C828.416 609.95 831.466 609.861 834.336 609.439C834.957 609.347 835.447 609.233 836.824 608.941C837.942 608.704 838.527 608.587 839.238 608.468C840.155 608.316 840.994 608.256 841.822 608.22L844.236 584.884L836.413 560.777L819.897 543.685L798.48 537.54Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.trees
                : theme.dark.mainPage.trees
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <path
            d="M811.007 514.253L783.726 522.376L762.689 544.969L752.724 576.837L755.892 608.507C758.084 608.417 759.708 608.395 763.642 608.112C764.37 608.06 764.709 608.043 765.119 608.014C771.663 607.549 775.539 607.391 779.759 607.52C785.962 607.71 805.459 608.437 810.576 608.638C827.228 609.294 834.687 609.554 843.978 609.822C849.139 609.971 853.023 609.855 856.68 609.296C857.471 609.175 858.094 609.024 859.848 608.638C861.273 608.325 862.018 608.17 862.923 608.014C864.092 607.811 865.159 607.733 866.214 607.685L869.29 576.837L859.325 544.969L838.288 522.376L811.007 514.253Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.trees
                : theme.dark.mainPage.trees
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <path
            d="M235.159 603.507L255.442 595.813"
            fill="none"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <path
            d="M631.417 539.375L605.056 544.814L584.728 559.942L575.098 581.28L578.159 602.486C580.278 602.425 581.847 602.411 585.649 602.221C586.352 602.186 586.679 602.175 587.075 602.155C593.399 601.844 597.144 601.739 601.222 601.825C607.216 601.952 626.056 602.439 631.001 602.574C647.091 603.013 654.299 603.187 663.276 603.366C668.264 603.466 672.017 603.388 675.55 603.014C676.314 602.933 676.917 602.832 678.611 602.574C679.988 602.364 680.709 602.26 681.583 602.155C682.712 602.02 683.744 601.968 684.763 601.935L687.735 581.28L678.106 559.942L657.778 544.814L631.417 539.375Z"
            fill={
              currentTheme === ThemeType.LIGHT
                ? theme.light.mainPage.trees
                : theme.dark.mainPage.trees
            }
            fillRule="nonzero"
            opacity="1"
            stroke="#000002"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="1.16584"
          />
          <g opacity="1">
            <path
              d="M417.19 548.627L389.471 553.596L368.096 567.417L357.971 586.911L361.19 606.285C363.418 606.23 365.067 606.217 369.065 606.044C369.804 606.012 370.149 606.001 370.565 605.983C377.215 605.699 381.153 605.603 385.44 605.681C391.744 605.797 411.553 606.242 416.753 606.365C433.672 606.767 441.251 606.925 450.69 607.09C455.935 607.181 459.881 607.109 463.596 606.768C464.4 606.694 465.033 606.602 466.815 606.365C468.263 606.174 469.02 606.079 469.94 605.983C471.127 605.86 472.212 605.812 473.284 605.782L476.409 586.911L466.284 567.417L444.909 553.596L417.19 548.627Z"
              fill={
                currentTheme === ThemeType.LIGHT
                  ? theme.light.mainPage.trees
                  : theme.dark.mainPage.trees
              }
              fillRule="nonzero"
              opacity="1"
              stroke="#000002"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="1.16584"
            />
          </g>
          <g opacity="1">
            <path
              d="M166.726 434.852C166.755 434.821 166.805 434.818 166.836 434.848L166.836 434.848C166.868 434.877 166.87 434.926 166.841 434.958L166.506 435.324C166.477 435.356 166.427 435.358 166.396 435.329L166.396 435.329C166.364 435.299 166.362 435.25 166.391 435.218L166.726 434.852Z"
              fill={
                currentTheme === ThemeType.LIGHT
                  ? theme.light.mainPage.buildings.brown.light
                  : theme.dark.mainPage.buildings.brown.light
              }
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <path
              d="M166.954 434.974C166.921 434.938 166.924 434.883 166.959 434.85L166.959 434.85C166.995 434.817 167.051 434.82 167.083 434.855L167.46 435.265C167.493 435.301 167.491 435.357 167.455 435.389L167.455 435.389C167.419 435.422 167.364 435.42 167.331 435.384L166.954 434.974Z"
              fill={
                currentTheme === ThemeType.LIGHT
                  ? theme.light.mainPage.buildings.brown.light
                  : theme.dark.mainPage.buildings.brown.light
              }
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <g opacity="1">
              <path
                d="M168.562 430.366L170.274 430.326L173.157 430.26C173.177 430.259 173.408 430.508 173.408 430.508L173.2 430.781C173.2 430.783 173.2 430.784 173.2 430.784L168.808 430.863C166.699 430.823 166.455 430.461 168.562 430.366Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
              <path
                d="M166.031 430.863L164.319 430.857L161.434 430.847C161.414 430.847 161.191 430.592 161.191 430.592L161.405 430.324C161.405 430.322 161.405 430.321 161.405 430.321L165.798 430.36C167.905 430.456 168.139 430.824 166.031 430.863Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
              <path
                d="M167.055 430.686C167.055 430.588 167.135 430.508 167.233 430.508L167.233 430.508C167.332 430.508 167.412 430.588 167.412 430.686L167.412 431.04C167.412 431.139 167.332 431.219 167.233 431.219L167.233 431.219C167.135 431.219 167.055 431.139 167.055 431.04L167.055 430.686Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
            </g>
            <path
              d="M166.445 430.978C165.345 430.978 164.456 431.873 164.456 432.973C164.456 434.074 165.345 434.962 166.445 434.962L167.734 434.962C168.835 434.962 169.729 434.074 169.729 432.973C169.729 432.52 169.548 432.121 169.293 431.787L174.332 431.422C174.506 431.422 174.606 431.319 174.644 431.221C174.644 431.221 174.66 431.167 174.661 431.143C174.667 431.032 174.577 430.978 174.355 430.978L167.824 430.978C167.812 430.978 167.804 430.99 167.792 430.991C167.772 430.991 167.755 430.978 167.734 430.978L166.445 430.978Z"
              fill={
                currentTheme === ThemeType.LIGHT
                  ? theme.light.mainPage.buildings.lightBlue.building
                  : theme.dark.mainPage.buildings.lightBlue.building
              }
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <g opacity="1">
              <path
                d="M174.213 431.219C174.213 431.006 174.396 430.833 174.623 430.833C174.849 430.833 175.033 431.006 175.033 431.219C175.033 431.432 174.849 431.604 174.623 431.604C174.396 431.604 174.213 431.432 174.213 431.219Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
              <path
                d="M174.197 431.021L173.523 430.335C173.519 430.331 173.517 430.329 173.517 430.329L174.573 429.873C174.576 429.872 174.579 429.871 174.579 429.871L174.691 430.807C174.745 431.258 174.524 431.353 174.197 431.021Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
              <path
                d="M174.952 430.966L175.894 430.671C175.898 430.67 175.902 430.669 175.902 430.669L175.906 431.762C175.906 431.766 175.906 431.769 175.906 431.769L174.953 431.478C174.496 431.338 174.495 431.108 174.952 430.966Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
              <path
                d="M174.677 431.642L174.484 432.559C174.484 432.563 174.483 432.567 174.483 432.567L173.471 432.03C173.468 432.029 173.465 432.027 173.465 432.027L174.204 431.391C174.559 431.085 174.771 431.198 174.677 431.642Z"
                fill={
                  currentTheme === ThemeType.LIGHT
                    ? theme.light.mainPage.buildings.brown.light
                    : theme.dark.mainPage.buildings.brown.light
                }
                fillRule="nonzero"
                opacity="1"
                stroke="none"
              />
            </g>
            <path
              d="M165.202 431.886C165.202 431.656 165.672 431.471 166.252 431.471L166.252 431.471C166.831 431.471 167.301 431.656 167.301 431.886L167.301 432.746C167.301 432.975 166.831 433.161 166.252 433.161L166.252 433.161C165.672 433.161 165.202 432.975 165.202 432.746L165.202 431.886Z"
              fill={
                currentTheme === ThemeType.LIGHT
                  ? theme.light.mainPage.buildings.lightBlue.light
                  : theme.dark.mainPage.buildings.lightBlue.light
              }
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <path
              d="M166.288 435.106C166.424 435.06 166.572 435.134 166.617 435.27C166.663 435.407 166.589 435.554 166.453 435.599C166.316 435.645 166.169 435.571 166.123 435.435C166.078 435.298 166.152 435.151 166.288 435.106Z"
              fill="#000002"
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <path
              d="M167.385 435.133C167.522 435.088 167.669 435.161 167.715 435.298C167.76 435.434 167.686 435.582 167.55 435.627C167.414 435.673 167.266 435.599 167.221 435.463C167.175 435.326 167.249 435.179 167.385 435.133Z"
              fill="#000002"
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <path
              d="M167.148 430.588C167.148 430.505 167.216 430.437 167.299 430.437C167.383 430.437 167.45 430.505 167.45 430.588C167.45 430.672 167.383 430.739 167.299 430.739C167.216 430.739 167.148 430.672 167.148 430.588Z"
              fill="#000002"
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
            <path
              d="M174.464 431.219C174.464 431.135 174.532 431.068 174.615 431.068C174.699 431.068 174.767 431.135 174.767 431.219C174.767 431.302 174.699 431.37 174.615 431.37C174.532 431.37 174.464 431.302 174.464 431.219Z"
              fill="#000002"
              fillRule="nonzero"
              opacity="1"
              stroke="none"
            />
          </g>
        </g>
      </SkylineSVG>
    </SkylineContainer>
  );
};

export default Skyline;
