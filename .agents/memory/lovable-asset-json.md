---
name: Lovable .asset.json placeholders
description: How to recover missing images from Lovable-imported projects
---

Lovable exports may contain `*.asset.json` files instead of real images. These are CDN references; imports like `foo.url` resolve to `/__l5e/assets-v1/...`, which only works behind Lovable's proxy.

**Why:** the GitHub export doesn't bundle binary assets; the site shows broken/placeholder images anywhere these are used.

**How to apply:** download the real file from `https://id-preview--<project_id>.lovable.app<url>` (fields in the .asset.json), save it under the original filename in `src/assets/`, delete the .asset.json, and change imports to the real file (drop `.url`).
