import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './styles.css';

//import Box from './components/box/box';
//import Controls from './components/controls/controls';

function Game() {

  const [ position, setPosition ] = useState({
    position: 2
  })

  const [ positionState, setPositionState ] = useState({
    1: {
      className: "little-block"
    },
    2: {
      className: "little-block-selected"
    },
    3: {
      className: "little-block"
    },
    4: {
      className: "little-block"
    },
    5: {
      className: "little-block"
    },
    6: {
      className: "little-block"
    },
    7: {
      className: "little-block"
    },
    8: {
      className: "little-block"
    },
    9: {
      className: "little-block"
    },
    10: {
      className: "little-block"
    },
    11: {
      className: "little-block"
    },
    12: {
      className: "little-block"
    },
    13: {
      className: "little-block"
    },
    14: {
      className: "little-block"
    },
    15: {
      className: "little-block"
    },
    16: {
      className: "little-block"
    },
    17: {
      className: "little-block"
    },
    18: {
      className: "little-block"
    },
    19: {
      className: "little-block"
    },
    20: {
      className: "little-block"
    },
    21: {
      className: "little-block"
    },
    22: {
      className: "little-block-selected"
    },
    23: {
      className: "little-block"
    },
    24: {
      className: "little-block"
    },
    25: {
      className: "little-block"
    },
    26: {
      className: "little-block"
    },
    27: {
      className: "little-block"
    },
    28: {
      className: "little-block"
    },
    29: {
      className: "little-block"
    },
    30: {
      className: "little-block"
    },
    31: {
      className: "little-block"
    },
    32: {
      className: "little-block"
    },
    33: {
      className: "little-block"
    },
    34: {
      className: "little-block"
    },
    35: {
      className: "little-block"
    },
    36: {
      className: "little-block"
    },
    37: {
      className: "little-block"
    },
    38: {
      className: "little-block"
    },
    39: {
      className: "little-block"
    },
    40: {
      className: "little-block"
    },
    41: {
      className: "little-block"
    },
    42: {
      className: "little-block-selected"
    },
    43: {
      className: "little-block"
    },
    44: {
      className: "little-block"
    },
    45: {
      className: "little-block"
    },
    46: {
      className: "little-block"
    },
    47: {
      className: "little-block"
    },
    48: {
      className: "little-block"
    },
    49: {
      className: "little-block"
    },
    50: {
      className: "little-block"
    },
    51: {
      className: "little-block"
    },
    52: {
      className: "little-block"
    },
    53: {
      className: "little-block"
    },
    54: {
      className: "little-block"
    },
    55: {
      className: "little-block"
    },
    56: {
      className: "little-block"
    },
    57: {
      className: "little-block"
    },
    58: {
      className: "little-block"
    },
    59: {
      className: "little-block"
    },
    60: {
      className: "little-block"
    },
    61: {
      className: "little-block"
    },
    62: {
      className: "little-block"
    },
    63: {
      className: "little-block"
    },
    64: {
      className: "little-block"
    },
    65: {
      className: "little-block"
    },
    66: {
      className: "little-block"
    },
    67: {
      className: "little-block"
    },
    68: {
      className: "little-block"
    },
    69: {
      className: "little-block"
    },
    70: {
      className: "little-block"
    },
    71: {
      className: "little-block"
    },
    72: {
      className: "little-block"
    },
    73: {
      className: "little-block"
    },
    74: {
      className: "little-block"
    },
    75: {
      className: "little-block"
    },
    76: {
      className: "little-block"
    },
    77: {
      className: "little-block"
    },
    78: {
      className: "little-block"
    },
    79: {
      className: "little-block"
    },
    80: {
      className: "little-block"
    },
    81: {
      className: "little-block"
    },
    82: {
      className: "little-block"
    },
    83: {
      className: "little-block"
    },
    84: {
      className: "little-block"
    },
    85: {
      className: "little-block"
    },
    86: {
      className: "little-block"
    },
    87: {
      className: "little-block"
    },
    88: {
      className: "little-block"
    },
    89: {
      className: "little-block"
    },
    90: {
      className: "little-block"
    },
    91: {
      className: "little-block"
    },
    92: {
      className: "little-block"
    },
    93: {
      className: "little-block"
    },
    94: {
      className: "little-block"
    },
    95: {
      className: "little-block"
    },
    96: {
      className: "little-block"
    },
    97: {
      className: "little-block"
    },
    98: {
      className: "little-block"
    },
    99: {
      className: "little-block"
    },
    100: {
      className: "little-block"
    },
    101: {
      className: "little-block"
    },
    102: {
      className: "little-block"
    },
    103: {
      className: "little-block"
    },
    104: {
      className: "little-block"
    },
    105: {
      className: "little-block"
    },
    106: {
      className: "little-block"
    },
    107: {
      className: "little-block"
    },
    108: {
      className: "little-block"
    },
    109: {
      className: "little-block"
    },
    110: {
      className: "little-block"
    },
    111: {
      className: "little-block"
    },
    112: {
      className: "little-block"
    },
    113: {
      className: "little-block"
    },
    114: {
      className: "little-block"
    },
    115: {
      className: "little-block"
    },
    116: {
      className: "little-block"
    },
    117: {
      className: "little-block"
    },
    118: {
      className: "little-block"
    },
    119: {
      className: "little-block"
    },
    120: {
      className: "little-block"
    },
    121: {
      className: "little-block"
    },
    122: {
      className: "little-block"
    },
    123: {
      className: "little-block"
    },
    124: {
      className: "little-block"
    },
    125: {
      className: "little-block"
    },
    126: {
      className: "little-block"
    },
    127: {
      className: "little-block"
    },
    128: {
      className: "little-block"
    },
    129: {
      className: "little-block"
    },
    130: {
      className: "little-block"
    },
    131: {
      className: "little-block"
    },
    132: {
      className: "little-block"
    },
    133: {
      className: "little-block"
    },
    134: {
      className: "little-block"
    },
    135: {
      className: "little-block"
    },
    136: {
      className: "little-block"
    },
    137: {
      className: "little-block"
    },
    138: {
      className: "little-block"
    },
    139: {
      className: "little-block"
    },
    140: {
      className: "little-block"
    },
    141: {
      className: "little-block"
    },
    142: {
      className: "little-block"
    },
    143: {
      className: "little-block"
    },
    144: {
      className: "little-block"
    },
    145: {
      className: "little-block"
    },
    146: {
      className: "little-block"
    },
    147: {
      className: "little-block"
    },
    148: {
      className: "little-block"
    },
    149: {
      className: "little-block"
    },
    150: {
      className: "little-block"
    },
    151: {
      className: "little-block"
    },
    152: {
      className: "little-block"
    },
    153: {
      className: "little-block"
    },
    154: {
      className: "little-block"
    },
    155: {
      className: "little-block"
    },
    156: {
      className: "little-block"
    },
    157: {
      className: "little-block"
    },
    158: {
      className: "little-block"
    },
    159: {
      className: "little-block"
    },
    160: {
      className: "little-block"
    },
    161: {
      className: "little-block"
    },
    162: {
      className: "little-block"
    },
    163: {
      className: "little-block"
    },
    164: {
      className: "little-block"
    },
    165: {
      className: "little-block"
    },
    166: {
      className: "little-block"
    },
    167: {
      className: "little-block"
    },
    168: {
      className: "little-block"
    },
    169: {
      className: "little-block"
    },
    170: {
      className: "little-block"
    },
    171: {
      className: "little-block"
    },
    172: {
      className: "little-block"
    },
    173: {
      className: "little-block"
    },
    174: {
      className: "little-block"
    },
    175: {
      className: "little-block"
    },
    176: {
      className: "little-block"
    },
    177: {
      className: "little-block"
    },
    178: {
      className: "little-block"
    },
    179: {
      className: "little-block"
    },
    180: {
      className: "little-block"
    },
    181: {
      className: "little-block"
    },
    182: {
      className: "little-block"
    },
    183: {
      className: "little-block"
    },
    184: {
      className: "little-block"
    },
    185: {
      className: "little-block"
    },
    186: {
      className: "little-block"
    },
    187: {
      className: "little-block"
    },
    188: {
      className: "little-block"
    },
    189: {
      className: "little-block"
    },
    190: {
      className: "little-block"
    },
    191: {
      className: "little-block"
    },
    192: {
      className: "little-block"
    },
    193: {
      className: "little-block"
    },
    194: {
      className: "little-block"
    },
    195: {
      className: "little-block"
    },
    196: {
      className: "little-block"
    },
    197: {
      className: "little-block"
    },
    198: {
      className: "little-block"
    },
    199: {
      className: "little-block"
    },
    200: {
      className: "little-block"
    },
    201: {
      className: "little-block"
    },
    202: {
      className: "little-block"
    },
    203: {
      className: "little-block"
    },
    204: {
      className: "little-block"
    },
    205: {
      className: "little-block"
    },
    206: {
      className: "little-block"
    },
    207: {
      className: "little-block"
    },
    208: {
      className: "little-block"
    },
    209: {
      className: "little-block"
    },
    210: {
      className: "little-block"
    },
    211: {
      className: "little-block"
    },
    212: {
      className: "little-block"
    },
    213: {
      className: "little-block"
    },
    214: {
      className: "little-block"
    },
    215: {
      className: "little-block"
    },
    216: {
      className: "little-block"
    },
    217: {
      className: "little-block"
    },
    218: {
      className: "little-block"
    },
    219: {
      className: "little-block"
    },
    220: {
      className: "little-block"
    },
    221: {
      className: "little-block"
    },
    222: {
      className: "little-block"
    },
    223: {
      className: "little-block"
    },
    224: {
      className: "little-block"
    },
    225: {
      className: "little-block"
    },
    226: {
      className: "little-block"
    },
    227: {
      className: "little-block"
    },
    228: {
      className: "little-block"
    },
    229: {
      className: "little-block"
    },
    230: {
      className: "little-block"
    },
    231: {
      className: "little-block"
    },
    232: {
      className: "little-block"
    },
    233: {
      className: "little-block"
    },
    234: {
      className: "little-block"
    },
    235: {
      className: "little-block"
    },
    236: {
      className: "little-block"
    },
    237: {
      className: "little-block"
    },
    238: {
      className: "little-block"
    },
    239: {
      className: "little-block"
    },
    240: {
      className: "little-block"
    },
    241: {
      className: "little-block"
    },
    242: {
      className: "little-block"
    },
    243: {
      className: "little-block"
    },
    244: {
      className: "little-block"
    },
    245: {
      className: "little-block"
    },
    246: {
      className: "little-block"
    },
    247: {
      className: "little-block"
    },
    248: {
      className: "little-block"
    },
    249: {
      className: "little-block"
    },
    250: {
      className: "little-block"
    },
    251: {
      className: "little-block"
    },
    252: {
      className: "little-block"
    },
    253: {
      className: "little-block"
    },
    254: {
      className: "little-block"
    },
    255: {
      className: "little-block"
    },
    256: {
      className: "little-block"
    },
    257: {
      className: "little-block"
    },
    258: {
      className: "little-block"
    },
    259: {
      className: "little-block"
    },
    260: {
      className: "little-block"
    },
    261: {
      className: "little-block"
    },
    262: {
      className: "little-block"
    },
    263: {
      className: "little-block"
    },
    264: {
      className: "little-block"
    },
    265: {
      className: "little-block"
    },
    266: {
      className: "little-block"
    },
    267: {
      className: "little-block"
    },
    268: {
      className: "little-block"
    },
    269: {
      className: "little-block"
    },
    270: {
      className: "little-block"
    },
    271: {
      className: "little-block"
    },
    272: {
      className: "little-block"
    },
    273: {
      className: "little-block"
    },
    274: {
      className: "little-block"
    },
    275: {
      className: "little-block"
    },
    276: {
      className: "little-block"
    },
    277: {
      className: "little-block"
    },
    278: {
      className: "little-block"
    },
    279: {
      className: "little-block"
    },
    280: {
      className: "little-block"
    },
    281: {
      className: "little-block"
    },
    282: {
      className: "little-block"
    },
    283: {
      className: "little-block"
    },
    284: {
      className: "little-block"
    },
    285: {
      className: "little-block"
    },
    286: {
      className: "little-block"
    },
    287: {
      className: "little-block"
    },
    288: {
      className: "little-block"
    },
    289: {
      className: "little-block"
    },
    290: {
      className: "little-block"
    },
    291: {
      className: "little-block"
    },
    292: {
      className: "little-block"
    },
    293: {
      className: "little-block"
    },
    294: {
      className: "little-block"
    },
    295: {
      className: "little-block"
    },
    296: {
      className: "little-block"
    },
    297: {
      className: "little-block"
    },
    298: {
      className: "little-block"
    },
    299: {
      className: "little-block"
    },
    300: {
      className: "little-block"
    },
    301: {
      className: "little-block"
    },
    302: {
      className: "little-block-selected"
    },
    303: {
      className: "little-block"
    },
    304: {
      className: "little-block"
    },
    305: {
      className: "little-block"
    },
    306: {
      className: "little-block"
    },
    307: {
      className: "little-block"
    },
    308: {
      className: "little-block"
    },
    309: {
      className: "little-block"
    },
    310: {
      className: "little-block"
    },
    311: {
      className: "little-block"
    },
    312: {
      className: "little-block-selected"
    },
    313: {
      className: "little-block"
    },
    314: {
      className: "little-block"
    },
    315: {
      className: "little-block"
    },
    316: {
      className: "little-block"
    },
    317: {
      className: "little-block"
    },
    318: {
      className: "little-block"
    },
    319: {
      className: "little-block"
    },
    32: {
      className: "little-block"
    },
    321: {
      className: "little-block"
    },
    322: {
      className: "little-block-selected"
    },
    323: {
      className: "little-block"
    },
    324: {
      className: "little-block"
    },
    325: {
      className: "little-block"
    },
    326: {
      className: "little-block"
    },
    327: {
      className: "little-block"
    },
    328: {
      className: "little-block"
    },
    329: {
      className: "little-block"
    },
    330: {
      className: "little-block"
    },
    331: {
      className: "little-block"
    },
    332: {
      className: "little-block-selected"
    },
    333: {
      className: "little-block"
    },
    334: {
      className: "little-block"
    },
    335: {
      className: "little-block"
    },
    336: {
      className: "little-block"
    },
    337: {
      className: "little-block"
    },
    338: {
      className: "little-block"
    },
    339: {
      className: "little-block"
    },
    340: {
      className: "little-block"
    },
    341: {
      className: "little-block"
    },
    342: {
      className: "little-block-selected"
    },
    343: {
      className: "little-block"
    },
    344: {
      className: "little-block"
    },
    345: {
      className: "little-block"
    },
    346: {
      className: "little-block"
    },
    347: {
      className: "little-block"
    },
    348: {
      className: "little-block"
    },
    349: {
      className: "little-block"
    },
    350: {
      className: "little-block"
    },
    351: {
      className: "little-block"
    },
    352: {
      className: "little-block-selected"
    },
    353: {
      className: "little-block"
    },
    354: {
      className: "little-block"
    },
    355: {
      className: "little-block"
    },
    356: {
      className: "little-block"
    },
    357: {
      className: "little-block"
    },
    358: {
      className: "little-block"
    },
    359: {
      className: "little-block"
    },
    360: {
      className: "little-block"
    },
    361: {
      className: "little-block"
    },
    362: {
      className: "little-block-selected"
    },
    363: {
      className: "little-block"
    },
    364: {
      className: "little-block"
    },
    365: {
      className: "little-block"
    },
    366: {
      className: "little-block"
    },
    367: {
      className: "little-block"
    },
    368: {
      className: "little-block"
    },
    369: {
      className: "little-block"
    },
    370: {
      className: "little-block"
    },
    371: {
      className: "little-block"
    },
    372: {
      className: "little-block-selected"
    },
    373: {
      className: "little-block"
    },
    374: {
      className: "little-block"
    },
    375: {
      className: "little-block"
    },
    376: {
      className: "little-block"
    },
    377: {
      className: "little-block"
    },
    378: {
      className: "little-block"
    },
    379: {
      className: "little-block"
    },
    380: {
      className: "little-block"
    },
    381: {
      className: "little-block"
    },
    382: {
      className: "little-block-selected"
    },
    383: {
      className: "little-block"
    },
    384: {
      className: "little-block"
    },
    385: {
      className: "little-block"
    },
    386: {
      className: "little-block"
    },
    387: {
      className: "little-block"
    },
    388: {
      className: "little-block"
    },
    389: {
      className: "little-block"
    },
    390: {
      className: "little-block"
    },
    391: {
      className: "little-block"
    },
    392: {
      className: "little-block-selected"
    },
    393: {
      className: "little-block"
    },
    394: {
      className: "little-block"
    },
    395: {
      className: "little-block"
    },
    396: {
      className: "little-block"
    },
    397: {
      className: "little-block"
    },
    398: {
      className: "little-block"
    },
    399: {
      className: "little-block"
    },
    400: {
      className: "little-block"
    },


  });
  function changeRight() {
    setPosition({
      position: position.position + 1
    });

    console.log("Position: " + position.position);
    
    let noStyledPosition = [];

    let counter = position.position + 1;
    console.log("Counter: " + counter);

    while(counter <= 20) {
      noStyledPosition.push(counter);
      counter++;
      console.log(noStyledPosition);
    }

    counter = position.position - 1;

    while(counter >= 1) {
      noStyledPosition.push(counter);
      counter--;
      console.log(noStyledPosition);
    }

    setPositionState({
      [position.position]: {
        className: "little-block-selected"
      },
      [noStyledPosition[0]]: {
        className: "little-block"
      },
      [noStyledPosition[1]]: {
        className: "little-block"
      },
      [noStyledPosition[2]]: {
        className: "little-block"
      },
      [noStyledPosition[3]]: {
        className: "little-block"
      },
      [noStyledPosition[4]]: {
        className: "little-block"
      },
      [noStyledPosition[5]]: {
        className: "little-block"
      },
      [noStyledPosition[6]]: {
        className: "little-block"
      },
      [noStyledPosition[7]]: {
        className: "little-block"
      },
      [noStyledPosition[8]]: {
        className: "little-block"
      },
      [noStyledPosition[9]]: {
        className: "little-block"
      },
      [noStyledPosition[10]]: {
        className: "little-block"
      },
      [noStyledPosition[11]]: {
        className: "little-block"
      },
      [noStyledPosition[12]]: {
        className: "little-block"
      },
      [noStyledPosition[13]]: {
        className: "little-block"
      },
      [noStyledPosition[14]]: {
        className: "little-block"
      },
      [noStyledPosition[15]]: {
        className: "little-block"
      },
      [noStyledPosition[16]]: {
        className: "little-block"
      },
      [noStyledPosition[17]]: {
        className: "little-block"
      },
      [noStyledPosition[18]]: {
        className: "little-block"
      },
      [noStyledPosition[19]]: {
        className: "little-block"
      },
      
    })
  }

  function changeLeft() {
    setPosition({
      position: position.position - 1
    });
    console.log("Position: " + position.position);
    
    let noStyledPosition = [];

    let counter = position.position + 1;
    console.log("Counter: " + counter);

    while(counter <= 20) {
      noStyledPosition.push(counter);
      counter++;
      console.log(noStyledPosition);
    }

    counter = position.position - 1;

    while(counter >= 1) {
      noStyledPosition.push(counter);
      counter--;
      console.log(noStyledPosition);
    }

    setPositionState({
      [position.position]: {
        className: "little-block-selected"
      },
      [noStyledPosition[0]]: {
        className: "little-block"
      },
      [noStyledPosition[1]]: {
        className: "little-block"
      },
      [noStyledPosition[2]]: {
        className: "little-block"
      },
      [noStyledPosition[3]]: {
        className: "little-block"
      },
      [noStyledPosition[4]]: {
        className: "little-block"
      },
      [noStyledPosition[5]]: {
        className: "little-block"
      },
      [noStyledPosition[6]]: {
        className: "little-block"
      },
      [noStyledPosition[7]]: {
        className: "little-block"
      },
      [noStyledPosition[8]]: {
        className: "little-block"
      },
      [noStyledPosition[9]]: {
        className: "little-block"
      },
      [noStyledPosition[10]]: {
        className: "little-block"
      },
      [noStyledPosition[11]]: {
        className: "little-block"
      },
      [noStyledPosition[12]]: {
        className: "little-block"
      },
      [noStyledPosition[13]]: {
        className: "little-block"
      },
      [noStyledPosition[14]]: {
        className: "little-block"
      },
      [noStyledPosition[15]]: {
        className: "little-block"
      },
      [noStyledPosition[16]]: {
        className: "little-block"
      },
      [noStyledPosition[17]]: {
        className: "little-block"
      },
      [noStyledPosition[18]]: {
        className: "little-block"
      },
      [noStyledPosition[19]]: {
        className: "little-block"
      },
      
    })
    
  }

  return (
    <>
    <div className="BOX">
    <div className="Game">
      <div className="block">
        <div className="block-block" id="1"></div>
        <div className="block-block" id="2"></div>
        <div className="block-block" id="3"></div>
        <div className="block-block" id="4"></div>
        <div className="block-block" id="5"></div>
        <div className="block-block" id="6"></div>
        <div className="block-block" id="7"></div>
        <div className="block-block" id="8"></div>
        <div className="block-block" id="9"></div>
        <div className="block-block"  id="10"></div>
        <div className="block-block"  id="11"></div>
        <div className="block-block"  id="12"></div>
        <div className="block-block"  id="13"></div>
        <div className="block-block"  id="14"></div>
        <div className="block-block"  id="15"></div>
        <div className="block-block"  id="16"></div>
        <div className="block-block"  id="17"></div>
        <div className="block-block"  id="18"></div>
        <div className="block-block"  id="19"></div>
        <div className="block-block"  id="20"></div>
      </div>

      <div className="block">
       <div className="block-block" id="21"></div>
        <div className={positionState[2].className} id="22"></div>
        <div className={positionState[3].className} id="23"></div>
        <div className={positionState[4].className} id="24"></div>
        <div className={positionState[5].className} id="25"></div>
        <div className={positionState[6].className} id="26"></div>
        <div className={positionState[7].className} id="27"></div>
        <div className={positionState[8].className} id="28"></div>
        <div className={positionState[9].className} id="29"></div>
        <div className={positionState[10].className} id="30"></div>
        <div className={positionState[11].className} id="31"></div>
        <div className={positionState[12].className} id="32"></div>
        <div className={positionState[13].className} id="33"></div>
        <div className={positionState[14].className} id="34"></div>
        <div className={positionState[15].className} id="35"></div>
        <div className={positionState[16].className} id="36"></div>
        <div className={positionState[17].className} id="37"></div>
        <div className={positionState[18].className} id="38"></div>
        <div className={positionState[19].className} id="39"></div>
        <div className="block-block" id="40"></div>
      </div>

      <div className="block">
        <div className="block-block" id="41"></div>
        <div className="little-block" id="42"></div>
        <div className="little-block" id="43"></div>
        <div className="little-block" id="44"></div>
        <div className="little-block" id="45"></div>
        <div className="little-block" id="46"></div>
        <div className="little-block" id="47"></div>
        <div className="little-block" id="48"></div>
        <div className="little-block" id="49"></div>
        <div className="little-block" id="50"></div>
        <div className="little-block" id="51"></div>
        <div className="little-block" id="52"></div>
        <div className="little-block" id="53"></div>
        <div className="little-block" id="54"></div>
        <div className="little-block" id="55"></div>
        <div className="little-block" id="56"></div>
        <div className="little-block" id="57"></div>
        <div className="little-block" id="58"></div>
        <div className="little-block" id="59"></div>
        <div className="block-block" id="60"></div>

      </div>
      <div className="block">
        <div className="block-block" id="61"></div>
        <div className="little-block" id="62"></div>
        <div className="little-block" id="63"></div>
        <div className="little-block" id="64"></div>
        <div className="little-block" id="65"></div>
        <div className="little-block" id="66"></div>
        <div className="little-block" id="67"></div>
        <div className="little-block" id="68"></div>
        <div className="little-block" id="69"></div>
        <div className="little-block" id="70"></div>
        <div className="little-block" id="71"></div>
        <div className="little-block" id="72"></div>
        <div className="little-block" id="73"></div>
        <div className="little-block" id="74"></div>
        <div className="little-block" id="75"></div>
        <div className="little-block" id="76"></div>
        <div className="little-block" id="77"></div>
        <div className="little-block" id="78"></div>
        <div className="little-block" id="79"></div>
        <div className="block-block" id="80"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="81"></div>
        <div className="little-block" id="82"></div>
        <div className="little-block" id="83"></div>
        <div className="little-block" id="84"></div>
        <div className="little-block" id="85"></div>
        <div className="little-block" id="86"></div>
        <div className="little-block" id="87"></div>
        <div className="little-block" id="88"></div>
        <div className="little-block" id="89"></div>
        <div className="little-block" id="90"></div>
        <div className="little-block" id="91"></div>
        <div className="little-block" id="92"></div>
        <div className="little-block" id="93"></div>
        <div className="little-block" id="94"></div>
        <div className="little-block" id="95"></div>
        <div className="little-block" id="96"></div>
        <div className="little-block" id="97"></div>
        <div className="little-block" id="98"></div>
        <div className="little-block" id="99"></div>
        <div className="block-block" id="100"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="101"></div>
        <div className="little-block" id="102"></div>
        <div className="little-block" id="103"></div>
        <div className="little-block" id="104"></div>
        <div className="little-block" id="105"></div>
        <div className="little-block" id="106"></div>
        <div className="little-block" id="107"></div>
        <div className="little-block" id="108"></div>
        <div className="little-block" id="109"></div>
        <div className="little-block" id="110"></div>
        <div className="little-block" id="111"></div>
        <div className="little-block" id="112"></div>
        <div className="little-block" id="113"></div>
        <div className="little-block" id="114"></div>
        <div className="little-block" id="115"></div>
        <div className="little-block" id="116"></div>
        <div className="little-block" id="117"></div>
        <div className="little-block" id="118"></div>
        <div className="little-block" id="119"></div>
        <div className="block-block" id="120"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="121"></div>
        <div className="little-block" id="122"></div>
        <div className="little-block" id="123"></div>
        <div className="little-block" id="124"></div>
        <div className="little-block" id="125"></div>
        <div className="little-block" id="126"></div>
        <div className="little-block" id="127"></div>
        <div className="little-block" id="128"></div>
        <div className="little-block" id="129"></div>
        <div className="little-block" id="130"></div>
        <div className="little-block" id="131"></div>
        <div className="little-block" id="132"></div>
        <div className="little-block" id="133"></div>
        <div className="little-block" id="134"></div>
        <div className="little-block" id="135"></div>
        <div className="little-block" id="136"></div>
        <div className="little-block" id="137"></div>
        <div className="little-block" id="138"></div>
        <div className="little-block" id="139"></div>
        <div className="block-block" id="140"></div>

      </div>
      <div className="block">
        
        <div className="block-block"id="141"></div>
        <div className="little-block" id="142"></div>
        <div className="little-block" id="143"></div>
        <div className="little-block" id="144"></div>
        <div className="little-block" id="145"></div>
        <div className="little-block" id="146"></div>
        <div className="little-block" id="147"></div>
        <div className="little-block" id="148"></div>
        <div className="little-block" id="149"></div>
        <div className="little-block" id="150"></div>
        <div className="little-block" id="151"></div>
        <div className="little-block" id="152"></div>
        <div className="little-block" id="153"></div>
        <div className="little-block" id="154"></div>
        <div className="little-block" id="155"></div>
        <div className="little-block" id="156"></div>
        <div className="little-block" id="157"></div>
        <div className="little-block" id="158"></div>
        <div className="little-block" id="159"></div>
        <div className="block-block" id="160"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="161"></div>
        <div className="little-block" id="162"></div>
        <div className="little-block" id="163"></div>
        <div className="little-block" id="164"></div>
        <div className="little-block" id="165"></div>
        <div className="little-block" id="166"></div>
        <div className="little-block" id="167"></div>
        <div className="little-block" id="168"></div>
        <div className="little-block" id="169"></div>
        <div className="little-block" id="170"></div>
        <div className="little-block" id="171"></div>
        <div className="little-block" id="172"></div>
        <div className="little-block" id="173"></div>
        <div className="little-block" id="174"></div>
        <div className="little-block" id="175"></div>
        <div className="little-block" id="176"></div>
        <div className="little-block" id="177"></div>
        <div className="little-block" id="178"></div>
        <div className="little-block" id="179"></div>
        <div className="block-block" id="180"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="181"></div>
        <div className="little-block" id="182"></div>
        <div className="little-block" id="183"></div>
        <div className="little-block" id="184"></div>
        <div className="little-block" id="185"></div>
        <div className="little-block" id="186"></div>
        <div className="little-block" id="187"></div>
        <div className="little-block" id="188"></div>
        <div className="little-block" id="189"></div>
        <div className="little-block" id="190"></div>
        <div className="little-block" id="191"></div>
        <div className="little-block" id="192"></div>
        <div className="little-block" id="193"></div>
        <div className="little-block" id="194"></div>
        <div className="little-block" id="195"></div>
        <div className="little-block" id="196"></div>
        <div className="little-block" id="197"></div>
        <div className="little-block" id="198"></div>
        <div className="little-block" id="209"></div>
        <div className="block-block" id="200"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="201"></div>
        <div className="little-block" id="202"></div>
        <div className="little-block" id="203"></div>
        <div className="little-block" id="204"></div>
        <div className="little-block" id="205"></div>
        <div className="little-block" id="206"></div>
        <div className="little-block" id="207"></div>
        <div className="little-block" id="208"></div>
        <div className="little-block" id="209"></div>
        <div className="little-block" id="210"></div>
        <div className="little-block" id="211"></div>
        <div className="little-block" id="212"></div>
        <div className="little-block" id="213"></div>
        <div className="little-block" id="214"></div>
        <div className="little-block" id="215"></div>
        <div className="little-block" id="216"></div>
        <div className="little-block" id="217"></div>
        <div className="little-block" id="218"></div>
        <div className="little-block" id="219"></div>
        <div className="block-block" id="220"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="221"></div>
        <div className="little-block" id="222"></div>
        <div className="little-block" id="223"></div>
        <div className="little-block" id="224"></div>
        <div className="little-block" id="225"></div>
        <div className="little-block" id="226"></div>
        <div className="little-block" id="227"></div>
        <div className="little-block" id="228"></div>
        <div className="little-block" id="229"></div>
        <div className="little-block" id="230"></div>
        <div className="little-block" id="231"></div>
        <div className="little-block" id="232"></div>
        <div className="little-block" id="233"></div>
        <div className="little-block" id="234"></div>
        <div className="little-block" id="235"></div>
        <div className="little-block" id="236"></div>
        <div className="little-block" id="237"></div>
        <div className="little-block" id="238"></div>
        <div className="little-block" id="239"></div>
        <div className="block-block" id="240"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="241"></div>
        <div className="little-block" id="242"></div>
        <div className="little-block" id="243"></div>
        <div className="little-block" id="244"></div>
        <div className="little-block" id="245"></div>
        <div className="little-block" id="246"></div>
        <div className="little-block" id="247"></div>
        <div className="little-block" id="248"></div>
        <div className="little-block" id="249"></div>
        <div className="little-block" id="250"></div>
        <div className="little-block" id="251"></div>
        <div className="little-block" id="252"></div>
        <div className="little-block" id="253"></div>
        <div className="little-block" id="254"></div>
        <div className="little-block" id="255"></div>
        <div className="little-block" id="256"></div>
        <div className="little-block" id="257"></div>
        <div className="little-block" id="258"></div>
        <div className="little-block" id="259"></div>
        <div className="block-block" id="260"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="261"></div>
        <div className="little-block" id="262"></div>
        <div className="little-block" id="263"></div>
        <div className="little-block" id="264"></div>
        <div className="little-block" id="265"></div>
        <div className="little-block" id="266"></div>
        <div className="little-block" id="267"></div>
        <div className="little-block" id="268"></div>
        <div className="little-block" id="269"></div>
        <div className="little-block" id="270"></div>
        <div className="little-block" id="271"></div>
        <div className="little-block" id="272"></div>
        <div className="little-block" id="273"></div>
        <div className="little-block" id="274"></div>
        <div className="little-block" id="275"></div>
        <div className="little-block" id="276"></div>
        <div className="little-block" id="277"></div>
        <div className="little-block" id="278"></div>
        <div className="little-block" id="279"></div>
        <div className="block-block" id="280"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="281"></div>
        <div className="little-block" id="282"></div>
        <div className="little-block" id="283"></div>
        <div className="little-block" id="284"></div>
        <div className="little-block" id="285"></div>
        <div className="little-block" id="286"></div>
        <div className="little-block" id="287"></div>
        <div className="little-block" id="288"></div>
        <div className="little-block" id="289"></div>
        <div className="little-block" id="290"></div>
        <div className="little-block" id="291"></div>
        <div className="little-block" id="292"></div>
        <div className="little-block" id="293"></div>
        <div className="little-block" id="294"></div>
        <div className="little-block" id="295"></div>
        <div className="little-block" id="296"></div>
        <div className="little-block" id="297"></div>
        <div className="little-block" id="298"></div>
        <div className="little-block" id="299"></div>
        <div className="block-block" id="300"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="301"></div>
        <div className="little-block" id="302"></div>
        <div className="little-block" id="303"></div>
        <div className="little-block" id="304"></div>
        <div className="little-block" id="305"></div>
        <div className="little-block" id="306"></div>
        <div className="little-block" id="307"></div>
        <div className="little-block" id="308"></div>
        <div className="little-block" id="309"></div>
        <div className="little-block" id="310"></div>
        <div className="little-block" id="311"></div>
        <div className="little-block" id="312"></div>
        <div className="little-block" id="313"></div>
        <div className="little-block" id="314"></div>
        <div className="little-block" id="315"></div>
        <div className="little-block" id="316"></div>
        <div className="little-block" id="317"></div>
        <div className="little-block" id="318"></div>
        <div className="little-block" id="319"></div>
        <div className="block-block" id="320"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="321"></div>
        <div className="little-block" id="322"></div>
        <div className="little-block" id="323"></div>
        <div className="little-block" id="324"></div>
        <div className="little-block" id="325"></div>
        <div className="little-block" id="326"></div>
        <div className="little-block" id="327"></div>
        <div className="little-block" id="328"></div>
        <div className="little-block" id="329"></div>
        <div className="little-block" id="330"></div>
        <div className="little-block" id="331"></div>
        <div className="little-block" id="332"></div>
        <div className="little-block" id="333"></div>
        <div className="little-block" id="334"></div>
        <div className="little-block" id="335"></div>
        <div className="little-block" id="336"></div>
        <div className="little-block" id="337"></div>
        <div className="little-block" id="338"></div>
        <div className="little-block" id="339"></div>
        <div className="block-block" id="340"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="341"></div>
        <div className="little-block" id="342"></div>
        <div className="little-block" id="343"></div>
        <div className="little-block" id="344"></div>
        <div className="little-block" id="345"></div>
        <div className="little-block" id="346"></div>
        <div className="little-block" id="347"></div>
        <div className="little-block" id="348"></div>
        <div className="little-block" id="349"></div>
        <div className="little-block" id="350"></div>
        <div className="little-block" id="351"></div>
        <div className="little-block" id="352"></div>
        <div className="little-block" id="353"></div>
        <div className="little-block" id="354"></div>
        <div className="little-block" id="355"></div>
        <div className="little-block" id="356"></div>
        <div className="little-block" id="357"></div>
        <div className="little-block" id="358"></div>
        <div className="little-block" id="359"></div>
        <div className="block-block" id="360"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="361"></div>
        <div className="little-block" id="362"></div>
        <div className="little-block" id="363"></div>
        <div className="little-block" id="364"></div>
        <div className="little-block" id="365"></div>
        <div className="little-block" id="366"></div>
        <div className="little-block" id="367"></div>
        <div className="little-block" id="368"></div>
        <div className="little-block" id="369"></div>
        <div className="little-block" id="370"></div>
        <div className="little-block" id="371"></div>
        <div className="little-block" id="372"></div>
        <div className="little-block" id="373"></div>
        <div className="little-block" id="374"></div>
        <div className="little-block" id="375"></div>
        <div className="little-block" id="376"></div>
        <div className="little-block" id="377"></div>
        <div className="little-block" id="378"></div>
        <div className="little-block" id="379"></div>
        <div className="block-block" id="380"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="381"></div>
        <div className="block-block" id="382"></div>
        <div className="block-block" id="383"></div>
        <div className="block-block" id="384"></div>
        <div className="block-block" id="385"></div>
        <div className="block-block" id="386"></div>
        <div className="block-block" id="387"></div>
        <div className="block-block" id="388"></div>
        <div className="block-block" id="389"></div>
        <div className="block-block" id="390"></div>
        <div className="block-block" id="391"></div>
        <div className="block-block" id="392"></div>
        <div className="block-block" id="393"></div>
        <div className="block-block" id="394"></div>
        <div className="block-block" id="395"></div>
        <div className="block-block" id="396"></div>
        <div className="block-block" id="397"></div>
        <div className="block-block" id="398"></div>
        <div className="block-block" id="399"></div>
        <div className="block-block" id="400"></div>

      </div>
    </div>
    </div>
    <div className="controls">
            <FaArrowLeft className="icon" onClick={() => changeLeft()}></FaArrowLeft>
            <FaArrowDown className="icon"></FaArrowDown>
            <FaArrowUp className="icon"></FaArrowUp>
            <FaArrowRight className="icon" onClick={()=>changeRight()}></FaArrowRight>
        </div>
    </>
  );
}

export default Game;
