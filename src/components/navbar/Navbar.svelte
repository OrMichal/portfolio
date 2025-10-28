<script lang="ts">
  import Fa from "svelte-fa";
  import NavbarLink from "./NavbarLink.svelte";
  import {
    faBars,
    faCircleXmark,
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";
  import { t } from "svelte-i18n";
  import LanguageSelector from "../language-selector/language-selector.svelte";
  import { onMount } from "svelte";
  import HamburgerMenuLink from "./hamburger-menu/hamburger-menu-link.svelte";
  import Link from "../../elements/Link.svelte";
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

  let menuOpened = false;
  let navbar: HTMLElement;
  let observerTrigger: HTMLElement;

  const switchMenuState = () => {
    menuOpened = !menuOpened;
  };

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) {
            navbar.classList.add("fixed-position");
            navbar.classList.remove("normal-position");
          } else {
            navbar.classList.remove("fixed-position");
            navbar.classList.add("normal-position");
          }
        });
      },
      { root: null, threshold: 0 },
    );

    observer.observe(observerTrigger);
  });
</script>

<nav bind:this={navbar} class="navbar normal-position">
  <div class="heading-wrapper">
    <h2 class="heading">{$t("nav.t_name")}</h2>
    <div class="language-selector">
      <LanguageSelector />
    </div>
  </div>
  <div class="links">
    <NavbarLink href="/">{$t("nav.t_home")}</NavbarLink>
    <NavbarLink href="/about">{$t("nav.t_about")}</NavbarLink>
    <NavbarLink href="/projects">{$t("nav.t_projects")}</NavbarLink>
    <NavbarLink href="/cv">{$t("nav.t_cv")}</NavbarLink>
  </div>
  <div class="hamburger" on:click={switchMenuState}>
    <Fa icon={faBars} />
  </div>
</nav>
<div id="navbar-trigger" bind:this={observerTrigger}></div>

{#if menuOpened}
  <div class="glass">
    <div class="hamburger-menu">
      <div class="hamburger-menu-heading">
        <LanguageSelector />
        <div on:click={switchMenuState}>
          <Fa icon={faCircleXmark} />
        </div>
      </div>
      <div class="hamburger-links">
        <HamburgerMenuLink callback={switchMenuState} href="/"
          >{$t("nav.t_home")}</HamburgerMenuLink
        >
        <HamburgerMenuLink callback={switchMenuState} href="/about"
          >{$t("nav.t_about")}</HamburgerMenuLink
        >
        <HamburgerMenuLink callback={switchMenuState} href="/projects"
          >{$t("nav.t_projects")}</HamburgerMenuLink
        >
        <HamburgerMenuLink href="/cv">{$t("nav.t_cv")}</HamburgerMenuLink>
      </div>
      <div class="soc-link-container">
        <Link
          stretchWidth
          href="https://www.linkedin.com/in/michal-orsah-848b6535a/"
          blankTarget
          icon={faLinkedin}>LinkedIn</Link
        >
        <Link
          stretchWidth
          href="mailto:misaorsah5@gmail.com"
          blankTarget
          icon={faEnvelope}>Email</Link
        >
        <Link
          stretchWidth
          href="https://github.com/OrMichal"
          blankTarget
          icon={faGithub}>GitHub</Link
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .navbar {
    background-color: white;
    box-sizing: border-box;
    margin: 0;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    box-shadow: 2px 2px 4px #00000040;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .normal-position {
    animation: normal-pos-anim forwards ease 0.4s;
  }

  .heading-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
  }

  .heading {
    margin: 0;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    color: white;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 15px;
  }

  .hamburger {
    display: none;
    font-size: 1.7em;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 8px;
  }

  .hamburger:hover {
    cursor: pointer;
    color: var(--primary-color);
  }

  .hamburger-menu {
    animation: hamburger-anim 0.3s forwards ease;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 30px;

    width: 60dvw;
    height: 100dvh;
    background: white;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: -2px 4px 4px #00000040;
  }

  .hamburger-links {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .soc-link-container {
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .hamburger-menu-heading {
    font-size: 1.3em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    backdrop-filter: blur(2px);
    z-index: 999;
  }

  :global(.fixed-position) {
    position: fixed;
    top: 0;
    max-width: 1400px;
    z-index: 800;
    animation: fixed-pos-anim forwards ease 0.4s;
  }

  @keyframes hamburger-anim {
    from {
      transform: translateX(300px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes normal-pos-anim {
    from {
      width: 1400px;
    }
    to {
      width: 100%;
    }
  }

  @keyframes fixed-pos-anim {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 650px) {
    .language-selector {
      display: none;
    }

    .hamburger {
      display: inline;
    }

    .links {
      display: none;
    }
  }

  @media screen and (min-width: 650px) {
    .glass {
      display: none;
    }
  }
</style>
