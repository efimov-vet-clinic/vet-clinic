<template>
  <header class="header">
    <div class="logo">logo</div>

    <nav>
      <ul class="nav-list">
        <li class="nav-item">about</li>
        <li class="nav-item">contacts</li>
        <li class="nav-item">team</li>
        <li class="nav-item">call</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eaeaea;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.logo {
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  font-size: 0.95rem;
  color: #666;
  cursor: default;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: #000;
}
</style>
