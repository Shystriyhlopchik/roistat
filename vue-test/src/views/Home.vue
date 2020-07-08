<template>
  <div>
    <table class="striped directory__table">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Телефон</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Дима</td>
        <td>89258583232</td>
      </tr>
      <tr>
        <td>Коля</td>
        <td>89258583232</td>
      </tr>
      <tr>
        <td>Оля</td>
        <td>89258583232</td>
      </tr>
    </tbody>
  </table>
  <button
        class="btn waves-effect waves-light auth-submit"
        type="submit"
    >
      Добавить
      <i class="material-icons right">send</i>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
