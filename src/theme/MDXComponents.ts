import React from 'react';

// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Infobox from '@site/src/components/Infobox';
import RunmeStars from '@site/src/components/RunmeStars';
import EnvironmentOptions from "@site/src/components/EnvironmentOptions"

export default {
  ...MDXComponents,
  RunmeStars,
  Infobox,
  EnvironmentOptions,
};
