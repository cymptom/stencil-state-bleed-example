import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() text: string | undefined;
  @Prop() type: 'should-have-default-text' | 'no-default-text' | undefined = undefined;

  componentWillLoad() {
    if (this.type === 'should-have-default-text' && !this.text) {
      this.text = "some default text";
    }
  }

  render() {
    return <div>
      { this.text }
    </div>
  }
}
