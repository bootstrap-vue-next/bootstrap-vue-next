<template>
  <b-row>
    <b-col>
      <b-container fluid>
        <b-row>
          <b-col>
            <b-form-input v-model="searchQuery" placeholder="Search" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button variant="danger" @click="clearActiveList">Clear all</b-button>
            <b-button
              v-for="(comp, index) in filteredSearch"
              :key="index"
              class="m-1"
              :disabled="comp.disabled"
              :variant="active.includes(comp.name) ? 'primary' : 'secondary'"
              @click="switchActive(comp.name)"
            >
              {{ comp.name }}
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-container v-for="(comp, index) in filteredActive" :key="index" fluid>
              <b-row>
                <b-col>
                  <h1>{{ comp.name }}</h1>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <component :is="comp.is" />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <hr />
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import TAccordion from '../components/Comps/TAccordion.vue'
import TAlert from '../components/Comps/TAlert.vue'
import TAvatar from '../components/Comps/TAvatar.vue'
import TBadge from '../components/Comps/TBadge.vue'
import TBLink from '../components/Comps/TBLink.vue'
import TBreadcrumb from '../components/Comps/TBreadcrumb.vue'
import TButton from '../components/Comps/TButton.vue'
import TCard from '../components/Comps/TCard.vue'
import TCarousel from '../components/Comps/TCarousel.vue'
import TCollapse from '../components/Comps/TCollapse.vue'
import TDropdown from '../components/Comps/TDropdown.vue'
import TForm from '../components/Comps/TForm.vue'
import TFormCheckbox from '../components/Comps/TFormCheckbox.vue'
import TFormCheckboxGroup from '../components/Comps/TFormCheckboxGroup.vue'
import TFormFloatingLabel from '../components/Comps/TFormFloatingLabel.vue'
import TFormGroup from '../components/Comps/TFormGroup.vue'
import TFormInput from '../components/Comps/TFormInput.vue'
import TFormRadio from '../components/Comps/TFormRadio.vue'
import TFormRadioGroup from '../components/Comps/TFormRadioGroup.vue'
import TFormSelect from '../components/Comps/TFormSelect.vue'
import TFormTextarea from '../components/Comps/TFormTextarea.vue'
import TImg from '../components/Comps/TImg.vue'
import TInputGroup from '../components/Comps/TInputGroup.vue'
import TLayout from '../components/Comps/TLayout.vue'
import TListGroup from '../components/Comps/TListGroup.vue'
import TModal from '../components/Comps/TModal.vue'
import TNav from '../components/Comps/TNav.vue'
import TNavbar from '../components/Comps/TNavbar.vue'
import TOverlay from '../components/Comps/TOverlay.vue'
import TPagination from '../components/Comps/TPagination.vue'
import TPopover from '../components/Comps/TPopover.vue'
import TTable from '../components/Comps/TTable.vue'
import TTableSimple from '../components/Comps/TTableSimple.vue'
import TTabs from '../components/Comps/TTabs.vue'
import TToast from '../components/Comps/TToast.vue'
import TTooltip from '../components/Comps/TTooltip.vue'

const comps: {name: string; is: unknown; disabled?: true}[] = [
  {name: 'Accordion', is: TAccordion},
  {name: 'Alert', is: TAlert},
  {name: 'Avatar', is: TAvatar},
  {name: 'TBadge', is: TBadge},
  {name: 'BLink', is: TBLink},
  {name: 'Breadcrumb', is: TBreadcrumb},
  {name: 'Button', is: TButton},
  {name: 'Card', is: TCard},
  {name: 'Carousel', is: TCarousel},
  {name: 'Collapse', is: TCollapse},
  {name: 'Dropdown', is: TDropdown},
  {name: 'Form', is: TForm},
  {name: 'FormCheckbox', is: TFormCheckbox},
  {name: 'FormCheckboxGroup', is: TFormCheckboxGroup},
  {name: 'FormFloatingLabel', is: TFormFloatingLabel},
  {name: 'FormGroup', is: TFormGroup},
  {name: 'FormInput', is: TFormInput},
  {name: 'FormRadio', is: TFormRadio},
  {name: 'FormRadioGroup', is: TFormRadioGroup},
  {name: 'FormSelect', is: TFormSelect},
  {name: 'FormTextarea', is: TFormTextarea},
  {name: 'Img', is: TImg},
  {name: 'InputGroup', is: TInputGroup},
  {name: 'ListGroup', is: TListGroup},
  {name: 'Layout', is: TLayout},
  {name: 'Modal', is: TModal},
  {name: 'Nav', is: TNav},
  {name: 'Navbar', is: TNavbar},
  {name: 'Overlay', is: TOverlay},
  {name: 'Pagination', is: TPagination},
  {name: 'Popover', is: TPopover},
  {name: 'Table', is: TTable},
  {name: 'TableSimple', is: TTableSimple},
  {name: 'Tabs', is: TTabs},
  {name: 'Toast', is: TToast},
  {name: 'Tooltip', is: TTooltip},
]

const searchQuery = ref('')

const active = ref<string[]>([])

const filteredSearch = computed(() =>
  searchQuery.value.trim() !== ''
    ? comps.filter((item) =>
        searchQuery.value
          .toLowerCase()
          .split(' ')
          .every((v) => item.name.toLowerCase().includes(v))
      )
    : comps
)

const filteredActive = computed(() => comps.filter((el) => active.value.includes(el.name)))

const switchActive = (name: string): void => {
  const comp = comps.find((el) => el.name === name)
  if (comp === undefined || comp.disabled === true) return
  const value = comp.name
  const index = active.value.findIndex((el) => el === value)
  index !== -1 ? active.value.splice(index, 1) : active.value.push(value)
  if (active.value.length === 0) {
    localStorage.removeItem('bv3-playground-dev-active-list')
    return
  }
  localStorage.setItem('bv3-playground-dev-active-list', JSON.stringify(active.value))
}

const clearActiveList = () => {
  localStorage.removeItem('bv3-playground-dev-active-list')
  active.value = []
}

onMounted(() => {
  const activeList = localStorage.getItem('bv3-playground-dev-active-list')
  if (activeList !== null) {
    active.value = JSON.parse(activeList)
  }
})
</script>
