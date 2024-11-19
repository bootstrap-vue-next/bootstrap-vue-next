/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
const routes = [
  {
    path: '/some/route',
    // We don't provide a name on this parent route, but rather
    // set the name on the default child route instead
    // name: 'some-route',
    component: SomeRouteComponent,
    // Child route "tabs"
    children: [
      // Note we provide the above parent route name on the default child tab
      // route to ensure this tab is rendered by default when using named routes
      {path: '', component: DefaultTabComponent, name: 'some-route'},
      {path: 'foo', component: FooTabComponent},
      {path: 'bar', component: BarTabComponent},
    ],
  },
]
