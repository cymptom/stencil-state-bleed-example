import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true,
})
export class MyApp {

  @Prop() componentsToRender: ReadonlyArray<{ text: string, type: 'should-have-default-text' | 'no-default-text' }> = [];
  @Prop() status: string;

  render() {
    return (
      <Host>
        <h3>{ this.status }</h3>
        <p>
          {
            this.componentsToRender.map(x => 
              <my-component text={ x.text } type={ x.type }  />
            )
          }
        </p>
      </Host>
    );
  }

}
