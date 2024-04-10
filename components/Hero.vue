<script setup>
import { ref } from "vue";
import { BookOpenIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl p-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div
        class="h-full content-center flex flex-wrap justify-center lg:justify-start w-full m-0 lg:mr-auto place-self-center lg:col-span-6 max-w-[34rem]"
      >
        <h1
          class="max-w-[20rem] text-center lg:text-left md:max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          Biserica Creștină Golgota - Aveley
        </h1>

        <blockquote class="relative mb-6">
          <svg
            class="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-gray-700"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>

          <div
            class="relative z-1 max-w-[20rem] md:max-w-[30rem] text-center lg:text-left"
          >
            <p class="text-gray-800 sm:text-xl dark:text-white">
              <em>
                Căci n-am avut de gând să știu între voi altceva decât pe Isus
                Hristos, și pe El răstignit - 1 Corinteni 2:2
              </em>
            </p>
          </div>
        </blockquote>

        <div class="mb-6 lg:mt-0 lg:col-span-6 lg:flex show lg:hidden">
          <img src="/images/hero1.jpg" alt="mockup" class="rounded-lg" />
        </div>

        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Contactează-ne
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="#9b2c2c"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 hover:bg-gray-100 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36px"
            height="36px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#9b2c2c"
              d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18q.371.465.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.4 3.4 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05zM14.661.436l-3.838 4.563l.027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.38 8.38 0 0 0 14.67.439zM9.466 5.868L14.162.285l-.047-.012A8.3 8.3 0 0 0 11.986 0a8.44 8.44 0 0 0-6.169 2.766l-.016.018z"
            />
          </svg>
        </a>
      </div>

      <div class="mt-4 lg:mt-0 lg:col-span-6 lg:flex hidden lg:show">
        <img src="/images/hero1.jpg" alt="mockup" class="rounded-lg" />
      </div>
    </div>
  </section>
</template>
