var HelloApp = ng.core.Component({
    selector: 'hello-app',
    template: '' +
    '<h1>Hello, {{name}}!</h1>' +
    ' Say hello to: <input [value]="name" (input)="name = $event.target.value">' +
    ''
}).Class({constructor: function() {
    this.name = 'World';
}});