module.exports = [
  {
    method: 'get',
    path: '/',
    resolver: {
      controller: 'WelcomController',
      action: 'home',
    },
  },
  {
    method: 'get',
    path: '*',
    resolver: {
      controller: 'NotFoundController',
      action: 'notFound',
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
      controller: 'SubStringController',
      action: 'substr',
    },
  },
]
