// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Pixeloria homepage smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads with correct title and hero heading", async ({ page }) => {
    await expect(page).toHaveTitle(/Pixeloria/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Assemblez un design/i,
      }),
    ).toBeVisible();
  });

  test("primary navigation anchors resolve to sections", async ({ page }) => {
    const sections = ["services", "marketing", "portfolio", "process", "contact"];
    for (const id of sections) {
      const link = page.locator(`.site-nav a[href="#${id}"]`);
      await expect(link).toBeVisible();
      await link.click();
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("mobile menu toggle opens and closes the navigation", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 420, height: 800 });
    const toggle = page.locator(".menu-toggle");
    const nav = page.locator(".site-nav");

    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(nav).toHaveClass(/is-open/);

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(nav).not.toHaveClass(/is-open/);
  });

  test("footer year is populated by script.js", async ({ page }) => {
    const year = await page.locator("#year").textContent();
    const currentYear = new Date().getFullYear();
    // Allow the current year or the year immediately after, to avoid
    // end-of-year timezone flakiness when CI/browser differ by one day.
    expect([String(currentYear), String(currentYear + 1)]).toContain(
      (year || "").trim(),
    );
  });

  test("contact form has required inputs", async ({ page }) => {
    const form = page.locator("form.contact-form");
    await expect(form).toBeVisible();
    for (const name of ["first_name", "name", "email", "message"]) {
      await expect(form.locator(`[name="${name}"]`)).toHaveAttribute(
        "required",
        "",
      );
    }
  });

  test("no console errors on load", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // Ignore offline/analytics fetch failures that are unrelated to the UI.
        if (/_vercel\/insights|Failed to load resource/i.test(text)) return;
        errors.push(text);
      }
    });
    await page.reload();
    await page.waitForLoadState("domcontentloaded");
    expect(errors).toEqual([]);
  });
});
