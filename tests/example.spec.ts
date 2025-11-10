// // import { test, expect } from '@playwright/test';

// // test('has title', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Playwright/);
// // });

// // test('get started link', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Click the get started link.
// //   await page.getByRole('link', { name: 'Get started' }).click();

// //   // Expects page to have a heading with the name of Installation.
// //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// // });

// // import { test, expect } from '@playwright/test';

// // test.describe('E2E Tests for Automation Exercise', () => {
// //   test('E2E Test for Adding Product to Cart', async ({ page }) => {
// //     await page.goto('https://automationexercise.com/');
// //     await page.getByRole('link', { name: ' Products' }).click();
// //     await page.getByRole('link', { name: ' View Product' }).nth(1).click();
// //     await page.getByRole('button', { name: ' Add to cart' }).click();
// //     await page.getByRole('link', { name: 'View Cart' }).click();
// //     await page.getByText('Proceed To Checkout').click();
// //     await page.getByRole('link', { name: 'Register / Login' }).click();
// //     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
// //     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pranavananthapalli1807@gmail.com');
// //     await page.getByRole('textbox', { name: 'Password' }).click();
// //     await page.getByRole('textbox', { name: 'Password' }).fill('pranav123');
// //     await page.getByRole('button', { name: 'Login' }).click();
// //     await page.getByRole('link', { name: ' Cart' }).click();
// //     await page.getByText('Proceed To Checkout').click();
// //     await page.getByRole('link', { name: 'Place Order' }).click();
// //     await page.locator('input[name="name_on_card"]').click();
// //     await page.locator('input[name="name_on_card"]').fill('123123213123');
// //     await page.locator('input[name="card_number"]').click();
// //     await page.locator('input[name="card_number"]').fill('123123123123');
// //     await page.getByRole('textbox', { name: 'ex.' }).click();
// //     await page.getByRole('textbox', { name: 'ex.' }).fill('311');
// //     await page.getByRole('textbox', { name: 'MM' }).click();
// //     await page.getByRole('textbox', { name: 'MM' }).fill('08');
// //     await page.getByRole('textbox', { name: 'YYYY' }).click();
// //     await page.getByRole('textbox', { name: 'YYYY' }).fill('2029');
// //     await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
// //     await page.getByRole('link', { name: ' Logout' }).click();
// //   })
// // });

// // test.describe('Tests for Login Fail', () => {
// //   test('Test for Invalid Login', async ({ page }) => {
// //   await page.goto('https://automationexercise.com/');
// //   await page.getByRole('link', { name: ' Signup / Login' }).click();
// //   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
// //   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pdsa@gmail.com');
// //   await page.getByRole('textbox', { name: 'Password' }).click();
// //   await page.getByRole('textbox', { name: 'Password' }).fill('sdasd');
// //   await page.getByRole('button', { name: 'Login' }).click();
// //   await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
// // })
// // });

// import { test, expect } from '@playwright/test';

// // GLOBAL URL
// const BASE_URL = "https://automationexercise.com/";

// test.describe("AutomationExercise Test Suite", () => {

//   // 1) Invalid login (your test)
//   test("1: Invalid Login - error validation", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: 'Signup / Login' }).click();
//     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pdsa@gmail.com');
//     await page.getByRole('textbox', { name: 'Password' }).fill('sdasd');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
//   });

//   // 2) Home page title verification
//   test("2: Home page title should match", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await expect(page).toHaveTitle(/Automation Exercise/);
//   });

//   // 3) Validate navigation to Products Page
//   test("3: Navigate to Products Page", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole("link", { name: "Products" }).click();
//     await expect(page.locator("h2.title")).toContainText("All Products");
//   });

//   // 4) Validate subscription text in footer
//   test("4: Validate subscription section exists", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await expect(page.locator('div').filter({ hasText: 'Subscription Get the most' }).nth(3)).toBeVisible();
//   });

//   // 5) Subscribe using email
//   test("5: Validate Feature Items is visible", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();
//   });

//   // 6) Search for product
//   test("6: Search product by name", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Products' }).click();
//     await page.getByRole('textbox', { name: 'Search Product' }).click();
//     await page.getByRole('textbox', { name: 'Search Product' }).fill('tshirts');
//     await page.getByRole('button', { name: '' }).click();
//     await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
//   });

//   // 7) Add a product to cart
//   test("7: Add product to cart", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' View Product' }).nth(1).click();
//     await page.getByRole('button', { name: ' Add to cart' }).click();
//     await page.getByRole('link', { name: 'View Cart' }).click();
//     await expect(page.locator('#cart_info')).toBeVisible();
// });

//   // 8) Remove product from cart
//   test("8: Remove product from cart", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' View Product' }).first().click();
//     await page.getByRole('button', { name: ' Add to cart' }).click();
//     await page.getByRole('link', { name: 'View Cart' }).click();
//     await page.locator('.cart_quantity_delete').click();
//     await expect(page.getByText('Cart is empty! Click here to')).toBeVisible();
//   });

//   // 9) Contact Us Form - validation
//   test("9: Contact form submission", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Contact us' }).click();
//     await page.getByRole('textbox', { name: 'Name' }).click();
//     await page.getByRole('textbox', { name: 'Name' }).fill('prav');
//     await page.getByRole('textbox', { name: 'Email', exact: true }).click();
//     await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pravtest@gmail.com');
//     await page.getByRole('textbox', { name: 'Subject' }).click();
//     await page.getByRole('textbox', { name: 'Subject' }).fill('test');
//     await page.getByRole('textbox', { name: 'Your Message Here' }).click();
//     await page.getByRole('textbox', { name: 'Your Message Here' }).fill('test123');

//     // Handle the popup dialog
//     page.once('dialog', async dialog => {
//       console.log(`Dialog message: ${dialog.message()}`);
//       await dialog.accept(); // Click OK on the popup
//     });

//     await page.getByRole('button', { name: 'Submit' }).click();

//     // Validate the success message
//     await expect(page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.')).toBeVisible();
//   });

//   // 10) Scroll to bottom and verify footer
//   test("10: Scroll to bottom and validate footer visibility", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await expect(page.locator('#footer')).toBeVisible();
//   });

//   // 11) Navigate using top menu "Test Cases"
//   test("11: Validate Test Cases menu", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Test Cases' }).click();
//     await expect(page.locator('b')).toBeVisible();
//     await expect(page.getByText('Below is the list of test')).toBeVisible();
//     await expect(page.locator('#form')).toContainText('Test Case 26: Verify Scroll Up without \'Arrow\' button and Scroll Down functionality');
//   });

//   // 12) Validate Category filtering
//   test("12: Filter by Women Category", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Women' }).click();
//     await page.getByRole('link', { name: 'Dress' }).click();
//     await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toBeVisible();
//   });

//   // 13) Validate Brand filtering
//   test("13: Filter by Brands", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Products' }).click();
//     await page.getByRole('link', { name: '(6) Polo' }).click();
//     await expect(page.getByText('Polo', { exact: true })).toBeVisible();
//     await page.getByRole('heading', { name: 'Brand - Polo Products' }).click();
//   });

//   // 14) Validate product details page
//   test("14: Product details validation", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole("link", { name: "Products" }).click();
//     await page.locator(".choose a").first().click();
//     await expect(page.locator(".product-information")).toContainText("Availability");
//   });

//   // 15) Increase quantity then add to cart
//   test("15: Increase quantity and add to cart", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Products' }).click();
//     await page.getByRole('link', { name: ' View Product' }).first().click();
//     await expect(page.locator('#quantity')).toHaveValue('1');
//     await page.locator('#quantity').click();
//     await page.locator('#quantity').fill('4');
//     await page.getByRole('button', { name: ' Add to cart' }).click();
//     await page.getByRole('link', { name: 'View Cart' }).click();
//     await expect(page.locator('#product-1')).toContainText('4');
//   });

//   // 16) Validate "Recommended Items" section is visible
//   test("16: Recommended Items visible", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.locator("#recommended-item-carousel").scrollIntoViewIfNeeded();
//     await expect(page.getByText("RECOMMENDED ITEMS")).toBeVisible();
//   });

//   // 17) Validate signup page elements
//   test("17: Validate Signup page UI elements", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Signup / Login' }).click();
//     await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
//     await expect(page.getByRole('textbox', { name: 'Name' })).toBeEmpty();
//     await expect(page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')).toBeEmpty();
//     await expect(page.locator('#form')).toContainText('Signup');
//   });


//   // 18) Signup with random email (unique every run)
//   test("18: Signup new user", async ({ page }) => {
//     const random = Date.now();
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole('link', { name: ' Signup / Login' }).click();
//     await page.getByRole('textbox', { name: 'Name' }).click();
//     await page.getByRole('textbox', { name: 'Name' }).fill('test123');
//     await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
//     await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('test123@gmail.com');
//     await page.getByRole('button', { name: 'Signup' }).click();
//     await expect(page.getByText('Email Address already exist!')).toBeVisible();
//   });

//   // 19) Logout after signup (only checks UI)
//   test("19: Logout from application", async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
//     await page.getByRole("link", { name: "Signup / Login" }).click();
//     await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
//   });

//   // 20) Full E2E Test: Add to cart, checkout, login, place order
//   test('20: E2E Test for Adding Product to Cart', async ({ page }) => {
//     await page.goto(BASE_URL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 60000 
// });
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

import { test, expect } from '@playwright/test';

// GLOBAL URL
const BASE_URL = "https://www.saucedemo.com/";

test.describe("AutomationExercise Test Suite", () => {

  // 1) successful login
  test("Successful login with valid credentials", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });

  // 2) Invalid login
  test("Invalid Login - error validation", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('invalid_password');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  // 3) Locked out user
  test("Locked Out User - error validation", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });

  //4) Browse products and view details
  test("Browse products and view details", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.locator('[data-test="item-4-title-link"]').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    await expect(page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });

  //5) Add single product to cart
  test("Add single product to cart", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.locator('[data-test="item-4-title-link"]').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    await expect(page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });


  //6) Add multiple products to cart
  test("Add multiple products to cart", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('3');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-quantity"]').first()).toBeVisible();
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-quantity"]').nth(1)).toBeVisible();
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-quantity"]').nth(2)).toBeVisible(); 
  });

  //7) Remove product from cart
  test("Remove product from cart", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
     
  });
  
  //8) Sort products by price low to high
  test("Sort products by price low to high", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    await expect(page.locator('[data-test="inventory-list"]')).toContainText('$7.99');
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toContainText('Add to cart');
  });

  //9) Sort products by Name (Z to A)
  test("Sort products by Name (Z to A)", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  });

  //10) Complete a purchase flow
  test("Complete a purchase flow", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('test');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('test');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('test123');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });

  //11) Checkout Form Validation
  test("Checkout Form Validation", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('div').filter({ hasText: /^Error: First Name is required$/ }).nth(1)).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');
  });

  //12) Logout functionality
  test("Logout functionality", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  });
});
