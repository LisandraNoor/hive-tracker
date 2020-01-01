<template>
  <v-layout row wrap>
    <v-flex xs3>
      <v-menu
        ref="showStartDate"
        :close-on-content-click="false"
        v-model="showStartDate"
        :nudge-right="40"
        :return-value.sync="startDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="startDate"
          label="From"
          readonly
        ></v-text-field>
        <v-date-picker
          v-model="startDate"
          @input="filterStartDate"
        ></v-date-picker>
      </v-menu>
    </v-flex>

    <v-flex xs3>
      <v-menu
        ref="showEndDate"
        :close-on-content-click="false"
        v-model="showEndDate"
        :nudge-right="40"
        :return-value.sync="endDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="endDate"
          label="To"
          readonly
        ></v-text-field>
        <v-date-picker
          v-model="endDate"
          @input="filterEndDate"
        ></v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="rows"
        :pagination.sync="pagination"
        select-all
        item-key="name"
        class="elevation-1"
        :rows-per-page-items="[-1]"
        :hide-actions=true
        :search="filters"
        :custom-filter="customFilter"
      >
        <template slot="headers" slot-scope="props">
          <tr>
            <th
              v-for="header in props.headers"
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              @click="changeSort(header.value)"
            >
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.birthDate | formatAllDate}}</td>
            <td class="text-xs-right">{{ props.item.addedBy }}</td>
          </tr>
        </template>
        </v-data-table>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data: () => ({
    showStartDate: false,
    startDate: null,
    showEndDate: false,
    endDate: null,
    filters: {
      search: '',
      addedBy: '',
      startDate: null,
      endDate: null
    },
    authors: ['Admin', 'Foo'],
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    headers: [
      {
        text: 'Names',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Birth date',
        value: 'birthDate'
      },
      {
        text: 'Item added by',
        value: 'addedBy'
      }
    ],
    rows: [
      {
        name: 'Marcelo Tosco',
        birthDate: 1538006400000,
        addedBy: 'admin'
      },
      {
        name: 'Carlos Campos',
        birthDate: 1537401600000,
        addedBy: 'admin'
      },
      {
        name: 'Luis Gonzalez',
        birthDate: 1536537600000,
        addedBy: 'foo'
      },
      {
        name: 'Keopx',
        birthDate: 1536364800000,
        addedBy: 'foo'
      },
      {
        name: 'Marco Marocchi',
        birthDate: 1535846400000,
        addedBy: 'Admin'
      }
    ]
  }),
  methods: {
    customFilter (items, filters, filter, headers) {
      const cf = new this.$MultiFilters(items, filters, filter, headers)
      cf.registerFilter('search', function (searchWord, items) {
        if (searchWord.trim() === '') return items
        return items.filter(item => {
          return item.name.toLowerCase().includes(searchWord.toLowerCase())
        }, searchWord)
      })
      cf.registerFilter('addedBy', function (addedBy, items) {
        if (addedBy.trim() === '') return items
        return items.filter(item => {
          return item.addedBy.toLowerCase() === addedBy.toLowerCase()
        }, addedBy)
      })
      cf.registerFilter('startDate', function (startDate, items) {
        if (startDate === null) return items
        return items.filter(item => {
          return item.birthDate >= startDate
        }, startDate)
      })
      cf.registerFilter('endDate', function (endDate, items) {
        if (endDate === null) return items
        return items.filter(item => {
          return item.birthDate <= endDate
        }, endDate)
      })
      return cf.runFilters()
    },
    toggleAll () {
      if (this.selected.length) {
        this.selected = []
      } else {
        this.selected = this.rows.slice()
      }
    },
    /**
     * Column shorting.
     *
     * @param column
     */
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    filterSearch (val) {
      this.filters = this.$MultiFilters.updateFilters(this.filters, { search: val })
    },
    filterAuthor (val) {
      this.filters = this.$MultiFilters.updateFilters(this.filters, { addedBy: val })
    },
    filterStartDate (val) {
      this.$refs.showStartDate.save(val)
      const timestamp = new Date(val + 'T00:00:00Z').getTime()
      this.filters = this.$MultiFilters.updateFilters(this.filters, { startDate: timestamp })
    },
    filterEndDate (val) {
      this.$refs.showEndDate.save(val)
      console.log(val)
      const timestamp = new Date(val).getTime()
      console.log(timestamp)
      this.filters = this.$MultiFilters.updateFilters(this.filters, { endDate: timestamp })
    }
  },
  filters: {
    /**
     * Format a timestamp into a d/m/yyy (because spanish format).
     *
     * @param value
     * @returns {string}
     */
    formatAllDate: function (value) {
      if (!value) return ''
      return new Date(value).toLocaleDateString('es-ES')
    }
  }
}
</script>

<style scoped>
</style>
