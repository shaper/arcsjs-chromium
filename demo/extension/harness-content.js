/**
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file or at
 * https://developers.google.com/open-source/licenses/bsd
 */
/* This exists to allow module importing to work. */
(async () => {
  const src = chrome.runtime.getURL("harness.js");
  const {bootHarness} = await import(src);
  await bootHarness();
})();