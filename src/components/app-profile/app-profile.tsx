import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  @State() state = false;
  @Prop() name: string;


  render() {
    return [

      <ion-content class="ion-padding">
      </ion-content>,
    ];
  }
}
