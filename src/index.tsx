import React from 'react';
import { VisualizeComponent as DevVisualizeComponent } from './VisualizeComponent';

export const VisualizeComponent = process.env.NODE_ENV === 'production' ? React.Fragment : DevVisualizeComponent;