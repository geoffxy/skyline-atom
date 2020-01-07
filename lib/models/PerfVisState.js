'use babel';

export default {
  // When the plugin is waiting for results from the profiler
  ANALYZING: 'analyzing',

  // When the plugin is ready for interactions
  READY: 'ready',

  // When the plugin has detected modifications to project files
  MODIFIED: 'modified',

  // When the plugin is showing the user's predictions
  SHOWING_PREDICTIONS: 'showing_predictions',

  // When there has been an error processing the user's input
  ERROR: 'error',
};