<template>
  <form class="card auth-card card__center">
    <div class="card-content">
      <span class="card-title">Добавления пользователя</span>
      <div class="input-field">
        <input
            id="name"
            type="text"
            class="validate"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid">Имя</small>
      </div>
      <div class="input-field">
        <input
            id="telephone"
            type="number"
        >
        <label for="email">Телефон</label>
        <small class="helper-text invalid">Телефон</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Начальник</label>
        <small class="helper-text invalid">Начальник</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Сохранить
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>
