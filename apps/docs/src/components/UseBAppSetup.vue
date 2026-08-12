<template>
  <div>
    <p>
      The easiest way is to wrap your application with the <code>BApp</code> component, which
      automatically sets up the orchestrator and registry:
    </p>
    <slot />
    <UseBAppProvideInjectWarning />
  </div>
</template>
