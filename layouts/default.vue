<template>
    <!--
    This is the default layout for the Nuxt 3 website.
    It includes the BaseNavbar and BaseFooter components and a main section
    where the content of the current page will be rendered.
  -->
    <div class="min-h-screen font-sans antialiased relative">
        <!--
      The outermost div is used to create a container element for the entire
      layout. This is necessary because the gradient background is applied to
      this element and we need to make sure that it covers the entire viewport.
    -->
        <div class="relative">
            <!--
        The gradient background is created using a pseudo-element that is
        absolutely positioned at the top-left corner of the viewport. This
        allows us to create a gradient that covers the entire viewport without
        having to worry about the content of the page.
      -->
            <div
                class="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-900 dark:to-blue-800">
            </div>

            <!--
        The BaseNavbar component is included at the top of the page and is
        used to render the navigation bar.
      -->
            <BaseNavbar />

            <!--
        The main element is used to render the content of the current page.
        This is where the content of the page will be rendered.
      -->
            <main class="text-neutral-800">
                <Nuxt />
            </main>

            <!--
        The BaseFooter component is included at the bottom of the page and is
        used to render the footer.
      -->
            <BaseFooter />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
}
</script>

<style>
/*
  The following styles are used to create a slide-up animation when the page
  is navigated to. This is done using the `slide-enter-active` and
  `slide-leave-active` classes, which are automatically added by Nuxt 3 when
  the page is navigated to.
*/
.slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

/*
  The following styles are used to set the maximum height of the page content
  to 100px when the page is navigated to. This is done using the
  `slide-enter-to` and `slide-leave` classes, which are automatically added by
  Nuxt 3 when the page is navigated to.
*/
.slide-enter-to,
.slide-leave {
    max-height: 100px;
    overflow: hidden;
}

/*
  The following styles are used to set the maximum height of the page content
  to 0 when the page is navigated away from. This is done using the
  `slide-enter` and `slide-leave-to` classes, which are automatically added by
  Nuxt 3 when the page is navigated away from.
*/
.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
</style>
