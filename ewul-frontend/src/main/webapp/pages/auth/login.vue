<template>
  <div class="auth-login">
    <b-form class="center p-4" @reset="reset" @submit="login">
      <b-form-group label-cols-md="3" :label="$t('pages.auth.login.username')">
        <b-form-input v-model="username" :readonly="loading" required />
      </b-form-group>
      <b-form-group label-cols-md="3" :label="$t('pages.auth.login.password')">
        <b-form-input v-model="password" :readonly="loading" required type="password" />
      </b-form-group>
      <hr />
      <div class="bottom">
        <b-button v-if="!loading" variant="primary" type="submit">
          {{ $t('pages.auth.login.login') }}
        </b-button>
        <b-button v-else variant="primary" disabled>
          <b-spinner small class="mr-1" />
          <span>{{ $t('basic.loading') }}</span>
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      username: '',
      password: ''
    };
  },
  methods: {
    reset() {
      this.username = '';
      this.password = '';
    },
    login(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.center {
  margin: auto;
  width: 50%;
}
.auth-login > .center > .bottom > .btn {
  float: right;
}
</style>
