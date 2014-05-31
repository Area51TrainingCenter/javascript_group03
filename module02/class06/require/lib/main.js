require(["app", "jquery", "moment", "store"],
  function(App, $, moment, store) {
    var user1 = new App.models.User();
    user1.set('firstName', 'Pedro');
    user1.set('lastName', 'Baumann');
    user1.set('createdAt', new Date(2014, 4, 31, 11));
    var user2 = new App.models.User();
    user2.set('firstName', 'James');
    user2.set('lastName', 'Villanueva');
    user2.set('createdAt', new Date(2014, 4, 31, 10));
    var user3 = new App.models.User();
    user3.set('firstName', 'Rodwin');
    user3.set('lastName', 'Raymundo');
    user3.set('createdAt', new Date(2014, 4, 31, 9));

    var user1P = '<p>' + user1.get('firstName') + ' (' + moment(user1.get('createdAt')).fromNow() + ')</p>';
    var user2P = '<p>' + user2.get('firstName') + ' (' + moment(user2.get('createdAt')).fromNow() + ')</p>';
    var user3P = '<p>' + user3.get('firstName') + ' (' + moment(user3.get('createdAt')).fromNow() + ')</p>';

    $('body').append(user1P);
    $('body').append(user2P);
    $('body').append(user3P);

    store.set('user1', user1);

    console.log(store.get('user1'));

    console.log(user1, user2, user3);
  });