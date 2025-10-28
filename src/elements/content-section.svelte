<script lang="ts">
</script>

<section>
  <div class="content">
    <slot>info</slot>
  </div>
</section>

<style>
  section {
    animation: forwards linear 300ms slide-in;
    margin: 0;
    background: linear-gradient(
      0deg,
      var(--secondary-color),
      var(--primary-color)
    );
    padding-left: 2px;
  }

  .content {
    background-color: white;
    box-sizing: border-box;
    padding: 10px 10px;
    font-size: 1.2em;
    font-weight: 300;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
