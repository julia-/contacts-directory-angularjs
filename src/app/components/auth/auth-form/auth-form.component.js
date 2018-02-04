var authForm = {
  bindings: {
    user: '<', // one-way data flow
    button: '@', // string interpolation
    message: '@',
    onSubmit: '&' // callback
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
}

angular
  .module('components.auth')
  .component('authForm', authForm)