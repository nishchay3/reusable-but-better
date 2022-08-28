# Reusable But Better

Homepage: [nishchay3.github.io/reusable-but-better](https://nishchay3.github.io/reusable-but-better/)

This repository is intended to provide atomic sharable components and services that a developer needs frequently while creating a frontend application.
Consuming the libraries published by this repo can reduce developer's effort substantially and decrease the development time.
Please feel free to use and raise improvements for this project.

# Components:

## 1. Better Bottomsheet

This bottom sheet is inspired by Instagram's reels comment section bottom sheet.

The `BetterBottomSheet` service can be used to open Material Design panels to the bottom of the screen.
These panels are intended primarily as an interaction on mobile devices where they can be used as an
alternative to dialogs and menus.

# Installation

```ts
npm i better-bottomsheet
```

### Usage

<!-- example(bottom-sheet-overview) -->

You can open a bottom sheet by calling the `open` method with a component to be loaded and an
optional config object. The `open` method will return an instance of `BetterBottomSheetRef`:

```ts
const bottomSheetRef = bottomSheet.open(SocialShareComponent, {
  ariaLabel: 'Share on social media',
});
```

The `BetterBottomSheetRef` is a reference to the currently-opened bottom sheet and can be used to close
it or to subscribe to events. Note that only one bottom sheet can be open at a time. Any component
contained inside of a bottom sheet can inject the `MatBottomSheetRef` as well.

```ts
bottomSheetRef.afterDismissed().subscribe(() => {
  console.log('Bottom sheet has been dismissed.');
});

bottomSheetRef.dismiss();
```

### Sharing data with the bottom sheet component.

If you want to pass in some data to the bottom sheet, you can do so using the `data` property:

```ts
const bottomSheetRef = bottomSheet.open(HobbitSheet, {
  data: { names: ['Frodo', 'Bilbo'] },
});
```

Afterwards you can access the injected data using the `BETTER_BS_DATA` injection token:

```ts
import { Component, Inject } from '@angular/core';
import { BETTER_BS_DATA } from 'better-bottomsheet';

@Component({
  selector: 'hobbit-sheet',
  template: 'passed in {{ data.names }}',
})
export class HobbitSheet {
  constructor(@Inject(BETTER_BS_DATA) public data: { names: string[] }) {}
}
```
