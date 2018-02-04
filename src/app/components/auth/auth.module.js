angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {
    var config = {
      apiKey: 'AIzaSyBWcDfH9N0K04Z6a0LtPea4fAcw1vya5Dk',
      authDomain: 'contacts-manager-app-f218b.firebaseapp.com',
      databaseURL: 'https://contacts-manager-app-f218b.firebaseio.com',
    }

    $firebaseRefProvider.registerUrl({
      default: config.databaseURL,
      contacts: config.databaseURL + '/contacts'
    })

    firebase.initializeApp(config)
  })
