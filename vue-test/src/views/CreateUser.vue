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

      <!-- место для элемента -->
      <Select 
        :parents = "parents"
      />

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
import Select from '@/components/select'

export default {
  name: 'create',
  components: {
    Select
  },
  data: () => ({
    name: '',
    number: '',
    parent: null,
    parents: []
  }),
  validations: {
    name: {required},
    number: {required, numeric, minLength: minLength(11)}
  },
  async mounted() {
    // if (messages[this.$router.query.message]){
    //   this.$messages(messages[this.$router.query.message])
    // }
    this.parents = await this.$store.dispatch('fetchParents')
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
        parent: this.subordinate
      }
      try {
        await this.$store.dispatch('createUser', formData)
        this.$router.push('/')
      } catch(e) {

      }
    }
  }
}
</script>
