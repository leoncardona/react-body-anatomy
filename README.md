## Introduction

`@leoncardona/react-body-anatomy` is a React component library that provides two components: FrontBody and BackBody. These components allow you to render an SVG of the human body with customizable colors for different muscle groups. The FrontBody component displays the front view of the body, while the BackBody component displays the back view.

## Installation

You can install the package using npm:

```bash
npm install @leoncardona/react-body-anatomy
```

## Usage
To use the *FrontBody* or *BackBody* component, import it into your React application and simply render it with the desired props.

**FrontBody**
```jsx
import React from 'react';
import { FrontBody } from '@leoncardona/react-body-anatomy/FrontBody';

const MyFrontBodyComponent = () => {
  const data = {
    bicep_right: "#008000",
    bicep_left: "#008000"
  };
  
  // Optional: Set a custom color for the entire body (default is #000000)
  const color = "#E0322F";

  return (
    <FrontBody data={data} color={color} />
  );
};
```

**BackBody**
```jsx
import React from 'react';
import { BackBody } from '@leoncardona/react-body-anatomy/BackBody';

const MyBackBodyComponent = () => {
  const data = {
    trapezius_right: "#008000",
    trapezius_left: "#008000"
  };
  
  // Optional: Set a custom color for the entire body (default is #000000)
  const color = "#E0322F";

  return (
    <BackBody data={data} color={color} />
  );
};
```

## Props
| Prop   | Type              | Description                                                                                       |
|--------|-------------------|---------------------------------------------------------------------------------------------------|
| data   | Object (Required) | An object containing the muscle groups and their corresponding colors. The keys should be muscle names, and the values should be color codes (e.g. "#008000").                          |
| color  | String (Optional) | The optional prop to set a custom color for the entire body. The default color is #000000.      |


## List of muscles
|       *FrontBody*      |      *BackBody*       |
|:--------------------:|:-------------------:|
|   trapezius_right    |   trapezius_right   |
|    trapezius_left    |    trapezius_left   |
| lateral_deltoid_right|    rhomboid_right   |
| lateral_deltoid_left |    rhomboid_left    |
|     pectoral_right   |      teres_right    |
|     pectoral_left    |      teres_left     |
| anterior_deltoid_right|    tricep_right    |
| anterior_deltoid_left |    tricep_left     |
|       bicep_right    |    dorsal_right    |
|       bicep_left     |    dorsal_left     |
|     serratus_right   |posterior_deltoid_right|
|     serratus_left    |posterior_deltoid_left |
|        abs_right     |    forearm_right   |
|        abs_left      |    forearm_left    |
|       dorsal_right   |      hand_right    |
|       dorsal_left    |      hand_left     |
|     forearm_right    |   gluteus_right    |
|     forearm_left     |   gluteus_left     |
|      oblique_right   |  hamstring_right   |
|      oblique_left    |  hamstring_left    |
|    lower_abs_right   |      calf_right    |
|    lower_abs_left    |      calf_left     |
|    quadricep_right   |        -           |
|    quadricep_left    |        -           |
|      abductor_right  |        -           |
|      abductor_left   |        -           |
|       hand_right     |        -           |
|       hand_left      |        -           |
