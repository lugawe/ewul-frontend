<template>
  <div class="users-index">
    <div class="p-4">
      <b-row>
        <b-col cols="4">
          <b-input-group :prepend="$t('pages.users.index.search')">
            <b-form-input v-model="search" debounce="500" />
          </b-input-group>
        </b-col>
        <b-col cols="8"></b-col>
      </b-row>
      <hr />
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton-table
            :rows="perPage"
            :columns="columns.length"
            :table-props="{ bordered: true, striped: true }"
          />
        </template>
        <b-table bordered striped hover :fields="columns" :items="items"></b-table>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      loading: false,
      perPage: 10,
      search: ''
    };
  },
  methods: {
    fetch() {}
  },
  computed: {
    columns() {
      return [
        {
          key: 'name',
          label: this.$t('pages.users.index.name')
        },
        {
          key: 'first_name',
          label: this.$t('pages.users.index.first_name')
        },
        {
          key: 'last_name',
          label: this.$t('pages.users.index.last_name')
        },
        {
          key: 'email',
          label: this.$t('pages.users.index.email')
        },
        {
          key: 'last_access',
          label: this.$t('pages.users.index.last_access')
        },
        {
          key: 'actions',
          label: this.$t('pages.users.index.actions')
        }
      ];
    },
    items() {
      return [];
    }
  },
  watch: {
    search(val) {
      this.fetch();
    }
  }
};
</script>

<style scoped></style>
