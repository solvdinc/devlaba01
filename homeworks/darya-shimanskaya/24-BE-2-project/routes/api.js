module.exports = [
  {
    method: 'get',
    path: '/',
    resolver: {
      controller: 'HomeController',
      action: 'home',
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
    path: '/reverse',
    resolver: {
      controller: 'ReverseController',
      action: 'reverse',
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
    path: '*',
    resolver: {
      controller: 'NotFoundController',
      action: 'notFound',
    },
  },
]