import { assertEquals } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { fieldEN, fieldKH, fieldNumber, fieldPhone } from "./index.ts";

Deno.test("fieldEN filters non-English characters", () => {
  const input = { value: "abc123!@#" } as HTMLInputElement;
  const event = { preventDefault: () => {}, target: input } as unknown as Event;

  fieldEN(event);
  assertEquals(input.value, "abc123");
});

Deno.test("fieldKH filters non-Khmer characters", () => {
  const input = { value: "ខ្មែរ123!@#" } as HTMLInputElement;
  const event = { preventDefault: () => {}, target: input } as unknown as Event;

  fieldKH(event);
  assertEquals(input.value, "ខ្មែរ");
});

Deno.test("fieldNumber filters non-numeric characters", () => {
  const input = { value: "123abc!@#" } as HTMLInputElement;
  const event = { preventDefault: () => {}, target: input } as unknown as Event;

  fieldNumber(event);
  assertEquals(input.value, "123");
});

Deno.test("fieldPhone formats Cambodian phone numbers", () => {
  const input = { value: "1234567890" } as HTMLInputElement;
  const event = { preventDefault: () => {}, target: input } as unknown as Event;

  fieldPhone(event);
  assertEquals(input.value, "012 345 6789");
});