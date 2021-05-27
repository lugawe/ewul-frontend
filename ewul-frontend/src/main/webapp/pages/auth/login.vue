<template>
  <div class="auth-login">
    <div class="center p-4">
      <b-form-group label-cols-md="3" :label="$t('pages.auth.login.username')">
        <b-form-input v-model="username" :readonly="loading" />
      </b-form-group>
      <b-form-group label-cols-md="3" :label="$t('pages.auth.login.password')">
        <b-form-input v-model="password" :readonly="loading" />
      </b-form-group>
      <hr />
      <div>
        <b-button v-if="!loading" variant="primary" style="float: right;">
          {{ $t('pages.auth.login.login') }}
        </b-button>
        <b-button v-else variant="primary" style="float: right;" disabled>
          <b-spinner small class="mr-1" />
          <span>{{ $t('basic.loading') }}</span>
        </b-button>
      </div>
    </div>
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
  }
};
</script>

<style scoped>
.auth-login {
  overflow: hidden;
}
.center {
  margin: auto;
  width: 50%;
}
</style>
