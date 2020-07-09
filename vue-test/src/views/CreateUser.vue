<template>
  <form class="card auth-card card__center" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Добавление пользователя</span>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: ($v.number.$dirty && !$v.number.required)}"
        >
        <label for="name">Имя</label>
        <small 
          class="helper-text invalid"
          v-if="$v.number.$dirty && !$v.number.required"
          >Поле имя не должно быть пустым</small>
      </div>

      <div class="input-field">
        <input
            id="number"
            type="number"
            v-model.trim="number"
            :class="{invalid: ($v.number.$dirty && !$v.number.required) || ($v.number.$dirty && !$v.number.minLength)}"
        >
        <label for="telephone">Телефон</label>
        <small 
          class="helper-text invalid"
          v-if="$v.number.$dirty && !$v.number.required"
          >Поле телефон не должно быть пустым</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.number.$dirty && !$v.number.minLength"
          >В поле телефон должно быть не менее 11 символов</small>
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

<script>
import {required, minLength, numeric} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'create',
  data: () => ({
    name: '',
    number: '',
    parent: null
  }),
  validations: {
    name: {required},
    number: {required, numeric, minLength: minLength(11)}
  },
  mounted() {
    // if (messages[this.$router.query.message]){
    //   this.$messages(messages[this.$router.query.message])
    // }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        name: this.name,
        number: this.number,
        parent: this.parent
      }

      await this.$store.dispatch('createUser', formData)
      this.$router.push('/')
    }
  }
}
</script>
