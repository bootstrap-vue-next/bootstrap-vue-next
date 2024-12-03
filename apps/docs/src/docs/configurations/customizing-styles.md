# Customizing Styles

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

## Bootstrap Customization

There are many ways to customize the underlying [Bootstrap](https://getbootstrap.com/) styles. See
[their documentation](https://getbootstrap.com/docs/5.3/customize/sass/#importing)
for how to import customized styles

## Adding styles

It's common to want to enhance or modifiy the styles for a specific component. This can be done
easily if you can determine a `.css` selector to use to specify the additional styles (and if
you include your stylesheet after the bootstrap and bootstrap-vue-next style sheets, you can
even override styles).

Unfortunately, there isn't a full-proof pattern for determining the `.css` selector to use for each
class, so we've included this information in the reference section for each component.

The pattern for these selectors is as follows.

Most components in `boostrap-vue-next` have a class attached to them on which you can add styles.
This is often the class that triggers the bootstrap behaviors. For instance, the `BTable` component
has a class called `table` class and `BAccordion` has a class called `accordion` both of which are
defined by `bootstrap` and added by `bootstrap-vue-next` to trigger the bootstrap styling on the components.

For most of the components where `bootstrap` doesn't define a class to trigger its behaviors, we've
added a class of our own, which you can use to add styles. For instance, `bootstrap 5`
[deprecated](https://getbootstrap.com/) the use of `form-group` along with other form-specific classes.
So there was no easy way to add styling to `BFormGroup` other than wrapping it in your own component,
which introduces additional overhead. So we've added the `b-form-group` class.

See this [stack-blitz example](https://stackblitz.com/edit/github-lgg91u-usex9n?file=src%2FApp.vue).

Another pattern is for components that are tightly tied to a `tag`, so adding
styles should be done via the tag name. For instance, the `BForm` always generates its main
element with the `form` tag.

Finally, there are a number of variations where there isn't a single class or tag. Where these
cases can be represented by `.css` selectors they are. For instance a popover may be defined
by one of two classes, so you can use the css selector `.tooltip, .popover` to add styles to both
(although you may well wan to style the tooltip and popover variations seperately). In cases where
like the grid system classes, where there may be many different versions of the class defined by
the breakpoints, we're simply using a placeholder such as `col[-*]` to represent `col`, `col-sm`,
`col-md`, etc.
