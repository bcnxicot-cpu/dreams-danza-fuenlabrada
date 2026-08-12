import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("contact CTAs use desktop-safe Gmail and WhatsApp links", () => {
  assert.match(page, /https:\/\/wa\.me\/34641219125/);
  assert.match(page, /https:\/\/mail\.google\.com\/mail\/\?view=cm/);
  assert.doesNotMatch(page, /mailto:/);
});

test("all navigation targets exist", () => {
  for (const id of ["inicio", "probar", "escena", "contacto"]) {
    assert.match(page, new RegExp(`id=\\"${id}\\"`));
  }
});

test("mobile typography and overflow safeguards are present", () => {
  assert.match(css, /overflow-x:\s*hidden/);
  assert.match(css, /@media \(max-width: 700px\)/);
  assert.match(css, /font-size:\s*clamp\(45px, 13\.6vw, 62px\)/);
});

test("claims and image provenance are conservative", () => {
  assert.match(page, /50\+ reseñas/);
  assert.match(page, /Foto: Mario Cubo/);
  assert.doesNotMatch(page, /€|euros|precio/);
});
