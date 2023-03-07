# v7 radio group issue

This sample app uses <ion-radio-group [value]="fuel">

If you were to change the value of `fuel` before displaying the radio group (in this case using an `ion-modal`) the correct radio button is not selected (in v7) but if you use v6.6.0 it does work.

The following solution was provided by a user:
> I found the issue. The value is set later then when the updateState() is called and therefore does not have the correct dynamic value to compare with.

> I added this.updateState()  into the componentWillLoad()  function of the radio control and it works perfectly fine.

> Not sure if that is a good solution but your guys know your components better then me and find probably a better solution.

## Test Steps
- `npm install`
- `npx ionic serve`
- Click `open` and select a radio button
- Close the modal
- Click `open`

The previously selected radio button should show.