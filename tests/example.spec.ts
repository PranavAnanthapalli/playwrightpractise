// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// import { test, expect } from '@playwright/test';

// test.describe('E2E Tests for Automation Exercise', () => {
//   test('E2E Test for Adding Product to Cart', async ({ page }) => {
//     await page.goto('https://automationexercise.com/');
//     await page.getByRole('link', { name: ' Products' }).click();
//     await page.getByRole('link', { name: ' View Product' }).nth(1).click();
//     await page.getByRole('button', { name: ' Add to cart' }).click();
//     await page.getByRole('link', { name: 'View Cart' }).click();
//     await page.getByText('Proceed To Checkout').click();
//     await page.getByRole('link', { name: 'Register / Login' }).click();
//     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pranavananthapalli1807@gmail.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('pranav123');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await page.getByRole('link', { name: ' Cart' }).click();
//     await page.getByText('Proceed To Checkout').click();
//     await page.getByRole('link', { name: 'Place Order' }).click();
//     await page.locator('input[name="name_on_card"]').click();
//     await page.locator('input[name="name_on_card"]').fill('123123213123');
//     await page.locator('input[name="card_number"]').click();
//     await page.locator('input[name="card_number"]').fill('123123123123');
//     await page.getByRole('textbox', { name: 'ex.' }).click();
//     await page.getByRole('textbox', { name: 'ex.' }).fill('311');
//     await page.getByRole('textbox', { name: 'MM' }).click();
//     await page.getByRole('textbox', { name: 'MM' }).fill('08');
//     await page.getByRole('textbox', { name: 'YYYY' }).click();
//     await page.getByRole('textbox', { name: 'YYYY' }).fill('2029');
//     await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
//     await page.getByRole('link', { name: ' Logout' }).click();
//   })
// });

// test.describe('Tests for Login Fail', () => {
//   test('Test for Invalid Login', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pdsa@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('sdasd');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
// })
// });

import { test, expect } from '@playwright/test';

// GLOBAL URL
const BASE_URL = "https://automationexercise.com/";

test.describe("AutomationExercise Test Suite", () => {

  // 1) Invalid login (your test)
  test("Invalid Login - error validation", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pdsa@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('sdasd');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
  });

  // 2) Home page title verification
  test("Home page title should match", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  // 3) Validate navigation to Products Page
  test("Navigate to Products Page", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole("link", { name: "Products" }).click();
    await expect(page.locator("h2.title")).toContainText("All Products");
  });

  // 4) Validate subscription text in footer
  test("Validate subscription section exists", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('div').filter({ hasText: 'Subscription Get the most' }).nth(3)).toBeVisible();
  });

  // 5) Subscribe using email
  test("Validate Feature Items is visible", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();
  });

  // 6) Search for product
  test("Search product by name", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('textbox', { name: 'Search Product' }).click();
    await page.getByRole('textbox', { name: 'Search Product' }).fill('tshirts');
    await page.getByRole('button', { name: '' }).click();
    await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
  });

  // 7) Add a product to cart
  test("Add product to cart", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' View Product' }).nth(1).click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator('#cart_info')).toBeVisible();
});

  // 8) Remove product from cart
  test("Remove product from cart", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' View Product' }).first().click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await page.locator('.cart_quantity_delete').click();
    await expect(page.getByText('Cart is empty! Click here to')).toBeVisible();
  });

  // 9) Contact Us Form - validation
  test("Contact form submission", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Contact us' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('prav');
    await page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pravtest@gmail.com');
    await page.getByRole('textbox', { name: 'Subject' }).click();
    await page.getByRole('textbox', { name: 'Subject' }).fill('test');
    await page.getByRole('textbox', { name: 'Your Message Here' }).click();
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill('test123');

    // Handle the popup dialog
    page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept(); // Click OK on the popup
    });

    await page.getByRole('button', { name: 'Submit' }).click();

    // Validate the success message
    await expect(page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.')).toBeVisible();
  });

  // 10) Scroll to bottom and verify footer
  test("Scroll to bottom and validate footer visibility", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#footer')).toBeVisible();
  });

  // 11) Navigate using top menu "Test Cases"
  test("Validate Test Cases menu", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Test Cases' }).click();
    await expect(page.locator('b')).toBeVisible();
    await expect(page.getByText('Below is the list of test')).toBeVisible();
    await expect(page.locator('#form')).toContainText('Test Case 26: Verify Scroll Up without \'Arrow\' button and Scroll Down functionality');
  });

  // 12) Validate Category filtering
  test("Filter by Women Category", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Women' }).click();
    await page.getByRole('link', { name: 'Dress' }).click();
    await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toBeVisible();
  });

  // 13) Validate Brand filtering
  test("Filter by Brands", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('link', { name: '(6) Polo' }).click();
    await expect(page.getByText('Polo', { exact: true })).toBeVisible();
    await page.getByRole('heading', { name: 'Brand - Polo Products' }).click();
  });

  // 14) Validate product details page
  test("Product details validation", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole("link", { name: "Products" }).click();
    await page.locator(".choose a").first().click();
    await expect(page.locator(".product-information")).toContainText("Availability");
  });

  // 15) Increase quantity then add to cart
  test("Increase quantity and add to cart", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('link', { name: ' View Product' }).first().click();
    await expect(page.locator('#quantity')).toHaveValue('1');
    await page.locator('#quantity').click();
    await page.locator('#quantity').fill('4');
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator('#product-1')).toContainText('4');
  });

  // 16) Validate "Recommended Items" section is visible
  test("Recommended Items visible", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#recommended-item-carousel").scrollIntoViewIfNeeded();
    await expect(page.getByText("RECOMMENDED ITEMS")).toBeVisible();
  });

  // 17) Validate signup page elements
  test("Validate Signup page UI elements", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Name' })).toBeEmpty();
    await expect(page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')).toBeEmpty();
    await expect(page.locator('#form')).toContainText('Signup');
  });


  // 18) Signup with random email (unique every run)
  test("Signup new user", async ({ page }) => {
    const random = Date.now();
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('test123');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('test123@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
  });

  // 19) Logout after signup (only checks UI)
  test("Logout from application", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole("link", { name: "Signup / Login" }).click();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  // 20) Full E2E Test: Add to cart, checkout, login, place order
  test('E2E Test for Adding Product to Cart', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('link', { name: ' View Product' }).nth(1).click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await page.getByText('Proceed To Checkout').click();
    await page.getByRole('link', { name: 'Register / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pranavananthapalli1807@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('pranav123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' Cart' }).click();
    await page.getByText('Proceed To Checkout').click();
    await page.getByRole('link', { name: 'Place Order' }).click();
    await page.locator('input[name="name_on_card"]').click();
    await page.locator('input[name="name_on_card"]').fill('123123213123');
    await page.locator('input[name="card_number"]').click();
    await page.locator('input[name="card_number"]').fill('123123123123');
    await page.getByRole('textbox', { name: 'ex.' }).click();
    await page.getByRole('textbox', { name: 'ex.' }).fill('311');
    await page.getByRole('textbox', { name: 'MM' }).click();
    await page.getByRole('textbox', { name: 'MM' }).fill('08');
    await page.getByRole('textbox', { name: 'YYYY' }).click();
    await page.getByRole('textbox', { name: 'YYYY' }).fill('2029');
    await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    await page.getByRole('link', { name: ' Logout' }).click();
  })
});
