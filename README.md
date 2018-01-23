[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Testable** Death Square

The rebels have boarded our death square and are heading for our data banks. A platoon of storm troopers has been sent to stop them, but we need to know the second they go offline so we can switch to a backup. Let's do some test-driven development.

![](resources/passTest.jpg)

### Instructions:

1) Open up our data banks. Navigate into `turret-api` and run `seed.js` and `server.js` — don't forget to install those `npm` modules.

2) Navigate into `imperial-starfleet` and start up our front end.

3) Run `ng test` inside `imperial-starfleet`. Nice - we're passing two tests! But there's one failing test on `InfoWindow`. Let's make it pass.

4) That failing test is complaining that there is `No provider for Http`. What `Module` could we import to `info-window.component.spec.ts`? Hint: It's toward the top of `app.module.ts`. Don't forget to add it to an `imports` array below the `declarations` array in `TestBed.configureTestingModule`. Save the file and check the `ng test` browser output.

5) We're still failing! We need to import one more thing. It's called `RouterTestingModule`, and it comes from the `@angular/router/testing` package. Don't forget to add it to the `imports` array, too. Save the file and check the `ng test` browser output one more time.

6) Create a new test below the "should be created" one and call it "should have a `findTurret()` function to get data from the data banks." Fail this test the old-fashioned way by making it test `expect(true).toEqual(false);`.

7) Now, let's actually test something. We're going to make a lot of changes to our Death Square Dashboard™, and we need to make sure that `findTurret()` is still a working function. Replace our `expect(true)...` expectation with `expect(typeof(component.findTurret)).toBe('function');`.

8) We want to know the second that our turret damage dataBanks go down, so let's create a test called it "should return a turret object", and create a `turretNumber` variable with a value of `4`.

9) Call the `component.findTurret()` function with `turretNumber` as an argument.  Then `.subscribe()` to it, and `console.log()` the `response` coming back from the API.  Make sure you parse it into `.json()` first.  You should see this `console.log()` in the Terminal.

10) Save this `responseJSON` into a variable, and check the following:

  a) Check that the `typeOf` `responseJSON` is an `'object'` (see step 7 for more syntax)
  b) Check that `responseJSON.turretNumber` is a `'number'`
  c) Check that `responseJSON.damage` is a `'string'`--woo hoo, a failure!  Now, check if it's a `'number'`

11) Check your tests in Chrome one more time. Once they're all passing, we know one more thing is safe from the rebels.

### Bonus

1) We shouldn't just check `turretNumber` 4 all the time.  How could you use `Math.ceil()` and `Math.rand()` to test a turret at random?

### Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
