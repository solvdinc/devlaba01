module.exports = [
  {
    method: 'get',
    path: '/',
    resolver: {
      controller: 'WelcomeController',
      action: 'home',
    },
  },
  {
    method: 'get',
    path: '*',
    resolver: {
      controller: 'WelcomeController',
      action: 'notFound',
    },
  },
  {
    method: 'get',
    path: '/sum',
    resolver: {
      controller: 'SumController',
      action: 'sum',
    },
  },
  {
    method: 'get',
    path: '/substr',
    resolver: {
      controller: 'SubstrController',
      action: 'substr',
    },
  },
  {
    method: 'get',
    path: '/reverse',
    resolver: {
      controller: 'ReverseController',
      action: 'reverse',
    },
  },
];