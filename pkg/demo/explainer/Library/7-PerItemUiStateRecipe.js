
/**
 * @license
 * Copyright 2021 Google LLC.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const local = `/arcsjs-chromium/pkg/demo/explainer/Library`;

export const PerItemUIStateRecipe = {
  $meta: {
    description: 'Per Item UI State'
  },
  $stores: {
    fonts: {
      $type: `[Key]`,
      $tags: ['simple']
    },
    pickedFont: {
      $type: `FontKey`
    }
  },
  main: {
    $kind: `${local}/7-PerItemUiState`,
    $bindings: {
      fonts: 'fonts',
      pickedFont: 'pickedFont'
    }
  }
};
