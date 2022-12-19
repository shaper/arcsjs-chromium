/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file or at
 * https://developers.google.com/open-source/licenses/bsd
 */
import '../webcomponents-bundle.js';

const path = globalThis.config?.arcsjs || 'https://arcsjs.web.app/latest';

const core = `${path}/Library/Core`;
const lib = `${path}/Library`;

export const {
  Paths, logFactory, XenComposer: Composer, MessageBus
} = (await Promise.all([
  import(`${core}/utils.min.js`),
  import(`${lib}/App/Worker/MessageBus.js`),
  import(`${lib}/App/surface-imports.js`),
  import(`${lib}/Dom/Surfaces/Default/XenComposer.js`)
])).reduce((e, m) =>({...e, ...m}),{});

const url = Paths.getAbsoluteHereUrl(import.meta, 2);

// calculate important paths
export const paths = {
  $app: url,
  $config: `${url}/conf/config.js`,
  $library: `${globalThis.config.arcsjs}/Library`,
};

