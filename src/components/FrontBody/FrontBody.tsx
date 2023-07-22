import React from "react";

interface FrontBodyProps {
  data: {
    trapezius_right: string;
    trapezius_left: string;
    lateral_deltoid_right: string;
    lateral_deltoid_left: string;
    pectoral_right: string;
    pectoral_left: string;
    anterior_deltoid_right: string;
    anterior_deltoid_left: string;
    bicep_right: string;
    bicep_left: string;
    serratus_right: string;
    serratus_left: string;
    abs_right: string;
    abs_left: string;
    dorsal_right: string;
    dorsal_left: string;
    forearm_right: string;
    forearm_left: string;
    oblique_right: string;
    oblique_left: string;
    lower_abs_right: string;
    lower_abs_left: string;
    quadricep_right: string;
    quadricep_left: string;
    abductor_right: string;
    abductor_left: string;
    hand_right: string;
    hand_left: string;
  };
  color: string;
}

const FrontBody: React.FC<FrontBodyProps> = ({ data, color }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1225.000000 2363.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,2363.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M6213 23536 c-30 -22 -40 -65 -59 -246 -23 -224 -24 -375 -2 -396 15
              -15 20 -14 75 19 32 20 78 41 103 46 68 16 183 13 282 -6 65 -12 94 -14 106
              -7 24 15 41 92 49 215 7 133 -6 198 -50 235 -116 97 -439 187 -504 140z"
        />
        <path
          d="M5715 23523 c-72 -25 -225 -131 -249 -173 -18 -30 -21 -50 -19 -140
              1 -100 19 -270 29 -280 3 -2 44 6 92 18 172 44 223 40 389 -29 53 -22 98 -38
              101 -35 7 7 -32 633 -40 641 -3 3 -61 8 -129 11 -100 3 -134 1 -174 -13z"
        />
        <path
          d="M5238 23110 c-44 -34 -59 -92 -65 -240 -8 -196 27 -440 63 -440 19 0
              50 114 69 250 22 160 31 400 16 428 -15 28 -50 29 -83 2z"
        />
        <path
          d="M6881 23108 c-12 -12 -24 -37 -27 -56 -18 -97 58 -608 96 -646 27
              -27 54 72 71 252 16 175 6 308 -28 384 -38 86 -75 107 -112 66z"
        />
        <path
          d="M5615 22862 c-86 -41 -152 -123 -186 -233 -20 -64 -25 -149 -10 -149
              5 0 70 28 143 62 161 75 208 82 327 48 93 -27 111 -23 111 23 0 43 -43 110
              -108 169 -98 88 -199 117 -277 80z"
        />
        <path
          d="M6404 22856 c-114 -53 -281 -278 -221 -299 6 -2 35 5 62 16 71 28
              211 34 294 13 63 -16 97 -35 159 -88 39 -33 78 -37 87 -8 12 37 -16 159 -52
              230 -71 144 -199 197 -329 136z"
        />
        <path
          d="M5755 22444 c-314 -23 -339 -32 -339 -124 0 -55 23 -96 65 -117 59
              -30 241 -2 365 58 102 48 174 135 147 178 -13 21 -25 21 -238 5z"
        />
        <path
          d="M6223 22449 c-7 -7 -13 -28 -13 -46 0 -129 357 -265 506 -193 50 25
              74 68 74 135 0 43 -2 47 -32 59 -19 8 -99 16 -189 20 -87 4 -183 11 -215 17
              -33 5 -72 12 -89 15 -18 3 -35 0 -42 -7z"
        />
        <path
          d="M6433 22130 c-47 -19 -72 -98 -54 -167 18 -66 88 -159 179 -240 48
              -41 94 -79 104 -84 15 -8 28 7 90 98 106 160 131 240 87 284 -19 19 -28 21
              -89 15 -76 -8 -126 7 -170 49 -26 25 -89 55 -112 54 -7 0 -23 -4 -35 -9z"
        />
        <path
          d="M5677 22116 c-58 -16 -84 -38 -92 -80 -12 -59 -16 -66 -39 -66 -27 0
              -46 18 -46 42 0 45 -89 47 -130 3 -28 -30 -28 -63 -2 -133 20 -51 142 -245
              163 -258 15 -9 47 24 61 65 6 20 12 70 12 111 1 68 3 75 21 75 11 0 25 -11 31
              -23 22 -44 30 -46 78 -23 51 25 79 64 96 133 15 60 6 113 -25 144 -27 27 -56
              29 -128 10z"
        />
        <path
          d="M5197 21828 c-9 -7 -21 -34 -26 -60 -17 -76 9 -179 85 -333 61 -126
              130 -213 211 -268 36 -26 68 -45 70 -44 1 2 -31 76 -72 164 -65 142 -132 324
              -165 450 -11 44 -53 103 -74 103 -7 0 -20 -6 -29 -12z"
        />
        <path
          d="M6953 21818 c-34 -37 -59 -96 -128 -298 -69 -202 -105 -284 -128
              -293 -19 -7 -37 -60 -27 -77 30 -49 193 124 275 293 51 106 95 250 95 311 0
              76 -45 109 -87 64z"
        />
        <path
          d="M5925 21755 c-200 -36 -255 -56 -255 -94 0 -41 51 -46 435 -46 365 0
              435 5 435 30 0 52 -271 137 -429 134 -31 0 -114 -11 -186 -24z"
        />
        <path
          d="M5820 21500 c-112 -9 -150 -22 -150 -49 0 -57 170 -127 368 -151 67
              -9 102 -8 172 5 174 30 345 112 327 158 -3 9 -32 19 -69 26 -80 15 -523 22
              -648 11z"
        />
        <path
          d="M5543 21324 c-15 -40 39 -141 131 -242 135 -148 317 -248 316 -175
              -1 34 -68 182 -111 243 -53 76 -117 124 -206 154 -108 36 -123 39 -130 20z"
        />
        <path
          d="M6523 21299 c-52 -22 -89 -47 -135 -92 -112 -109 -212 -257 -206
              -302 5 -32 63 -32 123 1 123 65 233 181 301 316 59 117 44 131 -83 77z"
        />
        <path
          d="M5360 20988 c0 -68 42 -315 75 -444 63 -246 158 -456 429 -944 l136
              -245 0 170 c0 186 -14 297 -55 440 -40 139 -121 332 -197 473 -70 130 -366
              582 -380 582 -4 0 -8 -15 -8 -32z"
        />
        <path
          d="M6768 20939 c-206 -274 -403 -638 -502 -929 -71 -205 -89 -297 -90
              -442 -1 -155 9 -174 57 -115 84 102 384 658 454 842 73 192 165 638 143 699
              -5 15 -16 6 -62 -55z"
        />
        <path
          d="M5925 20735 c-75 -16 -147 -58 -154 -90 -2 -12 11 -31 37 -54 53 -47
              112 -122 212 -270 45 -66 85 -123 90 -126 5 -3 20 19 33 50 14 30 62 111 107
              180 186 288 177 317 -105 321 -101 2 -173 -2 -220 -11z"
        />
        <path
          fill={data.trapezius_right}
          d="M6838 20274 c-20 -44 22 -104 197 -280 173 -174 205 -195 317 -214
              81 -13 441 -14 433 0 -11 17 -437 260 -760 432 -180 96 -173 93 -187 62z"
        />
        <path
          fill={data.trapezius_right}
          d="M5235 20231 c-63 -23 -185 -84 -341 -172 -151 -84 -410 -214 -445
              -222 -36 -9 -44 -34 -16 -49 32 -17 223 -22 352 -9 154 15 202 41 350 183 159
              152 229 263 179 282 -21 8 -22 8 -79 -13z"
        />
        <path
          d="M5412 20008 c-56 -154 -67 -233 -38 -258 39 -31 196 -52 236 -30 19
              10 19 11 -1 63 -28 70 -139 284 -154 297 -10 8 -20 -9 -43 -72z"
        />
        <path
          d="M6694 20021 c-40 -61 -104 -218 -104 -256 0 -47 25 -59 116 -53 82 6
              120 24 130 65 13 50 -70 283 -100 283 -9 0 -27 -18 -42 -39z"
        />
        <path
          fill={data.lateral_deltoid_left}
          d="M3750 19504 c-166 -21 -350 -100 -454 -196 -180 -164 -264 -365 -331
              -788 -39 -248 -58 -541 -36 -555 16 -9 50 49 181 318 258 531 396 737 671
              1008 151 149 170 177 130 198 -23 13 -113 21 -161 15z"
        />
        <path
          fill={data.anterior_deltoid_left}
          d="M4224 19471 c-131 -45 -222 -110 -364 -257 -120 -125 -205 -234 -328
              -419 -170 -254 -265 -441 -358 -703 -42 -118 -43 -123 -21 -117 220 62 384
              133 535 231 46 30 116 71 155 90 88 44 113 66 128 113 7 20 20 48 30 63 11 14
              19 30 19 35 0 4 29 57 65 117 120 203 311 595 376 775 l23 64 -23 18 c-36 30
              -137 25 -237 -10z"
        />
        <path
          fill={data.pectoral_left}
          d="M5030 19481 c-201 -43 -360 -143 -496 -315 -69 -85 -127 -180 -239
              -386 -73 -134 -146 -248 -196 -305 -26 -29 -29 -38 -19 -50 7 -8 18 -15 25
              -15 17 0 123 76 345 249 427 332 812 569 1099 675 118 44 131 60 80 98 -82 60
              -417 87 -599 49z"
        />
        <path
          fill={data.pectoral_right}
          d="M6774 19490 c-45 -5 -99 -13 -121 -19 -46 -13 -93 -46 -93 -67 0 -23
              66 -59 246 -137 307 -133 547 -286 874 -557 268 -223 386 -311 530 -394 74
              -43 78 -51 -46 85 -74 81 -199 269 -329 493 -270 465 -439 582 -865 600 -63 2
              -151 1 -196 -4z"
        />
        <path
          fill={data.lateral_deltoid_right}
          d="M8310 19494 c-8 -4 -20 -13 -27 -21 -20 -25 6 -61 140 -189 68 -66
              139 -139 158 -164 19 -25 59 -74 90 -110 49 -57 96 -130 224 -350 44 -75 94
              -174 153 -305 28 -60 85 -180 126 -265 l76 -155 -4 265 c-3 173 -10 300 -20
              365 -53 335 -160 591 -310 741 -83 83 -159 123 -304 160 -94 25 -270 41 -302
              28z"
        />
        <path
          fill={data.anterior_deltoid_right}
          d="M7741 19473 l-24 -20 27 -87 c57 -183 236 -538 384 -761 191 -289
              525 -533 809 -591 68 -14 77 -14 91 -1 13 14 12 24 -12 93 -15 42 -63 154
              -105 248 -43 94 -90 203 -105 241 -45 115 -133 245 -280 417 -178 208 -326
              355 -393 391 -90 48 -192 78 -283 84 -74 5 -88 3 -109 -14z"
        />
        <path
          fill={data.pectoral_right}
          d="M5735 19253 c-70 -15 -171 -55 -312 -123 -260 -125 -381 -203 -928
              -593 -192 -138 -397 -282 -455 -320 -58 -38 -108 -74 -112 -80 -20 -32 69
              -121 221 -222 297 -197 744 -389 1051 -451 249 -51 445 -31 647 66 l103 49 0
              639 c0 642 -6 796 -36 902 -31 108 -91 153 -179 133z"
        />
        <path
          fill={data.pectoral_left}
          d="M6420 19251 c-97 -30 -128 -66 -149 -171 -33 -167 -54 -789 -31 -915
              21 -117 23 -194 5 -275 -40 -175 -28 -259 43 -321 78 -69 274 -127 457 -136
              93 -4 130 -1 235 21 383 78 978 356 1222 570 51 45 92 84 92 87 1 4 -125 94
              -279 201 -154 107 -398 278 -543 380 -365 256 -682 443 -892 526 -89 36 -126
              43 -160 33z"
        />
        <path
          fill={data.bicep_right}
          d="M8406 17967 c-133 -96 -141 -109 -140 -205 2 -104 46 -359 99 -577
              121 -492 291 -854 493 -1046 87 -84 162 -126 239 -135 174 -21 265 136 250
              431 -15 284 -83 584 -259 1146 l-70 225 -250 115 c-137 62 -253 115 -256 116
              -4 1 -52 -30 -106 -70z"
        />
        <path
          fill={data.bicep_left}
          d="M3424 17927 l-252 -101 -20 -70 c-11 -39 -58 -204 -105 -366 -143
              -496 -199 -778 -199 -1005 -1 -107 3 -142 21 -198 40 -124 130 -185 254 -175
              75 6 140 41 224 122 254 241 458 776 568 1490 20 129 17 207 -11 237 -25 28
              -211 169 -221 168 -4 0 -121 -46 -259 -102z"
        />
        <path
          fill={data.bicep_left}
          d="M2965 17726 c-80 -85 -153 -295 -220 -626 -53 -268 -77 -470 -77
              -660 0 -366 92 -760 179 -760 21 0 15 46 -21 159 -63 195 -86 350 -86 582 0
              373 80 769 235 1153 30 76 55 146 55 156 0 34 -31 32 -65 -4z"
        />
        <path
          fill={data.bicep_right}
          d="M9197 17653 c184 -501 276 -967 260 -1318 -8 -158 -26 -269 -72 -440
              -54 -202 -43 -281 23 -157 76 142 106 345 106 707 1 291 -6 358 -65 643 -70
              336 -157 571 -238 639 -49 42 -52 27 -14 -74z"
        />
        <path
          d="M4141 17697 c-20 -25 -25 -108 -8 -149 13 -30 22 -38 52 -44 48 -9
              110 0 140 20 36 24 32 57 -12 98 -78 69 -150 101 -172 75z"
        />
        <path
          d="M7949 17666 c-144 -59 -178 -129 -75 -155 59 -15 135 -14 166 2 52
              26 62 115 19 158 -24 24 -42 24 -110 -5z"
        />
        <path
          fill={data.serratus_left}
          d="M4570 17497 c0 -29 68 -113 146 -180 125 -109 195 -135 202 -74 3 23
              -7 38 -56 85 -33 31 -102 82 -153 113 -109 65 -139 77 -139 56z"
        />
        <path
          fill={data.serratus_right}
          d="M7544 17481 c-64 -29 -181 -109 -210 -144 -56 -67 -62 -127 -11 -127
              62 0 224 137 266 223 20 42 21 67 3 67 -4 0 -26 -9 -48 -19z"
        />
        <path
          fill={data.serratus_right}
          d="M7728 17333 c-105 -79 -294 -272 -317 -324 -18 -41 -19 -53 -10 -140
              14 -124 20 -143 46 -147 79 -11 249 241 333 494 29 90 39 164 21 164 -5 0 -38
              -21 -73 -47z"
        />
        <path
          fill={data.serratus_left}
          d="M4375 17347 c-8 -32 35 -147 117 -312 85 -171 152 -273 196 -298 29
              -17 35 -18 55 -4 32 21 47 79 47 183 -1 139 -31 188 -204 328 -161 130 -200
              149 -211 103z"
        />
        <path
          d="M7989 17299 c-79 -85 -172 -273 -167 -337 3 -36 4 -37 47 -40 92 -7
              177 53 202 140 15 52 15 202 0 241 -14 36 -45 35 -82 -4z"
        />
        <path
          d="M4112 17283 c-23 -54 -21 -156 5 -214 24 -54 75 -115 114 -135 49
              -25 129 -13 143 21 24 63 -166 365 -229 365 -9 0 -23 -17 -33 -37z"
        />
        <path
          fill={data.abs_left}
          d="M5720 17314 c-111 -19 -154 -30 -227 -56 -198 -71 -363 -228 -423
              -402 -27 -76 -37 -218 -20 -270 16 -48 50 -70 97 -63 20 4 102 38 183 77 174
              83 257 113 405 144 222 47 220 45 220 296 0 125 -4 197 -13 221 -12 33 -17 37
              -60 43 -77 11 -135 15 -162 10z"
        />
        <path
          fill={data.abs_right}
          d="M6323 17309 c-60 -18 -68 -44 -66 -219 1 -85 4 -191 8 -236 l7 -81
              127 -21 c147 -24 291 -70 458 -146 139 -63 214 -89 245 -84 63 9 62 221 -3
              393 -68 183 -403 383 -669 400 -41 2 -90 0 -107 -6z"
        />
        <path
          fill={data.serratus_right}
          d="M7852 16780 c-89 -32 -212 -102 -269 -154 -86 -78 -143 -215 -143
              -342 1 -168 85 -146 261 67 139 167 259 361 259 417 0 36 -30 39 -108 12z"
        />
        <path
          fill={data.serratus_left}
          d="M4255 16769 c-12 -38 5 -86 68 -191 121 -202 251 -349 344 -390 l47
              -21 18 23 c14 17 18 40 18 104 0 208 -85 333 -300 440 -125 63 -183 73 -195
              35z"
        />
        <path
          fill={data.dorsal_left}
          d="M4075 16703 c2 -16 9 -84 16 -153 20 -227 79 -447 169 -635 72 -148
              122 -219 237 -333 113 -114 137 -123 176 -70 28 38 34 151 13 243 -21 87 -92
              234 -146 300 -141 174 -276 367 -394 563 -37 61 -69 112 -71 112 -3 0 -2 -12
              0 -27z"
        />
        <path
          fill={data.dorsal_right}
          d="M8047 16628 c-14 -18 -37 -58 -52 -88 -40 -78 -146 -234 -263 -385
              -106 -136 -189 -280 -218 -380 -36 -125 -15 -277 40 -291 57 -14 165 82 271
              241 124 187 211 406 266 673 19 94 27 231 14 251 -12 20 -34 11 -58 -21z"
        />
        <path
          fill={data.abs_left}
          d="M5585 16556 c-289 -111 -482 -294 -531 -502 -20 -85 -15 -224 10
              -272 28 -54 54 -60 154 -34 124 32 244 42 510 42 l233 0 -3 328 c-4 358 -8
              381 -61 408 -111 58 -214 68 -312 30z"
        />
        <path
          fill={data.abs_right}
          d="M6360 16552 c-105 -44 -104 -41 -108 -429 l-3 -322 43 -5 c24 -3 147
              -10 273 -16 238 -11 413 -30 486 -51 39 -12 43 -12 60 10 43 53 58 178 35 285
              -57 253 -258 447 -550 531 -111 32 -155 31 -236 -3z"
        />
        <path
          fill={data.bicep_left}
          d="M3554 16258 c-68 -106 -111 -154 -396 -445 -141 -144 -264 -276 -273
              -294 -15 -28 -15 -33 -2 -46 23 -23 66 -8 149 49 94 66 275 248 361 363 101
              135 243 424 217 440 -5 3 -30 -27 -56 -67z"
        />
        <path
          fill={data.bicep_right}
          d="M8584 16263 c12 -51 94 -206 168 -318 148 -226 480 -503 564 -471 30
              12 -19 70 -290 345 -149 152 -306 320 -349 374 -81 100 -104 118 -93 70z"
        />
        <path
          fill={data.forearm_right}
          d="M9577 15867 c-30 -199 -39 -337 -33 -483 11 -277 47 -436 141 -624
              152 -302 590 -1030 916 -1521 175 -263 250 -359 279 -359 32 0 24 27 -39 124
              -125 194 -342 628 -409 817 -29 81 -91 322 -197 764 -108 450 -248 841 -381
              1065 -47 78 -123 179 -217 284 l-43 49 -17 -116z"
        />
        <path
          fill={data.forearm_left}
          d="M2522 15913 c-69 -74 -177 -245 -247 -388 -121 -250 -193 -469 -345
              -1065 -193 -754 -294 -1017 -534 -1382 -150 -229 -161 -254 -102 -226 38 17
              114 120 371 508 233 351 537 834 696 1105 146 250 243 486 276 669 31 176 18
              630 -23 774 -18 66 -34 67 -92 5z"
        />
        <path
          fill={data.abs_left}
          d="M5453 15620 c-166 -18 -259 -67 -325 -170 -72 -112 -109 -341 -74
              -448 31 -92 81 -115 268 -127 135 -8 242 -29 384 -76 186 -61 223 -55 243 42
              14 62 14 533 1 613 -12 76 -42 109 -125 136 -105 35 -229 45 -372 30z"
        />
        <path
          fill={data.abs_right}
          d="M6420 15616 c-67 -15 -115 -39 -134 -69 -29 -43 -38 -162 -34 -441 3
              -247 5 -275 23 -311 28 -55 66 -58 163 -11 78 37 202 63 432 91 153 18 191 28
              222 60 47 47 69 175 49 291 -27 154 -116 296 -216 344 -108 52 -369 76 -505
              46z"
        />
        <path
          fill={data.forearm_right}
          d="M8710 15430 c0 -138 21 -202 89 -270 51 -51 107 -85 351 -215 91 -48
              210 -116 264 -152 110 -72 142 -87 151 -73 9 15 -30 95 -82 169 -61 86 -345
              370 -449 447 -77 58 -305 204 -318 204 -3 0 -6 -49 -6 -110z"
        />
        <path
          fill={data.forearm_left}
          d="M3342 15463 c-174 -110 -287 -199 -427 -338 -78 -77 -165 -171 -194
              -210 -57 -78 -114 -183 -105 -196 8 -14 57 11 235 115 90 53 239 135 330 181
              189 96 236 134 282 232 25 55 30 79 31 142 2 153 -14 160 -152 74z"
        />
        <path
          fill={data.oblique_left}
          d="M4397 15387 c-48 -34 -121 -796 -122 -1257 0 -239 7 -275 76 -377 79
              -118 338 -336 486 -408 82 -41 143 -49 170 -22 29 29 28 148 -1 332 -31 193
              -60 470 -81 780 -28 399 -55 578 -105 676 -72 141 -355 326 -423 276z"
        />
        <path
          fill={data.oblique_right}
          d="M7658 15356 c-73 -30 -141 -80 -215 -159 -117 -126 -135 -203 -168
              -727 -18 -291 -48 -592 -77 -785 -27 -184 -30 -328 -6 -352 44 -44 193 11 348
              128 82 62 255 229 347 336 l45 52 -21 468 c-39 868 -50 1014 -77 1044 -24 27
              -104 25 -176 -5z"
        />
        <path
          fill={data.forearm_right}
          d="M8890 14918 c0 -152 199 -601 448 -1013 206 -339 599 -893 745 -1051
              47 -50 85 -80 132 -103 36 -18 73 -43 81 -57 20 -29 54 -32 54 -5 0 91 -515
              1043 -748 1381 -78 114 -211 288 -241 314 -21 19 -21 19 -21 -1 0 -11 38 -95
              84 -187 117 -228 139 -306 88 -306 -42 0 -66 40 -322 535 -220 425 -280 535
              -292 535 -4 0 -8 -19 -8 -42z"
        />
        <path
          fill={data.forearm_left}
          d="M3228 14841 c-18 -21 -71 -110 -117 -197 -134 -255 -196 -344 -238
              -344 -19 0 -23 5 -23 29 0 16 5 42 10 57 30 78 -41 11 -148 -140 -151 -212
              -400 -613 -560 -901 -65 -117 -305 -604 -317 -642 -10 -35 29 -30 105 15 178
              103 455 453 820 1037 315 504 478 834 520 1054 15 83 0 93 -52 32z"
        />
        <path
          fill={data.forearm_left}
          d="M2853 14709 c-120 -91 -264 -222 -341 -309 -126 -144 -230 -311 -497
              -800 -65 -118 -163 -294 -219 -390 -138 -240 -200 -364 -186 -368 17 -6 46 32
              142 181 306 476 396 606 769 1107 248 334 409 573 409 606 0 13 -2 24 -4 24
              -3 0 -36 -23 -73 -51z"
        />
        <path
          fill={data.forearm_right}
          d="M9264 14723 c19 -51 100 -165 532 -756 125 -171 219 -307 608 -877
              112 -164 195 -266 196 -239 0 8 -34 73 -76 145 -120 204 -233 404 -344 609
              -168 310 -247 449 -329 573 -147 222 -304 388 -474 503 -91 61 -124 73 -113
              42z"
        />
        <path
          fill={data.lower_abs_right}
          d="M6825 14706 c-105 -20 -298 -73 -371 -103 -76 -30 -103 -61 -134
              -151 -56 -169 -74 -485 -67 -1212 5 -576 11 -656 52 -747 20 -44 29 -53 63
              -63 32 -10 49 -9 95 4 46 13 64 26 107 73 194 219 390 899 476 1653 29 256 31
              421 8 480 -28 69 -102 90 -229 66z"
        />
        <path
          fill={data.lower_abs_left}
          d="M5213 14691 c-76 -20 -88 -58 -87 -261 3 -283 71 -703 190 -1174 96
              -376 199 -639 289 -735 94 -100 202 -127 266 -65 68 65 78 161 86 824 13 1166
              -34 1310 -452 1395 -95 20 -247 28 -292 16z"
        />
        <path
          fill={data.quadricep_left}
          d="M4162 13527 c-18 -21 -62 -184 -82 -302 -27 -159 -48 -370 -60 -614
              -10 -190 -9 -235 4 -220 3 4 70 378 137 769 49 290 50 426 1 367z"
        />
        <path
          fill={data.quadricep_right}
          d="M7989 13524 c-17 -21 -6 -112 47 -369 39 -194 164 -904 164 -936 0
              -7 2 -10 5 -7 7 6 -31 550 -50 718 -30 259 -69 463 -105 549 -24 54 -42 68
              -61 45z"
        />
        <path
          fill={data.quadricep_left}
          d="M4337 13403 c-84 -95 -241 -1135 -277 -1833 -47 -931 110 -2330 359
              -3200 68 -237 107 -332 194 -473 33 -55 54 -113 148 -417 65 -211 91 -249 130
              -187 19 30 20 43 15 182 -10 299 -120 1017 -251 1640 -61 286 -105 465 -173
              695 -47 161 -58 188 -60 156 -8 -90 47 -766 93 -1161 32 -271 45 -420 38 -445
              -9 -35 -36 -18 -50 30 -34 118 -116 715 -163 1180 -42 431 -52 592 -57 1006
              -7 556 7 816 102 1859 73 795 76 914 29 966 -21 24 -56 24 -77 2z"
        />
        <path
          fill={data.quadricep_right}
          d="M7773 13378 c-31 -56 -22 -266 42 -973 36 -405 58 -706 77 -1085 15
              -314 15 -1148 -1 -1365 -33 -464 -121 -1183 -177 -1465 -17 -85 -41 -131 -55
              -109 -20 32 -8 213 46 689 28 248 61 608 70 760 3 58 8 132 11 165 4 33 3 57
              0 54 -11 -11 -106 -340 -156 -544 -112 -456 -215 -1012 -311 -1675 -49 -340
              -55 -474 -23 -517 24 -32 48 -40 69 -23 17 14 59 140 124 372 45 163 83 258
              103 258 14 0 66 113 107 233 234 678 396 1673 432 2649 25 671 -36 1448 -176
              2263 -36 212 -52 268 -85 316 -30 42 -73 40 -97 -3z"
        />
        <path
          fill={data.quadricep_right}
          d="M7611 13089 c-22 -46 -78 -184 -126 -307 -47 -123 -140 -354 -206
              -515 -233 -565 -311 -760 -408 -1020 -212 -564 -358 -1017 -451 -1402 -39
              -159 -90 -419 -90 -456 0 -47 21 -7 79 154 173 475 344 886 641 1542 261 576
              365 831 459 1117 96 294 132 476 153 775 15 218 7 236 -51 112z"
        />
        <path
          fill={data.quadricep_left}
          d="M4545 13038 c-17 -248 55 -609 199 -1005 75 -208 124 -324 323 -768
              342 -763 503 -1142 647 -1528 121 -325 156 -396 156 -322 0 65 -99 481 -185
              776 -163 558 -367 1107 -823 2214 -104 253 -213 522 -243 598 -29 75 -56 137
              -60 137 -4 0 -10 -46 -14 -102z"
        />
        <path
          fill={data.abductor_right}
          d="M7407 13017 c-74 -77 -107 -136 -107 -190 0 -43 15 -55 41 -31 27 25
              141 252 136 272 -3 13 -20 0 -70 -51z"
        />
        <path
          fill={data.abductor_left}
          d="M4744 13035 c-9 -23 3 -62 52 -160 57 -115 76 -140 99 -131 40 15 -6
              171 -75 249 -43 49 -68 63 -76 42z"
        />
        <path
          fill={data.abductor_left}
          d="M5017 12732 c-29 -31 -50 -139 -44 -217 12 -138 69 -265 119 -265 32
              0 75 52 93 115 26 86 18 227 -15 282 -28 47 -94 103 -120 103 -9 0 -24 -8 -33
              -18z"
        />
        <path
          fill={data.abductor_right}
          d="M7056 12699 c-25 -27 -57 -74 -71 -104 -24 -48 -25 -57 -15 -96 26
              -98 118 -249 150 -249 29 0 105 183 117 281 8 65 -12 129 -54 179 -47 54 -70
              53 -127 -11z"
        />
        <path
          fill={data.hand_left}
          d="M1065 12659 c-38 -5 -99 -19 -134 -30 -123 -41 -398 -250 -389 -296
              5 -27 63 -42 163 -42 185 -2 373 36 452 90 65 45 178 163 202 211 18 38 19 44
              6 58 -19 18 -192 24 -300 9z"
        />
        <path
          fill={data.hand_right}
          d="M10883 12661 c-54 -9 -58 -13 -44 -52 25 -72 157 -210 241 -254 73
              -38 200 -59 360 -59 208 -1 247 17 199 90 -75 111 -354 248 -559 273 -92 12
              -132 12 -197 2z"
        />
        <path
          fill={data.hand_right}
          d="M10701 12590 c-1 -8 6 -69 14 -135 26 -205 16 -355 -40 -610 -15 -66
              -29 -159 -32 -206 -6 -84 -5 -87 18 -100 86 -46 472 -1 746 86 133 43 200 79
              231 125 61 90 -4 158 -338 358 -262 156 -411 275 -553 442 -25 30 -46 48 -46
              40z"
        />
        <path
          fill={data.hand_left}
          d="M1438 12562 c-14 -15 -44 -55 -67 -89 -64 -96 -193 -195 -496 -378
              -162 -99 -278 -186 -304 -229 -31 -50 -27 -80 19 -130 75 -81 243 -152 430
              -181 126 -19 461 -31 510 -18 l35 9 0 65 c-1 42 -13 108 -38 194 -57 206 -60
              231 -52 516 4 158 3 259 -3 262 -5 4 -20 -6 -34 -21z"
        />
        <path
          fill={data.hand_left}
          d="M1657 12479 c-36 -28 -55 -96 -69 -255 -13 -143 -2 -314 21 -337 47
              -47 142 185 157 388 9 108 -1 171 -31 201 -29 29 -45 30 -78 3z"
        />
        <path
          fill={data.abductor_left}
          d="M5306 12478 c-9 -12 -16 -39 -16 -58 0 -55 -27 -146 -72 -245 -53
              -115 -57 -159 -25 -256 51 -152 177 -397 234 -453 26 -26 32 -28 85 -22 32 4
              59 3 62 -3 3 -5 -6 -58 -20 -118 -29 -120 -28 -158 7 -298 21 -82 199 -688
              204 -693 6 -6 96 268 114 348 80 348 123 965 86 1246 -10 77 -21 147 -24 157
              -5 13 -18 -16 -40 -89 -54 -177 -93 -239 -148 -232 -25 3 -28 7 -27 38 0 19
              13 78 27 130 32 113 34 177 8 228 -32 62 -229 242 -336 307 -68 41 -98 44
              -119 13z"
        />
        <path
          fill={data.abductor_right}
          d="M6794 12486 c-17 -8 -63 -42 -103 -76 -101 -87 -321 -300 -321 -312
              0 -18 133 -326 187 -431 58 -113 133 -224 159 -234 34 -13 89 65 192 273 104
              209 125 268 119 329 -3 27 -24 95 -47 150 -23 55 -55 140 -72 190 -28 88 -50
              125 -72 125 -6 -1 -25 -7 -42 -14z"
        />
        <path
          fill={data.hand_right}
          d="M10457 12474 c-15 -14 -29 -42 -33 -62 -15 -77 16 -283 61 -416 27
              -78 73 -152 86 -139 21 21 42 163 42 288 0 137 -18 247 -50 314 -24 48 -67 54
              -106 15z"
        />
        <path
          fill={data.hand_left}
          d="M314 12220 c-83 -43 -272 -186 -295 -224 -22 -37 -17 -60 22 -101 47
              -48 92 -43 219 29 145 82 220 134 229 159 12 31 -15 118 -45 145 -33 29 -60
              28 -130 -8z"
        />
        <path
          fill={data.hand_right}
          d="M11751 12231 c-21 -21 -44 -62 -55 -98 -10 -31 41 -85 147 -154 101
              -67 180 -99 242 -99 84 0 109 78 49 157 -55 72 -280 213 -340 213 -13 0 -33
              -9 -43 -19z"
        />
        <path
          fill={data.quadricep_left}
          d="M4515 12118 c-33 -110 -77 -409 -107 -713 -7 -72 -12 -263 -12 -425
              0 -283 1 -300 28 -430 39 -192 138 -638 181 -815 115 -476 203 -929 330 -1689
              121 -726 99 -665 242 -673 l90 -6 6 684 c8 844 22 1174 69 1609 25 238 27 455
              4 559 -38 172 -97 319 -345 859 -237 516 -335 749 -386 917 -34 111 -61 175
              -74 175 -6 0 -17 -24 -26 -52z"
        />
        <path
          fill={data.quadricep_right}
          d="M7632 12143 c-5 -10 -24 -63 -42 -118 -40 -122 -171 -439 -315 -760
              -309 -688 -387 -879 -431 -1055 -38 -149 -40 -238 -10 -425 46 -286 84 -746
              107 -1275 11 -262 8 -700 -7 -1007 l-7 -133 69 1 c38 0 85 5 104 12 30 10 38
              20 52 63 9 28 29 129 43 225 117 774 239 1416 405 2129 100 427 107 462 140
              663 47 292 55 392 54 682 -1 288 -18 485 -69 780 -36 207 -64 274 -93 218z"
        />
        <path
          fill={data.abductor_right}
          d="M6241 12031 c-26 -47 -33 -171 -28 -436 7 -357 41 -655 102 -915 27
              -113 104 -350 114 -350 7 0 172 558 214 724 l30 119 -18 56 c-21 67 -85 197
              -168 341 -79 137 -162 312 -176 374 -14 57 -37 106 -51 106 -5 0 -14 -8 -19
              -19z"
        />
        <path
          fill={data.hand_left}
          d="M463 11611 c-71 -51 -219 -269 -306 -449 -63 -130 -61 -210 5 -200
              27 4 101 104 211 287 149 248 189 345 155 379 -17 17 -20 16 -65 -17z"
        />
        <path
          fill={data.hand_right}
          d="M11666 11614 c-9 -8 -16 -24 -16 -35 0 -46 176 -353 296 -516 59 -80
              92 -107 119 -97 45 18 -7 177 -125 383 -131 229 -222 317 -274 265z"
        />
        <path
          fill={data.hand_left}
          d="M712 11393 c-28 -60 -82 -180 -120 -268 -123 -286 -138 -349 -89
              -391 59 -51 97 2 242 336 150 347 159 394 77 418 -21 7 -44 12 -49 12 -5 0
              -33 -48 -61 -107z"
        />
        <path
          fill={data.hand_right}
          d="M11360 11477 c-32 -21 -35 -28 -34 -68 2 -53 55 -188 164 -415 83
              -173 127 -245 166 -270 22 -15 26 -15 49 0 14 9 25 24 25 34 -1 53 -160 466
              -248 642 -53 107 -67 115 -122 77z"
        />
        <path
          fill={data.hand_left}
          d="M1094 11410 c-16 -6 -32 -38 -61 -122 -135 -378 -163 -517 -116 -563
              31 -31 49 -18 86 63 69 152 207 545 207 591 0 36 -63 53 -116 31z"
        />
        <path
          fill={data.hand_left}
          d="M1452 11397 c-31 -33 -68 -130 -107 -282 -42 -164 -51 -243 -32 -269
              11 -15 17 -17 35 -7 12 6 28 24 36 40 40 77 156 450 156 502 0 44 -53 54 -88
              16z"
        />
        <path
          fill={data.hand_right}
          d="M10675 11404 c-18 -18 -16 -37 17 -174 38 -161 131 -381 165 -395 9
              -3 24 -3 34 0 31 10 23 70 -31 249 -54 180 -96 282 -129 315 -25 25 -35 26
              -56 5z"
        />
        <path
          fill={data.hand_right}
          d="M10981 11411 c-20 -13 -14 -35 83 -314 97 -280 128 -351 161 -373 27
              -18 57 -7 76 27 15 30 -11 150 -75 344 -64 192 -99 267 -138 300 -30 25 -80
              33 -107 16z"
        />
        <path
          fill={data.quadricep_right}
          d="M6631 9778 c-42 -99 -155 -483 -225 -765 -84 -340 -116 -596 -116
              -927 0 -507 78 -824 220 -896 89 -45 179 -9 221 89 47 108 54 195 54 691 0
              446 -5 566 -41 1060 -30 419 -65 746 -84 779 -7 12 -13 5 -29 -31z"
        />
        <path
          fill={data.quadricep_left}
          d="M5522 9727 c-59 -231 -129 -1428 -119 -2008 5 -320 12 -357 74 -448
              114 -166 267 -120 336 100 76 246 118 712 88 990 -49 451 -255 1297 -338 1392
              -23 25 -29 22 -41 -26z"
        />
        <path
          d="M7635 7579 c-5 -7 -23 -70 -41 -139 -62 -240 -218 -723 -245 -756
              -19 -24 -60 -163 -79 -268 -24 -131 -24 -146 -5 -146 8 0 15 4 15 9 0 19 93
              112 150 149 32 22 100 57 151 78 l91 38 -4 500 c-5 474 -11 572 -33 535z"
        />
        <path
          d="M4545 7235 c-9 -357 -3 -645 15 -690 13 -35 26 -45 59 -45 44 0 143
              -64 237 -153 56 -53 94 -82 94 -73 0 38 -33 217 -51 281 -12 39 -48 134 -80
              212 -56 134 -103 270 -217 633 l-49 155 -8 -320z"
        />
        <path
          d="M6287 7148 c-28 -255 -21 -429 29 -676 31 -155 80 -302 150 -450 93
              -195 162 -383 218 -595 60 -228 52 -231 82 28 22 192 15 376 -20 504 -15 51
              -53 152 -87 225 -152 330 -253 641 -320 986 -12 63 -25 118 -29 123 -3 4 -14
              -61 -23 -145z"
        />
        <path
          d="M5875 7238 c-3 -13 -16 -77 -30 -143 -52 -246 -120 -458 -253 -790
              -141 -354 -172 -477 -172 -696 0 -122 27 -318 50 -359 13 -23 26 18 44 146 30
              198 81 348 217 637 102 214 132 297 154 422 30 176 44 724 19 788 -9 24 -23
              21 -29 -5z"
        />
        <path
          d="M5115 7156 c-60 -19 -86 -34 -133 -80 -52 -50 -77 -120 -62 -175 23
              -88 136 -233 208 -267 32 -15 36 -15 87 11 64 31 189 159 224 229 41 83 9 172
              -86 237 -82 57 -156 71 -238 45z"
        />
        <path
          d="M6941 7149 c-47 -9 -80 -27 -124 -68 -126 -116 -69 -304 122 -405
              102 -54 122 -50 201 32 89 93 150 185 150 227 0 101 -96 188 -235 214 -32 6
              -61 11 -64 10 -3 -1 -26 -5 -50 -10z"
        />
        <path
          d="M5359 6554 c-30 -30 -46 -37 -105 -46 -122 -18 -114 -14 -114 -57 0
              -45 49 -215 85 -298 22 -49 27 -55 40 -42 8 8 33 81 55 163 23 82 52 176 66
              209 40 100 29 128 -27 71z"
        />
        <path
          d="M6824 6515 c-7 -18 -7 -18 58 -268 28 -108 55 -194 59 -190 8 10 139
              404 139 421 0 7 -14 12 -38 12 -21 0 -72 9 -113 20 -90 24 -98 24 -105 5z"
        />
        <path
          d="M4705 6161 c-31 -13 -52 -42 -63 -86 -42 -164 -11 -616 68 -985 46
              -217 139 -615 285 -1218 139 -576 311 -1309 391 -1667 127 -563 186 -749 250
              -791 17 -12 23 -12 40 0 19 14 18 20 -38 238 -32 123 -80 304 -107 404 -165
              606 -199 866 -236 1784 -28 703 -63 1097 -131 1489 -75 438 -193 721 -337 810
              -39 23 -95 34 -122 22z"
        />
        <path
          d="M7372 6153 c-52 -25 -117 -106 -165 -206 -170 -352 -250 -903 -297
              -2067 -37 -915 -102 -1345 -307 -2039 -77 -264 -105 -373 -98 -397 6 -26 44
              -38 78 -25 51 20 81 128 297 1087 177 789 313 1374 440 1894 198 816 260 1157
              260 1440 0 185 -30 279 -100 315 -37 19 -67 19 -108 -2z"
        />
        <path
          d="M6461 5648 c-15 -46 -47 -208 -60 -303 -38 -269 -67 -803 -57 -1040
              8 -187 10 -202 41 -241 32 -39 50 -27 97 67 75 148 93 275 92 649 0 282 -12
              506 -39 710 -13 102 -39 190 -55 190 -5 0 -13 -15 -19 -32z"
        />
        <path
          d="M5690 5645 c-43 -112 -59 -262 -67 -595 -6 -278 7 -563 33 -738 15
              -108 68 -233 106 -253 49 -26 73 50 89 285 23 336 -48 1112 -118 1287 -18 45
              -30 49 -43 14z"
        />
        <path
          d="M4500 5039 c-16 -66 -17 -408 -1 -519 32 -230 104 -535 306 -1290
              138 -517 249 -960 339 -1350 100 -434 118 -494 143 -498 12 -2 32 2 43 8 19
              10 21 18 17 58 -2 26 -18 99 -35 162 -39 143 -90 395 -292 1435 -255 1306
              -326 1632 -416 1898 -53 159 -83 186 -104 96z"
        />
        <path
          d="M7631 5041 c-63 -88 -137 -409 -401 -1736 -196 -983 -314 -1558 -361
              -1754 -35 -148 -35 -157 -7 -172 19 -10 25 -8 44 16 28 35 65 147 105 320 80
              342 279 1130 374 1480 254 941 316 1255 317 1630 1 135 -2 178 -15 208 -19 45
              -29 46 -56 8z"
        />
        <path
          d="M6562 4069 c-56 -170 -62 -202 -72 -369 -14 -218 15 -1382 36 -1489
              7 -34 18 -40 28 -15 9 24 33 238 51 449 36 445 47 638 51 945 l5 325 -29 140
              -28 140 -42 -126z"
        />
        <path
          d="M5561 4108 c-18 -49 -22 -237 -12 -563 23 -718 53 -1180 77 -1204 9
              -10 22 21 28 68 22 177 44 608 52 1016 6 260 4 325 -10 401 -28 163 -83 304
              -117 304 -5 0 -13 -10 -18 -22z"
        />
        <path
          d="M5575 1266 c-24 -37 -32 -80 -60 -329 -14 -122 -32 -270 -41 -329
              -19 -137 -15 -148 61 -148 82 0 102 13 115 74 12 60 46 422 55 586 8 145 0
              164 -67 168 -41 3 -49 0 -63 -22z"
        />
        <path
          d="M6469 1267 c-8 -18 -4 -72 15 -218 14 -107 33 -257 42 -334 26 -233
              36 -255 119 -255 66 0 75 12 75 102 0 80 -46 490 -65 583 -8 39 -15 73 -15 77
              0 3 -12 20 -26 37 -23 28 -32 31 -80 31 -47 0 -56 -3 -65 -23z"
        />
        <path
          d="M5860 1220 c-18 -33 -39 -204 -57 -455 -15 -210 -15 -244 -2 -270 16
              -34 67 -47 88 -22 23 29 33 190 29 462 -3 149 -8 278 -13 288 -10 23 -32 22
              -45 -3z"
        />
        <path
          d="M5377 1193 c-24 -28 -53 -108 -86 -244 -41 -169 -71 -341 -71 -410 0
              -68 14 -84 64 -75 61 12 81 77 116 376 11 96 27 212 36 258 13 65 14 85 4 97
              -17 20 -43 19 -63 -2z"
        />
        <path
          d="M6315 1200 c-29 -47 -33 -646 -5 -705 20 -40 72 -48 91 -13 23 44 -6
              459 -47 645 -15 71 -27 93 -39 73z"
        />
        <path
          d="M6772 1198 c-17 -17 -15 -76 8 -224 11 -71 26 -188 34 -259 17 -140
              38 -226 60 -244 8 -7 36 -11 63 -9 l48 3 3 43 c2 23 -12 113 -32 200 -40 185
              -50 252 -37 271 17 25 67 -63 136 -240 76 -194 108 -239 168 -239 79 0 85 21
              30 119 -113 205 -293 441 -335 441 -19 0 -58 54 -58 81 0 24 -39 69 -59 69 -9
              0 -22 -5 -29 -12z"
        />
        <path
          d="M5213 1048 c-12 -12 -75 -111 -141 -218 -65 -107 -139 -226 -164
              -265 -25 -38 -45 -71 -44 -72 1 -2 31 2 65 8 115 21 162 90 262 389 54 162 59
              198 22 158z"
        />
        <path
          d="M4766 359 c-49 -39 -62 -141 -18 -147 47 -7 101 82 82 134 -12 31
              -35 36 -64 13z"
        />
        <path
          d="M7346 365 c-24 -24 -20 -41 22 -86 46 -52 98 -77 118 -57 27 27 -46
              135 -102 152 -14 4 -28 1 -38 -9z"
        />
        <path
          d="M4957 300 c-48 -43 -70 -99 -56 -138 11 -30 32 -28 69 9 62 63 90
              159 48 167 -9 2 -37 -15 -61 -38z"
        />
        <path
          d="M6355 331 c-58 -25 -79 -108 -51 -203 40 -139 186 -165 227 -40 16
              49 7 146 -17 179 -43 57 -111 85 -159 64z"
        />
        <path
          d="M7183 325 c-27 -20 -20 -80 14 -123 34 -42 77 -67 100 -58 25 10 11
              85 -25 138 -34 50 -62 63 -89 43z"
        />
        <path
          d="M5745 315 c-22 -8 -41 -15 -42 -15 -1 0 -10 -14 -18 -31 -25 -47 -21
              -150 7 -207 19 -39 30 -49 60 -56 70 -17 110 34 131 164 12 79 -6 134 -48 150
              -33 13 -41 12 -90 -5z"
        />
        <path
          d="M5136 265 c-42 -45 -63 -166 -30 -179 56 -21 146 123 114 183 -15 29
              -56 27 -84 -4z"
        />
        <path
          d="M5382 279 c-47 -18 -66 -114 -36 -189 22 -54 58 -64 91 -26 20 24 23
              37 23 116 0 87 0 88 -28 98 -15 5 -37 6 -50 1z"
        />
        <path
          d="M6721 276 c-10 -11 -7 -38 12 -123 l24 -108 32 -3 c37 -4 77 18 86
              48 3 11 1 45 -5 76 -15 73 -59 124 -105 124 -18 0 -38 -6 -44 -14z"
        />
        <path
          d="M6971 281 c-22 -14 -6 -68 39 -127 65 -86 105 -94 102 -20 -2 43 -26
              103 -54 133 -22 23 -62 30 -87 14z"
        />
      </g>
    </svg>
  );
};
export default FrontBody;