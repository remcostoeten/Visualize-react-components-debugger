require('dotenv').config();

import React from 'react';
import { VisualizeComponent as DevVisualizeComponent } from './VisualizeComponent';

const VisualizeComponent = process.env.NODE_ENV === 'production' ? React.Fragment : DevVisualizeComponent;

export default VisualizeComponent;